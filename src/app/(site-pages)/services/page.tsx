"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ReviewsMeta from "@/components/ReviewsMeta";

const servicesList = [
  {
    title: "Custom Software Development",
    href: "/custom-software-development-toronto/",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Custom Software Development and Engineering in Toronto",
    desc: "Tailored business management systems, SaaS platforms, and enterprise CRM/ERP solutions engineered to streamline workflows and replace fragmented tools with unified architectures.",
    features: ["Business management systems", "SaaS platform development", "CRM & ERP integrations", "Custom client portals"],
  },
  {
    title: "Web Design & Development",
    href: "/web-design-toronto/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Modern Web Design and Development Toronto",
    desc: "Bespoke, high-converting websites engineered with Next.js and React. Mobile-first responsive layouts, rapid loading speeds, and local GTA search optimization.",
    features: ["Bespoke corporate websites", "Landing page optimization", "Next.js & React architectures", "Conversion rate optimization"],
  },
  {
    title: "WordPress Development Canada",
    href: "/wordpress-web-design-canada/",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    imageAlt: "WordPress Web Design Canada",
    desc: "Custom WordPress themes built from scratch with zero plugin bloat. Hand-coded, headless-ready, and hardened for maximum performance, security, and effortless publishing.",
    features: ["Custom theme development", "Zero-bloat hand-coded builds", "Headless WordPress setups", "Advanced security hardening"],
  },
  {
    title: "Mobile App Development",
    href: "/mobile-app-development-toronto/",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Mobile App Development iOS and Android",
    desc: "Reliable, high-performance mobile applications for iOS and Android. From initial startup MVP prototypes to enterprise cross-platform React Native digital products.",
    features: ["Native iOS & Android apps", "Cross-platform React Native", "Startup MVP development", "App Store & Play Store launch"],
  },
  {
    title: "Ecommerce Development",
    href: "/ecommerce-development-toronto/",
    image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Ecommerce Development Shopify and WooCommerce",
    desc: "Secure, high-converting digital storefronts built on Shopify Plus, WooCommerce, and custom headless checkouts designed to scale sales volume across Canada.",
    features: ["Shopify Plus development", "WooCommerce customization", "Payment gateway integration", "Inventory & order sync"],
  },
  {
    title: "SEO & Digital Visibility",
    href: "/seo-services-toronto/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imageAlt: "SEO Services and Search Visibility Toronto",
    desc: "Data-driven SEO strategies targeting Toronto, the GTA, and national markets. Technical site health, Core Web Vitals tuning, and AI conversational search optimization.",
    features: ["Technical SEO & site speed", "Local GTA search ranking", "Content gap & keyword strategy", "AEO / AI search readiness"],
  },
  {
    title: "UI/UX Design & Branding",
    href: "/ui-ux-design-toronto/",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "UI/UX Design and Brand Identity Systems",
    desc: "Strategic, user-centric interfaces and brand identities crafted in Figma. Design systems, wireframes, and prototypes engineered to eliminate customer friction and inspire trust.",
    features: ["Figma UI design systems", "UX research & wireframing", "Brand identity & logo suites", "Interactive clickable prototypes"],
  },
  {
    title: "Website Maintenance & Support",
    href: "/website-maintenance-toronto/",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Website Maintenance and Speed Optimization",
    desc: "Proactive website maintenance, 24/7 security monitoring, monthly updates, and Core Web Vitals optimization to keep your digital platform running at peak performance.",
    features: ["24/7 uptime monitoring", "Core Web Vitals tuning", "Regular security patches", "Dedicated technical support"],
  },
  {
    title: "Digital Marketing & Growth",
    href: "/digital-marketing-toronto/",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Digital Marketing and Growth Strategy",
    desc: "Multi-channel digital marketing campaigns that drive qualified inbound leads, elevate brand recognition, and deliver measurable return on investment.",
    features: ["PPC & search ad campaigns", "Conversion funnel optimization", "B2B lead generation", "Performance tracking & analytics"],
  },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Beeclue Tech Services",
        "description": "Explore the range of digital services offered by Beeclue Tech including Web Design, Custom Software, and SEO.",
        "url": "https://beeclue.com/services"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com" },
          { "@type": "ListItem", "position": 2, "name": "Services" }
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
            <span className={styles.titleLinePrimary}>Software & Web</span>
            <span className={styles.titleLine}>Development Services</span>
            <span className={styles.titleLine}>in Toronto</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Beeclue Tech provides professional software, web, and mobile app development services for businesses in Toronto. We design and build scalable digital platforms that help companies streamline operations, improve customer experiences, and grow faster.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get in touch <ArrowRight className={styles.arrow} />
          </Link>
        </div>
      </FadeIn>

      {/* DETAILED SERVICES LIST */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Effortlessly Transform Your Ideas into Stunning, Professional Layouts with Ease</h2>
          <p>End-to-end digital engineering and design services built for Canadian businesses looking to scale.</p>
        </div>
        
        <div className={styles.scroller}>
          {servicesList.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceCardImage}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.serviceCardBody}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <Check size={16} color="var(--primary)" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className={styles.learnMoreLink} aria-label={`Learn more about ${service.title}`}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* TECH STACK SECTION */}
      <FadeIn className={styles.baseSection} style={{ background: "rgba(0, 0, 0, 0.5)" }}>
        <div className={styles.servicesHeader}>
          <h2>Tech Stack</h2>
          <p>Our development team works with modern technologies to build scalable digital platforms.</p>
        </div>
        <div className={styles.techTags}>
          <span>Flutter</span>
          <span>WordPress</span>
          <span>Firebase</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>Remix</span>
          <span>Next.js</span>
        </div>
      </FadeIn>

      {/* VALUE PROPOSITION SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Businesses Choose Us</h2>
          <p>Key architectural standards, transparent workflows, and engineering practices that guarantee business results.</p>
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
          
          <ReviewsMeta campaign="services_review" />
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
