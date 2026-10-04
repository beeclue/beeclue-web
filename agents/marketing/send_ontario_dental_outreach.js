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

// 4. Load Dental Leads File
const leadsPath = path.resolve(__dirname, 'ontario_small_towns_dental_no_website.json');
const rawLeads = JSON.parse(fs.readFileSync(leadsPath, 'utf8'));

// 5. Deduplicate and filter leads
const seenClinics = new Set();
const cleanLeads = [];

rawLeads.forEach(l => {
  const email = (l.email || '').trim().toLowerCase();
  if (!email || !email.includes('@')) return;

  // Exclude blacklisted or already in history
  if (blacklistedEmails.has(email) || historyEmails.has(email)) return;

  // Limit to 1 contact per clinic
  if (seenClinics.has(l.id)) return;
  seenClinics.add(l.id);

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
  const tempPayloadFile = path.resolve(__dirname, `_temp_dental_outreach_${Date.now()}_${Math.random().toString(36).substring(7)}.json`);
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
  console.log(`Starting Ontario Dental Clinics Outreach Dispatch (Mode: ${isDryRun ? 'DRY-RUN' : 'LIVE'})`);
  console.log(`Total Clean Leads to Dispatch: ${cleanLeads.length}`);
  console.log(`======================================================\n`);

  let sentCount = 0;
  let failCount = 0;
  const results = [];

  for (let i = 0; i < cleanLeads.length; i++) {
    const item = cleanLeads[i];
    const email = item.email.toLowerCase().trim();

    // Re-verify against blacklist and history immediately before sending
    if (blacklistedEmails.has(email)) {
      console.log(`[SKIP] Blacklisted: ${item.firm} <${email}>`);
      continue;
    }
    if (historyEmails.has(email)) {
      console.log(`[SKIP] Already contacted: ${item.firm} <${email}>`);
      continue;
    }

    console.log(`[${i + 1}/${cleanLeads.length}] Sending to: ${item.firm} <${item.email}> (${item.town}, ON)`);
    console.log(`    Subject: ${item.subject}`);

    if (isDryRun) {
      console.log(`    [DRY-RUN] Simulating send... OK`);
      sentCount++;
      results.push({
        id: item.id,
        firm: item.firm,
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
        website: "",
        niche: "Dental Clinic / Oral Health",
        location: `${item.town}, ON (${item.address})`,
        pricingQuoted: "$29/month",
        initialContactDate: now,
        lastContactDate: now,
        status: "delivered",
        sequenceStep: "Day 0 - Initial Outreach",
        diagnosedIssues: item.status,
        caseStudySent: item.caseStudyUrl,
        history: [
          {
            step: "Day 0",
            sentAt: now,
            subject: item.subject,
            resendId: sendRes.id,
            status: "delivered",
            notes: "Initial Day 0 outreach sent to Ontario small-town dental clinic with no website, quoting $29/mo Business plan, $0 build fee, and free 48-hr mockup offer."
          }
        ]
      };

      history.push(newRecord);
      historyEmails.add(email);
      saveHistory();

      results.push({
        id: item.id,
        firm: item.firm,
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
        email: item.email,
        subject: item.subject,
        error: sendRes.error,
        status: 'failed'
      });

      // Stop if quota limit is encountered
      if (sendRes.error && sendRes.error.includes("limit")) {
        console.error("\n[CRITICAL] Daily or monthly quota limit reached! Halting execution.");
        break;
      }
    }

    // Rate-limiting delay (1.8s) between calls
    if (i < cleanLeads.length - 1 && !isDryRun) {
      await sleep(1800);
    }
  }

  // Write dispatch log
  const logFile = path.resolve(__dirname, `dental_dispatch_log_${Date.now()}.json`);
  fs.writeFileSync(logFile, JSON.stringify(results, null, 2), 'utf8');

  console.log(`\n======================================================`);
  console.log(`Dispatch Finished.`);
  console.log(`Sent: ${sentCount} | Failed: ${failCount}`);
  console.log(`Log File: ${logFile}`);
  console.log(`======================================================\n`);
}

main().catch(console.error);
