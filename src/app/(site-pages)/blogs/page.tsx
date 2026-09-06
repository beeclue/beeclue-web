"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

export default function BlogsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Beeclue Tech Blogs",
    "description": "Read the latest insights and strategies on web development, custom software, and digital growth.",
    "url": "https://beeclue.com/blogs"
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* HEADER SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "15vh", paddingBottom: "5vh", minHeight: "25vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Our Latest Insights</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px", marginBottom: "1rem" }}>
            Explore industry trends, tech strategies, and actionable advice to scale your digital presence.
          </p>
        </div>
      </FadeIn>

      {/* BLOGS LIST */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "5vh" }}>
        <div className={styles.caseStudyList}>
          {/* BLOG: CUSTOM SOFTWARE DEVELOPMENT TORONTO */}
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Software developers in Toronto writing code" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Custom Software Development in Toronto: 2026 Cost & Hiring Guide</h2>
              <p>
                A comprehensive guide to custom software and mobile app development in Toronto. Discover average pricing models, how to choose the right agency, and the differences between offshore and local development.
              </p>
              <div>
                <Link href="/custom-software-development-toronto-cost-guide" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* BLOG: HEALTHCARE WEBSITE DESIGN CANADA */}
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Healthcare professional using modern clinical software" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Healthcare Website Design in Canada: PIPEDA Compliance & Patient Growth</h2>
              <p>
                Learn how behavioral health practices and medical clinics in Canada can build PIPEDA-compliant, accessible websites that build trust and drive patient acquisition.
              </p>
              <div>
                <Link href="/healthcare-website-design-canada-pipeda" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* BLOG: ULTIMATE GUIDE WEB DESIGN AGENCY TORONTO */}
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Web design team collaborating on a strategy in Toronto" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>The Ultimate Guide to Choosing a Web Design Agency in Toronto</h2>
              <p>
                Looking for a web design agency in Toronto? Learn what to look for, the red flags to avoid, how to structure pricing, and why mobile-first design is critical for local businesses.
              </p>
              <div>
                <Link href="/ultimate-guide-choosing-web-design-agency-toronto" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* BLOG: HOW MUCH STORAGE DO I NEED FOR MY WEBSITE */}
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="High performance cloud server rack arrays illuminating web hosting storage infrastructure" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>How Much Storage Do I Need for My Website? [2026 Complete Guide &amp; Size Calculator]</h2>
              <p>
                Discover how much web hosting storage and disk space your website truly needs. Compare realistic benchmarks for brochure sites, eCommerce stores, and custom web applications, plus how to avoid paying for bloated hosting.
              </p>
              <div>
                <Link href="/how-much-storage-do-i-need-for-my-website" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* BLOG: DENTAL APPOINTMENT BOOKING TOOLS */}
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Modern dental receptionist checking patient schedules on clinic computer" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>5 Best Appointment Booking Tools for Dental Clinics: The Complete 2026 Comparison Guide</h2>
              <p>
                Discover the best appointment booking tools for dental clinics in 2026. Compare NexHealth, LocalMed, RevenueWell, Legwork, and Acuity by pricing, PMS integration (Dentrix, Eaglesoft, Open Dental), and PIPEDA compliance.
              </p>
              <div>
                <Link href="/best-dental-appointment-booking-tools" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* BLOG: MOBILE APP DEVELOPMENT TORONTO GUIDE */}
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Mobile app design wireframe and development planning session in Toronto" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>How to Choose the Best Mobile App Development Company in Toronto: A Complete Guide for Businesses</h2>
              <p>
                A comprehensive guide for businesses on choosing the best mobile app development company in Toronto. Learn about app costs, native vs. cross-platform tech, and key vetting questions.
              </p>
              <div>
                <Link href="/how-to-choose-mobile-app-development-company-toronto" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* BLOG: LAW FIRM COST PRICING GUIDE */}
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/blog.webp" 
                alt="Law firm financial breakdown and calculator representing website pricing" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>How Much Does Law Firm Website Design Cost in 2026? [Complete Pricing Breakdown]</h2>
              <p>
                A comprehensive guide on attorney website design costs in 2026. Explore pricing models for solo attorneys, boutique firms, and enterprise practices, plus ROI calculations and hidden costs.
              </p>
              <div>
                <Link href="/law-firm-website-design-cost-pricing-guide" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* BLOG: LEGAL SEO GUIDE */}
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Attorney analyzing legal SEO rankings and Google map performance" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Legal SEO for Law Firms: How Attorneys Rank #1 on Google in 2026</h2>
              <p>
                Master legal SEO for law firms in 2026. Discover how attorneys and legal practices rank #1 on Google using local map optimization, technical schema, and practice-area content strategies.
              </p>
              <div>
                <Link href="/legal-seo-guide-for-lawyers-and-attorneys" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* BLOG: PERSONAL INJURY LAW FIRM WEB DESIGN */}
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Personal injury attorney firm office representing client consultation" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Personal Injury Law Firm Website Design: Winning High-Value Case Inquiries</h2>
              <p>
                Learn how personal injury lawyers and attorneys build high-converting websites that win high-value case inquiries, showcase settlement results, and dominate local legal SEO.
              </p>
              <div>
                <Link href="/personal-injury-law-firm-website-design" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* BLOG: FAMILY LAW WEBSITE DESIGN */}
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Family law lawyer consulting with client in supportive office environment" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Family Law Website Design &amp; SEO: Building Client Trust &amp; Compassionate UX</h2>
              <p>
                Discover how family law attorneys and divorce lawyers design websites that build immediate trust, convey empathy, and convert confidential consultation inquiries.
              </p>
              <div>
                <Link href="/family-law-firm-website-design-strategy" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* BLOG: LAW FIRM WEBSITE AUDIT CHECKLIST */}
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Law firm partners inspecting technical website audit and SEO dashboard" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>The 10-Point Law Firm Website Audit Checklist Every Attorney Needs</h2>
              <p>
                Evaluate your law firm&apos;s digital presence with our 10-point audit checklist. Benchmark mobile UX, legal SEO schema, page speed, client intake forms, and conversion rates.
              </p>
              <div>
                <Link href="/law-firm-website-audit-checklist" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>


          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Law firm boardroom reflecting modern law firm website design and attorney SEO" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Law Firm Website Design & SEO: 7 Strategies to Attract High-Value Clients</h2>
              <p>
                Learn how professional law firm website design and legal SEO in Toronto & Canada empower attorneys, law practices, and boutique firms to attract high-value clients and automate intake.
              </p>
              <div>
                <Link href="/law-firm-website-design-seo-guide" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Modern commercial construction site highlighting web design for construction companies" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Web Design for Construction Companies: 7 Essential Features That Win Bids</h2>
              <p>
                Discover how specialized web design for construction companies helps general contractors, builders, and trades win commercial bids and showcase project portfolios.
              </p>
              <div>
                <Link href="/web-design-for-construction-companies-guide" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Luxury real estate property in Toronto illustrating real estate website design and IDX MLS integration" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Real Estate Website Design Toronto: Complete IDX & MLS Integration Guide</h2>
              <p>
                Discover how custom web development, TREB DDF / IDX / MLS integration, interactive mapping, and lead capture systems empower Toronto realtors to generate 30+ qualified leads monthly.
              </p>
              <div>
                <Link href="/real-estate-website-design-toronto-idx-mls-guide" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Custom website development outperforming Wix and Shopify for growing businesses" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Why Custom Web Development vs Wix & Shopify</h2>
              <p>
                Why custom website development outperforms Wix and Shopify for growing businesses. Compare performance, SEO, scalability, and long-term ROI.
              </p>
              <div>
                <Link href="/custom-website-development-beats-wix-shopify" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Business owner comparing custom website development, Wix, and Shopify options" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Custom Website vs Wix vs Shopify: Which Is Right for Your Business?</h2>
              <p>
                Compare custom website development vs Wix vs Shopify for your business in 2026. Find the right platform with our detailed comparison of cost, features, and scalability.
              </p>
              <div>
                <Link href="/custom-website-development-beats-wix-shopify" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Business owner fixing a not secure website warning by installing an SSL certificate" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>How to Fix the &ldquo;Not Secure&rdquo; Website Warning in 2026</h2>
              <p>
                Seeing a Not Secure warning on your website? Learn what causes it and exactly how to fix it with SSL certificates. Step-by-step guide for 2026.
              </p>
              <div>
                <Link href="/how-to-fix-not-secure-warning-2026" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Canadian e-commerce store owner comparing Shopify, WooCommerce, BigCommerce, and custom development options" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Best E-Commerce Platforms Canada 2026: Shopify vs WooCommerce vs BigCommerce vs Custom</h2>
              <p>
                Compare the best e-commerce platforms in Canada for 2026. Shopify vs WooCommerce vs BigCommerce vs Custom development — find the right ecommerce website builder for your Canadian business.
              </p>
              <div>
                <Link href="/shopify-vs-custom-ecommerce-canada" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Toronto business owner reviewing website design costs on a laptop" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>How Much Does a Website Cost in Toronto in 2026? A Complete Guide</h2>
              <p>
                A complete guide to website costs in Toronto for 2026. Compare pricing for brochure, e-commerce, and custom websites with ROI breakdowns and expert tips for Toronto businesses.
              </p>
              <div>
                <Link href="/how-much-does-a-website-cost-in-canada-in-2026" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Modern laptop showing WordPress dashboard on a clean desk" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>WordPress 7.0 Armstrong: Everything That&apos;s New</h2>
              <p>
                WordPress 7.0 introduces AI integration, a modernized dashboard, new blocks, and an expanded developer toolbox. Here&apos;s what you need to know.
              </p>
              <div>
                <Link href="/wordpress-7-0-armstrong-whats-new" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Modern retail point of sale terminal in a store" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Shopify POS Activity Log: Everything You Need to Know</h2>
              <p>
                Shopify introduced the POS Activity Log on June 29, 2026. Learn what it tracks, how it improves store accountability, and why it matters for your retail business.
              </p>
              <div>
                <Link href="/shopify-pos-activity-log" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2400&auto=format&fit=crop" 
                alt="Person working on a laptop, registering a free domain name" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Top 5 Free Domain Registrars</h2>
              <p>
                Looking for a free domain for personal projects or clients? Discover the top 5 free domain registrars, their pros and cons, and when to use them.
              </p>
              <div>
                <Link href="/top-5-free-domain-registrars-pros-and-cons" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                alt="Laptop displaying business growth charts and analytics on a desk" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>The Importance of a Website for Small Business Growth</h2>
              <p>
                Discover why having a professional website is the most critical asset for your small business growth. Learn about credibility, digital marketing, and scaling your brand.
              </p>
              <div>
                <Link href="/the-importance-of-a-website-for-small-businesses-growth" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Interior of a modern luxury hair salon with styling chairs and mirrors" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>How to Attract More Clients for Your Salon: A Comprehensive Digital Strategy</h2>
              <p>
                Discover actionable strategies to attract more clients to your salon or barbershop. From advanced SEO to loyalty apps, learn how to maximize your digital presence.
              </p>
              <div>
                <Link href="/how-to-attract-more-clients-for-your-salon" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Website Builder Wix Overview" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Is Wix Website Builder the Right Platform for You? Pros and Cons</h2>
              <p>
                A comprehensive guide analyzing the pros and cons of using Wix for your business website. Learn about its templates, scalability, SEO, and limitations.
              </p>
              <div>
                <Link href="/is-wix-website-builder-the-right-platform-for-you-pros-and-cons-of-using-wix" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Artificial Intelligence concept with a futuristic digital interface" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>AI Impact on Web Development</h2>
              <p>Explore how Artificial Intelligence (AI) is transforming the web development industry. From automated coding to personalized UX, learn what the future holds.</p>
              <div>
                <Link href="/the-impact-of-artificial-intelligence-on-web-development" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="A laptop showing code representing computer cookies and digital data" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>What Are Computer Cookies Guide</h2>
              <p>Discover everything you need to know about computer cookies, including how they work, the different types (first-party vs third-party), and how they affect your online privacy and SEO.</p>
              <div>
                <Link href="/what-are-cookies-a-helpful-guide-to-computer-cookies" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Barbershop chair and mirror" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>How Salons and Barbershops Can Increase Business Using Loyalty Points</h2>
              <p>Learn how barbershops and salons can use loyalty points and rewards programs to increase client retention, frequency, and revenue. Compare top apps and custom solutions.</p>
              <div>
                <Link href="/salon-barbershop-loyalty-programs-to-increase-business" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="University campus building representing school website design" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>The Best School Website Design Companies in Canada (2026 Guide)</h2>
              <p>Searching for the best school website design companies in Canada? Learn what makes a top-tier educational website and why custom development outshines templates.</p>
              <div>
                <Link href="/best-school-website-design-companies-canada" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="WeChat and Alipay Integration for Canadian Businesses: Tapping the Chinese Market" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>WeChat and Alipay Integration for Canadian Businesses: Tapping the Chinese Market</h2>
              <p>Learn how integrating WeChat Pay and Alipay into your Canadian website can unlock massive revenue from the local Chinese demographic and international tourists.</p>
              <div>
                <Link href="/wechat-integration-for-canadian-businesses" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="7 Must-Have Features for Modern School and Educational Websites" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>7 Must-Have Features for Modern School and Educational Websites</h2>
              <p>A professional school website is the foundation of digital education. Learn the 7 must-have features every school website needs to boost enrollment and engagement.</p>
              <div>
                <Link href="/must-have-features-for-modern-school-websites" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="The Real Cost to Build an E-Commerce Website in Canada" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>The Real Cost to Build an E-Commerce Website in Canada</h2>
              <p>How much does it actually cost to build an e-commerce website in Canada? We break down the real costs of Shopify, WooCommerce, and Custom Development.</p>
              <div>
                <Link href="/cost-to-build-ecommerce-website-canada" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="The Best E-Commerce Website Builder in Canada (Shopify vs. Custom)" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>The Best E-Commerce Website Builder in Canada (Shopify vs. Custom)</h2>
              <p>Looking for the best e-commerce website builder in Canada? We compare Shopify, WooCommerce, and Custom Next.js builds for Canadian businesses.</p>
              <div>
                <Link href="/best-ecommerce-website-builder-canada" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="HTTP vs. HTTPS: Why SSL is Mandatory for SEO and Google Rankings" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>HTTP vs. HTTPS: Why SSL is Mandatory for SEO and Google Rankings</h2>
              <p>Google actively penalizes websites without SSL. Learn the technical differences between HTTP and HTTPS, and why encryption is now mandatory for high SEO rankings.</p>
              <div>
                <Link href="/http-vs-https-why-ssl-is-mandatory-for-seo" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="How to Fix the 'Not Secure' Website Warning: A Step-by-Step Guide" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>How to Fix the &ldquo;Not Secure&rdquo; Website Warning: A Step-by-Step Guide</h2>
              <p>Seeing a dangerous &ldquo;Not Secure&rdquo; warning on your site? Learn exactly how to fix it by installing an SSL certificate to protect your customers and SEO.</p>
              <div>
                <Link href="/how-to-fix-not-secure-website-warning" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Collaborative tech team working together" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>5 Critical Tips for Choosing the Right Website Development Company</h2>
              <p>
                Choosing a web development agency is a major decision. Learn the top 5 expert tips for finding a reliable, high-performance tech partner for your business.
              </p>
              <div>
                <Link href="/5-tips-for-choosing-the-right-website-development-company" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Modern hair salon interior with luxury aesthetic" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Salon Website Development: The Ultimate Guide</h2>
              <p>
                Transform your beauty business with expert salon website development. Learn how custom web design and online booking systems can drive massive client growth.
              </p>
              <div>
                <Link href="/salon-website-development" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Creative Brand Identity and Website Design Process" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>How to Design a Website That Reflects Your Brand Identity</h2>
              <p>
                Learn the essential strategies to design a website that perfectly aligns with and amplifies your brand identity, ensuring you stand out in a crowded digital landscape.
              </p>
              <div>
                <Link href="/design-a-website-that-reflects-your-brand-identity" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Modern Dental Clinic Interior and Equipment" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Website Development for Dental Clinics: The Ultimate Guide</h2>
              <p>
                Learn why a professional website is crucial for your dental clinic. Discover strategies for patient acquisition, SEO, and creating a modern digital presence.
              </p>
              <div>
                <Link href="/website-development-for-dental-clinics" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Padlock symbolizing cyber security" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>&ldquo;Not Secure&rdquo; Warning: What Does It Mean When a Site is Not Secure?</h2>
              <p>
                Seeing a &lsquo;Not Secure&rsquo; warning on your website? Learn what causes this browser error, how it destroys user trust, and exactly how to fix it with an SSL certificate.
              </p>
              <div>
                <Link href="/not-secure-warning-what-does-it-mean-when-a-site-is-not-secure" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="School Website Educational Hub" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Why is a School Website So Important? The Digital Foundation of Education</h2>
              <p>
                Discover why a well-designed school website is essential for modern education. Learn how it improves communication, boosts enrollment, and streamlines administration.
              </p>
              <div>
                <Link href="/why-is-school-website-so-important" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="CMS Web Development Guide" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>What is CMS Web Development? The Ultimate Guide for Businesses</h2>
              <p>
                Learn everything about CMS Web Development. Discover how Content Management Systems like WordPress and Shopify empower businesses to control their digital presence without writing code.
              </p>
              <div>
                <Link href="/what-is-cms-web-development" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>


          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/blog/data-analytics-the-key-to-making-better-business-decisions/hero.png" 
                alt="Data Analytics Blog Hero" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Data Analytics: The Key to Making Better Business Decisions</h2>
              <p>
                Discover how data analytics transforms raw information into actionable business strategies. Learn about predictive analytics, AEO optimization, and driving growth.
              </p>
              <div>
                <Link href="/data-analytics-the-key-to-making-better-business-decisions" className={styles.ctaButtonLight}>
                  Read Article <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Website Development Offer" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Affordable Website Design – Only $19/Month</h2>
              <p>
                Looking to get your business online without spending thousands? We offer professional website design, hosting, and maintenance for just $19/month. Perfect for small businesses looking to scale.
              </p>
              <div>
                <Link href="/19-month-website-development-offer" className={styles.ctaButtonLight}>
                  Read Offer & Terms <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </FadeIn>
    </main>
  );
}
