"use client";

import Link from "next/link";
import styles from "@/app/page.module.css";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  Monitor,
  Palette,
  Gauge,
  Shield,
  TrendingUp,
  RefreshCcw,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function WebsiteRedesignTorontoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Website Redesign",
        "provider": {
          "@type": "Organization",
          "name": "Beeclue Tech",
        },
        "areaServed": "Toronto",
        "description":
          "Professional website redesign services in Toronto. Modernize outdated websites with modern design, faster performance, and higher conversion rates.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "CAD",
          "priceRange": "$5000-$50000",
        },
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
            "name": "Website Redesign Toronto",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website redesign cost in Toronto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Website redesign costs in Toronto range from $5,000 for a simple refresh of a small business site to $50,000+ for a complete enterprise redesign with custom features. The final cost depends on the size of your site, the complexity of the design, whether you need new functionality, and how much content needs to be migrated or rewritten.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does a website redesign take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A typical website redesign takes 6 to 12 weeks from discovery to launch. Simpler sites with 5-15 pages may be completed in 4 to 6 weeks, while larger sites with custom features, e-commerce, or extensive content migration can take 12 to 16 weeks. We provide a detailed timeline during the scoping phase.",
            },
          },
          {
            "@type": "Question",
            "name": "Will a website redesign hurt my SEO rankings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not when done correctly. Our redesign process includes comprehensive SEO preservation strategies: 301 redirects for every changed URL, migration of all meta tags and structured data, preservation of your existing content hierarchy, and implementation of technical SEO best practices. Most of our clients see an improvement in rankings after a redesign because we also optimize site speed and Core Web Vitals.",
            },
          },
          {
            "@type": "Question",
            "name": "Should I redesign my website or rebuild it from scratch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your current site's technology stack and condition. If your site is built on a modern CMS with a solid foundation, a redesign (visual and UX overhaul) is usually sufficient. If your site is on outdated technology, has severe performance issues, or lacks the functionality you need, a full rebuild on a modern stack (like Next.js or WordPress with a custom theme) is the better investment.",
            },
          },
          {
            "@type": "Question",
            "name": "What does your website redesign process include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our complete redesign process includes: discovery and strategy (understanding your goals, audience, and competitors), UX/UI design (wireframes, mockups, prototyping), development (building the new site with clean, performant code), content migration and optimization, SEO preservation, testing across devices and browsers, launch, and post-launch support.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you redesign my website without changing the content?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can execute a visual and structural redesign while keeping your existing content intact. However, we typically recommend a content audit as part of the redesign process. Outdated or underperforming content is often a major factor in why a site isn't converting, and refreshing it during the redesign maximizes your return on investment.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you redesign websites built on WordPress, Shopify, or other platforms?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We redesign websites across all major platforms including WordPress, Shopify, Wix, Squarespace, and custom-built sites. We can keep you on your current platform with a fresh design, or migrate you to a more suitable platform if your current one is limiting your growth.",
            },
          },
        ],
      },
    ],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
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
        "name": "Website Redesign Toronto",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
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
              Website Redesign
            </span>
            <span className={styles.titleLine}>in Toronto</span>
          </h1>
          <p
            className={styles.subtitle}
            style={{ fontSize: "1.25rem", maxWidth: "800px" }}
          >
            Beeclue Tech transforms outdated Toronto websites into modern,
            high-performing digital experiences. Our website redesign services
            combine stunning design with faster load times, better UX, and
            conversion-focused architecture that turns visitors into customers.
          </p>
          <div className={styles.heroRatingContainer}>
            <Link href="/contact" className={styles.ctaButton}>
              Get a Free Redesign Audit <ArrowRight className={styles.arrow} />
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
              Professional Website Redesign Services for Toronto Businesses
            </h2>
            <p>
              Your website is your digital storefront. In Toronto&apos;s
              competitive market, an outdated design, slow load times, or poor
              mobile experience means lost revenue. Visitors form an opinion
              about your website in just 50 milliseconds — and if it looks
              dated or feels clunky, they leave and never come back.
            </p>
            <p>
              At Beeclue Tech, a leading website redesign agency in Toronto, we
              don&apos;t just make your site look better. We engineer a complete
              digital transformation that aligns your online presence with your
              business goals. From visual identity refreshes to full-scale
              architectural rebuilds, our Toronto-based team delivers redesigns
              that drive measurable results.
            </p>
            <p>
              We&apos;ve helped hundreds of Toronto businesses — from startups
              to established enterprises — modernize their websites and see
              tangible improvements in traffic, engagement, and revenue. Whether
              your site feels outdated, isn&apos;t converting, or simply
              can&apos;t keep up with your growing business, we build the digital
              presence you deserve.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Signs Your Website Needs a Redesign</h3>
            <p>Consider a redesign if your site shows any of these signs:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>Your site looks outdated compared to competitors</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>It takes more than 3 seconds to load on mobile</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>Your bounce rate is above 60% and climbing</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>Mobile traffic is growing but conversions are flat</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>Your site isn&apos;t ranking for key search terms</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>Your CMS makes content updates painful</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>Your branding has evolved but the website hasn&apos;t</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* SERVICES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Website Redesign Services</h2>
          <p>
            Comprehensive redesign solutions tailored to your business goals
            and audience.
          </p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Palette className={styles.serviceIcon} />
            <h3>Visual Design Overhaul</h3>
            <p>
              Complete visual transformation that modernizes your brand
              identity online. We redesign layouts, typography, color palettes,
              imagery, and visual hierarchy to create a cohesive, professional
              look that resonates with your target audience and builds instant
              trust.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Monitor className={styles.serviceIcon} />
            <h3>UX & User Journey Redesign</h3>
            <p>
              We map your users&apos; journeys, identify friction points, and
              redesign navigation, content flow, and conversion paths to create
              an experience that guides visitors toward the actions you want
              them to take — whether that&apos;s filling out a form, making a
              purchase, or booking a call.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Gauge className={styles.serviceIcon} />
            <h3>Performance Optimization</h3>
            <p>
              Slow websites lose money. We optimize every layer of your
              site — images, code, caching, server response, and third-party
              scripts — to achieve sub-2-second load times. Our performance
              optimizations consistently improve Core Web Vitals scores and
              page speed by 40-60%.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Shield className={styles.serviceIcon} />
            <h3>Mobile-First Redesign</h3>
              <p>
              With over 60% of web traffic coming from mobile devices, we
              design and develop for mobile first. Every redesign we deliver
              provides a seamless, thumb-friendly experience across all screen
              sizes, ensuring no visitor is lost to a broken mobile experience.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <TrendingUp className={styles.serviceIcon} />
            <h3>SEO-Preserving Redesign</h3>
            <p>
              A redesign shouldn&apos;t tank your rankings. We implement
              comprehensive SEO preservation strategies including 301
              redirects, meta tag migration, structured data preservation,
              and technical SEO improvements that often result in ranking
              improvements after launch.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <RefreshCcw className={styles.serviceIcon} />
            <h3>Platform Migration & Rebuild</h3>
            <p>
              Outgrowing your current platform? We migrate websites from Wix,
              Squarespace, Joomla, and legacy custom builds to modern
              platforms like WordPress, Next.js, or Shopify. Your content and
              SEO equity transfer seamlessly to a faster, more scalable
              foundation.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* REDESIGN PROCESS */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Website Redesign Process</h2>
          <p>
            A proven, collaborative process that minimizes risk and delivers
            results on time.
          </p>
        </div>
        <div className={styles.processTimeline}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <h3>Audit & Discovery</h3>
            <p>
              We begin with a comprehensive audit of your current website —
              analyzing traffic data, user behavior, conversion funnels,
              technical performance, SEO health, and competitor positioning.
              This audit becomes the blueprint for your redesign, ensuring
              every decision is data-driven, not guesswork.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <h3>Strategy & Information Architecture</h3>
            <p>
              Using audit insights, we define your site&apos;s information
              architecture — how pages are organized, how users navigate
              between them, and how content is prioritized to drive
              conversions. We create sitemaps, user flows, and wireframes
              that solve real problems before investing in visual design.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <h3>UI Design & Prototyping</h3>
            <p>
              Our designers create high-fidelity mockups and interactive
              prototypes that bring your new brand to life. You see exactly
              what your redesigned website will look like before development
              begins. Iteration is built into this phase — we refine until
              you&apos;re completely satisfied with the direction.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <h3>Development & Content Migration</h3>
            <p>
              We build your new website using modern, performant code. Every
              page is crafted for speed, accessibility, and SEO. Content is
              migrated and optimized, 301 redirects are configured, and
              analytics tracking is set up to measure the impact of your
              redesign from day one.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>05</div>
            <h3>Testing & Launch</h3>
            <p>
              Rigorous testing across every device, browser, and screen size
              ensures a flawless launch. We check performance scores,
              accessibility compliance, form functionality, and redirect
              chains. After launch, we monitor metrics closely and make
              immediate adjustments if needed.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE US */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Choose Beeclue Tech for Your Redesign</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Data-Driven Approach</h3>
              <p>
                Every redesign decision is backed by analytics, user behavior
                data, and conversion research. We don&apos;t redesign based on
                assumptions — we redesign based on what the data tells us your
                customers actually need.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Conversion-Focused Design</h3>
              <p>
                A beautiful website that doesn&apos;t convert is just digital
                art. We design every page, every element, and every
                interaction with a clear purpose: move visitors closer to
                becoming customers.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Performance-First Engineering</h3>
              <p>
                We build websites that load in under 2 seconds. Our
                performance-first approach means your redesigned site earns
                top Google scores, ranks higher in search results, and
                provides a frictionless experience for every visitor.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>SEO Preservation Guarantee</h3>
              <p>
                We guarantee your organic traffic is protected during the
                redesign. Our SEO team implements 301 redirects, migrates all
                metadata, and monitors rankings post-launch to ensure
                zero traffic loss.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Toronto-Based Team</h3>
              <p>
                We&apos;re local. When you work with Beeclue Tech, you get a
                dedicated Toronto team that understands the Canadian market,
                Canadian consumer expectations, and the competitive landscape
                of Toronto&apos;s digital space.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Full-Service Capability</h3>
              <p>
                From strategy and design to development, content, SEO, and
                ongoing support — we handle every aspect of your redesign
                under one roof. No juggling multiple vendors or managing
                conflicting timelines.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* BEFORE/AFTER */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>What Changes in a Website Redesign</h2>
          <p>
            Here&apos;s what a professional redesign transforms in your online
            presence.
          </p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Before: Generic Template Design</h3>
              <p>
                Your site looks like thousands of others. Visitors can&apos;t
                tell you apart from competitors. The design doesn&apos;t
                reflect your brand personality or build trust.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>After: Custom Brand Experience</h3>
              <p>
                A unique, branded digital experience that tells your story,
                builds credibility, and makes visitors feel they&apos;ve
                come to the right place. Every visual element reinforces
                your brand identity.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Before: Slow, Frustrating Experience</h3>
              <p>
                Pages take 5+ seconds to load. Images are unoptimized.
                Scripts block rendering. Mobile users pinch and scroll
                endlessly. Every second of delay costs you 7% in
                conversions.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>After: Blazing-Fast Performance</h3>
              <p>
                Sub-2-second load times. Optimized images. Lazy loading.
                Clean code. Your site loads instantly on any device, earning
                top Core Web Vitals scores and Google&apos;s ranking
                preference.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Before: Low Conversion Rates</h3>
              <p>
                Visitors land on your site and leave without taking action.
                Your bounce rate is above 60%. Contact form submissions are
                declining. Your website isn&apos;t generating the leads
                your business needs.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>After: Conversion-Optimized Funnels</h3>
              <p>
                Strategic CTAs, clear value propositions, trust signals, and
                frictionless forms guide visitors toward conversion. Our
                redesigned sites typically see 2-3x improvements in
                conversion rates within the first 90 days.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* RELATED SERVICES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Related Services</h2>
          <p>
            Explore our other services that complement your website redesign.
          </p>
        </div>
        <div className={styles.scroller}>
          <Link
            href="/web-design-toronto"
            className={styles.serviceCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>Web Design Toronto</h3>
            <p>
              Complete web design services for Toronto businesses — from
              initial concept and branding through to responsive development
              and launch.
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
              Custom Shopify stores, headless commerce, and theme development
              for Toronto merchants who want to sell more online.
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

      {/* FAQ */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Frequently Asked Questions</h2>
          <p>
            Common questions about website redesign services in Toronto.
          </p>
        </div>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              padding: "1.5rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              How much does a website redesign cost in Toronto?
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>
              Website redesign costs in Toronto range from $5,000 for a simple
              refresh of a small business site to $50,000+ for a complete
              enterprise redesign with custom features. The final cost depends
              on the size of your site, the complexity of the design, whether
              you need new functionality, and how much content needs to be
              migrated or rewritten.
            </p>
          </div>
          <div
            style={{
              padding: "1.5rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              How long does a website redesign take?
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>
              A typical website redesign takes 6 to 12 weeks from discovery to
              launch. Simpler sites with 5-15 pages may be completed in 4 to 6
              weeks, while larger sites with custom features, e-commerce, or
              extensive content migration can take 12 to 16 weeks. We provide a
              detailed timeline during the scoping phase.
            </p>
          </div>
          <div
            style={{
              padding: "1.5rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              Will a website redesign hurt my SEO rankings?
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>
              Not when done correctly. Our redesign process includes
              comprehensive SEO preservation strategies: 301 redirects for
              every changed URL, migration of all meta tags and structured data,
              preservation of your existing content hierarchy, and
              implementation of technical SEO best practices. Most of our
              clients see an improvement in rankings after a redesign because we
              also optimize site speed and Core Web Vitals.
            </p>
          </div>
          <div
            style={{
              padding: "1.5rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              Should I redesign my website or rebuild it from scratch?
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>
              It depends on your current site&apos;s technology stack and
              condition. If your site is built on a modern CMS with a solid
              foundation, a redesign (visual and UX overhaul) is usually
              sufficient. If your site is on outdated technology, has severe
              performance issues, or lacks the functionality you need, a full
              rebuild on a modern stack (like Next.js or WordPress with a custom
              theme) is the better investment.
            </p>
          </div>
          <div
            style={{
              padding: "1.5rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              What does your website redesign process include?
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>
              Our complete redesign process includes: discovery and strategy
              (understanding your goals, audience, and competitors), UX/UI
              design (wireframes, mockups, prototyping), development (building
              the new site with clean, performant code), content migration and
              optimization, SEO preservation, testing across devices and
              browsers, launch, and post-launch support.
            </p>
          </div>
          <div
            style={{
              padding: "1.5rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              Can you redesign my website without changing the content?
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>
              Yes. We can execute a visual and structural redesign while keeping
              your existing content intact. However, we typically recommend a
              content audit as part of the redesign process. Outdated or
              underperforming content is often a major factor in why a site
              isn&apos;t converting, and refreshing it during the redesign
              maximizes your return on investment.
            </p>
          </div>
          <div
            style={{
              padding: "1.5rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              Do you redesign websites built on WordPress, Shopify, or other
              platforms?
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>
              Yes. We redesign websites across all major platforms including
              WordPress, Shopify, Wix, Squarespace, and custom-built sites. We
              can keep you on your current platform with a fresh design, or
              migrate you to a more suitable platform if your current one is
              limiting your growth.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* SERVICE AREA */}
      <FadeIn
        className={styles.baseSection}
        style={{
          textAlign: "center",
          borderTop: "1px solid var(--border)",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Website Redesign Across Toronto & the GTA
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1.25rem",
            maxWidth: "800px",
            margin: "0 auto 2rem auto",
          }}
        >
          Beeclue Tech proudly serves businesses across the Greater Toronto
          Area:
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {[
            "Downtown Toronto",
            "North York",
            "Scarborough",
            "Etobicoke",
            "Mississauga",
            "Brampton",
            "Markham",
            "Vaughan",
          ].map((city) => (
            <span
              key={city}
              style={{
                padding: "0.5rem 1.5rem",
                border: "1px solid var(--border)",
                borderRadius: "50px",
                color: "var(--primary-light)",
              }}
            >
              {city}
            </span>
          ))}
        </div>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1.25rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Ready to transform your outdated website into a modern,
          high-performing digital asset? Contact us for a free redesign
          consultation.
        </p>
      </FadeIn>

      {/* CTA */}
      <FadeIn className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Ready to Redesign Your Website?</h2>
          <p className={styles.footerSub}>
            Let&apos;s transform your outdated website into a modern,
            high-converting digital experience. Get a free redesign audit
            from our Toronto team.
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
