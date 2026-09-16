import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, Globe, Palette, ShieldCheck, Search, Share2, Sparkles, Award } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Custom Framing & Art Gallery Web Design Case Study: Tuxedo Frame Gallery | Beeclue",
  description: "Explore our case study on Tuxedo Frame Gallery. See how we built a luxury digital platform, local SEO, and social media strategy for Atlanta's premier framing atelier.",
  alternates: {
    canonical: "https://beeclue.com/case-studies/tuxedo-frame-gallery",
  },
};

export default function TuxedoFrameGalleryCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CaseStudy",
        "name": "Tuxedo Frame Gallery — Luxury Web Experience, Local SEO & Social Media",
        "description": "Bespoke digital platform, luxury visual branding, local SEO dominance, and active social media management for Buckhead Atlanta's premier custom picture framing and fine art gallery.",
        "datePublished": "2026-09-16",
        "dateModified": "2026-09-16",
        "image": "https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/tuxedoframegallery.webp",
        "author": {
          "@type": "Organization",
          "name": "Beeclue Tech"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Beeclue Tech"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com" },
          { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://beeclue.com/case-studies" },
          { "@type": "ListItem", "position": 3, "name": "Tuxedo Frame Gallery — Digital Platform & Social Media" }
        ]
      }
    ]
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* HEADER SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Tuxedo Frame Gallery</span>
            <span className={styles.titleLine}>Luxury Framing &amp; Art Gallery Platform</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We partnered with Atlanta&apos;s premier custom picture framing atelier and fine art gallery to design a luxury digital web platform, dominate Buckhead local SEO, and manage dynamic social media growth.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <a 
              href="https://tuxedoframegallery.com?utm_source=beeclue&utm_medium=portfolio&utm_campaign=case_study" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
            >
              Visit Live Website <Globe size={20} />
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
          
          <div className={`${styles.luxuryText} ${styles.aboutSection}`}>
            <h2>35+ Years of Museum-Grade Artistry in Buckhead</h2>
            <p>
              Located on Piedmont Road in Buckhead, Atlanta, <strong>Tuxedo Frame Gallery</strong> has been transforming memories into masterpieces for over 35 years. With more than 75 combined years of master framing and fine art restoration expertise, they cater to discerning art collectors, interior designers, corporate clients, and local families.
            </p>
            <p>
              Their services span far beyond basic framing: from museum-grade 99% UV-filtering conservation and delicate oil canvas restoration to bespoke acrylic shadowboxes, white-glove installation, and showcasing original artwork from celebrated Atlanta artists. Tuxedo Frame Gallery needed an elevated digital experience and active social media presence that matched their uncompromising dedication to luxury craftsmanship.
            </p>
          </div>

          <div className={styles.aboutImageContainer}>
            <div style={{ borderRadius: "12px", overflow: "hidden", position: "relative", width: "100%", height: "400px" }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/tuxedoframegallery.webp" 
                alt="Tuxedo Frame Gallery Website & Branding Presentation" 
                fill
                style={{ objectFit: "contain", padding: "2rem" }}
              />
            </div>
          </div>

          <div className={`${styles.luxuryCard} ${styles.fullWidthCard}`}>
            <h3>What We Delivered</h3>
            <p>A full-funnel digital ecosystem combining bespoke web architecture, social media curation, and local search dominance.</p>
            <div className={styles.luxuryChecklistGrid}>
              <div className={styles.luxuryCheckItem}><Palette size={24} color="var(--primary-light)" /><span>Luxury Custom Atelier Platform</span></div>
              <div className={styles.luxuryCheckItem}><Share2 size={24} color="var(--primary-light)" /><span>Social Media Strategy &amp; Curation</span></div>
              <div className={styles.luxuryCheckItem}><Search size={24} color="var(--primary-light)" /><span>Buckhead &amp; Atlanta Local SEO</span></div>
              <div className={styles.luxuryCheckItem}><Sparkles size={24} color="var(--primary-light)" /><span>Consultation Funnel &amp; Gallery UX</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* DETAILED FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Key Transformations</h2>
          <p>How Beeclue Tech positioned Tuxedo Frame Gallery as Atlanta&apos;s leading framing and fine art destination.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Palette className={styles.serviceIcon} />
            <h3>Editorial Atelier Web Architecture</h3>
            <p>We engineered a fast, fluid web application with modern typography, immersive imagery, and smooth micro-interactions. The site elegantly showcases their partnerships with world-class mouldings like Roma, Larson-Juhl, and Fotiou.</p>
          </div>
          <div className={styles.serviceCard}>
            <Share2 className={styles.serviceIcon} />
            <h3>Social Media Growth &amp; Content</h3>
            <p>We manage and execute their social media presence, highlighting behind-the-scenes framing restorations, artisan pottery, custom gilded moulding details, and local Atlanta artist spotlights to engage art enthusiasts and designers.</p>
          </div>
          <div className={styles.serviceCard}>
            <Search className={styles.serviceIcon} />
            <h3>Hyper-Localized Atlanta SEO</h3>
            <p>Implemented deep schema markup, localized landing optimizations, and Google Search Console performance tracking to capture high-intent queries across Buckhead, Chastain Park, and Metro Atlanta for custom framing and restoration.</p>
          </div>
          <div className={styles.serviceCard}>
            <Award className={styles.serviceIcon} />
            <h3>Multi-Channel Consultation Booking</h3>
            <p>Designed frictionless booking paths for in-store gallery visits, virtual design consultations, and on-site/in-home art planning, expanding their reach to high-value residential and commercial clientele.</p>
          </div>
        </div>
      </FadeIn>

      {/* IMPACT SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>The Strategic Impact</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Luxury Brand Positioning</h3>
              <p>A sophisticated digital aesthetic that immediately conveys 35+ years of master craftsmanship, attracting high-end designers and collectors.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Omnichannel Inquiries</h3>
              <p>Significant uptick in consultation bookings and walk-in gallery visits driven by integrated social media campaigns and frictionless contact workflows.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Dominant Local Search Visibility</h3>
              <p>High rankings on Google for custom picture framing, art restoration, and Buckhead art gallery searches with structured rich snippet results.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Blazing Fast Performance</h3>
              <p>Near-zero layout shift and sub-second load times on mobile and desktop, ensuring art portfolios and restoration galleries load instantly.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* MORE RESOURCES / RELATED INDUSTRY */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingBottom: "10rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Palette size={48} color="var(--primary-light)" style={{ marginBottom: "2rem" }} />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>Looking to Elevate Your Luxury Brand?</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Whether you run a luxury atelier, art gallery, or specialty service, we build bespoke web platforms, SEO systems, and social media campaigns that scale your business.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/web-design-toronto" className={styles.ctaButton}>
              Explore Web Design Services <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/contact" className={styles.ctaButtonLight}>
              Book a Strategy Call <ArrowRight className={styles.arrow} size={20} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
