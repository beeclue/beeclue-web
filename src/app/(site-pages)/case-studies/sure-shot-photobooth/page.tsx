
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, Globe, Sparkles, Code2, Search, Smartphone } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function SureShotCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CaseStudy",
        "name": "Sure Shot Photobooth — Web Experience",
        "description": "Highly interactive, modern website designed to capture leads and showcase premium event experiences",
        "datePublished": "2024-05-12",
        "dateModified": "2024-10-01",
        "image": "https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/sure-shot-photobooth-rental.webp",
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
          { "@type": "ListItem", "position": 3, "name": "Sure Shot Photobooth — Web Experience" }
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
            <span className={styles.titleLinePrimary}>Sure Shot Photobooth</span>
            <span className={styles.titleLine}>Web Experience</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We partnered with Sure Shot Photobooth to elevate their digital presence with a highly interactive, modern website designed to capture leads and showcase their premium event experiences.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <a 
              href="https://sureshotphotoboothrental.com?utm_source=beeclue&utm_medium=portfolio&utm_campaign=case_study" 
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
          
          <div className={`${styles.luxuryText} ${styles.aboutSection}`}>
            <h2>About Sure Shot Photobooth</h2>
            <p>
              Operating in the highly competitive event rental and entertainment industry, Sure Shot Photobooth needed a platform that truly represented the joy, luxury, and excitement of their services.
            </p>
            <p>
              We overhauled their entire digital architecture to focus heavily on a sleek UI/UX, buttery-smooth animations, and a robust SEO foundation that ensures they rank high when clients are planning their next big event.
            </p>
          </div>

          <div className={styles.aboutImageContainer}>
            <div style={{ borderRadius: "12px", overflow: "hidden", position: "relative", width: "100%", height: "400px" }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/sure-shot-photobooth-rental.webp" 
                alt="Sure Shot Photobooth Website Presentation" 
                fill
                style={{ objectFit: "contain", padding: "2rem" }}
              />
            </div>
          </div>

          <div className={`${styles.luxuryCard} ${styles.fullWidthCard}`}>
            <h3>What We Delivered</h3>
            <p>A high-performance, visually stunning Next.js application built for user engagement and lead generation.</p>
            <div className={styles.luxuryChecklistGrid}>
              <div className={styles.luxuryCheckItem}><Code2 size={24} color="var(--primary-light)" /><span>Next.js Web Development</span></div>
              <div className={styles.luxuryCheckItem}><Smartphone size={24} color="var(--primary-light)" /><span>Immersive UX Design</span></div>
              <div className={styles.luxuryCheckItem}><Sparkles size={24} color="var(--primary-light)" /><span>Custom Scroll Animations</span></div>
              <div className={styles.luxuryCheckItem}><Search size={24} color="var(--primary-light)" /><span>Technical SEO & Analytics</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* DETAILED FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Key Transformations</h2>
          <p>How we modernized the digital booking experience for event entertainment.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Code2 className={styles.serviceIcon} />
            <h3>Modern Next.js Architecture</h3>
            <p>We engineered the site using Next.js to provide lightning-fast page loads, seamless client-side routing, and a robust structural foundation that can scale alongside their growing business operations.</p>
          </div>
          <div className={styles.serviceCard}>
            <Sparkles className={styles.serviceIcon} />
            <h3>Engaging Animations & UI/UX</h3>
            <p>We completely redesigned the user experience with fluid micro-interactions, scroll-triggered animations, and a polished visual hierarchy that keeps visitors engaged and excited about the service offerings.</p>
          </div>
          <div className={styles.serviceCard}>
            <Search className={styles.serviceIcon} />
            <h3>SEO & Search Console Integration</h3>
            <p>We implemented comprehensive technical SEO strategies, including structured data, optimized metadata, and deep Google Search Console submission to ensure maximum visibility for high-intent local search queries.</p>
          </div>
          <div className={styles.serviceCard}>
            <Smartphone className={styles.serviceIcon} />
            <h3>Mobile-First Booking Flow</h3>
            <p>Recognizing that most event planners and brides browse on their phones, we hyper-optimized the mobile layout and streamline the inquiry process, drastically reducing friction from landing page to lead capture.</p>
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
              <h3>Higher Engagement</h3>
              <p>Dynamic animations and a sleek UX drastically increased average session durations and user interaction.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Search Dominance</h3>
              <p>Proper Search Console submission and technical SEO implementation led to a massive boost in organic impressions.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Lightning Fast</h3>
              <p>The Next.js framework provided instant page transitions, completely eliminating bounce rates caused by slow loading.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Increased Leads</h3>
              <p>A frictionless, mobile-optimized booking flow translated directly into a higher volume of qualified event inquiries.</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
