"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, Target, Lightbulb, Users, BarChart3, Rocket } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function AboutUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Beeclue Tech",
    "description": "Beeclue Tech is an elite digital development agency helping businesses build powerful websites, scalable software systems, and mobile applications.",
    "url": "https://beeclue.com/about-us",
    "publisher": {
      "@type": "Organization",
      "name": "Beeclue Tech"
    }
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HEADER SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Crafting Digital</span>
            <span className={styles.titleLine}>Solutions That</span>
            <span className={styles.titleLine}>Inspire</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Beeclue Tech is an elite digital development agency helping businesses build powerful websites, scalable software systems, and mobile applications. We partner with companies across Toronto to create technology solutions that support long-term growth and innovation.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <Link href="/contact" className={styles.ctaButton}>
              Get a Free Consultation <ArrowRight className={styles.arrow} />
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* LUXURY INTRODUCTION */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          
          <div className={styles.luxuryText}>
            <h2>Your Partner in Web Design & Development</h2>
            <p>
              Beeclue Tech was founded in 2017 by a group of students from Guru Nanak Dev University with a simple idea — help small businesses build a stronger digital presence.
            </p>
            <p>
              At the time, many local businesses struggled to establish themselves online or lacked access to reliable technical expertise. The founders began developing websites and digital solutions for small businesses, helping them reach customers online and improve their operations.
            </p>
            <p>
              What started as a small initiative quickly grew as more businesses began looking for reliable technology partners. Over time, Beeclue Tech expanded its services to include custom software development, mobile applications, and advanced digital platforms designed to support modern businesses.
            </p>
            <p>
              Today, Beeclue Tech works with startups, entrepreneurs, and established companies to build scalable digital solutions that improve efficiency, automate workflows, and support sustainable business growth.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Our Impact by the Numbers</h3>
            <p>We are proud of the tangible results we've delivered for businesses.</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><BarChart3 size={24} color="var(--primary-light)" /><span><strong>7+</strong> Years of Experience</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span><strong>50+</strong> Projects Delivered</span></div>
              <div className={styles.luxuryCheckItem}><Rocket size={24} color="var(--primary-light)" /><span><strong>40%+</strong> Conversion Boost</span></div>
              <div className={styles.luxuryCheckItem}><Users size={24} color="var(--primary-light)" /><span><strong>10+</strong> Industry Expertise</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* MISSION & VISION */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Core Philosophy</h2>
          <p>The principles that drive our engineering and design.</p>
        </div>
        
        <div className={styles.scroller} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))" }}>
          <div className={styles.serviceCard} style={{ padding: "3rem" }}>
            <Target className={styles.serviceIcon} size={48} />
            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Our Mission</h3>
            <p style={{ fontSize: "1.1rem" }}>
              Our mission is to help businesses grow by building reliable digital solutions that simplify operations and improve customer experiences.
            </p>
            <p style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
              At Beeclue Tech, we believe technology should empower businesses rather than complicate their processes. By combining thoughtful planning with modern development practices, we create platforms that help companies operate more efficiently and expand their digital reach. We aim to be a trusted technology partner for businesses looking to innovate, automate, and scale their operations.
            </p>
          </div>
          
          <div className={styles.serviceCard} style={{ padding: "3rem" }}>
            <Lightbulb className={styles.serviceIcon} size={48} />
            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Our Vision</h3>
            <p style={{ fontSize: "1.1rem" }}>
              Our vision is to build a future where businesses of all sizes can leverage technology to unlock new opportunities and drive sustainable growth.
            </p>
            <p style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
              Beeclue Tech strives to become a leading digital development partner known for delivering high-quality software, innovative solutions, and long-term value for businesses. As technology continues to evolve, our goal is to help companies stay competitive by providing scalable digital infrastructure that supports their ambitions.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* PRODUCTS SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.featuredSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Products Built by Beeclue</h2>
          <p>Proprietary software and applications engineered in-house by our development team.</p>
        </div>
        <div className={styles.featuredGrid}>
          <Link href="/products/monexa" className={styles.featuredCard}>
            <div className={styles.featuredImagePlaceholder} style={{ padding: 0, position: 'relative' }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/monexa.png"
                alt="Monexa Logo"
                fill
                style={{ objectFit: 'contain', padding: '3rem' }}
              />
            </div>
            <div className={styles.featuredContent}>
              <h3>Monexa — Personal Finance Manager</h3>
              <p>The simple, beautiful, and powerful way to track expenses, manage budgets, and achieve your financial goals effortlessly.</p>
              <div className={styles.techTags}>
                <span>Finance</span><span>AI Insights</span><span>Budgeting</span>
              </div>
            </div>
          </Link>
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="24" height="24" />
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
