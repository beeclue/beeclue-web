import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, Globe, ShoppingCart, Truck, MapPin, Layers } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "WooCommerce E-commerce Case Study: IV Uniforms | Beeclue",
  description: "Read our WooCommerce e-commerce case study for IV Uniforms. Learn how we built a custom store with Canada Post shipping and local Jamatkhana pickup selectors.",
  alternates: {
    canonical: "https://beeclue.com/case-studies/iv-uniforms",
  },
};

export default function IVUniformsCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CaseStudy",
        "name": "IV Uniforms — WooCommerce E-commerce Platform",
        "description": "Custom WooCommerce store built for Ismaili Volunteer Uniforms featuring Canada Post shipping quotes and local pickup selector integrations.",
        "datePublished": "2026-08-27",
        "dateModified": "2026-08-27",
        "image": "https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/iv-uniforms.webp",
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
          { "@type": "ListItem", "position": 3, "name": "WooCommerce E-commerce Case Study: IV Uniforms" }
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
            <span className={styles.titleLinePrimary}>IV Uniforms</span>
            <span className={styles.titleLine}>WooCommerce Experience</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We partnered with Ismaili Volunteer Uniforms to build a robust, custom WooCommerce e-commerce platform designed to coordinate uniform distribution across North America with regional Canada Post shipping quotes and localized Jamatkhana pickup selectors.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <a 
              href="https://ivuniforms.com/?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-iv-uniforms" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
            >
              Visit Live Website <Globe size={20} />
            </a>
            <Link href="/contact" className={styles.ctaButton}>
              Start Your E-commerce Project <ArrowRight className={styles.arrow} />
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
            <h2>Simplifying Uniform Logistics</h2>
            <p>
              Ismaili Volunteer Uniforms (IV Uniforms) provides stylish, high-quality, and durable uniforms for volunteers serving across North America. To coordinate orders efficiently, they needed a digital portal capable of managing variable sizing options, processing secure online transactions, and handling complex shipping and pickup logistics.
            </p>
            <p>
              We engineered a bespoke WooCommerce platform layered with custom checkout integrations. By combining real-time API integrations for shipping weight calculations with a localized selection process, we created a seamless checkout experience that accommodates both direct home deliveries and group distributions.
            </p>
          </div>

          <div className={styles.aboutImageContainer}>
            <div style={{ borderRadius: "12px", overflow: "hidden", position: "relative", width: "100%", height: "400px" }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/iv-uniforms.webp" 
                alt="IV Uniforms Website E-commerce Preview" 
                fill
                style={{ objectFit: "contain", padding: "2rem" }}
              />
            </div>
          </div>

          <div className={`${styles.luxuryCard} ${styles.fullWidthCard}`}>
            <h3>What We Delivered</h3>
            <p>A high-performance WooCommerce platform optimized for speed, variant configuration, and logistics coordination.</p>
            <div className={styles.luxuryChecklistGrid}>
              <div className={styles.luxuryCheckItem}><ShoppingCart size={24} color="var(--primary-light)" /><span>WooCommerce Core Engine</span></div>
              <div className={styles.luxuryCheckItem}><Truck size={24} color="var(--primary-light)" /><span>Canada Post Shipping Quotes</span></div>
              <div className={styles.luxuryCheckItem}><MapPin size={24} color="var(--primary-light)" /><span>Jamatkhana Local Pickup Selectors</span></div>
              <div className={styles.luxuryCheckItem}><Layers size={24} color="var(--primary-light)" /><span>Uniform Variant Swatch Layouts</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* DETAILED FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Key Transformations</h2>
          <p>How we modernized the uniform ordering and checkout workflow.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <ShoppingCart className={styles.serviceIcon} />
            <h3>Custom WooCommerce Layouts</h3>
            <p>We designed the shop templates from scratch, showcasing both men's and women's uniform collections. Large size swatches and fit descriptions help volunteers select the perfect size with minimal return rates.</p>
          </div>
          <div className={styles.serviceCard}>
            <Truck className={styles.serviceIcon} />
            <h3>Canada Post API Integration</h3>
            <p>To eliminate flat-rate shipping inaccuracies, we integrated a weight-based Canada Post calculator that fetches real-time regional shipping quotes at checkout, ensuring precise customer delivery fees.</p>
          </div>
          <div className={styles.serviceCard}>
            <MapPin className={styles.serviceIcon} />
            <h3>Jamatkhana Local Pickups</h3>
            <p>For volunteers who prefer in-person collection, we developed custom checkout logic allowing them to bypass shipping costs and select their local Jamatkhana from a drop-down list for pickup coordination.</p>
          </div>
          <div className={styles.serviceCard}>
            <Layers className={styles.serviceIcon} />
            <h3>Optimized WordPress Architecture</h3>
            <p>WordPress and WooCommerce were optimized for performance, utilizing caching, database indexing, and image scaling to guarantee rapid page loads for thousands of concurrent visitors during order cycles.</p>
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
              <h3>Simplified Order Fulfillment</h3>
              <p>Custom checkout metadata routes local pickup orders and shipping orders to different packaging queues, speeding up warehouse operations.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Reduced Shipping Discrepancies</h3>
              <p>Integrating real-time quotes ensures the organization never loses money on parcel delivery across Canada and the US.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Enhanced Mobile Usability</h3>
              <p>Over 75% of uniform orders are completed on mobile viewports. The interface is optimized to make mobile swatches and checkout quick and simple.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Secure, Scalable Performance</h3>
              <p>Stripe payment integrations and reinforced security schemas keep transactions and volunteer personal data completely secure.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* MORE RESOURCES / RELATED INDUSTRY */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingBottom: "10rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <ShoppingCart size={48} color="var(--primary-light)" style={{ marginBottom: "2rem" }} />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>Need a Custom E-commerce Solution?</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            See how we help brands scale online sales, integrate custom shipping solutions, and automate complex checkouts with WordPress, WooCommerce, and Shopify.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/ecommerce-development-toronto" className={styles.ctaButton}>
              Explore E-commerce Development <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/contact" className={styles.ctaButtonLight}>
              Schedule Your E-commerce Strategy Call <ArrowRight className={styles.arrow} size={20} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
