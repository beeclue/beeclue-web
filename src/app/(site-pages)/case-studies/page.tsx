"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Beeclue Tech Case Studies",
    "description": "Explore the portfolio and successful case studies by Beeclue Tech.",
    "url": "https://beeclue.com/case-studies"
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* HEADER SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "40vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Our Case Studies</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Explore how we’ve helped businesses across the GTA scale through powerful, custom digital solutions.
          </p>
        </div>
      </FadeIn>

      {/* CASE STUDIES LIST */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.caseStudyList}>
          
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/sure-shot-photobooth-rental.webp" 
                alt="Sure Shot Photobooth Website" 
                fill
                style={{ objectFit: "contain", padding: "2rem" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Sure Shot Photobooth — Web Experience</h2>
              <p>
                We partnered with Sure Shot Photobooth to elevate their digital presence with a highly interactive, modern Next.js website. We focused on delivering immersive UX animations and deep Search Console integration to capture leads and showcase their premium event experiences.
              </p>
              <div>
                <Link href="/case-studies/sure-shot-photobooth" className={styles.ctaButtonLight}>
                  Read More <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/blues-contracting-services.webp" 
                alt="Blues Contracting Services Website" 
                fill
                style={{ objectFit: "contain", padding: "2rem" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>Blues Contracting — Digital Transformation</h2>
              <p>
                We completely revitalized the web presence for Blues Contracting Services using modern Next.js technology. Through strategic UX design and rigorous technical SEO, we built a robust platform that highlights their construction expertise and builds immediate trust.
              </p>
              <div>
                <Link href="/case-studies/blues-contracting-services" className={styles.ctaButtonLight}>
                  Read More <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/gir-security.webp" 
                alt="GIR Security Website" 
                fill
                style={{ objectFit: "contain", padding: "2rem" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>G.I.R Security — Digital Overhaul</h2>
              <p>
                We partnered with Guard In Response Security Services to build a strong digital presence with a custom job portal, driving inbound leads and streamlining recruitment. This comprehensive overhaul modernized their operational workflows and established trust in the competitive GTA market.
              </p>
              <div>
                <Link href="/case-studies/gir-security" className={styles.ctaButtonLight}>
                  Read More <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListImage}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/lbf-skin-clinic.webp" 
                alt="LBF Skin Clinic Website" 
                fill
                style={{ objectFit: "contain", padding: "2rem" }}
              />
            </div>
            <div className={styles.caseStudyListContent}>
              <h2>LBF Skin Clinic — Brand & Web Experience</h2>
              <p>
                We partnered with LBF Skin Clinic to build a strong and elegant digital presence that reflects their focus on beauty, skincare, and client trust. With a custom WordPress website, new logo design, and optimized Google Business Profile, we elevated their local visibility and bookings.
              </p>
              <div>
                <Link href="/case-studies/lbf-skin-clinic" className={styles.ctaButtonLight}>
                  Read More <ArrowRight className={styles.arrow} size={20} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </FadeIn>
    </main>
  );
}
