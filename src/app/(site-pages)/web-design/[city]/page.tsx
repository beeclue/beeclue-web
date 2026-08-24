import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import styles from "@/app/page.module.css";
import { ArrowRight, Globe, Check, Shield, Zap, Sparkles, TrendingUp, CheckCircle2, Code, Smartphone, ShoppingCart, Search, PenTool, Layout } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";
import FaqAccordion from "@/components/FaqAccordion";
import ReviewsMeta from "@/components/ReviewsMeta";
import { localPagesData } from "@/data/local-pages";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return Object.keys(localPagesData).map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const config = localPagesData[city];
  if (!config) {
    return {};
  }

  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: {
      canonical: `https://beeclue.com/web-design/${city}`,
    },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: `https://beeclue.com/web-design/${city}`,
      siteName: "Beeclue Tech",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.metaTitle,
      description: config.metaDescription,
    },
  };
}

export default async function LocalWebDesignPage({ params }: Props) {
  const { city } = await params;
  const config = localPagesData[city];
  if (!config) {
    notFound();
  }

  const faqs = [
    {
      q: `How much does web design cost in ${config.city}?`,
      a: `Our fully managed website package is only $29/month, with zero setup fees and zero hidden costs. This includes custom design, hosting, security updates, and unlimited content updates. We don't charge high upfront fees like traditional agencies, making high-speed websites accessible for every local business.`
    },
    {
      q: `Are you physically located in ${config.city}?`,
      a: `Our core design studio is located in Toronto, but we build and fully support websites for local service businesses and professionals throughout ${config.city} and the surrounding ${config.region} region. Since all design, development, and support are handled digitally, we deliver seamless remote service.`
    },
    {
      q: "What is included in the $29/month website package?",
      a: "Everything needed to run your online storefront: custom mobile-friendly design, premium hosting, a custom domain name, SSL security certificate, daily backups, and unlimited edits whenever you need photos, phone numbers, or text updated."
    },
    {
      q: `Will my website rank on Google in ${config.city}?`,
      a: `Yes. Every page we build is technically optimized for local searches. We structure your site with clean URL patterns, proper heading hierarchies, mobile responsiveness, and custom local business schema so search engines can easily find and rank your business in ${config.city}.`
    },
    {
      q: "Can I cancel the subscription at any time?",
      a: "Yes. Our managed subscription is flat-rate and billed month-to-month. There are no contracts, lock-ins, or cancellation fees. You can cancel at any time if you no longer need the site."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": `Beeclue Tech Web Design ${config.city}`,
        "image": "https://beeclue.com/images/og-image.jpg",
        "url": `https://beeclue.com/web-design/${config.slug}`,
        "telephone": "647-555-0199",
        "priceRange": "$29/mo",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Toronto",
          "addressRegion": "ON",
          "postalCode": "M5V 2L7",
          "addressCountry": "CA"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": `${config.city}, Ontario`
        },
        "description": `Professional web design and managed website services for small businesses and contractors in ${config.city}, ON.`
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beeclue.com/services" },
      { "@type": "ListItem", "position": 3, "name": `Web Design ${config.city}`, "item": `https://beeclue.com/web-design/${config.slug}` }
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
          <h1 className={styles.title} style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", lineHeight: 1.1 }}>
            <span className={styles.titleLinePrimary}>{config.h1}</span>
            <span className={styles.titleLine}>Made Simple.</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.2rem", maxWidth: "800px" }}>
            {config.subheader} We take care of everything so you can focus on running your business.
          </p>
          <div className={styles.heroRatingContainer}>
            <Link href={`/contact?service=web-design&city=${config.slug}`} className={styles.ctaButton}>
              Get Your Free Mockup <ArrowRight className={styles.arrow} />
            </Link>
            <div className={styles.heroRatingBadge}>
              <div style={{ color: "#fbbf24", fontSize: "1.25rem", letterSpacing: "2px" }}>★★★★★</div>
              <span style={{ color: "var(--muted)", fontSize: "0.875rem" }}>5.0 rated local support</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* CORE BENEFITS INTRODUCTION */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Why Local Businesses in {config.city} Need High-Speed Websites</h2>
            <p>
              In today's digital marketplace, your website is your hardest-working employee. When local customers in {config.city} search for services, they look for businesses that appear credible and professional. If your website is slow, hard to navigate on mobile, or shows a warning screen, they will instantly click away to a competitor.
            </p>
            <p>
              At Beeclue Tech, we specialize in building lightning-fast, mobile-friendly websites designed specifically for local trade contractors, legal offices, medical practices, and boutique shops. By combining clean modern aesthetics with maximum speed optimization, we ensure your site looks professional on any device and stands out in local search results.
            </p>
            <p>
              Best of all, we operate on a managed subscription model starting at just <strong>$29/month</strong>. This means you get a custom website with absolutely zero design skills required, zero technical overhead, and zero high upfront costs. We handle all edits, hosting, and domain renewals for you.
            </p>
          </div>
          <div className={styles.luxuryCard}>
            <h3>What is Included for $29/mo</h3>
            <p>Our flat-rate monthly subscription includes everything you need to keep your online storefront active and professional:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Custom mobile-friendly website design</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Unlimited monthly updates and edits</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Super-fast premium web hosting</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>SSL security certificate and daily backups</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Custom domain registration and renewal</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* METRICS & VALUE CARDS */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className={styles.servicesHeader}>
          <h2>The Business Impact of Web Performance</h2>
          <p>Speed and simplicity translate directly to business growth. Here is how we build your edge in {config.city}:</p>
        </div>

        <div className={styles.valueGrid}>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", padding: "2.5rem", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Zap size={40} color="var(--primary-light)" />
            <h3>Lightning Load Speed</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
              Our custom code structures ensure your page loads in under one second on any cellular connection, keeping mobile visitors engaged from the first click.
            </p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", padding: "2.5rem", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Globe size={40} color="var(--primary-light)" />
            <h3>Local Search Visibility</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
              We build custom schemas, clean permalinks, and structural headings directly into your pages, making it easy for search engines in {config.city} to index your services.
            </p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", padding: "2.5rem", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Shield size={40} color="var(--primary-light)" />
            <h3>Managed Security</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
              Every site comes with active SSL security, spam prevention, and automatic nightly backups so your business is protected 24/7.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* FOCUS INDUSTRIES */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "6rem", paddingBottom: "6rem", background: "var(--bg-dark)" }}>
        <div className={styles.servicesHeader}>
          <h2>Tailored Solutions for {config.city} Businesses</h2>
          <p>Customized layouts and structures built specifically for your sector:</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
          {config.primaryNiches.map((niche, index) => (
            <div key={index} style={{ padding: "2rem", background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <Sparkles size={20} color="var(--primary-light)" />
                <h4 style={{ margin: 0, fontSize: "1.1rem" }}>{niche}</h4>
              </div>
              <p style={{ color: "var(--muted)", fontSize: "0.875rem", margin: 0 }}>
                Clean layout designed to highlight service bookings, showcase project reviews, or handle new client intake forms.
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* CASE STUDY SPOTLIGHT */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
        <div className={styles.caseStudyList}>
          <div className={styles.caseStudyListItem}>
            <div className={styles.caseStudyListContent} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "2px", color: "var(--primary-light)", fontWeight: "bold", marginBottom: "0.5rem" }}>Featured Regional Project</span>
              <h2>{config.featuredCaseStudy.title}</h2>
              <p>{config.featuredCaseStudy.description}</p>
              <div style={{ display: "flex", gap: "0.75rem", margin: "1rem 0" }}>
                {config.featuredCaseStudy.tech.map((t, idx) => (
                  <span key={idx} style={{ background: "rgba(255,255,255,0.05)", padding: "0.3rem 0.8rem", borderRadius: "99px", fontSize: "0.8rem", color: "var(--muted)" }}>{t}</span>
                ))}
              </div>
              <div>
                <Link href={config.featuredCaseStudy.link} className={styles.ctaButtonLight} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  Read Case Study <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className={styles.caseStudyListImage} style={{ background: "rgba(255,255,255,0.01)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "300px" }}>
              <div style={{ textAlign: "center", padding: "3rem" }}>
                <div style={{ fontSize: "3.5rem", fontWeight: "bold", color: "var(--primary-light)", marginBottom: "0.5rem" }}>{config.localStat.stat}</div>
                <div style={{ color: "var(--muted)", fontSize: "0.95rem", maxWidth: "250px", margin: "0 auto" }}>{config.localStat.label}</div>
              </div>
            </div>
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

      {/* TESTIMONIALS SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.testimonialsSection}`}>
        <div className={styles.testimonialsTop}>
          <h2>What Our Clients Say</h2>
          <ReviewsMeta campaign={`local_web_design_${config.slug}`} />
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

      {/* OTHER SERVICES SECTION */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Other Services We Offer</h2>
          <p>
            Explore our specialized digital services to help your business grow.
          </p>
        </div>
        <div className={styles.scroller}>
          <Link
            href="/web-design-toronto"
            className={styles.serviceCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Globe size={32} color="var(--primary-light)" style={{ marginBottom: "1rem" }} />
            <h3>Web Design & Development</h3>
            <p>
              Custom web design services — from concept and branding through to responsive development and launch.
            </p>
            <span
              style={{
                color: "var(--primary-light)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
          <Link
            href="/custom-software-development-toronto"
            className={styles.serviceCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Code size={32} color="var(--primary-light)" style={{ marginBottom: "1rem" }} />
            <h3>Custom Software</h3>
            <p>
              Tailor-made software solutions designed to streamline operations, automate processes, and scale with your business.
            </p>
            <span
              style={{
                color: "var(--primary-light)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
          <Link
            href="/mobile-app-development-toronto"
            className={styles.serviceCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Smartphone size={32} color="var(--primary-light)" style={{ marginBottom: "1rem" }} />
            <h3>Mobile Apps</h3>
            <p>
              Custom iOS and Android mobile applications designed for seamless user experiences and powerful performance.
            </p>
            <span
              style={{
                color: "var(--primary-light)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
          <Link
            href="/ecommerce-development-toronto"
            className={styles.serviceCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ShoppingCart size={32} color="var(--primary-light)" style={{ marginBottom: "1rem" }} />
            <h3>E-Commerce</h3>
            <p>
              Full-service e-commerce development covering Shopify, WooCommerce, headless commerce, and B2B wholesale portals.
            </p>
            <span
              style={{
                color: "var(--primary-light)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
          <Link
            href="/seo-services-toronto"
            className={styles.serviceCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Search size={32} color="var(--primary-light)" style={{ marginBottom: "1rem" }} />
            <h3>SEO & Marketing</h3>
            <p>
              Data-driven Search Engine Optimization to help you rank higher, attract more traffic, and generate quality leads.
            </p>
            <span
              style={{
                color: "var(--primary-light)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
          <Link
            href="/ui-ux-design-toronto"
            className={styles.serviceCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <PenTool size={32} color="var(--primary-light)" style={{ marginBottom: "1rem" }} />
            <h3>UI/UX Design</h3>
            <p>
              User-centric interface and experience design that boosts engagement, simplifies navigation, and maximizes conversions.
            </p>
            <span
              style={{
                color: "var(--primary-light)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
          <Link
            href="/wordpress-web-design-canada"
            className={styles.serviceCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Layout size={32} color="var(--primary-light)" style={{ marginBottom: "1rem" }} />
            <h3>WordPress Design</h3>
            <p>
              Professional WordPress development. We build scalable, secure, and easy-to-manage websites tailored to your needs.
            </p>
            <span
              style={{
                color: "var(--primary-light)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </FadeIn>

      {/* FAQS SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "6rem", paddingBottom: "6rem", background: "var(--bg-dark)" }}>
        <div className={styles.servicesHeader}>
          <h2>Frequently Asked Questions</h2>
          <p>Common questions about our web design services in {config.city}.</p>
        </div>
        <FaqAccordion faqs={faqs} />
      </FadeIn>

      {/* FOOTER CALL TO ACTION */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingBottom: "10rem", paddingTop: "8rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <TrendingUp size={48} color="var(--primary-light)" style={{ marginBottom: "2rem" }} />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>Get a Free Homepage Mockup for Your Business</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Let us show you what your brand looks like on a modern, high-speed layout. We will design a custom preview home page for your business with zero upfront costs or obligations.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={`/contact?service=web-design&city=${config.slug}`} className={styles.ctaButton}>
              Claim Your Free Mockup <ArrowRight className={styles.arrow} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
