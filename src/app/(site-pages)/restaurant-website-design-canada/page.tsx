"use client";

import Link from "next/link";
import styles from "@/app/page.module.css";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  Utensils,
  ShoppingBag,
  CalendarCheck,
  MapPin,
  Star,
  Smartphone,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function RestaurantWebsiteDesignCanadaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Restaurant Website Design",
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
            "name": "Restaurant Website Design Canada",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does restaurant website design cost in Canada?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Restaurant website design costs in Canada range from $3,000 for a basic informational site to $25,000+ for a full-featured restaurant website with online ordering, reservation systems, and menu management. The investment depends on features, ordering integration, and design complexity.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you build online ordering systems for restaurants?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build custom online ordering systems that integrate directly into your restaurant website — no third-party commission fees. Our ordering systems support pickup, delivery, scheduled orders, menu customization, and payment processing. We also integrate with existing POS and delivery platforms.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you integrate reservation systems into my restaurant website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We integrate reservation systems like OpenTable, Resy, and custom booking solutions directly into your restaurant website. Patients can view available times, make reservations, receive confirmations, and manage their bookings — all from your site.",
            },
          },
          {
            "@type": "Question",
            "name": "Will my restaurant website be optimized for local search?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Every restaurant website we build includes local SEO optimization — Google Business Profile integration, location pages, schema markup for restaurants, menu optimization, and review management strategies to help you appear in local search results and Google Maps.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you design for specific restaurant types?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We design for all restaurant types — fine dining, casual dining, fast casual, cafes, bakeries, food trucks, pizzerias, sushi restaurants, Indian restaurants, and more. Each design is tailored to your restaurant's unique brand, cuisine, and customer experience.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a restaurant website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard restaurant website takes 3 to 6 weeks. Projects with custom online ordering, reservation integration, or multi-location features typically take 6 to 10 weeks. We provide a detailed timeline after the initial consultation.",
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
            <span className={styles.titleLinePrimary}>Restaurant Website</span>
            <span className={styles.titleLine}>Design in Canada</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Beeclue Tech designs restaurant websites that fill tables and drive
            direct orders. From online ordering and reservation systems to menu
            management and local SEO, we build digital experiences that keep
            your restaurant top of mind and fully booked.
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
            <h2>Professional Restaurant Website Design for Canadian Restaurants</h2>
            <p>
              Your restaurant&apos;s website is your digital storefront — the first
              impression potential diners get before they walk through your door.
              In Canada&apos;s competitive dining landscape, a beautiful, functional
              website is no longer optional. It&apos;s the single most important
              marketing asset your restaurant owns.
            </p>
            <p>
              At Beeclue Tech, we design restaurant websites that do more than look
              good. We build digital experiences that drive direct orders, fill
              reservations, showcase your menu, and tell your restaurant&apos;s story.
              From independent cafes to multi-location restaurant groups, we create
              websites that convert visitors into diners and first-timers into
              regulars.
            </p>
            <p>
              We understand the unique challenges restaurants face — thin margins,
              high competition, and the constant battle against third-party delivery
              platforms that eat into your profits. That&apos;s why we focus on
              building direct ordering systems, reservation tools, and local SEO
              strategies that drive revenue straight to your bottom line.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Why Restaurants Need Professional Website Design</h3>
            <p>Canadian restaurants benefit from professional web design:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Drive direct orders and eliminate third-party commission fees</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Fill reservations with integrated online booking systems</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Appear in local search results when diners search near you</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Showcase your menu with beautiful, easy-to-update menu pages</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Build your brand and tell your restaurant&apos;s unique story</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* SERVICES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Restaurant Website Design Services</h2>
          <p>Full-service restaurant web solutions designed to increase orders, bookings, and revenue.</p>
        </div>

        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Utensils className={styles.serviceIcon} />
            <h3>Restaurant Website Design</h3>
            <p>We design stunning restaurant websites that capture your brand, showcase your ambiance, and make it effortless for diners to view your menu, find your location, and place orders or reservations. Every design is mobile-first and optimized for hungry diners on the go.</p>
          </div>
          <div className={styles.serviceCard}>
            <ShoppingBag className={styles.serviceIcon} />
            <h3>Online Ordering Systems</h3>
            <p>Stop paying 15-30% commissions to third-party platforms. We build custom online ordering systems integrated directly into your restaurant website — supporting pickup, delivery, scheduled orders, menu customization, and secure payment processing with zero commission fees.</p>
          </div>
          <div className={styles.serviceCard}>
            <CalendarCheck className={styles.serviceIcon} />
            <h3>Reservation Systems</h3>
            <p>Fill every table with integrated reservation systems. We connect OpenTable, Resy, or custom booking solutions directly into your website, allowing diners to view availability, make reservations, and receive instant confirmations — all without leaving your site.</p>
          </div>
          <div className={styles.serviceCard}>
            <MapPin className={styles.serviceIcon} />
            <h3>Local SEO for Restaurants</h3>
            <p>Dominate local search results when diners search for restaurants near them. We optimize your Google Business Profile, implement restaurant schema markup, manage online reviews, and build location-specific content that puts your restaurant at the top of search results.</p>
          </div>
          <div className={styles.serviceCard}>
            <Star className={styles.serviceIcon} />
            <h3>Menu Management</h3>
            <p>Your menu is your most important marketing asset. We build beautiful, easy-to-update menu pages that showcase your dishes with stunning photography, clear pricing, dietary information, and allergen details — all manageable through a simple admin interface.</p>
          </div>
          <div className={styles.serviceCard}>
            <Smartphone className={styles.serviceIcon} />
            <h3>Mobile-First Restaurant Design</h3>
            <p>Over 80% of restaurant searches happen on mobile. We design every restaurant website mobile-first, ensuring your menu, ordering, reservations, and contact information are perfectly accessible on any device — so you never miss a hungry customer.</p>
          </div>
        </div>
      </FadeIn>

      {/* PROCESS */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Restaurant Design Process</h2>
          <p>A streamlined process that gets your restaurant online quickly and effectively.</p>
        </div>
        <div className={styles.processTimeline}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <h3>Consultation & Menu Review</h3>
            <p>We start by understanding your restaurant — your cuisine, brand, target audience, and goals. We review your current menu, discuss ordering and reservation needs, and analyze your local competition to identify opportunities that set your restaurant apart.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <h3>Design & Menu Photography</h3>
            <p>Our design team creates a visual identity for your website that reflects your restaurant&apos;s atmosphere and brand. We design homepage layouts, menu pages, and ordering interfaces. If needed, we coordinate professional food photography to make your dishes look irresistible.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <h3>Development & Integration</h3>
            <p>We build your restaurant website with integrated online ordering, reservation systems, and menu management. Every component is designed for speed and mobile performance. We connect your ordering system with your POS and test every order flow thoroughly.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <h3>Launch & Local SEO Optimization</h3>
            <p>After testing across devices, we launch your restaurant website with a comprehensive local SEO setup — Google Business Profile optimization, location schema, review management, and ongoing content strategy to ensure diners find you first when they search for restaurants near them.</p>
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE US */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Choose Beeclue Tech for Restaurant Web Design</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Restaurant Industry Expertise</h3>
              <p>We&apos;ve designed websites for restaurants across every category — fine dining, casual, fast casual, cafes, bakeries, food trucks, and multi-location groups. We understand the unique challenges and opportunities in restaurant marketing.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Direct Ordering Focus</h3>
              <p>We build ordering systems that drive revenue directly to your restaurant. No commission fees, no third-party platforms taking a cut. Your online ordering system is branded, integrated, and optimized for maximum order volume and average order value.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Mobile-First Design</h3>
              <p>Diners search for restaurants on their phones. We design every restaurant website mobile-first, ensuring your menu, ordering, and reservations work flawlessly on every device — so you capture every hungry customer, wherever they are.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Local SEO Mastery</h3>
              <p>We specialize in local SEO for restaurants. Our strategies help you appear in Google Maps, local search results, and &quot;near me&quot; queries — putting your restaurant in front of diners who are ready to eat tonight.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Easy Menu Management</h3>
              <p>Menus change. We build easy-to-use admin interfaces that let you update your menu, prices, photos, and specials without calling a developer. Keep your website fresh and your customers informed with minimal effort.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Canadian Restaurant Knowledge</h3>
              <p>We serve Canadian restaurants from coast to coast. We understand Canadian dining culture, seasonal menus, multi-province regulations, and the unique dynamics of the Canadian restaurant market.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* RELATED SERVICES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Related Services</h2>
          <p>Explore our other services that complement your restaurant website.</p>
        </div>
        <div className={styles.scroller}>
          <Link href="/web-design-for-restaurants" className={styles.serviceCard} style={{ textDecoration: "none", color: "inherit" }}>
            <h3>Web Design for Restaurants</h3>
            <p>Specialized web design services for restaurants, cafes, bakeries, and food service businesses looking to increase online orders and reservations.</p>
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
          <p>Common questions about our restaurant website design services in Canada.</p>
        </div>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>How much does restaurant website design cost in Canada?</h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>Restaurant website design costs in Canada range from $3,000 for a basic informational site to $25,000+ for a full-featured restaurant website with online ordering, reservation systems, and menu management. The investment depends on features, ordering integration, and design complexity.</p>
          </div>
          <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Do you build online ordering systems for restaurants?</h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>Yes. We build custom online ordering systems that integrate directly into your restaurant website — no third-party commission fees. Our ordering systems support pickup, delivery, scheduled orders, menu customization, and payment processing. We also integrate with existing POS and delivery platforms.</p>
          </div>
          <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Can you integrate reservation systems into my restaurant website?</h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>Yes. We integrate reservation systems like OpenTable, Resy, and custom booking solutions directly into your restaurant website. Diners can view available times, make reservations, receive confirmations, and manage their bookings — all from your site.</p>
          </div>
          <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Will my restaurant website be optimized for local search?</h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>Absolutely. Every restaurant website we build includes local SEO optimization — Google Business Profile integration, location pages, schema markup for restaurants, menu optimization, and review management strategies to help you appear in local search results and Google Maps.</p>
          </div>
          <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Do you design for specific restaurant types?</h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>Yes. We design for all restaurant types — fine dining, casual dining, fast casual, cafes, bakeries, food trucks, pizzerias, sushi restaurants, Indian restaurants, and more. Each design is tailored to your restaurant&apos;s unique brand, cuisine, and customer experience.</p>
          </div>
          <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>How long does it take to build a restaurant website?</h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>A standard restaurant website takes 3 to 6 weeks. Projects with custom online ordering, reservation integration, or multi-location features typically take 6 to 10 weeks. We provide a detailed timeline after the initial consultation.</p>
          </div>
        </div>
      </FadeIn>

      {/* CTA SECTION */}
      <FadeIn className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Ready to Fill More Tables with Your Restaurant Website?</h2>
          <p className={styles.footerSub}>
            Let&apos;s discuss your restaurant. Our Canadian restaurant web design
            team will create a stunning, ordering-ready website that drives
            direct orders, fills reservations, and grows your brand.
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
