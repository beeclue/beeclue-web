"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  Shield,
  AlertTriangle,
  Lock,
  Globe,
  Server,
  Code,
  RefreshCcw,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function NotSecureWebsiteFixPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Website Security Fix",
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
            "name": "Blog",
            "item": "https://beeclue.com/blog",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Not Secure Website Fix",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why does my website say Not Secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your website shows Not Secure because it doesn't have a valid SSL certificate or isn't properly configured for HTTPS. Without SSL, browsers like Chrome display a warning to visitors. This happens when the SSL certificate has expired, was never installed, or the site has mixed content (HTTP and HTTPS resources loading together).",
            },
          },
          {
            "@type": "Question",
            "name": "How do I fix the Not Secure warning on my website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Install a valid SSL certificate (free via Let's Encrypt or paid from providers like DigiCert). Configure your server to redirect all HTTP traffic to HTTPS. Update all internal links to use HTTPS. Fix mixed content by updating resource URLs. Verify with SSL Labs test. Most hosting providers offer one-click SSL installation.",
            },
          },
          {
            "@type": "Question",
            "name": "Is SSL certificate free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Let's Encrypt provides free SSL certificates that are trusted by all major browsers. Most hosting providers offer free SSL installation through Let's Encrypt or AutoSSL. Paid SSL certificates ($50-$500/year) offer additional features like warranty coverage and organization validation for enterprise sites.",
            },
          },
          {
            "@type": "Question",
            "name": "Does SSL affect SEO rankings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Google confirmed HTTPS is a ranking signal. Websites without SSL rank lower than secured competitors. Chrome also marks HTTP sites as Not Secure, increasing bounce rates. SSL is essential for both SEO and user trust. Since 2018, Chrome has标记所有HTTP网站为Not Secure.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does it take to fix a Not Secure website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Basic SSL installation takes 15-30 minutes. Full HTTPS migration including redirect setup, mixed content fixes, and verification takes 2-4 hours. Complex sites with thousands of pages or CDN configuration may take 1-2 days. The impact on SEO rankings typically appears within 1-4 weeks.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I fix this myself or do I need a developer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Basic SSL installation can be done through your hosting panel. However, mixed content issues, redirect configuration, CDN SSL setup, and ensuring no SEO damage require technical expertise. If you're not comfortable with server configuration, hiring a professional ensures the fix is done correctly without ranking losses.",
            },
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      q: "Why does my website say Not Secure?",
      a: "Your website shows Not Secure because it doesn't have a valid SSL certificate or isn't properly configured for HTTPS. Without SSL, browsers like Chrome display a warning to visitors. This happens when the SSL certificate has expired, was never installed, or the site has mixed content.",
    },
    {
      q: "How do I fix the Not Secure warning on my website?",
      a: "Install a valid SSL certificate (free via Let's Encrypt or paid). Configure your server to redirect all HTTP traffic to HTTPS. Update all internal links to use HTTPS. Fix mixed content by updating resource URLs. Verify with SSL Labs test.",
    },
    {
      q: "Is SSL certificate free?",
      a: "Yes. Let's Encrypt provides free SSL certificates trusted by all major browsers. Most hosting providers offer free SSL installation. Paid certificates ($50-$500/year) offer additional features like warranty coverage for enterprise sites.",
    },
    {
      q: "Does SSL affect SEO rankings?",
      a: "Yes. Google confirmed HTTPS is a ranking signal. Websites without SSL rank lower than secured competitors. Chrome also marks HTTP sites as Not Secure, increasing bounce rates. SSL is essential for both SEO and user trust.",
    },
    {
      q: "How long does it take to fix a Not Secure website?",
      a: "Basic SSL installation takes 15-30 minutes. Full HTTPS migration takes 2-4 hours. Complex sites may take 1-2 days. SEO impact typically appears within 1-4 weeks.",
    },
    {
      q: "Can I fix this myself or do I need a developer?",
      a: "Basic SSL installation can be done through your hosting panel. However, mixed content issues, redirect configuration, and ensuring no SEO damage require technical expertise. Hiring a professional ensures the fix is done correctly.",
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
            <span className={styles.titleLinePrimary}>Not Secure Website?</span>
            <span className={styles.titleLine}>How to Fix It in 2026</span>
          </h1>
          <p
            className={styles.subtitle}
            style={{ fontSize: "1.25rem", maxWidth: "800px" }}
          >
            Why your website shows &quot;Not Secure&quot; and how to fix it.
            Our complete SSL/HTTPS guide for 2026 covers step-by-step
            instructions, common issues, and when to get professional help
            — so you can secure your site and protect your visitors.
          </p>
          <div className={styles.heroRatingContainer}>
            <Link href="/contact" className={styles.ctaButton}>
              Get Help Now <ArrowRight className={styles.arrow} />
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
              Why Your Website Shows &quot;Not Secure&quot; and Why It Matters
            </h2>
            <p>
              You&apos;ve seen it before — that alarming &quot;Not Secure&quot;
              warning in your browser&apos;s address bar. It&apos;s not just a
              cosmetic issue. It&apos;s actively driving away your visitors,
              tanking your search rankings, and exposing your business to
              security risks. If your website shows this warning, you&apos;re
              losing potential customers every single day. Studies show that
              85% of online shoppers will not complete a purchase on a site
              marked as &quot;Not Secure,&quot; and Google has confirmed that
              HTTPS is a ranking signal, meaning your site is being penalized
              in search results.
            </p>
            <p>
              At Beeclue Tech, we&apos;ve helped hundreds of Canadian businesses
              fix their Not Secure warnings and migrate to HTTPS. We&apos;ve
              seen businesses lose 30-50% of their organic traffic after
              Google&apos;s HTTPS ranking signal update, and we&apos;ve seen
              others recover fully within weeks of implementing proper SSL
              configuration. This guide shares everything you need to know to
              fix your website and protect your online presence. We&apos;ve
              compiled this knowledge from years of experience fixing SSL issues
              for businesses across Toronto and Canada.
            </p>
            <p>
              The good news: fixing a Not Secure website is straightforward
              with the right knowledge. Whether you handle it yourself or get
              professional help, this guide walks you through exactly what
              causes the warning, how to fix it step by step, and how to
              prevent it from happening again. In 2026, SSL certificates are
              free through services like Let&apos;s Encrypt, so there&apos;s
              no reason to delay securing your website.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Why SSL/HTTPS Is Non-Negotiable</h3>
            <p>Your website needs SSL for these critical reasons:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>Google uses HTTPS as a ranking signal — no SSL = lower rankings</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>Chrome marks HTTP sites as Not Secure — visitors leave immediately</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>SSL encrypts data between your server and visitors — protects user information</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>E-commerce and login pages require HTTPS to function properly</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>Trust and credibility — visitors expect and require secure connections</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* COMMON CAUSES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Why Your Website Shows Not Secure</h2>
          <p>
            The most common reasons websites display the Not Secure warning,
            and how to identify which one affects you. Understanding the root
            cause helps you choose the right solution and prevent the issue
            from recurring.
          </p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <AlertTriangle className={styles.serviceIcon} />
            <h3>No SSL Certificate Installed</h3>
            <p>
              The most common cause. Your website was never configured with an
              SSL certificate, so all traffic serves over unencrypted HTTP.
              This is the default state for many hosting accounts. You need to
              install an SSL certificate and configure your server to use
              HTTPS.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <AlertTriangle className={styles.serviceIcon} />
            <h3>Expired SSL Certificate</h3>
            <p>
              SSL certificates expire annually (or every 90 days for Let&apos;s
              Encrypt). When they expire, browsers display the Not Secure
              warning. This often happens when auto-renewal fails or the
              certificate was manually installed without renewal reminders.
              Check your certificate expiration date immediately.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <AlertTriangle className={styles.serviceIcon} />
            <h3>Mixed Content Issues</h3>
            <p>
              Your page loads over HTTPS but some resources (images, scripts,
              stylesheets) load over HTTP. This &quot;mixed content&quot;
              triggers the warning even though you have SSL installed. Common
              culprits: hardcoded image URLs, third-party scripts, embedded
              iframes, and old CSS/JS references.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <AlertTriangle className={styles.serviceIcon} />
            <h3>Incorrect SSL Configuration</h3>
            <p>
              SSL certificate is installed but the server isn&apos;t configured
              to redirect HTTP to HTTPS. Visitors can still access the site
              over HTTP, and some pages may load insecurely. You need proper
              301 redirects and HSTS headers to ensure all traffic uses HTTPS.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <AlertTriangle className={styles.serviceIcon} />
            <h3>CDN or Proxy SSL Mismatch</h3>
            <p>
              If you use a CDN like Cloudflare or a reverse proxy, the SSL
              configuration between the CDN and your origin server may not
              match. This causes intermittent Not Secure warnings or
              certificate errors. Ensure SSL is configured at every layer of
              your infrastructure.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <AlertTriangle className={styles.serviceIcon} />
            <h3>Self-Signed Certificate</h3>
            <p>
              Self-signed certificates aren&apos;t trusted by browsers and
              trigger security warnings. They&apos;re only suitable for
              development environments. Production websites need certificates
              from trusted Certificate Authorities like Let&apos;s Encrypt,
              DigiCert, or Comodo.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* STEP BY STEP FIX */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>How to Fix a Not Secure Website</h2>
          <p>
            Step-by-step instructions to secure your website and remove the
            Not Secure warning. Follow these steps in order for the best
            results. Each step builds on the previous one, so don&apos;t skip
            ahead. If you&apos;re not comfortable with technical configurations,
            our team can handle this entire process for you.
          </p>
        </div>
        <div className={styles.processTimeline}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <h3>Install an SSL Certificate</h3>
            <p>
              Most hosting providers (cPanel, Plesk, SiteGround, WP Engine)
              offer one-click SSL installation through Let&apos;s Encrypt. Log
              into your hosting panel, find the SSL/TLS section, and activate
              the certificate. For advanced users, use Certbot for automatic
              certificate management. Paid certificates are available from
              DigiCert, Comodo, and GlobalSign for enterprise needs. The
              installation process typically takes just a few minutes, and
              most hosts handle the technical configuration automatically.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <h3>Force HTTPS Redirects</h3>
            <p>
              Configure your server to redirect all HTTP traffic to HTTPS. In
              Apache, add a rewrite rule to your .htaccess file. In Nginx,
              configure a server block redirect. In WordPress, update the
              Site URL to use https://. This ensures all visitors and search
              engines access the secure version of your site. Without proper
              redirects, users can still access your site over HTTP, and
              search engines may index both versions, causing duplicate
              content issues.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <h3>Fix Mixed Content</h3>
            <p>
              Scan your site for HTTP resources using browser developer tools
              or a mixed content scanner. Update all internal links, image
              URLs, script sources, and stylesheet references to use HTTPS.
              Check third-party embeds and iframes. Use protocol-relative URLs
              (//example.com) or absolute HTTPS URLs for external resources.
              Mixed content is one of the most common causes of Not Secure
              warnings even after SSL installation, so thorough scanning is
              essential.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <h3>Verify and Monitor</h3>
            <p>
              Test your site with SSL Labs (ssllabs.com/ssltest) for an A+
              rating. Check all pages load correctly. Verify search console
              shows HTTPS URLs. Monitor for certificate expiration. Set up
              auto-renewal to prevent future issues. Update your sitemap and
              internal links to use HTTPS. Regular monitoring ensures your
              SSL certificate stays valid and your website remains secure.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* HOW TO PREVENT FUTURE ISSUES */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>How to Prevent Future SSL Issues</h2>
          <p>
            Once your website is secure, follow these best practices to keep
            it that way. Prevention is always better than cure when it comes
            to SSL certificates and website security.
          </p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Enable Auto-Renewal</h3>
              <p>
                Configure your SSL certificate to auto-renew before expiration.
                Let&apos;s Encrypt certificates expire every 90 days, so
                auto-renewal is essential. Most hosting providers handle this
                automatically, but verify it&apos;s enabled. Set up calendar
                reminders as a backup.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Monitor Certificate Status</h3>
              <p>
                Use monitoring tools to check your SSL certificate status
                regularly. Services like UptimeRobot, StatusCake, or SSL
                monitoring plugins can alert you before your certificate
                expires. Don&apos;t wait for visitors to see the Not Secure
                warning.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Keep Software Updated</h3>
              <p>
                Outdated CMS versions, plugins, and themes can cause SSL issues
                and security vulnerabilities. Regularly update WordPress,
                WooCommerce, plugins, and themes. Test updates in a staging
                environment before applying to production.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Regular Security Audits</h3>
              <p>
                Schedule quarterly security audits to identify and address
                potential issues before they become problems. Check for mixed
                content, expired certificates, outdated software, and
                security vulnerabilities. Proactive monitoring prevents
                downtime and protects your reputation.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* TECHNOLOGY STACK */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>SSL/HTTPS Technologies We Work With</h2>
          <p>
            We have expertise across all major SSL and security technologies
            to keep your website secure.
          </p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <h3>Let&apos;s Encrypt</h3>
            <p>Free SSL certificates with auto-renewal</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>DigiCert & Comodo</h3>
            <p>Enterprise SSL certificates</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Cloudflare SSL</h3>
            <p>CDN-integrated SSL and security</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>SSL Labs Testing</h3>
            <p>A+ rated SSL configuration</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>HSTS Headers</h3>
            <p>HTTP Strict Transport Security</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Mixed Content Scanners</h3>
            <p>Comprehensive security auditing</p>
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE US */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Get Professional Help</h2>
        </div>
        <p style={{ color: "var(--muted)", maxWidth: "800px", margin: "0 auto 2rem auto", textAlign: "center" }}>
          While some SSL issues can be fixed with basic technical knowledge,
          many require expertise to resolve properly without causing additional
          problems. Here&apos;s why professional help ensures a faster, safer fix.
        </p>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Fast, Guaranteed Fix</h3>
              <p>
                We fix Not Secure warnings in hours, not days. Our team has
                resolved this issue for hundreds of Canadian websites. We know
                every hosting environment, CDN configuration, and edge case.
                Your site will be secure and warning-free quickly.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>No SEO Damage</h3>
              <p>
                Improper HTTPS migration can tank your search rankings. We
                ensure proper 301 redirects, canonical tags, and sitemap
                updates so Google indexes the HTTPS version without losing any
                of your existing rankings.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Comprehensive Security Review</h3>
              <p>
                While fixing your SSL issue, we audit your entire site for
                security vulnerabilities — outdated software, weak passwords,
                missing security headers, and malware. We don&apos;t just fix
                the immediate problem; we ensure your entire website is secure
                and protected against future threats. This comprehensive
                approach saves you from dealing with multiple security issues
                separately.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Ongoing Monitoring</h3>
              <p>
                We set up certificate expiration monitoring and automated
                renewal so you never see the Not Secure warning again. Our
                maintenance plans include ongoing SSL management and security
                updates.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* RELATED SERVICES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Explore Our Services</h2>
          <p>
            Once your site is secure, explore our other services to improve
            your website&apos;s performance and visibility.
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
              Professional web design services for Toronto businesses. Custom
              designs, conversion-focused UX, and performance-first architecture
              built on secure, modern technology.
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
            href="/website-maintenance-toronto"
            className={styles.serviceCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>Website Maintenance Toronto</h3>
            <p>
              Ongoing website maintenance to keep your site fast, secure, and
              up-to-date. SSL management, security monitoring, performance
              optimization, and content updates.
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
            Common questions about fixing Not Secure website warnings.
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
          <h2>Fix Your Not Secure Website Today</h2>
          <p className={styles.footerSub}>
            Don&apos;t lose another visitor to the Not Secure warning. Our
            Toronto team will secure your website, fix all SSL issues, and
            ensure your search rankings are protected.
          </p>
          <div className={styles.footerActions}>
            <Link href="/contact" className={styles.ctaButtonLight}>
              Get Help Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
