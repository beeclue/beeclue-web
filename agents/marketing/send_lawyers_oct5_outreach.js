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
const historyEmailSet = new Set(history.map(h => (h.email || '').toLowerCase()));

// 4. Load Leads
const leadsPath = path.resolve(__dirname, 'lawyers_batch_oct5.json');
const leads = JSON.parse(fs.readFileSync(leadsPath, 'utf8'));

// Slug generator
function makeSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// Build email payload
function buildLawyerEmail(lead) {
  const firmName = lead.exact_registered_firm_name;
  const firstName = lead.attorney_first_name;
  const slug = makeSlug(firmName);

  // US prospects use US phone number
  const phone = '647-577-0413';

  const homeUrl = `https://beeclue.com?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-${slug}`;
  const taraUrl = `https://beeclue.com/case-studies/tara-lattanzio?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-${slug}`;
  const playbookUrl = `https://beeclue.com/ontario-law-firm-website-playbook?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-${slug}`;

  const subject = `Improving Google search & AI visibility for ${firmName}`;

  const text = `Hi ${firstName},

I was looking through boutique practices in ${lead.city} and came across ${firmName}.

Your practice in ${lead.practice_areas} handles critical client matters, but looking at your website (${lead.website_url}), there are a few technical friction points that are quietly holding back your firm's visibility on Google search and new AI answer engines (like ChatGPT Search, Perplexity, and Google AI Overviews):

1. Platform Speed & Mobile Performance: Your current ${lead.platform} framework loads heavy client-side JavaScript before any content paints, leading to slower page loads and higher bounce rates on smartphones when prospective clients look for counsel urgently.
2. Search & Knowledge Graph Schema: The site currently lacks JSON-LD Schema.org LegalService structured markup, which prevents Google from parsing your exact practice areas, office coordinates, and consultation pathways into local Knowledge Panels.
3. Conversational AI Search (GEO/AEO): When potential clients ask AI search engines questions about legal issues in ${lead.state}, the lack of structured Q&A and semantic authority markup means AI models cite competing directories instead of recommending your firm directly.

At Beeclue Tech, we build high-speed, modern websites for solo and boutique law firms on Next.js — engineered for instant mobile page loads (under 1 second), high-converting consultation intake, and complete Schema.org optimization.

Our plans start at just $19/month with a $0 upfront build fee (including secure hosting, continuous updates, and SEO management). You can see an example of our legal web architecture with Tara Lattanzio here:
${taraUrl}

I'd be glad to put together a free, interactive 48-hour website mockup and technical search audit specifically for ${firmName} — completely free, with zero obligation, so you can see firsthand how your practice would look and perform.

Would you be open to seeing a quick preview for ${firmName}?

Best regards,
Kay
Beeclue Tech
${homeUrl} · ${phone}
Legal Case Study: ${taraUrl}`;

  return {
    slug,
    lead,
    to: lead.direct_email,
    subject,
    text,
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
  console.log(`=== LAW FIRM DAY 0 OUTREACH (OCT 5) ===`);
  console.log(`Mode: ${isDryRun ? 'DRY RUN (no emails sent)' : 'LIVE DISPATCH'}`);

  const targets = [];
  for (const lead of leads) {
    const emailLower = (lead.direct_email || '').toLowerCase();
    if (blacklistedEmails.has(emailLower)) {
      console.warn(`[BLACKLISTED] Skipping ${lead.direct_email} (${lead.exact_registered_firm_name})`);
      continue;
    }
    if (historyEmailSet.has(emailLower)) {
      console.warn(`[ALREADY CONTACTED] Skipping ${lead.direct_email} (${lead.exact_registered_firm_name})`);
      continue;
    }
    targets.push(buildLawyerEmail(lead));
  }

  console.log(`Prepared ${targets.length} law firm emails for dispatch.`);

  if (isDryRun) {
    targets.forEach((t, i) => {
      console.log(`\n--- [${i + 1}/${targets.length}] ${t.firmName} (${t.to}) ---`);
      console.log(`Subject: ${t.subject}`);
      console.log(`Body Snippet:\n${t.text.split('\n').slice(0, 10).join('\n')}...`);
    });
    console.log(`\nDRY RUN complete. Re-run without --dry-run to send.`);
    return;
  }

  const dispatchResults = [];
  const nowIso = new Date().toISOString();

  for (let i = 0; i < targets.length; i++) {
    const t = targets[i];
    console.log(`[${i + 1}/${targets.length}] Dispatching to ${t.firmName} <${t.to}>...`);

    const payload = {
      from: 'Kay at Beeclue Tech <hello@beeclue.com>',
      to: [t.to],
      subject: t.subject,
      text: t.text
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

      // Append to outreach_history.json
      history.push({
        id: t.slug,
        firmName: t.firmName,
        contactName: t.lead.attorney_full_name,
        email: t.to,
        website: t.lead.website_url,
        niche: t.lead.practice_areas,
        location: `${t.lead.city}, ${t.lead.state}`,
        pricingQuoted: '$19/month ($0 upfront build fee)',
        initialContactDate: nowIso,
        lastContactDate: nowIso,
        status: 'delivered',
        sequenceStep: 'Day 0 - Initial Pitch',
        diagnosedIssues: t.lead.technical_diagnosis,
        caseStudySent: `https://beeclue.com/case-studies/tara-lattanzio?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-${t.slug}`,
        history: [
          {
            step: 'Day 0',
            sentAt: nowIso,
            subject: t.subject,
            resendId: res.id,
            status: 'delivered',
            notes: 'Initial Day 0 outreach sent highlighting Google Search & AI conversational search (GEO/AEO) optimization, 1-second load speeds, $19/mo Core plan ($0 build fee), and free 48-hr mockup offer.'
          }
        ]
      });

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
  const logFilename = `lawyers_oct5_dispatch_log_${Date.now()}.json`;
  const logPath = path.resolve(__dirname, logFilename);
  fs.writeFileSync(logPath, JSON.stringify(dispatchResults, null, 2), 'utf8');
  console.log(`Dispatch log written to ${logFilename}.`);
}

main().catch(console.error);
