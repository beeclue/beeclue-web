import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/app/page.module.css";
import pricingStyles from "./pricing.module.css";
import FadeIn from "@/components/FadeIn";
import FaqAccordion from "@/components/FaqAccordion";
import { ArrowRight, Check, ShieldCheck, Zap, Headphones, Sparkles, Layers, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Pricing & Managed Packages | Beeclue Tech",
  description: "Transparent website pricing for Canadian and global businesses. All premium packages include 1 year of free domain and hosting. Explore our $79/mo ongoing maintenance plan.",
  alternates: {
    canonical: "https://beeclue.com/pricing",
  },
  keywords: [
    "website pricing canada",
    "web development packages toronto",
    "managed website hosting 79 mo",
    "free domain and hosting website package",
    "premium website design packages",
    "custom software pricing",
    "ecommerce website cost canada",
    "law firm website cost",
    "dental clinic website cost"
  ],
  openGraph: {
    title: "Website Pricing & Managed Packages | Beeclue Tech",
    description: "Explore transparent pricing for modern high-performance websites. All packages bundle 1 year of free domain and cloud hosting. Ongoing care at $79/mo.",
    url: "https://beeclue.com/pricing",
  },
};

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Beeclue Managed Web Services & Premium Website Packages",
    "description": "High-performance Next.js and headless website packages with 1 year of free domain registration and 1 year of free high-speed cloud hosting, followed by our $79/mo ongoing maintenance plan.",
    "brand": {
      "@type": "Brand",
      "name": "Beeclue Tech"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Premium Core Site",
        "price": "2499.00",
        "priceCurrency": "USD",
        "description": "Custom Next.js website for boutique service firms and solo practitioners. Includes 1 Year Free Domain + 1 Year Free Cloud Hosting, sub-second page loads, and local SEO foundation."
      },
      {
        "@type": "Offer",
        "name": "Premium Growth & Scale",
        "price": "4499.00",
        "priceCurrency": "USD",
        "description": "Full-funnel digital architecture with automated client intake, multi-location CMS, Schema.org AI/GEO optimization. Includes 1 Year Free Domain + 1 Year Free Cloud Hosting."
      },
      {
        "@type": "Offer",
        "name": "Enterprise & Custom E-Commerce",
        "price": "7999.00",
        "priceCurrency": "USD",
        "description": "Bespoke headless Shopify or WooCommerce architecture, multi-currency catalogs, and conversational AI shopping agent. Includes 1 Year Free Domain + 1 Year Free Cloud Hosting."
      },
      {
        "@type": "Offer",
        "name": "Managed Hosting & Support (Year 2 Renewal)",
        "price": "79.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "79.00",
          "priceCurrency": "USD",
          "unitText": "MONTH"
        },
        "description": "Enterprise cloud hosting, continuous security patches, daily backups, 2 hours of monthly content updates, and priority developer support starting after Year 1."
      }
    ]
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://beeclue.com/pricing" }
    ]
  };

  const faqs = [
    {
      q: "What does 'Free Domain & Free Hosting for 1 Year' include?",
      a: "Every premium website package (Core, Growth, and Enterprise) includes 1 full year of custom domain registration (.com, .ca, or .org) and 1 full year of enterprise-grade managed cloud hosting on global edge CDN nodes at zero extra cost. We handle DNS setup, SSL certification, and deployment so your website is 100% turnkey."
    },
    {
      q: "What happens after the first year of free hosting and domain?",
      a: "After your complimentary 12 months, you can seamlessly transition to our $79/month Managed Hosting & Support plan. This covers your ongoing high-speed cloud hosting, daily backups, SSL security, and 2 hours of developer updates every month. Alternatively, because you own 100% of your source code and domain, you are free to export and host independently on your own infrastructure with zero lock-in."
    },
    {
      q: "Can I buy the $79/mo Managed Hosting & Support plan for an existing website?",
      a: "Yes! If you already have a website built on WordPress, Shopify, Next.js, or another stack and want proactive engineering maintenance, security patches, daily backups, and 2 hours of dedicated developer updates every month, our $79/mo plan is available immediately."
    },
    {
      q: "Are there any hidden fees or contract lock-ins?",
      a: "No. All our upfront package scopes are fixed-fee deliverables with clearly outlined milestones. The optional $79/month hosting and maintenance service is billed month-to-month with no long-term contracts—you maintain complete ownership of your intellectual property, code, and design assets."
    },
    {
      q: "Can you migrate our existing WordPress, Wix, or Squarespace site?",
      a: "Yes. In fact, a significant portion of our clients come to us specifically to migrate away from slow, bloated visual builders to modern high-performance web platforms. We handle content transfer, 301 redirect mapping to protect your existing search rankings, and clean database setup."
    },
    {
      q: "How fast can you build and launch a Premium site?",
      a: "Our Premium Core packages typically launch within 2 to 3 weeks from kickoff. More extensive multi-location sites or complex e-commerce platforms average 4 to 6 weeks, depending on catalog size and third-party API integration requirements."
    }
  ];

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* HERO SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "18vh", paddingBottom: "6vh" }}>
        <div className={styles.heroContent}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(51, 133, 255, 0.1)", border: "1px solid rgba(51, 133, 255, 0.3)", padding: "0.4rem 1rem", borderRadius: "50px", marginBottom: "1.5rem" }}>
            <Sparkles size={16} color="var(--primary-light)" />
            <span style={{ color: "var(--primary-light)", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Transparent, Value-Driven Pricing
            </span>
          </div>

          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)" }}>
            <span className={styles.titleLinePrimary}>Engineered for Growth.</span>
            <span className={styles.titleLine}>Priced for Clarity.</span>
          </h1>

          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "820px", marginTop: "1rem" }}>
            Whether you need hands-off managed cloud hosting and developer support or a bespoke, sub-second premium website built to convert high-ticket clients, our packages deliver enterprise-grade performance without agency bloat.
          </p>
        </div>
      </FadeIn>

      {/* PRICING PACKAGES SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "2vh", paddingBottom: "10vh" }}>
        <div className={pricingStyles.pricingGrid}>

          {/* PACKAGE 1: PREMIUM CORE */}
          <div className={pricingStyles.pricingCard}>
            <div className={pricingStyles.cardHeader}>
              <div className={pricingStyles.cardTag}>Package 1</div>
              <h2 className={pricingStyles.cardTitle}>Premium Core</h2>
              <p className={pricingStyles.cardDesc}>
                A high-speed, bespoke web presence built from scratch for solo practitioners and boutique service firms.
              </p>
            </div>

            <div className={pricingStyles.priceWrapper}>
              <div className={pricingStyles.priceAmount}>
                <span className={pricingStyles.priceCurrency}>$</span>2,499
                <span className={pricingStyles.priceCycle}>one-time</span>
              </div>
              <div className={pricingStyles.priceMeta}>Turnkey build · 2–3 weeks turnaround</div>
            </div>

            <ul className={pricingStyles.featuresList}>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Free Custom Domain for 1 Year</strong> (.com, .ca, or .org included)</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Free Managed Edge Hosting for 1 Year</strong> (Zero hosting fees in Year 1)</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Bespoke Custom Web Design</strong> (Up to 6 custom designed pages)</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Sub-Second Load Speed Guarantee</strong> (100% Core Web Vitals score)</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>High-Converting Intake Funnel</strong> (Mobile-first consultation booking)</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Complete Local SEO Foundation</strong> (Meta tags, OpenGraph, sitemaps)</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Schema.org LocalBusiness JSON-LD</strong> structured microdata</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Includes 30 Days Post-Launch Warranty</strong> &amp; developer onboarding</span>
              </li>
            </ul>

            <div className={pricingStyles.cardFooter}>
              <Link href="/contact?package=premium-core" className={`${pricingStyles.planButton} ${pricingStyles.planButtonSecondary}`}>
                Choose Premium Core <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* PACKAGE 3: PREMIUM GROWTH (MOST POPULAR) */}
          <div className={`${pricingStyles.pricingCard} ${pricingStyles.pricingCardPopular}`}>
            <div className={pricingStyles.popularBadge}>Most Popular</div>

            <div className={pricingStyles.cardHeader}>
              <div className={pricingStyles.cardTag}>Premium Package 2</div>
              <h2 className={pricingStyles.cardTitle}>Premium Growth</h2>
              <p className={pricingStyles.cardDesc}>
                Full-funnel digital authority for growing practices, multi-location clinics, and commercial service companies.
              </p>
            </div>

            <div className={pricingStyles.priceWrapper}>
              <div className={pricingStyles.priceAmount}>
                <span className={pricingStyles.priceCurrency}>$</span>4,499
                <span className={pricingStyles.priceCycle}>one-time</span>
              </div>
              <div className={pricingStyles.priceMeta}>Bespoke Growth Engine · 3–4 weeks turnaround</div>
            </div>

            <ul className={pricingStyles.featuresList}>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Free Custom Domain for 1 Year</strong> (.com, .ca, or .org included)</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Free Managed Edge Hosting for 1 Year</strong> (Zero hosting fees in Year 1)</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Full Custom Architecture</strong> (Up to 15 responsive pages &amp; service silos)</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Generative Engine Optimization (GEO/AEO)</strong> structured for ChatGPT &amp; Perplexity citations</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Multi-Location / Regional Landing Hubs</strong> with automated schema</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Interactive Cost / ROI Calculator or Portal</strong> tailored to your niche</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>CRM &amp; Automation Integration</strong> (HubSpot, Clio, Dentrix, or Zapier)</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Includes 60 Days Free Managed Support</strong> ($158 value included)</span>
              </li>
            </ul>

            <div className={pricingStyles.cardFooter}>
              <Link href="/contact?package=premium-growth" className={`${pricingStyles.planButton} ${pricingStyles.planButtonPrimary}`}>
                Start Growth Package <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* PACKAGE 4: ENTERPRISE & E-COMMERCE */}
          <div className={pricingStyles.pricingCard}>
            <div className={pricingStyles.cardHeader}>
              <div className={pricingStyles.cardTag}>Premium Package 3</div>
              <h2 className={pricingStyles.cardTitle}>Enterprise / E-Com</h2>
              <p className={pricingStyles.cardDesc}>
                High-volume e-commerce stores, custom SaaS portals, and mission-critical multi-currency platforms.
              </p>
            </div>

            <div className={pricingStyles.priceWrapper}>
              <div className={pricingStyles.priceAmount}>
                <span className={pricingStyles.priceCurrency}>$</span>7,999
                <span className={pricingStyles.priceCycle}>starting at</span>
              </div>
              <div className={pricingStyles.priceMeta}>Custom Software Scope · 5–7 weeks turnaround</div>
            </div>

            <ul className={pricingStyles.featuresList}>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Free Custom Domain for 1 Year</strong> + DNS routing configuration</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Free Managed Edge Hosting for 1 Year</strong> (Enterprise CDN tier)</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Headless Shopify or Custom WooCommerce</strong> development</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Multi-Currency, Regional Taxes &amp; ERP Sync</strong> (QuickBooks, NetSuite)</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Autonomous Conversational AI Shopping Agent</strong> or custom triage funnel</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Custom Database Architecture &amp; User Accounts</strong> with secure role permissions</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Enterprise Headless CMS Setup</strong> (Sanity, Strapi, or headless WordPress)</span>
              </li>
              <li className={pricingStyles.featureItem}>
                <Check size={18} className={pricingStyles.featureIcon} />
                <span><strong>Dedicated Technical Architect &amp; 90-Day SLA Warranty</strong></span>
              </li>
            </ul>

            <div className={pricingStyles.cardFooter}>
              <Link href="/contact?package=enterprise-ecommerce" className={`${pricingStyles.planButton} ${pricingStyles.planButtonSecondary}`}>
                Inquire Enterprise <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>

        {/* ONE-LINER FOR MANAGED HOSTING & SUPPORT */}
        <div className={pricingStyles.hostingBar}>
          <div className={pricingStyles.hostingBarLeft}>
            <span className={pricingStyles.hostingBarBadge}>1 Year Included</span>
            <div className={pricingStyles.hostingBarText}>
              All plans include <strong>Free Custom Domain (1 Year)</strong> and <strong>Free Cloud Hosting (1 Year)</strong>. After Year 1 (or for existing websites needing ongoing support), renew on our <strong>$79/mo Managed Hosting &amp; Maintenance</strong> plan — or host independently with zero lock-in.
            </div>
          </div>
          <div className={pricingStyles.hostingBarRight}>
            <Link href="/contact?package=hosting-support-79" className={`${pricingStyles.planButton} ${pricingStyles.planButtonSecondary}`} style={{ padding: "0.65rem 1.5rem", whiteSpace: "nowrap" }}>
              Get Hosting &amp; Support <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* WHY OUR ENGINEERING MODEL IS DIFFERENT */}
      <FadeIn className={styles.baseSection} style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
        <div className={styles.servicesHeader}>
          <h2>Why Businesses Upgrade to Beeclue Tech</h2>
          <p>
            Most agencies charge $15,000 for standard template installs that slow down to a crawl within six months. We engineer every project on modern headless foundations.
          </p>
        </div>

        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Zap size={28} color="var(--primary-light)" />
              <h3 style={{ fontSize: "1.4rem", margin: 0 }}>Sub-Second Mobile Speeds</h3>
            </div>
            <p>
              By decoupling code from bulky database queries and compiling pure static HTML via Next.js, our sites load in under 1 second on mobile devices, dramatically lowering ad acquisition costs and bounce rates.
            </p>
          </div>

          <div className={styles.valueItem}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <ShieldCheck size={28} color="var(--primary-light)" />
              <h3 style={{ fontSize: "1.4rem", margin: 0 }}>Impenetrable Security</h3>
            </div>
            <p>
              Traditional CMS platforms suffer from weekly plugin vulnerabilities and database injection risks. Our static and headless web deployments have zero publicly exposed SQL databases, eliminating 99% of web security vulnerabilities.
            </p>
          </div>

          <div className={styles.valueItem}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Globe size={28} color="var(--primary-light)" />
              <h3 style={{ fontSize: "1.4rem", margin: 0 }}>Built for AI &amp; Voice Search</h3>
            </div>
            <p>
              We embed complete Schema.org JSON-LD microdata on every page, ensuring your firm is structured for immediate citation by ChatGPT Search, Perplexity AI, Claude, and Google AI Overviews.
            </p>
          </div>

          <div className={styles.valueItem}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Headphones size={28} color="var(--primary-light)" />
              <h3 style={{ fontSize: "1.4rem", margin: 0 }}>Direct Senior Engineers</h3>
            </div>
            <p>
              Zero junior account managers or offshore communication black holes. You collaborate directly with senior full-stack software architects and UI/UX designers who understand commercial conversion rates.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <FadeIn className={styles.baseSection} style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
        <div className={styles.servicesHeader}>
          <h2>Pricing &amp; Project FAQs</h2>
          <p>Clear answers to common questions about our packages, support plans, and delivery timelines.</p>
        </div>

        <FaqAccordion faqs={faqs} />
      </FadeIn>

      {/* FINAL CTA BANNER */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", paddingBottom: "15vh" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", background: "linear-gradient(180deg, rgba(51, 133, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)", border: "1px solid rgba(51, 133, 255, 0.3)", borderRadius: "20px", padding: "4rem 2rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.25rem", color: "var(--foreground)" }}>
            Need a Custom Quote or Free Interactive Mockup?
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.15rem", marginBottom: "2rem", lineHeight: "1.6" }}>
            Before you commit to any development package, our team will review your current website and create a free 48-hour interactive mobile website preview showing you how your brand looks with modern custom design and performance.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className={styles.ctaButtonLight} style={{ padding: "0.85rem 2.25rem", fontWeight: 600 }}>
              Request a Free 48-Hour Preview
            </Link>
            <Link href="/case-studies" className={styles.ctaButton} style={{ padding: "0.85rem 2.25rem" }}>
              Explore Case Studies
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
