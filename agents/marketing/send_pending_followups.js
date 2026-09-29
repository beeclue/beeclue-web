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

// 4. Define Target Lists
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

const gallerySlugs = [
  'hang-ups-custom-framing',
  'two-sisters-gallery',
  'savannah-framing-company',
  'main-street-frame-shop',
  'art-on-broad',
  'the-frame-shop-inc',
  'elite-framing',
  'green-herring-art-and-framing-studio',
  'four-corners-fine-art-and-framing',
  'aiken-art-and-custom-framing',
  'tanglewood-art-and-frame-gallery',
  'fazioart-custom-framing',
  'fisher-graphic-arts-inc',
  'townhouse-art-and-framing',
  'the-starving-artist',
  's-and-s-custom-framing',
  'gannon-art-center',
  'edgewood-frame-shop',
  'alexandria-picture-framing-company',
  'fralin-art-and-frame'
];

// Helper to determine first name
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

// Map specific gallery first names
const galleryFirstNames = {
  'hang-ups-custom-framing': 'Jessica',
  'two-sisters-gallery': 'Richard',
  'savannah-framing-company': 'Greg',
  'main-street-frame-shop': 'Beverly',
  'art-on-broad': 'Kristin & Catherine',
  'the-frame-shop-inc': 'Katy',
  'elite-framing': 'Mark',
  'green-herring-art-and-framing-studio': 'Hank',
  'four-corners-fine-art-and-framing': 'Charlene',
  'aiken-art-and-custom-framing': 'Tara & Tim',
  'tanglewood-art-and-frame-gallery': 'Caren & Al',
  'fazioart-custom-framing': 'Linda',
  'fisher-graphic-arts-inc': 'Mitch',
  'townhouse-art-and-framing': 'Emily',
  'the-starving-artist': 'Matthew',
  's-and-s-custom-framing': 'Ryan',
  'gannon-art-center': 'Lisa & Ed',
  'edgewood-frame-shop': 'Grace',
  'alexandria-picture-framing-company': 'Soung',
  'fralin-art-and-frame': 'John'
};

// Builder for Partner Follow-up
function buildPartnerFollowup(record) {
  const firstName = extractFirstName(record.contactName, 'there');
  const firmName = record.firmName;
  const slug = record.id;

  const isCanada = record.location && (
    record.location.includes('Canada') ||
    record.location.includes(', ON') ||
    record.location.includes(', BC') ||
    record.location.includes(', AB') ||
    record.location.includes(', QC') ||
    record.location.includes(', NS')
  );
  const phone = isCanada ? '647-947-6253' : '647-577-0413';

  const origHistory = (record.history && record.history[0]) || {};
  const origSubject = origHistory.subject || `Partnership idea for ${firmName} — Web design for your clients`;
  const origResendId = origHistory.resendId || '';

  const subject = origSubject.startsWith('Re:') ? origSubject : `Re: ${origSubject}`;
  const partnerUrl = `https://beeclue.com/partner?utm_source=beeclue&utm_medium=partner-outreach&utm_campaign=partner-${slug}`;
  const caseStudiesUrl = `https://beeclue.com/case-studies?utm_source=beeclue&utm_medium=partner-outreach&utm_campaign=partner-${slug}`;

  const text = `Hi ${firstName},

Floating this back up in case my previous note got buried under client launches.

As ${firmName} helps your clients scale their operations and revenue, we'd love to serve as your go-to technical and design partner — offering your team a direct 20% commission on every web design or Shopify/Next.js project you refer (or white-labeling silently under your brand):
${partnerUrl}

To remove all friction for your clients, we're happy to build a free 48-hour interactive mobile website mockup and UX audit before they ever commit to an engagement.

Recent portfolio proof includes custom Shopify development for Work N Wear, luxury editorial web design for Tuxedo Frame Gallery, and high-converting legal architecture for Tara Lattanzio (${caseStudiesUrl}).

Would you be open to a quick 10-minute chat later this week to see how this could benefit your client roster?

Best regards,
Kay
Beeclue Tech
${partnerUrl} · ${phone}
Case Studies: ${caseStudiesUrl}`;

  return {
    type: 'partner',
    slug,
    record,
    to: record.email,
    bcc: ['admin@beeclue.com'],
    subject,
    text,
    origResendId,
    firmName,
    firstName
  };
}

