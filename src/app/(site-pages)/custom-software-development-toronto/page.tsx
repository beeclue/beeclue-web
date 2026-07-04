"use client";

import Link from "next/link";
import styles from "@/app/page.module.css";
import { ArrowRight, LayoutTemplate, Briefcase, Globe, RefreshCcw, ShoppingCart, Search, CheckCircle2, Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";
import FaqAccordion from "@/components/FaqAccordion";

export default function CustomSoftwareDevelopmentTorontoPage() {

  const faqs = [
    { q: "How much does custom software development cost in Toronto?", a: "Custom software development costs in Toronto typically range from $20,000 to $80,000+ depending on project complexity, features, and integrations required. SaaS MVPs start around $25,000, while enterprise-grade platforms with advanced features can exceed $100,000. We provide detailed estimates after an initial discovery consultation." },
    { q: "How long does it take to develop custom software?", a: "A Minimum Viable Product (MVP) typically takes 8 to 12 weeks to develop. Full-scale enterprise platforms and complex SaaS products generally take 3 to 6 months depending on scope, number of integrations, and feature complexity. We follow agile methodology to deliver iterative milestones throughout the process." },
    { q: "What technologies do you use for software development?", a: "We use modern, battle-tested technologies including Node.js and Python for backend development, React and TypeScript for frontend interfaces, PostgreSQL and MongoDB for databases, and AWS or Google Cloud for cloud infrastructure. We select the best tech stack based on your project requirements and scalability needs." },
    { q: "Can you integrate with our existing tools and APIs?", a: "Yes. We specialize in API integrations and system connectivity. Whether you need to connect your custom software with existing CRM systems like Salesforce, ERP platforms, payment gateways, third-party APIs, or legacy systems, our team ensures seamless, real-time data synchronization across your entire technology stack." },
    { q: "Do you provide ongoing support after launch?", a: "Yes. We provide comprehensive post-launch support including bug fixes, performance monitoring, security updates, feature enhancements, and scaling assistance. Our maintenance plans ensure your software remains secure, up-to-date, and aligned with your evolving business requirements." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Custom Software Development",
        "provider": {
          "@type": "Organization",
          "name": "Beeclue Tech"
        },
        "areaServed": "Toronto"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does custom software development cost in Toronto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Custom software development costs in Toronto typically range from $20,000 to $80,000+ depending on project complexity, features, and integrations required. SaaS MVPs start around $25,000, while enterprise-grade platforms with advanced features can exceed $100,000. We provide detailed estimates after an initial discovery consultation."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to develop custom software?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Minimum Viable Product (MVP) typically takes 8 to 12 weeks to develop. Full-scale enterprise platforms and complex SaaS products generally take 3 to 6 months depending on scope, number of integrations, and feature complexity. We follow agile methodology to deliver iterative milestones throughout the process."
            }
          },
          {
            "@type": "Question",
            "name": "What technologies do you use for software development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use modern, battle-tested technologies including Node.js and Python for backend development, React and TypeScript for frontend interfaces, PostgreSQL and MongoDB for databases, and AWS or Google Cloud for cloud infrastructure. We select the best tech stack based on your project requirements and scalability needs."
            }
          },
          {
            "@type": "Question",
            "name": "Can you integrate with our existing tools and APIs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in API integrations and system connectivity. Whether you need to connect your custom software with existing CRM systems like Salesforce, ERP platforms, payment gateways, third-party APIs, or legacy systems, our team ensures seamless, real-time data synchronization across your entire technology stack."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide ongoing support after launch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide comprehensive post-launch support including bug fixes, performance monitoring, security updates, feature enhancements, and scaling assistance. Our maintenance plans ensure your software remains secure, up-to-date, and aligned with your evolving business requirements."
            }
          }
        ]
      }
    ]
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beeclue.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Custom Software Development", "item": "https://beeclue.com/custom-software-development-toronto" }
    ]
  };


  return (
    <main className={styles.main}>
      <ServiceTracker />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {/* HEADER SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Custom Software</span>
            <span className={styles.titleLine}>Development</span>
            <span className={styles.titleLine}>in Toronto</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Replace fragmented tools with powerful, unified systems. Beeclue Tech engineers highly secure, scalable custom software and SaaS platforms for Canadian enterprises, automating workflows and accelerating business growth.
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

      {/* LUXURY INTRODUCTION & CHECKLIST */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          
          <div className={styles.luxuryText}>
            <h2>Enterprise Software Engineering for Toronto Businesses</h2>
            <p>
              As businesses grow, off-the-shelf software inevitably fails. You find your team wrestling with disconnected spreadsheets, redundant data entry, and SaaS subscriptions that force you to adapt to their workflows rather than adapting to yours.
            </p>
            <p>
              Beeclue Tech is a premium custom software development agency based in Toronto. We solve complex operational bottlenecks by building proprietary software ecosystems from the ground up. By utilizing modern tech stacks like Node.js, Python, and React, we architect scalable platforms that exactly match your unique business logic.
            </p>
            <p>
              Whether you need a bespoke CRM to manage thousands of clients, an internal ERP system to streamline logistics, or are an ambitious founder launching a global SaaS product, our engineering team delivers software that acts as your competitive advantage.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Why Invest in Custom Software?</h3>
            <p>Toronto enterprises shift to custom solutions to regain control over their operations. Proprietary software allows you to:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Eliminate expensive, recurring third-party SaaS fees</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Automate repetitive administrative and data entry tasks</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Consolidate fragmented data into one centralized dashboard</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Ensure bank-grade data security and strict compliance</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Scale system resources instantly as your company grows</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* SERVICES GRID */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Custom Software Services</h2>
          <p>Full-cycle engineering from initial architecture mapping to continuous deployment.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <LayoutTemplate className={styles.serviceIcon} />
            <h3>SaaS Product Development</h3>
            <p>Bring your software product to market. We build robust, multi-tenant SaaS platforms complete with automated billing, user roles, and scalable cloud hosting infrastructure.</p>
          </div>
          <div className={styles.serviceCard}>
            <Briefcase className={styles.serviceIcon} />
            <h3>Enterprise ERP & CRM</h3>
            <p>We architect highly customized Enterprise Resource Planning and Customer Relationship Management systems designed specifically around your unique internal workflows.</p>
          </div>
          <div className={styles.serviceCard}>
            <Globe className={styles.serviceIcon} />
            <h3>API & System Integrations</h3>
            <p>Stop manual data entry. We engineer secure APIs to bridge the gap between your legacy software and modern applications, ensuring real-time, automated data synchronization.</p>
          </div>
          <div className={styles.serviceCard}>
            <RefreshCcw className={styles.serviceIcon} />
            <h3>Legacy Software Modernization</h3>
            <p>Running on outdated tech? We safely migrate legacy monolithic applications into modern, microservices-based architectures without disrupting your daily business operations.</p>
          </div>
          <div className={styles.serviceCard}>
            <ShoppingCart className={styles.serviceIcon} />
            <h3>Web Application Development</h3>
            <p>We build highly interactive, desktop-quality web applications using React and Next.js, accessible securely from any browser without requiring downloads or installations.</p>
          </div>
          <div className={styles.serviceCard}>
            <Search className={styles.serviceIcon} />
            <h3>Cloud Architecture & DevOps</h3>
            <p>We deploy and manage your software on AWS, Google Cloud, or Azure. Our DevOps pipelines ensure zero-downtime updates, automated testing, and infinite scalability.</p>
          </div>
        </div>
      </FadeIn>

      {/* RECENT TORONTO CASE STUDIES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Recent Toronto Case Studies</h2>
          <p>See how we engineer custom software for local Toronto businesses.</p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <h3>Sure Shot Photobooth</h3>
            <p>We built a custom booking and management system for Sure Shot Photobooth, a leading Toronto event company. The software automates their entire pipeline, from initial lead capture to contract signing and event scheduling, saving them hundreds of admin hours.</p>
            <Link href="/case-studies/sure-shot-photobooth" className={styles.learnMoreLink} style={{ marginTop: "1rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary-light)", textDecoration: "none" }}>Read Case Study <ArrowRight size={16} /></Link>
          </div>
          <div className={styles.serviceCard}>
            <h3>Blues Contracting Services</h3>
            <p>For Blues Contracting, a premier Toronto construction and renovation firm, we developed a centralized project management platform. This custom software tracks site progress, manages subcontractor invoices, and provides real-time updates to their clients.</p>
            <Link href="/case-studies/blues-contracting-services" className={styles.learnMoreLink} style={{ marginTop: "1rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary-light)", textDecoration: "none" }}>Read Case Study <ArrowRight size={16} /></Link>
          </div>
        </div>
      </FadeIn>

      {/* INDUSTRIES SERVED */}
      <FadeIn className={styles.baseSection} style={{ background: "rgba(0, 0, 0, 0.5)" }}>
        <div className={styles.servicesHeader}>
          <h2>Industries We Serve in Toronto</h2>
          <p>We engineer high-performance software platforms for a diverse range of local and international sectors.</p>
        </div>
        <div className={styles.industriesGrid}>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Professional Services</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Law firms, financial advisors, consulting groups, and corporate agencies.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>E-Commerce & Retail</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Online storefronts, wholesale B2B platforms, and local retail delivery.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Real Estate</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Toronto realtors, property management firms, and brokerage portals.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Healthcare Providers</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Medical clinics, dental offices, and wellness centers across the GTA.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Startups & SaaS</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>High-growth tech startups, custom software vendors, and digital platforms.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Local Services</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Skilled trades, contractors, and local Toronto small businesses.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Manufacturing & Logistics</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Industrial suppliers, shipping networks, and B2B manufacturers.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Hospitality & Travel</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Restaurants, hotels, booking systems, and local tourism portals.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Education & E-Learning</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Private schools, online course platforms, and tutoring centers.</p>
          </div>
        </div>
      </FadeIn>

      {/* VALUE PROPOSITION SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Businesses Choose Us</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Strategy Before Development</h3>
              <p>Every project begins with deep research to ensure the final product aligns perfectly with your business goals.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Performance Focused</h3>
              <p>Speed, security, and performance are at the core of our architecture. We build systems optimized for reliability.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Transparent Communication</h3>
              <p>We keep you informed throughout every stage of development, ensuring clarity and confidence in the process.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Long-Term Support</h3>
              <p>Our relationship doesn't end at launch. We provide ongoing support, improvements, and technical guidance to scale.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Agile Methodology</h3>
              <p>We adapt to changing requirements swiftly, ensuring faster time-to-market without compromising on product quality.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Data-Driven Approach</h3>
              <p>Every design and technical architecture choice is backed by analytics and user behavior to maximize your ROI.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* FAQ SECTION */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Custom Software Development FAQs</h2>
          <p>Common questions about building custom software and SaaS platforms.</p>
        </div>
        <FaqAccordion faqs={faqs} />
      </FadeIn>

      {/* GTA AREA SECTION */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Supporting Businesses Across Toronto & the GTA</h2>
        <p style={{ color: "var(--muted)", fontSize: "1.25rem", maxWidth: "800px", margin: "0 auto 2rem auto" }}>
          Beeclue Tech proudly works with businesses across:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
          {["Downtown Toronto", "North York", "Scarborough", "Etobicoke", "Mississauga", "Brampton", "Markham", "Vaughan"].map(city => (
            <span key={city} style={{ padding: "0.5rem 1.5rem", border: "1px solid var(--border)", borderRadius: "50px", color: "var(--primary-light)" }}>
              {city}
            </span>
          ))}
        </div>
        <p style={{ color: "var(--muted)", fontSize: "1.25rem", maxWidth: "800px", margin: "0 auto" }}>
          If your business operates in the Greater Toronto Area, we can help you build powerful digital platforms that support your growth.
        </p>
      </FadeIn>

      {/* TESTIMONIALS SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.testimonialsSection}`}>
        <div className={styles.testimonialsTop}>
          <h2>What Our Clients Say</h2>
          
          <div className={styles.reviewsMeta}>
            <div className={styles.ratingsBadges}>
              <div className={styles.ratingBadge}>
                <img src="/google-logo.svg" alt="Google" width="24" height="24" />
                <div className={styles.ratingInfo}>
                  <div className={styles.ratingStars}>★★★★★</div>
                  <span className={styles.ratingText}>5.0 Rating</span>
                </div>
              </div>
              <div className={styles.ratingBadge}>
                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" alt="Trustpilot 5 Stars" width="100" height="20" />
                <div className={styles.ratingInfo}>
                  <span className={styles.ratingText}>Excellent</span>
                </div>
              </div>
            </div>
            
            <a href="https://g.page/r/" target="_blank" rel="noopener noreferrer" className={styles.reviewButton}>
              Review Us on Google
            </a>
          </div>
        </div>

        <div className={styles.testimonialScroller}>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"Very professional and great communicators. The programmer did an amazing job keeping his patience. Always available to answer questions. Zero ego, friendly and respectful."</p>
            <div className={styles.clientName}>— Chirag Murabia</div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"They perfectly captured my vision and brought it to life with creativity and technical expertise. The entire process was smooth, and her attention to detail made all the difference."</p>
            <div className={styles.clientName}>— Tejbeer Bhullar</div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"Beeclue is the best as I had really a great experience. Very affordable and they listen to customer demands in detail and do everything accordingly. Highly recommend!"</p>
            <div className={styles.clientName}>— Supreet Bhatia</div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"Thank you for helping me grow my startup. Your web team is really admirable. Exactly what I wanted. Thank you for your efforts and great work!"</p>
            <div className={styles.clientName}>— Payal Sharma</div>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
