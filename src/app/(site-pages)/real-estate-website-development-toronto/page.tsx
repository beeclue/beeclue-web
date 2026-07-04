"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  Home,
  LayoutTemplate,
  Globe,
  RefreshCcw,
  Zap,
  Shield,
  Users,
  BarChart3,
  Camera,
  ChevronDown,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function RealEstateWebsiteDevelopmentTorontoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How much does a real estate website cost in Toronto?", a: "Real estate website development costs in Toronto range from $5,000 for a basic IDX-integrated site to $50,000+ for a fully custom platform with virtual tours, CRM integration, and advanced property search. The final cost depends on design complexity, MLS/IDX integration requirements, and custom features." },
    { q: "Do you integrate MLS/IDX feeds into real estate websites?", a: "Yes. We integrate MLS/IDX feeds that automatically sync property listings from the Toronto Regional Real Estate Board (TRREB) and other Canadian real estate boards. This ensures your website always displays the most current property data without manual updates." },
    { q: "How long does it take to build a real estate website?", a: "A standard real estate website with MLS/IDX integration takes 4 to 8 weeks from discovery to launch. More complex projects with virtual tours, custom property search filters, CRM integration, and lead management systems can take 8 to 12 weeks. We provide a detailed timeline during the scoping phase." },
    { q: "Can you build websites for real estate brokerages and teams?", a: "Yes. We build websites for individual agents, brokerages, and real estate teams. Our solutions include agent profile pages, team directories, brokerage branding, and multi-user dashboards that allow each agent to manage their listings and leads independently." },
    { q: "Will my real estate website be mobile-friendly?", a: "Absolutely. Every real estate website we build is mobile-first and responsive across all devices. Property searches, listing details, contact forms, and virtual tours are optimized for seamless mobile experiences, which is critical since over 60% of property searches now happen on mobile devices." },
    { q: "Do you build custom property search features?", a: "Yes. We develop custom property search functionality with filters for price range, bedrooms, bathrooms, property type, neighborhood, school districts, transit access, and more. Advanced features include saved searches, property alerts, map-based search, and comparative market analysis tools." },
    { q: "What makes Beeclue Tech different from other real estate website developers?", a: "Beeclue Tech combines deep real estate industry knowledge with modern web development expertise. We understand the unique needs of Toronto real estate professionals — from MLS/IDX compliance to lead generation and virtual tour integration. Our Toronto-based team provides end-to-end service with ongoing support and optimization." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Real Estate Website Development",
        "provider": {
          "@type": "Organization",
          "name": "Beeclue Tech",
        },
        "areaServed": "Toronto",
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
            "name": "Real Estate Website Development Toronto",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a real estate website cost in Toronto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Real estate website development costs in Toronto range from $5,000 for a basic IDX-integrated site to $50,000+ for a fully custom platform with virtual tours, CRM integration, and advanced property search. The final cost depends on design complexity, MLS/IDX integration requirements, and custom features.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you integrate MLS/IDX feeds into real estate websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We integrate MLS/IDX feeds that automatically sync property listings from the Toronto Regional Real Estate Board (TRREB) and other Canadian real estate boards. This ensures your website always displays the most current property data without manual updates.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a real estate website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard real estate website with MLS/IDX integration takes 4 to 8 weeks from discovery to launch. More complex projects with virtual tours, custom property search filters, CRM integration, and lead management systems can take 8 to 12 weeks. We provide a detailed timeline during the scoping phase.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you build websites for real estate brokerages and teams?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build websites for individual agents, brokerages, and real estate teams. Our solutions include agent profile pages, team directories, brokerage branding, and multi-user dashboards that allow each agent to manage their listings and leads independently.",
            },
          },
          {
            "@type": "Question",
            "name": "Will my real estate website be mobile-friendly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Every real estate website we build is mobile-first and responsive across all devices. Property searches, listing details, contact forms, and virtual tours are optimized for seamless mobile experiences, which is critical since over 60% of property searches now happen on mobile devices.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you build custom property search features?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We develop custom property search functionality with filters for price range, bedrooms, bathrooms, property type, neighborhood, school districts, transit access, and more. Advanced features include saved searches, property alerts, map-based search, and comparative market analysis tools.",
            },
          },
          {
            "@type": "Question",
            "name": "What makes Beeclue Tech different from other real estate website developers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Beeclue Tech combines deep real estate industry knowledge with modern web development expertise. We understand the unique needs of Toronto real estate professionals — from MLS/IDX compliance to lead generation and virtual tour integration. Our Toronto-based team provides end-to-end service with ongoing support and optimization.",
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
            <span className={styles.titleLinePrimary}>Real Estate Website Development</span>
            <span className={styles.titleLine}>in Toronto</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Beeclue Tech builds high-converting real estate websites for Toronto
            agents, brokerages, and teams. From MLS/IDX integration to virtual
            tours and lead capture, we engineer real estate platforms designed to
            attract more clients and close more deals.
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
            <h2>Professional Real Estate Website Development for Toronto Businesses</h2>
            <p>
              Your website is the first impression potential clients have of your
              real estate business. In Toronto&apos;s competitive property market,
              a generic template website with outdated listings won&apos;t attract
              buyers or sellers. You need a professional, high-performing website
              that showcases properties beautifully, captures leads effectively,
              and positions you as the go-to real estate expert in your area.
            </p>
            <p>
              At Beeclue Tech, a leading real estate website development agency
              in Toronto, we don&apos;t just build websites — we create digital
              experiences that convert visitors into clients. Our deep
              understanding of the real estate industry, combined with modern web
              development expertise, allows us to build websites that solve the
              unique challenges Toronto real estate professionals face: MLS/IDX
              compliance, property search functionality, lead management, and
              virtual tour integration.
            </p>
            <p>
              Whether you&apos;re an individual agent looking to establish your
              online presence, a brokerage needing a multi-agent platform, or a
              team wanting advanced lead capture and CRM integration, our
              Toronto-based team delivers end-to-end solutions tailored to your
              specific needs. We&apos;ve helped Toronto real estate professionals
              transform their online presence and generate significantly more
              qualified leads through websites engineered for performance.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Why Invest in Professional Real Estate Website Development</h3>
            <p>Toronto real estate professionals rely on professional website development to:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Attract more qualified leads through organic search and property listings</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Showcase properties with stunning visuals and virtual tours</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Provide seamless MLS/IDX property search that keeps visitors engaged</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Capture and nurture leads with automated follow-up systems</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Establish credibility and trust with a professional online presence</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* REAL ESTATE SERVICES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Real Estate Website Development Services</h2>
          <p>End-to-end real estate website solutions engineered to attract clients and drive conversions.</p>
        </div>

        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Home className={styles.serviceIcon} />
            <h3>Custom Real Estate Website Design</h3>
            <p>We design and build bespoke real estate websites tailored to your brand identity and target market. No generic templates. Every element — from property galleries to contact forms — is crafted to engage potential buyers and sellers and convert them into clients.</p>
          </div>
          <div className={styles.serviceCard}>
            <Globe className={styles.serviceIcon} />
            <h3>MLS/IDX Integration</h3>
            <p>We integrate MLS/IDX feeds from the Toronto Regional Real Estate Board (TRREB) and other Canadian real estate boards. Your website automatically syncs property listings, ensuring visitors always see the most current inventory without manual updates.</p>
          </div>
          <div className={styles.serviceCard}>
            <Camera className={styles.serviceIcon} />
            <h3>Virtual Tour Integration</h3>
            <p>Stand out with immersive virtual tours that let potential buyers explore properties from anywhere. We integrate Matterport, 3D tours, and video walkthroughs directly into your property listings, increasing engagement and reducing unnecessary showings.</p>
          </div>
          <div className={styles.serviceCard}>
            <Users className={styles.serviceIcon} />
            <h3>Lead Capture & CRM Integration</h3>
            <p>Convert visitors into clients with strategic lead capture forms, property alert subscriptions, and automated follow-up sequences. We integrate with popular real estate CRMs like Follow Up Boss, LionDesk, and kvCORE to streamline your lead management.</p>
          </div>
          <div className={styles.serviceCard}>
            <BarChart3 className={styles.serviceIcon} />
            <h3>Property Search & Filtering</h3>
            <p>We build advanced property search functionality with filters for price, bedrooms, bathrooms, property type, neighborhood, school districts, and more. Map-based search, saved searches, and comparative market analysis tools keep visitors engaged longer.</p>
          </div>
          <div className={styles.serviceCard}>
            <Shield className={styles.serviceIcon} />
            <h3>Ongoing Support & Optimization</h3>
            <p>Launch is just the beginning. We provide ongoing website maintenance, MLS feed management, performance optimization, and feature additions to ensure your real estate website continues to perform and generate leads.</p>
          </div>
        </div>
      </FadeIn>

      {/* DEVELOPMENT PROCESS */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Real Estate Website Development Process</h2>
          <p>A proven, transparent process that delivers results on time and on budget.</p>
        </div>
        <div className={styles.processTimeline}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <h3>Discovery & Strategy</h3>
            <p>We start by understanding your real estate business, your target market, and your competitive landscape. Through stakeholder interviews, competitor analysis, and market research, we define a clear strategy that aligns your website with your lead generation goals. This phase includes technical architecture planning and a detailed project roadmap.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <h3>Design & Prototyping</h3>
            <p>Our design team crafts wireframes and high-fidelity mockups that balance brand aesthetics with conversion-focused UX. We prototype key user flows — property search, listing details, contact forms — so you can see and interact with the design before development begins. Iteration is built into this phase.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <h3>Development & Integration</h3>
            <p>This is where your website comes to life. Our developers build the custom frontend, integrate MLS/IDX feeds, connect CRM systems, and implement virtual tour functionality. Every build follows modern web best practices with clean, maintainable code. We run continuous QA throughout development.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <h3>Launch & Optimization</h3>
            <p>After rigorous testing across devices and browsers, we launch your website with a comprehensive checklist covering performance, SEO, security, and analytics. Post-launch, we monitor performance metrics and run conversion rate optimization experiments to continuously improve your lead generation.</p>
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE US */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Choose Our Real Estate Website Team</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Real Estate Industry Expertise</h3>
              <p>Our team understands the unique needs of Toronto real estate professionals. From MLS/IDX compliance to lead generation and virtual tour integration, we build websites that solve real industry challenges and drive measurable results.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Conversion-Focused Design</h3>
              <p>Every design decision we make is driven by data and conversion psychology. We don&apos;t design for awards; we design for lead generation. Our real estate websites consistently achieve higher lead capture rates than industry averages.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Performance-First Architecture</h3>
              <p>Page speed directly impacts lead generation. We build real estate websites that load in under 2 seconds, earn top Core Web Vitals scores, and provide a frictionless experience across every device and connection speed.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Toronto-Based Team</h3>
              <p>We&apos;re local. When you work with Beeclue Tech, you get a dedicated Toronto team that understands the Canadian real estate market, TRREB compliance requirements, and local consumer expectations. No offshore surprises.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Transparent Process</h3>
              <p>We believe in radical transparency. You get a dedicated project manager, regular progress updates, access to our project management tools, and honest timelines. No black boxes, no surprises.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Long-Term Partnership</h3>
              <p>We don&apos;t disappear after launch. Beeclue Tech provides ongoing website maintenance, MLS feed management, feature development, and strategic guidance to ensure your real estate website continues to generate leads.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* TECHNOLOGY STACK */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Our Real Estate Website Technology Stack</h2>
          <p>We leverage modern web technologies and real estate platforms to build websites that perform at the highest level.</p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <h3>Next.js & React</h3>
            <p>Blazing-fast frontend framework</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>MLS/IDX APIs</h3>
            <p>Real-time property data integration</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Matterport</h3>
            <p>3D virtual tour technology</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Tailwind CSS</h3>
            <p>Utility-first styling</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>CRM Integrations</h3>
            <p>Follow Up Boss, LionDesk, kvCORE</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Google Analytics</h3>
            <p>Performance tracking and insights</p>
          </div>
        </div>
      </FadeIn>

      {/* PRICING FACTORS */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Real Estate Website Development Pricing Factors</h2>
          <p>Every project is unique. Here&apos;s what influences the investment required for your real estate website.</p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Design Complexity</h3>
              <p>Custom designs with unique animations, property galleries, and brand-specific visual systems require more design and development time than adapting existing templates.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>MLS/IDX Integration Requirements</h3>
              <p>Basic IDX integration displaying listings is more affordable than advanced features like saved searches, property alerts, and comparative market analysis tools.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Virtual Tour & Media Features</h3>
              <p>Integration with Matterport, 3D tours, and video walkthroughs adds development complexity and may require ongoing hosting costs for media assets.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>CRM & Lead Management</h3>
              <p>Connecting your website with CRM systems, setting up automated lead capture forms, and implementing follow-up sequences adds integration development time.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Multi-Agent & Brokerage Features</h3>
              <p>Websites for brokerages with multiple agents require agent profile management, team directories, and multi-user dashboards that increase project scope.</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p style={{ color: "var(--muted)", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            Ready to discuss your project? We provide transparent quotes with no hidden fees.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get Your Free Quote <ArrowRight className={styles.arrow} />
          </Link>
        </div>
      </FadeIn>

      {/* RELATED SERVICES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Related Services</h2>
          <p>Explore our other digital services that complement your real estate website.</p>
        </div>
        <div className={styles.scroller}>
          <Link href="/web-design-for-real-estate" className={styles.serviceCard} style={{ textDecoration: "none", color: "inherit" }}>
            <h3>Web Design for Real Estate</h3>
            <p>Premium web design services specifically tailored for real estate professionals, combining stunning visuals with conversion-focused UX.</p>
            <span style={{ color: "var(--primary-light)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
          <Link href="/ecommerce-development-toronto" className={styles.serviceCard} style={{ textDecoration: "none", color: "inherit" }}>
            <h3>Ecommerce Development Toronto</h3>
            <p>Full-service ecommerce development covering Shopify, WooCommerce, headless commerce, and B2B wholesale portals for Toronto businesses.</p>
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
          <p>Common questions about our real estate website development services in Toronto.</p>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.q}
                <ChevronDown
                  size={20}
                  className={`${styles.faqChevron} ${openFaq === i ? styles.faqChevronOpen : ""}`}
                />
              </button>
              <div className={`${styles.faqAnswer} ${openFaq === i ? styles.faqAnswerOpen : ""}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* GTA AREA */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Real Estate Website Development Across Toronto & the GTA
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "1.25rem", maxWidth: "800px", margin: "0 auto 2rem auto" }}>
          Beeclue Tech proudly serves real estate professionals across:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
          {["Downtown Toronto", "North York", "Scarborough", "Etobicoke", "Mississauga", "Brampton", "Markham", "Vaughan"].map((city) => (
            <span key={city} style={{ padding: "0.5rem 1.5rem", border: "1px solid var(--border)", borderRadius: "50px", color: "var(--primary-light)" }}>
              {city}
            </span>
          ))}
        </div>
        <p style={{ color: "var(--muted)", fontSize: "1.25rem", maxWidth: "800px", margin: "0 auto" }}>
          If your real estate business operates in the Greater Toronto Area, we can build a website that generates more leads and closes more deals.
        </p>
      </FadeIn>

      {/* CTA SECTION */}
      <FadeIn className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Ready to Build Your Real Estate Website?</h2>
          <p className={styles.footerSub}>
            Let&apos;s discuss your project. Our Toronto real estate website team
            will create a high-converting platform that attracts more clients
            and grows your business.
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