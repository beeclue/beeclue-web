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

// 3. 20 Verified Prospects
const prospects = [
  {
    slug: 'hang-ups-custom-framing',
    businessName: 'Hang-Ups Custom Framing and Art Gallery',
    contactName: 'Jessica Howard (Owner)',
    firstName: 'Jessica',
    email: 'hangupsaugusta@gmail.com',
    location: 'Augusta, GA (1380 Reynolds St)',
    website: '',
    specificDiagnosis: 'your shop currently operates without an active website, relying solely on an unoptimized Google Business Profile and Facebook page with no online consultation booking or digital portfolio'
  },
  {
    slug: 'two-sisters-gallery',
    businessName: 'Two Sisters Gallery',
    contactName: 'Richard Edwards (Director)',
    firstName: 'Richard',
    email: 'twosisgallery@knology.net',
    location: 'Columbus, GA (1330 13th St)',
    website: 'http://www.twosisgallery.com',
    specificDiagnosis: 'your website is currently running on a legacy desktop layout with no mobile viewport scaling or online consultation booking, and routing inquiries through an older regional ISP email'
  },
  {
    slug: 'savannah-framing-company',
    businessName: 'Savannah Framing Company',
    contactName: 'Greg McGinty (Master Framer)',
    firstName: 'Greg',
    email: 'savframing@gmail.com',
    location: 'Savannah, GA (5401 Waters Avenue)',
    website: 'https://www.savannahframing.com',
    specificDiagnosis: 'your website is running on a basic static layout routing quotes to a personal mailbox, lacking an interactive moulding showcase or online consultation scheduler'
  },
  {
    slug: 'main-street-frame-shop',
    businessName: 'Main Street Frame Shop',
    contactName: 'Beverly Drawdy (Master Framer)',
    firstName: 'Beverly',
    email: 'framergirl.bd@gmail.com',
    location: 'Brunswick, GA (1403 Newcastle Street)',
    website: 'https://www.mainstreetframe.com',
    specificDiagnosis: 'your website uses a basic template with personal Gmail for quotes, missing a digital moulding catalog and online appointment scheduler'
  },
  {
    slug: 'art-on-broad',
    businessName: 'Art on Broad',
    contactName: 'Kristin Varn & Catherine Alexander (Directors)',
    firstName: 'Kristin and Catherine',
    email: 'artonbroad1@gmail.com',
    location: 'Augusta, GA (1016 Broad Street)',
    website: 'https://www.artonbroad.com',
    specificDiagnosis: 'your website uses a public Gmail for high-end consignment art and custom framing intake, without an interactive artwork gallery filter or consultation scheduler'
  },
  {
    slug: 'the-frame-shop-inc',
    businessName: 'The Frame Shop, Inc.',
    contactName: 'Katy McShane (President)',
    firstName: 'Katy',
    email: 'theframeshp@bellsouth.net',
    location: 'Columbia, SC (3100 Rosewood Dr)',
    website: 'http://www.theframeshopcolumbia.com',
    specificDiagnosis: 'your website is running on an older static desktop layout with no mobile responsive scaling, tap-to-call, or digital consultation scheduling'
  },
  {
    slug: 'elite-framing',
    businessName: 'Elite Framing',
    contactName: 'Mark Johnson (Master Framer)',
    firstName: 'Mark',
    email: 'columbiaframeshop@gmail.com',
    location: 'Columbia, SC (2114 College St)',
    website: 'https://www.columbiaframeshop.com',
    specificDiagnosis: 'your website operates on a blog-style layout handling customer quotes via an unbranded mailbox, lacking an online booking calendar for custom shadowbox and archival framing'
  },
  {
    slug: 'green-herring-art-and-framing-studio',
    businessName: 'Green Herring Art and Framing Studio',
    contactName: 'Hank D. Herring (Master Craftsman)',
    firstName: 'Hank',
    email: 'greenherringart@gmail.com',
    location: 'Beaufort, SC (917 Bay Street, Suite G)',
    website: '',
    specificDiagnosis: 'your domain currently forwards exclusively to Etsy, leaving your downtown Beaufort brick-and-mortar atelier with no dedicated website or local framing appointment scheduler'
  },
  {
    slug: 'four-corners-fine-art-and-framing',
    businessName: 'Four Corners Fine Art & Framing',
    contactName: 'Charlene Gardner (Director)',
    firstName: 'Charlene',
    email: 'fourcornersbluffton@gmail.com',
    location: 'Bluffton, SC (1263-B May River Road)',
    website: 'https://fourcornersgallerybluffton.com',
    specificDiagnosis: 'your layout routes project estimates to a public Gmail, lacking mobile-optimized consultation booking and interactive moulding displays'
  },
  {
    slug: 'aiken-art-and-custom-framing',
    businessName: 'Aiken Art & Custom Framing',
    contactName: 'Tara & Tim Conway (Owners)',
    firstName: 'Tara and Tim',
    email: 'aikenartandframe@gmail.com',
    location: 'Aiken, SC (226 Park Avenue SE)',
    website: 'https://www.aikenartandframe.com',
    specificDiagnosis: 'your site relies on a basic template with Gmail intake, missing an interactive moulding and mat selector and online consultation booking funnel'
  },
  {
    slug: 'tanglewood-art-and-frame-gallery',
    businessName: 'Tanglewood Art and Frame Gallery',
    contactName: 'Caren Carter-Lowrie & Al Lowrie (Owners)',
    firstName: 'Caren and Al',
    email: 'tanglewoodart@bellsouth.net',
    location: 'Clemmons, NC (4152 Clemmons Road)',
    website: 'http://www.tanglewoodartandframe.com',
    specificDiagnosis: 'your website is currently running on a fixed-width legacy layout with no mobile responsive styling or online consultation scheduling'
  },
  {
    slug: 'fazioart-custom-framing',
    businessName: 'FazioArt Custom Framing',
    contactName: 'Linda Fazio (Owner)',
    firstName: 'Linda',
    email: 'fazioart@bellsouth.net',
    location: 'Charlotte, NC (3300 Monroe Rd, Suite C)',
    website: 'http://www.fazioart.com',
    specificDiagnosis: 'your website is built on a legacy desktop-only architecture with no mobile responsive styling or online appointment booking calendar'
  },
  {
    slug: 'fisher-graphic-arts-inc',
    businessName: 'Fisher Graphic Arts, Inc.',
    contactName: 'Mitchel "Mitch" Fisher (Owner)',
    firstName: 'Mitch',
    email: 'fishergraphicarts@gmail.com',
    location: 'Durham, NC (2606 Hillsborough Road)',
    website: 'https://www.fishergraphicarts.com',
    specificDiagnosis: 'your website uses a basic static layout conducting archival framing intake via public Gmail, missing an interactive quote estimator or mobile consultation scheduler'
  },
  {
    slug: 'townhouse-art-and-framing',
    businessName: 'Townhouse Art & Framing',
    contactName: 'Emily Russell (Proprietor)',
    firstName: 'Emily',
    email: 'townhouseartandframing@gmail.com',
    location: 'Wilmington, NC (894 5b South Kerr Avenue)',
    website: 'https://www.townhouseartandframe.com',
    specificDiagnosis: 'your shop routes orders and consultations to a personal mailbox, lacking an online booking calendar or digital moulding breakdown'
  },
  {
    slug: 'the-starving-artist',
    businessName: 'The Starving Artist',
    contactName: 'Matthew Smith (Owner)',
    firstName: 'Matthew',
    email: 'wncstarvingartist@gmail.com',
    location: 'Hendersonville, NC (814 Kanuga Rd)',
    website: 'https://www.wncstarvingartist.com',
    specificDiagnosis: 'your website relies on a basic template routing quotes to Gmail, missing a modern consultation calendar and digital frame selector'
  },
  {
    slug: 's-and-s-custom-framing',
    businessName: 'S & S Custom Framing',
    contactName: 'Ryan Sobb (Co-Owner)',
    firstName: 'Ryan',
    email: 'sandscustomframing@gmail.com',
    location: 'Nashville, TN (4811 Trousdale Drive, Suite I)',
    website: 'https://www.sandscustomframing.com',
    specificDiagnosis: 'your site is a single-page placeholder routing framing orders to Gmail, lacking an appointment scheduler and digital portfolio filter for concert posters, fine art, and shadowboxes'
  },
  {
    slug: 'gannon-art-center',
    businessName: 'Gannon Art Center',
    contactName: 'Lisa Norris & Ed Gannon (Management)',
    firstName: 'Lisa and Ed',
    email: 'gannonart1@gmail.com',
    location: 'Chattanooga, TN (3250 Brainerd Rd)',
    website: 'https://www.gannonartcenter.com',
    specificDiagnosis: 'your website handles framing estimates through public Gmail, without a mobile consultation booking tool or interactive moulding visualizer'
  },
  {
    slug: 'edgewood-frame-shop',
    businessName: 'Edgewood Frame Shop',
    contactName: 'Grace Eskridge (Master Framer)',
    firstName: 'Grace',
    email: 'edgewoodframe@bellsouth.net',
    location: 'Homewood, AL (1003 Oxmoor Road)',
    website: 'http://www.edgewoodframeshop.com',
    specificDiagnosis: 'your website is built on a legacy static architecture with poor mobile readability, no online appointment scheduling, and no interactive frame catalogue'
  },
  {
    slug: 'alexandria-picture-framing-company',
    businessName: 'Alexandria Picture Framing Company',
    contactName: 'Soung S. Lee (Master Framer)',
    firstName: 'Soung',
    email: 'soung52@verizon.net',
    location: 'Alexandria, VA (110 S Fayette St)',
    website: 'http://www.alexandriapicture.com',
    specificDiagnosis: 'your website is currently running on a fixed-width early 2000s layout with broken mobile viewports, unformatted text, and no online booking'
  },
  {
    slug: 'fralin-art-and-frame',
    businessName: 'Fralin Art & Frame',
    contactName: 'John Fralin (Master Woodworker)',
    firstName: 'John',
    email: 'Fralinartandframe@gmail.com',
    location: 'Richmond, VA (3412 Semmes Ave)',
    website: 'https://www.fralinartandframe.com',
    specificDiagnosis: 'your site routes custom woodworking and conservation framing to Gmail, lacking an interactive hardwood showcase and online consultation scheduler'
  }
];

