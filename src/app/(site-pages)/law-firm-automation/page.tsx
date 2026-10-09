"use client";

import Link from "next/link";
import styles from "@/app/page.module.css";
import localStyles from "./automation.module.css";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Scale,
  Calendar,
  FileText,
  MessageSquare,
  Star,
  Workflow,
  Zap,
  Lock,
  PhoneCall,
  UserCheck,
  SlidersHorizontal,
  FolderSync
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";
import LawFirmCalculator from "@/components/LawFirmCalculator";
import LawFirmAuditForm from "@/components/LawFirmAuditForm";
import FaqAccordion from "@/components/FaqAccordion";

export default function LawFirmAutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "LegalService"],
    "name": "Law Firm Practice Workflow Automation",
    "serviceType": "Legal Workflow Automation & Practice Intake Systems",
    "provider": {
      "@type": "Organization",
      "name": "Beeclue Tech",
      "url": "https://beeclue.com"
    },
    "description": "Turnkey practice workflow automation for solo practitioners and boutique law firms. 24/7 client intake, automated conflict screening, self-serve consultation booking, retainer e-signatures, document collection, and Google review generation.",
    "areaServed": ["Canada", "United States"],
    "priceRange": "$$"
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beeclue.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Law Firm Automation", "item": "https://beeclue.com/law-firm-automation" }
    ]
  };

  const faqs = [
    {
      q: "Does your practice automation replace our practice management software like Clio or PracticePanther?",
      a: "No, it enhances it. Rather than forcing you to adopt bloated enterprise systems or learn new software, our automations live directly on your law firm's website and connect seamlessly into your existing tools (Clio, LawPay, PracticePanther, MyCase, Smokeball, Google Workspace, and Microsoft Outlook). Inquiries, consultation appointments, and intake notes automatically push directly into your firm's calendar and CRM."
    },
    {
      q: "Are these automated legal intake workflows compliant with Law Society and Bar Association rules?",
      a: "Yes. Every intake workflow we architect complies strictly with Law Society of Ontario (LSO) Rule 4.2 / Rule 3.3 and American Bar Association (ABA) Model Rules 1.6, 7.1, and 7.2. We enforce automated legal disclaimers confirming that online intake or booking does not establish a solicitor-client relationship until a formal retainer is executed. Furthermore, opposing party fields are captured before booking to ensure conflict checking integrity."
    },
    {
      q: "Can we collect consultation fees automatically prior to booking?",
      a: "Yes. For practice areas where you charge for initial consultations (such as family law, corporate consultations, or contested estate disputes), we can integrate LawPay or Stripe directly into the booking flow. Prospective clients select an available time slot and process the fee in one secure step, virtually eliminating tire-kickers and unpaid consults."
    },
    {
      q: "How does the automated document collection system work?",
      a: "Once you accept a case or consultation, the client automatically receives a secure mobile-responsive checklist tailored to your practice area (e.g. police reports, tax returns, deeds, or medical bills). Clients can upload photos or PDFs directly from their phones with 256-bit encryption. If items remain missing after 48 or 96 hours, polite automated SMS or email nudges follow up on your behalf."
    },
    {
      q: "How long does it take to implement law firm workflow automations?",
      a: "Most custom law firm website and practice workflow implementations are launched within 2 to 3 weeks. We handle the intake logic architecture, calendar synchronization, email/SMS trigger setup, and full compliance testing from start to finish."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main className={localStyles.automationMain}>
      <ServiceTracker />
      <LawFirmAuditForm />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO SECTION */}
      <section className={`${styles.baseSection} ${localStyles.heroSection}`}>
        <FadeIn className={localStyles.heroContainer}>
          <div className={localStyles.badge}>
            <Workflow size={15} />
            <span>Legal Practice Workflow Automation</span>
          </div>

          <h1 className={localStyles.heroTitle}>
            Turn Your Law Firm Website into Your
            <span className={localStyles.heroTitleHighlight}>Hardest-Working Paralegal</span>
          </h1>

          <p className={localStyles.heroSubtitle}>
            Solo practitioners and boutique law firms lose 15+ non-billable hours each week playing phone tag, screening unqualified tire-kickers, and chasing client documents. We engineer intelligent website workflows that triage leads 24/7, sync consultations to your calendar, and automate client onboarding—so you can focus on practicing law.
          </p>

          <div className={localStyles.ctaGroup}>
            <Link href="/contact" className={localStyles.primaryCta}>
              Book an Automation Discovery Demo <ArrowRight size={18} />
            </Link>
            <a
              href="https://taralattanzio.ca?utm_source=beeclue&utm_medium=blog&utm_campaign=law-firm-automation"
              target="_blank"
              rel="noopener noreferrer"
              className={localStyles.secondaryCta}
            >
              View Reference Law Practice <ArrowRight size={16} />
            </a>
          </div>

          <div className={localStyles.trustBar}>
            <span className={localStyles.trustItem}>
              <ShieldCheck size={16} color="var(--primary)" />
              LSO &amp; ABA Advertising Compliant
            </span>
            <span className={localStyles.trustItem}>
              <Lock size={16} color="var(--primary)" />
              256-Bit Encrypted PIPEDA / HIPAA Intake
            </span>
            <span className={localStyles.trustItem}>
              <FolderSync size={16} color="var(--primary)" />
              Syncs with Clio, LawPay, Outlook &amp; Gmail
            </span>
          </div>
        </FadeIn>
      </section>

      {/* THE ADMINISTRATIVE LEAKS CHAPTER */}
      <section className={localStyles.statsSection}>
        <FadeIn>
          <div className={localStyles.sectionHeader} style={{ marginBottom: "2.5rem" }}>
            <span className={localStyles.sectionEyebrow}>The Administrative Dilemma</span>
            <h2 className={localStyles.sectionTitle}>Why Boutique Law Firms Leak Billable Hours</h2>
            <p className={localStyles.sectionSubtitle}>
              When an attorney is in court, in depositions, or drafting briefs, administrative friction costs money and loses cases.
            </p>
          </div>

          <div className={localStyles.statsGrid}>
            <div className={localStyles.statCard}>
              <span className={localStyles.statNumber}>67%</span>
              <h3 className={localStyles.statLabel}>Lost to Competitors</h3>
              <p className={localStyles.statDesc}>
                67% of legal consumers hire the very first law firm that responds. If a prospect calls while you are in court, they move to the next lawyer on Google.
              </p>
            </div>

            <div className={localStyles.statCard}>
              <span className={localStyles.statNumber}>15+ hrs</span>
              <h3 className={localStyles.statLabel}>Wasted Weekly</h3>
              <p className={localStyles.statDesc}>
                Average non-billable time spent per attorney each week on intake phone tag, vetting unqualified inquiries, and manually collecting basic documents.
              </p>
            </div>

            <div className={localStyles.statCard}>
              <span className={localStyles.statNumber}>40%</span>
              <h3 className={localStyles.statLabel}>Status Call Interruption</h3>
              <p className={localStyles.statDesc}>
                40% of inbound calls to small firms are existing clients asking &quot;What is happening with my case?&quot;—shattering deep legal concentration.
              </p>
            </div>

            <div className={localStyles.statCard}>
              <span className={localStyles.statNumber}>-70%</span>
              <h3 className={localStyles.statLabel}>No-Show Reduction</h3>
              <p className={localStyles.statDesc}>
                Automated SMS reminders and one-click calendar invites cut missed consultations and last-minute cancellations by over 70%.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 5 CORE PRACTICE AUTOMATIONS */}
      <section className={styles.baseSection}>
        <FadeIn>
          <div className={localStyles.sectionHeader}>
            <span className={localStyles.sectionEyebrow}>Turnkey Practice Workflows</span>
            <h2 className={localStyles.sectionTitle}>Five Automations That Run Your Firm on Autopilot</h2>
            <p className={localStyles.sectionSubtitle}>
              Engineered specifically for solo attorneys and small partnerships who need enterprise efficiency without enterprise complexity.
            </p>
          </div>

          <div className={localStyles.featuresGrid}>
            {/* Automation 1 */}
            <div className={localStyles.featureCard}>
              <div className={localStyles.featureIconWrapper}>
                <Zap size={26} />
              </div>
              <h3 className={localStyles.featureTitle}>1. Instant Speed-to-Lead &amp; Conflict Screening</h3>
              <p className={localStyles.featureDesc}>
                Interactive intake forms that qualify practice area, court county, and opposing party names upfront. The attorney receives instant SMS alerts while the client gets an immediate, professional confirmation.
              </p>
              <ul className={localStyles.featureChecklist}>
                <li className={localStyles.featureCheckItem}>
                  <CheckCircle2 size={16} />
                  <span>Conditional branching filters out-of-jurisdiction inquiries</span>
                </li>
                <li className={localStyles.featureCheckItem}>
                  <CheckCircle2 size={16} />
                  <span>Opposing party data captured upfront to safeguard conflict checks</span>
                </li>
                <li className={localStyles.featureCheckItem}>
                  <CheckCircle2 size={16} />
                  <span>Sub-30-second automated response locks in prospective clients</span>
                </li>
              </ul>
            </div>

            {/* Automation 2 */}
            <div className={localStyles.featureCard}>
              <div className={localStyles.featureIconWrapper}>
                <Calendar size={26} />
              </div>
              <h3 className={localStyles.featureTitle}>2. Self-Serve Consultation Booking</h3>
              <p className={localStyles.featureDesc}>
                Eliminate 5 rounds of email and voicemail tag. Qualified prospects select open consultation times directly on your site, synced in real time with your court appearance schedule and calendar buffers.
              </p>
              <ul className={localStyles.featureChecklist}>
                <li className={localStyles.featureCheckItem}>
                  <CheckCircle2 size={16} />
                  <span>Direct sync with Clio, Outlook, and Google Calendar</span>
                </li>
                <li className={localStyles.featureCheckItem}>
                  <CheckCircle2 size={16} />
                  <span>Automated 24-hour and 2-hour SMS &amp; email consultation reminders</span>
                </li>
                <li className={localStyles.featureCheckItem}>
                  <CheckCircle2 size={16} />
                  <span>Optional upfront consultation fee processing (LawPay / Stripe)</span>
                </li>
              </ul>
            </div>

            {/* Automation 3 */}
            <div className={localStyles.featureCard}>
              <div className={localStyles.featureIconWrapper}>
                <FileText size={26} />
              </div>
              <h3 className={localStyles.featureTitle}>3. Retainer E-Signatures &amp; Document Chasing</h3>
              <p className={localStyles.featureDesc}>
                Stop spending weeks chasing blurry photos of driver&apos;s licenses, police reports, and tax returns. Clients receive a secure, mobile-friendly upload portal with automated reminder nudges.
              </p>
              <ul className={localStyles.featureChecklist}>
                <li className={localStyles.featureCheckItem}>
                  <CheckCircle2 size={16} />
                  <span>One-click digital engagement letter / retainer agreement dispatch</span>
                </li>
                <li className={localStyles.featureCheckItem}>
                  <CheckCircle2 size={16} />
                  <span>Automated practice-specific document checklist upload portal</span>
                </li>
                <li className={localStyles.featureCheckItem}>
                  <CheckCircle2 size={16} />
                  <span>Automated friendly SMS reminders at 48h and 96h for missing items</span>
                </li>
              </ul>
            </div>

            {/* Automation 4 */}
            <div className={localStyles.featureCard}>
              <div className={localStyles.featureIconWrapper}>
                <MessageSquare size={26} />
              </div>
              <h3 className={localStyles.featureTitle}>4. Automated Milestone Status Updates</h3>
              <p className={localStyles.featureDesc}>
                Reassure clients without picking up the phone. Trigger plain-English automated updates when court filings are completed, court dates are set, or discovery materials are reviewed.
              </p>
              <ul className={localStyles.featureChecklist}>
                <li className={localStyles.featureCheckItem}>
                  <CheckCircle2 size={16} />
                  <span>Pre-configured milestone triggers: Pleadings Filed, Hearing Set, etc.</span>
                </li>
                <li className={localStyles.featureCheckItem}>
                  <CheckCircle2 size={16} />
                  <span>Cuts routine administrative check-in calls by up to 60%</span>
                </li>
                <li className={localStyles.featureCheckItem}>
                  <CheckCircle2 size={16} />
                  <span>Reinforces client trust, responsiveness, and premium perceived value</span>
                </li>
              </ul>
            </div>

            {/* Automation 5 */}
            <div className={localStyles.featureCard}>
              <div className={localStyles.featureIconWrapper}>
                <Star size={26} />
              </div>
              <h3 className={localStyles.featureTitle}>5. 5-Star Google Review Generation Engine</h3>
              <p className={localStyles.featureDesc}>
                Never forget to request a review after winning a case or finalizing an estate plan. Automatically send a polite, 1-click review link to satisfied clients right when their satisfaction is at its peak.
              </p>
              <ul className={localStyles.featureChecklist}>
                <li className={localStyles.featureCheckItem}>
                  <CheckCircle2 size={16} />
                  <span>Triggered automatically 3–5 days after matter resolution</span>
                </li>
                <li className={localStyles.featureCheckItem}>
                  <CheckCircle2 size={16} />
                  <span>Direct deep-link straight to your firm&apos;s Google Business Profile modal</span>
                </li>
                <li className={localStyles.featureCheckItem}>
                  <CheckCircle2 size={16} />
                  <span>Builds sustainable local SEO dominance in your county or city</span>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* HOW IT WORKS / 4-STEP WORKFLOW TIMELINE */}
      <section className={`${styles.baseSection} ${localStyles.integrationSection}`}>
        <FadeIn>
          <div className={localStyles.sectionHeader}>
            <span className={localStyles.sectionEyebrow}>Seamless Practice Flow</span>
            <h2 className={localStyles.sectionTitle}>How the Complete Workflow Operates</h2>
            <p className={localStyles.sectionSubtitle}>
              From first click on Google to five-star review, here is how automated client acquisition looks for your law practice.
            </p>
          </div>

          <div className={localStyles.processContainer}>
            <div className={localStyles.stepCard}>
              <div className={localStyles.stepNumber}>1</div>
              <h3 className={localStyles.stepTitle}>Intelligent Intake</h3>
              <p className={localStyles.stepDesc}>
                Prospect completes conditional intake on your website. Case type, jurisdiction, and urgency are vetted instantly.
              </p>
            </div>

            <div className={localStyles.stepCard}>
              <div className={localStyles.stepNumber}>2</div>
              <h3 className={localStyles.stepTitle}>Calendar Booking</h3>
              <p className={localStyles.stepDesc}>
                Qualified lead books directly into your open calendar slots. SMS confirmations and automated prep guides are dispatched.
              </p>
            </div>

            <div className={localStyles.stepCard}>
              <div className={localStyles.stepNumber}>3</div>
              <h3 className={localStyles.stepTitle}>Onboarding &amp; Docs</h3>
              <p className={localStyles.stepDesc}>
                Retainer agreement is signed digitally. Client uploads needed documents into an encrypted portal with auto-followups.
              </p>
            </div>

            <div className={localStyles.stepCard}>
              <div className={localStyles.stepNumber}>4</div>
              <h3 className={localStyles.stepTitle}>Milestones &amp; Reviews</h3>
              <p className={localStyles.stepDesc}>
                Automated status notifications keep clients calm during the case; automated 5-star Google review request triggers upon close.
              </p>
            </div>
          </div>

          {/* INTEGRATIONS SUBSECTION */}
          <div style={{ marginTop: "5rem" }}>
            <span className={localStyles.sectionEyebrow}>Zero Software Bloat</span>
            <h3 className={localStyles.sectionTitle} style={{ fontSize: "1.875rem" }}>
              We Connect Directly to the Tools You Already Use
            </h3>
            <p className={localStyles.sectionSubtitle} style={{ maxWidth: "650px", margin: "0 auto" }}>
              No need to switch software or pay for expensive third-party enterprise platforms. We plug directly into your current practice ecosystem.
            </p>

            <div className={localStyles.integrationGrid}>
              <div className={localStyles.integrationCard}>
                <FolderSync size={24} color="var(--primary)" />
                <span>Clio Manage &amp; Grow</span>
                <span className={localStyles.integrationCategory}>Practice Management</span>
              </div>
              <div className={localStyles.integrationCard}>
                <Scale size={24} color="var(--primary)" />
                <span>LawPay</span>
                <span className={localStyles.integrationCategory}>Legal Billing &amp; Trust</span>
              </div>
              <div className={localStyles.integrationCard}>
                <Calendar size={24} color="var(--primary)" />
                <span>Google Workspace</span>
                <span className={localStyles.integrationCategory}>Calendar &amp; Email</span>
              </div>
              <div className={localStyles.integrationCard}>
                <Calendar size={24} color="var(--primary)" />
                <span>Microsoft 365 / Outlook</span>
                <span className={localStyles.integrationCategory}>Calendar &amp; Email</span>
              </div>
              <div className={localStyles.integrationCard}>
                <SlidersHorizontal size={24} color="var(--primary)" />
                <span>PracticePanther</span>
                <span className={localStyles.integrationCategory}>Practice Management</span>
              </div>
              <div className={localStyles.integrationCard}>
                <FolderSync size={24} color="var(--primary)" />
                <span>MyCase &amp; Smokeball</span>
                <span className={localStyles.integrationCategory}>Practice Management</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ROI & TIME-SAVINGS CALCULATOR */}
      <section className={styles.baseSection}>
        <FadeIn>
          <div className={localStyles.sectionHeader}>
            <span className={localStyles.sectionEyebrow}>Practice ROI Economics</span>
            <h2 className={localStyles.sectionTitle}>Calculate Recovered Billable Hours &amp; Retainer Revenue</h2>
            <p className={localStyles.sectionSubtitle}>
              Estimate how much non-billable administrative time you can reclaim and the case revenue potential of sub-30-second speed-to-lead.
            </p>
          </div>

          <LawFirmCalculator />
        </FadeIn>
      </section>

      {/* BAR ETHICS & DATA PRIVACY COMPLIANCE */}
      <section className={styles.baseSection} style={{ paddingTop: 0 }}>
        <FadeIn>
          <div className={localStyles.complianceBanner}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <Scale size={20} color="var(--primary)" />
                <span className={localStyles.sectionEyebrow} style={{ margin: 0 }}>Regulatory Compliance</span>
              </div>
              <h3 className={localStyles.complianceTitle}>Law Society (LSO) &amp; ABA Advertising Standards</h3>
              <p className={localStyles.complianceText}>
                Every intake form and marketing asset is built in strict adherence with Law Society of Ontario (LSO) Rule 4.2 and ABA Model Rules 7.1/7.2. Clear, compliant disclaimers confirm that initial inquiries do not create a solicitor-client relationship until conflict screening and formal retainer execution are complete.
              </p>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <Lock size={20} color="var(--primary)" />
                <span className={localStyles.sectionEyebrow} style={{ margin: 0 }}>Client Data Security</span>
              </div>
              <h3 className={localStyles.complianceTitle}>PIPEDA, HIPAA &amp; 256-Bit SSL Form Security</h3>
              <p className={localStyles.complianceText}>
                Confidentiality is sacred under LSO Rule 3.3 and attorney-client privilege guidelines. All client intake data, case summaries, and uploaded documents are encrypted in transit via TLS 1.3 and stored with strict role-based access control. Zero unvetted third-party tracking or ad trackers touch client legal submissions.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FAQ ACCORDION */}
      <section className={styles.baseSection}>
        <FadeIn>
          <div className={localStyles.sectionHeader}>
            <span className={localStyles.sectionEyebrow}>Frequently Asked Questions</span>
            <h2 className={localStyles.sectionTitle}>Everything You Need to Know About Legal Automation</h2>
            <p className={localStyles.sectionSubtitle}>
              Have questions about how automated intake and scheduling integrate with your firm? Here are direct answers.
            </p>
          </div>

          <FaqAccordion faqs={faqs} />
        </FadeIn>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className={localStyles.ctaSection}>
        <FadeIn className={localStyles.ctaContainer}>
          <span className={localStyles.sectionEyebrow}>Ready to Modernize Your Firm?</span>
          <h2 className={localStyles.ctaTitle}>
            Stop Chasing Leads. Start Practicing Law.
          </h2>
          <p className={localStyles.ctaSubtitle}>
            We will review your current intake process and build a complimentary 48-hour prototype showing how your firm&apos;s intake, scheduling, and document workflows can run on autopilot.
          </p>
          <div className={localStyles.ctaGroup}>
            <Link href="/contact" className={localStyles.primaryCta}>
              Claim Your Free Practice Automation Audit <ArrowRight size={18} />
            </Link>
            <Link href="/web-design-for-law-firms" className={localStyles.secondaryCta}>
              View Law Firm Web Design Services
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
