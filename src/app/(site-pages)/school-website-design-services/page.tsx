"use client";

import Link from "next/link";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, ShieldCheck, Accessibility, Smartphone, CalendarDays, Key, Users } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function SchoolWebDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "School Website Design Services",
    "provider": {
      "@type": "Organization",
      "name": "Beeclue Tech"
    },
    "description": "Professional web design and development services for schools, universities, and educational institutions in Canada."
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beeclue.com/services" },
      { "@type": "ListItem", "position": 3, "name": "School Website Design", "item": "https://beeclue.com/school-website-design-services" }
    ]
  };


  return (
    <main className={styles.main}>
      <ServiceTracker />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {/* HEADER SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>School Website</span>
            <span className={styles.titleLine}>Design & Development</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We engineer secure, AODA-compliant, and highly engaging digital platforms for private schools, public districts, and universities. Transform your website into a powerful enrollment and communication hub.
          </p>
          <div className={styles.heroRatingContainer}>
            <Link href="/contact" className={styles.ctaButton}>
              Request a Free Audit <ArrowRight className={styles.arrow} />
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* LUXURY INTRODUCTION & CHECKLIST */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          
          <div className={styles.luxuryText}>
            <h2>Why Educational Institutions Trust Beeclue Tech</h2>
            <p>
              A school's website faces unique technical challenges. It must simultaneously serve as a stunning marketing brochure for prospective parents, a secure administrative portal for faculty, and a vital daily communication tool for current students.
            </p>
            <p>
              Generic templates from platforms like Wix or basic WordPress themes cannot handle these complex, conflicting requirements. At Beeclue Tech, we specialize in building bespoke, enterprise-grade educational platforms that are fast, intuitive, and rigorously secure.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>The Educational Tech Advantage</h3>
            <p>Our custom educational platforms guarantee:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>100% AODA/WCAG Accessibility Compliance</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Seamless Student Information System (SIS) Integration</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Military-grade data security and privacy protocols</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Flawless mobile-responsive design for parents on-the-go</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* CORE FEATURES GRID */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Engineered for Education</h2>
          <p>We build robust features designed specifically for the daily operational needs of modern schools.</p>
        </div>
        
        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Strict AODA/WCAG Accessibility</h3>
            <p>We ensure your digital platform meets all legal accessibility requirements in Ontario and Canada. From screen-reader optimization to high-contrast toggles, we guarantee your content is accessible to every single member of your community.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Accessibility size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Secure Parent & Student Portals</h3>
            <p>We integrate deeply encrypted, password-protected portals. Parents can safely pay tuition, sign permission slips, and check grades, while faculty can securely upload assignments and manage their classroom rosters.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ShieldCheck size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Emergency Alert Systems</h3>
            <p>During snow days or security lockdowns, communication speed is critical. We build global emergency broadcast modules that allow administrators to instantly pin high-visibility alerts to the top of every page with a single click.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Smartphone size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Dynamic Event Calendars</h3>
            <p>Say goodbye to confusing PDF schedules. We engineer interactive, highly filterable event calendars that sync directly with Google and Outlook, ensuring parents never miss a PTA meeting, sports game, or parent-teacher conference.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CalendarDays size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

      </FadeIn>
      
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingBottom: "10rem" }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Ready to Modernize Your School's Digital Presence?</h2>
        <Link href="/contact" className={styles.ctaButton}>
          Schedule a Strategy Call <ArrowRight className={styles.arrow} />
        </Link>
      </FadeIn>
    </main>
  );
}
