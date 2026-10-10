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

// 4. Target 20 Ontario Dental Clinics (Day 0 sent Oct 4)
const targetIds = [
  'dr-william-janushewski-simcoe',
  'dr-michael-ostapchuk-port-dover',
  'dr-tyson-mailman-ingersoll',
  'dr-jacob-mursic-cobourg',
  'dr-christopher-pearce-huntsville',
  'dr-marcia-little-kenora',
  'dr-cary-gillies-atikokan',
  'dr-farhan-rizvi-sioux-lookout',
  'dr-mary-cross-duchene-gore-bay',
  'lise-morin-martel-chapleau',
  'dr-robert-brissette-wheatley',
  'nicole-lacroix-morin-hearst',
  'tasha-reddom-frankford',
  'christine-greene-mallorytown',
  'michelle-oneill-ayr',
  'roma-czech-midland',
  'sophie-freeman-thessalon',
  'caroline-filson-denfield',
  'pamela-jackson-brights-grove',
  'gwen-johnson-belleville'
];

// Helper to extract clean salutation
function extractSalutation(contactName) {
  if (!contactName) return 'there';
  const cleanName = contactName.replace(/,\s*(RDH|DDS|DMD).*$/i, '').trim();
  const parts = cleanName.split(/\s+/);
  if (parts.length === 0) return 'there';
  // If starts with "Dr." return "Dr. LastName"
  if (parts[0].toLowerCase().startsWith('dr')) {
    if (parts.length >= 2) return `${parts[0]} ${parts[parts.length - 1]}`;
    return parts[0];
  }
  return parts[0];
}

// Build Dental Follow-up Email
function buildDentalFollowup(record) {
  const salutation = extractSalutation(record.contactName || record.contactPerson);
  const clinicName = record.firmName || record.businessName;
  const slug = record.id;

  const origHistory = (record.history && record.history[0]) || {};
  const origSubject = record.emailSubject || origHistory.subject || `Website preview for ${clinicName}`;
  const origResendId = record.resendMessageId || origHistory.resendId || '';

  const subject = origSubject.startsWith('Re:') ? origSubject : `Re: ${origSubject}`;
  const landingUrl = `https://beeclue.com/web-design-for-dental-clinics?utm_source=beeclue&utm_medium=email&utm_campaign=sales-outreach-${slug}`;

  const text = `Hi ${salutation},

Floating this back up in case my previous note got buried between patient appointments.

We specialize in high-converting, modern websites for Ontario dental and dental hygiene practices with direct online patient booking, mobile-first design, and local Google Map optimization — with zero upfront build fee ($0 down) on our $29/mo Business tier.

Our offer to prepare a free 48-hour custom website mockup for ${clinicName} is still open, completely complimentary with no obligation.

You can also view our dental web design overview and features here:
${landingUrl}

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
    clinicName,
    salutation
  };
}

// Transport using curl
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
  const tempPayloadFile = path.resolve(__dirname, `_temp_dental_followup_${Date.now()}_${Math.random().toString(36).substring(7)}.json`);
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
  console.log(`Starting Day 4 Follow-Up Dispatch for Ontario Dental Practices`);
  console.log(`Mode: ${isDryRun ? 'DRY-RUN (Simulated)' : 'LIVE DISPATCH'}`);
  console.log(`Target Count: ${targetIds.length}`);
  console.log(`Sender: Kay at Beeclue Tech <hello@beeclue.com>`);
  console.log(`Phone: 647-947-6253 (Ontario)`);
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

    const hasFollowup = record.history && record.history.some(h => (h.step || '').includes('Day 4') || (h.step || '').includes('Follow-up'));
    if (hasFollowup) {
      console.log(`[SKIP - ALREADY FOLLOWED UP] ${record.firmName} (${record.email})`);
      skippedCount++;
      continue;
    }

    const { subject, text, origResendId, salutation, clinicName, email } = buildDentalFollowup(record);

    if (isDryRun) {
      console.log(`--- [DRY-RUN ${i + 1}/${targetIds.length}] ${clinicName} <${email}> ---`);
      console.log(`Salutation: Hi ${salutation},`);
      console.log(`Subject: ${subject}`);
      console.log(`In-Reply-To: <${origResendId}>`);
      console.log(`Body Snippet:\n${text.split('\n').slice(0, 5).join('\n')}\n...\n`);
      sentCount++;
      continue;
    }

    // LIVE SEND
    process.stdout.write(`[${i + 1}/${targetIds.length}] Sending to ${salutation} at ${clinicName} (${email})... `);
    const sendResult = sendViaCurl(email, subject, text, origResendId);

    if (sendResult.success) {
      console.log(`SUCCESS! Resend ID: ${sendResult.id}`);
      sentCount++;

      const nowIso = new Date().toISOString();

      if (!record.history) record.history = [];
      record.history.push({
        step: "Day 4",
        sentAt: nowIso,
        subject: subject,
        resendId: sendResult.id,
        status: "delivered",
        notes: "Threaded Day 4 follow-up sent. Re-offered free 48-hr dental mockup and highlighted $29/mo Business plan with $0 upfront fee."
      });

      record.lastContactDate = nowIso;
      record.sequenceStep = "Day 4 - Follow-up";
      record.status = "delivered";

      dispatchResults.push({
        id: record.id,
        firmName: clinicName,
        contactName: record.contactName || record.contactPerson,
        email: email,
        resendId: sendResult.id,
        timestamp: nowIso,
        status: "delivered"
      });

      fs.writeFileSync(historyPath, JSON.stringify(history, null, 2), 'utf8');
      await sleep(2200);
    } else {
      console.log(`FAILED! Error: ${sendResult.error}`);
      dispatchResults.push({
        id: record.id,
        firmName: clinicName,
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
    const logPath = path.resolve(__dirname, `dental_day4_dispatch_log_${Date.now()}.json`);
    fs.writeFileSync(logPath, JSON.stringify(dispatchResults, null, 2), 'utf8');
    console.log(`Audit log written to: ${logPath}`);
  }
}

main().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
