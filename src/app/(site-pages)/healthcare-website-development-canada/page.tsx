"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  Shield,
  Lock,
  CalendarCheck,
  Users,
  FileText,
  Heart,
  ChevronDown,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function HealthcareWebsiteDevelopmentCanadaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How much does healthcare website development cost in Canada?", a: "Healthcare website development costs in Canada range from $10,000 for a basic medical practice website to $100,000+ for a full-featured patient portal with telehealth, EHR integration, and custom functionality. The investment depends on features, compliance requirements, and integration complexity." },
    { q: "Do you build HIPAA-compliant healthcare websites?", a: "Yes. We build healthcare websites that meet HIPAA compliance standards, including encrypted data transmission, secure patient forms, access controls, and audit logging. We work with your compliance team to ensure every aspect of the website meets regulatory requirements." },
    { q: "Can you integrate with electronic health record (EHR) systems?", a: "Yes. We integrate healthcare websites with major EHR/EMR systems including Epic, Cerner, Allscripts, and others via HL7 FHIR APIs. Our integrations enable seamless patient data flow between your website and clinical systems." },
    { q: "Do you build patient portals?", a: "Yes. We develop secure patient portals that allow patients to view medical records, book appointments, communicate with providers, access test results, manage prescriptions, and pay bills — all from a single, HIPAA-compliant dashboard." },
    { q: "How long does it take to build a healthcare website?", a: "A standard medical practice website takes 6 to 10 weeks. Projects involving patient portals, EHR integration, or telehealth features typically take 12 to 20 weeks. We provide a detailed timeline after the initial discovery and compliance review." },
    { q: "Will my healthcare website be optimized for patient acquisition?", a: "Absolutely. Every healthcare website we build includes local SEO, optimized service pages, online appointment booking, patient testimonials, and conversion-focused design elements that help attract new patients and make it easy for them to book appointments." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Healthcare Website Development",
        "provider": {
          "@type": "Organization",
          "name": "Beeclue Tech",
        },
        "areaServed": "Canada",
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
            "name": "Healthcare Website Development Canada",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does healthcare website development cost in Canada?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Healthcare website development costs in Canada range from $10,000 for a basic medical practice website to $100,000+ for a full-featured patient portal with telehealth, EHR integration, and custom functionality. The investment depends on features, compliance requirements, and integration complexity.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you build HIPAA-compliant healthcare websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build healthcare websites that meet HIPAA compliance standards, including encrypted data transmission, secure patient forms, access controls, and audit logging. We work with your compliance team to ensure every aspect of the website meets regulatory requirements.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you integrate with electronic health record (EHR) systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We integrate healthcare websites with major EHR/EMR systems including Epic, Cerner, Allscripts, and others via HL7 FHIR APIs. Our integrations enable seamless patient data flow between your website and clinical systems.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you build patient portals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We develop secure patient portals that allow patients to view medical records, book appointments, communicate with providers, access test results, manage prescriptions, and pay bills — all from a single, HIPAA-compliant dashboard.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a healthcare website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard medical practice website takes 6 to 10 weeks. Projects involving patient portals, EHR integration, or telehealth features typically take 12 to 20 weeks. We provide a detailed timeline after the initial discovery and compliance review.",
            },
          },
          {
            "@type": "Question",
            "name": "Will my healthcare website be optimized for patient acquisition?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Every healthcare website we build includes local SEO, optimized service pages, online appointment booking, patient testimonials, and conversion-focused design elements that help attract new patients and make it easy for them to book appointments.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className={styles.main}>
      <ServiceTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Healthcare Website</span>
            <span className={styles.titleLine}>Development in Canada</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Beeclue Tech builds HIPAA-compliant healthcare websites for Canadian
            medical practices, clinics, and health organizations. From patient
            portals and appointment booking to EHR integration, we create secure,
            high-performance digital experiences for patients and providers.
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

      {/* INTRODUCTION */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Professional Healthcare Website Development for Canadian Practices</h2>
            <p>
              In today&apos;s digital-first healthcare landscape, your website is the
              front door to your practice. Patients research providers online, book
              appointments through websites, and expect secure digital communication
              with their healthcare team. A generic template simply won&apos;t meet
              these expectations.
            </p>
            <p>
              At Beeclue Tech, a leading healthcare website development agency in
              Canada, we build digital experiences that serve both patients and
              providers. Our healthcare websites are designed for trust — from
              HIPAA-compliant data handling and secure patient portals to
              intuitive appointment booking and seamless EHR integration. Every
              solution is engineered to protect patient privacy while delivering
              an exceptional digital experience.
            </p>
            <p>
              We understand the unique regulatory requirements of Canadian healthcare
              — including PIPEDA, provincial privacy laws, and PHIPA. Our team works
              closely with your compliance officers to ensure every aspect of your
              website meets the highest standards of data security and patient
              confidentiality.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Why Healthcare Organizations Need Professional Web Development</h3>
            <p>Canadian healthcare organizations benefit from professional web development:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Attract new patients with a professional, trustworthy online presence</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Reduce administrative burden with online appointment booking</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Improve patient satisfaction with secure patient portals</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Ensure compliance with HIPAA, PIPEDA, and provincial regulations</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Streamline operations through EHR/EMR system integration</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* SERVICES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Healthcare Website Development Services</h2>
          <p>Comprehensive healthcare web solutions built for security, compliance, and patient experience.</p>
        </div>

        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Heart className={styles.serviceIcon} />
            <h3>Medical Practice Websites</h3>
            <p>We build professional medical practice websites that establish trust, showcase your team and services, and make it easy for patients to find and book appointments. Every site is designed with healthcare-specific UX patterns that guide patients from discovery to booking.</p>
          </div>
          <div className={styles.serviceCard}>
            <Users className={styles.serviceIcon} />
            <h3>Patient Portal Development</h3>
            <p>We develop secure, HIPAA-compliant patient portals that give patients access to their medical records, test results, prescription information, and secure messaging with providers. Portals are designed for simplicity — patients of all ages can navigate them with ease.</p>
          </div>
          <div className={styles.serviceCard}>
            <CalendarCheck className={styles.serviceIcon} />
            <h3>Appointment Booking Systems</h3>
            <p>Reduce no-shows and administrative overhead with integrated online appointment booking. We build booking systems that sync with your EHR, manage provider schedules, send automated reminders, and handle patient intake forms — all from your website.</p>
          </div>
          <div className={styles.serviceCard}>
            <Shield className={styles.serviceIcon} />
            <h3>HIPAA-Compliant Development</h3>
            <p>Every healthcare website we build meets HIPAA and Canadian privacy standards. We implement encrypted data transmission, secure form handling, access controls, audit logging, and BAAs with all third-party services to ensure complete regulatory compliance.</p>
          </div>
          <div className={styles.serviceCard}>
            <FileText className={styles.serviceIcon} />
            <h3>EHR/EMR Integration</h3>
            <p>We integrate your website with major electronic health record systems including Epic, Cerner, Allscripts, and others via HL7 FHIR APIs. Enable seamless patient data flow between your website and clinical systems for a unified digital experience.</p>
          </div>
          <div className={styles.serviceCard}>
            <Lock className={styles.serviceIcon} />
            <h3>Telehealth Platform Development</h3>
            <p>Offer virtual care with a custom telehealth platform integrated into your website. We build HIPAA-compliant video consultations, virtual waiting rooms, and remote patient monitoring features that extend your care beyond the clinic walls.</p>
          </div>
        </div>
      </FadeIn>

      {/* PROCESS */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Healthcare Development Process</h2>
          <p>A compliance-first process that delivers secure, high-performance healthcare websites.</p>
        </div>
        <div className={styles.processTimeline}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <h3>Discovery & Compliance Review</h3>
            <p>We begin with a thorough understanding of your practice, your patients, and your regulatory requirements. This includes a compliance review with your team to map HIPAA, PIPEDA, and provincial requirements to specific website features and data handling practices.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <h3>Architecture & UX Design</h3>
            <p>Our team designs the technical architecture and user experience with compliance as a core constraint. We create wireframes for patient-facing pages, provider dashboards, and patient portals that are intuitive for all users while meeting strict security requirements.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <h3>Secure Development & Integration</h3>
            <p>We develop your healthcare website with security built into every layer — encrypted data storage, secure API endpoints, HIPAA-compliant form handling, and access controls. We integrate with your EHR/EMR system and conduct security audits throughout development.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <h3>Compliance Testing & Launch</h3>
            <p>Before launch, we conduct comprehensive security testing, HIPAA compliance audits, and penetration testing. We verify all compliance controls are functioning correctly and provide documentation for your compliance team. Post-launch, we provide ongoing monitoring and support.</p>
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE US */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Choose Beeclue Tech for Healthcare Web Development</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Healthcare Compliance Expertise</h3>
              <p>We understand the regulatory landscape — HIPAA, PIPEDA, PHIPA, and provincial health privacy laws. Our team has deep experience building compliant solutions and working with healthcare compliance officers to ensure every requirement is met.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Patient-First Design</h3>
              <p>Healthcare websites must serve patients of all ages and technical abilities. We design with accessibility and simplicity at the forefront, ensuring every patient — regardless of age, device, or ability — can navigate your site and access the care they need.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Security-First Architecture</h3>
              <p>Security isn&apos;t an afterthought — it&apos;s the foundation. We build healthcare websites with encrypted data transmission, secure authentication, access controls, audit logging, and regular security assessments to protect sensitive patient information.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>EHR Integration Experience</h3>
              <p>We have experience integrating with major EHR/EMR systems including Epic, Cerner, and Allscripts via HL7 FHIR APIs. Our integrations enable seamless data flow between your website and clinical systems without compromising security.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Canadian Healthcare Understanding</h3>
              <p>We serve Canadian healthcare organizations and understand the unique requirements of the Canadian market — from provincial health regulations to patient expectations for digital healthcare experiences in Canada.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Ongoing Support & Compliance Monitoring</h3>
              <p>Healthcare regulations evolve, and so should your website. We provide ongoing maintenance, security monitoring, compliance updates, and feature development to keep your website secure, compliant, and performing at its best.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* RELATED SERVICES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Related Services</h2>
          <p>Explore our other services that complement your healthcare website.</p>
        </div>
        <div className={styles.scroller}>
          <Link href="/web-design-for-healthcare" className={styles.serviceCard} style={{ textDecoration: "none", color: "inherit" }}>
            <h3>Web Design for Healthcare</h3>
            <p>Specialized web design services for healthcare organizations, including medical practices, clinics, hospitals, and health technology companies.</p>
            <span style={{ color: "var(--primary-light)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
          <Link href="/ecommerce-development-toronto" className={styles.serviceCard} style={{ textDecoration: "none", color: "inherit" }}>
            <h3>E-Commerce Development Toronto</h3>
            <p>Full-service e-commerce development for businesses looking to sell products or services online with secure, high-converting storefronts.</p>
            <span style={{ color: "var(--primary-light)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </FadeIn>

      {/* FAQ SECTION */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Frequently Asked Questions</h2>
          <p>Common questions about our healthcare website development services in Canada.</p>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.q}
                <ChevronDown
                  size={20}
                  className={`${styles.faqChevron} ${openFaq === i ? styles.faqChevronOpen : ""}`}
                />
              </button>
              <div className={`${styles.faqAnswer} ${openFaq === i ? styles.faqAnswerOpen : ""}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* CTA SECTION */}
      <FadeIn className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Ready to Build Your Healthcare Website?</h2>
          <p className={styles.footerSub}>
            Let&apos;s discuss your practice. Our Canadian healthcare web development
            team will create a secure, compliant, patient-friendly website that
            grows your practice and improves patient experience.
          </p>
          <div className={styles.footerActions}>
            <Link href="/contact" className={styles.ctaButtonLight}>
              Get Started Today <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
