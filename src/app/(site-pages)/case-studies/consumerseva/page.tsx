import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, Globe, Scale, ShieldCheck, Search, Users, Paintbrush, Server, FileText, TrendingUp, BookOpen } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import LawFirmAuditForm from "@/components/LawFirmAuditForm";

export const metadata: Metadata = {
  title: "Law Firm Website Design Case Study: Consumer Seva | Empower Legal LLP",
  description: "Learn how Beeclue Tech built a custom WordPress web platform, brand identity, legal blog content engine, and managed hosting for Consumer Seva & Empower Legal LLP.",
  alternates: {
    canonical: "https://beeclue.com/case-studies/consumerseva",
  },
};

export default function ConsumerSevaCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CaseStudy",
        "name": "Consumer Seva (Empower Legal LLP) — Law Firm Web Platform & Digital Growth",
        "description": "Custom WordPress web architecture, brand identity, nationwide legal SEO content engine, and managed hosting built for Empower Legal LLP & Consumer Seva.",
        "datePublished": "2023-11-15",
        "dateModified": "2024-06-10",
        "image": "https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/consumer-seva.webp",
        "author": {
          "@type": "Organization",
          "name": "Beeclue Tech"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Beeclue Tech"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com" },
          { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://beeclue.com/case-studies" },
          { "@type": "ListItem", "position": 3, "name": "Consumer Seva — Law Firm Web Platform" }
        ]
      }
    ]
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* HEADER SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Consumer Seva</span>
            <span className={styles.titleLine}>Empower Legal LLP Web Platform</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            We partnered with Empower Legal LLP to architect a comprehensive digital platform for Consumer Seva — combining custom WordPress design, memorable brand identity, nationwide legal SEO content, and managed cloud hosting to drive high-intent client inquiries.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <a 
              href="https://consumerseva.com?utm_source=beeclue&utm_medium=portfolio&utm_campaign=consumerseva" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
            >
              Visit Live Website <Globe size={20} />
            </a>
            <Link href="/contact" className={styles.ctaButton}>
              Start Your Legal Project <ArrowRight className={styles.arrow} />
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* OVERVIEW SECTION */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          
          <div className={`${styles.luxuryText} ${styles.aboutSection}`}>
            <h2>Expanding National Legal Reach with Accessible Digital Architecture</h2>
            <p>
              Navigating legal disputes, consumer rights violations, trademark registrations, and property documentation can feel overwhelming for individuals and business owners alike. Empower Legal LLP created Consumer Seva to provide transparent, accessible, and structured legal consultancy across India.
            </p>
            <p>
              To expand their reach beyond regional boundaries and capture nationwide search demand, they needed an authoritative yet highly approachable digital hub. We designed and engineered a custom WordPress platform paired with high-converting intake funnels, educational legal content, custom logo branding, and reliable cloud infrastructure.
            </p>
          </div>

          <div className={styles.aboutImageContainer}>
            <div style={{ borderRadius: "12px", overflow: "hidden", position: "relative", width: "100%", height: "400px" }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/consumer-seva.webp" 
                alt="Consumer Seva Empower Legal LLP Website Presentation" 
                fill
                style={{ objectFit: "contain", padding: "2rem" }}
              />
            </div>
          </div>

          <div className={`${styles.luxuryCard} ${styles.fullWidthCard}`}>
            <h3>What We Delivered</h3>
            <p>A full-stack legal web solution designed to build immediate client trust, educate prospects, and drive qualified legal inquiries.</p>
            <div className={styles.luxuryChecklistGrid}>
              <div className={styles.luxuryCheckItem}><Scale size={24} color="var(--primary-light)" /><span>Custom WordPress Legal Platform</span></div>
              <div className={styles.luxuryCheckItem}><Paintbrush size={24} color="var(--primary-light)" /><span>Brand Identity &amp; Logo Design</span></div>
              <div className={styles.luxuryCheckItem}><BookOpen size={24} color="var(--primary-light)" /><span>Legal SEO Blog &amp; Content Writing</span></div>
              <div className={styles.luxuryCheckItem}><Server size={24} color="var(--primary-light)" /><span>Managed Hosting &amp; Ongoing Maintenance</span></div>
              <div className={styles.luxuryCheckItem}><Search size={24} color="var(--primary-light)" /><span>Nationwide Practice Area SEO</span></div>
              <div className={styles.luxuryCheckItem}><TrendingUp size={24} color="var(--primary-light)" /><span>High-Converting Lead Funnels</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* PRACTICE AREAS HIGHLIGHT */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Key Transformations &amp; Solutions</h2>
          <p>How Beeclue Tech structured and scaled Consumer Seva&apos;s digital legal practice.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Scale className={styles.serviceIcon} />
            <h3>Custom WordPress Architecture</h3>
            <p>We engineered a fast, responsive WordPress platform organized around dedicated legal practice areas — including consumer complaint guidance, formal legal notices, trademark applications, partnership deeds, and property due diligence.</p>
          </div>
          <div className={styles.serviceCard}>
            <Paintbrush className={styles.serviceIcon} />
            <h3>Logo &amp; Brand Identity Design</h3>
            <p>We crafted a distinctive, professional brand mark and visual identity that balances legal gravitas with modern accessibility, building immediate credibility with prospective clients across desktop and mobile devices.</p>
          </div>
          <div className={styles.serviceCard}>
            <BookOpen className={styles.serviceIcon} />
            <h3>Legal Content Writing &amp; Blog Engine</h3>
            <p>We developed an ongoing content marketing engine with in-depth, SEO-optimized legal articles explaining consumer rights, e-commerce dispute redressal, trademark opposition, and corporate documentation best practices.</p>
          </div>
          <div className={styles.serviceCard}>
            <Server className={styles.serviceIcon} />
            <h3>Managed Hosting &amp; Maintenance</h3>
            <p>We provided end-to-end cloud server management, continuous security monitoring, SSL configuration, automated backups, and software updates ensuring 99.9% uptime and bulletproof data security.</p>
          </div>
        </div>
      </FadeIn>

      {/* IMPACT SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>The Business Impact</h2>
          <p>Tangible growth metrics and operational benefits delivered to the legal team.</p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Nationwide Reach</h3>
              <p>Expanded client acquisition from a localized regional presence to an active, nationwide client base seeking legal notices and trademark assistance.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Consistent Lead Generation</h3>
              <p>Converted organic search traffic into daily high-intent phone and form inquiries for consumer grievance and contract drafting services.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>High Search Authority</h3>
              <p>Established strong organic rankings for competitive legal keywords across intellectual property, dispute resolution, and property due diligence.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Zero-Maintenance Peace of Mind</h3>
              <p>Fully managed hosting and technical support freed attorneys to focus 100% on legal advisory and client representation.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* EMBEDDED LAW FIRM AUDIT CTA */}
      <LawFirmAuditForm />

      {/* BOTTOM CTA SECTION */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingBottom: "10rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>Ready to Scale Your Law Firm Online?</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Whether you need a custom WordPress legal platform, a high-converting Next.js law firm website, or an authoritative legal SEO content engine, Beeclue Tech delivers proven results.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/web-design-for-law-firms" className={styles.ctaButton}>
              Web Design for Law Firms <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/contact" className={styles.ctaButton}>
              Start Your Project <ArrowRight className={styles.arrow} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
