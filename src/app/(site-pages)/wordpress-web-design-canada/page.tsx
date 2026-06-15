"use client";

import Link from "next/link";
import styles from "@/app/page.module.css";
import { ArrowRight, LayoutTemplate, Briefcase, Globe, RefreshCcw, ShoppingCart, Search, CheckCircle2, Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function WordPressWebDesignCanadaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "WordPress Design Services",
    "provider": {
      "@type": "Organization",
      "name": "Beeclue Tech"
    },
    "areaServed": "Canada"
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* HEADER SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>WordPress Web</span>
            <span className={styles.titleLine}>Design & Development</span>
            <span className={styles.titleLine}>in Canada</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Beeclue Tech engineers high-converting, scalable, and ultra-fast WordPress websites for businesses across Canada. We build bespoke WP themes and architectures designed to give you total control over your content while dominating organic search rankings.
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
            <h2>Expert WordPress Development Services in Canada</h2>
            <p>
              WordPress powers over 40% of the internet for a reason. When engineered correctly, it is one of the most powerful, flexible, and SEO-friendly platforms available. However, relying on bloated, off-the-shelf templates can cripple your site's speed and security.
            </p>
            <p>
              At Beeclue Tech, an elite WordPress agency serving Toronto and all of Canada, we specialize in custom WordPress development. We build highly optimized, secure, and lightning-fast digital experiences. By stripping away unnecessary bloat and writing clean, scalable code, we deliver a WP site that performs exceptionally well.
            </p>
            <p>
              Whether you need a custom theme developed from scratch, seamless plugin integrations, or a complex headless WordPress architecture, our Canadian developers are ready to elevate your content management system.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Why Your Business Needs Custom WordPress</h3>
            <p>Canadian enterprises choose custom WordPress development to maintain control and performance. A custom WP site helps you:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Manage content effortlessly without touching code</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Scale features easily with thousands of integrations</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Achieve top tier SEO rankings with clean architecture</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Guarantee enterprise-grade security protocols</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Own your platform outright, avoiding SaaS lock-in</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* SERVICES GRID */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our WordPress Development Services</h2>
          <p>Comprehensive WordPress solutions tailored to scale your Canadian business.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <LayoutTemplate className={styles.serviceIcon} />
            <h3>Custom Theme Development</h3>
            <p>We build fully bespoke, lightweight WordPress themes from the ground up, guaranteeing your site matches your exact branding while running flawlessly across all devices.</p>
          </div>
          <div className={styles.serviceCard}>
            <Briefcase className={styles.serviceIcon} />
            <h3>Plugin Integration & Customization</h3>
            <p>Need specialized functionality? We securely integrate third-party APIs and develop custom plugins to extend the core capabilities of your WordPress platform.</p>
          </div>
          <div className={styles.serviceCard}>
            <Globe className={styles.serviceIcon} />
            <h3>Headless WordPress</h3>
            <p>Decouple your backend from the frontend. We utilize WordPress as a powerful headless CMS paired with a blazing-fast Next.js frontend for ultimate performance.</p>
          </div>
          <div className={styles.serviceCard}>
            <RefreshCcw className={styles.serviceIcon} />
            <h3>WP Migration & Upgrades</h3>
            <p>Seamlessly migrate your existing website to WordPress without losing SEO rankings, or safely upgrade your legacy WP version to the latest secure release.</p>
          </div>
          <div className={styles.serviceCard}>
            <ShoppingCart className={styles.serviceIcon} />
            <h3>WooCommerce Development</h3>
            <p>Transform WordPress into a scalable ecommerce powerhouse. We build custom WooCommerce stores optimized for high-volume transactions and fast checkouts.</p>
          </div>
          <div className={styles.serviceCard}>
            <Search className={styles.serviceIcon} />
            <h3>Speed & Security Optimization</h3>
            <p>We aggressively audit and optimize sluggish WordPress installations, implementing advanced caching, CDN integrations, and hardening security to block vulnerabilities.</p>
          </div>
        </div>
      </FadeIn>

      {/* INDUSTRIES SERVED */}
      <FadeIn className={styles.baseSection} style={{ background: "rgba(0, 0, 0, 0.5)" }}>
        <div className={styles.servicesHeader}>
          <h2>Industries We Serve Across Canada</h2>
          <p>We engineer high-performance WordPress platforms for a diverse range of local and international sectors.</p>
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
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Medical clinics, dental offices, and wellness centers across Canada.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Startups & Tech</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>High-growth tech startups, software vendors, and digital publishers.</p>
          </div>
          <div style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)", marginBottom: "0.5rem" }}>Local Services</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Skilled trades, contractors, and local Canadian small businesses.</p>
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
