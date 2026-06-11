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
                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Padlock symbolizing cyber security" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>"Not Secure" Warning: What Does It Mean When a Site is Not Secure?</h2>
              <p>
                Seeing a 'Not Secure' warning on your website? Learn what causes this browser error, how it destroys user trust, and exactly how to fix it with an SSL certificate.
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
