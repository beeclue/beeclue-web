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

// 3. 20 Verified Business Managers & OBMs
const partners = [
  {
    slug: 'the-systems-witch',
    name: 'Crystal Coleman',
    firstName: 'Crystal',
    agency: 'The Systems Witch',
    email: 'crystal@thesystemswitch.com',
    location: 'Edgerton, AB, Canada',
    country: 'Canada',
    niche: 'Coaches, course creators, and 6- to 7-figure online thought leaders',
    angle: 'When your coaching and course creator clients scale, their websites and sales funnels often lag behind. We partner with OBMs to deliver bespoke Next.js and high-converting landing pages so you don’t have to wrestle with clunky templates.'
  },
  {
    slug: 'keizer-virtual-solutions',
    name: 'Victoria de Keizer',
    firstName: 'Victoria',
    agency: 'Keizer Virtual Solutions',
    email: 'victoria@victoriadekeizer.com',
    location: 'Gatineau, QC, Canada',
    country: 'Canada',
    niche: 'Coaches, executive consultants, and digital service providers',
    angle: 'As your consulting clients scale their high-ticket offerings, their front-end websites often need a modern revamp with seamless appointment booking and client intake portals.'
  },
  {
    slug: 'the-virtual-solution',
    name: 'Lisa MacDonald',
    firstName: 'Lisa',
    agency: 'The Virtual Solution',
    email: 'lisa@thevirtualsolution.com',
    location: 'Annapolis Valley, NS, Canada',
    country: 'Canada',
    niche: 'Coaches, consultants, and visionary CEOs',
    angle: 'You handle high-level operations and strategic systems, while we act as your on-demand web and tech development team to build custom, high-speed websites that integrate seamlessly with your clients’ back-office workflows.'
  },
  {
    slug: 'teresa-passey-virtual-solutions',
    name: 'Teresa Passey Fox',
    firstName: 'Teresa',
    agency: 'Teresa Passey Virtual Solutions',
    email: 'teresa@teresapassey.com',
    location: 'Logan, UT, USA',
    country: 'USA',
    niche: 'Online entrepreneurs, education consultants, and service-based businesses',
    angle: 'When your service and consulting clients struggle with outdated websites and disconnected intake forms, we build them custom, mobile-first web platforms with zero fulfillment burden on your team.'
  },
  {
    slug: 'northland-fractional',
    name: 'Patrick Brown',
    firstName: 'Patrick',
    agency: 'Northland Fractional',
    email: 'patrick@northlandfractional.com',
    location: 'Toronto, ON, Canada',
    country: 'Canada',
    niche: 'SMBs, technical founders, and growing service firms',
    angle: 'As you eliminate operational bottlenecks for growing SMBs and technical founders, their websites often need a serious architectural upgrade to automate lead capture and streamline sales delivery.'
  },
  {
    slug: 'john-gauch-operating-partner',
    name: 'John Gauch',
    firstName: 'John',
    agency: 'John Gauch Operating Partner',
    email: 'john@johngauch.com',
    location: 'Toronto, ON, Canada',
    country: 'Canada',
    niche: 'Founder-led growth companies and professional service firms',
    angle: 'Founder-led companies scaling toward enterprise accounts frequently outgrow amateur web presences. We partner with operating leaders to build production-grade web applications that convert enterprise buyers.'
  },
  {
    slug: 'ae-operations-consulting',
    name: 'Adrienne Edwards',
    firstName: 'Adrienne',
    agency: 'AE Operations Consulting',
    email: 'adrienne@aeoperationsconsulting.com',
    location: 'Chicago, IL, USA',
    country: 'USA',
    niche: 'D2C e-commerce brands, CPG companies, and tech startups',
    angle: 'Your D2C and CPG clients need high-performance Shopify stores, sub-second checkout speeds, and conversion-optimized product landing pages to maximize their ad spend ROI.'
  },
  {
    slug: 'xny-agency',
    name: 'Tim Cason',
    firstName: 'Tim',
    agency: 'XnY Agency',
    email: 'tim@xny.agency',
    location: 'Pasadena, CA, USA',
    country: 'USA',
    niche: 'Service businesses, creative agencies, and digital creators',
    angle: 'As you design automated backend workflows and CRM systems, your clients frequently require modern front-end web funnels and automated client intake portals to complete the loop.'
  },
  {
    slug: 'straza-consulting',
    name: 'Michael Straza',
    firstName: 'Michael',
    agency: 'Straza Consulting',
    email: 'michael@consultstraza.com',
    location: 'Bloomington, IL, USA',
    country: 'USA',
    niche: 'Growing small businesses, founder-led enterprises, and regional organizations',
    angle: 'When your clients undergo operational restructuring, their outward-facing websites often need custom modernization to reflect their upgraded service capabilities and capture qualified leads.'
  },
  {
    slug: 'swim-operations',
    name: 'Lindsay Gonzalez',
    firstName: 'Lindsay',
    agency: 'SWIM',
    email: 'lindsay@swimorswim.com',
    location: 'Brooklyn, NY, USA',
    country: 'USA',
    niche: 'Early-stage tech companies and consumer startups (Seed to Series C)',
    angle: 'High-growth tech and consumer startups need rapid marketing websites, polished UI revamps, and conversion funnels built to venture-scale standards without hiring full-time internal dev teams.'
  },
  {
    slug: 'business-success-consulting-group',
    name: 'Adi Klevit',
    firstName: 'Adi',
    agency: 'Business Success Consulting Group',
    email: 'adi@BizSuccessCG.com',
    location: 'Lake Oswego, OR, USA',
    country: 'USA',
    niche: 'Small to mid-sized businesses, professional practices, and manufacturing firms',
    angle: 'Clients systematizing their internal operations frequently need client-facing digital forms, modern booking portals, and refreshed websites so the customer journey matches their streamlined back office.'
  },
  {
    slug: 'camilla-bignell-consulting',
    name: 'Camilla Bignell',
    firstName: 'Camilla',
    agency: 'Camilla Bignell Consulting',
    email: 'Camilla@CamillaBignell.com',
    location: 'London, ON, Canada',
    country: 'Canada',
    niche: 'Privately owned and family-owned businesses, service professionals',
    angle: 'Family-owned and private businesses frequently operate with outdated websites that lack modern mobile-friendly booking tools, clear service hierarchies, and local search visibility.'
  },
  {
    slug: 'anchor-and-joy-consulting',
    name: 'Danielle McKlveen',
    firstName: 'Danielle',
    agency: 'Anchor & Joy Consulting',
    email: 'danielle@anchorandjoy.com',
    location: 'Atlanta, GA, USA',
    country: 'USA',
    niche: 'Purpose-driven entrepreneurs, creative consultants, and service small businesses',
    angle: 'When your entrepreneurial clients struggle with disconnected tech stacks and websites that fail to convert traffic, we build them custom, mobile-first web platforms with zero fulfillment stress for you.'
  },
  {
    slug: 'healthy-business-manager',
    name: 'Carol Frankenstein',
    firstName: 'Carol',
    agency: 'Healthy Business Manager',
    email: 'Carol@healthybusinessmanager.com',
    location: 'Cincinnati, OH, USA',
    country: 'USA',
    niche: 'Online entrepreneurs, digital creators, and scaling service businesses',
    angle: 'Your online entrepreneur clients need high-converting sales landing pages, automated client booking workflows, and modern web presence overhauls as they launch new services and digital products.'
  },
  {
    slug: 'hamilton-coos',
    name: 'Jen Hamilton',
    firstName: 'Jen',
    agency: 'Hamilton COOs',
    email: 'jen@hamiltoncoos.com',
    location: 'San Diego, CA, USA',
    country: 'USA',
    niche: 'Accounting firms, CPA practices, and professional service business owners',
    angle: 'Accounting and professional practices frequently have antiquated websites that lack secure client intake workflows, modern consultation scheduling, and mobile responsive design.'
  },
  {
    slug: 'blue-monarch-management',
    name: 'Zakeana Reid',
    firstName: 'Zakeana',
    agency: 'Blue Monarch Management',
    email: 'zakeana.reid@bluemonarch.ca',
    location: 'Calgary, AB, Canada',
    country: 'Canada',
    niche: 'Founder-led companies and growth-stage enterprises',
    angle: 'When scaling organizations outgrow their initial website architecture, we act as a trusted technical partner to build robust digital platforms that support enterprise-level sales intake.'
  },
  {
    slug: 'garfinkle-growth-partners',
    name: 'Lisa Garfinkle',
    firstName: 'Lisa',
    agency: 'Garfinkle Growth Partners Inc.',
    email: 'lisa@garfinklegrowthpartners.com',
    location: 'Montreal, QC, Canada',
    country: 'Canada',
    niche: 'Founder-led and private equity-backed companies scaling execution',
    angle: 'Companies scaling post-investment routinely require professional digital rebuilds to replace legacy founder-made websites with high-converting, authoritative digital assets.'
  },
  {
    slug: 'robert-gilbreath-consulting',
    name: 'Robert Gilbreath',
    firstName: 'Robert',
    agency: 'Robert Gilbreath Executive Consulting',
    email: 'rg@robertgilbreath.com',
    location: 'Austin, TX, USA',
    country: 'USA',
    niche: 'High-growth e-commerce SaaS, B2B tech startups, and brand platforms',
    angle: 'Your e-commerce and B2B SaaS clients regularly require high-converting landing pages, custom marketing site development, and speed-optimized funnels to support scaling customer acquisition.'
  },
  {
    slug: 'denver-fractional-coo',
    name: 'Erin Devany',
    firstName: 'Erin',
    agency: 'Denver Fractional COO (DFC)',
    email: 'erin@denverfractionalcoo.com',
    location: 'Denver, CO, USA',
    country: 'USA',
    niche: 'Professional practices, law firms, and growing service businesses',
    angle: 'Professional service firms and legal practices you consult for often have outdated, static websites with poor mobile intake; modernizing their web design and consultation intake funnels directly boosts client conversion.'
  },
  {
    slug: 'the-champagne-collective',
    name: 'Ashley Kay',
    firstName: 'Ashley',
    agency: 'The Champagne Collective',
    email: 'ashley@champagnecollective.co',
    location: 'Vancouver, BC, Canada',
    country: 'Canada',
    niche: 'High-growth creative entrepreneurs, e-commerce brand owners, and digital service providers',
    angle: 'Your creative and e-commerce clients regularly outgrow DIY Shopify and WordPress themes, needing custom e-commerce redesigns, conversion rate optimization, and streamlined booking funnels.'
  }
];

