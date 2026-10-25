"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { 
  ArrowRight, 
  CheckCircle2, 
  Scale, 
  FileCheck, 
  Search, 
  Smartphone, 
  Users, 
  Award, 
  TrendingUp, 
  ShieldCheck, 
  Lock, 
  BookOpen, 
  Zap, 
  Briefcase, 
  FileText 
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";
import IndustryList from "@/components/IndustryList";
import LawFirmCalculator from "@/components/LawFirmCalculator";
import LawFirmAuditForm from "@/components/LawFirmAuditForm";
import FaqAccordion from "@/components/FaqAccordion";

export default function WebDesignForLawFirmsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Law Firm Website Design & Attorney Web Development",
    "serviceType": "Law Firm Website Design & Legal SEO Services",
    "provider": {
      "@type": "Organization",
      "name": "Beeclue Tech",
      "url": "https://beeclue.com",
      "logo": "https://beeclue.com/images/beeclue-logo.png"
    },
    "description": "Professional web design and legal SEO services for law firms, attorneys, and legal practices in Toronto, Ontario, and Canada. Custom Next.js sites with LSO Rule 4.2 compliance, practice area hierarchies, and PIPEDA-secure client intake.",
    "areaServed": [
      { "@type": "Country", "name": "Canada" },
      { "@type": "AdministrativeArea", "name": "Ontario" },
      { "@type": "City", "name": "Toronto" },
      { "@type": "Country", "name": "United States" }
    ]
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beeclue.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Web Design for Law Firms", "item": "https://beeclue.com/web-design-for-law-firms" }
    ]
  };
  const faqs = [
    {
      q: "Are your law firm websites compliant with Law Society of Ontario (LSO) advertising guidelines?",
      a: "Yes. Every website we build for Ontario lawyers adheres strictly to the Law Society of Ontario (LSO) Rules of Professional Conduct (specifically Rule 4.2 regarding Marketing of Legal Services). We ensure all marketing statements are demonstrably true, verifiable, and accurate, with no misleading claims, aggressive comparative statements, or guaranteed outcome promises. We also implement compliant legal disclaimers confirming that website contact or consultation booking does not establish a solicitor-client relationship until a formal retainer agreement is executed."
    },
    {
      q: "How do you protect client confidentiality and PIPEDA compliance on legal intake forms?",
      a: "Confidentiality is critical under LSO Rule 3.3. Our intake forms feature 256-bit SSL/TLS encryption, secure serverless transmission, and zero third-party tracking, fully complying with Canadian privacy legislation (PIPEDA). Forms also include clear confidentiality notices advising prospective clients not to disclose privileged case details prior to completing a formal conflict check."
    },
    {
      q: "How much does law firm website design cost?",
      a: "Our law firm website development is scoped as a transparent, fixed-fee deliverable based on your firm's practice area depth, attorney roster, and software integrations (such as Clio or CosmoLex). Every complete custom build bundles 1 complimentary year of high-speed cloud hosting and domain registration. Following Year 1, ongoing maintenance and enterprise hosting is available through our optional $79/month managed plan, or you can self-host with 100% source code ownership and zero vendor lock-in."
    },
    {
      q: "Can you integrate our legal practice management software like Clio or CosmoLex?",
      a: "Yes. We regularly integrate client intake forms and consultation schedulers with legal practice management platforms like Clio Grow, Clio Manage, CosmoLex, and LawConnect. Submissions securely populate your intake pipeline for expedited conflict checks and client onboarding."
    },
    {
      q: "Are your legal websites AODA and WCAG 2.1 accessibility compliant?",
      a: "Yes. All our law firm websites are engineered to comply with the Accessibility for Ontarians with Disabilities Act (AODA) and WCAG 2.1 AA standards. This includes screen-reader-optimized semantic HTML5, accessible color contrast ratios, clear focus states, and full keyboard navigation to protect your firm against accessibility liability."
    },
    {
      q: "How long does it take to design and launch a custom law firm website?",
      a: "Most custom law firm websites are designed, developed, and launched within 2 to 4 weeks. This includes mobile responsiveness, AODA/WCAG accessibility compliance, custom legal copywriting, and full technical SEO setup."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Web Design</span>
            <span className={styles.titleLine}>for Law Firms &amp; Attorneys</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We build authoritative, client-converting websites for law firms, lawyers, and legal practices in Toronto and across North America. From case results to client intake, we engineer sites that establish expertise and generate high-value consultations.
          </p>
          <div className={styles.heroRatingContainer}>
            <Link href="/contact" className={styles.ctaButton}>
              Get a Free Consultation <ArrowRight className={styles.arrow} />
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
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Professional law office with books and legal atmosphere"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </FadeIn>

      {/* WHY YOUR LAW FIRM NEEDS A WEBSITE */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Why Your Law Firm Needs Professional Web Design & Legal SEO in Toronto</h2>
            <p>
              When someone needs a lawyer, they don&apos;t pick up a phone book — they search Google. Whether it&apos;s a personal injury case, a family law matter, or a business dispute, your potential clients are researching attorneys online before they ever make contact. Read our detailed guide on <Link href="/law-firm-website-design-seo-guide" style={{ color: "var(--primary-light)", textDecoration: "underline" }}>Law Firm Website Design & SEO Strategies</Link>.
            </p>
            <p>
              In the legal industry, credibility is everything. A poorly designed or generic website signals to potential clients that your practice may not be the premium choice they&apos;re looking for. Your website must convey authority, expertise, and trust from the very first pixel.
            </p>
            <p>
              At Beeclue Tech, we build websites specifically for the legal industry across Toronto and Canada. We understand that law firms need to establish expertise, showcase results, and make it effortless for potential clients to take the next step — whether that&apos;s calling your office or filling out a consultation form.
            </p>
          </div>
          <div className={styles.luxuryCard}>
            <h3>What a Great Law Firm Website Delivers</h3>
            <p>A high-performing law firm website provides:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Authoritative design that establishes legal expertise</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Case results and testimonials that build trust</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Client intake forms that capture qualified leads</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Local SEO dominance for legal searches</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Attorney profiles that build personal connections</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ESSENTIAL FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Essential Features for Law Firm Websites</h2>
          <p>We build every law firm website with high-performance features engineered to establish authority, protect compliance, and convert prospective clients.</p>
        </div>

        <div className={styles.scroller} style={{ marginTop: "3rem" }}>
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Award size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Case Results &amp; Track Record
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              Showcase past victories, settlement sums, and court judgments with ethical, LSO-compliant contingency disclaimers that build unshakeable client confidence.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Settlement Galleries</span>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Ethical Disclaimers</span>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Verified Proof</span>
            </div>
          </div>

          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <FileCheck size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Intelligent Client Intake &amp; Schedulers
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              Pre-screen incoming inquiries with automated intake forms and consultation schedulers that integrate seamlessly with your CRM and practice management workflow.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Clio &amp; CosmoLex Sync</span>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Pre-Screening Funnels</span>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Conflict Notices</span>
            </div>
          </div>

          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Users size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Attorney Profiles &amp; Credential Hubs
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              Comprehensive attorney biographies featuring high-resolution headshots, bar admissions, academic pedigree, published decisions, and direct consultation booking.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Bar Admissions</span>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Practice Specialization</span>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Direct Contact CTAs</span>
            </div>
          </div>

          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Scale size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Dedicated Practice Area Silos
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              Each legal specialty receives an isolated, in-depth landing page architected with practice-specific FAQ schema, local case law overviews, and focused conversion funnels.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Search Silo Structure</span>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Practice FAQ Schema</span>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Targeted CTAs</span>
            </div>
          </div>

          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Search size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Local Legal SEO &amp; Local Pack Dominance
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              Engineered with JSON-LD schema, Google Business Profile alignment, and citation building to rank for high-intent queries like &quot;personal injury lawyer Toronto&quot; or &quot;family lawyer near me&quot;.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Google Map Pack</span>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Legal Schema Markup</span>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Citation Consistency</span>
            </div>
          </div>

          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Smartphone size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Mobile-First Urgency UX
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              Optimized for distressed prospective clients browsing on mobile devices. Features sticky tap-to-call bars, lightning-quick load times, and distraction-free consultation pathways.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Tap-To-Call CTAs</span>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Sub-Second Load</span>
              <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", borderRadius: "20px", background: "rgba(255, 255, 255, 0.04)", color: "var(--muted)", border: "1px solid var(--border)" }}>Emergency Routing</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* PRACTICE AREA SPECIALIZATIONS */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Engineered for Your Specific Practice Area</h2>
          <p>
            Law firms cannot rely on one-size-fits-all web templates. A personal injury victim in crisis needs entirely different design cues, proof points, and intake workflows than a corporate GC seeking M&amp;A counsel.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
          <div className={styles.serviceCard}>
            <Briefcase className={styles.serviceIcon} size={36} color="var(--primary-light)" />
            <h3>Personal Injury &amp; Accident Law</h3>
            <p>
              High-intent claimant conversion with verified settlement outcome showcases, contingency fee disclaimers, hospital/emergency mobile intake, and local 24/7 hotline integration.
            </p>
            <Link href="/personal-injury-law-firm-website-design" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem", fontWeight: 500 }}>
              Personal Injury Strategy <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <Scale className={styles.serviceIcon} size={36} color="var(--primary-light)" />
            <h3>Family &amp; Divorce Law</h3>
            <p>
              Empathetic, de-escalating interface design with structured mediation roadmaps, child custody guidance, discreet intake mechanisms, and clear retainer timelines.
            </p>
            <Link href="/family-law-firm-website-design-strategy" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem", fontWeight: 500 }}>
              Family Law Design <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <ShieldCheck className={styles.serviceIcon} size={36} color="var(--primary-light)" />
            <h3>Criminal Defense &amp; Litigation</h3>
            <p>
              Urgency-first mobile UX with tap-to-call bail emergency banners, arrest procedure guides, courtroom defense record showcases, and confidential pre-consultation screening.
            </p>
            <Link href="/ontario-law-firm-website-playbook" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem", fontWeight: 500 }}>
              Ontario Defense Playbook <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <FileText className={styles.serviceIcon} size={36} color="var(--primary-light)" />
            <h3>Corporate, Commercial &amp; Real Estate</h3>
            <p>
              Sophisticated boutique authority with transaction history galleries, commercial lease advisory hubs, automated residential closing intake, and Clio practice management synchronization.
            </p>
            <Link href="/law-firm-automation" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem", fontWeight: 500 }}>
              Legal Practice Automation <ArrowRight size={16} />
            </Link>
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
              We partnered with Cambridge &amp; Waterloo Region attorney Tara Lattanzio to build a compassionate, high-converting digital presence that builds immediate trust with potential family law clients.
            </p>
            <p>
              The result: a modern Next.js website deployed on Cloudflare with empathetic Reassurance modules, transparent legal process roadmaps, and local SEO dominance that converts visitors into consultation inquiries.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "1.5rem", alignItems: "center" }}>
              <Link href="/case-studies/tara-lattanzio" className={styles.learnMoreLink}>
                Read the Full Case Study <ArrowRight size={16} />
              </Link>
              <a 
                href="https://taralattanzio.ca?utm_source=beeclue&utm_medium=blog&utm_campaign=tara-lattanzio" 
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
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1.5rem 0", padding: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid var(--border)" }}>
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--primary-light)" }}>98/100</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--muted)" }}>Mobile Core Web Vitals</div>
              </div>
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--primary-light)" }}>&lt; 0.8s</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--muted)" }}>First Contentful Paint</div>
              </div>
            </div>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Custom Next.js Legal Architecture</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Empathetic UX &amp; Reassurance Modules</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Waterloo Region Local SEO Dominance</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Confidential Consultation Workflows</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* REGULATORY COMPLIANCE & PRIVACY SECTION */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Engineered for Law Society of Ontario (LSO) &amp; PIPEDA Compliance</h2>
            <p>
              Law firm marketing in Ontario is strictly governed by the <strong>Law Society of Ontario (LSO) Rules of Professional Conduct</strong>. A misstep in online marketing or client data collection exposes attorneys to regulatory sanctions and liability.
            </p>
            <p>
              Every legal web architecture we develop is rigorously audited against:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "1.5rem 0", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <ShieldCheck color="var(--primary-light)" size={20} style={{ flexShrink: 0, marginTop: "3px" }} />
                <span><strong>LSO Rule 4.2 (Marketing of Legal Services):</strong> Verifiable, accurate content with no misleading comparative superlatives or unverified outcome promises.</span>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <Lock color="var(--primary-light)" size={20} style={{ flexShrink: 0, marginTop: "3px" }} />
                <span><strong>PIPEDA &amp; LSO Rule 3.3 (Confidentiality):</strong> Serverless encrypted intake with zero third-party advertising trackers leaking sensitive prospective client queries.</span>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <FileCheck color="var(--primary-light)" size={20} style={{ flexShrink: 0, marginTop: "3px" }} />
                <span><strong>Clear Retainer Disclaimers:</strong> Prominent notices clarifying that submitting a web form does not create an attorney-client relationship until a formal retainer is executed.</span>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <Zap color="var(--primary-light)" size={20} style={{ flexShrink: 0, marginTop: "3px" }} />
                <span><strong>AODA &amp; WCAG 2.1 AA Standards:</strong> Built to meet Ontario accessibility legislation for keyboard navigation, screen reader accessibility, and color contrast.</span>
              </li>
            </ul>
          </div>
          <div className={styles.luxuryCard}>
            <h3>Toronto &amp; Canadian Legal Service Areas</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--muted)", marginBottom: "1rem" }}>
              We partner with sole practitioners, boutique legal partnerships, and multi-attorney practices across Ontario and Canada:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", fontSize: "0.875rem" }}>
              <div style={{ padding: "0.5rem 0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "6px", border: "1px solid var(--border)" }}>• Downtown Toronto &amp; Bay St</div>
              <div style={{ padding: "0.5rem 0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "6px", border: "1px solid var(--border)" }}>• North York &amp; Vaughan</div>
              <div style={{ padding: "0.5rem 0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "6px", border: "1px solid var(--border)" }}>• Mississauga &amp; Brampton</div>
              <div style={{ padding: "0.5rem 0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "6px", border: "1px solid var(--border)" }}>• Ottawa &amp; Eastern Ontario</div>
              <div style={{ padding: "0.5rem 0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "6px", border: "1px solid var(--border)" }}>• Waterloo Region &amp; Cambridge</div>
              <div style={{ padding: "0.5rem 0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "6px", border: "1px solid var(--border)" }}>• Hamilton &amp; Niagara Region</div>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <Link href="/ontario-law-firm-website-playbook" style={{ color: "var(--primary-light)", textDecoration: "underline", fontSize: "0.875rem" }}>
                Read the Complete Ontario Law Firm Playbook &rarr;
              </Link>
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
            <CheckCircle2 className={styles.valueIcon} color="var(--primary-light)" />
            <div>
              <h3>Legal Industry Understanding</h3>
              <p>We understand the ethical advertising standards, confidentiality requirements, and professional aesthetics that legal websites demand.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} color="var(--primary-light)" />
            <div>
              <h3>Authority-First Design</h3>
              <p>Every design decision establishes your firm&apos;s authority and expertise — from case results to attorney credentials to practice area depth.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} color="var(--primary-light)" />
            <div>
              <h3>Lead-Generating Architecture</h3>
              <p>Every site is designed to capture consultations — strategic CTAs, intake forms, and clear paths to contact your firm.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} color="var(--primary-light)" />
            <div>
              <h3>Fast, Modern Technology</h3>
              <p>Lightning-fast pages that load instantly on any device. No slow templates — custom-built for professional performance.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} color="var(--primary-light)" />
            <div>
              <h3>Confidentiality & Compliance</h3>
              <p>We build with privacy in mind — secure forms, SSL encryption, and compliance with legal advertising regulations.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} color="var(--primary-light)" />
            <div>
              <h3>Ongoing Support</h3>
              <p>Launch is just the beginning. We provide continued support, content updates, and optimization to keep your site performing.</p>
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

      {/* LEGAL TOPIC CLUSTER / KNOWLEDGE HUB */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Legal Web Design &amp; SEO Strategy Hub</h2>
          <p>
            Explore our comprehensive guides, audits, and compliance playbooks built specifically for Canadian lawyers, law firm managing partners, and legal marketers.
          </p>
        </div>

        <div className={styles.scroller} style={{ marginTop: "3rem" }}>
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <BookOpen size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Law Firm Website Design Cost &amp; Pricing
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              A transparent breakdown of custom web development vs. agency retainers, CMS migration fees, and ongoing maintenance expectations for Canadian firms.
            </p>
            <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <Link href="/law-firm-website-design-cost-pricing-guide" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
                Read Pricing Guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <FileText size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Ontario Law Firm Playbook &amp; LSO Rules
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              How Ontario attorneys master local legal SEO, practice area rankings, and ethical client acquisition within LSO Rule 4.2 guidelines.
            </p>
            <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <Link href="/ontario-law-firm-website-playbook" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
                Read Ontario Playbook <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <FileCheck size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Law Firm Website Audit Checklist
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              Our 25-point performance, AODA compliance, SSL security, and conversion rate audit checklist designed for managing partners.
            </p>
            <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <Link href="/law-firm-website-audit-checklist" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
                View 25-Point Checklist <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Zap size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Legal Intake &amp; Workflow Automation
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              Connect your website consultation forms directly to Clio, automated conflict screening, and Google Calendar scheduling.
            </p>
            <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <Link href="/law-firm-automation" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
                Explore Practice Automation <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Briefcase size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Personal Injury Firm Website Architecture
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              Proven frameworks for displaying settlement records, contingency disclosures, and urgency-first intake mechanisms.
            </p>
            <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <Link href="/personal-injury-law-firm-website-design" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
                Read Personal Injury Guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Users size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Family Law Website Design &amp; Empathy UX
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              How to architect reassuring, empathetic digital pathways for clients undergoing high-stress divorce, mediation, and custody disputes.
            </p>
            <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <Link href="/family-law-firm-website-design-strategy" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
                Read Family Law Guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* MORE RESOURCES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Explore Our Industry Solutions</h2>
          <p>We build specialized websites across multiple industries. See how we can help your sector.</p>
        </div>
        <IndustryList exclude="/web-design-for-law-firms" />
      </FadeIn>

      {/* FAQ SECTION */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Law Firm Website Design FAQs</h2>
          <p>Common questions about legal website development, Law Society of Ontario (LSO) compliance, and client intake security.</p>
        </div>
        <FaqAccordion faqs={faqs} />
      </FadeIn>

      {/* CTA SECTION */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingBottom: "10rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <TrendingUp size={48} color="var(--primary-light)" style={{ marginBottom: "2rem" }} />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>Ready to Win More Clients?</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Let&apos;s build a law firm website that establishes your authority, showcases your results, and generates qualified consultations. Get a free consultation today.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className={styles.ctaButton}>
              Schedule a Free Strategy Call <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/case-studies/tara-lattanzio" className={styles.ctaButton}>
              See Our Legal Case Study <ArrowRight className={styles.arrow} />
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
