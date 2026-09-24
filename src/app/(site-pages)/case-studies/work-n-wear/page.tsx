import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, Globe, ShoppingCart, Bot, Palette, Sparkles, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Shopify Web Design & AI Shopping Agent Case Study: Work N Wear | Beeclue",
  description: "Explore our Shopify web design case study for Work N Wear. Discover how custom Shopify development, brand logo refining, and an intelligent AI shopping agent increased e-commerce sales.",
  alternates: {
    canonical: "https://beeclue.com/case-studies/work-n-wear",
  },
  keywords: [
    "Shopify web design",
    "Shopify development Toronto",
    "Shopify AI agent",
    "ecommerce web design Canada",
    "Shopify store redesign",
    "conversational AI ecommerce",
    "safety apparel Shopify store",
    "custom Shopify development"
  ]
};

export default function WorkNWearCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CaseStudy",
        "name": "Work N Wear — Shopify E-Commerce & Conversational AI Shopping Agent",
        "description": "Comprehensive Shopify web design overhaul, brand logo refining, and custom conversational AI shopping agent implementation for Work N Wear (worknwear.ca), driving measurable sales growth and higher customer engagement.",
        "datePublished": "2026-09-24",
        "dateModified": "2026-09-24",
        "image": "https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/wnw-home.webp",
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
          { "@type": "ListItem", "position": 3, "name": "Shopify Web Design: Work N Wear" }
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
            <span className={styles.titleLinePrimary}>Work N Wear</span>
            <span className={styles.titleLine}>Shopify Web Design &amp; AI Shopping Agent</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "820px" }}>
            We partnered with Canadian safety workwear and industrial apparel leader Work N Wear to refine their visual brand identity, engineer a modern, high-converting Shopify e-commerce storefront, and integrate a custom conversational AI shopping agent that guides tradespeople to the right gear and accelerates online sales.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <a 
              href="https://worknwear.ca?utm_source=beeclue&utm_medium=portfolio&utm_campaign=case_study" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
            >
              Visit Live Website <Globe size={20} />
            </a>
            <Link href="/shopify-development-toronto" className={styles.ctaButtonLight}>
              Explore Shopify Services <ArrowRight className={styles.arrow} size={20} />
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
            <h2>Equipping Canadian Workers with Modern E-Commerce &amp; AI Precision</h2>
            <p>
              <strong>Work N Wear</strong> (<a href="https://worknwear.ca?utm_source=beeclue&utm_medium=portfolio&utm_campaign=case_study" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-light)", textDecoration: "underline" }}>worknwear.ca</a>) is a comprehensive Canadian destination for work boots, flame-resistant apparel, hi-vis safety gear, and industrial workwear. Serving construction workers, electricians, industrial trades, and contractors nationwide, they needed a modern digital presence that reflected their 24/7 reliability.
            </p>
            <p>
              Buying industrial workwear online presents unique friction: shoppers must navigate complex safety certifications (such as CSA Grade 1 toe protection, electric shock resistance, and puncture ratings), specific trade requirements, sizing tolerances, and season-specific gear. Beeclue Tech was engaged to execute an end-to-end digital transformation: refining their logo and brand graphics, designing a blazing-fast Shopify store, and deploying an autonomous AI shopping agent to assist customers directly in real time.
            </p>
          </div>

          <div className={styles.aboutImageContainer}>
            <div style={{ borderRadius: "12px", overflow: "hidden", position: "relative", width: "100%", height: "420px", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/wnw-home.webp" 
                alt="Work N Wear Shopify Desktop Storefront Design" 
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "contain", padding: "1rem" }}
              />
            </div>
          </div>

          <div className={`${styles.luxuryCard} ${styles.fullWidthCard}`}>
            <h3>What We Delivered</h3>
            <p>A full-funnel Shopify e-commerce ecosystem combining visual branding, conversion-focused UI/UX, and generative AI commerce capabilities.</p>
            <div className={styles.luxuryChecklistGrid}>
              <div className={styles.luxuryCheckItem}><Palette size={24} color="var(--primary-light)" /><span>Brand Identity &amp; Logo Refining</span></div>
              <div className={styles.luxuryCheckItem}><ShoppingCart size={24} color="var(--primary-light)" /><span>Custom Shopify Web Design &amp; Theme Dev</span></div>
              <div className={styles.luxuryCheckItem}><Bot size={24} color="var(--primary-light)" /><span>Conversational AI Shopping Agent Integration</span></div>
              <div className={styles.luxuryCheckItem}><TrendingUp size={24} color="var(--primary-light)" /><span>Conversion Rate Optimization &amp; Deal Discovery</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* VISUAL SHOWCASE: MOBILE & AI AGENT */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className={styles.servicesHeader}>
          <h2>Intelligent Commerce in Action</h2>
          <p>Explore the desktop AI conversational shopping assistant and the mobile-optimized brand experience.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
          
          {/* Card 1: AI Agent Desktop Showcase */}
          <div style={{
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
          }}>
            <div style={{ position: "relative", width: "100%", height: "340px", background: "rgba(0,0,0,0.4)" }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/wnw-home-ai.webp" 
                alt="Work N Wear AI Shopping Agent Chat Assistant" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain", padding: "1rem" }}
              />
            </div>
            <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <Sparkles size={20} color="var(--primary-light)" /> Autonomous AI Shopping Assistant
                </h3>
                <p style={{ color: "var(--muted)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                  Customers can chat directly with the on-site AI agent to get personalized product recommendations based on their exact trade, safety standards, or climate conditions. The AI parses the inventory, explains technical boot specs, and directs users straight to active seasonal discounts.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Mobile AI Shopping Agent Showcase */}
          <div style={{
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
          }}>
            <div style={{ position: "relative", width: "100%", height: "340px", background: "rgba(0,0,0,0.4)" }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/wnw-ai-mobile.webp" 
                alt="Work N Wear Mobile AI Shopping Agent Experience" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain", padding: "1rem" }}
              />
            </div>
            <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <ShieldCheck size={20} color="var(--primary-light)" /> Mobile AI Shopping Experience
                </h3>
                <p style={{ color: "var(--muted)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                  We engineered the conversational AI assistant seamlessly into the mobile viewport. Tradespeople and contractors on job sites can ask questions, verify safety certifications, and claim active promotions directly from their smartphones with zero layout friction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* DETAILED TRANSFORMATIONS */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Key Transformations</h2>
          <p>How Beeclue Tech engineered a cutting-edge Shopify platform to elevate sales and user engagement.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Palette className={styles.serviceIcon} />
            <h3>Graphic Design &amp; Logo Refining</h3>
            <p>Modernized the brand identity with a clean, high-resolution vector emblem, refined Canadian industrial color palette, and crisp visual iconography optimized for both high-DPI displays and packaging.</p>
          </div>
          <div className={styles.serviceCard}>
            <ShoppingCart className={styles.serviceIcon} />
            <h3>Custom Shopify Web Design</h3>
            <p>Architected a bespoke Shopify theme structured around trade categories, brand tiers, and technical specifications. Implemented mega-menus, instant search autocomplete, and seamless cart drawer flows.</p>
          </div>
          <div className={styles.serviceCard}>
            <Bot className={styles.serviceIcon} />
            <h3>AI Shopping Agent Capabilities</h3>
            <p>Engineered an intelligent conversational assistant that interacts directly with shoppers. It clarifies trade needs, matches CSA ratings, guides sizing decisions, and actively recommends discounted bundles.</p>
          </div>
          <div className={styles.serviceCard}>
            <Zap className={styles.serviceIcon} />
            <h3>Speed &amp; Conversion Optimization</h3>
            <p>Eliminated page bloat with optimized asset loading, instant-page prefetching, and streamlined mobile checkout, drastically reducing cart abandonment across Canadian commercial buyers.</p>
          </div>
        </div>
      </FadeIn>

      {/* IMPACT SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>The Business &amp; Sales Impact</h2>
          <p>Measurable outcomes delivered through custom Shopify engineering and conversational AI.</p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Surge in Direct E-Commerce Sales</h3>
              <p>Customers convert faster when guided directly to the exact safety certifications and sizes they need, reducing purchase hesitation and lifting overall store revenue.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Deeper Buyer Focus &amp; Engagement</h3>
              <p>The conversational AI shopping agent keeps visitors engaged longer, helping them discover promotions, bulk discounts, and complementary accessories.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Frictionless Mobile Shopping</h3>
              <p>A mobile-first architecture allows tradespeople and contractors on job sites to quickly reorder boots and gear with zero layout friction or lag.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Elevated Canadian Brand Authority</h3>
              <p>The refined logo, sharp typography, and coherent visual identity position Work N Wear as a premier, trusted safety supplier across Canada.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* MORE RESOURCES / RELATED SERVICE CTA */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingBottom: "10rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <ShoppingCart size={48} color="var(--primary-light)" style={{ marginBottom: "2rem" }} />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>Ready to Supercharge Your Shopify Store with AI?</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Whether you are launching a new e-commerce brand or looking to integrate cutting-edge AI shopping agents into your existing Shopify store, Beeclue Tech designs and builds e-commerce platforms that drive revenue.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/shopify-development-toronto" className={styles.ctaButton}>
              Explore Shopify Development <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/contact" className={styles.ctaButtonLight}>
              Schedule a Consultation <ArrowRight className={styles.arrow} size={20} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
