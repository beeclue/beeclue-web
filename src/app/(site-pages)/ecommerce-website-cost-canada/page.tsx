"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  DollarSign,
  ShoppingCart,
  Code,
  CreditCard,
  TrendingUp,
  AlertTriangle,
  BarChart3,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function EcommerceWebsiteCostCanadaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "E-Commerce Website Development",
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
            "name": "E-Commerce Website Cost Canada",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does an e-commerce website cost in Canada?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An e-commerce website in Canada costs between $3,000 and $100,000+ depending on the platform and complexity. A basic Shopify store starts at $3,000-$8,000. A custom WooCommerce build ranges from $5,000-$25,000. A fully custom headless commerce solution can cost $30,000-$100,000+.",
            },
          },
          {
            "@type": "Question",
            "name": "What are the hidden costs of running an e-commerce website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Beyond the initial build, ongoing costs include hosting ($20-$500/month), SSL certificates ($0-$200/year), payment processing fees (2.5%-3.5% per transaction), platform subscription fees ($29-$300/month for Shopify), plugins and apps ($100-$500/month), maintenance ($100-$500/month), and marketing预算.",
            },
          },
          {
            "@type": "Question",
            "name": "Is Shopify or WooCommerce cheaper?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shopify has lower upfront costs with its monthly subscription model ($29-$300/month) but charges transaction fees unless using Shopify Payments. WooCommerce is free to install but requires hosting ($10-$50/month) and paid plugins. For small stores, Shopify is typically cheaper. For large catalogs with custom needs, WooCommerce can be more cost-effective.",
            },
          },
          {
            "@type": "Question",
            "name": "How much should I budget for e-commerce website maintenance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Budget 10-20% of your initial build cost annually for maintenance. A $10,000 website needs $1,000-$2,000/year for updates, security patches, performance monitoring, and feature additions. This ensures your store stays secure, fast, and competitive.",
            },
          },
          {
            "@type": "Question",
            "name": "What ROI can I expect from an e-commerce website investment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A well-built e-commerce website typically generates 3-5x return on investment within the first year. The key factors are conversion rate optimization (a 1% improvement can mean thousands in additional revenue), page speed (every second of delay reduces conversions by 7%), and SEO visibility (organic traffic is the most cost-effective channel).",
            },
          },
          {
            "@type": "Question",
            "name": "Should I hire a Canadian developer or use an offshore team?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hiring a Canadian developer costs more upfront ($75-$200/hour vs $25-$75/hour offshore) but provides significant advantages: local market knowledge, Canadian payment compliance (PSPC), no communication barriers, timezone alignment, and legal recourse. For businesses serious about their e-commerce presence, a Canadian developer typically delivers better long-term ROI.",
            },
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      q: "How much does an e-commerce website cost in Canada?",
      a: "An e-commerce website in Canada costs between $3,000 and $100,000+ depending on the platform and complexity. A basic Shopify store starts at $3,000-$8,000. A custom WooCommerce build ranges from $5,000-$25,000. A fully custom headless commerce solution can cost $30,000-$100,000+.",
    },
    {
      q: "What are the hidden costs of running an e-commerce website?",
      a: "Beyond the initial build, ongoing costs include hosting ($20-$500/month), SSL certificates ($0-$200/year), payment processing fees (2.5%-3.5% per transaction), platform subscription fees ($29-$300/month for Shopify), plugins and apps ($100-$500/month), maintenance ($100-$500/month), and marketing预算.",
    },
    {
      q: "Is Shopify or WooCommerce cheaper?",
      a: "Shopify has lower upfront costs with its monthly subscription model ($29-$300/month) but charges transaction fees unless using Shopify Payments. WooCommerce is free to install but requires hosting ($10-$50/month) and paid plugins. For small stores, Shopify is typically cheaper. For large catalogs with custom needs, WooCommerce can be more cost-effective.",
    },
    {
      q: "How much should I budget for e-commerce website maintenance?",
      a: "Budget 10-20% of your initial build cost annually for maintenance. A $10,000 website needs $1,000-$2,000/year for updates, security patches, performance monitoring, and feature additions.",
    },
    {
      q: "What ROI can I expect from an e-commerce website investment?",
      a: "A well-built e-commerce website typically generates 3-5x return on investment within the first year. The key factors are conversion rate optimization, page speed, and SEO visibility.",
    },
    {
      q: "Should I hire a Canadian developer or use an offshore team?",
      a: "Hiring a Canadian developer costs more upfront but provides significant advantages: local market knowledge, Canadian payment compliance, no communication barriers, timezone alignment, and legal recourse.",
    },
  ];

  return (
    <main className={styles.main}>
      <ServiceTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <FadeIn
        className={styles.baseSection}
        style={{
          paddingTop: "20vh",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className={styles.heroContent}>
          <h1
            className={styles.title}
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            <span className={styles.titleLinePrimary}>
              E-Commerce Website
            </span>
            <span className={styles.titleLine}>Cost in Canada</span>
          </h1>
          <p
            className={styles.subtitle}
            style={{ fontSize: "1.25rem", maxWidth: "800px" }}
          >
            How much does an e-commerce website cost in Canada? Our complete
            2026 pricing guide breaks down costs by platform, features, and
            complexity so you can budget with confidence and avoid expensive
            surprises.
          </p>
          <div className={styles.heroRatingContainer}>
            <Link href="/contact" className={styles.ctaButton}>
              Get a Free Quote <ArrowRight className={styles.arrow} />
            </Link>
            <div className={styles.heroRatingBadge}>
              <div
                style={{
                  color: "#fbbf24",
                  fontSize: "1.25rem",
                  letterSpacing: "2px",
                }}
              >
                ★★★★★
              </div>
              <span
                style={{ color: "var(--muted)", fontSize: "0.875rem" }}
              >
                5.0 from 30+ reviews
              </span>
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
            <h2>
              Understanding E-Commerce Website Costs in Canada for 2026
            </h2>
            <p>
              If you&apos;re a Canadian business owner exploring e-commerce,
              one of your first questions is likely &quot;how much will this
              cost?&quot; It&apos;s a fair question — and the answer depends on
              several factors including your platform choice, the complexity of
              your product catalog, custom features, and whether you hire a
              professional developer or go the DIY route.
            </p>
            <p>
              At Beeclue Tech, we&apos;ve built hundreds of e-commerce stores
              for Canadian businesses across every industry. We&apos;ve seen
              businesses waste thousands on over-engineered solutions and others
              lose revenue because they under-invested in critical
              functionality. This guide shares transparent, real-world pricing
              so you can make informed decisions about your e-commerce
              investment.
            </p>
            <p>
              The truth is, the cost of your e-commerce website directly
              impacts your revenue potential. A $3,000 DIY Shopify store and a
              $30,000 custom build aren&apos;t just different in price —
              they&apos;re different in conversion rates, page speed, SEO
              visibility, and scalability. Understanding what you&apos;re paying
              for helps you invest wisely and avoid the trap of choosing the
              cheapest option that costs you sales.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Key Cost Factors for E-Commerce Websites</h3>
            <p>Canadian businesses should budget for these primary factors:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Platform choice: Shopify, WooCommerce, or custom build
                </span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Design complexity: template-based vs. fully custom design
                </span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Product catalog size: number of products and variants
                </span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Custom features: subscriptions, configurators, wholesale
                </span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Third-party integrations: ERP, CRM, shipping, accounting
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* PRICING BREAKDOWN BY PLATFORM */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>E-Commerce Website Cost by Platform</h2>
          <p>
            Here&apos;s what Canadian businesses typically pay for each major
            e-commerce platform in 2026.
          </p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <ShoppingCart className={styles.serviceIcon} />
            <h3>Shopify (Standard)</h3>
            <p>
              <strong>Build cost: $3,000 - $15,000</strong>
              <br />
              Monthly: $39 - $399/month + 2.9% + $0.30 per transaction
              <br /><br />
              Best for small to medium businesses. Includes hosting, SSL, and
              basic features. Theme customization and apps add to the cost.
              Transaction fees apply unless using Shopify Payments.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <ShoppingCart className={styles.serviceIcon} />
            <h3>Shopify Plus</h3>
            <p>
              <strong>Build cost: $15,000 - $75,000</strong>
              <br />
              Monthly: $2,300+/month
              <br /><br />
              Best for high-volume merchants and enterprises. Includes
              enterprise features, lower transaction rates, and B2B
              capabilities. Headless builds with Storefront API push costs
              higher.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Code className={styles.serviceIcon} />
            <h3>WooCommerce</h3>
            <p>
              <strong>Build cost: $5,000 - $25,000</strong>
              <br />
              Monthly: $15 - $100/month hosting + plugin fees
              <br /><br />
              Best for content-heavy stores and businesses already on
              WordPress. Platform is free but themes, plugins, and hosting add
              up. More flexibility but requires more technical management.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Code className={styles.serviceIcon} />
            <h3>Custom Headless Build</h3>
            <p>
              <strong>Build cost: $30,000 - $100,000+</strong>
              <br />
              Monthly: $100 - $500 hosting + API costs
              <br /><br />
              Best for enterprises needing maximum performance and custom UX.
              Uses Next.js/Astro frontend with Shopify Plus, BigCommerce, or
              custom backend. Sub-second loads and unlimited design freedom.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* HIDDEN COSTS */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Hidden Costs Most Businesses Forget</h2>
          <p>
            The build cost is just the beginning. Here are the ongoing
            expenses that catch Canadian businesses off guard.
          </p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <DollarSign className={styles.valueIcon} />
            <div>
              <h3>Payment Processing Fees</h3>
              <p>
                Every transaction costs 2.5%-3.5% plus a flat fee. On $100,000
                in annual sales, that&apos;s $2,500-$3,500 going to payment
                processors. Canadian processors like Moneris and Stripe offer
                competitive rates, but these fees are unavoidable.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CreditCard className={styles.valueIcon} />
            <div>
              <h3>Platform Subscription Fees</h3>
              <p>
                Shopify charges $39-$399/month (or $2,300+ for Plus). These
                recurring fees are the cost of using a hosted platform. They
                cover hosting, SSL, and platform updates, but they add up
                significantly over time.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <AlertTriangle className={styles.valueIcon} />
            <div>
              <h3>Plugins and Apps</h3>
              <p>
                Most stores need 5-15 paid apps for email marketing, reviews,
                upselling, inventory management, and analytics. These typically
                cost $10-$100/month each, adding $50-$500/month to your
                operating costs.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <TrendingUp className={styles.valueIcon} />
            <div>
              <h3>Marketing and Advertising</h3>
              <p>
                A website without traffic is an expensive brochure. Budget
                $500-$5,000+/month for Google Ads, social media advertising,
                email marketing, and SEO services. Marketing is often the
                largest ongoing expense for e-commerce businesses.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <BarChart3 className={styles.valueIcon} />
            <div>
              <h3>Maintenance and Updates</h3>
              <p>
                Budget 10-20% of your initial build cost annually for
                maintenance. This covers security patches, plugin updates,
                performance monitoring, bug fixes, and feature additions. A
                neglected store becomes slow, vulnerable, and loses rankings.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CreditCard className={styles.valueIcon} />
            <div>
              <h3>Content and Photography</h3>
              <p>
                Professional product photography costs $5-$50 per product.
                Copywriting, lifestyle imagery, and video content add to the
                investment. High-quality content directly impacts conversion
                rates and SEO performance.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ROI SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Calculating Your E-Commerce ROI</h2>
          <p>
            Understanding the return on your e-commerce investment helps
            justify the upfront cost and choose the right level of build.
          </p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <TrendingUp className={styles.valueIcon} />
            <div>
              <h3>Conversion Rate Impact</h3>
              <p>
                A professional e-commerce site converts at 2-4% vs 0.5-1% for
                DIY builds. On 10,000 monthly visitors, that&apos;s the
                difference between 50-100 sales and 200-400 sales. At a $100
                average order value, you&apos;re looking at $5,000-$10,000 in
                additional monthly revenue.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <BarChart3 className={styles.valueIcon} />
            <div>
              <h3>Page Speed Revenue</h3>
              <p>
                Every second of page load delay reduces conversions by 7%. A
                professional build loads in 1-2 seconds vs 3-5 seconds for
                cheap builds. That speed difference alone can increase revenue
                by 14-28% on the same traffic volume.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <TrendingUp className={styles.valueIcon} />
            <div>
              <h3>SEO Visibility</h3>
              <p>
                A properly built e-commerce site ranks higher on Google,
                bringing in free organic traffic. The average e-commerce
                business gets 30-50% of revenue from organic search. A site
                that&apos;s built with SEO in mind from day one captures this
                traffic from the start.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "3rem",
            textAlign: "center",
            padding: "2rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            maxWidth: "800px",
            margin: "3rem auto 0",
          }}
        >
          <h3 style={{ marginBottom: "1rem" }}>Real-World Example</h3>
          <p style={{ color: "var(--muted)", lineHeight: "1.8" }}>
            A Toronto retailer investing $20,000 in a custom Shopify store
            can expect: 15,000 monthly visitors × 3% conversion rate = 450
            sales × $80 average order value = $36,000/month in revenue.
            Annual revenue: $432,000. ROI: 2,060% on the initial build
            investment. This excludes organic traffic growth from SEO and
            repeat customer revenue.
          </p>
        </div>
      </FadeIn>

      {/* RELATED SERVICES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Related Resources</h2>
          <p>
            Explore our other guides and services to make informed decisions
            about your e-commerce investment.
          </p>
        </div>
        <div className={styles.scroller}>
          <Link
            href="/ecommerce-development-toronto"
            className={styles.serviceCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>Ecommerce Development Toronto</h3>
            <p>
              Full-service ecommerce development covering Shopify, WooCommerce,
              headless commerce, and B2B wholesale portals for Toronto
              businesses.
            </p>
            <span
              style={{
                color: "var(--primary-light)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
          <Link
            href="/best-ecommerce-platform-canada"
            className={styles.serviceCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>Best E-Commerce Platform Canada</h3>
            <p>
              Compare the best e-commerce platforms in Canada for 2026. Shopify
              vs WooCommerce vs custom solutions — features, pricing, and
              recommendations.
            </p>
            <span
              style={{
                color: "var(--primary-light)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </FadeIn>

      {/* FAQ SECTION */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Frequently Asked Questions</h2>
          <p>
            Common questions about e-commerce website costs in Canada.
          </p>
        </div>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                padding: "1.5rem",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "0.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {faq.q}
                <span
                  style={{
                    transform: openFaq === i ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.2s",
                  }}
                >
                  ▼
                </span>
              </h3>
              {openFaq === i && (
                <p
                  style={{
                    color: "var(--muted)",
                    lineHeight: "1.6",
                    marginTop: "0.5rem",
                  }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </FadeIn>

      {/* CTA SECTION */}
      <FadeIn className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Ready to Invest in Your E-Commerce Website?</h2>
          <p className={styles.footerSub}>
            Get a transparent, detailed quote for your e-commerce project. Our
            Toronto team will help you choose the right platform and features
            to maximize your ROI.
          </p>
          <div className={styles.footerActions}>
            <Link href="/contact" className={styles.ctaButtonLight}>
              Get Your Free Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
