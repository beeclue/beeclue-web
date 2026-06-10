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
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "40vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Our Latest Insights</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Explore industry trends, tech strategies, and actionable advice to scale your digital presence.
          </p>
        </div>
      </FadeIn>

      {/* BLOGS LIST */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.caseStudyList}>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage} style={{ position: "relative" }}>
              <Image 
                src="https://images.unsplash.com/photo-1547658719-da2b511591bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
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

      {/* FOOTER CTA */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Let's Build Something Powerful</h2>
          <p className={styles.footerSub}>Start your project today and build digital solutions designed for growth.</p>
          <div className={styles.footerActions}>
            <Link href="/contact" className={styles.ctaButtonLight}>
              Start a Project
            </Link>
          </div>
          <div className={styles.footerContact}>
            <a href="mailto:hello@beeclue.com" className={styles.emailLink}>
              hello@beeclue.com
            </a>
            <a href="tel:+16479476253" className={styles.emailLink}>
              +1 (647) 947-6253
            </a>
            <p className={styles.footerLocation}>36 Carslake Crescent, Toronto, ON M1J 2A7</p>
            <div className={styles.legalLinks}>
              <Link href="/blogs">Blogs</Link>
              <span>|</span>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