// 4. Outreach History File
const historyPath = path.resolve(__dirname, 'outreach_history.json');
let history = [];
if (fs.existsSync(historyPath)) {
  history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
}

// Function to construct email content with UTM tracking
function buildPartnerEmail(p) {
  const phone = p.country === 'USA' ? '647-577-0413' : '647-947-6253';
  const partnerUrl = `https://beeclue.com/partner?utm_source=beeclue&utm_medium=partner-outreach&utm_campaign=partner-${p.slug}`;
  const caseStudiesUrl = `https://beeclue.com/case-studies?utm_source=beeclue&utm_medium=partner-outreach&utm_campaign=partner-${p.slug}`;

  const subject = `Partnership idea for ${p.agency} — Web design for your clients`;

  const text = `Hi ${p.firstName},

I came across ${p.agency} and really admire how you guide ${p.niche} to streamline their operations and scale effectively.

${p.angle}

I'm reaching out from Beeclue Tech (https://beeclue.com). We are a full-stack web design and Shopify development agency specializing in modern Next.js platforms, e-commerce stores, and conversion-focused web applications.

We recently launched a dedicated Partner Program offering a direct 20% commission on every web design or development referral:
${partnerUrl}

Here is how we work with business managers and consultants:
• 20% Cash Commission: Earn $300 to $1,500+ on every client referral (or 20% recurring monthly on maintenance retainers).
• Zero Fulfillment Headache: We handle 100% of client discovery, UI/UX design, custom coding, launch, and hosting.
• Free 48-Hour Mockup Offer: To eliminate friction for your clients, we build them a free interactive mobile website mockup and UX audit before they commit to anything.
• White-Label or Referral: You can introduce us directly as your trusted dev partner, or we can work silently under your agency banner.

Recent portfolio proof includes custom Shopify development for Work N Wear, luxury editorial web design for Tuxedo Frame Gallery, and high-converting legal architecture for Tara Lattanzio (${caseStudiesUrl}).

Would you be open to a quick 10-minute chat later this week to see if a partnership makes sense for your client roster?

Best regards,
Kay
Beeclue Tech
${partnerUrl} · ${phone}
Case Studies: ${caseStudiesUrl}`;

  return { subject, text, partnerUrl, caseStudiesUrl };
}

