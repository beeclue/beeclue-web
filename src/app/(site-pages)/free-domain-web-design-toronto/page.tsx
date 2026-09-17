"use client";

import Link from "next/link";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, Shield, Globe, Lock, Code2, Rocket } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function FreeDomainWebDesignTorontoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Offer", "Service", "WebDesignService"],
    "name": "Free Domain & Custom Web Design Toronto",
    "serviceType": "Web Design & Domain Registration",
    "provider": {
      "@type": "Organization",
      "name": "Beeclue Tech",
      "url": "https://beeclue.com"
    },
    "description": "Get a 100% Free Domain Name (.com/.ca), Premium Hosting, and SSL Certificate when you sign up for our custom web design package in Toronto.",
    "areaServed": ["Toronto", "Canada", "North America"]
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO SECTION */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.heroContent}>

          <h1 className={styles.title}>
            <span className={styles.titleLinePrimary}>Get a 100% Free Domain</span>
            <span className={styles.titleLine}>&amp; Custom Web Design</span>
          </h1>
          <p className={styles.subtitle}>
            Stop settling for generic email addresses and slow, free website builders. Get a Premium Custom Website built by Toronto&apos;s leading agency, and we&apos;ll cover your Domain, Premium Hosting, and SSL Certificate <strong>100% FREE for the first year.</strong>
          </p>
          <div className={styles.heroTrustBar}>
            <Link href="/contact" className={styles.ctaButton}>
              Claim Your Free Domain <ArrowRight className={styles.arrow} />
            </Link>
            <div className={styles.trustItem}>
              <div className={styles.trustStars}>★★★★★</div>
              <span className={styles.trustLabel}>Rated 5.0 by Toronto Businesses</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* THE BREAKDOWN SECTION */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>What&apos;s Included in the Bundle?</h2>
          <p>
            We bundle everything a startup, consultant, or local business needs to establish instant digital authority, all under one simple subscription.
          </p>
        </div>

        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <Globe className={styles.valueIcon} />
            <div>
              <h3>100% Free Domain Name</h3>
              <p>
                We purchase and manage a premium .com or .ca domain for you, completely free for the first year. Build instant trust with a professional web address.
              </p>
            </div>
          </div>

          <div className={styles.valueItem}>
            <Code2 className={styles.valueIcon} />
            <div>
              <h3>Custom Web Design</h3>
              <p>
                A custom-coded website designed by our Toronto team. No bloated themes. Fully responsive on mobile with lightning-fast load times. Zero upfront build fee.
              </p>
            </div>
          </div>

          <div className={styles.valueItem}>
            <Shield className={styles.valueIcon} />
            <div>
              <h3>Premium Hosting &amp; SSL</h3>
              <p>
                Say goodbye to slow loading times. Your site is hosted on enterprise-grade infrastructure with bank-level SSL encryption to protect user data.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* THE "AUTHORITY" PITCH */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>The Trap of Free Website Builders</h2>
          <p>
            Many business owners try to save money by using a "free" website builder, only to be stuck with a generic, unprofessional domain like <code>yourbusiness.wixsite.com</code>. This immediately damages your credibility and destroys your chances of ranking on Google for local Toronto searches. 
            <br/><br/>
            A premium custom domain (e.g., <code>yourbusiness.com</code>) tells clients that your practice is established and professional. We remove the technical headache by handling the domain registration, DNS management, and website hosting for you—while building you a custom, high-converting digital storefront.
          </p>
        </div>
        
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Establish Immediate Trust</h3>
              <p>Clients are more likely to trust and buy from a business with a real domain.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Branded Email</h3>
              <p>Secure, branded email capabilities (hello@yourbusiness.com).</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Dominate Local SEO</h3>
              <p>Rank higher in Toronto and the GTA with a proper top-level domain.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* CTA SECTION */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Get Started Today</h2>
          <p>
            No hidden fees. No massive upfront build costs. Just a simple, transparent subscription that covers your custom website, free domain for the first year, high-speed hosting, and ongoing maintenance.
          </p>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/contact" className={styles.ctaButton}>
            Claim Your Free Domain <ArrowRight size={20} />
          </Link>
          <div className={styles.heroMicrocopy} style={{ marginTop: "1.5rem", maxWidth: "800px", lineHeight: "1.6" }}>
            *Free domain offer applies to standard .com or .ca registrations for the first 12 months. Domain renewal rates apply in year two. Subject to availability. The domain will be registered under Beeclue's account. A $100 administration fee will be applied if the client wishes to transfer the domain to their own account or requires it to be registered directly on their account. By proceeding, the client gives us the right to register the domain on their behalf. Beeclue Tech is not liable for any copyright or trademark claims related to the chosen domain name.
          </div>
        </div>
      </FadeIn>

    </main>
  );
}
