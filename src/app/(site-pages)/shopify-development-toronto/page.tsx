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
  Globe,
  RefreshCcw,
  Zap,
  Shield,
  ChevronDown,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function ShopifyDevelopmentTorontoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How much does Shopify development cost in Toronto?", a: "Shopify development costs in Toronto range from $5,000 for a basic custom theme to $50,000+ for a fully custom headless commerce solution. The final cost depends on design complexity, custom features, integrations, and whether you need a standard Shopify store or a Shopify Plus headless build." },
    { q: "How long does it take to build a custom Shopify store?", a: "A standard custom Shopify store typically takes 4 to 8 weeks from discovery to launch. More complex projects involving custom apps, headless architecture, or extensive third-party integrations can take 8 to 14 weeks. We provide a detailed timeline during the scoping phase." },
    { q: "Do you build Shopify Plus headless stores?", a: "Yes. We specialize in headless Shopify Plus builds using Next.js and Shopify&apos;s Storefront API. Headless architecture decouples the frontend from the backend, delivering sub-second page loads, unlimited design flexibility, and enterprise-grade performance ideal for high-traffic brands." },
    { q: "Can you migrate my existing store to Shopify?", a: "Yes. We execute complete platform migrations from WooCommerce, Magento, Wix, Squarespace, and custom platforms to Shopify. Our migration process transfers all products, customer accounts, order history, and content while setting up 301 redirects to preserve your SEO rankings." },
    { q: "Will my Shopify store be optimized for SEO?", a: "Absolutely. Every Shopify store we build is optimized for search engines with clean URL structures, schema markup, fast page speeds, mobile-first design, optimized product pages, and proper meta tags. We also implement advanced SEO features like automated sitemaps and canonical tags." },
    { q: "Do you build custom Shopify apps?", a: "Yes. We develop custom Shopify apps tailored to your business needs, including inventory management tools, custom checkout experiences, subscription integrations, wholesale portals, and API-driven solutions that connect Shopify with your existing business systems." },
    { q: "What makes Beeclue Tech different from other Shopify developers in Toronto?", a: "Beeclue Tech combines deep Shopify platform expertise with a performance-first approach. We don&apos;t use cookie-cutter themes. Every store is engineered for speed, conversion rate optimization, and scalability. Our Toronto-based team provides end-to-end service from strategy and design through development, launch, and ongoing support." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Shopify Development",
        "provider": {
          "@type": "Organization",
          "name": "Beeclue Tech",
        },
        "areaServed": "Toronto",
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
            "name": "Shopify Development Toronto",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does Shopify development cost in Toronto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shopify development costs in Toronto range from $5,000 for a basic custom theme to $50,000+ for a fully custom headless commerce solution. The final cost depends on design complexity, custom features, integrations, and whether you need a standard Shopify store or a Shopify Plus headless build.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a custom Shopify store?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard custom Shopify store typically takes 4 to 8 weeks from discovery to launch. More complex projects involving custom apps, headless architecture, or extensive third-party integrations can take 8 to 14 weeks. We provide a detailed timeline during the scoping phase.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you build Shopify Plus headless stores?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in headless Shopify Plus builds using Next.js and Shopify's Storefront API. Headless architecture decouples the frontend from the backend, delivering sub-second page loads, unlimited design flexibility, and enterprise-grade performance ideal for high-traffic brands.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you migrate my existing store to Shopify?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We execute complete platform migrations from WooCommerce, Magento, Wix, Squarespace, and custom platforms to Shopify. Our migration process transfers all products, customer accounts, order history, and content while setting up 301 redirects to preserve your SEO rankings.",
            },
          },
          {
            "@type": "Question",
            "name": "Will my Shopify store be optimized for SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Every Shopify store we build is optimized for search engines with clean URL structures, schema markup, fast page speeds, mobile-first design, optimized product pages, and proper meta tags. We also implement advanced SEO features like automated sitemaps and canonical tags.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you build custom Shopify apps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We develop custom Shopify apps tailored to your business needs, including inventory management tools, custom checkout experiences, subscription integrations, wholesale portals, and API-driven solutions that connect Shopify with your existing business systems.",
            },
          },
          {
            "@type": "Question",
            "name": "What makes Beeclue Tech different from other Shopify developers in Toronto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Beeclue Tech combines deep Shopify platform expertise with a performance-first approach. We don't use cookie-cutter themes. Every store is engineered for speed, conversion rate optimization, and scalability. Our Toronto-based team provides end-to-end service from strategy and design through development, launch, and ongoing support.",
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
            <span className={styles.titleLinePrimary}>Shopify Development</span>
            <span className={styles.titleLine}>in Toronto</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Beeclue Tech builds high-converting, custom Shopify stores for Toronto
            businesses. From premium theme development to headless commerce
            architecture, we engineer Shopify solutions designed to maximize
            your online revenue and dominate your market.
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
            <h2>Professional Shopify Development Services for Toronto Businesses</h2>
            <p>
              Your Shopify store is the engine of your digital retail operation.
              In Toronto&apos;s competitive ecommerce landscape, a generic theme
              and basic setup won&apos;t cut it. You need a store engineered for
              speed, conversion, and scalability — one that turns browsers into
              buyers and keeps them coming back.
            </p>
            <p>
              At Beeclue Tech, a leading Shopify development agency in Toronto, we
              don&apos;t just install themes and call it done. We architect custom
              Shopify experiences built from the ground up to align with your
              brand, your customers, and your revenue goals. Whether you need a
              custom Shopify theme, a headless Shopify Plus build, or a custom
              Shopify app, our Toronto-based team delivers end-to-end solutions
              that perform.
            </p>
            <p>
              Our deep expertise across the Shopify ecosystem — including
              Shopify, Shopify Plus, and the Storefront API — means we can
              build exactly what your business needs, not what a template
              allows. We&apos;ve helped Toronto retailers, DTC brands, and B2B
              wholesalers transform their online stores into powerful revenue
              machines.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Why Invest in Custom Shopify Development</h3>
            <p>Toronto businesses rely on professional Shopify development to:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Build a store that converts at 2-3x the industry average</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Achieve sub-second page loads that Google rewards with higher rankings</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Create a seamless checkout experience that reduces cart abandonment</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Scale effortlessly during high-traffic events and flash sales</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Integrate with your ERP, CRM, and fulfillment systems seamlessly</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* SHOPIFY SERVICES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Shopify Development Services</h2>
          <p>End-to-end Shopify solutions engineered to drive sales and scale your Toronto business.</p>
        </div>

        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <LayoutTemplate className={styles.serviceIcon} />
            <h3>Custom Shopify Theme Development</h3>
            <p>We design and build bespoke Shopify themes tailored to your brand identity. No cookie-cutter templates. Every pixel, animation, and interaction is crafted to engage your audience and drive conversions. Our themes are built with performance and SEO baked in from day one.</p>
          </div>
          <div className={styles.serviceCard}>
            <Globe className={styles.serviceIcon} />
            <h3>Headless Shopify Plus</h3>
            <p>Future-proof your storefront with headless commerce. We decouple your Shopify backend and build a blazing-fast Next.js frontend using the Storefront API. The result: sub-second loads, limitless design freedom, and enterprise-grade performance for high-traffic brands.</p>
          </div>
          <div className={styles.serviceCard}>
            <ShoppingCart className={styles.serviceIcon} />
            <h3>Shopify App Development</h3>
            <p>Need functionality beyond what off-the-shelf apps offer? We build custom Shopify apps tailored to your operations — from subscription management and custom checkout flows to inventory automation and B2B wholesale tools that plug directly into your store.</p>
          </div>
          <div className={styles.serviceCard}>
            <RefreshCcw className={styles.serviceIcon} />
            <h3>Shopify Store Migrations</h3>
            <p>Outgrowing WooCommerce, Magento, or Wix? We execute flawless platform migrations to Shopify, transferring all products, customers, orders, and content. Our migration process includes 301 redirects and SEO preservation so you lose zero search rankings.</p>
          </div>
          <div className={styles.serviceCard}>
            <Zap className={styles.serviceIcon} />
            <h3>Performance Optimization</h3>
            <p>Slow stores lose sales. We audit and optimize every layer of your Shopify store — from image compression and code minification to app auditing and CDN configuration. Our optimizations consistently improve Core Web Vitals scores and page speed by 40-60%.</p>
          </div>
          <div className={styles.serviceCard}>
            <Shield className={styles.serviceIcon} />
            <h3>Ongoing Shopify Support</h3>
            <p>Launch is just the beginning. We provide ongoing Shopify maintenance, feature additions, A/B testing, and strategic guidance to ensure your store continues to perform and grow. Think of us as your dedicated Shopify engineering partner in Toronto.</p>
          </div>
        </div>
      </FadeIn>

      {/* SHOPIFY DEVELOPMENT PROCESS */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Shopify Development Process</h2>
          <p>A proven, transparent process that delivers results on time and on budget.</p>
        </div>
        <div className={styles.processTimeline}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <h3>Discovery & Strategy</h3>
            <p>We start by understanding your business, your customers, and your competitive landscape. Through stakeholder interviews, competitor analysis, and user research, we define a clear strategy that aligns your Shopify store with your revenue goals. This phase includes technical architecture planning and a detailed project roadmap.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <h3>Design & Prototyping</h3>
            <p>Our design team crafts wireframes and high-fidelity mockups that balance brand aesthetics with conversion-focused UX. We prototype key user flows — product discovery, cart, and checkout — so you can see and interact with the design before a single line of code is written. Iteration is built into this phase.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <h3>Development & Integration</h3>
            <p>This is where your store comes to life. Our Shopify developers build custom themes, configure apps, and integrate third-party systems (ERP, CRM, payment gateways, shipping providers). Every build follows Shopify best practices with clean, maintainable code. We run continuous QA throughout development.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <h3>Launch & Optimization</h3>
            <p>After rigorous testing across devices and browsers, we launch your store with a comprehensive checklist covering performance, SEO, security, and analytics. Post-launch, we monitor performance metrics and run conversion rate optimization experiments to continuously improve your store&apos;s revenue per visitor.</p>
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE US */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Choose Our Shopify Team</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Shopify Platform Experts</h3>
              <p>Our team has built hundreds of Shopify stores across every niche. We know the platform inside and out — from Liquid templating to the Storefront API — and we use that depth to build stores that outperform the competition.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Conversion-Focused Design</h3>
              <p>Every design decision we make is driven by data and conversion psychology. We don&apos;t design for awards; we design for revenue. Our stores consistently achieve conversion rates 2-3x higher than industry averages.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Performance-First Architecture</h3>
              <p>Page speed directly impacts sales. We build Shopify stores that load in under 2 seconds, earn top Core Web Vitals scores, and provide a frictionless experience across every device and connection speed.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Toronto-Based Team</h3>
              <p>We&apos;re local. When you work with Beeclue Tech, you get a dedicated Toronto team that understands the Canadian market, Canadian payment preferences, and Canadian consumer expectations. No offshore surprises.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Transparent Process</h3>
              <p>We believe in radical transparency. You get a dedicated project manager, regular progress updates, access to our project management tools, and honest timelines. No black boxes, no surprises.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Long-Term Partnership</h3>
              <p>We don&apos;t disappear after launch. Beeclue Tech provides ongoing Shopify support, performance monitoring, feature development, and strategic guidance to ensure your store continues to grow and evolve with your business.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* TECHNOLOGY STACK */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Our Shopify Technology Stack</h2>
          <p>We leverage the full Shopify ecosystem and modern web technologies to build stores that perform at the highest level.</p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <h3>Shopify & Shopify Plus</h3>
            <p>Enterprise ecommerce platform</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Shopify Storefront API</h3>
            <p>Headless commerce backend</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Next.js & React</h3>
            <p>Blazing-fast frontend framework</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Shopify Liquid</h3>
            <p>Theme templating language</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Tailwind CSS</h3>
            <p>Utility-first styling</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Shopify Polaris</h3>
            <p>Admin UI component library</p>
          </div>
        </div>
      </FadeIn>

      {/* PRICING FACTORS */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Shopify Development Pricing Factors</h2>
          <p>Every project is unique. Here&apos;s what influences the investment required for your Shopify store.</p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Design Complexity</h3>
              <p>Custom designs with unique animations, interactions, and brand-specific visual systems require more design and development time than adapting existing Shopify themes.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Number of Products & Collections</h3>
              <p>Stores with large catalogs (1,000+ products) need advanced filtering, search functionality, and collection structures that add complexity to the build.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Custom Features & Functionality</h3>
              <p>Custom product configurators, subscription models, dynamic pricing, or wholesale portals require bespoke development that increases project scope.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Third-Party Integrations</h3>
              <p>Connecting Shopify with your ERP, CRM, accounting software, shipping providers, or marketing tools adds integration development time.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Headless vs. Traditional Shopify</h3>
              <p>Headless builds using Next.js and the Storefront API offer superior performance but require more development investment than traditional Shopify theme customization.</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p style={{ color: "var(--muted)", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            Ready to discuss your project? We provide transparent quotes with no hidden fees.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get Your Free Quote <ArrowRight className={styles.arrow} />
          </Link>
        </div>
      </FadeIn>

      {/* RELATED SERVICES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Related Services</h2>
          <p>Explore our other digital services that complement your Shopify store.</p>
        </div>
        <div className={styles.scroller}>
          <Link href="/ecommerce-development-toronto" className={styles.serviceCard} style={{ textDecoration: "none", color: "inherit" }}>
            <h3>Ecommerce Development Toronto</h3>
            <p>Full-service ecommerce development covering Shopify, WooCommerce, headless commerce, and B2B wholesale portals for Toronto businesses.</p>
            <span style={{ color: "var(--primary-light)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
          <Link href="/shopify-ecommerce-website-design" className={styles.serviceCard} style={{ textDecoration: "none", color: "inherit" }}>
            <h3>Shopify Ecommerce Website Design</h3>
            <p>Premium Shopify website design that combines stunning visuals with conversion-focused UX to create stores that sell.</p>
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
          <p>Common questions about our Shopify development services in Toronto.</p>
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

      {/* GTA AREA */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Shopify Development Across Toronto & the GTA
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "1.25rem", maxWidth: "800px", margin: "0 auto 2rem auto" }}>
          Beeclue Tech proudly serves Shopify merchants across:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
          {["Downtown Toronto", "North York", "Scarborough", "Etobicoke", "Mississauga", "Brampton", "Markham", "Vaughan"].map((city) => (
            <span key={city} style={{ padding: "0.5rem 1.5rem", border: "1px solid var(--border)", borderRadius: "50px", color: "var(--primary-light)" }}>
              {city}
            </span>
          ))}
        </div>
        <p style={{ color: "var(--muted)", fontSize: "1.25rem", maxWidth: "800px", margin: "0 auto" }}>
          If your business operates in the Greater Toronto Area, we can build a Shopify store that drives real revenue growth.
        </p>
      </FadeIn>

      {/* CTA SECTION */}
      <FadeIn className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Ready to Build Your Shopify Store?</h2>
          <p className={styles.footerSub}>
            Let&apos;s discuss your project. Our Toronto Shopify team will
            create a high-converting store that turns your visitors into loyal
            customers.
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
