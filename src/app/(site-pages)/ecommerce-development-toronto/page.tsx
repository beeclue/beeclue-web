"use client";

import Link from "next/link";
import styles from "@/app/page.module.css";
import { ArrowRight, LayoutTemplate, Briefcase, Globe, RefreshCcw, ShoppingCart, Search, CheckCircle2, Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";
import FaqAccordion from "@/components/FaqAccordion";

export default function EcommerceDevelopmentTorontoPage() {
  const faqs = [
    { q: "How much does ecommerce website development cost in Toronto?", a: "Ecommerce development costs in Toronto vary by platform and complexity. Standard Shopify stores range from $5,000 to $15,000. Custom headless ecommerce builds using Next.js and Shopify Plus typically cost $20,000 to $60,000+. B2B wholesale portals with complex pricing and ERP integrations start at $30,000+." },
    { q: "Which ecommerce platform is best for my business?", a: "Shopify is the best choice for most retail businesses due to its ease of use, reliability, and app ecosystem. Headless commerce using Next.js with Shopify Plus is ideal for brands needing maximum performance and design flexibility. WooCommerce works well for businesses already on WordPress. We recommend the right platform based on your products, budget, and growth goals." },
    { q: "Can you migrate my store from Wix or Squarespace to Shopify?", a: "Yes. We handle complete platform migrations including all products, customer accounts, order history, images, and content. We also set up 301 URL redirects to preserve your SEO rankings and ensure zero loss of search visibility during the transition." },
    { q: "Do you build B2B wholesale portals?", a: "Yes. We build custom B2B ecommerce portals featuring tiered pricing, bulk ordering capabilities, purchase order management, invoice generation, customer account hierarchies, and seamless integration with your existing ERP or inventory management systems." },
    { q: "Will my ecommerce site be optimized for conversions?", a: "Yes. Conversion Rate Optimization (CRO) is built into every ecommerce project we deliver. This includes fast checkout flows, mobile-first design, strategic upsell and cross-sell placements, trust signals, and performance optimization. Our goal is to maximize every visitor's likelihood to purchase." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "E-Commerce Development",
        "provider": {
          "@type": "Organization",
          "name": "Beeclue Tech"
        },
        "areaServed": "Toronto"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does ecommerce website development cost in Toronto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ecommerce development costs in Toronto vary by platform and complexity. Standard Shopify stores range from $5,000 to $15,000. Custom headless ecommerce builds using Next.js and Shopify Plus typically cost $20,000 to $60,000+. B2B wholesale portals with complex pricing and ERP integrations start at $30,000+."
            }
          },
          {
            "@type": "Question",
            "name": "Which ecommerce platform is best for my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shopify is the best choice for most retail businesses due to its ease of use, reliability, and app ecosystem. Headless commerce using Next.js with Shopify Plus is ideal for brands needing maximum performance and design flexibility. WooCommerce works well for businesses already on WordPress. We recommend the right platform based on your products, budget, and growth goals."
            }
          },
          {
            "@type": "Question",
            "name": "Can you migrate my store from Wix or Squarespace to Shopify?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We handle complete platform migrations including all products, customer accounts, order history, images, and content. We also set up 301 URL redirects to preserve your SEO rankings and ensure zero loss of search visibility during the transition."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build B2B wholesale portals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build custom B2B ecommerce portals featuring tiered pricing, bulk ordering capabilities, purchase order management, invoice generation, customer account hierarchies, and seamless integration with your existing ERP or inventory management systems."
            }
          },
          {
            "@type": "Question",
            "name": "Will my ecommerce site be optimized for conversions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Conversion Rate Optimization (CRO) is built into every ecommerce project we deliver. This includes fast checkout flows, mobile-first design, strategic upsell and cross-sell placements, trust signals, and performance optimization. Our goal is to maximize every visitor's likelihood to purchase."
            }
          }
        ]
      }
    ]
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beeclue.com/services" },
      { "@type": "ListItem", "position": 3, "name": "E-commerce Development", "item": "https://beeclue.com/ecommerce-development-toronto" }
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
            <span className={styles.titleLinePrimary}>Ecommerce</span>
            <span className={styles.titleLine}>Development</span>
            <span className={styles.titleLine}>in Toronto</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Scale your digital retail footprint with ultra-secure ecommerce ecosystems. Beeclue Tech architects custom Shopify, headless, and B2B platforms for Toronto businesses designed to maximize sales volume and crush friction.
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

      {/* LUXURY INTRODUCTION & CHECKLIST */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          
          <div className={styles.luxuryText}>
            <h2>Premium Ecommerce Development Services in Toronto</h2>
            <p>
              In digital retail, speed is revenue and friction is loss. Your online store isn't just a website; it is the vital engine of your commercial operation. A clunky checkout flow or a slow-loading product page can hemorrhage thousands of dollars in potential sales.
            </p>
            <p>
              At Beeclue Tech, a leading Toronto ecommerce agency, we build enterprise-grade online storefronts. From complex headless architectures connecting modern Next.js frontends to Shopify Plus backends, to heavily customized WooCommerce ecosystems, we focus exclusively on metrics that matter: conversion rates, cart sizes, and retention.
            </p>
            <p>
              Whether you are a local GTA boutique launching your first digital catalog or a high-volume B2B distributor requiring complex inventory synchronizations, our development team engineers reliable solutions built to scale.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Why Your Business Needs Powerful Ecommerce</h3>
            <p>Toronto retailers and B2B distributors rely on robust digital storefronts to capture the modern market. A premium ecommerce site helps you:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Process transactions securely 24/7 with zero downtime</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Automate inventory management and fulfillment logistics</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Increase average order value through intelligent upselling</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Expand your sales territory beyond the GTA globally</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Provide a frictionless, ultra-fast mobile checkout experience</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* SERVICES GRID */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Ecommerce Development Services</h2>
          <p>End-to-end digital retail solutions engineered to drive unparalleled growth.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <LayoutTemplate className={styles.serviceIcon} />
            <h3>Shopify & Shopify Plus</h3>
            <p>We design and develop premium, high-converting Shopify stores. From custom theme creation to complex app integrations, we build scalable infrastructure for rapid brand growth.</p>
          </div>
          <div className={styles.serviceCard}>
            <Briefcase className={styles.serviceIcon} />
            <h3>Headless Ecommerce</h3>
            <p>Future-proof your retail brand. We decouple your backend (Shopify/BigCommerce) and build a blazing fast Next.js/React frontend for sub-second page loads and ultimate flexibility.</p>
          </div>
          <div className={styles.serviceCard}>
            <Globe className={styles.serviceIcon} />
            <h3>WooCommerce Development</h3>
            <p>For brands demanding total ownership, we build custom, highly optimized WooCommerce platforms tailored to handle massive product catalogs and complex pricing rules.</p>
          </div>
          <div className={styles.serviceCard}>
            <RefreshCcw className={styles.serviceIcon} />
            <h3>B2B Wholesale Portals</h3>
            <p>We architect secure B2B ecommerce portals featuring custom tier pricing, rapid bulk ordering, invoice generation, and seamless integration with your existing ERP systems.</p>
          </div>
          <div className={styles.serviceCard}>
            <ShoppingCart className={styles.serviceIcon} />
            <h3>Platform Migration</h3>
            <p>Outgrown your current platform? We execute flawless, zero-downtime migrations to Shopify or custom stacks, ensuring zero loss of customer data, order history, or SEO rankings.</p>
          </div>
          <div className={styles.serviceCard}>
            <Search className={styles.serviceIcon} />
            <h3>Conversion Rate Optimization</h3>
            <p>We analyze user behavior to aggressively optimize your checkout flows. By removing friction points and improving site speed, we systematically increase your daily revenue.</p>
          </div>
        </div>
      </FadeIn>

      {/* INDUSTRIES SERVED */}
      <FadeIn className={styles.baseSection} style={{ background: "rgba(0, 0, 0, 0.5)" }}>
        <div className={styles.servicesHeader}>
          <h2>Industries We Serve in Toronto</h2>
          <p>We engineer high-performance web platforms for a diverse range of local and international sectors.</p>
        </div>
        <div className={styles.industriesGrid}>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Professional Services</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Law firms, financial advisors, consulting groups, and corporate agencies.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>E-Commerce & Retail</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Online storefronts, wholesale B2B platforms, and local retail delivery.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Real Estate</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Toronto realtors, property management firms, and brokerage portals.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Healthcare Providers</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Medical clinics, dental offices, and wellness centers across the GTA.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Startups & SaaS</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>High-growth tech startups, custom software vendors, and digital platforms.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Local Services</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Skilled trades, contractors, and local Toronto small businesses.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Manufacturing & Logistics</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Industrial suppliers, shipping networks, and B2B manufacturers.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Hospitality & Travel</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Restaurants, hotels, booking systems, and local tourism portals.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Education & E-Learning</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Private schools, online course platforms, and tutoring centers.</p>
          </div>
        </div>
      </FadeIn>

      {/* VALUE PROPOSITION SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Businesses Choose Us</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Strategy Before Development</h3>
              <p>Every project begins with deep research to ensure the final product aligns perfectly with your business goals.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Performance Focused</h3>
              <p>Speed, security, and performance are at the core of our architecture. We build systems optimized for reliability.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Transparent Communication</h3>
              <p>We keep you informed throughout every stage of development, ensuring clarity and confidence in the process.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Long-Term Support</h3>
              <p>Our relationship doesn't end at launch. We provide ongoing support, improvements, and technical guidance to scale.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Agile Methodology</h3>
              <p>We adapt to changing requirements swiftly, ensuring faster time-to-market without compromising on product quality.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Data-Driven Approach</h3>
              <p>Every design and technical architecture choice is backed by analytics and user behavior to maximize your ROI.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* FAQ SECTION */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Ecommerce Development FAQs</h2>
          <p>Common questions about building online stores and ecommerce platforms.</p>
        </div>
        <FaqAccordion faqs={faqs} />
      </FadeIn>

      {/* GTA AREA SECTION */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Supporting Businesses Across Toronto & the GTA</h2>
        <p style={{ color: "var(--muted)", fontSize: "1.25rem", maxWidth: "800px", margin: "0 auto 2rem auto" }}>
          Beeclue Tech proudly works with businesses across:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
          {["Downtown Toronto", "North York", "Scarborough", "Etobicoke", "Mississauga", "Brampton", "Markham", "Vaughan"].map(city => (
            <span key={city} style={{ padding: "0.5rem 1.5rem", border: "1px solid var(--border)", borderRadius: "50px", color: "var(--primary-light)" }}>
              {city}
            </span>
          ))}
        </div>
        <p style={{ color: "var(--muted)", fontSize: "1.25rem", maxWidth: "800px", margin: "0 auto" }}>
          If your business operates in the Greater Toronto Area, we can help you build powerful digital platforms that support your growth.
        </p>
      </FadeIn>

      {/* TESTIMONIALS SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.testimonialsSection}`}>
        <div className={styles.testimonialsTop}>
          <h2>What Our Clients Say</h2>
          
          <div className={styles.reviewsMeta}>
            <div className={styles.ratingsBadges}>
              <div className={styles.ratingBadge}>
                <img src="/google-logo.svg" alt="Google" width="24" height="24" />
                <div className={styles.ratingInfo}>
                  <div className={styles.ratingStars}>★★★★★</div>
                  <span className={styles.ratingText}>5.0 Rating</span>
                </div>
              </div>
              <div className={styles.ratingBadge}>
                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" alt="Trustpilot 5 Stars" width="100" height="20" />
                <div className={styles.ratingInfo}>
                  <span className={styles.ratingText}>Excellent</span>
                </div>
              </div>
            </div>
            
            <a href="https://g.page/r/" target="_blank" rel="noopener noreferrer" className={styles.reviewButton}>
              Review Us on Google
            </a>
          </div>
        </div>

        <div className={styles.testimonialScroller}>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"Very professional and great communicators. The programmer did an amazing job keeping his patience. Always available to answer questions. Zero ego, friendly and respectful."</p>
            <div className={styles.clientName}>— Chirag Murabia</div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"They perfectly captured my vision and brought it to life with creativity and technical expertise. The entire process was smooth, and her attention to detail made all the difference."</p>
            <div className={styles.clientName}>— Tejbeer Bhullar</div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"Beeclue is the best as I had really a great experience. Very affordable and they listen to customer demands in detail and do everything accordingly. Highly recommend!"</p>
            <div className={styles.clientName}>— Supreet Bhatia</div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"Thank you for helping me grow my startup. Your web team is really admirable. Exactly what I wanted. Thank you for your efforts and great work!"</p>
            <div className={styles.clientName}>— Payal Sharma</div>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
