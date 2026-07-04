"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  Shield,
  RefreshCcw,
  Gauge,
  HardDrive,
  Lock,
  Clock,
  ChevronDown,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function WebsiteMaintenanceTorontoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How much does website maintenance cost in Toronto?", a: "Website maintenance costs in Toronto typically range from $99/month for basic maintenance (updates and backups) to $999/month for enterprise-level support (24/7 monitoring, performance optimization, and priority support). The right plan depends on your site&apos;s complexity, traffic volume, and how critical uptime is to your business." },
    { q: "What is included in website maintenance?", a: "Our website maintenance plans include: core CMS and plugin updates, security patches and vulnerability scanning, daily or weekly backups, uptime monitoring, performance optimization, content updates, security monitoring, broken link fixes, and monthly performance reports. Higher-tier plans add priority support, staging environments, and A/B testing." },
    { q: "Why is website maintenance important?", a: "Without regular maintenance, websites become vulnerable to security breaches, lose search rankings due to outdated content and broken links, slow down from unoptimized code, and eventually break when software becomes incompatible. Studies show 43% of cyber attacks target small businesses through outdated website software. Maintenance prevents these issues before they cost you money." },
    { q: "Do I need website maintenance if my site is on WordPress.com or Shopify?", a: "Yes. While hosted platforms handle some server-level maintenance, you still need maintenance for theme and plugin updates, content changes, performance monitoring, security hardening, and ensuring your site stays compatible with platform updates. Even Shopify stores need regular maintenance for apps, custom code, and performance optimization." },
    { q: "What happens if I don&apos;t maintain my website?", a: "Neglected websites face: security vulnerabilities that hackers exploit, declining search rankings from broken links and slow performance, content that becomes outdated and irrelevant, broken functionality from incompatible software updates, and potential data loss from failed backups. The cost of fixing a hacked or broken site far exceeds the cost of preventive maintenance." },
    { q: "Can you maintain a website you didn&apos;t build?", a: "Absolutely. We maintain websites built by other developers, agencies, or DIY builders. We begin with a comprehensive audit of your current site to understand its technology stack, identify existing issues, and create a maintenance plan tailored to your site&apos;s specific needs." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Website Maintenance",
        "provider": {
          "@type": "Organization",
          "name": "Beeclue Tech",
        },
        "areaServed": "Toronto",
        "description":
          "Professional website maintenance services in Toronto. Security patches, backups, performance monitoring, and ongoing support.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "CAD",
          "priceRange": "$99-$999/month",
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
            "name": "Website Maintenance Toronto",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does website maintenance cost in Toronto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Website maintenance costs in Toronto typically range from $99/month for basic maintenance (updates and backups) to $999/month for enterprise-level support (24/7 monitoring, performance optimization, and priority support). The right plan depends on your site's complexity, traffic volume, and how critical uptime is to your business.",
            },
          },
          {
            "@type": "Question",
            "name": "What is included in website maintenance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our website maintenance plans include: core CMS and plugin updates, security patches and vulnerability scanning, daily or weekly backups, uptime monitoring, performance optimization, content updates, security monitoring, broken link fixes, and monthly performance reports. Higher-tier plans add priority support, staging environments, and A/B testing.",
            },
          },
          {
            "@type": "Question",
            "name": "Why is website maintenance important?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Without regular maintenance, websites become vulnerable to security breaches, lose search rankings due to outdated content and broken links, slow down from unoptimized code, and eventually break when software becomes incompatible. Studies show 43% of cyber attacks target small businesses through outdated website software. Maintenance prevents these issues before they cost you money.",
            },
          },
          {
            "@type": "Question",
            "name": "Do I need website maintenance if my site is on WordPress.com or Shopify?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. While hosted platforms handle some server-level maintenance, you still need maintenance for theme and plugin updates, content changes, performance monitoring, security hardening, and ensuring your site stays compatible with platform updates. Even Shopify stores need regular maintenance for apps, custom code, and performance optimization.",
            },
          },
          {
            "@type": "Question",
            "name": "What happens if I don't maintain my website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Neglected websites face: security vulnerabilities that hackers exploit, declining search rankings from broken links and slow performance, content that becomes outdated and irrelevant, broken functionality from incompatible software updates, and potential data loss from failed backups. The cost of fixing a hacked or broken site far exceeds the cost of preventive maintenance.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you maintain a website you didn't build?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We maintain websites built by other developers, agencies, or DIY builders. We begin with a comprehensive audit of your current site to understand its technology stack, identify existing issues, and create a maintenance plan tailored to your site's specific needs.",
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
              Website Maintenance
            </span>
            <span className={styles.titleLine}>in Toronto</span>
          </h1>
          <p
            className={styles.subtitle}
            style={{ fontSize: "1.25rem", maxWidth: "800px" }}
          >
            Beeclue Tech keeps Toronto websites secure, fast, and always
            online. Our website maintenance services handle updates, security
            patches, backups, and performance monitoring so you can focus on
            running your business.
          </p>
          <div className={styles.heroRatingContainer}>
            <Link href="/contact" className={styles.ctaButton}>
              Get a Free Site Audit <ArrowRight className={styles.arrow} />
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
              Professional Website Maintenance Services for Toronto Businesses
            </h2>
            <p>
              Your website is a living product that needs ongoing care. Software
              updates are released weekly, security threats evolve daily, and
              performance degrades over time without attention. A website that
              isn&apos;t maintained is a website that&apos;s slowly breaking —
              and when it finally fails, the cost of emergency repairs far
              exceeds the cost of preventive maintenance.
            </p>
            <p>
              At Beeclue Tech, a trusted website maintenance company in
              Toronto, we take the burden of website upkeep off your shoulders.
              Our dedicated maintenance team monitors your site around the clock,
              applies security patches before vulnerabilities are exploited,
              optimizes performance continuously, and handles content updates
              so your site always reflects your latest offerings.
            </p>
            <p>
              We maintain websites across all major platforms — WordPress,
              Shopify, Next.js, custom builds, and more — for businesses
              throughout the Greater Toronto Area. Whether we built your site
              or another agency did, our maintenance plans keep it running at
              peak performance.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Why Website Maintenance Matters</h3>
            <p>
              Regular maintenance protects your investment and drives results:
            </p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  43% of cyber attacks target small businesses through outdated
                  software
                </span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Unmaintained sites lose 50%+ of organic traffic within 6 months
                </span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Broken links and slow pages kill conversion rates
                </span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Outdated content makes your business look inactive
                </span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Emergency fixes cost 5-10x more than preventive maintenance
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* MAINTENANCE SERVICES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>What&apos;s Included in Our Maintenance Plans</h2>
          <p>
            Comprehensive maintenance that covers every aspect of keeping your
            website healthy.
          </p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Shield className={styles.serviceIcon} />
            <h3>Security Monitoring & Patches</h3>
            <p>
              We continuously monitor your site for vulnerabilities, malware,
              and intrusion attempts. When security patches are released for
              your CMS, themes, or plugins, we apply them immediately — often
              before the vulnerabilities are publicly known. Our security
              hardening includes firewall configuration, login protection,
              and regular vulnerability scans.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <RefreshCcw className={styles.serviceIcon} />
            <h3>Software & Plugin Updates</h3>
            <p>
              Keeping your CMS, themes, and plugins updated is critical for
              security and compatibility. We test every update in a staging
              environment before applying it to your live site, ensuring no
              update breaks your functionality. We also remove unused plugins
              that create security risks and slow down your site.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <HardDrive className={styles.serviceIcon} />
            <h3>Automated Backups</h3>
            <p>
              We configure daily or weekly automated backups of your entire
              website — files and database — stored securely off-site. If
              anything goes wrong, we can restore your site to any backup
              point within minutes, minimizing downtime and data loss.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Gauge className={styles.serviceIcon} />
            <h3>Performance Monitoring</h3>
            <p>
              We continuously monitor your site&apos;s speed, uptime, and Core
              Web Vitals. When performance degrades — from plugin bloat,
              image issues, or server changes — we identify and fix the
              cause before it impacts your visitors and search rankings. Our
              monthly reports show you exactly how your site is performing.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Clock className={styles.serviceIcon} />
            <h3>Uptime Monitoring</h3>
            <p>
              Every minute your site is down costs you money and credibility.
              We monitor your site 24/7 and receive instant alerts if it goes
              offline. Our team responds immediately to diagnose and resolve
              the issue, typically restoring service within minutes.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Lock className={styles.serviceIcon} />
            <h3>Content Updates</h3>
            <p>
              Need to update text, add images, publish a blog post, or modify
              a page layout? Our maintenance plans include a set number of
              content updates per month so your site always reflects your
              latest products, services, and messaging without you lifting a
              finger.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* MAINTENANCE PLANS */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Website Maintenance Plans</h2>
          <p>
            Choose the plan that matches your site&apos;s complexity and your
            business needs.
          </p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Essential Plan — $99/month</h3>
              <p>
                Ideal for small business websites with low traffic. Includes
                monthly CMS and plugin updates, weekly backups, uptime
                monitoring, basic security scanning, and 2 content updates
                per month. Perfect for brochure sites that need reliable,
                hands-off maintenance.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Professional Plan &mdash; $299/month</h3>
              <p>
                Built for growing businesses and e-commerce sites. Includes
                everything in Essential plus weekly updates, daily backups,
                advanced security hardening, performance optimization,
                monthly analytics reports, and 5 content updates per month.
                The most popular plan for Toronto businesses.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Enterprise Plan &mdash; $999/month</h3>
              <p>
                For high-traffic, mission-critical websites. Includes
                everything in Professional plus 24/7 priority support, same-day
                emergency response, staging environment, A/B testing
                support, custom development hours, and unlimited content
                updates. Your dedicated technical team on call.
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1.1rem",
              marginBottom: "1.5rem",
            }}
          >
            Not sure which plan is right for you? We&apos;ll audit your site
            and recommend the best fit — no obligation.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get Your Free Audit <ArrowRight className={styles.arrow} />
          </Link>
        </div>
      </FadeIn>

      {/* WHY CHOOSE US */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Choose Beeclue Tech for Maintenance</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Proactive, Not Reactive</h3>
              <p>
                We don&apos;t wait for things to break. Our continuous
                monitoring and preventive maintenance approach catches issues
                before they become problems, saving you from costly emergency
                repairs and downtime.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Platform Expertise</h3>
              <p>
                We maintain websites across WordPress, Shopify, Next.js,
                WooCommerce, and custom builds. Our team knows each platform
                deeply and applies best practices specific to your technology
                stack.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Transparent Reporting</h3>
              <p>
                Every month you receive a detailed report covering all updates
                applied, security scans performed, performance metrics, uptime
                statistics, and content changes made. You always know exactly
                what we did and how your site is performing.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Toronto-Based Response</h3>
              <p>
                When you need help, you&apos;re talking to a local team. Our
                Toronto-based maintenance team responds quickly, communicates
                clearly, and understands the unique needs of Canadian
                businesses — from Canadian privacy regulations to local
                consumer expectations.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>No Lock-In Contracts</h3>
              <p>
                We earn your business every month through results, not
                contracts. Our maintenance plans are month-to-month, giving
                you the flexibility to adjust or cancel as your needs change.
                Most clients stay because the value speaks for itself.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Emergency Support</h3>
              <p>
                When something goes wrong at 2 AM before your product launch,
                we&apos;re there. Our Enterprise plan includes 24/7 emergency
                support with guaranteed response times. For all plans, we
                prioritize critical issues that impact your business.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* WHAT WE MAINTAIN */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Platforms We Maintain</h2>
          <p>
            Expert maintenance across every major web platform and technology.
          </p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <h3>WordPress</h3>
            <p>
              Core updates, plugin management, theme maintenance, security
              hardening, database optimization, and performance tuning for
              WordPress sites of all sizes.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Shopify</h3>
            <p>
              App updates, theme maintenance, custom code monitoring,
              performance optimization, and checkout flow maintenance for
              Shopify and Shopify Plus stores.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Next.js & Custom Builds</h3>
            <p>
              Dependency updates, security patches, server maintenance, CDN
              optimization, and performance monitoring for custom-built
              websites and web applications.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>WooCommerce</h3>
            <p>
              WordPress core and WooCommerce plugin updates, payment gateway
              maintenance, inventory sync monitoring, and store performance
              optimization.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Squarespace & Wix</h3>
            <p>
              Platform update monitoring, content management, SEO maintenance,
              and performance optimization for hosted website platforms.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Custom PHP & Laravel</h3>
            <p>
              Framework updates, security patches, database maintenance, server
              optimization, and application monitoring for custom web
              applications.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* RELATED SERVICES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Related Services</h2>
          <p>
            Explore our other services that complement your website maintenance.
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
            href="/custom-software-development-toronto"
            className={styles.serviceCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>Custom Software Development Toronto</h3>
            <p>
              Bespoke software solutions built for Toronto businesses — from
              internal tools and dashboards to customer-facing applications
              and APIs.
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
            Common questions about website maintenance services in Toronto.
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

      {/* SERVICE AREA */}
      <FadeIn
        className={styles.baseSection}
        style={{
          textAlign: "center",
          borderTop: "1px solid var(--border)",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Website Maintenance Across Toronto & the GTA
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1.25rem",
            maxWidth: "800px",
            margin: "0 auto 2rem auto",
          }}
        >
          Beeclue Tech keeps Toronto businesses&apos; websites running at
          peak performance:
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
          Let us take website maintenance off your plate. Contact us for a
          free site audit and maintenance recommendation.
        </p>
      </FadeIn>

      {/* CTA */}
      <FadeIn className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Keep Your Website Running Smoothly</h2>
          <p className={styles.footerSub}>
            Don&apos;t wait for your site to break. Our Toronto maintenance
            team keeps your website secure, fast, and always online. Get a
            free audit today.
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
