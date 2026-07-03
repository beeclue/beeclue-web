"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, CalendarCheck, Paintbrush, Search, Smartphone, Users, Star, TrendingUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function WebDesignForSalonsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design for Salons",
    "provider": {
      "@type": "Organization",
      "name": "Beeclue Tech"
    },
    "description": "Professional web design and development services for salons, barbershops, and beauty businesses in Canada. Custom booking systems, portfolio showcases, and SEO-optimized websites that fill your appointment calendar.",
    "areaServed": "Canada"
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beeclue.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Web Design for Salons", "item": "https://beeclue.com/web-design-for-salons" }
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
            <span className={styles.titleLine}>for Salons</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We build high-converting, booking-ready websites for salons, barbershops, and beauty professionals. Fill your appointment calendar with a website that works as hard as you do.
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
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Modern luxury hair salon interior with elegant design"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </FadeIn>

      {/* WHY YOUR SALON NEEDS A PROFESSIONAL WEBSITE */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Why Your Salon Needs a Professional Website</h2>
            <p>
              Your salon&apos;s website is your digital storefront — the first impression potential clients get before they ever walk through your doors. In an industry where aesthetics matter, a poorly designed or outdated website can cost you bookings every single day.
            </p>
            <p>
              While social media is important, it doesn&apos;t replace the need for a dedicated, professional website that you fully own and control. A custom salon website builds instant credibility, showcases your best work, and gives clients a seamless way to book appointments 24/7.
            </p>
            <p>
              At Beeclue Tech, we specialize in building websites specifically for the beauty industry. We understand the unique needs of salons — from online booking integration to stylist portfolios — and we engineer every site to convert visitors into loyal, repeat clients.
            </p>
          </div>
          <div className={styles.luxuryCard}>
            <h3>What Sets a Great Salon Website Apart</h3>
            <p>A high-performing salon website delivers:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Instant trust and professionalism for new clients</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>24/7 online booking that fills your calendar automatically</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>A stunning portfolio showcasing your best transformations</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Local SEO dominance for &quot;salon near me&quot; searches</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Mobile-first design for clients browsing on the go</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ESSENTIAL FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Essential Features for Salon Websites</h2>
          <p>We build every salon website with the features that matter most to beauty professionals and their clients.</p>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Online Booking Integration</h3>
            <p>Clients expect to book appointments from their phone at midnight. We integrate seamless online booking systems — whether it&apos;s Fresha, Vagaro, Booksy, or a fully custom solution — so your calendar stays full without manual scheduling headaches.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CalendarCheck size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Visual Portfolio & Gallery</h3>
            <p>Salons are visual businesses. We design breathtaking gallery sections that let you showcase before-and-after transformations, your best work, and the overall vibe of your space — all optimized for fast loading and mobile viewing.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Paintbrush size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Local SEO for &quot;Near Me&quot; Searches</h3>
            <p>When someone searches &quot;hair salon near me&quot; or &quot;barbershop in Toronto,&quot; your website needs to appear. We implement technical SEO, Google Business Profile optimization, and local schema markup to put your salon at the top of local search results.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Search size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Mobile-First Responsive Design</h3>
            <p>Over 70% of salon bookings happen on mobile devices. We design mobile-first experiences that look stunning on every screen size — from the smallest phone to the largest desktop — ensuring no client is lost to a broken layout.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Smartphone size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Stylist Profiles & Team Pages</h3>
            <p>Your clients book with people, not just businesses. We create dedicated stylist profile pages with photos, specialties, bios, and individual booking links — helping clients find the perfect match and building personal connections before they even arrive.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Users size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Service Menus & Pricing</h3>
            <p>Transparency builds trust. We design elegant, easy-to-navigate service menus with clear pricing, helping clients self-select services and reducing no-shows from pricing confusion. Integrated with your booking system for one-tap scheduling.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Star size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>
      </FadeIn>

      {/* CASE STUDY FEATURE */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Real Results: LBF Skin Clinic</h2>
            <p>
              We partnered with LBF Skin Clinic — a premium skincare and beauty business — to build a complete digital presence that reflects their expertise and attracts new clients through local search.
            </p>
            <p>
              The result: a stunning, conversion-optimized website paired with local SEO that drives real bookings. From brand identity to Google Business Profile optimization, we delivered a comprehensive solution tailored to the beauty industry.
            </p>
            <Link href="/case-studies/lbf-skin-clinic" className={styles.learnMoreLink} style={{ marginTop: "1rem" }}>
              Read the Full Case Study <ArrowRight size={16} />
            </Link>
          </div>
          <div className={styles.luxuryCard}>
            <h3>What We Delivered for LBF</h3>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Custom WordPress Website Design</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Logo Design & Brand Identity</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Local SEO & Google Business Profile</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Conversion-Focused Strategy</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE BEECLUE */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Salons Choose Beeclue Tech</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Beauty Industry Expertise</h3>
              <p>We&apos;ve built websites for salons, barbershops, and skincare clinics. We understand the beauty industry&apos;s unique visual and functional needs.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Booking-First Architecture</h3>
              <p>Every site we build is designed around one goal: getting clients to book. Strategic CTAs, seamless integrations, and zero friction.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Local SEO Mastery</h3>
              <p>We don&apos;t just build pretty sites — we engineer them to rank. Technical SEO, schema markup, and Google Business Profile optimization included.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Fast, Modern Technology</h3>
              <p>No clunky page builders. We use Next.js, WordPress, and custom code for blazing-fast performance that Google rewards.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Transparent Process</h3>
              <p>You&apos;ll know exactly what&apos;s happening at every stage. No surprises, no hidden fees — just clear communication and exceptional results.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Ongoing Support</h3>
              <p>Launch is just the beginning. We provide continued support, updates, and optimization to keep your salon website performing at its best.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* MORE RESOURCES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Resources for Salon Owners</h2>
          <p>Deepen your knowledge with our guides on building and growing your salon&apos;s digital presence.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
          <Link href="/salon-website-development" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>The Ultimate Guide to Salon Website Development</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Everything you need to know about building a high-converting salon website — from booking systems to visual portfolios.</p>
              </div>
              <span className={styles.learnMoreLink} style={{ marginTop: "1rem" }}>Read More <ArrowRight size={16} /></span>
            </div>
          </Link>
          <Link href="/how-to-attract-more-clients-for-your-salon" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>How to Attract More Clients for Your Salon</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>A comprehensive digital strategy covering SEO, social media, loyalty programs, and paid advertising for beauty businesses.</p>
              </div>
              <span className={styles.learnMoreLink} style={{ marginTop: "1rem" }}>Read More <ArrowRight size={16} /></span>
            </div>
          </Link>
          <Link href="/salon-barbershop-loyalty-programs-to-increase-business" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>Salon Loyalty Programs That Actually Work</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>How barbershops and salons can use loyalty points and rewards to increase client retention, frequency, and revenue.</p>
              </div>
              <span className={styles.learnMoreLink} style={{ marginTop: "1rem" }}>Read More <ArrowRight size={16} /></span>
            </div>
          </Link>
        </div>
      </FadeIn>

      {/* EXPLORE OTHER INDUSTRIES */}
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
          <Link href="/web-design-for-construction-companies" style={{ textDecoration: "none" }}>
            <div className={styles.serviceCard} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--foreground)" }}>Web Design for Construction</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Professional websites for contractors with project portfolios, quote forms, and lead capture systems.</p>
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
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>Ready to Fill Your Appointment Calendar?</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Let&apos;s build a salon website that turns visitors into booked clients. Get a free consultation and discover how a professional website can transform your beauty business.
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
