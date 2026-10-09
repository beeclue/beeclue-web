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

// 4. Target the 40 Law Firm IDs
const targetIds = [
  // Batch A: 20 Wix Law Firms (Day 0 sent Oct 3)
  "michael-a-kaplan-attorney-at-law",
  "jeff-andrews-attorney-at-law",
  "schuman-law-office",
  "john-j-bowe-attorney-at-law-pc",
  "law-office-of-denise-m-dalaklis",
  "law-offices-of-wienna-jane-ingraham-pa",
  "richard-d-wall-ps",
  "scott-stalker-law-firm",
  "michael-d-renfro-attorney-at-law",
  "annabel-bazante-law-pllc",
  "law-office-of-warren-m-yanoff",
  "the-law-offices-of-christopher-l-bishop",
  "law-offices-of-stephen-shaiken",
  "knecht-law-plc",
  "goodman-schwartz-shaw-llc",
  "law-office-of-gail-m-lareau",
  "law-office-of-henry-tovmassian",
  "law-office-of-anna-din-pllc",
  "law-office-of-summer-boyd",
  "mark-salerno-family-and-criminal-law",
  // Batch B: 20 Small Town Attorneys (Day 0 sent Oct 5)
  "the-law-office-of-darrin-e-nye",
  "stacy-m-combs-p-c",
  "the-law-office-of-troy-d-green-pllc",
  "the-law-office-of-erin-e-mortenson-pllc",
  "law-office-of-christy-foreman-llc",
  "patricia-l-seifert-attorney-at-law",
  "buytendyk-law-office-llc",
  "todd-e-cheek-law-office-llc",
  "the-law-office-of-caleb-johnson-llc",
  "stephen-j-o-brien-associates-llc",
  "jonathan-d-rosenau-personal-injury-attorney-at-law",
  "pavina-law-llc",
  "alex-de-la-torre-attorney-at-law-pllc",
  "charles-wright-law-pllc",
  "c-jennifer-coble-attorney-at-law-pllc",
  "the-law-office-of-j-thomas-hunn",
  "anthony-c-lawrence-p-c",
  "hildebrand-law-office",
  "sandra-hicks-law-office-llc",
  "lisa-hanna-law-llc"
];

// Helper to determine first name cleanly
function extractFirstName(contactName) {
  if (!contactName) return 'Counsel';
  // Strip suffixes like , Esq., P.C., LLC, etc.
  let cleanName = contactName.replace(/,\s*(Esq\.?|PC|P\.C\.|LLC|PA|PLLC).*$/i, '').trim();
  // Strip parentheses
  cleanName = cleanName.replace(/\(.*?\)/g, '').trim();
  const parts = cleanName.split(/\s+/);
  if (parts.length === 0) return 'Counsel';
  // If first part is initial like "J." or "C." and there is a second part
  if (parts[0].length <= 2 && parts[0].endsWith('.') && parts.length > 1) {
    return parts[1];
  }
  return parts[0];
}

