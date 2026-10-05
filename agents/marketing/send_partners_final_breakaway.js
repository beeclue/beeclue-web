const fs = require('fs');
const path = require('path');
const https = require('https');

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

// 4. Partner Slugs to Target
const partnerSlugs = [
  'the-systems-witch',
  'keizer-virtual-solutions',
  'the-virtual-solution',
  'teresa-passey-virtual-solutions',
  'northland-fractional',
  'john-gauch-operating-partner',
  'ae-operations-consulting',
  'xny-agency',
  'straza-consulting',
  'swim-operations',
  'business-success-consulting-group',
  'camilla-bignell-consulting',
  'anchor-and-joy-consulting',
  'healthy-business-manager',
  'blue-monarch-management',
  'garfinkle-growth-partners',
  'robert-gilbreath-consulting',
  'denver-fractional-coo',
  'the-champagne-collective'
];

function extractFirstName(contactName, defaultFallback = 'there') {
  if (!contactName) return defaultFallback;
  const cleanName = contactName.replace(/\(.*?\)/g, '').trim();
  const parts = cleanName.split(/\s+/);
  if (parts.length === 0) return defaultFallback;
  if (parts[0].length === 2 && parts[0].endsWith('.') && parts.length > 1) {
    return parts[1];
  }
  return parts[0];
}

function isCanadian(loc) {
  if (!loc) return false;
  return (
    loc.includes('Canada') ||
    loc.includes(', ON') ||
    loc.includes(', BC') ||
    loc.includes(', AB') ||
    loc.includes(', QC') ||
    loc.includes(', NS') ||
    loc.includes(', MB') ||
    loc.includes(', SK')
  );
}

// Helper to build Partner Final Breakaway Email
function buildPartnerFinalBreakaway(record) {
  const firstName = extractFirstName(record.contactName, 'there');
  const firmName = record.firmName;
  const slug = record.id;

  const phone = isCanadian(record.location) ? '647-947-6253' : '647-577-0413';

  const origHistory = (record.history && record.history[0]) || {};
  const origSubject = origHistory.subject || `Partnership idea for ${firmName} — Web design for your clients`;
  const origResendId = origHistory.resendId || '';
  const lastHistory = record.history && record.history[record.history.length - 1];
  const lastResendId = (lastHistory && lastHistory.resendId) || origResendId;

  const subject = origSubject.startsWith('Re:') ? origSubject : `Re: ${origSubject}`;
  const partnerUrl = `https://beeclue.com/partner?utm_source=beeclue&utm_medium=partner-outreach&utm_campaign=partner-${slug}`;
  const caseStudiesUrl = `https://beeclue.com/case-studies?utm_source=beeclue&utm_medium=partner-outreach&utm_campaign=partner-${slug}`;

  const text = `Hi ${firstName},

Following up one last time regarding a potential design & technical partnership with ${firmName}.

I know you have your hands full guiding client operations, so I'll assume adding an external web development & Shopify partner isn't a priority right now, and I won't follow up again.

If a client project ever comes up where you need high-speed modern Next.js development, a custom Shopify build, or high-converting consultation funnels, our partner door is always open:
${partnerUrl}

We offer a flat 20% recurring commission on all referred work (or silent white-label delivery), alongside free 48-hour interactive website mockups so your clients can preview their build risk-free before signing.

Wishing you and ${firmName} continued momentum and success this quarter.

Best regards,
Kay
Beeclue Tech
${partnerUrl} · ${phone}
Recent Work: ${caseStudiesUrl}`;

  return {
    slug,
    record,
    to: record.email,
    bcc: ['admin@beeclue.com'],
    subject,
    text,
    origResendId,
    lastResendId,
    firmName,
    firstName
  };
}

