"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../../page.module.css";
import { ArrowRight, CheckCircle2, Globe, TrendingUp, Paintbrush, MapPin, Target } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function LBFSkinClinicCaseStudy() {
  return (
    <main className={styles.main}>
      {/* HEADER SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>LBF Skin Clinic</span>
            <span className={styles.titleLine}>Digital Presence</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We partnered with LBF Skin Clinic to build a strong and elegant digital presence that reflects the clinic’s focus on beauty, skincare, and client trust.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <a 
              href="https://lbfskinclinic.com?utm_source=beeclue&utm_medium=portfolio&utm_campaign=case_study" 
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
          
          <div className={styles.luxuryText}>
            <h2>About LBF Skin Clinic</h2>
            <p>
              LBF Skin Clinic operates in the growing aesthetic and skincare industry, where having a professional online presence is essential to attract and convert new clients. 
            </p>
            <p>
              The goal was to create a modern brand identity and a high-converting website that positions the clinic as a premium service provider.
            </p>
          </div>

          <div className={styles.aboutImageContainer}>
            <div style={{ borderRadius: "12px", overflow: "hidden", position: "relative", width: "100%", height: "400px" }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/lbf-skin-clinic.webp" 
                alt="LBF Skin Clinic Website Presentation" 
                fill
                style={{ objectFit: "contain", padding: "2rem" }}
              />
            </div>
          </div>

          <div className={`${styles.luxuryCard} ${styles.fullWidthCard}`}>
            <h3>What We Delivered</h3>
            <p>A comprehensive digital presence designed to attract local clients and establish premium authority.</p>
            <div className={styles.luxuryChecklistGrid}>
              <div className={styles.luxuryCheckItem}><Globe size={24} color="var(--primary-light)" /><span>Custom WordPress Website</span></div>
              <div className={styles.luxuryCheckItem}><Paintbrush size={24} color="var(--primary-light)" /><span>Brand Identity & Logo</span></div>
              <div className={styles.luxuryCheckItem}><MapPin size={24} color="var(--primary-light)" /><span>Local SEO & GBP Setup</span></div>
              <div className={styles.luxuryCheckItem}><Target size={24} color="var(--primary-light)" /><span>Conversion Optimization</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* DETAILED FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Key Transformations</h2>
          <p>How Beeclue Tech modernized LBF Skin Clinic's digital presence and local search authority.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Globe className={styles.serviceIcon} />
            <h3>Custom Website Design & Development</h3>
            <p>We designed and developed a fully responsive WordPress website tailored specifically for a skincare clinic. The design features a clean, elegant layout with easy navigation for services and a mobile-friendly user experience to turn traffic into real bookings.</p>
          </div>
          <div className={styles.serviceCard}>
            <Paintbrush className={styles.serviceIcon} />
            <h3>Logo Design & Brand Identity</h3>
            <p>We created a custom logo reflecting beauty, elegance, and premium aesthetics. This helped establish a consistent, professional, and highly recognizable brand identity across all their digital and physical platforms.</p>
          </div>
          <div className={styles.serviceCard}>
            <MapPin className={styles.serviceIcon} />
            <h3>Google Business Profile Optimization</h3>
            <p>We optimized their Google Business Profile to improve local visibility. This included strategic profile setup, service and keyword enhancements, and visual improvements to drive more inquiries and walk-in clients from Google Maps.</p>
          </div>
          <div className={styles.serviceCard}>
            <TrendingUp className={styles.serviceIcon} />
            <h3>Conversion-Focused Strategy</h3>
            <p>The entire digital presence was intentionally engineered to build immediate trust with potential clients, significantly increase appointment inquiries, and firmly position the clinic as a top-tier premium skincare provider.</p>
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
              <h3>Professional Presence</h3>
              <p>Established a strong, elegant, and professional online presence that matches the clinic's premium service quality.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Improved Local Visibility</h3>
              <p>Dramatically improved local search visibility through strategic Google Business Profile optimization.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Enhanced Brand Perception</h3>
              <p>Fostered better client trust and elevated the brand perception through cohesive, high-end aesthetics.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Increased Bookings</h3>
              <p>Created a clear path to conversion, resulting in an increased potential for direct bookings and treatment inquiries.</p>
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