// Helper to build Day 4 follow-up email
function buildFollowupEmail(record) {
  const firstName = extractFirstName(record.contactName || record.contactPerson);
  const firmName = record.firmName || record.businessName;
  const slug = record.id;

  const origHistory = (record.history && record.history[0]) || {};
  const origSubject = record.emailSubject || origHistory.subject || `Google search & AI visibility for ${firmName}`;
  const origResendId = record.resendMessageId || origHistory.resendId || '';

  const subject = origSubject.startsWith('Re:') ? origSubject : `Re: ${origSubject}`;

  const homeUrl = `https://beeclue.com?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-${slug}`;
  const caseStudyUrl = `https://taralattanzio.ca`;

  const text = `Hi ${firstName},

Floating this back up in case my previous note got buried under casework.

We specialize in building modern, high-converting websites for boutique law firms with confidential client intake, sub-second mobile speed, and local legal SEO — with zero upfront build fee ($0 down) on our $19/mo Core plan.

Our offer to build a free 48-hour custom mobile website mockup for ${firmName} is still open, completely free with no obligation.

You can also view a live example of our legal client work here:
${caseStudyUrl}

Would you be open to taking a quick look this week?

Best regards,
Kay
Beeclue Tech
hello@beeclue.com · 647-577-0413
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
      "In-Reply-To": `<${origResendId}>`,
      "References": `<${origResendId}>`
    };
  }

  const payloadStr = JSON.stringify(payload);
  const tempPayloadFile = path.resolve(__dirname, `_temp_lawyers_followup_${Date.now()}_${Math.random().toString(36).substring(7)}.json`);
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main Runner
async function main() {
  const isDryRun = process.argv.includes('--dry-run');
  console.log(`================================================================`);
  console.log(`Starting Day 4 Follow-Up Dispatch for Law Firms`);
  console.log(`Mode: ${isDryRun ? 'DRY-RUN (Simulated)' : 'LIVE DISPATCH'}`);
  console.log(`Target Count: ${targetIds.length}`);
  console.log(`Sender: Kay at Beeclue Tech <hello@beeclue.com>`);
  console.log(`Phone: 647-577-0413 (US Lawyers)`);
  console.log(`Zero-Surname Rule: Strictly enforced`);
  console.log(`================================================================\n`);

  let sentCount = 0;
  let skippedCount = 0;
  const dispatchResults = [];

  for (let i = 0; i < targetIds.length; i++) {
    const id = targetIds[i];
    const record = history.find(h => h.id === id);

    if (!record) {
      console.log(`[SKIP - NOT FOUND] ${id}`);
      skippedCount++;
      continue;
    }

    if (blacklistedEmails.has(record.email.toLowerCase().trim())) {
      console.log(`[SKIP - BLACKLISTED] ${record.firmName} (${record.email})`);
      skippedCount++;
      continue;
    }

    // Check if already received Day 4 follow-up
    const hasFollowup = record.history && record.history.some(h => (h.step || '').includes('Day 4') || (h.step || '').includes('Follow-up'));
    if (hasFollowup) {
      console.log(`[SKIP - ALREADY FOLLOWED UP] ${record.firmName} (${record.email})`);
      skippedCount++;
      continue;
    }

    const { subject, text, origResendId, firstName, firmName, email } = buildFollowupEmail(record);

    if (isDryRun) {
      console.log(`--- [DRY-RUN ${i + 1}/${targetIds.length}] ${firmName} <${email}> ---`);
      console.log(`Salutation: Hi ${firstName},`);
      console.log(`Subject: ${subject}`);
      console.log(`In-Reply-To: <${origResendId}>`);
      console.log(`Body Snippet:\n${text.split('\n').slice(0, 5).join('\n')}\n...\n`);
      sentCount++;
      continue;
    }

    // LIVE SEND
    process.stdout.write(`[${i + 1}/${targetIds.length}] Sending to ${firstName} at ${firmName} (${email})... `);
    const sendResult = sendViaCurl(email, subject, text, origResendId);

    if (sendResult.success) {
      console.log(`SUCCESS! Resend ID: ${sendResult.id}`);
      sentCount++;

      const nowIso = new Date().toISOString();

      // Record in history
      if (!record.history) record.history = [];
      record.history.push({
        step: "Day 4",
        sentAt: nowIso,
        subject: subject,
        resendId: sendResult.id,
        status: "delivered",
        notes: "Threaded Day 4 follow-up sent. Re-offered free 48-hr mockup and highlighted $19/mo Core plan with $0 upfront fee."
      });

      record.lastContactDate = nowIso;
      record.sequenceStep = "Day 4 - Follow-up";
      record.status = "delivered";

      dispatchResults.push({
        id: record.id,
        firmName: firmName,
        contactName: record.contactName || record.contactPerson,
        email: email,
        resendId: sendResult.id,
        timestamp: nowIso,
        status: "delivered"
      });

      // Save history incrementally after each successful send
      fs.writeFileSync(historyPath, JSON.stringify(history, null, 2), 'utf8');

      // Rate limit delay (2.2 seconds)
      await sleep(2200);
    } else {
      console.log(`FAILED! Error: ${sendResult.error}`);
      dispatchResults.push({
        id: record.id,
        firmName: firmName,
        email: email,
        status: "failed",
        error: sendResult.error
      });
    }
  }

  console.log(`\n================================================================`);
  console.log(`Dispatch Complete!`);
  console.log(`Total Targets: ${targetIds.length}`);
  console.log(`Dispatched: ${sentCount}`);
  console.log(`Skipped: ${skippedCount}`);
  console.log(`================================================================\n`);

  if (!isDryRun && dispatchResults.length > 0) {
    const logPath = path.resolve(__dirname, `lawyers_day4_dispatch_log_${Date.now()}.json`);
    fs.writeFileSync(logPath, JSON.stringify(dispatchResults, null, 2), 'utf8');
    console.log(`Audit log written to: ${logPath}`);
  }
}

main().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
