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

// Helper to determine first name cleanly
function extractFirstName(contactName, defaultFallback = 'there') {
  if (!contactName) return defaultFallback;
  let cleanName = contactName.replace(/,\s*(Esq\.?|PC|P\.C\.|LLC|PA|PLLC|RDH|DDS|DMD).*$/i, '').trim();
  cleanName = cleanName.replace(/\(.*?\)/g, '').trim();
  const parts = cleanName.split(/\s+/);
  if (parts.length === 0) return defaultFallback;
  if (parts[0].length <= 2 && parts[0].endsWith('.') && parts.length > 1) {
    return parts[1];
  }
  return parts[0];
}

// Helper to check Canadian location
function isCanadian(record) {
  const loc = (record.location || '').toLowerCase();
  const city = (record.city || '').toLowerCase();
  const state = (record.state || '').toLowerCase();
  const email = (record.email || '').toLowerCase();
  return (
    loc.includes('canada') ||
    loc.includes(', on') ||
    loc.includes('ontario') ||
    state === 'on' ||
    email.endsWith('.ca') ||
    email.includes('bellnet.ca') ||
    email.includes('sympatico.ca') ||
    email.includes('execulink.com') ||
    email.includes('cogeco.ca') ||
    email.includes('rogers.com')
  );
}

