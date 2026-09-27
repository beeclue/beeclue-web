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

// 4. Target 29 Law Firms
const targetIds = [
  "steve-barnstead-law",
  "cooper-pautz-weiermiller",
  "keyser-maloney-winner",
  "scott-bush-law",
  "meyer-meyer-law",
  "john-rashak-law",
  "gilchrist-law-firm",
  "peter-willis-law",
  "frank-policelli-law",
  "joseph-saba-law",
  "poulin-law-office",
  "rossi-law-office",
  "michael-albanese-law",
  "aaron-dean-law",
  "eric-firkel-law",
  "gregory-germain-law",
  "calabrese-law-pllc",
  "seaman-seaman-law",
  "champagne-law-firm",
  "nash-palm-law",
  "donald-gerace-law",
  "angelo-scaturro-law",
  "hurwitz-law-office",
  "courtney-radick-law",
  "thomas-wasmund-law",
  "schmidt-law-firm",
  "levy-stieh-gaughan",
  "george-daggett-law",
  "blondin-shea-law"
];

// Helper to determine first name
function extractFirstName(contactName) {
  if (!contactName) return 'Counsel';
  // Strip titles in parentheses
  const cleanName = contactName.replace(/\(.*?\)/g, '').trim();
  const parts = cleanName.split(/\s+/);
  if (parts.length === 0) return 'Counsel';
  if (parts[0].length === 2 && parts[0].endsWith('.') && parts.length > 1) {
    // E.g. "J. Thomas" -> "Thomas"
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
  const origSubject = origHistory.subject || `Modernizing the website for ${firmName}`;
  const origResendId = origHistory.resendId || '';

  const subject = origSubject.startsWith('Re:') ? origSubject : `Re: ${origSubject}`;

  const homeUrl = `https://beeclue.com?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-${slug}`;
  const caseStudyUrl = `https://beeclue.com/case-studies/tara-lattanzio?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-${slug}`;

  const text = `Hi ${firstName},

Floating this back up in case my previous note got buried under casework.

We specialize in building modern, high-converting websites for boutique law firms with confidential client intake, mobile speed, and local legal SEO — with zero upfront build fee ($0 down).

Our offer to build a free 48-hour custom mobile website mockup for ${firmName} is still open, completely free with no obligation.

Would you be open to taking a quick look this week?

Best regards,
Kay
Beeclue Tech
${homeUrl} · 647-577-0413
Case Study: ${caseStudyUrl}`;

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
  const tempPayloadFile = path.resolve(__dirname, `_temp_law_followup_${Date.now()}.json`);
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

// Main Runner
async function main() {
  const isDryRun = process.argv.includes('--dry-run');
  console.log(`Starting Day 4 Follow-Up Dispatch for Law Firms (Mode: ${isDryRun ? 'DRY-RUN' : 'LIVE'})...\n`);

  let sentCount = 0;
  let skippedCount = 0;

  for (let i = 0; i < targetIds.length; i++) {
    const id = targetIds[i];
    const record = history.find(h => h.id === id);

    if (!record) {
      console.log(`[SKIP - RECORD NOT FOUND] ${id}`);
      skippedCount++;
      continue;
    }

    if (blacklistedEmails.has(record.email.toLowerCase())) {
      console.log(`[SKIP - BLACKLISTED] ${record.firmName} (${record.email})`);
      skippedCount++;
      continue;
    }

    // Check if already received Day 4 follow-up
    const hasFollowup = record.history && record.history.some(h => h.step === "Day 4" || h.step === "Day 4-5");
    if (hasFollowup) {
      console.log(`[SKIP - ALREADY FOLLOWED UP] ${record.firmName} (${record.email})`);
      skippedCount++;
      continue;
    }

    const { subject, text, origResendId, firstName } = buildFollowupEmail(record);

    if (isDryRun) {
      console.log(`--- [DRY-RUN ${i + 1}/${targetIds.length}] ${record.firmName} <${record.email}> ---`);
      console.log(`To: ${record.email}`);
      console.log(`Subject: ${subject}`);
      console.log(`Thread In-Reply-To: <${origResendId}>`);
      console.log(`Greeting: Hi ${firstName},`);
      console.log(text);
      console.log('--------------------------------------------------\n');
      sentCount++;
      continue;
    }

    console.log(`[SENDING ${i + 1}/${targetIds.length}] ${record.firmName} -> ${record.email} (In-Reply-To: ${origResendId})...`);
    const result = sendViaCurl(record.email, subject, text, origResendId);

    if (result.success) {
      console.log(`✓ Delivered! Resend ID: ${result.id}`);
      sentCount++;

      const now = new Date().toISOString();
      record.lastContactDate = now;
      record.status = "delivered";
      record.sequenceStep = "Day 4 - Follow-up";

      if (!record.history) record.history = [];
      record.history.push({
        step: "Day 4",
        sentAt: now,
        subject: subject,
        resendId: result.id,
        status: "delivered",
        notes: "Threaded Day 4 follow-up on custom website mockup preview offer."
      });

      // Save history after each send for crash resilience
      fs.writeFileSync(historyPath, JSON.stringify(history, null, 2), 'utf8');

      // Rate limit delay: 2.0s
      execSync('sleep 2');
    } else {
      console.error(`✗ Failed to send to ${record.email}: ${result.error}`);
    }
  }

  console.log(`\n========================================`);
  console.log(`Day 4 Dispatch Summary: Sent: ${sentCount}, Skipped: ${skippedCount}, Total Targets: ${targetIds.length}`);
  console.log(`========================================`);
}

main().catch(console.error);
