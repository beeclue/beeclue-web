"use client";

import Link from "next/link";
import styles from "@/app/page.module.css";
import { ArrowRight, LayoutTemplate, Briefcase, Globe, RefreshCcw, ShoppingCart, Search, CheckCircle2, Check, BarChart, TrendingUp, Target, Users } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function SeoServicesTorontoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SEO Services",
    "provider": {
      "@type": "Organization",
      "name": "Beeclue Tech"
    },
    "areaServed": "Toronto"
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* HEADER SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>SEO & Digital</span>
            <span className={styles.titleLine}>Visibility</span>
            <span className={styles.titleLine}>in Toronto</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Drive highly qualified organic traffic that converts. We build scalable SEO strategies for Canadian businesses, ensuring your brand dominates local Toronto search rankings and captures international market share.
          </p>
          <div className={styles.heroRatingContainer}>
            <Link href="/contact" className={styles.ctaButton}>
              Get a Free Audit <ArrowRight className={styles.arrow} />
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
            <h2>Dominate Search Rankings in the Greater Toronto Area</h2>
            <p>
              Having a beautiful website is only the first step. If your potential customers cannot find you when searching for your exact services, you are continuously losing revenue to competitors with inferior products but better visibility.
            </p>
            <p>
              At Beeclue Tech, we treat Search Engine Optimization (SEO) as an exact science. We don't rely on outdated keyword stuffing or spammy backlinks. Instead, we engineer technical, content-driven, and highly analytical organic growth strategies that align directly with Google's core algorithms and user intent.
            </p>
            <p>
              Whether you are a local Toronto contractor trying to secure the top spot on Google Maps, or an enterprise B2B SaaS company aiming for national reach, our dedicated SEO experts deliver measurable, compounding return on investment.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Why Invest in Professional SEO?</h3>
            <p>Organic search remains the highest-converting digital channel. A robust SEO strategy allows you to:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Generate predictable, high-quality inbound leads</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Reduce dependency on expensive paid advertising (PPC)</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Capture local market share in Toronto and the GTA</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Build long-term brand authority and industry trust</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Achieve a compounding ROI that grows year over year</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* SERVICES GRID */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our SEO Capabilities</h2>
          <p>Comprehensive optimization across technical, on-page, and off-page vectors.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Search className={styles.serviceIcon} />
            <h3>Technical SEO</h3>
            <p>We optimize your site's codebase, ensuring Google can crawl and index it flawlessly. We fix schema markup, core web vitals, mobile usability, and deeply ingrained architectural issues.</p>
          </div>
          <div className={styles.serviceCard}>
            <Target className={styles.serviceIcon} />
            <h3>Local Toronto SEO</h3>
            <p>Dominate your immediate geographic area. We optimize your Google Business Profile and local citations to ensure you capture high-intent customers searching for services "near me".</p>
          </div>
          <div className={styles.serviceCard}>
            <TrendingUp className={styles.serviceIcon} />
            <h3>On-Page Optimization</h3>
            <p>We systematically map high-value keywords to specific pages, optimizing meta tags, header structures, and internal linking to align perfectly with search intent.</p>
          </div>
          <div className={styles.serviceCard}>
            <BarChart className={styles.serviceIcon} />
            <h3>Content Strategy</h3>
            <p>We develop data-driven content silos and authority-building articles that answer your customers' exact questions, pulling them into your marketing funnel organically.</p>
          </div>
          <div className={styles.serviceCard}>
            <Globe className={styles.serviceIcon} />
            <h3>E-Commerce SEO</h3>
            <p>Scale your online retail store. We optimize vast product catalogs, category structures, and faceted navigation systems for platforms like Shopify and WooCommerce.</p>
          </div>
          <div className={styles.serviceCard}>
            <Users className={styles.serviceIcon} />
            <h3>Digital PR & Backlinks</h3>
            <p>We earn high-authority, contextual backlinks through legitimate digital PR and outreach, drastically increasing your domain's overall trust and ranking power.</p>
          </div>
        </div>
      </FadeIn>

      {/* INDUSTRIES SERVED */}
      <FadeIn className={styles.baseSection} style={{ background: "rgba(0, 0, 0, 0.5)" }}>
        <div className={styles.servicesHeader}>
          <h2>Industries We Rank in Toronto</h2>
          <p>We deliver top-tier organic visibility for diverse businesses.</p>
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
