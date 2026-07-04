"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  ShoppingCart,
  LayoutTemplate,
  Palette,
  Zap,
  BarChart3,
  Shield,
  Monitor,
  ChevronDown,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function ShopifyEcommerceWebsiteDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How much does a Shopify e-commerce website design cost?", a: "Shopify e-commerce website design costs range from $5,000 for a custom theme build to $50,000+ for a fully bespoke Shopify Plus headless solution. The investment depends on design complexity, product catalog size, custom features, and third-party integrations." },
    { q: "How long does it take to design a Shopify e-commerce store?", a: "A standard Shopify e-commerce store takes 4 to 8 weeks from discovery to launch. Complex projects with custom functionality, large product catalogs, or headless architecture typically take 8 to 14 weeks. We provide a detailed timeline during the scoping phase." },
    { q: "Do you design custom Shopify themes from scratch?", a: "Yes. We design and build custom Shopify themes tailored to your brand and business needs. Every theme is engineered for performance, mobile responsiveness, and conversion optimization — no generic templates or cookie-cutter designs." },
    { q: "Will my Shopify store be optimized for conversions?", a: "Absolutely. Every Shopify store we design is built with conversion rate optimization as a core principle. From product page layouts and checkout flows to trust signals and urgency elements, every design decision is driven by data and proven conversion psychology." },
    { q: "Can you redesign my existing Shopify store?", a: "Yes. We specialize in Shopify store redesigns that preserve your existing data, SEO rankings, and integrations while delivering a modern, high-converting design. Our redesign process includes a full UX audit, strategy session, and performance benchmarking." },
    { q: "Do you provide ongoing Shopify support after launch?", a: "Yes. We offer ongoing Shopify support packages that include maintenance, performance monitoring, feature development, A/B testing, and strategic consulting to ensure your store continues to perform and grow." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Shopify E-Commerce Website Design",
        "provider": {
          "@type": "Organization",
          "name": "Beeclue Tech",
        },
        "areaServed": "Canada",
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://beeclue.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://beeclue.com/services",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Shopify E-Commerce Website Design",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a Shopify e-commerce website design cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shopify e-commerce website design costs range from $5,000 for a custom theme build to $50,000+ for a fully bespoke Shopify Plus headless solution. The investment depends on design complexity, product catalog size, custom features, and third-party integrations.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does it take to design a Shopify e-commerce store?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard Shopify e-commerce store takes 4 to 8 weeks from discovery to launch. Complex projects with custom functionality, large product catalogs, or headless architecture typically take 8 to 14 weeks. We provide a detailed timeline during the scoping phase.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you design custom Shopify themes from scratch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We design and build custom Shopify themes tailored to your brand and business needs. Every theme is engineered for performance, mobile responsiveness, and conversion optimization — no generic templates or cookie-cutter designs.",
            },
          },
          {
            "@type": "Question",
            "name": "Will my Shopify store be optimized for conversions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Every Shopify store we design is built with conversion rate optimization as a core principle. From product page layouts and checkout flows to trust signals and urgency elements, every design decision is driven by data and proven conversion psychology.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you redesign my existing Shopify store?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in Shopify store redesigns that preserve your existing data, SEO rankings, and integrations while delivering a modern, high-converting design. Our redesign process includes a full UX audit, strategy session, and performance benchmarking.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you provide ongoing Shopify support after launch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We offer ongoing Shopify support packages that include maintenance, performance monitoring, feature development, A/B testing, and strategic consulting to ensure your store continues to perform and grow.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className={styles.main}>
      <ServiceTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Shopify E-Commerce</span>
            <span className={styles.titleLine}>Website Design</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Beeclue Tech designs high-converting Shopify e-commerce stores that turn
            browsers into buyers. From custom product pages to optimized checkout
            flows, we craft every pixel to maximize your online revenue and deliver
            a seamless shopping experience.
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

      {/* INTRODUCTION */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Professional Shopify E-Commerce Website Design</h2>
            <p>
              Your e-commerce store is the face of your online business. In a world
              where consumers have endless options, your Shopify store must make an
              immediate impression, guide visitors through a seamless shopping
              experience, and convert interest into revenue — all within seconds.
            </p>
            <p>
              At Beeclue Tech, we design Shopify e-commerce websites that combine
              stunning visual design with conversion-driven UX. We don&apos;t just
              make your store look beautiful — we engineer every element to perform.
              From product discovery and filtering to cart and checkout, every
              interaction is optimized to reduce friction and maximize revenue.
            </p>
            <p>
              Our team understands the unique demands of e-commerce design. We know
              that a product page must load instantly, display beautifully on every
              device, and build trust through design quality. That&apos;s why we
              approach every Shopify project with a performance-first mindset,
              ensuring your store not only looks exceptional but drives consistent
              growth.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Why Shopify E-Commerce Website Design Matters</h3>
            <p>Professional Shopify design helps businesses:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Increase conversion rates by 2-3x with optimized product pages</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Reduce cart abandonment through streamlined checkout experiences</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Build brand trust with premium, professional store design</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Deliver fast page loads that Google rewards and customers expect</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Scale seamlessly as your product catalog and traffic grow</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* SERVICES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Shopify E-Commerce Design Services</h2>
          <p>End-to-end Shopify design solutions engineered to maximize your online revenue.</p>
        </div>

        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <LayoutTemplate className={styles.serviceIcon} />
            <h3>Custom Shopify Theme Design</h3>
            <p>We design and develop bespoke Shopify themes built from scratch around your brand identity. No templates. Every visual element, animation, and interaction is crafted to engage your audience and reinforce your brand while driving conversions.</p>
          </div>
          <div className={styles.serviceCard}>
            <Palette className={styles.serviceIcon} />
            <h3>Product Page Design</h3>
            <p>Your product pages are where purchasing decisions happen. We design product pages that load instantly, showcase your products beautifully, and include every trust signal, social proof element, and call-to-action needed to drive add-to-carts and purchases.</p>
          </div>
          <div className={styles.serviceCard}>
            <ShoppingCart className={styles.serviceIcon} />
            <h3>Checkout Optimization</h3>
            <p>Cart abandonment kills revenue. We redesign and optimize your Shopify checkout flow to reduce friction, add trust elements, and streamline the path from cart to confirmation — recovering sales that would otherwise be lost.</p>
          </div>
          <div className={styles.serviceCard}>
            <Monitor className={styles.serviceIcon} />
            <h3>Mobile-First E-Commerce Design</h3>
            <p>Over 70% of e-commerce traffic comes from mobile. We design every Shopify store with a mobile-first approach, ensuring your product pages, navigation, and checkout perform flawlessly on every device and screen size.</p>
          </div>
          <div className={styles.serviceCard}>
            <BarChart3 className={styles.serviceIcon} />
            <h3>Conversion Rate Optimization</h3>
            <p>We use heatmaps, session recordings, and A/B testing to continuously improve your store&apos;s performance. Every design iteration is backed by real user data, ensuring we increase conversions without guessing.</p>
          </div>
          <div className={styles.serviceCard}>
            <Zap className={styles.serviceIcon} />
            <h3>Shopify Store Redesign</h3>
            <p>Has your existing Shopify store fallen behind competitors? We execute complete store redesigns that modernize your look, improve performance, and boost conversions — all while preserving your existing data, content, and SEO rankings.</p>
          </div>
        </div>
      </FadeIn>

      {/* PROCESS */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Shopify Design Process</h2>
          <p>A proven, iterative process that delivers beautiful, high-performing Shopify stores.</p>
        </div>
        <div className={styles.processTimeline}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <h3>Discovery & UX Research</h3>
            <p>We start by understanding your brand, your customers, and your competitive landscape. Through stakeholder interviews, user research, and competitor analysis, we identify opportunities to differentiate your store and create a design strategy that aligns with your business goals.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <h3>Wireframing & Visual Design</h3>
            <p>Our design team creates wireframes for key pages — homepage, product pages, collection pages, and checkout. Once the layout is approved, we develop high-fidelity mockups that bring your brand to life with stunning visual design. We iterate until every pixel is perfect.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <h3>Shopify Development & QA</h3>
            <p>We translate the approved design into a fully functional Shopify theme. Every component is built with performance and SEO in mind. We conduct rigorous quality assurance across devices and browsers to ensure flawless functionality before launch.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <h3>Launch & Performance Optimization</h3>
            <p>After final testing and client review, we launch your redesigned Shopify store with a comprehensive checklist. Post-launch, we monitor Core Web Vitals, conversion rates, and user behavior to identify opportunities for continuous improvement.</p>
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE US */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Choose Our Shopify Design Team</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>E-Commerce Design Specialists</h3>
              <p>We don&apos;t design generic websites. Every project we take on is an e-commerce store, giving us deep expertise in the UX patterns, trust signals, and conversion mechanics that drive online revenue.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Conversion-Driven Approach</h3>
              <p>Beautiful design without conversions is art, not business. Every design decision we make is informed by data, A/B testing, and conversion psychology to ensure your store drives measurable revenue growth.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Shopify Platform Expertise</h3>
              <p>We know Shopify inside and out — from Liquid templating to the Storefront API, from Shopify Plus features to third-party app integrations. Our platform depth ensures your store is built to perform and scale.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Performance-First Design</h3>
              <p>Page speed directly impacts sales. We design Shopify stores that load in under 2 seconds, earn top Core Web Vitals scores, and deliver a frictionless experience across every device and connection speed.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>End-to-End Service</h3>
              <p>From initial strategy and UX research through visual design, development, launch, and ongoing support — we handle every aspect of your Shopify store design under one roof. No handoffs, no gaps.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Proven Results</h3>
              <p>Our Shopify store designs consistently deliver measurable results — higher conversion rates, lower cart abandonment, increased average order value, and improved customer satisfaction scores.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* RELATED SERVICES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Related Services</h2>
          <p>Explore our other services that complement your Shopify e-commerce store.</p>
        </div>
        <div className={styles.scroller}>
          <Link href="/ecommerce-development-toronto" className={styles.serviceCard} style={{ textDecoration: "none", color: "inherit" }}>
            <h3>E-Commerce Development Toronto</h3>
            <p>Full-service e-commerce development covering Shopify, WooCommerce, headless commerce, and B2B wholesale portals for Toronto businesses.</p>
            <span style={{ color: "var(--primary-light)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
          <Link href="/shopify-development-toronto" className={styles.serviceCard} style={{ textDecoration: "none", color: "inherit" }}>
            <h3>Shopify Development Toronto</h3>
            <p>Custom Shopify development services including theme development, app development, headless commerce, and store migrations for Toronto merchants.</p>
            <span style={{ color: "var(--primary-light)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </FadeIn>

      {/* FAQ SECTION */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Frequently Asked Questions</h2>
          <p>Common questions about our Shopify e-commerce website design services.</p>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.q}
                <ChevronDown
                  size={20}
                  className={`${styles.faqChevron} ${openFaq === i ? styles.faqChevronOpen : ""}`}
                />
              </button>
              <div className={`${styles.faqAnswer} ${openFaq === i ? styles.faqAnswerOpen : ""}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* CTA SECTION */}
      <FadeIn className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Ready to Transform Your Shopify Store?</h2>
          <p className={styles.footerSub}>
            Let&apos;s discuss your e-commerce goals. Our Shopify design team will
            create a stunning, high-converting store that turns visitors into
            loyal customers.
          </p>
          <div className={styles.footerActions}>
            <Link href="/contact" className={styles.ctaButtonLight}>
              Get Started Today <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
