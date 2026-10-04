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

// 4. Filter Eligible Ontario Lawyers for Day 4 Follow-up
const eligibleLeads = history.filter(lead => {
  const em = (lead.email || '').toLowerCase().trim();
  if (blacklistedEmails.has(em)) return false;
  if (["not_interested", "unsubscribed", "closed_won", "replied", "bounced"].includes(lead.status)) return false;
  return lead.sequenceStep === "Day 0 - Initial Outreach" && (lead.location || "").includes("ON");
});

// Helper to extract first name
function extractFirstName(contactName) {
  if (!contactName) return 'Counsel';
  const cleanName = contactName.replace(/\(.*?\)/g, '').trim();
  const parts = cleanName.split(/\s+/);
  if (parts.length === 0) return 'Counsel';
  if (parts[0].length <= 2 && parts[0].endsWith('.') && parts.length > 1) {
    return parts[1];
  }
  return parts[0];
}

// Helper to build Day 4 follow-up email
function buildFollowupEmail(record) {
  const firstName = extractFirstName(record.contactName);
  const firmName = record.firmName;
  const slug = record.id;

  const origHistory = (record.history && record.history[0]) || {};
  const origSubject = origHistory.subject || `A modern web presence for ${firmName}`;
  const origResendId = origHistory.resendId || '';

  const subject = origSubject.startsWith('Re:') ? origSubject : `Re: ${origSubject}`;
  const homeUrl = `https://beeclue.com?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-${slug}`;
  const caseStudyUrl = `https://beeclue.com/case-studies/tara-lattanzio?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-${slug}`;

  const text = `Hi ${firstName},

Floating this back up in case my previous note got buried under casework.

We specialize in building clean, modern, mobile-friendly websites for independent Ontario legal practices with confidential client intake, fast loading, and local Google search optimization — starting at just $19/month with zero upfront build fee ($0 down).

Our offer to prepare a free 48-hour custom mobile website mockup for ${firmName} is still open, completely free with no obligation.

You can see a recent Waterloo Region law practice site we built for Tara Lattanzio here:
https://taralattanzio.ca
(Case Study: ${caseStudyUrl})

Would you be open to taking a quick look this week?

Best regards,

Kay
Beeclue Tech
hello@beeclue.com · 647-947-6253
beeclue.com`;

  return {
    subject,
    text,
    origResendId,
    email: record.email,
    firmName,
    firstName
  };
}

// Transport using curl with browser UA
function sendViaCurl(toEmail, subject, text, origResendId) {
  const payload = {
    from: "Kay at Beeclue Tech <hello@beeclue.com>",
    to: [toEmail],
    subject: subject,
    text: text
  };

  if (origResendId) {
    payload.headers = {
      "In-Reply-To": `<${origResendId}@resend.com>`,
      "References": `<${origResendId}@resend.com>`
    };
  }

  const payloadStr = JSON.stringify(payload);
  const tempPayloadFile = path.resolve(__dirname, `_temp_ontario_day4_${Date.now()}_${Math.random().toString(36).substring(7)}.json`);
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
  console.log(`Starting Ontario Lawyers Day 4 Follow-up Dispatch (Mode: ${isDryRun ? 'DRY-RUN' : 'LIVE'})`);
  console.log(`Total Eligible Leads to Dispatch: ${eligibleLeads.length}`);
  console.log(`======================================================\n`);

  let sentCount = 0;
  let failCount = 0;
  const results = [];

  for (let i = 0; i < eligibleLeads.length; i++) {
    const record = eligibleLeads[i];
    const email = (record.email || '').toLowerCase().trim();

    // Re-verify against blacklist
    if (blacklistedEmails.has(email)) {
      console.log(`[SKIP] Blacklisted: ${record.firmName} <${email}>`);
      continue;
    }

    const emailData = buildFollowupEmail(record);

    console.log(`[${i + 1}/${eligibleLeads.length}] Follow-up to: ${record.firmName} <${email}>`);
    console.log(`    Subject: ${emailData.subject}`);

    if (isDryRun) {
      console.log(`    [DRY-RUN] Simulating send... OK`);
      sentCount++;
      results.push({
        id: record.id,
        firm: record.firmName,
        email: email,
        subject: emailData.subject,
        resendId: 'dry-run-id',
        status: 'simulated'
      });
      continue;
    }

    // Live send
    const sendRes = sendViaCurl(email, emailData.subject, emailData.text, emailData.origResendId);

    if (sendRes.success) {
      console.log(`    -> SUCCESS: Resend ID: ${sendRes.id}`);
      sentCount++;

      const now = new Date().toISOString();

      record.sequenceStep = "Day 4 - Follow-up";
      record.lastContactDate = now;
      record.status = "delivered";

      if (!record.history) record.history = [];
      record.history.push({
        step: "Day 4",
        sentAt: now,
        subject: emailData.subject,
        resendId: sendRes.id,
        status: "delivered",
        notes: "Day 4-5 follow-up sent quoting $19/mo Core plan, Tara Lattanzio proof, and free 48-hr mockup offer."
      });

      saveHistory();

      results.push({
        id: record.id,
        firm: record.firmName,
        email: email,
        subject: emailData.subject,
        resendId: sendRes.id,
        status: 'delivered'
      });
    } else {
      console.error(`    -> FAILED: ${sendRes.error}`);
      failCount++;
      results.push({
        id: record.id,
        firm: record.firmName,
        email: email,
        subject: emailData.subject,
        error: sendRes.error,
        status: 'failed'
      });

      if (sendRes.error && sendRes.error.includes("limit")) {
        console.error("\n[CRITICAL] Daily or monthly quota limit reached! Halting execution.");
        break;
      }
    }

    // Rate-limiting delay (1.8s) between calls
    if (i < eligibleLeads.length - 1 && !isDryRun) {
      await sleep(1800);
    }
  }

  // Write dispatch log
  const logFile = path.resolve(__dirname, `ontario_day4_dispatch_log_${Date.now()}.json`);
  fs.writeFileSync(logFile, JSON.stringify(results, null, 2), 'utf8');

  console.log(`\n======================================================`);
  console.log(`Dispatch Finished.`);
  console.log(`Sent: ${sentCount} | Failed: ${failCount}`);
  console.log(`Log File: ${logFile}`);
  console.log(`======================================================\n`);
}

main().catch(console.error);