// 4. Outreach History File
const historyPath = path.resolve(__dirname, 'outreach_history.json');
let history = [];
if (fs.existsSync(historyPath)) {
  history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
}

// Function to construct email content with UTM tracking
function buildEmail(p) {
  const city = p.location.split('(')[0].trim();
  const tuxedoUtm = `https://tuxedoframegallery.com?utm_source=beeclue&utm_medium=email&utm_campaign=outreach-art-galleries-${p.slug}`;
  const caseStudyUtm = `https://beeclue.com/case-studies/tuxedo-frame-gallery?utm_source=beeclue&utm_medium=email&utm_campaign=outreach-art-galleries-${p.slug}`;
  const beeclueUtm = `https://beeclue.com?utm_source=beeclue&utm_medium=email&utm_campaign=outreach-art-galleries-${p.slug}`;

  const subject = `Modernizing the website for ${p.businessName}`;

  const text = `Hi ${p.firstName},

I came across ${p.businessName} in ${city} and really admire your custom framing craftsmanship and dedication to archival preservation.

I noticed that ${p.specificDiagnosis}. In the custom framing and fine art space, high-ticket clients and interior designers are searching on mobile and looking for digital viewing rooms, moulding previews (Roma, Larson-Juhl), and quick consultation booking.

We recently partnered with Tuxedo Frame Gallery in Buckhead, Atlanta (${tuxedoUtm}) to build an editorial digital atelier that showcases 35+ years of master framing and fine art restoration, complete with multi-channel consultation booking (in-gallery, virtual, and in-home) and local search dominance.

To show you what’s possible for ${p.businessName}, we’d love to put together a free 48-hour interactive mobile website mockup and local SEO audit for your shop — completely free with zero obligation.

Would you be open to taking a quick look later this week?

Best regards,
Kay
Beeclue Tech
${beeclueUtm} · 647-577-0413
Case Study Reference: ${caseStudyUtm}`;

  return { subject, text, tuxedoUtm, caseStudyUtm, beeclueUtm };
}

