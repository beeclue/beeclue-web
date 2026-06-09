
import Link from "next/link";
import Image from "next/image";
import styles from "../../page.module.css";
import { ArrowRight, CheckCircle2, Globe, HardHat, Code2, Search, Smartphone } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function BluesContractingCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Blues Contracting Services Case Study",
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
            <span className={styles.titleLinePrimary}>Blues Contracting</span>
            <span className={styles.titleLine}>Digital Transformation</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We partnered with Blues Contracting Services to build a robust, professional digital presence that highlights their construction expertise and builds immediate trust with potential clients.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <a 
              href="https://bluescontractingservices.ca?utm_source=beeclue&utm_medium=portfolio&utm_campaign=case_study" 
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
            <h2>About Blues Contracting Services</h2>
            <p>
              Blues Contracting Services is a trusted provider of comprehensive construction, renovation, and contracting solutions. In a highly competitive trade industry, they needed an online presence that mirrored the high-quality craftsmanship of their physical work.
            </p>
            <p>
              We completely revitalized their web presence by leveraging modern Next.js technology, strategic UX design, and deep Search Console integration to ensure their services are easily discoverable and highly converting.
            </p>
          </div>

          <div className={styles.aboutImageContainer}>
            <div style={{ borderRadius: "12px", overflow: "hidden", position: "relative", width: "100%", height: "400px" }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/blues-contracting-services.webp" 
                alt="Blues Contracting Services Website Presentation" 
                fill
                style={{ objectFit: "contain", padding: "2rem" }}
              />
            </div>
          </div>

          <div className={`${styles.luxuryCard} ${styles.fullWidthCard}`}>
            <h3>What We Delivered</h3>
            <p>A professional, highly-discoverable web application built to convert residential and commercial leads.</p>
            <div className={styles.luxuryChecklistGrid}>
              <div className={styles.luxuryCheckItem}><Code2 size={24} color="var(--primary-light)" /><span>Custom Next.js Web Design</span></div>
              <div className={styles.luxuryCheckItem}><Smartphone size={24} color="var(--primary-light)" /><span>Streamlined UX Design</span></div>
              <div className={styles.luxuryCheckItem}><Search size={24} color="var(--primary-light)" /><span>Technical SEO Integration</span></div>
              <div className={styles.luxuryCheckItem}><HardHat size={24} color="var(--primary-light)" /><span>Portfolio & Service Showcase</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* DETAILED FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Key Transformations</h2>
          <p>How we laid the digital foundation for a premier contracting business.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Code2 className={styles.serviceIcon} />
            <h3>Modern Next.js Architecture</h3>
            <p>We built the platform using Next.js, prioritizing exceptional load speeds and technical reliability. This robust architecture ensures the site performs flawlessly across all devices, establishing immediate professionalism.</p>
          </div>
          <div className={styles.serviceCard}>
            <Smartphone className={styles.serviceIcon} />
            <h3>Streamlined UX Design</h3>
            <p>We designed an intuitive user journey focused on simplifying how potential clients explore services and view past projects. Clear, strategic call-to-actions were implemented to lower the barrier for requesting quotes.</p>
          </div>
          <div className={styles.serviceCard}>
            <Search className={styles.serviceIcon} />
            <h3>SEO & Search Console Mastery</h3>
            <p>To capture high-intent local search traffic, we implemented a rigorous technical SEO strategy, including comprehensive sitemaps, structured data for local businesses, and active Google Search Console management.</p>
          </div>
          <div className={styles.serviceCard}>
            <HardHat className={styles.serviceIcon} />
            <h3>Dynamic Service Showcase</h3>
            <p>We developed a visually compelling portfolio section that allows Blues Contracting to easily highlight their finest work, serving as a powerful digital resume that builds immediate trust and authority with new clients.</p>
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
              <h3>Enhanced Trust</h3>
              <p>The premium, modern design instantly elevated the company's perceived value and professionalism in the local market.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Local SEO Growth</h3>
              <p>Strategic Search Console submission and on-page SEO resulted in a significant uptick in organic local search traffic.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Frictionless Experience</h3>
              <p>The Next.js framework provided a buttery-smooth, instantaneous browsing experience, drastically reducing bounce rates.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Higher Conversion</h3>
              <p>A streamlined UX paired with clear, accessible quote request forms led to a measurable increase in project inquiries.</p>
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
