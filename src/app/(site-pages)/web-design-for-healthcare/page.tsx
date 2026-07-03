"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, Heart, CalendarCheck, Shield, Search, Smartphone, Video, Star, TrendingUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function WebDesignForHealthcarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design for Healthcare",
    "provider": {
      "@type": "Organization",
      "name": "Beeclue Tech"
    },
    "description": "Professional web design and development services for healthcare providers, medical clinics, physiotherapy centers, and wellness businesses in Canada. Patient-centric, HIPAA-conscious websites.",
    "areaServed": "Canada"
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beeclue.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Web Design for Healthcare", "item": "https://beeclue.com/web-design-for-healthcare" }
    ]
  };

  return (
    <main className={styles.main}>
      <ServiceTracker />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* HERO SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Web Design</span>
            <span className={styles.titleLine}>for Healthcare</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We build patient-centric, trust-building websites for medical clinics, physiotherapy centers, wellness providers, and healthcare organizations. From appointment booking to telehealth integration, we engineer sites that care.
          </p>
          <div className={styles.heroRatingContainer}>
            <Link href="/contact" className={styles.ctaButton}>
              Get a Free Consultation <ArrowRight className={styles.arrow} />
            </Link>
            <div className={styles.heroRatingBadge}>
              <div style={{ color: "#fbbf24", fontSize: "1.25rem", letterSpacing: "2px" }}>★★★★★</div>
              <span style={{ color: "var(--muted)", fontSize: "0.875rem" }}>5.0 from 30+ reviews</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* HERO IMAGE */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div style={{ position: "relative", width: "100%", height: "500px", borderRadius: "24px", overflow: "hidden" }}>
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Modern healthcare facility with clean professional design"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </FadeIn>

      {/* WHY YOUR HEALTHCARE PRACTICE NEEDS A WEBSITE */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Why Your Healthcare Practice Needs a Professional Website</h2>
            <p>
              Patients research healthcare providers online before booking an appointment. If your clinic&apos;s website is slow, outdated, or difficult to navigate, potential patients will choose a competitor who makes a better first impression.
            </p>
            <p>
              Healthcare websites face unique challenges: they must convey professionalism and trust, handle sensitive patient information with care, and serve diverse audiences — from elderly patients to tech-savvy millennials — all while maintaining strict compliance standards.
            </p>
            <p>
              At Beeclue Tech, we build websites for the healthcare industry that balance patient experience with operational efficiency. From solo practitioners to multi-location clinics, we engineer digital platforms that support your practice&apos;s growth and your patients&apos; well-being.
            </p>
          </div>
          <div className={styles.luxuryCard}>
            <h3>What a Great Healthcare Website Delivers</h3>
            <p>A high-performing healthcare website provides:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Instant trust and credibility for new patients</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>24/7 online appointment booking that fills your schedule</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Telehealth and virtual visit integration</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Patient education resources and health information</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Local SEO dominance for &quot;clinic near me&quot; searches</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ESSENTIAL FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Essential Features for Healthcare Websites</h2>
          <p>We build every healthcare website with the features that matter most to providers and their patients.</p>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Online Appointment Booking</h3>
            <p>Patients expect to book appointments from their phone at any hour. We integrate seamless booking systems that sync with your practice management software — whether it&apos;s OSCAR, Accuro, or a custom solution — reducing no-shows and phone tag.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CalendarCheck size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Telehealth & Virtual Visit Integration</h3>
            <p>Virtual care is here to stay. We integrate telehealth platforms directly into your website, allowing patients to book and join virtual visits seamlessly — extending your reach beyond your physical location.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Video size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Patient Portals & Forms</h3>
            <p>Reduce administrative burden with secure patient portals. We build HIPAA-conscious integrations for intake forms, appointment history, prescription refills, and secure messaging - giving patients self-service tools while freeing up your front desk.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Shield size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Healthcare Provider Profiles</h3>
            <p>Patients choose doctors, not just clinics. We create detailed profiles for each practitioner — with professional photos, specialties, education, certifications, and personal bios — helping patients feel connected before their first visit.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Heart size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Local SEO for Healthcare</h3>
            <p>When someone searches &quot;clinic near me&quot; or &quot;physiotherapist Toronto,&quot; your practice needs to appear. We implement technical SEO, healthcare schema markup, and Google Business Profile optimization to dominate local health searches.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Search size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Mobile-First Accessible Design</h3>
            <p>Healthcare websites must be accessible to everyone — including elderly patients and those with disabilities. We design mobile-first, WCAG-compliant experiences that work flawlessly on every device and meet accessibility standards.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Smartphone size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE BEECLUE */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Healthcare Providers Choose Beeclue Tech</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Healthcare Industry Understanding</h3>
              <p>We understand patient privacy, compliance requirements, and the professional aesthetics that healthcare demands.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Patient-Centric Design</h3>
              <p>Every design decision prioritizes the patient experience — from easy booking to clear service information to accessible navigation.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Local SEO Mastery</h3>
              <p>We dominate &quot;near me&quot; healthcare searches. Technical SEO, schema markup, and Google Business Profile optimization included.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Clean, Trustworthy Design</h3>
              <p>Healthcare demands trust. Our designs are clean, modern, and professional — reflecting the quality of care you provide.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Practice Management Integration</h3>
              <p>We integrate with popular healthcare software for seamless appointment syncing, patient form automation, and data flow.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Ongoing Support & Compliance</h3>
              <p>Launch is just the beginning. We provide continued support, content updates, and compliance maintenance to keep your site performing.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* MORE RESOURCES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Explore Our Industry Solutions</h2>
          <p>We build specialized websites across multiple industries. See how we can help your sector.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
          <Link href="/web-design-for-dental-clinics" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>Web Design for Dental Clinics</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Patient-ready dental websites with appointment booking, smile galleries, and HIPAA-conscious design.</p>
              </div>
              <span className={styles.learnMoreLink} style={{ marginTop: "1rem" }}>Learn More <ArrowRight size={16} /></span>
            </div>
          </Link>
          <Link href="/web-design-for-salons" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>Web Design for Salons</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Booking-ready websites for salons and beauty professionals with online scheduling and portfolio showcases.</p>
              </div>
              <span className={styles.learnMoreLink} style={{ marginTop: "1rem" }}>Learn More <ArrowRight size={16} /></span>
            </div>
          </Link>
          <Link href="/web-design-for-restaurants" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>Web Design for Restaurants</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Mouth-watering restaurant websites with online ordering, menu displays, and reservation systems.</p>
              </div>
              <span className={styles.learnMoreLink} style={{ marginTop: "1rem" }}>Learn More <ArrowRight size={16} /></span>
            </div>
          </Link>
        </div>
      </FadeIn>

      {/* CTA SECTION */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingBottom: "10rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <TrendingUp size={48} color="var(--primary-light)" style={{ marginBottom: "2rem" }} />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>Ready to Grow Your Practice?</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Let&apos;s build a healthcare website that attracts new patients, streamlines your operations, and reflects the quality of care you provide. Get a free consultation today.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className={styles.ctaButton}>
              Schedule a Free Strategy Call <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/web-design-for-dental-clinics" className={styles.ctaButton}>
              See Dental-Specific Solutions <ArrowRight className={styles.arrow} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
