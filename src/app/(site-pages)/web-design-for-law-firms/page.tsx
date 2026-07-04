"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, Scale, FileCheck, Search, Smartphone, Users, Award, Star, TrendingUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";
import IndustryList from "@/components/IndustryList";

export default function WebDesignForLawFirmsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design for Law Firms",
    "provider": {
      "@type": "Organization",
      "name": "Beeclue Tech"
    },
    "description": "Professional web design and development services for law firms, lawyers, and legal practices in Canada. Authoritative websites with case results, attorney profiles, and client intake forms.",
    "areaServed": "Canada"
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

  return (
    <main className={styles.main}>
      <ServiceTracker />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* HERO SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Web Design</span>
            <span className={styles.titleLine}>for Law Firms</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We build authoritative, client-converting websites for law firms, lawyers, and legal practices. From case results to client intake, we engineer sites that establish expertise and generate consultations.
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
            <h2>Why Your Law Firm Needs a Professional Website</h2>
            <p>
              When someone needs a lawyer, they don&apos;t pick up a phone book — they search Google. Whether it&apos;s a personal injury case, a family law matter, or a business dispute, your potential clients are researching attorneys online before they ever make contact.
            </p>
            <p>
              In the legal industry, credibility is everything. A poorly designed or generic website signals to potential clients that your practice may not be the premium choice they&apos;re looking for. Your website must convey authority, expertise, and trust from the very first pixel.
            </p>
            <p>
              At Beeclue Tech, we build websites specifically for the legal industry. We understand that law firms need to establish expertise, showcase results, and make it effortless for potential clients to take the next step — whether that&apos;s calling your office or filling out a consultation form.
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
          <p>We build every law firm website with the features that matter most to legal practices and their clients.</p>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Case Results & Track Record</h3>
            <p>Results speak louder than words. We design compelling case results sections that showcase your firm&apos;s victories — settlements won, cases handled, and outcomes achieved — while maintaining ethical advertising standards.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Award size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Client Intake & Consultation Forms</h3>
            <p>Every visitor is a potential client. We build intelligent intake forms that capture case details, contact information, and consultation preferences — qualifying leads before they ever walk through your door.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FileCheck size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Attorney Profiles & Expertise</h3>
            <p>Clients hire lawyers, not just firms. We create detailed profiles for each attorney — with professional photos, practice areas, education, bar admissions, and bios — helping potential clients find the right match for their case.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Users size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Practice Area Pages</h3>
            <p>Each practice area deserves its own page. We create dedicated pages for personal injury, family law, criminal defense, corporate law, and more — each optimized for specific search terms and designed to convert visitors in that practice area.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Scale size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Local SEO for Legal Searches</h3>
            <p>When someone searches &quot;personal injury lawyer Toronto&quot; or &quot;family law attorney near me,&quot; your firm needs to appear at the top. We implement technical SEO, legal schema markup, and local optimization to dominate legal search results.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Search size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Mobile-First Professional Design</h3>
            <p>Legal clients often search during stressful moments — from their phone, between meetings, or after an incident. We design mobile-first experiences that are professional, fast, and make it easy to reach your firm from any device.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Smartphone size={120} color="#3385ff" strokeWidth={1} />
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
              <p>We understand the ethical advertising standards, confidentiality requirements, and professional aesthetics that legal websites demand.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Authority-First Design</h3>
              <p>Every design decision establishes your firm&apos;s authority and expertise — from case results to attorney credentials to practice area depth.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Lead-Generating Architecture</h3>
              <p>Every site is designed to capture consultations — strategic CTAs, intake forms, and clear paths to contact your firm.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Fast, Modern Technology</h3>
              <p>Lightning-fast pages that load instantly on any device. No slow templates — custom-built for professional performance.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Confidentiality & Compliance</h3>
              <p>We build with privacy in mind — secure forms, SSL encryption, and compliance with legal advertising regulations.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Ongoing Support</h3>
              <p>Launch is just the beginning. We provide continued support, content updates, and optimization to keep your site performing.</p>
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
            <Link href="/services" className={styles.ctaButton}>
              View All Services <ArrowRight className={styles.arrow} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
