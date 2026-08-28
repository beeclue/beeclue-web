import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, Globe, TrendingUp, Users, Target, Laptop } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Tech Support & IT Website Design Case Study: MacMates | Beeclue",
  description: "See our IT services website design case study for MacMates. Discover how we build fast, intuitive websites for computer repair and tech support companies.",
  alternates: {
    canonical: "https://beeclue.com/case-studies/mac-mates",
  },
};

export default function MacMatesCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CaseStudy",
        "name": "MacMates — Digital Platform & Local SEO",
        "description": "Comprehensive digital platform, custom logo design, and local SEO for Oakville's premier device repair experts.",
        "datePublished": "2026-08-23",
        "image": "https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/mac-mates.webp",
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
          { "@type": "ListItem", "position": 3, "name": "MacMates — Digital Platform & Local SEO" }
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
            <span className={styles.titleLinePrimary}>MacMates</span>
            <span className={styles.titleLine}>Digital Platform & SEO</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We partnered with MacMates in Oakville to build a high-performance digital presence with custom branding, detailed analytics, and robust local SEO to capture device repair leads.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <a 
              href="https://macmates.ca?utm_source=beeclue&utm_medium=portfolio&utm_campaign=case_study" 
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
            <h2>About MacMates</h2>
            <p>
              Located in Oakville, MacMates provides professional, reliable, and expert repair services for Apple and Windows devices, from MacBooks and iMacs to iPhones and tablets. 
            </p>
            <p>
              They focus on fast diagnostics, honest pricing, and expert craftsmanship to restore essential technology for individuals and businesses across the community.
            </p>
          </div>

          <div className={styles.aboutImageContainer}>
            <div style={{ borderRadius: "12px", overflow: "hidden", position: "relative", width: "100%", height: "400px" }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/mac-mates.webp" 
                alt="MacMates Website Presentation" 
                fill
                style={{ objectFit: "contain", padding: "2rem" }}
              />
            </div>
          </div>

          <div className={`${styles.luxuryCard} ${styles.fullWidthCard}`}>
            <h3>What We Delivered</h3>
            <p>A comprehensive digital upgrade driving visibility and trust in the tech repair market.</p>
            <div className={styles.luxuryChecklistGrid}>
              <div className={styles.luxuryCheckItem}><Globe size={24} color="var(--primary-light)" /><span>Custom Website Design</span></div>
              <div className={styles.luxuryCheckItem}><Target size={24} color="var(--primary-light)" /><span>Logo & Brand Design</span></div>
              <div className={styles.luxuryCheckItem}><TrendingUp size={24} color="var(--primary-light)" /><span>Local SEO Optimization</span></div>
              <div className={styles.luxuryCheckItem}><Laptop size={24} color="var(--primary-light)" /><span>Analytics & Custom Reports</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* DETAILED FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Key Transformations</h2>
          <p>How Beeclue Tech established MacMates as Oakville's top-tier tech repair experts.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Globe className={styles.serviceIcon} />
            <h3>Custom Website Development</h3>
            <p>We built a lightning-fast, conversion-focused Next.js application that clearly outlines device repairs, processes, and service guarantees, capturing the attention of tech-savvy customers.</p>
          </div>
          <div className={styles.serviceCard}>
            <Target className={styles.serviceIcon} />
            <h3>Logo & Brand Design</h3>
            <p>We crafted a distinctive, modern logo and comprehensive brand identity that communicates technical proficiency, trust, and quality to help them stand out from local competitors.</p>
          </div>
          <div className={styles.serviceCard}>
            <TrendingUp className={styles.serviceIcon} />
            <h3>Local SEO Strategy</h3>
            <p>Through robust on-page technical SEO, schema integration, and local search tactics, we positioned MacMates highly for high-intent queries like "MacBook repair Oakville" and "iPhone screen replacement."</p>
          </div>
          <div className={styles.serviceCard}>
            <Users className={styles.serviceIcon} />
            <h3>Analytics & Custom Reporting</h3>
            <p>We implemented deep analytics tracking to monitor user behavior, quote requests, and conversion pathways, alongside automated custom reports for transparent business insights.</p>
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
              <h3>Enhanced Visibility</h3>
              <p>Top-ranking local search presence driving consistent organic traffic from customers in need of immediate repairs.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Data-Driven Growth</h3>
              <p>Clear, actionable insights from integrated analytics enable MacMates to refine their marketing and services.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Trust & Professionalism</h3>
              <p>A high-end visual identity and professional website that reassures customers they are leaving expensive devices in expert hands.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Higher Conversions</h3>
              <p>Streamlined user journeys and clear calls-to-action result in a higher rate of direct calls and quote requests.</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
