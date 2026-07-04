"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, Utensils, CalendarClock, Search, Smartphone, Star, ImageIcon, TrendingUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function WebDesignForRestaurantsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design for Restaurants",
    "provider": {
      "@type": "Organization",
      "name": "Beeclue Tech"
    },
    "description": "Professional web design and development services for restaurants, cafes, and food businesses in Canada. Online ordering, menu displays, and reservation systems.",
    "areaServed": "Canada"
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beeclue.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Web Design for Restaurants", "item": "https://beeclue.com/web-design-for-restaurants" }
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
            <span className={styles.titleLine}>for Restaurants</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We build mouth-watering, reservation-ready websites for restaurants, cafes, and food businesses. From online ordering to menu displays, we engineer sites that fill seats and generate orders.
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
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Elegant restaurant interior with warm lighting and ambiance"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </FadeIn>

      {/* WHY YOUR RESTAURANT NEEDS A WEBSITE */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Why Your Restaurant Needs a Professional Website</h2>
            <p>
              When hunger strikes, people reach for their phones. They search &quot;best Italian restaurant near me&quot; or &quot;restaurants open now Toronto&quot; — and whichever result looks the most appetizing wins the reservation or the order.
            </p>
            <p>
              Third-party platforms like Uber Eats and DoorDash take a massive cut of your revenue and control your customer relationships. A professional restaurant website puts you back in the driver&apos;s seat — with direct ordering, your own reservation system, and a brand experience that&apos;s uniquely yours.
            </p>
            <p>
              At Beeclue Tech, we build restaurant websites that do more than look pretty. We engineer digital experiences that showcase your food, tell your story, and make it effortless for hungry customers to order or book a table.
            </p>
          </div>
          <div className={styles.luxuryCard}>
            <h3>What a Great Restaurant Website Delivers</h3>
            <p>A high-performing restaurant website provides:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Direct online ordering without platform commissions</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Beautiful menu displays with photos and pricing</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Reservation and table booking systems</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Local SEO dominance for &quot;restaurant near me&quot; searches</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Mobile-first design for hungry customers on the go</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ESSENTIAL FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Essential Features for Restaurant Websites</h2>
          <p>We build every restaurant website with the features that matter most to diners and restaurant owners.</p>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Online Ordering System</h3>
            <p>Skip the middleman. We integrate direct online ordering systems that let customers place pickup or delivery orders directly from your website — keeping 100% of the revenue in your pocket instead of paying 15-30% commissions to third-party platforms.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Utensils size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Digital Menu Displays</h3>
            <p>Your menu is your identity. We design stunning, easy-to-update digital menus with mouth-watering food photography, clear pricing, dietary labels, and allergen information — all optimized for mobile browsing.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ImageIcon size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Reservation & Table Booking</h3>
            <p>Whether you use OpenTable, Resy, or want a custom solution, we integrate seamless reservation systems that let diners book tables in real-time — reducing no-shows with automated confirmations and deposits.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CalendarClock size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Local SEO for &quot;Restaurant Near Me&quot;</h3>
            <p>When someone searches &quot;best pizza near me&quot; or &quot;restaurants open now Toronto,&quot; your restaurant needs to appear at the top. We implement technical SEO, Google Business Profile optimization, and local schema markup.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Search size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Mobile-First for Diners on the Go</h3>
            <p>Over 70% of restaurant searches happen on mobile — often by hungry customers looking for somewhere to eat right now. We design mobile-first experiences that load fast and look delicious on every screen.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Smartphone size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Photo Galleries & Ambiance</h3>
            <p>Ambiance sells. We create photo galleries that showcase your space, your food, and your vibe — from the warm lighting of your dining room to the artistry of your signature dishes.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Star size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE BEECLUE */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Restaurants Choose Beeclue Tech</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Food Industry Understanding</h3>
              <p>We understand that restaurants need visual-first design, fast mobile experiences, and seamless ordering flows that keep customers coming back.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Revenue-First Architecture</h3>
              <p>Every design decision maximizes your revenue — direct ordering to cut commissions, reservation systems to reduce no-shows, and upsells built in.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Local SEO Mastery</h3>
              <p>We dominate &quot;near me&quot; searches. Technical SEO, schema markup, and Google Business Profile optimization included.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Fast, Modern Technology</h3>
              <p>Lightning-fast pages that showcase your food beautifully. No slow templates — custom-built for performance.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Easy Menu Management</h3>
              <p>Update your menu, prices, and specials without calling a developer. Our systems are designed for easy restaurant operations.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Ongoing Support</h3>
              <p>Launch is just the beginning. We provide continued support, seasonal updates, and optimization to keep your site performing.</p>
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
          <Link href="/web-design-for-real-estate" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>Web Design for Real Estate</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Property-focused real estate websites with MLS integration, virtual tours, and lead capture forms.</p>
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
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>Ready to Fill Every Table?</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Let&apos;s build a restaurant website that showcases your food, fills your seats, and generates direct orders. Get a free consultation today.
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
