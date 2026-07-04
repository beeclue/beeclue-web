"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, Building2, Map, Search, Smartphone, Eye, Users, Star, TrendingUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function WebDesignForRealEstatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design for Real Estate",
    "provider": {
      "@type": "Organization",
      "name": "Beeclue Tech"
    },
    "description": "Professional web design and development services for realtors, real estate agencies, and property management companies in Canada. MLS-integrated listings, virtual tours, and lead capture systems.",
    "areaServed": "Canada"
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beeclue.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Web Design for Real Estate", "item": "https://beeclue.com/web-design-for-real-estate" }
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
            <span className={styles.titleLine}>for Real Estate</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We build property-selling, lead-capturing websites for realtors, real estate agencies, and property management companies. MLS integration, virtual tours, and search-driven design that closes deals.
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
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Modern luxury home with beautiful real estate photography"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </FadeIn>

      {/* WHY YOUR REAL ESTATE BUSINESS NEEDS A WEBSITE */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Why Your Real Estate Business Needs a Professional Website</h2>
            <p>
              In real estate, first impressions are everything — and that includes digital ones. When a buyer or seller is choosing an agent, they research online first. If your website is slow, outdated, or looks like a template, they&apos;ll move on to an agent who looks more professional.
            </p>
            <p>
              A real estate website isn&apos;t just a listing portal. It&apos;s your lead generation machine, your virtual open house, and your 24/7 availability tool all in one. From MLS integration to virtual tour showcases, your website needs to do the heavy lifting so you can focus on closing deals.
            </p>
            <p>
              At Beeclue Tech, we build websites specifically for the real estate industry. We understand that property search is visual, location-driven, and time-sensitive — and we engineer every site to capture leads and convert searches into showings.
            </p>
          </div>
          <div className={styles.luxuryCard}>
            <h3>What a Great Real Estate Website Delivers</h3>
            <p>A high-performing real estate website provides:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>MLS-integrated property search with real-time listings</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Lead capture forms that convert browsers into clients</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Virtual tour and video showcase capabilities</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Local SEO dominance for &quot;realtor near me&quot; searches</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Agent profiles that build personal trust and connection</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ESSENTIAL FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Essential Features for Real Estate Websites</h2>
          <p>We build every real estate website with the features that matter most to agents and their clients.</p>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>MLS-Integrated Property Search</h3>
            <p>Buyers want to search properties by location, price, bedrooms, and more. We integrate MLS feeds that sync in real-time, giving visitors access to current listings with advanced filters — all hosted on your domain, not a third-party portal.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Building2 size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Virtual Tours & Video Showcases</h3>
            <p>In today&apos;s market, buyers expect virtual tours before scheduling a viewing. We integrate 360-degree tours, video walkthroughs, and interactive floor plans that give buyers an immersive experience from the comfort of their couch.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Eye size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Lead Capture & CRM Integration</h3>
            <p>Every property view is a potential client. We build strategic lead capture points — saved searches, property alerts, valuation requests — that funnel prospects directly into your CRM for follow-up and nurturing.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Users size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Local SEO for &quot;Realtor Near Me&quot;</h3>
            <p>When someone searches &quot;realtor in Toronto&quot; or &quot;homes for sale near me,&quot; your site needs to appear. We implement technical SEO, neighborhood page strategies, and local schema markup to dominate real estate search results.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Search size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Neighborhood & Area Guides</h3>
            <p>Buyers don&apos;t just buy a home — they buy a neighborhood. We create detailed area guides with school ratings, amenities, transit info, and market data that position you as the local expert and drive organic traffic.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Map size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Mobile-First for Home Buyers</h3>
            <p>Over 70% of property searches start on mobile. Buyers browse listings during commutes, lunch breaks, and late nights. We design mobile-first experiences that make property browsing effortless on any device.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Smartphone size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE BEECLUE */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Real Estate Professionals Choose Beeclue Tech</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Real Estate Industry Expertise</h3>
              <p>We understand MLS integration, property search UX, and the visual-first approach that real estate demands.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Lead-Generating Architecture</h3>
              <p>Every site is designed to capture leads — saved searches, valuation tools, and strategic CTAs that convert.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Visual-First Design</h3>
              <p>Real estate is visual. We showcase properties with stunning photography, virtual tours, and immersive galleries.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Fast, Modern Technology</h3>
              <p>Lightning-fast property search that loads instantly. No slow templates — custom-built for real estate.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>MLS & CRM Integration</h3>
              <p>We connect your website to MLS feeds and CRM systems for seamless lead management and follow-up.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Ongoing Support</h3>
              <p>Launch is just the beginning. We provide continued support, listing updates, and optimization to keep your site performing.</p>
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem", maxWidth: "900px", margin: "0 auto" }}>
          <Link href="/web-design-for-salons" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>Web Design for Salons</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Booking-ready websites for salons, barbershops, and beauty professionals with online scheduling and portfolio showcases.</p>
              </div>
              <span className={styles.learnMoreLink} style={{ marginTop: "1rem" }}>Learn More <ArrowRight size={16} /></span>
            </div>
          </Link>
          <Link href="/web-design-for-dental-clinics" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>Web Design for Dental Clinics</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Patient-ready dental websites with appointment booking, smile galleries, and HIPAA-conscious design.</p>
              </div>
              <span className={styles.learnMoreLink} style={{ marginTop: "1rem" }}>Learn More <ArrowRight size={16} /></span>
            </div>
          </Link>
          <Link href="/web-design-for-construction-companies" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>Web Design for Construction</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Professional websites for contractors with project portfolios, quote forms, and lead capture systems.</p>
              </div>
              <span className={styles.learnMoreLink} style={{ marginTop: "1rem" }}>Learn More <ArrowRight size={16} /></span>
            </div>
          </Link>
          <Link href="/web-design-for-restaurants" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>Web Design for Restaurants</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Mouth-watering restaurant websites with online ordering, menu displays, and reservation systems.</p>
              </div>
              <span className={styles.learnMoreLink} style={{ marginTop: "1rem" }}>Learn More <ArrowRight size={16} /></span>
            </div>
          </Link>
          <Link href="/web-design-for-healthcare" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>Web Design for Healthcare</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>HIPAA-conscious healthcare websites with patient portals, appointment booking, and provider directories.</p>
              </div>
              <span className={styles.learnMoreLink} style={{ marginTop: "1rem" }}>Learn More <ArrowRight size={16} /></span>
            </div>
          </Link>
          <Link href="/web-design-for-law-firms" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>Web Design for Law Firms</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Professional law firm websites with case evaluation forms, attorney profiles, and practice area pages.</p>
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
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>Ready to Close More Deals?</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Let&apos;s build a real estate website that showcases properties, captures leads, and positions you as the go-to agent in your market. Get a free consultation today.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className={styles.ctaButton}>
              Schedule a Free Strategy Call <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/services" className={styles.ctaButton}>
              View All Services <ArrowRight className={styles.arrow} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
