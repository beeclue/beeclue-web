"use client";

import Image from "next/image";
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
  CreditCard,
  Truck,
  Sparkles,
  Search,
  Sliders,
  DollarSign,
  Package,
  Layers,
  HelpCircle,
  TrendingUp,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";
import FaqAccordion from "@/components/FaqAccordion";

export default function ShopifyDevelopmentTorontoPage() {
  const faqs = [
    {
      q: "What is the difference between hiring a Certified Shopify Partner vs. building it myself?",
      a: "While Shopify is user-friendly, setting up a store that actually converts requires deep expertise in UI/UX conversion architecture, mobile speed optimization, Canadian tax rule compliance (HST/GST/PST), shipping rate tables, and technical SEO schema. As an Official Shopify Partner, we build your store in our developer sandbox (saving you monthly fees during the build), eliminate slow, bloated third-party apps by writing native code, and hand you a turnkey, professionally tested store ready to generate sales on Day 1.",
    },
    {
      q: "Do I have to pay Shopify's monthly subscription fee while you are building my store?",
      a: "No! This is one of the biggest financial advantages of working with an Official Shopify Partner like Beeclue Tech. When you sign up directly with Shopify, you only get a 3-day free trial before you are forced to pay monthly subscription fees. When we create your store in our Official Partner Development Sandbox, your trial is completely unlimited. You pay $0 to Shopify during the entire design, setup, and testing process. You only transfer billing and start paying Shopify on the exact day your store goes live to paying customers.",
    },
    {
      q: "How much does it cost to build a Shopify store in Canada?",
      a: "Our Shopify services are tailored to your stage of business. For new founders and boutique brands launching their first online storefront, our turnkey 'Shopify Launchpad' packages provide complete end-to-end setup (theme configuration, Canadian taxes, shipping, payment gateway, up to 25 products, and 1-on-1 training) at accessible flat-rate project pricing or on our managed growth retainers. For scaling brands, we provide custom bespoke Liquid development, conversion rate optimization, and custom app integrations. Every quote is 100% transparent with zero hidden fees.",
    },
    {
      q: "How long does it take from kickoff to store launch?",
      a: "A turnkey Shopify Launchpad store typically takes 2 to 3 weeks from initial kickoff to live launch. Custom bespoke stores with unique design animations, custom Liquid sections, and multi-currency features take 4 to 6 weeks. Complex platform migrations or headless builds take 6 to 10 weeks. We provide a guaranteed launch timeline before work begins.",
    },
    {
      q: "How do Canadian taxes (HST, GST, PST, QST) work on Shopify?",
      a: "Canadian sales tax is notoriously complex because each province has distinct rules: 13% HST in Ontario, 5% GST in Alberta, 5% GST + 7% PST in British Columbia, and GST + QST in Quebec. We configure your Shopify tax settings with automated rooftop-accurate tax calculations based on Canadian destination zones, ensuring you collect the correct legal sales tax without accidental undercharging or audits.",
    },
    {
      q: "Can I easily manage inventory, orders, and products myself after launch?",
      a: "Yes, 100%. We design our Shopify stores so that you never need to touch code or pay a developer for day-to-day operations. Before launch, we host a 1-on-1 private video walkthrough showing you how to add new products, update prices, manage inventory, print shipping labels, and issue refunds. We also provide recorded video SOPs for your team.",
    },
    {
      q: "Can you migrate my existing store from Etsy, Wix, Squarespace, or WooCommerce?",
      a: "Yes. We execute complete, risk-free migrations to Shopify. We transfer your entire product catalog (including variations, images, and descriptions), customer accounts, and historical order data. Most importantly, we map and configure 301 SEO redirects for every legacy URL so you preserve your existing Google rankings and domain authority without 404 errors.",
    },
    {
      q: "Will my Shopify store be optimized for Google search and mobile devices?",
      a: "Every store we build is engineered with mobile-first responsiveness (over 75% of e-commerce traffic comes from smartphones) and technical SEO. This includes Schema.org Product and Offer microdata, Google Merchant Center product feed sync, automated XML sitemaps, clean canonical URLs, compressed WebP images, and sub-2-second load times.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Shopify Store Design & E-Commerce Development",
        "provider": {
          "@type": "Organization",
          "name": "Beeclue Tech",
          "url": "https://beeclue.com",
          "telephone": "+16479476253",
          "email": "hello@beeclue.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Toronto",
            "addressRegion": "ON",
            "addressCountry": "CA",
          },
        },
        "areaServed": [
          { "@type": "City", "name": "Toronto" },
          { "@type": "Country", "name": "Canada" },
        ],
        "description":
          "Certified Shopify Partner in Toronto & Canada providing turnkey Shopify store launchpad packages, bespoke custom theme development, Canadian tax & shipping integrations, and platform migrations for new and growing e-commerce merchants.",
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
            "name": "Shopify Development Toronto & Canada",
            "item": "https://beeclue.com/shopify-development-toronto",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
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
      <FadeIn className={styles.baseSection} style={{ paddingTop: "18vh", minHeight: "52vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "rgba(51, 133, 255, 0.12)",
              border: "1px solid rgba(51, 133, 255, 0.3)",
              padding: "0.45rem 1rem",
              borderRadius: "50px",
              color: "var(--primary-light)",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.03em"
            }}>
              <Sparkles size={16} color="var(--primary-light)" />
              Official Shopify Partner &amp; E-Commerce Agency
            </div>
            <Image
              src="/images/shopify-partner-white.png"
              alt="Official Shopify Partner Badge"
              width={160}
              height={40}
              priority
              style={{ height: "30px", width: "auto", objectFit: "contain", opacity: 0.9 }}
            />
          </div>

          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.8rem)", lineHeight: "1.15" }}>
            <span className={styles.titleLinePrimary}>Shopify Web Design</span>
            <span className={styles.titleLine}>&amp; Store Setup in Toronto</span>
          </h1>

          <p className={styles.subtitle} style={{ fontSize: "1.2rem", maxWidth: "820px", marginTop: "1.25rem", lineHeight: "1.6" }}>
            We help entrepreneurs launch profitable new e-commerce businesses and empower established retailers to scale online sales. From turnkey store setups to bespoke custom Liquid architectures with Canadian taxes, shipping, and payments built right in.
          </p>

          <div className={styles.heroRatingContainer} style={{ marginTop: "2rem" }}>
            <Link href="/contact" className={styles.ctaButton}>
              Start Your Shopify Store <ArrowRight className={styles.arrow} />
            </Link>
            <div className={styles.heroRatingBadge}>
              <div style={{ color: "#fbbf24", fontSize: "1.15rem", letterSpacing: "2px" }}>★★★★★</div>
              <span style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Certified Partner · 5.0 Star Rating</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* THE SHOPIFY PARTNER ADVANTAGE CALLOUT BANNER */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "0" }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(51, 133, 255, 0.08) 0%, rgba(10, 15, 30, 0.8) 100%)",
          border: "1px solid rgba(51, 133, 255, 0.25)",
          borderRadius: "20px",
          padding: "2.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          alignItems: "center"
        }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary-light)", fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
              <Shield size={18} color="var(--primary-light)" /> The Shopify Partner Guarantee
            </div>
            <h2 style={{ fontSize: "1.85rem", fontWeight: 700, color: "#fff", marginBottom: "0.85rem" }}>
              Pay $0 in Shopify Subscription Fees While We Build
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.65", fontSize: "1rem" }}>
              When you sign up for Shopify directly, you only receive a 3-day trial before you must start paying monthly fees. When you build with Beeclue Tech, your store is hosted inside our <strong>Official Shopify Partner Sandbox</strong> with an <strong>unlimited free trial</strong>. You pay zero platform fees until your store is 100% complete, approved, and ready to take orders.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", background: "rgba(255, 255, 255, 0.03)", padding: "1.75rem", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <CheckCircle2 size={20} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span style={{ fontSize: "0.95rem", color: "#fff" }}><strong>Zero Monthly Pressure:</strong> Take the time you need to perfect photos and copy without paying Shopify upfront.</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <CheckCircle2 size={20} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span style={{ fontSize: "0.95rem", color: "#fff" }}><strong>Canadian Tax &amp; Shipping Ready:</strong> Fully configured for HST, GST, PST, Canada Post &amp; Chit Chats.</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <CheckCircle2 size={20} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span style={{ fontSize: "0.95rem", color: "#fff" }}><strong>100% Ownership &amp; Easy Handover:</strong> We transfer full store ownership to you with 1-click on launch day.</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 3 E-COMMERCE PATHWAYS: LAUNCHPAD, GROWTH, AND ENTERPRISE */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Engineered for Where Your Business Stands Today</h2>
          <p>Whether you are launching your very first online boutique or scaling an established retail brand to seven figures.</p>
        </div>

        <div className={styles.scroller}>
          {/* PACKAGE 1: SHOPIFY LAUNCHPAD */}
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column", border: "1px solid rgba(51, 133, 255, 0.35)", background: "rgba(51, 133, 255, 0.03)" }}>
            <div style={{ display: "inline-block", alignSelf: "flex-start", background: "rgba(51, 133, 255, 0.15)", color: "var(--primary-light)", padding: "0.3rem 0.75rem", borderRadius: "6px", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.25rem" }}>
              For New Founders
            </div>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Package size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.5rem" }}>
              Shopify Launchpad
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              The complete, stress-free starter setup for new entrepreneurs launching their first online brand. We handle the technical setup so you can focus on sales.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.85)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> Official Partner Sandbox ($0 Shopify fees during build)
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> Curated premium OS 2.0 theme customized to your brand
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> Canadian Tax (HST/GST/PST) &amp; Shipping zone setup
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> Shopify Payments, Apple Pay, Google Pay &amp; Shop Pay
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> Catalog upload of your first 20 products &amp; collections
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> 1-on-1 private video walkthrough and owner training
              </li>
            </ul>
            <div style={{ marginTop: "auto", paddingTop: "1.25rem", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <Link href="/contact?package=shopify-launchpad" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}>
                Launch Your First Store <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* PACKAGE 2: CUSTOM GROWTH */}
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "inline-block", alignSelf: "flex-start", background: "rgba(255, 255, 255, 0.08)", color: "var(--foreground)", padding: "0.3rem 0.75rem", borderRadius: "6px", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.25rem" }}>
              For Scaling Brands
            </div>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <TrendingUp size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.5rem" }}>
              Custom Theme &amp; CRO Growth
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              For revenue-generating stores ready to break through traffic plateaus with bespoke Liquid sections, higher conversion rates, and higher average order value.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.85)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> Bespoke custom Liquid sections &amp; animations
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> Slide-out cart drawer with upsells &amp; free shipping tier
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> Advanced product filtering, bundling &amp; swatch logic
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> Klaviyo / Omnisend automated email &amp; SMS flows
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> Core Web Vitals speed optimization (sub-2s load time)
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> Google Merchant Center &amp; Meta Pixel conversion API
              </li>
            </ul>
            <div style={{ marginTop: "auto", paddingTop: "1.25rem", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <Link href="/contact?package=shopify-growth" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}>
                Scale Your Revenue <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* PACKAGE 3: PLATFORM MIGRATION & HEADLESS */}
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "inline-block", alignSelf: "flex-start", background: "rgba(255, 255, 255, 0.08)", color: "var(--foreground)", padding: "0.3rem 0.75rem", borderRadius: "6px", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.25rem" }}>
              Enterprise &amp; Migrations
            </div>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <RefreshCcw size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.5rem" }}>
              Migrations &amp; Shopify Plus
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              Seamlessly migrate from WooCommerce, Magento, or Etsy without losing a single customer or Google search ranking, or engineer headless Next.js architectures.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.85)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> 100% 301 URL redirect mapping for zero SEO traffic loss
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> Complete catalog, customer &amp; historical order migration
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> ERP, QuickBooks, warehouse &amp; 3PL fulfillment sync
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> Multi-currency &amp; multi-country internationalization
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> Headless Shopify with Next.js Storefront API
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Check size={16} color="var(--primary-light)" /> Custom Shopify App development for proprietary workflows
              </li>
            </ul>
            <div style={{ marginTop: "auto", paddingTop: "1.25rem", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <Link href="/contact?package=shopify-enterprise" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}>
                Plan Your Migration <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ESSENTIAL CANADIAN E-COMMERCE SETUP GRID (3 PER ROW ON DESKTOP) */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Essential Canadian E-Commerce Architecture</h2>
          <p>The 6 core technical pillars we configure into every Canadian Shopify store to prevent costly mistakes.</p>
        </div>

        <div className={styles.scroller}>
          {/* FEATURE 1 */}
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <DollarSign size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Canadian Tax Compliance (HST/GST/PST)
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem" }}>
              We set up dynamic tax rates tailored by province (13% HST Ontario, 5% GST Alberta, PST in BC/Saskatchewan/Manitoba, QST in Quebec). Never face CRA audit penalties or unexpected tax liabilities.
            </p>
          </div>

          {/* FEATURE 2 */}
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Truck size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Multi-Carrier Canadian Shipping
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem" }}>
              Integrated real-time live shipping rates for Canada Post, UPS, FedEx, or Chit Chats, alongside regional flat rates and automated free-shipping thresholds that incentivize higher cart sizes.
            </p>
          </div>

          {/* FEATURE 3 */}
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <CreditCard size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              1-Click Express Checkout
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem" }}>
              Over 70% of shoppers abandon carts on checkout pages that require lengthy typing. We activate Shop Pay, Apple Pay, and Google Pay to allow mobile customers to buy in 3 seconds.
            </p>
          </div>

          {/* FEATURE 4 */}
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Zap size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Zero App-Bloat Architecture
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem" }}>
              Most amateur stores install 25+ apps that drag page speed down and cost $300+/month in subscription bloat. We code features natively into Shopify OS 2.0 sections for blistering speed and lower costs.
            </p>
          </div>

          {/* FEATURE 5 */}
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Sliders size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              High-Converting Product Detail Pages
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem" }}>
              Engineered with psychological trust triggers: customer review widgets, size guide modals, live inventory badges, clear shipping estimates, and sticky add-to-cart buttons on mobile.
            </p>
          </div>

          {/* FEATURE 6 */}
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Search size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Google Shopping &amp; SEO Schema
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem" }}>
              Full Product, Offer, and Breadcrumb Schema markup embedded automatically, connected to Google Merchant Center so your products show up in Google&apos;s free organic shopping tabs.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* CASE STUDY SPOTLIGHT: WORK N WEAR */}
      <FadeIn className={styles.baseSection}>
        <div style={{
          background: "linear-gradient(135deg, rgba(20, 25, 40, 0.8) 0%, rgba(10, 15, 25, 0.95) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "20px",
          padding: "clamp(2rem, 4vw, 3.5rem)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3rem",
          alignItems: "center"
        }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary-light)", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
              <Globe size={16} color="var(--primary-light)" /> Proven Client Case Study
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem", lineHeight: "1.2" }}>
              Work N Wear: Canadian Retail Brand Scaled on Shopify
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.7", fontSize: "1.05rem", marginBottom: "1.5rem" }}>
              We partnered with Canadian safety workwear retailer Work N Wear (worknwear.ca) to transform their brick-and-mortar catalog into an authoritative, high-converting digital Shopify storefront. In addition to custom theme engineering, we integrated an autonomous AI shopping agent that guides tradespeople to certified footwear and work gear.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "1.25rem", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <div style={{ color: "var(--primary-light)", fontSize: "1.75rem", fontWeight: 700 }}>+45%</div>
                <div style={{ color: "var(--muted)", fontSize: "0.875rem", marginTop: "0.25rem" }}>Mobile Conversion Increase</div>
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "1.25rem", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <div style={{ color: "var(--primary-light)", fontSize: "1.75rem", fontWeight: 700 }}>&lt; 1.2s</div>
                <div style={{ color: "var(--muted)", fontSize: "0.875rem", marginTop: "0.25rem" }}>Average Page Load Time</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/case-studies/work-n-wear" className={styles.ctaButton}>
                Read Full Case Study <ArrowRight size={18} />
              </Link>
              <a
                href="https://worknwear.ca?utm_source=beeclue&utm_medium=service_page&utm_campaign=shopify_development"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButtonLight}
              >
                Visit Live Store <Globe size={18} />
              </a>
            </div>
          </div>

          <div style={{ position: "relative", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.12)", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)" }}>
            <Image
              src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/wnw-home.webp"
              alt="Work N Wear Shopify Storefront"
              width={700}
              height={450}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </FadeIn>

      {/* E-COMMERCE STRATEGY & RESOURCE HUB (3 PER ROW) */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Shopify &amp; E-Commerce Knowledge Hub</h2>
          <p>Guides, comparisons, and actionable roadmaps to help Canadian merchants make smart digital decisions.</p>
        </div>

        <div className={styles.scroller}>
          {/* RESOURCE 1 */}
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <DollarSign size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Cost to Build an E-Commerce Website in Canada
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              Full breakdown of realistic costs for Canadian stores: platform fees, custom theme development, app licenses, and payment transaction rates.
            </p>
            <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <Link href="/cost-to-build-ecommerce-website-canada" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
                Read Pricing Guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* RESOURCE 2 */}
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Layers size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Shopify vs. WooCommerce in Canada
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              An honest, technical comparison analyzing maintenance, Canadian payment processors, plugin vulnerabilities, and total cost of ownership.
            </p>
            <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <Link href="/shopify-vs-woocommerce-canada" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
                Read Platform Comparison <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* RESOURCE 3 */}
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Globe size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Best E-Commerce Platforms in Canada
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              How Shopify compares to BigCommerce, Wix, and custom Next.js storefronts specifically for businesses operating across Ontario and Canada.
            </p>
            <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <Link href="/best-ecommerce-platform-canada" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
                Compare Platforms <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* RESOURCE 4 */}
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Sparkles size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              AI Shopping Agents for E-Commerce
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              How intelligent conversational AI shopping assistants increase on-site order value by answering customer questions in real time.
            </p>
            <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <Link href="/ai-conversational-ecommerce-guide" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
                Explore AI E-Commerce <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* RESOURCE 5 */}
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <LayoutTemplate size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Shopify vs. Headless Custom Builds
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              When should you stick to native Shopify Liquid, and when is it worth upgrading to a decoupled Next.js Storefront API architecture?
            </p>
            <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <Link href="/shopify-vs-custom-ecommerce-canada" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
                Read Headless Guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* RESOURCE 6 */}
          <div className={styles.serviceCard} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(51, 133, 255, 0.1)",
              border: "1px solid rgba(51, 133, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem"
            }}>
              <Package size={28} color="var(--primary-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
              Shopify POS &amp; Retail Store Sync
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.65", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
              Connect your physical retail register with your online Shopify store for unified real-time inventory, gift cards, and sales tracking.
            </p>
            <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <Link href="/shopify-pos-activity-log" style={{ color: "var(--primary-light)", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
                Read Retail POS Guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE US */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Work With Our Toronto Shopify Team</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} color="var(--primary-light)" />
            <div>
              <h3>Certified Shopify Partner Credentials</h3>
              <p>We build strictly by Shopify standards. No hacked templates or vulnerable code. Everything is modular, clean, and built on Shopify Online Store 2.0 architecture.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} color="var(--primary-light)" />
            <div>
              <h3>Conversion-Focused UX Architecture</h3>
              <p>We engineer stores to make money, not just look pretty. Every layout, button position, and micro-interaction is optimized to convert high-intent traffic into paying customers.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} color="var(--primary-light)" />
            <div>
              <h3>Sub-Second Mobile Page Speed</h3>
              <p>Google rewards fast websites, and mobile shoppers abandon slow ones. We minify Liquid code and optimize assets to guarantee sub-2-second load speeds on 4G/5G connections.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} color="var(--primary-light)" />
            <div>
              <h3>Local Toronto &amp; Canadian Market Fluency</h3>
              <p>We understand Interac, Canadian bilingual requirements, CRA tax jurisdictions, and Canadian shipping logistics. You get local accountability without offshore disconnects.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} color="var(--primary-light)" />
            <div>
              <h3>1-on-1 Owner Video Training</h3>
              <p>You never have to rely on a developer for simple price tweaks or product uploads. We train you thoroughly so you feel confident running your own storefront from Day 1.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} color="var(--primary-light)" />
            <div>
              <h3>Zero Agency Lock-In</h3>
              <p>You own 100% of your Shopify store, domain, customer data, and assets from the moment we launch. We are here when you need us, but you are never tied down.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* FAQ SECTION */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Frequently Asked Questions</h2>
          <p>Clear, direct answers for entrepreneurs and retail brands launching or upgrading on Shopify.</p>
        </div>
        <FaqAccordion faqs={faqs} />
      </FadeIn>

      {/* REGIONAL COVERAGE */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Shopify Store Design Across Toronto, the GTA &amp; Canada
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto 2rem auto" }}>
          Beeclue Tech partners with direct-to-consumer and retail merchants across:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
          {["Downtown Toronto", "Mississauga", "Brampton", "Markham", "Vaughan", "Oakville", "Burlington", "Waterloo Region", "Ottawa", "Vancouver", "Calgary", "Montreal"].map((city) => (
            <span key={city} style={{ padding: "0.5rem 1.5rem", border: "1px solid var(--border)", borderRadius: "50px", color: "var(--primary-light)", fontSize: "0.9rem" }}>
              {city}
            </span>
          ))}
        </div>
      </FadeIn>

      {/* CTA FOOTER */}
      <FadeIn className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Ready to Launch Your Shopify Store?</h2>
          <p className={styles.footerSub}>
            Book a free 30-minute discovery consultation. We&apos;ll walk you through our Partner Sandbox, calculate your launch roadmap, and show you exactly how to build a high-converting storefront.
          </p>
          <div className={styles.footerActions}>
            <Link href="/contact" className={styles.ctaButtonLight}>
              Schedule Free Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
