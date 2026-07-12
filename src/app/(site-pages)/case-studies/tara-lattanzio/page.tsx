"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, Globe, Scale, ShieldCheck, Search, Users, HeartHandshake } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function TaraLattanzioCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CaseStudy",
        "name": "Tara Lattanzio Family Law — Digital Platform & Legal Branding",
        "description": "Compassionate, high-converting Next.js web architecture built for a leading family lawyer in Waterloo Region, Ontario.",
        "datePublished": "2026-07-05",
        "dateModified": "2026-07-05",
        "image": "https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/tara-lattanzio.webp",
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
          { "@type": "ListItem", "position": 3, "name": "Tara Lattanzio Family Law — Digital Platform" }
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
            <span className={styles.titleLinePrimary}>Tara Lattanzio</span>
            <span className={styles.titleLine}>Family Law Web Experience</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We partnered with Cambridge &amp; Waterloo Region family lawyer Tara Lattanzio to architect an authoritative, empathetic digital platform designed to build immediate client trust and streamline legal consultations.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <a 
              href="https://taralattanzio.ca?utm_source=beeclue&utm_medium=blog&utm_campaign=tara-lattanzio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
            >
              Visit Live Website <Globe size={20} />
            </a>
            <Link href="/contact" className={styles.ctaButton}>
              Start Your Legal Project <ArrowRight className={styles.arrow} />
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
            <h2>Empathetic Authority in Family Law</h2>
            <p>
              When clients seek a family lawyer for divorce, separation, child custody, or property division, they are often navigating one of the most stressful periods of their lives. Tara Lattanzio, a dedicated family law lawyer serving Cambridge, Kitchener, and the broader Waterloo Region, needed a digital presence that balanced professional authority with genuine compassion and approachable legal guidance.
            </p>
            <p>
              We engineered a bespoke Next.js and Tailwind CSS platform deployed on Cloudflare&apos;s lightning-fast global edge network. Rather than relying on rigid, intimidating legal templates, we designed custom Reassurance and Trust modules, transparent legal process roadmaps, and intuitive consultation paths that reassure prospective clients from their very first interaction.
            </p>
          </div>

          <div className={styles.aboutImageContainer}>
            <div style={{ borderRadius: "12px", overflow: "hidden", position: "relative", width: "100%", height: "400px" }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/tara-lattanzio.webp" 
                alt="Tara Lattanzio Family Law Website Preview" 
                fill
                style={{ objectFit: "contain", padding: "2rem" }}
              />
            </div>
          </div>

          <div className={`${styles.luxuryCard} ${styles.fullWidthCard}`}>
            <h3>What We Delivered</h3>
            <p>A high-converting, compassionate legal platform designed for top-tier performance and local SEO dominance.</p>
            <div className={styles.luxuryChecklistGrid}>
              <div className={styles.luxuryCheckItem}><Scale size={24} color="var(--primary-light)" /><span>Next.js 16 Edge Architecture</span></div>
              <div className={styles.luxuryCheckItem}><HeartHandshake size={24} color="var(--primary-light)" /><span>Compassionate UX &amp; Reassurance Design</span></div>
              <div className={styles.luxuryCheckItem}><Search size={24} color="var(--primary-light)" /><span>Waterloo Region Local SEO Dominance</span></div>
              <div className={styles.luxuryCheckItem}><ShieldCheck size={24} color="var(--primary-light)" /><span>Confidential Client Intake &amp; Security</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* DETAILED FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Key Transformations</h2>
          <p>How we elevated Tara Lattanzio&apos;s online practice into a client-generating powerhouse.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Scale className={styles.serviceIcon} />
            <h3>Empathetic Legal Architecture</h3>
            <p>We structured the content to immediately address emotional pain points. Dedicated sections explain complex Ontario family law concepts—from interim support to cohabitation agreements—in clear, supportive language that builds confidence.</p>
          </div>
          <div className={styles.serviceCard}>
            <ShieldCheck className={styles.serviceIcon} />
            <h3>Trust &amp; Reassurance Modules</h3>
            <p>To eliminate hesitation, we integrated custom reassurance sections highlighting Tara&apos;s commitment to fair negotiation, courtroom advocacy, and tailored family strategies that prioritize the long-term well-being of children.</p>
          </div>
          <div className={styles.serviceCard}>
            <Search className={styles.serviceIcon} />
            <h3>Local SEO for Waterloo Region</h3>
            <p>We implemented comprehensive local schema markup, semantic HTML5 hierarchy, and geo-targeted metadata optimized for Cambridge, Kitchener, and Waterloo family law queries, ensuring organic visibility where it matters most.</p>
          </div>
          <div className={styles.serviceCard}>
            <Users className={styles.serviceIcon} />
            <h3>Frictionless Consultation Pathways</h3>
            <p>Recognizing that legal emergencies happen anytime, we engineered mobile-first consultation banners and streamlined contact workflows that allow prospective clients to request appointments securely and discreetly.</p>
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
              <h3>Established Local Authority</h3>
              <p>The premium, modern interface positions Tara Lattanzio as a premier, forward-thinking family law practitioner across the Waterloo Region.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Higher Consultation Conversion</h3>
              <p>By replacing legal jargon with empathetic problem-solution frameworks, visitors convert into consultation inquiries at a significantly higher rate.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Instant Edge Speed</h3>
              <p>Powered by Next.js and Cloudflare OpenNext.js, page load times are near-instantaneous, eliminating bounce rates across mobile and desktop.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Future-Proof Scalability</h3>
              <p>The component-driven design system makes it effortless to publish new legal FAQs, practice updates, and community resources as the practice expands.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* MORE RESOURCES / RELATED INDUSTRY */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingBottom: "10rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Scale size={48} color="var(--primary-light)" style={{ marginBottom: "2rem" }} />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>Need a Custom Lawyer Website?</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            See how we help attorneys and legal practices dominate local search and convert high-value clients with authoritative, custom-coded web design.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/web-design-for-law-firms" className={styles.ctaButton}>
              Explore Web Design for Law Firms <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/contact" className={styles.ctaButtonLight}>
              Schedule Your Strategy Call <ArrowRight className={styles.arrow} size={20} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
