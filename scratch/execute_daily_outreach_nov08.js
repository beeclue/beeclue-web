const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment
const envContent = fs.readFileSync(path.join(__dirname, '../.env'), 'utf8');
const keyMatch = envContent.match(/RESEND_API_KEY=([^\r\n]+)/);
if (!keyMatch) {
  console.error('RESEND_API_KEY not found in .env');
  process.exit(1);
}
const RESEND_API_KEY = keyMatch[1].trim();

const HISTORY_PATH = path.join(__dirname, '../agents/marketing/outreach_history.json');
const BLACKLIST_PATH = path.join(__dirname, '../agents/marketing/blacklist.json');

const LAWYERS_PATH = path.join(__dirname, 'today_nov08_lawyers_30.json');
const ACCTS_PATH = path.join(__dirname, 'today_nov08_accountants_30.json');
const FOLLOWUPS_PATH = path.join(__dirname, 'today_nov08_followups_40.json');
const RECEIPTS_PATH = path.join(__dirname, 'today_nov08_receipts.json');

const history = JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf8'));
const blacklist = JSON.parse(fs.readFileSync(BLACKLIST_PATH, 'utf8'));
const lawyers = JSON.parse(fs.readFileSync(LAWYERS_PATH, 'utf8'));
const accountants = JSON.parse(fs.readFileSync(ACCTS_PATH, 'utf8'));
const followups = JSON.parse(fs.readFileSync(FOLLOWUPS_PATH, 'utf8'));

const historyEmails = new Set(history.map(h => (h.email || '').toLowerCase().trim()));
const blacklistEmails = new Set(blacklist.map(b => (typeof b === 'string' ? b : (b.email || '')).toLowerCase().trim()));

