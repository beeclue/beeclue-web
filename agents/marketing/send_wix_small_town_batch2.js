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
  blacklist.map(b => (typeof b === 'string' ? b.toLowerCase().trim() : (b.email || '').toLowerCase().trim()))
);

// 3. Load Outreach History
const historyPath = path.resolve(__dirname, 'outreach_history.json');
let history = [];
if (fs.existsSync(historyPath)) {
  history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
}
const historyEmails = new Set(history.map(h => (h.email || '').toLowerCase().trim()));

// 4. Load Leads
const leadsPath = path.resolve(__dirname, 'wix_small_town_lawyers_batch2.json');
const rawLeads = JSON.parse(fs.readFileSync(leadsPath, 'utf8'));

// 5. Deduplicate and filter leads
const seenFirms = new Set();
const cleanLeads = [];

rawLeads.forEach(l => {
  const email = (l.email || '').trim().toLowerCase();
  if (!email || !email.includes('@')) return;

  // Exclude generic mailboxes
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
  if (seenFirms.has(l.id)) return;
  seenFirms.add(l.id);

  cleanLeads.push(l);
});

// Transport using curl with browser UA
function sendViaCurl(toEmail, subject, text) {
  const payload = {
    from: "Kay at Beeclue Tech <hello@beeclue.com>",
    to: [toEmail],
    subject: subject,
    text: text
  };

  const payloadStr = JSON.stringify(payload);
  const tempPayloadFile = path.resolve(__dirname, `_temp_wix_batch2_${Date.now()}_${Math.random().toString(36).substring(7)}.json`);
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
  console.log(`Starting Wix Small Town Lawyers Outreach Batch 2 (Mode: ${isDryRun ? 'DRY-RUN' : 'LIVE'})`);
  console.log(`Total Clean Leads to Dispatch: ${cleanLeads.length}`);
  console.log(`======================================================\n`);

  let sentCount = 0;
  let failCount = 0;
  const results = [];

  for (let i = 0; i < cleanLeads.length; i++) {
    const item = cleanLeads[i];

    // Re-verify against blacklist and history immediately before sending
    if (blacklistedEmails.has(item.email.toLowerCase().trim())) {
      console.log(`[SKIP] Blacklisted: ${item.email}`);
      continue;
    }
    if (historyEmails.has(item.email.toLowerCase().trim())) {
      console.log(`[SKIP] Already contacted: ${item.email}`);
      continue;
    }

    console.log(`[${i + 1}/${cleanLeads.length}] Sending to: ${item.name} | ${item.firm} <${item.email}> (${item.town}, ${item.state})`);
    console.log(`    Subject: ${item.subject}`);

    if (isDryRun) {
      console.log(`    [DRY-RUN] Simulating send... OK`);
      sentCount++;
      results.push({
        id: item.id,
        firm: item.firm,
        name: item.name,
        email: item.email,
        subject: item.subject,
        resendId: 'dry-run-id',
        status: 'simulated'
      });
      continue;
    }

    // Live send
    const sendRes = sendViaCurl(item.email, item.subject, item.emailDraft);

    if (sendRes.success) {
      console.log(`    -> SUCCESS: Resend ID: ${sendRes.id}`);
      sentCount++;

      const now = new Date().toISOString();

      const newRecord = {
        id: item.id,
        firmName: item.firm,
        contactName: item.name,
        email: item.email,
        website: item.website,
        niche: item.practiceAreas,
        location: `${item.town}, ${item.state} (${item.address})`,
        pricingQuoted: "$19/month",
        initialContactDate: now,
        lastContactDate: now,
        status: "delivered",
        sequenceStep: "Day 0 - Initial Outreach",
        diagnosedIssues: item.diagnosedIssues || "Wix platform overhead hurting mobile speed and lacking structured schema for AI conversational search engines (ChatGPT, Perplexity)",
        caseStudySent: item.caseStudyUrl,
        history: [
          {
            step: "Day 0",
            sentAt: now,
            subject: item.subject,
            resendId: sendRes.id,
            status: "delivered",
            notes: "Wix small town lawyer outreach focused on Google local search speed, AI search engine citations (GEO), $19/mo Core plan, and free 48-hr mobile mockup."
          }
        ]
      };

      history.push(newRecord);
      historyEmails.add(item.email.toLowerCase().trim());
      saveHistory();

      results.push({
        id: item.id,
        firm: item.firm,
        name: item.name,
        email: item.email,
        subject: item.subject,
        resendId: sendRes.id,
        status: 'delivered'
      });
    } else {
      console.error(`    -> FAILED: ${sendRes.error}`);
      failCount++;
      results.push({
        id: item.id,
        firm: item.firm,
        name: item.name,
        email: item.email,
        subject: item.subject,
        error: sendRes.error,
        status: 'failed'
      });

      // Stop if quota limit is encountered
      if (sendRes.error && sendRes.error.includes("limit")) {
        console.error("\n[CRITICAL] Quota limit reached! Halting execution.");
        break;
      }
    }

    // Rate-limiting delay (2.2s) between calls
    if (i < cleanLeads.length - 1 && !isDryRun) {
      await sleep(2200);
    }
  }

  // Write dispatch log
  const logFile = path.resolve(__dirname, `wix_small_town_batch2_dispatch_log_${Date.now()}.json`);
  fs.writeFileSync(logFile, JSON.stringify(results, null, 2), 'utf8');

  console.log(`\n======================================================`);
  console.log(`Dispatch Finished.`);
  console.log(`Sent: ${sentCount} | Failed: ${failCount}`);
  console.log(`Log File: ${logFile}`);
  console.log(`======================================================\n`);
}

main().catch(console.error);
