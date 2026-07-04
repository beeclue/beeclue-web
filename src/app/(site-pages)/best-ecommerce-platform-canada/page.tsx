"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  ShoppingCart,
  Code,
  Globe,
  Shield,
  Zap,
  Users,
  BarChart3,
  ChevronDown,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function BestEcommercePlatformCanadaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "E-Commerce Platform Comparison",
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
            "name": "Best E-Commerce Platform Canada",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best e-commerce platform for Canadian businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shopify is the best e-commerce platform for most Canadian businesses. It offers Canadian payment processing, built-in GST/HST support, Canadian-based hosting, and a massive app ecosystem. For businesses needing maximum customization, WooCommerce or custom headless builds are strong alternatives.",
            },
          },
          {
            "@type": "Question",
            "name": "Is Shopify better than WooCommerce for Canadian stores?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shopify is better for most Canadian stores because of its simplicity, built-in Canadian payment processing, and lower maintenance burden. WooCommerce is better for stores that need maximum customization, already use WordPress, or have large product catalogs where Shopify's transaction fees become expensive.",
            },
          },
          {
            "@type": "Question",
            "name": "What e-commerce platform is best for large catalogs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For large catalogs (10,000+ products), Shopify Plus, Magento/Adobe Commerce, or custom headless solutions perform best. Shopify Plus handles scale well with its enterprise infrastructure. Magento offers maximum flexibility but requires more technical expertise. Custom builds provide the best performance but at higher cost.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I use Canadian payment processors with any platform?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most platforms support Canadian payment processors like Stripe, Moneris, and Square. Shopify has its own Shopify Payments (powered by Stripe) which eliminates transaction fees. WooCommerce and custom builds can integrate any processor. Always verify PSPC compliance for your specific platform choice.",
            },
          },
          {
            "@type": "Question",
            "name": "How do I choose between Shopify, WooCommerce, and custom?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Choose Shopify for simplicity and speed to market. Choose WooCommerce if you need WordPress integration and maximum plugin flexibility. Choose custom headless if you need maximum performance, unique UX requirements, or complex business logic that doesn't fit standard platforms.",
            },
          },
          {
            "@type": "Question",
            "name": "Do I need a developer to set up an e-commerce store?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DIY is possible with Shopify's basic plan, but professional development ensures proper setup, SEO optimization, payment integration, and performance tuning. A developer can save you weeks of frustration and ensure your store is built correctly from day one, avoiding costly fixes later.",
            },
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      q: "What is the best e-commerce platform for Canadian businesses?",
      a: "Shopify is the best e-commerce platform for most Canadian businesses. It offers Canadian payment processing, built-in GST/HST support, Canadian-based hosting, and a massive app ecosystem. For businesses needing maximum customization, WooCommerce or custom headless builds are strong alternatives.",
    },
    {
      q: "Is Shopify better than WooCommerce for Canadian stores?",
      a: "Shopify is better for most Canadian stores because of its simplicity, built-in Canadian payment processing, and lower maintenance burden. WooCommerce is better for stores that need maximum customization, already use WordPress, or have large product catalogs where Shopify's transaction fees become expensive.",
    },
    {
      q: "What e-commerce platform is best for large catalogs?",
      a: "For large catalogs (10,000+ products), Shopify Plus, Magento/Adobe Commerce, or custom headless solutions perform best. Shopify Plus handles scale well with its enterprise infrastructure. Magento offers maximum flexibility but requires more technical expertise.",
    },
    {
      q: "Can I use Canadian payment processors with any platform?",
      a: "Most platforms support Canadian payment processors like Stripe, Moneris, and Square. Shopify has its own Shopify Payments (powered by Stripe) which eliminates transaction fees. WooCommerce and custom builds can integrate any processor.",
    },
    {
      q: "How do I choose between Shopify, WooCommerce, and custom?",
      a: "Choose Shopify for simplicity and speed to market. Choose WooCommerce if you need WordPress integration and maximum plugin flexibility. Choose custom headless if you need maximum performance, unique UX requirements, or complex business logic.",
    },
    {
      q: "Do I need a developer to set up an e-commerce store?",
      a: "DIY is possible with Shopify's basic plan, but professional development ensures proper setup, SEO optimization, payment integration, and performance tuning. A developer saves you weeks of frustration and ensures your store is built correctly from day one.",
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
              Best E-Commerce Platform
            </span>
            <span className={styles.titleLine}>in Canada for 2026</span>
          </h1>
          <p
            className={styles.subtitle}
            style={{ fontSize: "1.25rem", maxWidth: "800px" }}
          >
            Compare the best e-commerce platforms available to Canadian
            businesses in 2026. Shopify vs WooCommerce vs custom solutions
            — features, pricing, pros, and cons to help you choose the right
            platform for your online store.
          </p>
          <div className={styles.heroRatingContainer}>
            <Link href="/contact" className={styles.ctaButton}>
              Get a Free Consultation <ArrowRight className={styles.arrow} />
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
            <h2>Choosing the Right E-Commerce Platform for Your Canadian Business</h2>
            <p>
              Choosing the right e-commerce platform is one of the most
              important decisions you&apos;ll make for your online business.
              The platform you choose affects everything — from how quickly you
              can launch to how much you pay in transaction fees, how high you
              rank on Google, and how well your store scales as you grow. In
              2026, the e-commerce landscape is more competitive than ever, with
              Canadian online sales projected to exceed $100 billion, making
              platform selection critical to your success.
            </p>
            <p>
              At Beeclue Tech, we&apos;ve built online stores on every major
              e-commerce platform. We&apos;ve seen Shopify power million-dollar
              DTC brands, WooCommerce support content-heavy stores with
              thousands of products, and custom headless builds deliver
              sub-second page loads for enterprise clients. Each platform has
              strengths and trade-offs — the &quot;best&quot; platform depends
              on your specific business needs, budget, and technical
              requirements. We don&apos;t have a one-size-fits-all recommendation
              because every business is unique.
            </p>
            <p>
              This guide compares the leading e-commerce platforms available
              to Canadian businesses, with honest analysis of pricing,
              features, scalability, and Canadian-specific considerations like
              payment processing, tax compliance, and hosting location. We
              break down the pros and cons of each platform, recommend solutions
              for different business types, and provide the information you need
              to make an informed decision that aligns with your goals and
              budget.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>What Canadian Businesses Should Consider</h3>
            <p>Key factors when choosing an e-commerce platform:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>Canadian payment processing and transaction fees</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>GST/HST/PST tax calculation and compliance</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>Canadian-based hosting for faster page loads</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>Product catalog size and complexity</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>Custom features and third-party integrations</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* PLATFORM COMPARISON */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>E-Commerce Platform Comparison</h2>
          <p>
            Detailed comparison of the top e-commerce platforms for Canadian
            businesses. Each platform has unique strengths, and the right choice
            depends on your business size, technical requirements, and growth
            plans. We evaluate these platforms based on pricing, features,
            ease of use, scalability, and Canadian-specific considerations.
          </p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <ShoppingCart className={styles.serviceIcon} />
            <h3>Shopify</h3>
            <p>
              <strong>Best for: Most Canadian businesses</strong>
              <br /><br />
              The dominant e-commerce platform in Canada. Fully hosted,
              beginner-friendly, and packed with features. Shopify Payments
              (powered by Stripe) eliminates transaction fees for Canadian
              merchants. Built-in GST/HST support. Massive app ecosystem with
              8,000+ apps. Shopify&apos;s checkout optimization and mobile
              experience are industry-leading, making it the go-to choice for
              businesses that want to start selling quickly without technical
              complexity.
              <br /><br />
              <strong>Pricing:</strong> $39-$399/month (Standard), $2,300+/month
              (Plus)
              <br />
              <strong>Transaction fees:</strong> 2.9% + $0.30 (or 0% with
              Shopify Payments)
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Code className={styles.serviceIcon} />
            <h3>WooCommerce</h3>
            <p>
              <strong>Best for: WordPress users, content-heavy stores</strong>
              <br /><br />
              Open-source WordPress plugin. Free to install but requires hosting
              and plugins. Maximum flexibility and customization. Ideal for
              stores that combine commerce with content (blogs, magazines,
              directories). No transaction fees from the platform itself.
              WooCommerce gives you complete control over your store&apos;s code
              and data, making it ideal for businesses with unique product
              configurations or complex catalog structures.
              <br /><br />
              <strong>Pricing:</strong> Free plugin + $15-$100/month hosting
              <br />
              <strong>Transaction fees:</strong> Payment processor only (2.5%-3.5%)
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Globe className={styles.serviceIcon} />
            <h3>BigCommerce</h3>
            <p>
              <strong>Best for: Multi-channel selling, B2B</strong>
              <br /><br />
              SaaS platform with strong multi-channel capabilities (Amazon,
              eBay, Facebook, Instagram). Built-in B2B features. No transaction
              fees on any plan. Fewer apps than Shopify but more built-in
              features. Good for stores selling across multiple channels.
              BigCommerce excels at product variant management and complex
              catalog structures, making it ideal for businesses with large
              product catalogs.
              <br /><br />
              <strong>Pricing:</strong> $39-$399/month
              <br />
              <strong>Transaction fees:</strong> 0% platform fee
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Shield className={styles.serviceIcon} />
            <h3>Custom Headless Build</h3>
            <p>
              <strong>Best for: Enterprise, performance-critical stores</strong>
              <br /><br />
              Custom frontend (Next.js/Astro) with Shopify Plus, BigCommerce,
              or custom backend. Sub-second page loads. Unlimited design
              flexibility. Highest performance and SEO potential. Requires
              experienced developers. Best for stores doing $1M+ annually.
              Headless architecture separates your storefront from your backend,
              giving you complete control over the customer experience while
              leveraging enterprise-grade commerce infrastructure.
              <br /><br />
              <strong>Pricing:</strong> $30,000-$100,000+ build cost
              <br />
              <strong>Transaction fees:</strong> Depends on backend platform
            </p>
          </div>
        </div>
      </FadeIn>

      {/* PROS AND CONS */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Platform Pros and Cons</h2>
          <p>
            Honest assessment of each platform&apos;s strengths and
            weaknesses for Canadian businesses. Understanding these trade-offs
            helps you make an informed decision that aligns with your business
            goals and technical capabilities. No platform is perfect — the key
            is finding the one that best fits your specific needs.
          </p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Shopify Pros</h3>
              <p>
                Easiest to set up and manage. Best Canadian payment integration
                with Shopify Payments. 8,000+ apps for any feature. Built-in
                SSL, hosting, and security. Excellent for beginners with
                intuitive admin interface. Shopify Plus scales to enterprise
                with advanced features. Strong mobile experience with optimized
                checkout. Built-in inventory management and multi-channel
                selling capabilities.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Shopify Cons</h3>
              <p>
                Monthly fees add up over time. Transaction fees if not using
                Shopify Payments. Limited customization compared to open-source
                platforms. Theme lock-in makes it difficult to switch designs.
                App dependency for advanced features adds ongoing costs. Less
                control over SEO at granular level. Product variant limits can
                be restrictive for complex catalogs.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>WooCommerce Pros</h3>
              <p>
                Free platform with no licensing fees. Full code control for
                unlimited customization. Excellent for content-commerce
                integration with WordPress. Superior SEO flexibility with
                plugins like Yoast. No platform transaction fees. Thousands
                of plugins for extended functionality. You own your data
                completely with no vendor lock-in. Large developer community
                for support and resources.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>WooCommerce Cons</h3>
              <p>
                Requires technical maintenance and updates. Hosting costs add
                up over time. Plugin compatibility issues can cause conflicts.
                Security is your responsibility, requiring regular monitoring.
                Slower performance without optimization and caching. Updates
                can break things, requiring testing before deployment. Steeper
                learning curve than Shopify. You need technical expertise or a
                developer for complex customizations.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Custom Build Pros</h3>
              <p>
                Maximum performance with sub-second page loads. Unlimited
                design freedom for unique brand experiences. Custom business
                logic for complex requirements. Best SEO potential with
                optimized architecture. No platform lock-in or vendor
                dependency. Scales infinitely to handle any traffic volume.
                Ideal for unique business models that don&apos;t fit standard
                platforms. Complete control over data and functionality.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Custom Build Cons</h3>
              <p>
                Highest upfront cost with $30,000+ investment. Longest
                development time of 3-6 months. Requires ongoing developer
                support for updates and maintenance. No drag-and-drop editing
                for non-technical users. You build features that platforms
                include by default. Higher total cost of ownership for small
                stores. Requires experienced developers with specific
                technical expertise.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* RECOMMENDATIONS BY BUSINESS TYPE */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Recommendations by Business Type</h2>
          <p>
            Which platform is right for your specific business situation? Here
            are our recommendations based on years of experience building
            e-commerce stores for Canadian businesses across different
            industries and sizes.
          </p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <Users className={styles.valueIcon} />
            <div>
              <h3>Small Business / Startup</h3>
              <p>
                <strong>Recommended: Shopify</strong>
                <br />
                Lowest barrier to entry. Fastest time to market. No technical
                skills required. Start selling in days, not months. Upgrade to
                custom as you grow. Shopify&apos;s built-in features handle
                most small business needs without requiring additional apps
                or custom development.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <BarChart3 className={styles.valueIcon} />
            <div>
              <h3>Growing DTC Brand</h3>
              <p>
                <strong>Recommended: Shopify or Shopify Plus</strong>
                <br />
                Proven at scale with millions of merchants. Excellent mobile
                experience with optimized checkout. Strong subscription and
                loyalty app ecosystem. Migrate to Shopify Plus when you outgrow
                standard Shopify with advanced features like wholesale channels
                and custom checkout.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <Globe className={styles.valueIcon} />
            <div>
              <h3>Content-Heavy Store</h3>
              <p>
                <strong>Recommended: WooCommerce</strong>
                <br />
                If your store relies heavily on blog content, guides, or
                editorial, WooCommerce integrates natively with WordPress
                content. Best content-commerce synergy. WooCommerce&apos;s
                flexibility allows you to create custom content types, taxonomies,
                and display options that perfectly match your editorial vision.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <Zap className={styles.valueIcon} />
            <div>
              <h3>Enterprise / High-Volume</h3>
              <p>
                <strong>Recommended: Custom Headless or Shopify Plus</strong>
                <br />
                Need sub-second loads, complex business logic, or unique UX?
                Custom headless. Want enterprise features with less
                development? Shopify Plus handles scale well. For businesses
                doing $1M+ annually, the investment in custom architecture
                pays for itself through improved performance, conversion rates,
                and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* HOW TO CHOOSE */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>How to Choose the Right E-Commerce Platform</h2>
          <p>
            Not sure which platform is right for you? Here&apos;s a practical
            framework to help you make the right decision for your Canadian
            business.
          </p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Assess Your Technical Skills</h3>
              <p>
                Be honest about your team&apos;s technical capabilities. If you
                have no developers, Shopify is the safest choice. If you have
                WordPress experience, WooCommerce makes sense. If you need
                complex custom functionality, you&apos;ll need a development
                partner regardless of platform.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Consider Your Budget</h3>
              <p>
                Factor in both upfront and ongoing costs. Shopify has lower
                upfront costs but higher monthly fees. WooCommerce has higher
                upfront development costs but lower ongoing platform fees.
                Custom builds have the highest upfront cost but offer the
                best long-term value for high-volume stores.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Evaluate Your Growth Plans</h3>
              <p>
                Where do you see your business in 2-3 years? If you plan to
                scale significantly, choose a platform that can grow with you.
                Shopify Plus and custom builds offer the best scalability.
                WooCommerce can scale but requires more technical management
                as you grow.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Think About Content Strategy</h3>
              <p>
                If content marketing is central to your strategy, WooCommerce
                offers the best content-commerce integration. If you primarily
                sell products and don&apos;t need extensive content, Shopify or
                BigCommerce may be more efficient choices.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* TECHNOLOGY STACK */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Technologies We Work With</h2>
          <p>
            We leverage the best e-commerce technologies to build stores that
            perform at the highest level.
          </p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <h3>Shopify & Shopify Plus</h3>
            <p>Enterprise-grade hosted e-commerce platform</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>WooCommerce</h3>
            <p>WordPress-based flexible e-commerce</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>BigCommerce</h3>
            <p>Multi-channel commerce platform</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Next.js & React</h3>
            <p>Blazing-fast headless frontend framework</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Tailwind CSS</h3>
            <p>Utility-first responsive styling</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Stripe & Moneris</h3>
            <p>Canadian payment processing solutions</p>
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE US */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Choose Beeclue Tech for Your E-Commerce Project</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Platform-Agnostic Advice</h3>
              <p>
                We don&apos;t push one platform — we recommend the right
                solution for your specific needs. Our team has deep expertise
                across Shopify, WooCommerce, BigCommerce, and custom builds,
                ensuring you get honest, unbiased recommendations.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Canadian Market Expertise</h3>
              <p>
                As a Toronto-based team, we understand Canadian payment
                processing, tax compliance, shipping logistics, and consumer
                expectations. We build stores optimized for the Canadian market
                from day one.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>End-to-End Service</h3>
              <p>
                From platform selection and design through development, launch,
                and ongoing support, we handle every aspect of your e-commerce
                project. You get a single point of contact and a seamless
                experience.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Conversion-Focused Development</h3>
              <p>
                Every store we build is engineered for conversions. We
                don&apos;t just make stores that look good — we build stores
                that sell, with optimized checkout flows, product pages, and
                user experiences designed to maximize revenue.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Performance-First Architecture</h3>
              <p>
                Page speed directly impacts sales. We build stores that load
                in under 2 seconds, earn top Core Web Vitals scores, and
                provide a seamless shopping experience across all devices.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Long-Term Partnership</h3>
              <p>
                We don&apos;t disappear after launch. Beeclue Tech provides
                ongoing maintenance, performance monitoring, feature additions,
                and strategic guidance to ensure your store continues to grow
                and evolve with your business.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* CANADA-WIDE SERVICE */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          E-Commerce Platform Guidance Across Canada
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "1.25rem", maxWidth: "800px", margin: "0 auto 2rem auto" }}>
          Beeclue Tech helps Canadian businesses choose and implement the right e-commerce platform across:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
          {["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa", "Edmonton", "Mississauga", "Markham"].map((city) => (
            <span key={city} style={{ padding: "0.5rem 1.5rem", border: "1px solid var(--border)", borderRadius: "50px", color: "var(--primary-light)" }}>
              {city}
            </span>
          ))}
        </div>
      </FadeIn>

      {/* RELATED SERVICES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Related Resources</h2>
          <p>
            Explore our other guides and services to help you build your
            e-commerce business.
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
            href="/shopify-development-toronto"
            className={styles.serviceCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>Shopify Development Toronto</h3>
            <p>
              Custom Shopify stores built for conversion. Premium themes,
              headless commerce, and custom apps for Toronto merchants.
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
            href="/ecommerce-website-cost-canada"
            className={styles.serviceCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>E-Commerce Website Cost Canada</h3>
            <p>
              Complete 2026 pricing guide for e-commerce websites in Canada.
              Detailed cost breakdowns and ROI analysis.
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
            Common questions about choosing an e-commerce platform in Canada.
          </p>
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
          <h2>Ready to Choose Your E-Commerce Platform?</h2>
          <p className={styles.footerSub}>
            Not sure which platform is right for you? Our Toronto team will
            analyze your business needs and recommend the best e-commerce
            solution to maximize your online revenue.
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