// Builder for Gallery Follow-up
function buildGalleryFollowup(record) {
  const firstName = galleryFirstNames[record.id] || extractFirstName(record.contactName, 'there');
  const firmName = record.firmName;
  const slug = record.id;

  const origHistory = (record.history && record.history[0]) || {};
  const origSubject = origHistory.subject || `Modernizing the website for ${firmName}`;
  const origResendId = origHistory.resendId || '';

  const subject = origSubject.startsWith('Re:') ? origSubject : `Re: ${origSubject}`;
  const tuxedoUtm = `https://tuxedoframegallery.com?utm_source=beeclue&utm_medium=email&utm_campaign=outreach-art-galleries-${slug}`;
  const caseStudyUtm = `https://beeclue.com/case-studies/tuxedo-frame-gallery?utm_source=beeclue&utm_medium=email&utm_campaign=outreach-art-galleries-${slug}`;
  const beeclueUtm = `https://beeclue.com?utm_source=beeclue&utm_medium=email&utm_campaign=outreach-art-galleries-${slug}`;

  const text = `Hi ${firstName},

Floating this back up in case my previous note got buried under workshop orders.

We specialize in designing modern, high-converting websites for custom framing studios and fine art ateliers — featuring digital viewing rooms, moulding previews (Roma, Larson-Juhl), and seamless appointment scheduling for in-gallery and virtual consultations.

Our work with Tuxedo Frame Gallery in Buckhead, Atlanta (${tuxedoUtm}) showcases what modern editorial web design can do to elevate 35+ years of master framing and capture high-value framing projects.

Our offer to put together a free 48-hour custom mobile website mockup and local SEO audit for ${firmName} is still open, completely free with zero obligation.

Would you be open to taking a quick look this week?

Best regards,
Kay
Beeclue Tech
${beeclueUtm} · 647-577-0413
Case Study Reference: ${caseStudyUtm}`;

  return {
    type: 'gallery',
    slug,
    record,
    to: record.email,
    bcc: null, // STRICT: NO BCC on sales outreach
    subject,
    text,
    origResendId,
    firmName,
    firstName
  };
}

