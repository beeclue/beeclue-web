"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  DollarSign,
  Globe,
  Code,
  Layout,
  Server,
  BarChart3,
  TrendingUp,
  ShoppingCart,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function WebsiteDevelopmentCostTorontoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Website Development",
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
            "name": "Website Development Cost Toronto",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does website development cost in Toronto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Website development costs in Toronto range from $2,000 for a basic brochure site to $100,000+ for a complex web application. A professional small business website typically costs $5,000-$15,000. E-commerce sites range from $8,000-$50,000 depending on platform and features.",
            },
          },
          {
            "@type": "Question",
            "name": "Why do Toronto developers charge more than offshore teams?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Toronto developers charge $75-$200/hour vs $25-$75/hour offshore because of local market expertise, timezone alignment, no communication barriers, Canadian business compliance knowledge, and legal recourse. The quality difference typically results in better long-term ROI despite higher upfront costs.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a website in Toronto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A basic website takes 2-4 weeks. A professional business website takes 4-8 weeks. E-commerce sites take 6-12 weeks. Complex web applications can take 3-6 months. Timelines depend on design complexity, content readiness, and number of revisions.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the cheapest way to build a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cheapest options are DIY website builders like Wix or Squarespace ($12-$40/month) or WordPress.com. However, these limit customization, often look unprofessional, and can cost more in the long run when you outgrow them. For serious businesses, investing $5,000-$15,000 in a professional build typically delivers better ROI.",
            },
          },
          {
            "@type": "Question",
            "name": "Should I hire a freelancer or an agency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Freelancers ($50-$150/hour) are good for simple projects with clear requirements. Agencies ($100-$250/hour) are better for complex projects requiring design, development, SEO, and strategy. Agencies provide accountability, team coverage, and ongoing support. Freelancers may lack capacity for large projects or ongoing maintenance.",
            },
          },
          {
            "@type": "Question",
            "name": "What ongoing costs should I budget for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Budget for hosting ($10-$100/month), domain renewal ($15-$20/year), SSL certificate ($0-$200/year), maintenance ($100-$500/month), content updates, and marketing. Most businesses spend 10-20% of their initial build cost annually on website maintenance and improvements.",
            },
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      q: "How much does website development cost in Toronto?",
      a: "Website development costs in Toronto range from $2,000 for a basic brochure site to $100,000+ for a complex web application. A professional small business website typically costs $5,000-$15,000. E-commerce sites range from $8,000-$50,000 depending on platform and features.",
    },
    {
      q: "Why do Toronto developers charge more than offshore teams?",
      a: "Toronto developers charge $75-$200/hour vs $25-$75/hour offshore because of local market expertise, timezone alignment, no communication barriers, Canadian business compliance knowledge, and legal recourse. The quality difference typically results in better long-term ROI despite higher upfront costs.",
    },
    {
      q: "How long does it take to build a website in Toronto?",
      a: "A basic website takes 2-4 weeks. A professional business website takes 4-8 weeks. E-commerce sites take 6-12 weeks. Complex web applications can take 3-6 months. Timelines depend on design complexity, content readiness, and number of revisions.",
    },
    {
      q: "What is the cheapest way to build a website?",
      a: "The cheapest options are DIY website builders like Wix or Squarespace ($12-$40/month) or WordPress.com. However, these limit customization, often look unprofessional, and can cost more in the long run when you outgrow them.",
    },
    {
      q: "Should I hire a freelancer or an agency?",
      a: "Freelancers ($50-$150/hour) are good for simple projects with clear requirements. Agencies ($100-$250/hour) are better for complex projects requiring design, development, SEO, and strategy. Agencies provide accountability, team coverage, and ongoing support.",
    },
    {
      q: "What ongoing costs should I budget for?",
      a: "Budget for hosting ($10-$100/month), domain renewal ($15-$20/year), SSL certificate ($0-$200/year), maintenance ($100-$500/month), content updates, and marketing. Most businesses spend 10-20% of their initial build cost annually on website maintenance.",
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
              Website Development
            </span>
            <span className={styles.titleLine}>Cost in Toronto</span>
          </h1>
          <p
            className={styles.subtitle}
            style={{ fontSize: "1.25rem", maxWidth: "800px" }}
          >
            How much does website development cost in Toronto? Our detailed
            2026 pricing guide breaks down costs by project type, from simple
            brochure sites to complex web applications, so you can budget
            accurately and invest wisely.
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
            <h2>Understanding Website Development Costs in Toronto</h2>
            <p>
              Toronto is home to one of North America&apos;s most vibrant
              business ecosystems. From startups in the King West corridor to
              established enterprises in the Financial District, every business
              needs a professional web presence. But with so many options
              available — from DIY builders to offshore agencies to local
              Toronto firms — understanding what you&apos;re actually paying
              for can be confusing.
            </p>
            <p>
              At Beeclue Tech, we&apos;ve seen the full spectrum of website
              investments. We&apos;ve helped businesses recover from expensive
              offshore disasters, migrate from outgrown DIY platforms, and build
              professional websites from scratch. This guide shares transparent,
              Toronto-specific pricing so you can make informed decisions about
              your website investment.
            </p>
            <p>
              The cost of your website directly impacts your business
              potential. A $2,000 template site and a $20,000 custom build
              aren&apos;t just different in price — they&apos;re different in
              conversion rates, search visibility, loading speed, and
              scalability. Understanding the breakdown helps you invest where it
              matters and avoid the trap of choosing the cheapest option that
              costs you customers.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>What Affects Website Development Cost</h3>
            <p>Toronto businesses should consider these primary cost factors:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Project type: brochure site, business website, or web app
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
                  Number of pages and content volume
                </span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Custom functionality: forms, calculators, portals, APIs
                </span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Who you hire: freelancer, agency, or offshore team
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* PRICING BY PROJECT TYPE */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Website Development Cost by Project Type</h2>
          <p>
            Here&apos;s what Toronto businesses typically pay for different
            types of websites in 2026.
          </p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Layout className={styles.serviceIcon} />
            <h3>Basic Brochure Website</h3>
            <p>
              <strong>Cost: $2,000 - $5,000</strong>
              <br />
              Timeline: 2-4 weeks
              <br /><br />
              5-10 pages. Home, about, services, contact. Template-based design
              with basic customization. Contact form and Google Maps. Good for
              small businesses that need a simple online presence.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Globe className={styles.serviceIcon} />
            <h3>Professional Business Website</h3>
            <p>
              <strong>Cost: $5,000 - $20,000</strong>
              <br />
              Timeline: 4-8 weeks
              <br /><br />
              10-30 pages. Custom design, CMS integration, blog, team pages,
              case studies. SEO optimization, analytics setup, responsive
              design. Ideal for service businesses and professional firms.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <ShoppingCart className={styles.serviceIcon} />
            <h3>E-Commerce Website</h3>
            <p>
              <strong>Cost: $8,000 - $50,000</strong>
              <br />
              Timeline: 6-12 weeks
              <br /><br />
              Product catalog, shopping cart, payment processing, inventory
              management. Shopify, WooCommerce, or custom platform. Includes
              product photography guidance and shipping integration.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Code className={styles.serviceIcon} />
            <h3>Custom Web Application</h3>
            <p>
              <strong>Cost: $25,000 - $100,000+</strong>
              <br />
              Timeline: 3-6 months
              <br /><br />
              SaaS platforms, custom portals, booking systems, dashboards.
              Custom database design, API development, user authentication,
              and complex business logic. Built with React, Next.js, or
              similar frameworks.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* COST COMPARISON */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Who Should Build Your Website?</h2>
          <p>
            Different providers offer different value propositions. Here&apos;s
            how the options compare.
          </p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <DollarSign className={styles.valueIcon} />
            <div>
              <h3>DIY Website Builders</h3>
              <p>
                <strong>Cost: $12-$40/month</strong>
                <br />
                Platforms like Wix, Squarespace, and WordPress.com. Lowest
                upfront cost but limited customization, generic designs, and
                SEO limitations. Good for hobby projects, not serious
                businesses. You lose ownership of your content and design when
                you stop paying.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <DollarSign className={styles.valueIcon} />
            <div>
              <h3>Offshore Development Teams</h3>
              <p>
                <strong>Cost: $25-$75/hour</strong>
                <br />
                Developers in India, Philippines, or Eastern Europe. Lower
                hourly rates but risks include communication barriers, timezone
                misalignment, code quality issues, and no legal recourse.
                Projects frequently run over budget and timeline.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <DollarSign className={styles.valueIcon} />
            <div>
              <h3>Toronto Freelancers</h3>
              <p>
                <strong>Cost: $50-$150/hour</strong>
                <br />
                Independent developers and designers. Good for simple projects
                with clear requirements. Limited capacity for large projects.
                May lack SEO, strategy, or ongoing support capabilities. No
                backup if they become unavailable.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <DollarSign className={styles.valueIcon} />
            <div>
              <h3>Toronto Web Agencies</h3>
              <p>
                <strong>Cost: $100-$250/hour</strong>
                <br />
                Full-service firms with design, development, SEO, and strategy
                teams. Higher upfront cost but includes project management,
                quality assurance, ongoing support, and accountability. Best
                value for serious businesses that need results, not just a
                website.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ONGOING COSTS */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Ongoing Website Costs to Budget For</h2>
          <p>
            The build cost is just the start. Here are the monthly and annual
            expenses every Toronto business should plan for.
          </p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <Server className={styles.valueIcon} />
            <div>
              <h3>Hosting & Domain</h3>
              <p>
                Quality hosting costs $10-$100/month depending on traffic and
                requirements. Domain renewal is $15-$20/year. Don&apos;t skimp
                on hosting — cheap hosting causes slow page loads and downtime
                that costs you more in lost revenue.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <BarChart3 className={styles.valueIcon} />
            <div>
              <h3>Maintenance & Updates</h3>
              <p>
                Budget 10-20% of your initial build cost annually. This covers
                security patches, software updates, performance monitoring,
                bug fixes, and small feature additions. A well-maintained
                website stays fast, secure, and competitive.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <TrendingUp className={styles.valueIcon} />
            <div>
              <h3>Marketing & SEO</h3>
              <p>
                A website without traffic is an expensive brochure. Budget
                $500-$5,000+/month for SEO, Google Ads, social media, and
                content marketing. Marketing is the ongoing investment that
                turns your website into a revenue-generating asset.
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
            Discover our other services and pricing guides to make informed
            decisions about your web investment.
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
              that drives results.
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
              Shopify, WooCommerce, and custom solution breakdowns with hidden
              cost analysis.
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
            Common questions about website development costs in Toronto.
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

      {/* GTA AREA */}
      <FadeIn
        className={styles.baseSection}
        style={{ textAlign: "center", borderTop: "1px solid var(--border)" }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Website Development Across Toronto & the GTA
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1.25rem",
            maxWidth: "800px",
            margin: "0 auto 2rem auto",
          }}
        >
          Beeclue Tech proudly serves businesses across:
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
          If your business operates in the Greater Toronto Area, we can build
          a website that generates real business results.
        </p>
      </FadeIn>

      {/* CTA SECTION */}
      <FadeIn className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Ready to Build Your Website?</h2>
          <p className={styles.footerSub}>
            Get a transparent, detailed quote for your website project. Our
            Toronto team will help you choose the right approach and budget to
            maximize your return on investment.
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