// Dispatch function via curl
function sendViaCurl(to, subject, text) {
  const payload = {
    from: "Kay at Beeclue Tech <hello@beeclue.com>",
    to: [to],
    bcc: ["admin@beeclue.com"],
    subject: subject,
    text: text
  };

  const payloadStr = JSON.stringify(payload);
  const tempPayloadFile = path.resolve(__dirname, `_temp_partner_payload_${Date.now()}.json`);
  fs.writeFileSync(tempPayloadFile, payloadStr, 'utf8');

  try {
    const cmd = `curl -s -X POST https://api.resend.com/emails ` +
      `-H "Authorization: Bearer ${RESEND_API_KEY}" ` +
      `-H "Content-Type: application/json" ` +
      `-A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" ` +
      `-d @"${tempPayloadFile}"`;

    const stdout = execSync(cmd, { timeout: 30000 }).toString();
    fs.unlinkSync(tempPayloadFile);

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
  console.log(`Starting Business Manager & Partner Outreach Dispatch (Mode: ${isDryRun ? 'DRY-RUN' : 'LIVE'})...\n`);

  let sentCount = 0;
  let skippedCount = 0;

  for (let i = 0; i < partners.length; i++) {
    const p = partners[i];

    if (blacklistedEmails.has(p.email.toLowerCase())) {
      console.log(`[SKIP - BLACKLISTED] ${p.agency} (${p.email})`);
      skippedCount++;
      continue;
    }

    // Check if already in outreach_history
    const alreadyContacted = history.find(h => (h.email || '').toLowerCase() === p.email.toLowerCase());
    if (alreadyContacted) {
      console.log(`[SKIP - ALREADY CONTACTED] ${p.agency} (${p.email})`);
      skippedCount++;
      continue;
    }

    const { subject, text, partnerUrl } = buildPartnerEmail(p);

    if (isDryRun) {
      console.log(`--- [DRY-RUN ${i + 1}/${partners.length}] ${p.agency} <${p.email}> ---`);
      console.log(`Subject: ${subject}`);
      console.log(text);
      console.log('--------------------------------------------------\n');
      sentCount++;
      continue;
    }

    console.log(`[SENDING ${i + 1}/${partners.length}] ${p.agency} -> ${p.email}...`);
    const result = sendViaCurl(p.email, subject, text);

    if (result.success) {
      console.log(`✓ Delivered! Resend ID: ${result.id}`);
      sentCount++;

      // Record to history
      const now = new Date().toISOString();
      history.push({
        id: p.slug,
        firmName: p.agency,
        contactName: `${p.name} (Founder / Partner)`,
        email: p.email,
        website: p.location,
        niche: p.niche,
        location: p.location,
        pricingQuoted: "20% Partner Commission ($300 - $1,500+)",
        initialContactDate: now,
        lastContactDate: now,
        status: "delivered",
        sequenceStep: "Day 0 - Partner Program Intro",
        diagnosedIssues: p.angle,
        caseStudySent: partnerUrl,
        history: [
          {
            step: "Day 0",
            sentAt: now,
            subject: subject,
            resendId: result.id,
            status: "delivered",
            notes: "Initial B2B partner outreach sent offering 20% commission, white-label/referral tracks, free 48-hour mockup offer, and Beeclue partner page with UTM tracking."
          }
        ]
      });

      // Save history after each send for crash safety
      fs.writeFileSync(historyPath, JSON.stringify(history, null, 2), 'utf8');

      // Rate limit delay between requests (2.0s)
      execSync('sleep 2');
    } else {
      console.error(`✗ Failed to send to ${p.email}: ${result.error}`);
    }
  }

  console.log(`\n========================================`);
  console.log(`Partner Dispatch Summary: Sent: ${sentCount}, Skipped: ${skippedCount}, Total Candidates: ${partners.length}`);
  console.log(`========================================`);
}

main().catch(console.error);