// Dispatch function via curl
function sendViaCurl(to, subject, text) {
  const payload = {
    from: "Kay at Beeclue Tech <hello@beeclue.com>",
    to: [to],
    subject: subject,
    text: text
  };

  const payloadStr = JSON.stringify(payload);
  const tempPayloadFile = path.resolve(__dirname, `_temp_payload_${Date.now()}.json`);
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
  console.log(`Starting Galleries Outreach Dispatch (Mode: ${isDryRun ? 'DRY-RUN' : 'LIVE'})...\n`);

  let sentCount = 0;
  let skippedCount = 0;

  for (let i = 0; i < prospects.length; i++) {
    const p = prospects[i];

    if (blacklistedEmails.has(p.email.toLowerCase())) {
      console.log(`[SKIP - BLACKLISTED] ${p.businessName} (${p.email})`);
      skippedCount++;
      continue;
    }

    // Check if already in outreach_history
    const alreadyContacted = history.find(h => (h.email || '').toLowerCase() === p.email.toLowerCase());
    if (alreadyContacted) {
      console.log(`[SKIP - ALREADY CONTACTED] ${p.businessName} (${p.email})`);
      skippedCount++;
      continue;
    }

    const { subject, text, caseStudyUtm } = buildEmail(p);

    if (isDryRun) {
      console.log(`--- [DRY-RUN ${i + 1}/${prospects.length}] ${p.businessName} <${p.email}> ---`);
      console.log(`Subject: ${subject}`);
      console.log(text);
      console.log('--------------------------------------------------\n');
      sentCount++;
      continue;
    }

    console.log(`[SENDING ${i + 1}/${prospects.length}] ${p.businessName} -> ${p.email}...`);
    const result = sendViaCurl(p.email, subject, text);

    if (result.success) {
      console.log(`✓ Delivered! Resend ID: ${result.id}`);
      sentCount++;

      // Record to history
      const now = new Date().toISOString();
      history.push({
        id: p.slug,
        firmName: p.businessName,
        contactName: p.contactName,
        email: p.email,
        website: p.website || "None (GBP only)",
        niche: "Fine Art Gallery & Custom Picture Framing",
        location: p.location,
        pricingQuoted: "Custom proposal / Free Mockup",
        initialContactDate: now,
        lastContactDate: now,
        status: "delivered",
        sequenceStep: "Day 0 - Initial Outreach",
        diagnosedIssues: p.specificDiagnosis,
        caseStudySent: caseStudyUtm,
        history: [
          {
            step: "Day 0",
            sentAt: now,
            subject: subject,
            resendId: result.id,
            status: "delivered",
            notes: "Initial value-first outreach sent featuring Tuxedo Frame Gallery case study, specific website diagnosis, and free 48-hour mockup offer with UTM tracking."
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
  console.log(`Dispatch Summary: Sent: ${sentCount}, Skipped: ${skippedCount}, Total Candidates: ${prospects.length}`);
  console.log(`========================================`);
}

main().catch(console.error);
