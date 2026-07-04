"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, HardHat, Camera, Search, Smartphone, FileText, DollarSign, Star, TrendingUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";
import IndustryList from "@/components/IndustryList";

export default function WebDesignForConstructionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design for Construction Companies",
    "provider": {
      "@type": "Organization",
      "name": "Beeclue Tech"
    },
    "description": "Professional web design and development services for construction companies, contractors, and trades businesses in Canada. Project portfolios, quote request forms, and lead-generating websites.",
    "areaServed": "Canada"
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beeclue.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Web Design for Construction", "item": "https://beeclue.com/web-design-for-construction-companies" }
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
            <span className={styles.titleLine}>for Construction</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We build professional, lead-generating websites for construction companies, contractors, and trades businesses. Showcase your projects, capture leads, and dominate your local market.
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
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Modern construction site with professional building project"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </FadeIn>

      {/* WHY YOUR CONSTRUCTION COMPANY NEEDS A WEBSITE */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Why Your Construction Company Needs a Professional Website</h2>
            <p>
              In the construction industry, trust is everything. Before a homeowner or business hires a contractor for a major project, they do their research — and that research starts online. If your company doesn&apos;t have a professional website showcasing your work, you&apos;re losing bids to competitors who do.
            </p>
            <p>
              A construction website isn&apos;t just a digital business card. It&apos;s your portfolio, your quote generator, and your credibility engine all in one. From residential renovations to commercial builds, your website needs to demonstrate the quality of your craftsmanship and make it dead simple for potential clients to reach out.
            </p>
            <p>
              At Beeclue Tech, we build websites specifically for the trades. We understand that construction companies need project galleries that handle large images, quote request forms that capture the right information, and local SEO that puts you in front of homeowners actively searching for contractors.
            </p>
          </div>
          <div className={styles.luxuryCard}>
            <h3>What a Great Construction Website Delivers</h3>
            <p>A high-performing construction website provides:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Professional credibility that wins high-value bids</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Project portfolios with before/after showcases</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Easy quote request forms that capture qualified leads</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Local SEO dominance for &quot;contractor near me&quot; searches</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Licensing, insurance, and certification trust signals</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ESSENTIAL FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Essential Features for Construction Websites</h2>
          <p>We build every construction website with the features that matter most to contractors and their clients.</p>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Project Portfolio & Case Studies</h3>
            <p>Your past work is your best sales tool. We design stunning project galleries that let you showcase completed builds, renovations, and transformations — organized by project type, size, and service — with high-resolution images that load fast.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Camera size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Quote Request Forms</h3>
            <p>Every visitor to your site is a potential project. We build intelligent quote request forms that capture project details, budget range, timeline, and contact information — so you can qualify leads before picking up the phone.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FileText size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Service Pages & Pricing Transparency</h3>
            <p>Whether you specialize in kitchen renovations, commercial builds, or custom homes, we create dedicated service pages that clearly explain what you do, how you do it, and what to expect — building trust before the first conversation.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <DollarSign size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Local SEO for Contractors</h3>
            <p>When a homeowner searches &quot;general contractor near me&quot; or &quot;home renovation Toronto,&quot; your company needs to appear at the top. We implement technical SEO, local schema markup, and Google Business Profile optimization to dominate local search.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Search size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Mobile-First for Job Sites</h3>
            <p>Your clients are contractors and project managers who need information on the go — from job sites, between meetings, or during inspections. We design mobile-first experiences that work flawlessly on any device.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Smartphone size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Licensing & Trust Signals</h3>
            <p>Construction clients need to know you&apos;re licensed, insured, and certified. We prominently display your credentials, affiliations, and insurance information — building the trust needed to win high-value projects.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <HardHat size={120} color="#3385ff" strokeWidth={1} />
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
            <h2>Real Results: Blues Contracting Services</h2>
            <p>
              We partnered with Blues Contracting Services to build a robust, professional digital presence that highlights their construction expertise and builds immediate trust with potential clients.
            </p>
            <p>
              The result: a modern Next.js website with strategic UX design, technical SEO integration, and a compelling portfolio showcase that converts visitors into project inquiries.
            </p>
            <Link href="/case-studies/blues-contracting-services" className={styles.learnMoreLink} style={{ marginTop: "1rem" }}>
              Read the Full Case Study <ArrowRight size={16} />
            </Link>
          </div>
          <div className={styles.luxuryCard}>
            <h3>What We Delivered for Blues Contracting</h3>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Custom Next.js Web Design</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Streamlined UX Design</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Technical SEO Integration</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Portfolio & Service Showcase</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE BEECLUE */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Construction Companies Choose Beeclue Tech</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Trades Industry Expertise</h3>
              <p>We&apos;ve built websites for contractors, builders, and trades businesses. We understand the unique needs of the construction industry.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Lead-Generating Architecture</h3>
              <p>Every site is designed around one goal: getting qualified leads. Strategic CTAs, intelligent forms, and zero friction.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Portfolio-First Design</h3>
              <p>We showcase your work in the best light — high-resolution galleries, before/after comparisons, and project case studies.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Fast, Modern Technology</h3>
              <p>No clunky page builders. We use Next.js and custom code for blazing-fast performance that Google rewards.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Transparent Communication</h3>
              <p>You&apos;ll know exactly what&apos;s happening at every stage. No surprises, no hidden fees — just clear communication.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Ongoing Support</h3>
              <p>Launch is just the beginning. We provide continued support, updates, and optimization to keep your site performing.</p>
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
        <IndustryList exclude="/web-design-for-construction-companies" />
      </FadeIn>

      {/* CTA SECTION */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingBottom: "10rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <TrendingUp size={48} color="var(--primary-light)" style={{ marginBottom: "2rem" }} />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>Ready to Win More Projects?</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Let&apos;s build a construction website that showcases your craftsmanship and generates qualified leads. Get a free consultation today.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className={styles.ctaButton}>
              Schedule a Free Strategy Call <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/case-studies/blues-contracting-services" className={styles.ctaButton}>
              See Our Construction Work <ArrowRight className={styles.arrow} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