// Helper to build Breakaway Email
function buildBreakawayEmail(record) {
  const firmName = record.firmName || record.businessName || 'your business';
  const firstName = extractFirstName(record.contactName || record.recipientName, 'there');
  const slug = record.id || (firmName.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-'));

  const canadian = isCanadian(record);
  const phone = canadian ? '647-947-6253' : '647-577-0413';

  // Find references and previous IDs
  const historyList = record.history || [];
  const origItem = historyList[0] || {};
  const lastItem = historyList[historyList.length - 1] || {};

  const origSubject = record.emailSubject || origItem.subject || `Website for ${firmName}`;
  const subject = origSubject.startsWith('Re:') ? origSubject : `Re: ${origSubject}`;

  const lastResendId = lastItem.resendId || origItem.resendId || record.resendMessageId || '';
  const origResendId = origItem.resendId || record.resendMessageId || '';

  const homeUrl = `https://beeclue.com?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-${slug}`;
  const isFraming = (record.niche && record.niche.toLowerCase().includes('framing')) || (record.category && record.category.toLowerCase().includes('gallery'));
  const caseStudyUrl = isFraming
    ? `https://beeclue.com/case-studies/tuxedo-frame-gallery?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-${slug}`
    : `https://taralattanzio.ca`;

  const text = `Hi ${firstName},

Following up one final time regarding the website for ${firmName}.

I know you have a demanding schedule, so I'll assume modernizing your web presence and client intake isn't a priority right now, and I won't follow up again.

If you ever decide to revisit your website, improve mobile lead capture, or see what a modern high-speed site looks like ($0 upfront build fee, from $19–$29/mo), our offer to put together a free 48-hour mockup is always open:
${homeUrl}

Wishing you and your team continued success.

Best regards,
Kay
Beeclue Tech
hello@beeclue.com · ${phone}
beeclue.com`;

  return {
    subject,
    text,
    to: record.email,
    origResendId,
    lastResendId,
    firmName,
    firstName,
    phone
  };
}

// Transport using curl with browser UA
function sendViaCurl(toEmail, subject, text, lastResendId, origResendId) {
  const payload = {
    from: "Kay at Beeclue Tech <hello@beeclue.com>",
    to: [toEmail],
    subject: subject,
    text: text
  };

  if (lastResendId) {
    const references = (origResendId && origResendId !== lastResendId)
      ? `<${origResendId}> <${lastResendId}>`
      : `<${lastResendId}>`;

    payload.headers = {
      "In-Reply-To": `<${lastResendId}>`,
      "References": references
    };
  }

  const payloadStr = JSON.stringify(payload);
  const tempPayloadFile = path.resolve(__dirname, `_temp_breakaway_${Date.now()}_${Math.random().toString(36).substring(7)}.json`);
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

  let limit = Infinity;
  const limitIdx = process.argv.indexOf('--limit');
  if (limitIdx !== -1 && process.argv[limitIdx + 1]) {
    limit = parseInt(process.argv[limitIdx + 1], 10);
  }

  const now = new Date("2026-10-10T18:27:19-04:00");

  // Filter eligible contacts
  const eligible = history.filter(h => {
    const email = (h.email || '').toLowerCase().trim();
    if (!email || !email.includes('@')) return false;
    if (blacklistedEmails.has(email) || h.status === 'blacklisted' || h.status === 'not_interested') return false;
    if (h.sequenceStep !== 'Day 4 - Follow-up') return false;
    if (h.history && h.history.some(item => item.step === 'Final' || item.step === 'Day 8' || item.step === 'Day 10')) return false;

    const lastDateStr = h.lastContactDate || (h.history && h.history[h.history.length - 1] && h.history[h.history.length - 1].sentAt);
    if (!lastDateStr) return false;
    const lastDate = new Date(lastDateStr);
    const diffDays = (now - lastDate) / (1000 * 60 * 60 * 24);
    return diffDays >= 3.5; // At least 3.5 days since Day 4 follow-up
  });

  const targets = eligible.slice(0, limit);

  console.log(`\n======================================================`);
  console.log(`Starting Final Breakaway Dispatch (Mode: ${isDryRun ? 'DRY-RUN' : 'LIVE'})`);
  console.log(`Total Eligible: ${eligible.length} | Target Count: ${targets.length}`);
  console.log(`Sender: Kay at Beeclue Tech <hello@beeclue.com>`);
  console.log(`Zero-Surname Rule: Strictly enforced`);
  console.log(`======================================================\n`);

  let sentCount = 0;
  let skippedCount = 0;
  let failedCount = 0;
  const results = [];

  for (let i = 0; i < targets.length; i++) {
    const record = targets[i];
    const emailLower = (record.email || '').toLowerCase().trim();

    if (blacklistedEmails.has(emailLower)) {
      console.log(`[SKIP - BLACKLISTED] ${record.firmName || record.businessName} (${record.email})`);
      skippedCount++;
      continue;
    }

    if (record.sequenceStep === 'Final Breakaway' || (record.history && record.history.some(h => h.step === 'Final'))) {
      console.log(`[SKIP - ALREADY BREAKAWAY] ${record.firmName || record.businessName} (${record.email})`);
      skippedCount++;
      continue;
    }

    const emailData = buildBreakawayEmail(record);

    if (isDryRun) {
      console.log(`--- [DRY-RUN ${i + 1}/${targets.length}] ${emailData.firmName} <${emailData.to}> ---`);
      console.log(`    Salutation: Hi ${emailData.firstName},`);
      console.log(`    Subject: ${emailData.subject}`);
      console.log(`    In-Reply-To: ${emailData.lastResendId || 'none'}`);
      console.log(`    Phone: ${emailData.phone}`);
      console.log(`    Snippet:\n${emailData.text.split('\n').slice(0, 4).join('\n')}\n...\n`);
      sentCount++;
      results.push({
        firmName: emailData.firmName,
        email: emailData.to,
        subject: emailData.subject,
        resendId: 'dry-run-id',
        status: 'simulated'
      });
      continue;
    }

    // Live send
    process.stdout.write(`[${i + 1}/${targets.length}] Sending Final Breakaway to: ${emailData.firmName} <${emailData.to}>... `);
    const sendRes = sendViaCurl(
      emailData.to,
      emailData.subject,
      emailData.text,
      emailData.lastResendId,
      emailData.origResendId
    );

    if (sendRes.success) {
      console.log(`SUCCESS! Resend ID: ${sendRes.id}`);
      sentCount++;

      const timestamp = new Date().toISOString();
      if (!record.history) record.history = [];
      record.history.push({
        step: "Final",
        sentAt: timestamp,
        subject: emailData.subject,
        resendId: sendRes.id,
        status: "delivered",
        notes: "Final Breakaway / permission to close file email sent."
      });

      record.sequenceStep = "Final Breakaway";
      record.lastContactDate = timestamp;
      record.status = "delivered";

      saveHistory();

      results.push({
        id: record.id,
        firmName: emailData.firmName,
        email: emailData.to,
        subject: emailData.subject,
        resendId: sendRes.id,
        status: 'delivered'
      });
    } else {
      console.log(`FAILED! Error: ${sendRes.error}`);
      failedCount++;
      results.push({
        id: record.id,
        firmName: emailData.firmName,
        email: emailData.to,
        subject: emailData.subject,
        error: sendRes.error,
        status: 'failed'
      });
    }

    // 2200ms delay between emails
    await sleep(2200);
  }

  console.log(`\n======================================================`);
  console.log(`Dispatch Summary: Sent: ${sentCount}, Skipped: ${skippedCount}, Failed: ${failedCount}, Total: ${targets.length}`);
  console.log(`======================================================\n`);

  if (!isDryRun && results.length > 0) {
    const logPath = path.resolve(__dirname, `final_breakaway_dispatch_log_${Date.now()}.json`);
    fs.writeFileSync(logPath, JSON.stringify(results, null, 2), 'utf8');
    console.log(`Audit log written to: ${logPath}`);
  }
}

main().catch(err => {
  console.error("FATAL ERROR in main:", err);
  process.exit(1);
});
