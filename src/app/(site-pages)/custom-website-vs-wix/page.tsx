"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "@/app/page.module.css";
import { ArrowRight, Check, X, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { trackComparisonView, trackCTAClick } from "@/lib/analytics";

const comparisonRows = [
  { feature: "Page Load Speed", custom: "Under 1 second", wix: "2–4 seconds", shopify: "2–3 seconds", winner: "custom" },
  { feature: "SEO Control", custom: "Full control over every tag", wix: "Limited SEO options", shopify: "Basic SEO, limited URLs", winner: "custom" },
  { feature: "Design Freedom", custom: "100% custom, no limits", wix: "Template-based, constrained", shopify: "Theme-based, limited", winner: "custom" },
  { feature: "Scalability", custom: "Scales infinitely", wix: "Hits ceiling fast", shopify: "Good, but locked to platform", winner: "custom" },
  { feature: "Ongoing Cost", custom: "Hosting only ($5–20/mo)", wix: "$16–45/month forever", shopify: "$39–399/month forever", winner: "custom" },
  { feature: "Ownership", custom: "You own 100% of the code", wix: "Locked to Wix platform", shopify: "Locked to Shopify platform", winner: "custom" },
  { feature: "Custom Features", custom: "Anything is possible", wix: "Limited to Wix apps", shopify: "Limited to Shopify apps", winner: "custom" },
  { feature: "Maintenance", custom: "We handle it for you", wix: "DIY or hire someone", shopify: "DIY or hire someone", winner: "custom" },
];

const faqs = [
  {
    q: "When should I choose Wix or Shopify over a custom website?",
    a: "If you need a simple site fast and have a tight budget, Wix works for basic brochure sites. If you're selling products and don't need custom features, Shopify is a solid starting point. But if you need speed, SEO performance, custom functionality, or long-term scalability — custom is the way to go.",
  },
  {
    q: "How much does a custom website cost compared to Wix or Shopify?",
    a: "Wix costs $16–45/month. Shopify costs $39–399/month. A custom website is a one-time investment starting at $2,500 — and after year one, you're only paying $5–20/month for hosting. No monthly platform fees, no transaction cuts.",
  },
  {
    q: "Can you rebuild my existing Wix or Shopify site as a custom platform?",
    a: "Absolutely. We regularly migrate businesses from Wix, Shopify, and WordPress to custom-built platforms. We preserve your SEO rankings, improve performance, and give you full control.",
  },
  {
    q: "How long does a custom website take to build?",
    a: "Most projects are completed in 4–8 weeks depending on scope. A simple 5-page site takes 2–3 weeks. A complex SaaS or e-commerce platform takes 8–12 weeks.",
  },
  {
    q: "What if I need changes after the site launches?",
    a: "We include 30–90 days of post-launch support depending on your package. After that, we offer affordable monthly retainers for ongoing updates, improvements, and technical support.",
  },
];

export default function CustomVsWixPage() {
  useEffect(() => { trackComparisonView(); }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Custom Website vs Wix vs Shopify: Which Is Right for Your Business?",
    "description": "Compare custom websites with Wix and Shopify. Learn which option gives you better speed, SEO, control, and long-term value for your Toronto business.",
    "url": "https://beeclue.com/custom-website-vs-wix",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            <span className={styles.titleLinePrimary}>Custom Website</span>
            <span className={styles.titleLine}>vs. Wix vs. Shopify</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Which option gives you better speed, SEO, control, and long-term value for your Toronto business? Here&apos;s an honest comparison.
          </p>
          <Link href="/contact" className={styles.ctaButton} onClick={() => trackCTAClick("recommendation", "comparison_hero")}>
            Get a Free Recommendation <ArrowRight className={styles.arrow} />
          </Link>
        </div>
      </FadeIn>

      {/* QUICK ANSWER */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>The Short Answer</h2>
          <p>Choose based on where your business is headed — not just where it is today.</p>
        </div>
        <div className={styles.scroller} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          <div className={styles.serviceCard} style={{ padding: "2.5rem" }}>
            <h3 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Choose Wix If...</h3>
            <ul style={{ color: "var(--muted)", lineHeight: 1.8, paddingLeft: "1.25rem" }}>
              <li>You need a basic brochure site this week</li>
              <li>Budget is under $500 total</li>
              <li>You don&apos;t care about SEO or speed</li>
              <li>Your business won&apos;t grow beyond a few pages</li>
            </ul>
          </div>
          <div className={styles.serviceCard} style={{ padding: "2.5rem" }}>
            <h3 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Choose Shopify If...</h3>
            <ul style={{ color: "var(--muted)", lineHeight: 1.8, paddingLeft: "1.25rem" }}>
              <li>You&apos;re selling physical products online</li>
              <li>You need inventory + payments out of the box</li>
              <li>You&apos;re okay with monthly fees and transaction cuts</li>
              <li>You don&apos;t need custom checkout flows</li>
            </ul>
          </div>
          <div className={styles.serviceCard} style={{ padding: "2.5rem", border: "1px solid var(--primary)" }}>
            <h3 style={{ color: "var(--primary-light)", marginBottom: "1rem" }}>Choose Custom If...</h3>
            <ul style={{ color: "var(--muted)", lineHeight: 1.8, paddingLeft: "1.25rem" }}>
              <li>You want maximum speed and SEO performance</li>
              <li>You need custom features or integrations</li>
              <li>You&apos;re tired of paying monthly platform fees</li>
              <li>You want to own your code and scale freely</li>
            </ul>
          </div>
        </div>
      </FadeIn>

      {/* COMPARISON TABLE */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Detailed Comparison</h2>
          <p>How each option stacks up across the things that matter most.</p>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "700px" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--border)" }}>
                <th style={{ textAlign: "left", padding: "1rem", color: "var(--muted)", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Feature</th>
                <th style={{ textAlign: "center", padding: "1rem", color: "var(--primary-light)", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Custom Website</th>
                <th style={{ textAlign: "center", padding: "1rem", color: "var(--muted)", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Wix</th>
                <th style={{ textAlign: "center", padding: "1rem", color: "var(--muted)", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Shopify</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "1rem", color: "var(--foreground)", fontWeight: 500 }}>{row.feature}</td>
                  <td style={{ padding: "1rem", textAlign: "center" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary-light)" }}>
                      <Check size={16} /> {row.custom}
                    </span>
                  </td>
                  <td style={{ padding: "1rem", textAlign: "center", color: "var(--muted)" }}>
                    {row.wix}
                  </td>
                  <td style={{ padding: "1rem", textAlign: "center", color: "var(--muted)" }}>
                    {row.shopify}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>

      {/* WHY CUSTOM */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Toronto Businesses Choose Custom</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Speed = Customers</h3>
              <p>A 1-second delay costs you 7% in conversions. Custom sites load in under 1 second. Wix and Shopify take 2–4 seconds.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>SEO That Actually Works</h3>
              <p>Full control over every meta tag, URL structure, schema markup, and page speed signal. No platform limitations holding you back.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Own Your Investment</h3>
              <p>No monthly platform fees. No transaction cuts. You own 100% of the code. After year one, hosting costs $5–20/month.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`} style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "1rem" }}>Not Sure Which Is Right for You?</h2>
        <p style={{ color: "var(--muted)", fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto 2.5rem auto" }}>
          We&apos;ll review your business goals and give you an honest recommendation — no pressure, no obligation.
        </p>
        <Link href="/contact" className={styles.ctaButton} onClick={() => trackCTAClick("recommendation", "comparison_bottom")}>
          Get Your Free Recommendation <ArrowRight className={styles.arrow} />
        </Link>
      </FadeIn>

      {/* FAQ */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div style={{ maxWidth: "800px" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: i < faqs.length - 1 ? "1px solid var(--border)" : "none" }}>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", color: "var(--foreground)" }}>{faq.q}</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </main>
  );
}
