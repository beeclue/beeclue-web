
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, Globe, TrendingUp, Users, Shield, Target } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function GIRSecurityCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "G.I.R Security Case Study",
    "author": {
      "@type": "Organization",
      "name": "Beeclue Tech"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Beeclue Tech"
    }
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* HEADER SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>G.I.R Security</span>
            <span className={styles.titleLine}>Digital Presence</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We partnered with Guard In Response Security Services Inc. to build a strong digital presence that reflects their professionalism and rapid growth in the security industry.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <a 
              href="https://girsecurity.ca?utm_source=beeclue&utm_medium=portfolio&utm_campaign=case_study" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
            >
              Visit Website <Globe size={20} />
            </a>
            <Link href="/contact" className={styles.ctaButton}>
              Start Your Project <ArrowRight className={styles.arrow} />
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* OVERVIEW SECTION */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          
          <div className={styles.luxuryText}>
            <h2>About G.I.R Security</h2>
            <p>
              G.I.R Security is a fast-growing security company in the Greater Toronto Area, known for delivering innovative, customer-focused protection services across residential, commercial, retail, and event sectors. 
            </p>
            <p>
              Their approach emphasizes modern security practices like de-escalation, training, and client-focused service, backed by a team with over 30+ years of combined experience.
            </p>
          </div>

          <div className={styles.aboutImageContainer}>
            <div style={{ borderRadius: "12px", overflow: "hidden", position: "relative", width: "100%", height: "400px" }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/gir-security.webp" 
                alt="GIR Security Website Presentation" 
                fill
                style={{ objectFit: "contain", padding: "2rem" }}
              />
            </div>
          </div>

          <div className={`${styles.luxuryCard} ${styles.fullWidthCard}`}>
            <h3>What We Delivered</h3>
            <p>A comprehensive digital overhaul designed to scale with their business.</p>
            <div className={styles.luxuryChecklistGrid}>
              <div className={styles.luxuryCheckItem}><Globe size={24} color="var(--primary-light)" /><span>Custom Website Design</span></div>
              <div className={styles.luxuryCheckItem}><TrendingUp size={24} color="var(--primary-light)" /><span>Lead Generation Optimization</span></div>
              <div className={styles.luxuryCheckItem}><Users size={24} color="var(--primary-light)" /><span>Job Management & Career Portal</span></div>
              <div className={styles.luxuryCheckItem}><Shield size={24} color="var(--primary-light)" /><span>Branding & Logo Design</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* DETAILED FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Key Transformations</h2>
          <p>How Beeclue Tech modernized G.I.R Security's operational and client-facing digital infrastructure.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Globe className={styles.serviceIcon} />
            <h3>Custom Website Design & Development</h3>
            <p>We designed and developed a fully responsive, modern website that aligns with G.I.R Security’s brand. The goal was to build trust, clearly showcase services (like mobile patrol and event security), and increase inbound leads.</p>
          </div>
          <div className={styles.serviceCard}>
            <Target className={styles.serviceIcon} />
            <h3>Lead Generation Focus</h3>
            <p>The website was strategically built to improve visibility in the local GTA market and drive more client inquiries through optimized layouts, directly contributing to bringing in more clients.</p>
          </div>
          <div className={styles.serviceCard}>
            <Users className={styles.serviceIcon} />
            <h3>Job Management & Career Portal</h3>
            <p>We developed a custom job application system that allows candidates to apply for security roles directly online, streamlining hiring and recruitment management for their growing workforce.</p>
          </div>
          <div className={styles.serviceCard}>
            <Shield className={styles.serviceIcon} />
            <h3>Branding & Logo Design</h3>
            <p>We created a professional logo design that reflects trust, authority, and reliability. This modern and clean brand identity helped establish a consistent image across both digital and offline channels.</p>
          </div>
        </div>
      </FadeIn>

      {/* IMPACT SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>The Impact</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Stronger Credibility</h3>
              <p>Established stronger online credibility and authority in a highly competitive GTA security market.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Increased Inquiries</h3>
              <p>Significantly increased direct client inquiries and conversions through targeted UX design.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Simplified Hiring</h3>
              <p>Greatly simplified the hiring process with an integrated, highly scalable job application portal.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Cohesive Brand Identity</h3>
              <p>Unified the company's brand identity across all web interfaces and offline marketing materials.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* FOOTER CTA */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Let's Build Something Powerful</h2>
          <p className={styles.footerSub}>Start your project today and build digital solutions designed for growth.</p>
          <div className={styles.footerActions}>
            <Link href="/contact" className={styles.ctaButtonLight}>
              Start a Project
            </Link>
          </div>
          <div className={styles.footerContact}>
            <a href="mailto:hello@beeclue.com" className={styles.emailLink}>
              hello@beeclue.com
            </a>
            <a href="tel:+16479476253" className={styles.emailLink}>
              +1 (647) 947-6253
            </a>
            <p className={styles.footerLocation}>36 Carslake Crescent, Toronto, ON M1J 2A7</p>
            <div className={styles.legalLinks}>
              <Link href="/blogs">Blogs</Link>
              <span>|</span>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
