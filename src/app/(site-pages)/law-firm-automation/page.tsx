"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import {
  ArrowRight,
  CheckCircle2,
  Scale,
  Calendar,
  FileText,
  MessageSquare,
  Star,
  Zap,
  ShieldCheck,
  TrendingUp,
  Clock,
  Workflow
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";
import IndustryList from "@/components/IndustryList";
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
    "description": "Turnkey legal practice workflow automations for law firms and attorneys across Canada and the United States. 24/7 intelligent client intake, conflict screening, calendar booking, automated retainer e-signatures, document collection, and Google review generation.",
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
      q: "Does your practice automation replace practice management software like Clio or PracticePanther?",
      a: "No, it enhances it. Rather than forcing your firm to learn another complicated platform, our automations live directly on your website and plug seamlessly into the tools you already use (Clio, LawPay, PracticePanther, MyCase, Smokeball, Google Workspace, and Microsoft Outlook). Every intake inquiry, scheduled consultation, and client document syncs straight into your existing workflow."
    },
    {
      q: "Are these automated intake workflows compliant with Law Society and Bar Association rules?",
      a: "Yes. Every intake workflow we architect complies strictly with Law Society of Ontario (LSO) Rule 4.2 / Rule 3.3 and American Bar Association (ABA) Model Rules 1.6, 7.1, and 7.2. We enforce automated legal disclaimers confirming that online intake or booking does not establish a solicitor-client relationship until a formal retainer agreement is executed. Furthermore, opposing party fields are captured before booking to protect conflict screening integrity."
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
    <main className={styles.main}>
      <ServiceTracker />
      <LawFirmAuditForm />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Practice Workflow Automation</span>
            <span className={styles.titleLine}>for Law Firms &amp; Attorneys</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Solo practitioners and boutique law firms lose 15+ non-billable hours each week playing phone tag, screening unqualified tire-kickers, and chasing client documents. We engineer intelligent website workflows that triage leads 24/7, sync consultations to your calendar, and automate client onboarding—so you can focus on practicing law.
          </p>
          <div className={styles.heroRatingContainer}>
            <Link href="/contact" className={styles.ctaButton}>
              Book an Automation Demo <ArrowRight className={styles.arrow} />
            </Link>
            <div className={styles.heroRatingBadge}>
              <div style={{ color: "#fbbf24", fontSize: "1.25rem", letterSpacing: "2px" }}>★★★★★</div>
              <span style={{ color: "var(--muted)", fontSize: "0.875rem" }}>5.0 from 30+ reviews</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* HERO IMAGE */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div style={{ position: "relative", width: "100%", height: "500px", borderRadius: "24px", overflow: "hidden" }}>
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Modern law firm executive office and practice conference suite"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </FadeIn>

      {/* WHY YOUR LAW FIRM NEEDS PRACTICE AUTOMATION */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Why Boutique Law Firms Need Practice Workflow Automation</h2>
            <p>
              When someone needs legal counsel, speed is everything. Over 67% of legal consumers hire the very first law firm that responds. When a solo attorney is in court, in depositions, or preparing a motion, inquiries go unanswered and clients hire the next attorney on Google.
            </p>
            <p>
              Most law firm websites function as static digital brochures. Attorneys spend their evenings responding to voicemails, screening out-of-jurisdiction inquiries, and playing calendar phone tag. Read our guide on <Link href="/law-firm-website-design-seo-guide" style={{ color: "var(--primary-light)", textDecoration: "underline" }}>Law Firm Website Design &amp; SEO Strategies</Link>.
            </p>
            <p>
              At Beeclue Tech, we turn your website into an active practice engine. We connect smart client intake, automated conflict screening, self-serve booking, and document collection directly into your existing calendar and CRM—saving 10 to 15 hours of administrative drag every week.
            </p>
          </div>
          <div className={styles.luxuryCard}>
            <h3>What Practice Automation Delivers</h3>
            <p>A high-performing automated legal practice provides:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Sub-30-second speed-to-lead response locking in clients</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Conditional intake filtering out-of-jurisdiction inquiries</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Direct calendar sync eliminating 5-round consultation phone tag</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Digital retainer e-signatures and secure document checklists</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Automated 5-star Google review requests upon case resolution</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ESSENTIAL FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Essential Automations for Modern Law Firms</h2>
          <p>We build every law firm website with intelligent workflows designed specifically for attorneys and legal staff.</p>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>24/7 Intelligent Intake &amp; Conflict Screening</h3>
            <p>
              Capture qualified cases while you sleep or represent clients in court. Interactive conditional forms screen practice area, matter urgency, and opposing party names upfront. The attorney receives instant SMS alerts while the client gets an immediate, professional confirmation.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Self-Serve Calendar Booking &amp; No-Show Reduction</h3>
            <p>
              Eliminate phone tag entirely. Qualified prospects select open consultation times directly on your website, synced in real time with your court schedule and calendar buffers. Automated 24-hour and 2-hour SMS &amp; email reminders cut missed consultations by over 70%.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Calendar size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Retainer E-Signatures &amp; Document Chasing</h3>
            <p>
              Stop spending weeks chasing blurry photos of driver&apos;s licenses, police reports, and financial affidavits. Clients receive a secure, mobile-friendly upload portal with automated polite reminder nudges sent at 48 hours and 96 hours until required documentation is submitted.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FileText size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Automated Case Milestone Updates</h3>
            <p>
              Over 40% of inbound calls to small law firms are existing clients asking &quot;What is happening with my case?&quot; Our milestone triggers send automated plain-English updates when court filings are completed or court dates are set, keeping clients calm and attorneys focused.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <MessageSquare size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Automated 5-Star Google Review Engine</h3>
            <p>
              Never forget to ask for a review after winning a case or finalizing an estate plan. Automatically send a polite, 1-click review link to satisfied clients 3 to 5 days after matter resolution, building lasting local SEO dominance in your county on autopilot.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Star size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Clio, LawPay, Outlook &amp; Gmail Integration</h3>
            <p>
              We believe in zero software bloat. Instead of forcing you to pay for expensive legal enterprise suites, our workflows plug directly into the tools you already use—including Clio Manage &amp; Grow, LawPay, PracticePanther, MyCase, Smokeball, and Microsoft 365.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Workflow size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>
      </FadeIn>

      {/* CASE STUDY FEATURE */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Real Results: Tara Lattanzio Family Law</h2>
            <p>
              We partnered with Cambridge &amp; Waterloo Region attorney Tara Lattanzio to build a modern, high-converting digital presence paired with empathetic, confidential client intake workflows.
            </p>
            <p>
              The result: sub-second mobile speeds, transparent legal process roadmaps, and automated consultation intake that qualifies clients before the initial consultation call.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "1.5rem", alignItems: "center" }}>
              <Link href="/case-studies/tara-lattanzio" className={styles.learnMoreLink}>
                Read the Full Case Study <ArrowRight size={16} />
              </Link>
              <a 
                href="https://taralattanzio.ca?utm_source=beeclue&utm_medium=blog&utm_campaign=law-firm-automation" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.learnMoreLink}
                style={{ color: "var(--foreground)" }}
              >
                Visit Live Website <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className={styles.luxuryCard}>
            <h3>What We Delivered for Tara Lattanzio</h3>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Custom Next.js Legal Architecture</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Empathetic UX &amp; Reassurance Modules</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Waterloo Region Local SEO Dominance</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Confidential Consultation Intake Workflows</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE BEECLUE */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Law Firms Choose Beeclue Tech</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Legal Industry Understanding</h3>
              <p>We build in strict compliance with Law Society of Ontario (LSO) Rule 4.2 / 3.3 and ABA Model Rules regarding legal marketing and confidentiality.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Zero Software Bloat</h3>
              <p>We don&apos;t make you buy expensive monthly enterprise suites. We connect directly into Clio, LawPay, Google Workspace, and Outlook.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Sub-30-Second Speed to Lead</h3>
              <p>Automated SMS and email responders engage prospective clients within 30 seconds of an inquiry, locking in clients before they call competitors.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>256-Bit PIPEDA &amp; HIPAA Security</h3>
              <p>Confidential client data and document uploads are protected with end-to-end TLS 1.3 encryption, ensuring strict attorney-client privilege protection.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>70% Drop in No-Shows</h3>
              <p>Automated appointment confirmations, 24h &amp; 2h reminders, and calendar invites ensure prospective clients actually show up prepared.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Fully Managed Ongoing Support</h3>
              <p>Launch is just the beginning. We handle system maintenance, trigger updates, and security monitoring so you can focus entirely on casework.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* INTERACTIVE LAW FIRM CALCULATOR */}
      <FadeIn className={styles.baseSection}>
        <LawFirmCalculator />
      </FadeIn>

      {/* INTERACTIVE LAW FIRM MOCKUP FORM */}
      <LawFirmAuditForm />

      {/* MORE RESOURCES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Explore Our Industry Solutions</h2>
          <p>We build specialized websites and workflow systems across multiple industries. See how we can help your sector.</p>
        </div>
        <IndustryList exclude="/web-design-for-law-firms" />
      </FadeIn>

      {/* FAQ SECTION */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Law Firm Practice Automation FAQs</h2>
          <p>Common questions about legal intake automation, calendar synchronization, and regulatory compliance.</p>
        </div>
        <FaqAccordion faqs={faqs} />
      </FadeIn>

      {/* CTA SECTION */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingBottom: "10rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <TrendingUp size={48} color="var(--primary-light)" style={{ marginBottom: "2rem" }} />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>Ready to Automate Your Practice?</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Let&apos;s build an automated workflow that triages your inquiries, eliminates phone tag, and lets you focus on high-value billable casework. Book a free consultation today.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className={styles.ctaButton}>
              Schedule a Free Strategy Call <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/web-design-for-law-firms" className={styles.ctaButton}>
              View Law Firm Web Design <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/services" className={styles.ctaButton}>
              View All Services <ArrowRight className={styles.arrow} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
