"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, CalendarCheck, Shield, Smile, Search, Smartphone, Users, Star, TrendingUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function WebDesignForDentalClinicsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design for Dental Clinics",
    "provider": {
      "@type": "Organization",
      "name": "Beeclue Tech"
    },
    "description": "Professional web design and development services for dental clinics, dentists, and oral healthcare providers in Canada. Patient portals, appointment booking, and HIPAA-compliant websites.",
    "areaServed": "Canada"
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beeclue.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Web Design for Dental Clinics", "item": "https://beeclue.com/web-design-for-dental-clinics" }
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
            <span className={styles.titleLine}>for Dental Clinics</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We build trust-building, patient-ready websites for dental clinics and oral healthcare providers. From online appointment booking to smile galleries, we engineer sites that convert visitors into patients.
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
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Modern dental clinic interior with advanced equipment"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </FadeIn>

      {/* WHY YOUR DENTAL CLINIC NEEDS A PROFESSIONAL WEBSITE */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Why Your Dental Clinic Needs a Professional Website</h2>
            <p>
              When someone needs a dentist, they don&apos;t flip through a phone book — they search Google. If your dental clinic doesn&apos;t have a professional, fast, and trustworthy website, potential patients will choose the competitor down the street who does.
            </p>
            <p>
              A dental website is more than a digital brochure. It&apos;s your 24/7 receptionist, your marketing department, and your first impression all rolled into one. Patients judge your practice within seconds of landing on your site — and that judgment directly impacts whether they pick up the phone or click away.
            </p>
            <p>
              At Beeclue Tech, we understand the unique needs of dental practices. We build websites that handle everything from new patient acquisition to existing patient self-service, all while maintaining the professional, clean aesthetic that healthcare demands.
            </p>
          </div>
          <div className={styles.luxuryCard}>
            <h3>What a Great Dental Website Delivers</h3>
            <p>A high-performing dental website provides:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Instant credibility for new patient acquisition</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>24/7 online appointment booking that fills your schedule</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Smile galleries and before/after showcases</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Insurance and payment information transparency</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Local SEO dominance for &quot;dentist near me&quot; searches</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ESSENTIAL FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Essential Features for Dental Websites</h2>
          <p>We build every dental website with the features that matter most to practices and their patients.</p>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Online Appointment Booking</h3>
            <p>Patients expect to book appointments from their phone at any hour. We integrate seamless booking systems that sync with your practice management software — whether it&apos;s Dentrix, Open Dental, or a custom solution — so your front desk can focus on patients, not phone calls.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CalendarCheck size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Smile Gallery & Before/After Showcases</h3>
            <p>Nothing builds trust like visual proof. We design stunning smile galleries that let you showcase your best transformations — from whitening results to full mouth rehabilitations — organized by procedure type for easy browsing.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Smile size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Patient Portal Integration</h3>
            <p>Modern dental practices need secure patient portals for forms, records, and communication. We build HIPAA-conscious portal integrations that let patients complete intake forms, view treatment plans, and message your team — all before they step foot in your office.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Shield size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Local SEO for &quot;Dentist Near Me&quot;</h3>
            <p>When someone searches &quot;dentist near me&quot; or &quot;dental clinic in Toronto,&quot; your practice needs to appear at the top. We implement technical SEO, Google Business Profile optimization, and local schema markup to dominate local dental search results.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Search size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Mobile-First Responsive Design</h3>
            <p>Over 60% of dental website visits come from mobile devices — often parents booking for their families on the go. We design mobile-first experiences that look professional and function flawlessly on every screen size.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Smartphone size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Team & Doctor Profiles</h3>
            <p>Patients choose dentists, not just practices. We create detailed profiles for each dentist and hygienist — with professional photos, specialties, education, and bios — helping patients feel connected before their first visit.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Users size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE BEECLUE */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Dental Clinics Choose Beeclue Tech</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Healthcare Industry Understanding</h3>
              <p>We understand the compliance requirements, patient privacy concerns, and professional aesthetics that dental websites demand.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Patient Acquisition Focus</h3>
              <p>Every design decision is made to convert visitors into booked appointments. Strategic CTAs, clear service pages, and frictionless booking.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Local SEO Mastery</h3>
              <p>We don&apos;t just build sites — we engineer them to rank. Technical SEO, schema markup, and Google Business Profile optimization included.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Clean, Professional Design</h3>
              <p>Healthcare demands trust. Our designs are clean, modern, and professional — reflecting the quality of care your practice provides.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Practice Management Integration</h3>
              <p>We integrate with popular dental software systems for seamless appointment syncing, patient form automation, and data flow.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Ongoing Support & Updates</h3>
              <p>Launch is just the beginning. We provide continued support, content updates, and optimization to keep your site performing.</p>
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
          <Link href="/web-design-for-salons" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>Web Design for Salons</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Booking-ready websites for salons, barbershops, and beauty professionals with online scheduling and portfolio showcases.</p>
              </div>
              <span className={styles.learnMoreLink} style={{ marginTop: "1rem" }}>Learn More <ArrowRight size={16} /></span>
            </div>
          </Link>
          <Link href="/web-design-for-healthcare" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>Web Design for Healthcare</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Websites for medical clinics, physiotherapy, wellness centers, and healthcare providers with patient-centric design.</p>
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
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>Ready to Attract More Patients?</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Let&apos;s build a dental website that turns visitors into booked appointments. Get a free consultation and discover how a professional website can grow your practice.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className={styles.ctaButton}>
              Schedule a Free Strategy Call <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/website-development-for-dental-clinics" className={styles.ctaButton}>
              Read Our Dental Guide <ArrowRight className={styles.arrow} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
