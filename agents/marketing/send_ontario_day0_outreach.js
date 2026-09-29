const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Read API Key from .env
const envPath = path.resolve(__dirname, '../../.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const apiKeyMatch = envContent.match(/RESEND_API_KEY=(.+)/);
if (!apiKeyMatch) {
  console.error("ERROR: RESEND_API_KEY not found in .env");
  process.exit(1);
}
const RESEND_API_KEY = apiKeyMatch[1].trim();

// 2. Read Blacklist
const blacklistPath = path.resolve(__dirname, 'blacklist.json');
let blacklist = [];
if (fs.existsSync(blacklistPath)) {
  blacklist = JSON.parse(fs.readFileSync(blacklistPath, 'utf8'));
}
const blacklistedEmails = new Set(
  blacklist.map(b => (typeof b === 'string' ? b.toLowerCase() : (b.email || '').toLowerCase()))
);

// 3. Load Outreach History
const historyPath = path.resolve(__dirname, 'outreach_history.json');
let history = [];
if (fs.existsSync(historyPath)) {
  history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
}
const historyEmails = new Set(history.map(h => (h.email || '').toLowerCase()));

// 4. Load Leads File
const leadsPath = path.resolve(__dirname, 'ontario_small_towns_lawyers_no_website.json');
const rawLeads = JSON.parse(fs.readFileSync(leadsPath, 'utf8'));

// Helper to slugify
function slugify(text) {
  return text.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// 5. Deduplicate and filter leads
const seenFirms = new Set();
const cleanLeads = [];

rawLeads.forEach(l => {
  const email = (l.email || '').trim().toLowerCase();
  if (!email || !email.includes('@')) return;
  
  // Exclude generic mailboxes per guidelines
  if (
    email.startsWith('info@') ||
    email.startsWith('admin@') ||
    email.startsWith('contact@') ||
    email.startsWith('office@') ||
    email.startsWith('reception@')
  ) {
    return;
  }
  
  // Exclude blacklisted or already in history
  if (blacklistedEmails.has(email) || historyEmails.has(email)) return;
  
  // Limit to 1 contact per firm
  const firmSlug = slugify(l.firm);
  if (seenFirms.has(firmSlug)) return;
  seenFirms.add(firmSlug);
  
  cleanLeads.push({
    ...l,
    slug: firmSlug
  });
});

// Helper to construct Day 0 Email
function buildEmail(lead) {
  const slug = lead.slug;
  const firstName = lead.firstName || 'Counsel';
  const firm = lead.firm;
  const town = lead.town;
  const practiceAreas = lead.practiceAreas || 'Legal Services';

  const subject = `A modern web presence for ${firm}`;
  const homeUrl = `https://beeclue.com?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-${slug}`;
  const caseStudyUrl = `https://beeclue.com/case-studies/tara-lattanzio?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-${slug}`;

  const text = `Hi ${firstName},

I came across ${firm} in ${town} while researching trusted legal practices across Southwestern Ontario.

I noticed that when prospective clients search for your practice locally, you don't currently have an official website linked to your listing, routing inquiries through your direct line.

In today's legal market, prospective clients and referral partners search online first to verify credentials, view practice areas (${practiceAreas}), and request a consultation from their phone.

At Beeclue Tech, we specialize in building fast, secure, mobile-friendly websites for independent Ontario legal practices with confidential client intake, practice area overviews, and local Google search optimization — starting at just $19/month with $0 upfront build fee.

For local context, you can see a recent Waterloo Region law practice site we built for Tara Lattanzio:
https://taralattanzio.ca
(Case Study: ${caseStudyUrl})

To show you exactly what an official web presence for ${firm} could look like, we’d love to prepare a free 48-hour custom mobile website mockup for your review — completely free with zero obligation.

Would you be open to taking a quick look later this week?

Best regards,
Kay
Beeclue Tech
${homeUrl} · 647-947-6253
Case Study: ${caseStudyUrl}`;

  return {
    subject,
    text,
    to: lead.email,
    slug,
    firm,
    firstName,
    town,
    lead
  };
}

// Transport using curl with browser UA
function sendViaCurl(toEmail, subject, text) {
  const payload = {
    from: "Kay at Beeclue Tech <hello@beeclue.com>",
    to: [toEmail],
    subject: subject,
    text: text
  };

  const payloadStr = JSON.stringify(payload);
  const tempPayloadFile = path.resolve(__dirname, `_temp_ontario_day0_${Date.now()}_${Math.random().toString(36).substring(7)}.json`);
  fs.writeFileSync(tempPayloadFile, payloadStr, 'utf8');

  try {
    const cmd = `curl -s -X POST https://api.resend.com/emails ` +
      `-H "Authorization: Bearer ${RESEND_API_KEY}" ` +
      `-H "Content-Type: application/json" ` +
      `-A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" ` +
      `-d @"${tempPayloadFile}"`;

    const stdout = execSync(cmd, { timeout: 30000 }).toString();
    if (fs.existsSync(tempPayloadFile)) fs.unlinkSync(tempPayloadFile);

    const res = JSON.parse(stdout);
    if (res.id) {
      return { success: true, id: res.id };
    } else {
      return { success: false, error: stdout };
    }
  } catch (err) {
    if (fs.existsSync(tempPayloadFile)) fs.unlinkSync(tempPayloadFile);
    return { success: false, error: err.message };
  }
}

// Helper to save outreach history
function saveHistory() {
  fs.writeFileSync(historyPath, JSON.stringify(history, null, 2), 'utf8');
}

// Sleep helper
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main Execution
async function main() {
  const isDryRun = process.argv.includes('--dry-run');
  console.log(`\n======================================================`);
  console.log(`Starting Ontario Lawyers Day 0 Dispatch (Mode: ${isDryRun ? 'DRY-RUN' : 'LIVE'})`);
  console.log(`Total Clean Leads to Dispatch: ${cleanLeads.length}`);
  console.log(`======================================================\n`);

  let sentCount = 0;
  let skippedCount = 0;
  let failedCount = 0;
  const results = [];

  for (let i = 0; i < cleanLeads.length; i++) {
    const item = cleanLeads[i];
    const emailLower = item.email.toLowerCase();

    // Check Blacklist
    if (blacklistedEmails.has(emailLower)) {
      console.log(`[SKIP - BLACKLISTED] ${item.firm} (${item.email})`);
      skippedCount++;
      continue;
    }

    // Check already in history
    if (history.some(h => (h.email || '').toLowerCase() === emailLower)) {
      console.log(`[SKIP - ALREADY CONTACTED] ${item.firm} (${item.email})`);
      skippedCount++;
      continue;
    }

    const emailData = buildEmail(item);

    console.log(`[${i + 1}/${cleanLeads.length}] Sending to: ${item.firm} <${item.email}> (${item.town}, ON)`);
    console.log(`    Subject: ${emailData.subject}`);

    if (isDryRun) {
      console.log(`    [DRY-RUN] Simulating send... OK`);
      sentCount++;
      results.push({
        id: item.slug,
        firm: item.firm,
        email: item.email,
        subject: emailData.subject,
        resendId: 'dry-run-id',
        status: 'simulated'
      });
      continue;
    }

    // Live send
    const sendRes = sendViaCurl(emailData.to, emailData.subject, emailData.text);

    if (sendRes.success) {
      console.log(`    -> SUCCESS: Resend ID: ${sendRes.id}`);
      sentCount++;

      const now = new Date().toISOString();
      const caseStudyUrl = `https://beeclue.com/case-studies/tara-lattanzio?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-${item.slug}`;

      const newRecord = {
        id: item.slug,
        firmName: item.firm,
        contactName: `${item.name} (${item.firm.includes('Barrister') ? 'Barrister & Solicitor' : 'Principal / Owner'})`,
        email: item.email,
        website: "",
        niche: item.practiceAreas,
        location: `${item.town}, ON (${item.address})`,
        pricingQuoted: "$19/month",
        initialContactDate: now,
        lastContactDate: now,
        status: "delivered",
        sequenceStep: "Day 0 - Initial Outreach",
        diagnosedIssues: item.status || "No active website (Google Maps profile only, uses Bellnet/Rogers email)",
        caseStudySent: caseStudyUrl,
        history: [
          {
            step: "Day 0",
            sentAt: now,
            subject: emailData.subject,
            resendId: sendRes.id,
            status: "delivered",
            notes: "Initial Day 0 outreach sent to Ontario law practice with no website, quoting $19/mo Core plan, Tara Lattanzio proof, and free mockup offer."
          }
        ]
      };

      history.push(newRecord);
      saveHistory();

      results.push({
        id: item.slug,
        firm: item.firm,
        email: item.email,
        subject: emailData.subject,
        resendId: sendRes.id,
        status: 'delivered'
      });
    } else {
      console.error(`    -> FAILED: ${sendRes.error}`);
      failedCount++;
      results.push({
        id: item.slug,
        firm: item.firm,
        email: item.email,
        subject: emailData.subject,
        error: sendRes.error,
        status: 'failed'
      });
    }

    // 2000ms delay between emails
    await sleep(2000);
  }

  console.log(`\n======================================================`);
  console.log(`Dispatch Summary: Sent: ${sentCount}, Skipped: ${skippedCount}, Failed: ${failedCount}, Total: ${cleanLeads.length}`);
  console.log(`======================================================\n`);

  if (!isDryRun && results.length > 0) {
    fs.writeFileSync(
      path.resolve(__dirname, `ontario_day0_dispatch_log_${Date.now()}.json`),
      JSON.stringify(results, null, 2),
      'utf8'
    );
  }
}

main().catch(err => {
  console.error("FATAL ERROR in main:", err);
  process.exit(1);
});
