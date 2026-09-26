"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import {
  ArrowRight,
  CheckCircle2,
  Palette,
  Search,
  Sparkles,
  Award,
  Globe,
  Eye,
  Calendar,
  Layers,
  ShieldCheck,
  Frame
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";
import IndustryList from "@/components/IndustryList";
import FaqAccordion from "@/components/FaqAccordion";

export default function WebDesignForArtGalleriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design for Art Galleries & Custom Framing Shops",
    "provider": {
      "@type": "Organization",
      "name": "Beeclue Tech"
    },
    "description":
      "Bespoke web design, digital viewing rooms, and local SEO services for fine art galleries, custom picture framing ateliers, and art restoration studios across Canada and the United States.",
    "areaServed": ["Canada", "United States"],
    "priceRange": "$$"
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beeclue.com/services" },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Web Design for Art Galleries",
        "item": "https://beeclue.com/web-design-for-art-galleries"
      }
    ]
  };

  const faqs = [
    {
      q: "How does a custom website help independent frame shops and art galleries compete with big-box chains?",
      a: "Big-box craft chains (like Michaels or Hobby Lobby) and online print sellers dominate generic search results with mass-market factory framing. A custom website highlights your artisanal craftsmanship, 99% UV-filtering museum glass (Tru-Vue), hand-finished Italian mouldings (Roma, Larson-Juhl), and bespoke conservation techniques. When affluent collectors and interior designers see a luxury digital presence with local Google Maps authority, they choose the master atelier over the retail chain every time."
    },
    {
      q: "Can clients and interior designers book custom framing consultations or private art viewings online?",
      a: "Yes. We design multi-channel consultation funnels directly into your website. Clients can book in-store gallery appointments, schedule virtual framing design sessions, or request on-site/in-home art planning. The intake forms allow clients to specify artwork dimensions, attach reference photos, and indicate preferred moulding styles so your team is fully prepared before the consultation."
    },
    {
      q: "How do you display high-resolution artwork and custom frames without slowing down the website?",
      a: "Art enthusiasts and collectors demand crystal-clear detail, but massive image files ruin mobile page speed. We implement next-generation image optimization (AVIF/WebP compression), dynamic responsive sizing, and edge-cached CDN delivery. This allows visitors to zoom in on delicate brushstrokes, oil canvas textures, and gilded moulding profiles with instant sub-second load times."
    },
    {
      q: "Can we manage our own artist rosters, exhibitions, and rotating inventory?",
      a: "Absolutely. We build gallery websites with intuitive, streamlined content management systems. You can easily add new artist biographies, publish upcoming exhibition vernissages, update artwork pricing or availability (Available, Reserved, Sold), and post recent custom framing and restoration case studies without touching a single line of code."
    },
    {
      q: "How does local SEO help art galleries and custom picture framers attract high-ticket clients?",
      a: "High-ticket custom framing ($300 to $3,000+ orders) and fine art purchases start with high-intent local searches: 'custom picture framing near me', 'shadowbox framing [city]', 'art restoration atelier [city]', or 'contemporary art galleries [neighborhood]'. We implement hyper-local schema markup, neighborhood landing pages, and Google Business Profile optimizations that drive qualified foot traffic and phone calls to your gallery doors."
    },
    {
      q: "How long does it take to design and launch an art gallery or custom framing website?",
      a: "Most custom art gallery and framing studio websites are completed and launched within 2 to 4 weeks. This includes editorial visual design, mobile responsiveness, consultation booking setup, artist portfolio migration, and full technical SEO."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main className={styles.main}>
      <ServiceTracker />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Web Design for</span>
            <span className={styles.titleLine}>Art Galleries &amp; Frame Shops</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We engineer luxury digital platforms, digital viewing rooms, and local SEO systems for fine art galleries, custom picture framers, and restoration ateliers across North America.
          </p>
          <div className={styles.heroRatingContainer}>
            <Link href="/contact" className={styles.ctaButton}>
              Get a Free Website Mockup <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/case-studies/tuxedo-frame-gallery" className={styles.ctaButtonLight}>
              View Atlanta Case Study <ArrowRight className={styles.arrow} size={20} />
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* HERO SHOWCASE IMAGE */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div style={{ position: "relative", width: "100%", height: "520px", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border)" }}>
          <Image
            src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Fine art gallery exhibition with illuminated paintings and modern architecture"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </FadeIn>

      {/* THE DIGITAL CHALLENGE */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Where Museum-Grade Artistry Meets Digital Elegance</h2>
            <p>
              Custom framing ateliers and independent fine art galleries offer something mass retailers can never replicate: decades of master craftsmanship, museum-grade conservation, hand-carved Italian mouldings, and personal curatorial relationships.
            </p>
            <p>
              Yet too many world-class studios lose high-value commissions because their online presence is frozen in the past. An outdated website, low-resolution phone photos, or a missing mobile layout creates instant friction for interior designers, corporate art consultants, and private collectors seeking the best in your city.
            </p>
            <p>
              At Beeclue Tech, we bridge this gap. We build editorial digital experiences that reflect the prestige of your gallery space, showcase your artist roster with museum-level clarity, and convert high-intent local searches into booked framing consultations.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>What a High-Performing Gallery Platform Delivers</h3>
            <p>Built specifically for luxury framing ateliers and fine art destinations:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}>
                <CheckCircle2 size={24} color="var(--primary-light)" />
                <span>Prestige digital aesthetic that commands high-ticket framing orders</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <CheckCircle2 size={24} color="var(--primary-light)" />
                <span>Seamless online consultation booking (in-gallery, virtual, or in-home)</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <CheckCircle2 size={24} color="var(--primary-light)" />
                <span>Curated digital viewing rooms and high-resolution artist catalogues</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <CheckCircle2 size={24} color="var(--primary-light)" />
                <span>Local SEO dominance capturing affluent neighborhood framing searches</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <CheckCircle2 size={24} color="var(--primary-light)" />
                <span>Sub-second mobile speed with zero layout shift on smartphones</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* FEATURED CASE STUDY SPOTLIGHT: TUXEDO FRAME GALLERY */}
      <FadeIn className={styles.baseSection} style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "rgba(255, 255, 255, 0.02)" }}>
        <div className={styles.servicesHeader}>
          <h2>Featured Case Study: Tuxedo Frame Gallery</h2>
          <p>How we brought 35+ years of Buckhead, Atlanta artistry to life online with luxury web design and local SEO.</p>
        </div>

        <div className={styles.aboutGrid} style={{ alignItems: "center" }}>
          <div>
            <div style={{ position: "relative", width: "100%", height: "420px", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border)" }}>
              <Image
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/tuxedoframegallery.webp"
                alt="Tuxedo Frame Gallery Custom Platform Showcase"
                fill
                style={{ objectFit: "contain", padding: "1.5rem" }}
              />
            </div>
          </div>

          <div className={styles.aboutText}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary-light)", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.75rem" }}>
              <Award size={18} /> Buckhead, Atlanta, GA
            </div>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>
              Atlanta&apos;s Premier Custom Framing Atelier &amp; Fine Art Gallery
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.7", marginBottom: "1.25rem" }}>
              Located on Piedmont Road in Buckhead, Tuxedo Frame Gallery boasts over 75 combined years of master framing and fine art restoration expertise. They needed a digital presence that matched their partnerships with world-renowned moulding houses like Roma, Larson-Juhl, and Fotiou.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--foreground)" }}>
                <CheckCircle2 size={18} color="var(--primary-light)" />
                <span><strong>Editorial Atelier Design:</strong> Fluid typography, bespoke moulding showcase, and fine art gallery.</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--foreground)" }}>
                <CheckCircle2 size={18} color="var(--primary-light)" />
                <span><strong>Multi-Channel Booking:</strong> Streamlined in-store visits, virtual framing design, and in-home art advisory.</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--foreground)" }}>
                <CheckCircle2 size={18} color="var(--primary-light)" />
                <span><strong>Buckhead Local SEO:</strong> Dominant visibility for custom picture framing and fine art restoration searches.</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/case-studies/tuxedo-frame-gallery" className={styles.ctaButton}>
                Read Case Study <ArrowRight className={styles.arrow} />
              </Link>
              <a
                href="https://tuxedoframegallery.com?utm_source=beeclue&utm_medium=industry_page&utm_campaign=web_design_art_galleries"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButtonLight}
              >
                Visit Live Site <Globe size={18} style={{ marginLeft: "0.5rem" }} />
              </a>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* CORE FEATURES FOR ART GALLERIES & FRAMERS */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Engineered for High-Ticket Art &amp; Framing Growth</h2>
          <p>Every website we construct includes the specialized tools required to attract collectors, interior designers, and framing clients.</p>
        </div>

        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Eye className={styles.serviceIcon} />
            <h3>Digital Viewing Rooms &amp; Catalogues</h3>
            <p>
              Present original artworks, limited edition prints, and artisan sculptures with full-screen, zoomable imagery. Organize by artist, medium, collection, or availability status with inquiries linked to each piece.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <Frame className={styles.serviceIcon} />
            <h3>Custom Framing &amp; Moulding Showcase</h3>
            <p>
              Highlight your premium moulding lines (Roma, Larson-Juhl, Bella, Fotiou) and conservation options (99% UV Tru-Vue museum glass, archival cotton rag mats, and hand-wrapped fabric liners).
            </p>
          </div>

          <div className={styles.serviceCard}>
            <Calendar className={styles.serviceIcon} />
            <h3>Multi-Channel Consultation Funnel</h3>
            <p>
              Allow clients to book in-gallery design sessions, upload photos of their artwork with dimensions, or schedule white-glove in-home art consultation and hanging services.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <Search className={styles.serviceIcon} />
            <h3>Hyper-Local Art &amp; Framing SEO</h3>
            <p>
              Dominate organic rankings for high-intent keywords like &quot;custom framing near me&quot;, &quot;jersey framing [city]&quot;, &quot;canvas restoration&quot;, and &quot;fine art gallery [city]&quot; with structured local schema.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <Layers className={styles.serviceIcon} />
            <h3>Specialty Services &amp; Restoration</h3>
            <p>
              Showcase high-margin specialized craftsmanship: acrylic shadowboxes, vintage memorabilia framing, textile &amp; needlepoint stretching, oil painting cleaning, and antique frame gilding.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <ShieldCheck className={styles.serviceIcon} />
            <h3>Designer &amp; Trade Partner Portals</h3>
            <p>
              Attract lucrative trade accounts. Provide dedicated inquiry workflows for interior designers, architects, and corporate art buyers with transparent trade consultation terms.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* COMPARISON / WHY GENERIC SITES FAIL */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Generic Website Templates Fail Art Galleries</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Slow Loading Ruins First Impressions</h3>
              <p>Wix and Squarespace templates choke on high-resolution art galleries. Our custom Next.js architecture serves optimized next-gen images with lightning-fast speeds.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>No Framing Intake Mechanism</h3>
              <p>Generic contact forms force clients to write vague emails. Our structured framing intake captures artwork type, dimensions, budget, and reference images upfront.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Ignored Local Search Schema</h3>
              <p>Standard templates lack rich snippet structured data. We build deep schema markup for ArtGallery and LocalBusiness entities so Google displays your ratings, address, and services.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Zero Ongoing Maintenance</h3>
              <p>Galleries constantly rotate exhibitions and seasonal artists. We offer complete ongoing management so your digital inventory is always up-to-date without technical hassle.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* FAQ SECTION */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Frequently Asked Questions</h2>
          <p>Common questions about web development, local SEO, and digital marketing for art galleries and custom framing ateliers.</p>
        </div>
        <FaqAccordion faqs={faqs} />
      </FadeIn>

      {/* RELATED INDUSTRIES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Explore Other Industries We Serve</h2>
          <p>Specialized web design solutions engineered for local businesses and professional practices.</p>
        </div>
        <IndustryList exclude="/web-design-for-art-galleries" />
      </FadeIn>

      {/* CTA SECTION */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingBottom: "10rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Palette size={48} color="var(--primary-light)" style={{ marginBottom: "2rem" }} />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>
            Ready to Elevate Your Gallery or Framing Atelier?
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Get a free 48-hour custom mobile website mockup and local SEO audit for your gallery or custom framing shop. See how your work looks in an editorial digital platform before committing to anything.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className={styles.ctaButton}>
              Claim Your Free Mockup <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/case-studies/tuxedo-frame-gallery" className={styles.ctaButtonLight}>
              Read Tuxedo Frame Gallery Case Study <ArrowRight className={styles.arrow} size={20} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