// Resend dispatch helper
function sendEmail(emailPayload) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(emailPayload);
    const req = https.request('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(parsed);
          } else {
            reject({ statusCode: res.statusCode, body: parsed });
          }
        } catch (e) {
          reject({ statusCode: res.statusCode, body });
        }
      });
    });

    req.on('error', (err) => reject(err));
    req.write(postData);
    req.end();
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const isDryRun = process.argv.includes('--dry-run');
  console.log(`=== PARTNER FINAL BREAKAWAY OUTREACH ===`);
  console.log(`Mode: ${isDryRun ? 'DRY RUN (no emails sent)' : 'LIVE DISPATCH'}`);

  const targets = [];
  for (const slug of partnerSlugs) {
    const record = history.find(h => h.id === slug);
    if (!record) {
      console.warn(`[WARN] Slug not found in history: ${slug}`);
      continue;
    }
    if (blacklistedEmails.has(record.email.toLowerCase())) {
      console.warn(`[BLACKLISTED] Skipping ${record.email} (${record.firmName})`);
      continue;
    }
    targets.push(buildPartnerFinalBreakaway(record));
  }

  console.log(`Prepared ${targets.length} partner final breakaway emails.`);

  if (isDryRun) {
    targets.forEach((t, i) => {
      console.log(`\n--- [${i + 1}/${targets.length}] ${t.firmName} (${t.to}) ---`);
      console.log(`Subject: ${t.subject}`);
      console.log(`In-Reply-To / References: ${t.lastResendId}`);
      console.log(`BCC: ${t.bcc.join(', ')}`);
      console.log(`Body Snippet:\n${t.text.split('\n').slice(0, 7).join('\n')}...`);
    });
    console.log(`\nDRY RUN complete. Re-run without --dry-run to send.`);
    return;
  }

  const dispatchResults = [];
  const nowIso = new Date().toISOString();

  for (let i = 0; i < targets.length; i++) {
    const t = targets[i];
    console.log(`[${i + 1}/${targets.length}] Dispatching to ${t.firmName} <${t.to}>...`);

    const headers = {};
    if (t.lastResendId) {
      headers['In-Reply-To'] = `<${t.lastResendId}@resend.dev>`;
      headers['References'] = `<${t.lastResendId}@resend.dev>`;
    }

    const payload = {
      from: 'Kay at Beeclue Tech <hello@beeclue.com>',
      to: [t.to],
      bcc: t.bcc,
      subject: t.subject,
      text: t.text,
      headers: Object.keys(headers).length > 0 ? headers : undefined
    };

    try {
      const res = await sendEmail(payload);
      console.log(`  -> SUCCESS! Resend ID: ${res.id}`);

      dispatchResults.push({
        slug: t.slug,
        firmName: t.firmName,
        email: t.to,
        status: 'delivered',
        resendId: res.id,
        sentAt: nowIso
      });

      // Update history record
      const histRecord = history.find(h => h.id === t.slug);
      if (histRecord) {
        histRecord.lastContactDate = nowIso;
        histRecord.sequenceStep = 'Final Breakaway';
        if (!histRecord.history) histRecord.history = [];
        histRecord.history.push({
          step: 'Final Breakaway',
          sentAt: nowIso,
          subject: t.subject,
          resendId: res.id,
          status: 'delivered',
          notes: 'Partner final breakaway email sent (20% commission + white-label, free mockup reminder, closing sequence gracefully).'
        });
      }

      await sleep(2200); // 2.2s delay to pace within rate limits
    } catch (err) {
      console.error(`  -> ERROR sending to ${t.to}:`, err);
      dispatchResults.push({
        slug: t.slug,
        firmName: t.firmName,
        email: t.to,
        status: 'failed',
        error: err,
        sentAt: nowIso
      });
    }
  }

  // Save updated history
  fs.writeFileSync(historyPath, JSON.stringify(history, null, 2), 'utf8');
  console.log(`\nUpdated outreach_history.json successfully.`);

  // Write dispatch log
  const logFilename = `partner_breakaway_dispatch_log_${Date.now()}.json`;
  const logPath = path.resolve(__dirname, logFilename);
  fs.writeFileSync(logPath, JSON.stringify(dispatchResults, null, 2), 'utf8');
  console.log(`Dispatch log written to ${logFilename}.`);
}

main().catch(console.error);
