"use client";

import Link from "next/link";
import styles from "@/app/page.module.css";
import { ArrowRight, LayoutTemplate, Briefcase, Globe, RefreshCcw, ShoppingCart, Search, CheckCircle2, Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";
import FaqAccordion from "@/components/FaqAccordion";
import ReviewsMeta from "@/components/ReviewsMeta";

export default function WebDesignTorontoPage() {
  const faqs = [
    { q: "How much does web design cost in Toronto?", a: "Web design costs in Toronto typically range from $5,000 to $15,000 for small business websites, $15,000 to $50,000 for custom or enterprise-level projects, and $50,000+ for complex web applications. We also offer an affordable $19/month website package for startups and small businesses looking for a professional online presence." },
    { q: "How long does it take to build a website?", a: "A standard business website typically takes 4 to 8 weeks from design to launch. More complex projects such as custom web applications, ecommerce platforms, or enterprise sites generally take 8 to 12 weeks depending on scope, features, and feedback cycles." },
    { q: "Do you build websites on WordPress or custom code?", a: "We work with both. WordPress is ideal for content-heavy sites that require easy content management. For performance-critical applications, SaaS platforms, and sites needing maximum speed and flexibility, we build custom solutions using Next.js and React. We recommend the best approach based on your specific business needs." },
    { q: "Will my website rank on Google?", a: "Yes. Every website we build is constructed with SEO best practices from the ground up, including schema markup, Core Web Vitals optimization, mobile-first design, clean URL structures, and proper heading hierarchy. This ensures your site is technically optimized to rank well on Google from launch day." },
    { q: "Do you offer website redesign services?", a: "Yes. We offer complete website redesign services. Our process begins with a thorough audit of your existing site to identify performance issues, SEO gaps, and conversion bottlenecks. We then rebuild your site with modern design, improved speed, better user experience, and stronger search engine visibility." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Web Design Services",
        "provider": {
          "@type": "Organization",
          "name": "Beeclue Tech"
        },
        "areaServed": "Toronto"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does web design cost in Toronto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Web design costs in Toronto typically range from $5,000 to $15,000 for small business websites, $15,000 to $50,000 for custom or enterprise-level projects, and $50,000+ for complex web applications. We also offer an affordable $19/month website package for startups and small businesses looking for a professional online presence."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard business website typically takes 4 to 8 weeks from design to launch. More complex projects such as custom web applications, ecommerce platforms, or enterprise sites generally take 8 to 12 weeks depending on scope, features, and feedback cycles."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build websites on WordPress or custom code?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work with both. WordPress is ideal for content-heavy sites that require easy content management. For performance-critical applications, SaaS platforms, and sites needing maximum speed and flexibility, we build custom solutions using Next.js and React. We recommend the best approach based on your specific business needs."
            }
          },
          {
            "@type": "Question",
            "name": "Will my website rank on Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every website we build is constructed with SEO best practices from the ground up, including schema markup, Core Web Vitals optimization, mobile-first design, clean URL structures, and proper heading hierarchy. This ensures your site is technically optimized to rank well on Google from launch day."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer website redesign services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We offer complete website redesign services. Our process begins with a thorough audit of your existing site to identify performance issues, SEO gaps, and conversion bottlenecks. We then rebuild your site with modern design, improved speed, better user experience, and stronger search engine visibility."
            }
          }
        ]
      }
    ]
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beeclue.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Web Design Toronto", "item": "https://beeclue.com/web-design-toronto" }
    ]
  };


  return (
    <main className={styles.main}>
      <ServiceTracker />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {/* HEADER SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Website Design &</span>
            <span className={styles.titleLine}>Development</span>
            <span className={styles.titleLine}>in Toronto</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Beeclue Tech engineers high-converting, modern, and lightning-fast websites for businesses across Toronto and the GTA. We build SEO-optimized digital platforms designed to capture leads, elevate your brand credibility, and drive measurable online growth.
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
            <h2>Professional Web Development Services for Toronto Businesses</h2>
            <p>
              Your website is the digital storefront of your business. In today's competitive landscape, it serves as your hardest-working asset—communicating your value proposition, building instant trust, and converting casual visitors into paying clients 24/7. When searching for web design Toronto, you need an agency that understands local market dynamics.
            </p>
            <p>
              At Beeclue Tech, an elite web design agency in Toronto, we don't just build visually stunning pages; we architect robust digital experiences. By merging premium aesthetics with rock-solid technical performance, we ensure your custom website not only looks incredible but ranks highly on Google and loads instantly. We specialize in WordPress web design, Shopify e-commerce, and bespoke Next.js web applications tailored for the Canadian market.
            </p>
            <p>
              Whether you need a fresh website redesign to modernize an outdated presence, a fully custom web application, or a lead-generating corporate site, our dedicated Toronto web developers are ready to elevate your digital footprint. We are proud to be recognized among the top web design companies in Ontario.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Why You Need a Professional Website</h3>
            <p>Businesses across the GTA rely on our web platforms to compete in the digital marketplace. A well-engineered site helps you:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Build instant trust and credibility with your audience</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Generate qualified local leads and high-value inquiries</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Dominate local Toronto and GTA search rankings</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Showcase your portfolio, case studies, and expertise</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Serve and inform customers 24/7, even when closed</span></div>
            </div>
          </div>

        </div>
      </FadeIn>

      {/* WEB DESIGN SERVICES GRID */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Toronto Website Development Services</h2>
          <p>Comprehensive, end-to-end web solutions tailored to scale your local or enterprise business.</p>
        </div>
        
        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Custom Website Design</h3>
            <p>We engineer visually captivating, bespoke websites strictly aligned with your brand identity. Our user-centric (UX/UI) designs guarantee intuitive navigation and strong engagement, ensuring your business stands out from local competitors.</p>
            <Link href="/contact" className={styles.learnMoreLink} aria-label="Contact us to learn more about Custom Web Applications">Learn More <ArrowRight size={16} /></Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LayoutTemplate size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Business Website Development</h3>
            <p>We build professional, corporate-grade websites explicitly structured to showcase your services and capture leads. Every site is fully responsive (mobile-friendly), fast-loading, and architected to support aggressive long-term scaling.</p>
            <Link href="/contact" className={styles.learnMoreLink} aria-label="Contact us to learn more about UI/UX Design">Learn More <ArrowRight size={16} /></Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Briefcase size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>WordPress Development</h3>
            <p>Empower your team with flexible, highly scalable WordPress platforms. We design custom WP themes, integrate essential plugins, and heavily optimize the backend for blazing performance and effortless content management.</p>
            <Link href="/contact" className={styles.learnMoreLink} aria-label="Contact us to learn more about Full Stack Development">Learn More <ArrowRight size={16} /></Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Globe size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Website Redesign</h3>
            <p>Is your current site bleeding leads due to outdated design or slow speeds? Our complete digital overhauls modernize your web presence, resolving technical debt and drastically improving user retention and conversion rates.</p>
            <Link href="/contact" className={styles.learnMoreLink} aria-label="Contact us to learn more about Backend Architecture">Learn More <ArrowRight size={16} /></Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <RefreshCcw size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Ecommerce Development</h3>
            <p>Scale your digital retail footprint with ultra-secure ecommerce ecosystems. From custom headless builds to advanced Shopify integrations, we optimize the entire checkout flow for maximum sales volume and zero friction.</p>
            <Link href="/contact" className={styles.learnMoreLink} aria-label="Contact us to learn more about Cloud Infrastructure">Learn More <ArrowRight size={16} /></Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ShoppingCart size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>SEO-Friendly Development</h3>
            <p>Beautiful code means higher rankings. We adhere to rigorous technical SEO best practices—implementing clean architecture, schema markup, and advanced caching so your site naturally dominates Toronto search results from day one.</p>
            <Link href="/contact" className={styles.learnMoreLink} aria-label="Contact us to learn more about API Integrations">Learn More <ArrowRight size={16} /></Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Search size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>
      </FadeIn>

      {/* INDUSTRIES SERVED */}
      <FadeIn className={styles.baseSection} style={{ background: "rgba(0, 0, 0, 0.5)" }}>
        <div className={styles.servicesHeader}>
          <h2>Industries We Serve in Toronto</h2>
          <p>We engineer high-performance web platforms for a diverse range of local and international sectors.</p>
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

      {/* FAQ SECTION */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Web Design Toronto FAQs</h2>
          <p>Common questions about our web design and development services.</p>
        </div>
        <FaqAccordion faqs={faqs} />
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
          
          <ReviewsMeta campaign="web_design_toronto_review" />
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