function sendResendEmail(payload) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const req = https.request('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
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
            reject(new Error(`Resend API Error (${res.statusCode}): ${JSON.stringify(parsed)}`));
          }
        } catch (e) {
          reject(new Error(`Failed to parse response: ${body}`));
        }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log(`=======================================================`);
  console.log(`Executing Daily Outreach Engine for Today (Nov 08, 2026):`);
  console.log(`  [1] 30 California Law Firms (San Benito & Mendocino Counties, Day 0)`);
  console.log(`  [2] 30 California Local Accountants & CPAs (Day 0)`);
  console.log(`  [3] 40 Day 4 Follow-Ups (Oct 29 Cohort: 20 Lawyers, 20 Accountants)`);
  console.log(`  Total: 100 Emails`);
  console.log(`  From: Kay at Beeclue Tech <hello@mail.beeclue.com>`);
  console.log(`  Reply-To: hello@beeclue.com`);
  console.log(`  Strictly NO BCC`);
  console.log(`  Zero Print Shops`);
  console.log(`=======================================================\n`);

  const updatedHistory = [...history];
  const historyMap = new Map();
  updatedHistory.forEach((rec, idx) => {
    historyMap.set((rec.email || '').toLowerCase().trim(), idx);
  });

  const receipts = [];

  // ==========================================
  // PART 1: 30 CALIFORNIA LAW FIRMS (DAY 0)
  // ==========================================
  console.log(`\n--- [1/3] DISPATCHING 30 CALIFORNIA LAW FIRMS ---`);
  for (let i = 0; i < lawyers.length; i++) {
    const lead = lawyers[i];
    const emailLower = lead.email.toLowerCase().trim();

    if (historyEmails.has(emailLower) || blacklistEmails.has(emailLower) || emailLower === 'lawpro@verizon.net') {
      console.log(`[SKIP - In DB / Blacklist] ${lead.email}`);
      continue;
    }

    const slug = lead.firmName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const subject = `24/7 client intake & consultation for ${lead.firmName}`;
    const caseStudyUrl = `https://taralattanzio.ca?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-${slug}`;
    const firstName = lead.firstName || (lead.fullName ? lead.fullName.split(' ')[0] : 'there');

    const textBody = `Hi ${firstName},

I hope your week is wrapping up well.

I came across your practice while looking into legal services in ${lead.city} and across ${lead.county} County. I noticed that ${lead.firmName} currently doesn't have an active standalone website, relying primarily on state bar listings and directory aggregators.

In close-knit California communities like ${lead.city}, word-of-mouth and local reputation are foundational. However, when local residents face an urgent matter in ${lead.practice.toLowerCase()}—whether it's an unexpected dispute, a family transition, or estate planning—their immediate first move is searching on their smartphone to learn who you are, how you work, and what steps to take before calling.

Without a dedicated website, prospective clients often find outdated directory aggregators or end up contacting larger regional firms that have an active web presence.

A modern website acts as a 24/7 business consultant and client intake advisor for your practice. Even while you're in court, in client consultations, or the office is closed for the weekend, your site:
• Clearly outlines your focus in ${lead.practice} and sets client expectations upfront
• Answers baseline questions so incoming callers are pre-screened and ready to retain you
• Provides direct one-tap calling and a confidential consultation inquiry form

At Beeclue Tech, we build clean, mobile-first websites specifically for solo practitioners and boutique law firms starting at $19/month—with $0 upfront build fee, zero technical maintenance on your part, and no long-term lock-in.

You can see an example of the clean, mobile-friendly design we build for legal practices here:
${caseStudyUrl}

If you'd like, I would be happy to put together a free, no-obligation custom mockup for ${lead.firmName} so you can see exactly how it looks before deciding anything.

Would you be open to seeing a quick concept?

Best regards,

Kay
Beeclue Tech
hello@beeclue.com · (647) 577-0413 · beeclue.com`;

    const htmlBody = `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.6; color: #1e293b; max-width: 620px;">
  <p>Hi ${firstName},</p>
  
  <p>I hope your week is wrapping up well.</p>
  
  <p>I came across your practice while looking into legal services in <strong>${lead.city}</strong> and across <strong>${lead.county} County</strong>. I noticed that ${lead.firmName} currently doesn't have an active standalone website, relying primarily on state bar listings and directory aggregators.</p>
  
  <p>In close-knit California communities like ${lead.city}, word-of-mouth and local reputation are foundational. However, when local residents face an urgent matter in <strong>${lead.practice.toLowerCase()}</strong>—whether it's an unexpected dispute, a family transition, or estate planning—their immediate first move is searching on their smartphone to learn who you are, how you work, and what steps to take before calling.</p>
  
  <p>Without a dedicated website, prospective clients often find outdated directory aggregators or end up contacting larger regional firms that have an active web presence.</p>
  
  <p>A modern website acts as a <strong>24/7 business consultant and client intake advisor</strong> for your practice. Even while you're in court, in client consultations, or the office is closed for the weekend, your site:</p>
  
  <ul style="padding-left: 20px; margin: 16px 0;">
    <li><strong>Client Education:</strong> Clearly outlines your focus in ${lead.practice} and sets client expectations upfront</li>
    <li><strong>Intake Screening:</strong> Answers baseline questions before callers dial, ensuring incoming inquiries are qualified and ready to retain you</li>
    <li><strong>Seamless Accessibility:</strong> Provides direct one-tap phone calling and a confidential consultation inquiry form</li>
  </ul>
  
  <p>At <strong>Beeclue Tech</strong>, we build clean, mobile-first websites specifically for solo practitioners and boutique law firms starting at <strong>$19/month</strong>—with $0 upfront build fee, zero technical maintenance on your part, and no long-term lock-in.</p>
  
  <p>You can see an example of the clean, mobile-friendly design we build for legal practices here:<br>
  <a href="${caseStudyUrl}" style="color: #2563eb; font-weight: 500; text-decoration: underline;">View Live Legal Practice Site (taralattanzio.ca)</a></p>
  
  <p>If you'd like, I would be happy to put together a <strong>free, no-obligation custom mockup for ${lead.firmName}</strong> so you can see exactly how it looks before deciding anything.</p>
  
  <p>Would you be open to seeing a quick concept?</p>
  
  <p style="margin-top: 24px; margin-bottom: 0;">Best regards,</p>
  <p style="margin-top: 4px; font-weight: 600; color: #0f172a; margin-bottom: 2px;">Kay</p>
  <p style="margin: 0; color: #64748b; font-size: 14px;">Beeclue Tech</p>
  <p style="margin: 2px 0 0 0; color: #64748b; font-size: 13px;">hello@beeclue.com &middot; (647) 577-0413 &middot; <a href="https://beeclue.com" style="color: #64748b; text-decoration: none;">beeclue.com</a></p>
</div>`;

    const payload = {
      from: 'Kay at Beeclue Tech <hello@mail.beeclue.com>',
      reply_to: 'hello@beeclue.com',
      to: [lead.email],
      subject: subject,
      html: htmlBody,
      text: textBody
    };

    let attempts = 0;
    let delivered = false;
    while (attempts < 2 && !delivered) {
      attempts++;
      try {
        console.log(`[Lawyer ${i + 1}/30] Sending to ${lead.fullName} (${lead.city}, CA)...`);
        const res = await sendResendEmail(payload);
        const resendId = res.id;
        const sentAt = new Date().toISOString();
        console.log(` -> Delivered! ID: ${resendId}`);

        receipts.push({
          batch: 'Lawyer Day 0',
          fullName: lead.fullName,
          firmName: lead.firmName,
          email: lead.email,
          city: lead.city,
          county: lead.county,
          resendId: resendId,
          sentAt: sentAt,
          status: 'delivered'
        });

        const newRecord = {
          id: `lawyer-${slug}`,
          firmName: lead.firmName,
          contactName: lead.fullName,
          email: lead.email,
          phone: lead.phone || '',
          website: 'None (State Bar / Directory Only)',
          niche: `Solo / Boutique Legal Practice - ${lead.practice}`,
          location: `${lead.city}, CA (${lead.county} County)`,
          pricingQuoted: '$19/mo Core',
          initialContactDate: sentAt,
          lastContactDate: sentAt,
          status: 'delivered',
          sequenceStep: 'Day 0 - Initial Outreach',
          diagnosedIssues: `Solo / boutique California attorney in ${lead.city} without an active standalone website. Relies on state bar and directories. Offered free custom mockup + $19/mo tier.`,
          caseStudySent: caseStudyUrl,
          history: [
            {
              step: 'Day 0',
              sentAt: sentAt,
              subject: subject,
              resendId: resendId,
              status: 'delivered',
              notes: `Solo attorney outreach (NO BCC). Highlighted lack of standalone site, 24/7 client intake advisor positioning, taralattanzio.ca proof, and $19/mo Core tier. Sent from hello@mail.beeclue.com with reply_to hello@beeclue.com.`
            }
          ]
        };

        updatedHistory.push(newRecord);
        historyEmails.add(emailLower);
        delivered = true;
      } catch (err) {
        console.error(` -> Attempt ${attempts} FAILED for ${lead.email}: ${err.message}`);
        if (attempts < 2) await sleep(1500);
      }
    }

    await sleep(900);
  }

  // ==========================================
  // PART 2: 30 CALIFORNIA LOCAL ACCOUNTANTS (DAY 0)
  // ==========================================
  console.log(`\n--- [2/3] DISPATCHING 30 CALIFORNIA LOCAL ACCOUNTANTS ---`);
  for (let i = 0; i < accountants.length; i++) {
    const acct = accountants[i];
    const emailLower = acct.email.toLowerCase().trim();

    if (historyEmails.has(emailLower) || blacklistEmails.has(emailLower) || emailLower === 'lawpro@verizon.net') {
      console.log(`[SKIP - In DB / Blacklist] ${acct.email}`);
      continue;
    }

    const slug = acct.firmName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const subject = `24/7 client intake & onboarding for ${acct.firmName}`;
    const acctUrl = `https://beeclue.com?utm_source=beeclue&utm_medium=email&utm_campaign=sales-outreach-acct-${slug}`;
    const firstName = acct.firstName || (acct.contactName ? acct.contactName.split(' ')[0] : 'there');

    const textBody = `Hi ${firstName},

I hope your week is wrapping up well.

I came across your accounting practice while researching independent CPAs and tax advisors in ${acct.city} and across ${acct.county} County.

For local accounting practices, client trust and referrals are everything. However, as year-end planning approaches and small business owners or individuals look for local accounting support, the very first place they look is online on their mobile phone to verify your credentials, see what services you cover, and understand how to submit their documents before calling.

A fast, mobile-friendly website acts as a 24/7 client intake advisor and onboarding hub for your firm:
• Clearly outlines your tax planning, bookkeeping, and advisory specialties
• Pre-screens incoming clients with a clean document checklist and intake inquiry form
• Makes phone and appointment booking completely effortless for local clients

At Beeclue Tech, we build clean, mobile-first websites specifically for independent CPAs and accounting practices starting at $19/month—with $0 upfront build fee, zero technical maintenance on your part, and no long-term lock-in.

If you'd like, I would be happy to put together a free, no-obligation custom mockup for ${acct.firmName} so you can see exactly how it would look before deciding anything.

Would you be open to seeing a quick concept?

Best regards,

Kay
Beeclue Tech
hello@beeclue.com · (647) 577-0413 · beeclue.com`;

    const htmlBody = `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.6; color: #1e293b; max-width: 620px;">
  <p>Hi ${firstName},</p>
  
  <p>I hope your week is wrapping up well.</p>
  
  <p>I came across your accounting practice while researching independent CPAs and tax advisors in <strong>${acct.city}</strong> and across <strong>${acct.county} County</strong>.</p>
  
  <p>For local accounting practices, client trust and word-of-mouth are everything. However, as year-end planning approaches and small business owners or individuals look for local accounting support, the very first place they look is online on their mobile phone to verify your credentials, see what services you cover, and understand how to submit their documents before calling.</p>
  
  <p>A fast, mobile-friendly website acts as a <strong>24/7 client intake advisor and onboarding hub</strong> for your firm:</p>
  
  <ul style="padding-left: 20px; margin: 16px 0;">
    <li><strong>Client Education:</strong> Clearly outlines your tax planning, bookkeeping, and business advisory services</li>
    <li><strong>Pre-Screening:</strong> Streamlines client onboarding with a clear checklist and intake form before they call</li>
    <li><strong>Effortless Contact:</strong> One-tap phone calling and confidential appointment inquiry</li>
  </ul>
  
  <p>At <strong>Beeclue Tech</strong>, we build clean, mobile-first websites specifically for independent accounting firms and CPAs starting at <strong>$19/month</strong>—with $0 upfront build fee, zero technical maintenance on your part, and no long-term lock-in.</p>
  
  <p>If you'd like, I would be happy to put together a <strong>free, no-obligation custom mockup for ${acct.firmName}</strong> so you can see exactly how it would look before deciding anything.</p>
  
  <p>Would you be open to seeing a quick concept?</p>
  
  <p style="margin-top: 24px; margin-bottom: 0;">Best regards,</p>
  <p style="margin-top: 4px; font-weight: 600; color: #0f172a; margin-bottom: 2px;">Kay</p>
  <p style="margin: 0; color: #64748b; font-size: 14px;">Beeclue Tech</p>
  <p style="margin: 2px 0 0 0; color: #64748b; font-size: 13px;">hello@beeclue.com &middot; (647) 577-0413 &middot; <a href="https://beeclue.com" style="color: #64748b; text-decoration: none;">beeclue.com</a></p>
</div>`;

    const payload = {
      from: 'Kay at Beeclue Tech <hello@mail.beeclue.com>',
      reply_to: 'hello@beeclue.com',
      to: [acct.email],
      subject: subject,
      html: htmlBody,
      text: textBody
    };

    let attempts = 0;
    let delivered = false;
    while (attempts < 2 && !delivered) {
      attempts++;
      try {
        console.log(`[Accountant ${i + 1}/30] Sending to ${acct.contactName} (${acct.city}, CA)...`);
        const res = await sendResendEmail(payload);
        const resendId = res.id;
        const sentAt = new Date().toISOString();
        console.log(` -> Delivered! ID: ${resendId}`);

        receipts.push({
          batch: 'Accountant Day 0',
          firmName: acct.firmName,
          contactName: acct.contactName,
          email: acct.email,
          city: acct.city,
          county: acct.county,
          resendId: resendId,
          sentAt: sentAt,
          status: 'delivered'
        });

        const newRecord = {
          id: `acct-${slug}`,
          firmName: acct.firmName,
          contactName: acct.contactName,
          email: acct.email,
          phone: acct.phone || '',
          website: 'Independent Accounting / CPA Practice',
          niche: acct.niche || 'Local Independent CPA & Tax Advisory Practice',
          location: `${acct.city}, CA (${acct.county} County)`,
          pricingQuoted: '$19/mo Core',
          initialContactDate: sentAt,
          lastContactDate: sentAt,
          status: 'delivered',
          sequenceStep: 'Day 0 - Initial Outreach',
          diagnosedIssues: `Independent CPA / accounting practice in ${acct.city} (${acct.county} County). Offered 24/7 client intake advisor positioning, free custom mockup, and $19/mo Core tier.`,
          caseStudySent: acctUrl,
          history: [
            {
              step: 'Day 0',
              sentAt: sentAt,
              subject: subject,
              resendId: resendId,
              status: 'delivered',
              notes: `Independent accountant/CPA outreach (NO BCC). Highlighted 24/7 client intake advisor positioning, document submission checklist, free custom mockup preview, and $19/mo Core tier. Sent from hello@mail.beeclue.com with reply_to hello@beeclue.com.`
            }
          ]
        };

        updatedHistory.push(newRecord);
        historyEmails.add(emailLower);
        delivered = true;
      } catch (err) {
        console.error(` -> Attempt ${attempts} FAILED for ${acct.email}: ${err.message}`);
        if (attempts < 2) await sleep(1500);
      }
    }

    await sleep(900);
  }

  // ==========================================
  // PART 3: 40 DAY 4 FOLLOW-UPS
  // ==========================================
  console.log(`\n--- [3/3] DISPATCHING 40 DAY 4 FOLLOW-UPS ---`);
  for (let i = 0; i < followups.length; i++) {
    const parentRec = followups[i];
    const emailLower = parentRec.email.toLowerCase().trim();

    if (blacklistEmails.has(emailLower) || parentRec.status === 'in-conversation' || parentRec.status === 'not_interested' || emailLower === 'lawpro@verizon.net') {
      console.log(`[SKIP - Blacklisted / Suppressed] ${parentRec.email}`);
      continue;
    }

    const lastInteraction = parentRec.history[parentRec.history.length - 1];
    const initialSubject = lastInteraction.subject || `Website for ${parentRec.firmName}`;
    const subject = initialSubject.startsWith('Re:') ? initialSubject : `Re: ${initialSubject}`;
    const initialResendId = lastInteraction.resendId;

    const firstName = (parentRec.contactName || 'there').split(' ')[0] || 'there';

    const textBody = `Hi ${firstName},

I wanted to quickly follow up on my note below about a clean, modern web presence for ${parentRec.firmName}.

I know how busy your schedule can get. To make things as effortless as possible, our team is happy to put together a complimentary 48-hour custom mockup for your practice—with zero upfront cost or commitment—so you can see firsthand how a clean, mobile-first design would elevate client intake.

Would you be open to having us draft a preview for you to review?

Best regards,

Kay
Beeclue Tech
hello@beeclue.com · (647) 577-0413 · beeclue.com`;

    const htmlBody = `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.6; color: #1e293b; max-width: 620px;">
  <p>Hi ${firstName},</p>
  
  <p>I wanted to quickly follow up on my note below about a clean, modern web presence for <strong>${parentRec.firmName}</strong>.</p>
  
  <p>I know how busy your schedule can get. To make things as effortless as possible, our team is happy to put together a <strong>complimentary 48-hour custom mockup</strong> for your practice—with zero upfront cost or commitment—so you can see firsthand how a clean, mobile-first design would elevate client intake.</p>
  
  <p>Would you be open to having us draft a preview for you to review?</p>
  
  <p style="margin-top: 24px; margin-bottom: 0;">Best regards,</p>
  <p style="margin-top: 4px; font-weight: 600; color: #0f172a; margin-bottom: 2px;">Kay</p>
  <p style="margin: 0; color: #64748b; font-size: 14px;">Beeclue Tech</p>
  <p style="margin: 2px 0 0 0; color: #64748b; font-size: 13px;">hello@beeclue.com &middot; (647) 577-0413 &middot; <a href="https://beeclue.com" style="color: #64748b; text-decoration: none;">beeclue.com</a></p>
</div>`;

    const payload = {
      from: 'Kay at Beeclue Tech <hello@mail.beeclue.com>',
      reply_to: 'hello@beeclue.com',
      to: [parentRec.email],
      subject: subject,
      html: htmlBody,
      text: textBody,
      headers: initialResendId ? {
        'In-Reply-To': `<${initialResendId}@resend.dev>`,
        'References': `<${initialResendId}@resend.dev>`
      } : undefined
    };

    let attempts = 0;
    let delivered = false;
    while (attempts < 2 && !delivered) {
      attempts++;
      try {
        console.log(`[Follow-Up ${i + 1}/40] Sending to ${parentRec.firmName} (${parentRec.email})...`);
        const res = await sendResendEmail(payload);
        const resendId = res.id;
        const sentAt = new Date().toISOString();
        console.log(` -> Delivered! ID: ${resendId}`);

        receipts.push({
          batch: 'Follow-Up Day 4',
          firmName: parentRec.firmName,
          contactName: parentRec.contactName,
          email: parentRec.email,
          resendId: resendId,
          sentAt: sentAt,
          status: 'delivered'
        });

        // Update database record
        const recIndex = historyMap.get(emailLower);
        if (recIndex !== undefined) {
          const targetRec = updatedHistory[recIndex];
          targetRec.lastContactDate = sentAt;
          targetRec.sequenceStep = 'Day 4 - Follow-up';
          targetRec.history.push({
            step: 'Day 4 Follow-up',
            sentAt: sentAt,
            subject: subject,
            resendId: resendId,
            status: 'delivered',
            notes: `Day 4 threaded follow-up (NO BCC). Offered complimentary custom mockup preview. Sent from hello@mail.beeclue.com with reply_to hello@beeclue.com.`
          });
        }

        delivered = true;
      } catch (err) {
        console.error(` -> Attempt ${attempts} FAILED for ${parentRec.email}: ${err.message}`);
        if (attempts < 2) await sleep(1500);
      }
    }

    await sleep(900);
  }

  // ==========================================
  // SAVE PERSISTENT HISTORY & RECEIPTS
  // ==========================================
  console.log(`\n=======================================================`);
  console.log(`OUTREACH COMPLETED FOR TODAY (NOV 08, 2026):`);
  console.log(`  Total Delivered: ${receipts.length} / 100`);
  console.log(`=======================================================`);

  fs.writeFileSync(HISTORY_PATH, JSON.stringify(updatedHistory, null, 2));
  console.log(`Updated ${HISTORY_PATH} (Now ${updatedHistory.length} total entries)`);

  fs.writeFileSync(RECEIPTS_PATH, JSON.stringify(receipts, null, 2));
  console.log(`Saved delivery receipts to ${RECEIPTS_PATH}`);
}

run().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