// Transport using curl with browser UA
function sendViaCurl(toEmail, bccEmails, subject, text, origResendId) {
  const payload = {
    from: "Kay at Beeclue Tech <hello@beeclue.com>",
    to: [toEmail],
    subject: subject,
    text: text
  };

  if (bccEmails && Array.isArray(bccEmails) && bccEmails.length > 0) {
    payload.bcc = bccEmails;
  }

  if (origResendId) {
    payload.headers = {
      "In-Reply-To": `<${origResendId}>`,
      "References": `<${origResendId}>`
    };
  }

  const payloadStr = JSON.stringify(payload);
  const tempPayloadFile = path.resolve(__dirname, `_temp_followup_${Date.now()}_${Math.random().toString(36).substring(7)}.json`);
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
  console.log(`Starting Day 4 Follow-up Dispatch (Mode: ${isDryRun ? 'DRY-RUN' : 'LIVE'})`);
  console.log(`======================================================\n`);

  // Build target list
  const targets = [];

  // 1. Partners
  for (const slug of partnerSlugs) {
    const record = history.find(h => h.id === slug);
    if (!record) {
      console.warn(`[WARN] Partner slug not found in history: ${slug}`);
      continue;
    }
    targets.push(buildPartnerFollowup(record));
  }

  // 2. Galleries
  for (const slug of gallerySlugs) {
    const record = history.find(h => h.id === slug);
    if (!record) {
      console.warn(`[WARN] Gallery slug not found in history: ${slug}`);
      continue;
    }
    targets.push(buildGalleryFollowup(record));
  }

  console.log(`Identified ${targets.length} targets to process (19 Partners + 20 Galleries).\n`);

  let sentCount = 0;
  let skippedCount = 0;
  let failedCount = 0;
  const results = [];

  for (let i = 0; i < targets.length; i++) {
    const item = targets[i];
    const emailLower = (item.to || '').toLowerCase();

    // Check Blacklist
    if (blacklistedEmails.has(emailLower)) {
      console.log(`[SKIP - BLACKLISTED] ${item.firmName} (${item.to})`);
      skippedCount++;
      continue;
    }

    // Check if already followed up
    const hasFollowup = item.record.history && item.record.history.some(h => h.step === 'Day 4');
    if (hasFollowup || item.record.sequenceStep === 'Day 4 - Follow-up') {
      console.log(`[SKIP - ALREADY FOLLOWED UP] ${item.firmName} (${item.to})`);
      skippedCount++;
      continue;
    }

    console.log(`[${i + 1}/${targets.length}] [${item.type.toUpperCase()}] Sending to: ${item.firmName} <${item.to}>`);
    console.log(`    Subject: ${item.subject}`);
    console.log(`    Original Resend ID: ${item.origResendId || 'none'}`);
    console.log(`    BCC: ${item.bcc ? item.bcc.join(', ') : 'None'}`);

    if (isDryRun) {
      console.log(`    [DRY-RUN] Simulating send... OK`);
      sentCount++;
      results.push({
        id: item.slug,
        type: item.type,
        firmName: item.firmName,
        email: item.to,
        subject: item.subject,
        resendId: 'dry-run-id',
        status: 'simulated'
      });
      continue;
    }

    // Live Send
    const sendRes = sendViaCurl(item.to, item.bcc, item.subject, item.text, item.origResendId);

    if (sendRes.success) {
      console.log(`    -> SUCCESS: Resend ID: ${sendRes.id}`);
      sentCount++;

      // Update in-memory record
      const now = new Date().toISOString();
      if (!item.record.history) item.record.history = [];
      item.record.history.push({
        step: 'Day 4',
        sentAt: now,
        subject: item.subject,
        resendId: sendRes.id,
        status: 'delivered',
        notes: item.type === 'partner'
          ? 'Threaded Day 4 follow-up on 20% commission partner program and client mockup offer.'
          : 'Threaded Day 4 follow-up on Tuxedo Frame Gallery case study and free 48-hr custom mockup offer.'
      });

      item.record.sequenceStep = 'Day 4 - Follow-up';
      item.record.lastContactDate = now;
      item.record.status = 'delivered';

      saveHistory();

      results.push({
        id: item.slug,
        type: item.type,
        firmName: item.firmName,
        email: item.to,
        subject: item.subject,
        resendId: sendRes.id,
        status: 'delivered'
      });
    } else {
      console.error(`    -> FAILED: ${sendRes.error}`);
      failedCount++;
      results.push({
        id: item.slug,
        type: item.type,
        firmName: item.firmName,
        email: item.to,
        subject: item.subject,
        error: sendRes.error,
        status: 'failed'
      });
    }

    // Rate limiting: 2000ms delay between emails
    await sleep(2000);
  }

  console.log(`\n======================================================`);
  console.log(`Dispatch Summary: Sent: ${sentCount}, Skipped: ${skippedCount}, Failed: ${failedCount}, Total: ${targets.length}`);
  console.log(`======================================================\n`);

  if (!isDryRun && results.length > 0) {
    fs.writeFileSync(
      path.resolve(__dirname, `followup_dispatch_log_${Date.now()}.json`),
      JSON.stringify(results, null, 2),
      'utf8'
    );
  }
}

main().catch(err => {
  console.error("FATAL ERROR in main:", err);
  process.exit(1);
});
