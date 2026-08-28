import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, Globe, BookOpen, Code2, Search, Heart } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Book Author & Non-Profit Website Design Case Study: New Angkor Wat | Beeclue",
  description: "Read our non-profit website design case study for author David P. Cross's New Angkor Wat. Learn how we build custom book promotion and charity platforms.",
  alternates: {
    canonical: "https://beeclue.com/case-studies/new-angkor-wat",
  },
};

export default function NewAngkorWatCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CaseStudy",
        "name": "New Angkor Wat — Digital Platform",
        "description": "Comprehensive digital platform promoting book and charitable organization",
        "datePublished": "2024-01-15",
        "dateModified": "2024-06-20",
        "image": "https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/newangkorwat.webp",
        "author": {
          "@type": "Organization",
          "name": "Beeclue Tech"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Beeclue Tech"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com" },
          { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://beeclue.com/case-studies" },
          { "@type": "ListItem", "position": 3, "name": "New Angkor Wat — Digital Platform" }
        ]
      }
    ]
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* HEADER SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>New Angkor Wat</span>
            <span className={styles.titleLine}>Digital Platform</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We partnered with author and public defender David P. Cross to build a comprehensive digital platform that promotes his book &quot;For Who? For What?&quot; and the New Angkor Wat organization.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <a 
              href="https://newangkorwat.org?utm_source=beeclue&utm_medium=portfolio&utm_campaign=case_study" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
            >
              Visit Website <Globe size={20} />
            </a>
            <Link href="/contact" className={styles.ctaButton}>
              Start Your Project <ArrowRight className={styles.arrow} />
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* OVERVIEW SECTION */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          
          <div className={`${styles.luxuryText} ${styles.aboutSection}`}>
            <h2>About New Angkor Wat & David P. Cross</h2>
            <p>
              David P. Cross is a Public Defender, Author, and the Founder of New Angkor Wat. He needed a modern, elegant digital presence to promote his new book &quot;For Who? For What? Learning from The Bhagavad Gita&quot; and to showcase his life journey, prison programs, and seminars.
            </p>
            <p>
              We built a highly engaging, high-performance web platform using Next.js. The focus was on delivering a premium user experience with seamless animations, clear calls-to-action for book sales, and beautifully structured content to highlight his charitable initiatives like Christmas Karma.
            </p>
          </div>

          <div className={styles.aboutImageContainer}>
            <div style={{ borderRadius: "12px", overflow: "hidden", position: "relative", width: "100%", height: "400px" }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/newangkorwat.webp" 
                alt="New Angkor Wat Website Presentation" 
                fill
                style={{ objectFit: "contain", padding: "2rem" }}
              />
            </div>
          </div>

          <div className={`${styles.luxuryCard} ${styles.fullWidthCard}`}>
            <h3>What We Delivered</h3>
            <p>A professional, highly-engaging web platform built to promote his book and charitable initiatives.</p>
            <div className={styles.luxuryChecklistGrid}>
              <div className={styles.luxuryCheckItem}><Code2 size={24} color="var(--primary-light)" /><span>Custom Next.js Architecture</span></div>
              <div className={styles.luxuryCheckItem}><BookOpen size={24} color="var(--primary-light)" /><span>Interactive Book Promotion</span></div>
              <div className={styles.luxuryCheckItem}><Search size={24} color="var(--primary-light)" /><span>Technical SEO Integration</span></div>
              <div className={styles.luxuryCheckItem}><Heart size={24} color="var(--primary-light)" /><span>Charity & Programs Showcase</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* DETAILED FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Key Transformations</h2>
          <p>How we brought David P. Cross&apos;s vision to life online.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Code2 className={styles.serviceIcon} />
            <h3>Modern Next.js Architecture</h3>
            <p>We built the platform using Next.js and Tailwind CSS, prioritizing exceptional load speeds and technical reliability. The site includes smooth framer-motion animations that create an immersive, premium browsing experience.</p>
          </div>
          <div className={styles.serviceCard}>
            <BookOpen className={styles.serviceIcon} />
            <h3>Book Promotion Integration</h3>
            <p>Strategic placements and beautiful UI elements were designed specifically to promote &quot;For Who? For What?&quot;, driving users seamlessly toward Amazon and Barnes &amp; Noble purchase pages.</p>
          </div>
          <div className={styles.serviceCard}>
            <Search className={styles.serviceIcon} />
            <h3>SEO & Content Structure</h3>
            <p>We implemented a robust content structure with proper semantic HTML, optimized metadata, and schema markup to ensure David&apos;s story and initiatives are easily discoverable on search engines.</p>
          </div>
          <div className={styles.serviceCard}>
            <Heart className={styles.serviceIcon} />
            <h3>Initiatives Showcase</h3>
            <p>Dedicated sections for Prison Programs, Seminars, and the Christmas Karma initiative were crafted to beautifully highlight his impactful work and connect with the community.</p>
          </div>
        </div>
      </FadeIn>

      {/* IMPACT SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>The Impact</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Elevated Personal Brand</h3>
              <p>The premium, modern design instantly elevated David P. Cross&apos;s personal brand, matching the profound wisdom of his book.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Increased Discoverability</h3>
              <p>With an optimized structure, the website serves as a powerful hub for organic discovery of his book and charitable programs.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Frictionless Experience</h3>
              <p>The Next.js framework provided a buttery-smooth, instantaneous browsing experience, keeping readers engaged with the content.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Unified Digital Presence</h3>
              <p>Consolidated all of his initiatives—from writing to public speaking and charity work—under one cohesive, beautifully designed roof.</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
