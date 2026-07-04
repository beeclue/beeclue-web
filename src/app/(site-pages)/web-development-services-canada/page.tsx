"use client";

import Link from "next/link";
import styles from "@/app/page.module.css";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  Globe,
  Code,
  ShoppingCart,
  Layout,
  Database,
  TrendingUp,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";
import FaqAccordion from "@/components/FaqAccordion";

export default function WebDevelopmentServicesCanadaPage() {

  const faqs = [
    { q: "How much do web development services cost in Canada?", a: "Web development costs in Canada range from $5,000 for a basic small business website to $100,000+ for complex enterprise applications. A custom business website typically costs $10,000-$30,000, e-commerce sites range from $15,000-$50,000, and custom software applications start at $25,000. The final cost depends on complexity, features, integrations, and whether you need ongoing support." },
    { q: "Do you work with businesses outside of Toronto?", a: "Absolutely. While headquartered in Toronto, Beeclue Tech serves businesses across all Canadian provinces and territories. We work with clients in Vancouver, Calgary, Edmonton, Winnipeg, Montreal, Ottawa, Halifax, Victoria, and every city in between. Our remote-first approach means location is never a barrier to delivering exceptional web development." },
    { q: "What web development services do you offer?", a: "We offer comprehensive web development services including: custom website design and development, e-commerce development (Shopify, WooCommerce, headless commerce), custom web applications, CMS development (WordPress, headless CMS), mobile-responsive design, API development and integrations, performance optimization, SEO, and ongoing maintenance and support." },
    { q: "How long does a typical web development project take?", a: "Project timelines vary based on scope. A basic business website takes 4-6 weeks. A custom e-commerce site takes 6-10 weeks. Complex web applications take 10-20 weeks. Enterprise-level projects with extensive integrations can take 4-6 months. We provide a detailed project timeline with milestones during the scoping phase." },
    { q: "What technologies do you use for web development?", a: "We use modern, industry-leading technologies: Next.js and React for frontend development, Node.js and Python for backend, WordPress and headless CMS for content management, Shopify and WooCommerce for e-commerce, PostgreSQL and MongoDB for databases, and cloud platforms like AWS and Cloudflare for hosting. We choose the best technology stack for each project&apos;s specific needs." },
    { q: "Do you build bilingual (English/French) websites?", a: "Yes. We build fully bilingual English/French websites for businesses operating in Canada, particularly those serving Quebec and federal government clients. Our bilingual sites include proper language switching, culturally appropriate content, and SEO optimization for both English and French search queries." },
    { q: "Can you work with our existing design or branding?", a: "Absolutely. We frequently work with businesses that have existing brand guidelines, design mockups, or partial implementations. We can develop from your Figma files, Adobe XD designs, or existing brand assets while ensuring the final product is technically sound, performant, and built to scale." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Web Development Services",
        "provider": {
          "@type": "Organization",
          "name": "Beeclue Tech",
        },
        "areaServed": "Canada",
        "description":
          "Professional web development services across Canada. Custom websites, e-commerce platforms, and software solutions for businesses nationwide.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "CAD",
          "priceRange": "$5000-$100000",
        },
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
            "name": "Web Development Services Canada",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much do web development services cost in Canada?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Web development costs in Canada range from $5,000 for a basic small business website to $100,000+ for complex enterprise applications. A custom business website typically costs $10,000-$30,000, e-commerce sites range from $15,000-$50,000, and custom software applications start at $25,000. The final cost depends on complexity, features, integrations, and whether you need ongoing support.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you work with businesses outside of Toronto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. While headquartered in Toronto, Beeclue Tech serves businesses across all Canadian provinces and territories. We work with clients in Vancouver, Calgary, Edmonton, Winnipeg, Montreal, Ottawa, Halifax, Victoria, and every city in between. Our remote-first approach means location is never a barrier to delivering exceptional web development.",
            },
          },
          {
            "@type": "Question",
            "name": "What web development services do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer comprehensive web development services including: custom website design and development, e-commerce development (Shopify, WooCommerce, headless commerce), custom web applications, CMS development (WordPress, headless CMS), mobile-responsive design, API development and integrations, performance optimization, SEO, and ongoing maintenance and support.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does a typical web development project take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Project timelines vary based on scope. A basic business website takes 4-6 weeks. A custom e-commerce site takes 6-10 weeks. Complex web applications take 10-20 weeks. Enterprise-level projects with extensive integrations can take 4-6 months. We provide a detailed project timeline with milestones during the scoping phase.",
            },
          },
          {
            "@type": "Question",
            "name": "What technologies do you use for web development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use modern, industry-leading technologies: Next.js and React for frontend development, Node.js and Python for backend, WordPress and headless CMS for content management, Shopify and WooCommerce for e-commerce, PostgreSQL and MongoDB for databases, and cloud platforms like AWS and Cloudflare for hosting. We choose the best technology stack for each project's specific needs.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you build bilingual (English/French) websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build fully bilingual English/French websites for businesses operating in Canada, particularly those serving Quebec and federal government clients. Our bilingual sites include proper language switching, culturally appropriate content, and SEO optimization for both English and French search queries.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you work with our existing design or branding?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We frequently work with businesses that have existing brand guidelines, design mockups, or partial implementations. We can develop from your Figma files, Adobe XD designs, or existing brand assets while ensuring the final product is technically sound, performant, and built to scale.",
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
      <FadeIn
        className={styles.baseSection}
        style={{
          paddingTop: "20vh",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className={styles.heroContent}>
          <h1
            className={styles.title}
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            <span className={styles.titleLinePrimary}>
              Web Development Services
            </span>
            <span className={styles.titleLine}>Across Canada</span>
          </h1>
          <p
            className={styles.subtitle}
            style={{ fontSize: "1.25rem", maxWidth: "800px" }}
          >
            Beeclue Tech delivers professional web development services to
            businesses across Canada. From custom websites and e-commerce
            platforms to enterprise web applications, we build digital
            solutions that drive growth from coast to coast.
          </p>
          <div className={styles.heroRatingContainer}>
            <Link href="/contact" className={styles.ctaButton}>
              Get a Free Consultation <ArrowRight className={styles.arrow} />
            </Link>
            <div className={styles.heroRatingBadge}>
              <div
                style={{
                  color: "#fbbf24",
                  fontSize: "1.25rem",
                  letterSpacing: "2px",
                }}
              >
                ★★★★★
              </div>
              <span
                style={{ color: "var(--muted)", fontSize: "0.875rem" }}
              >
                5.0 from 30+ reviews
              </span>
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
            <h2>
              Canada&apos;s Trusted Web Development Partner
            </h2>
            <p>
              In today&apos;s digital-first economy, your website is the most
              important asset your business owns. It&apos;s your storefront,
              your sales team, and your brand ambassador — all working 24/7.
              But generic templates and DIY builders can only take you so far.
              To truly compete and grow, you need custom web development
              tailored to your business, your market, and your customers.
            </p>
            <p>
              Beeclue Tech is a full-service web development company serving
              businesses across Canada. From our headquarters in Toronto, we
              partner with companies in every province and territory to build
              websites, e-commerce platforms, and web applications that deliver
              measurable results. Whether you&apos;re a startup in Vancouver,
              a retailer in Montreal, a service business in Calgary, or an
              enterprise in Ottawa, we have the expertise and experience to
              build the digital presence your business deserves.
            </p>
            <p>
              Our nationwide reach doesn&apos;t mean generic solutions. We take
              the time to understand your local market, your competitive
              landscape, and your unique business challenges. Every project we
              deliver is built with performance, scalability, and conversion
              optimization at its core — because a beautiful website that
              doesn&apos;t generate revenue is just digital art.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Why Canadian Businesses Choose Beeclue Tech</h3>
            <p>
              Businesses across Canada partner with us because we:
            </p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Build custom solutions, not cookie-cutter templates
                </span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Engineer every site for performance and conversion
                </span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Understand Canadian markets and consumer expectations
                </span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Provide end-to-end service from strategy to ongoing support
                </span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <Check size={24} color="var(--primary-light)" />
                <span>
                  Deliver transparent pricing with no hidden fees
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* SERVICES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Web Development Services</h2>
          <p>
            Comprehensive web development solutions for every business need
            across Canada.
          </p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Layout className={styles.serviceIcon} />
            <h3>Custom Website Development</h3>
            <p>
              We build custom websites from scratch — no templates, no
              shortcuts. Every site is designed and developed to align with
              your brand, speak to your audience, and achieve your business
              goals. From corporate sites to landing pages, we create digital
              experiences that stand out and convert.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <ShoppingCart className={styles.serviceIcon} />
            <h3>E-Commerce Development</h3>
            <p>
              Sell more online with a custom e-commerce solution built for
              conversion. We develop on Shopify, WooCommerce, and headless
              commerce platforms, creating stores that load fast, look
              stunning, and make it effortless for customers to buy. From
              product catalogs to checkout optimization, we build stores
              that generate revenue.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Code className={styles.serviceIcon} />
            <h3>Web Application Development</h3>
            <p>
              Need more than a website? We build custom web applications —
              from customer portals and dashboards to SaaS platforms and
              internal tools. Our full-stack development team uses React,
              Next.js, Node.js, and modern databases to build scalable,
              secure applications that solve real business problems.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Globe className={styles.serviceIcon} />
            <h3>CMS Development</h3>
            <p>
              Take control of your content with a custom CMS implementation.
              We build on WordPress, headless CMS platforms (Strapi, Contentful,
              Sanity), and custom content systems that make it easy for your
              team to manage and update your website without touching code.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Database className={styles.serviceIcon} />
            <h3>API Development & Integrations</h3>
            <p>
              Connect your website with the tools you already use. We build
              custom APIs and integrate with CRMs (Salesforce, HubSpot),
              payment processors, shipping providers, accounting software,
              and third-party services to create a connected digital
              ecosystem for your business.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <TrendingUp className={styles.serviceIcon} />
            <h3>Performance & SEO</h3>
            <p>
              Every website we build is engineered for speed and search
              visibility. We optimize Core Web Vitals, implement technical
              SEO best practices, build fast-loading pages, and create
              content architectures that help you rank higher and convert
              more visitors into customers.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* PROCESS */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Development Process</h2>
          <p>
            A proven methodology that delivers results on time, on budget,
            and beyond expectations.
          </p>
        </div>
        <div className={styles.processTimeline}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <h3>Discovery & Strategy</h3>
            <p>
              We start by understanding your business inside and out — your
              goals, your customers, your competitors, and your market. This
              includes stakeholder interviews, user research, competitive
              analysis, and technical assessment. The output is a clear
              strategy and project roadmap that aligns our development with
              your business objectives.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <h3>Design & Architecture</h3>
            <p>
              Our designers create wireframes, user flows, and high-fidelity
              mockups that balance beauty with function. Simultaneously, our
              architects design the technical foundation — database schema,
              API structure, hosting infrastructure, and security
              architecture. You see and approve everything before
              development begins.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <h3>Agile Development</h3>
            <p>
              We build in agile sprints with regular demos and feedback
              cycles. You see progress every two weeks and can provide
              input throughout the process. This iterative approach ensures
              the final product matches your vision while allowing us to
              adapt to changing requirements without derailing the project.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <h3>Testing & Launch</h3>
            <p>
              Rigorous quality assurance across devices, browsers, and
              screen sizes ensures a flawless launch. We test performance,
              security, accessibility, SEO, and functionality. After
              launch, we monitor metrics closely and make immediate
              adjustments to ensure everything performs as expected.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>05</div>
            <h3>Growth & Optimization</h3>
            <p>
              Launch is the beginning, not the end. We provide ongoing
              support, performance monitoring, conversion rate optimization,
              and feature development to ensure your website continues to
              grow with your business. Our data-driven approach means we
              continuously find ways to improve your results.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE US */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Choose Beeclue Tech</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Full-Stack Expertise</h3>
              <p>
                Our team covers every layer of web development — frontend,
                backend, database, infrastructure, and design. This means
                faster execution, fewer handoffs, and a cohesive final product
                that works seamlessly from pixel to database.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Modern Technology Stack</h3>
              <p>
                We build with cutting-edge technologies that deliver speed,
                scalability, and security. Next.js, React, Node.js, TypeScript,
                PostgreSQL, cloud infrastructure — we choose the right tools
                for your project and build for the future, not the past.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Canadian Business Understanding</h3>
              <p>
                We understand the Canadian market — from bilingual requirements
                to Canadian payment preferences, privacy regulations, and
                consumer expectations. Our solutions are built for Canadian
                businesses serving Canadian customers.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Transparent Communication</h3>
              <p>
                You always know where your project stands. Dedicated project
                managers, regular progress updates, access to our project
                management tools, and honest timelines. No black boxes, no
                surprises, no ghosting.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Results-Driven Approach</h3>
              <p>
                We don&apos;t just build websites — we build revenue engines.
                Every project is measured by its impact on your business:
                traffic, leads, conversions, and revenue. We optimize for
                outcomes, not just deliverables.
              </p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Long-Term Partnership</h3>
              <p>
                We don&apos;t disappear after launch. Beeclue Tech provides
                ongoing support, maintenance, and strategic guidance to ensure
                your website continues to perform and evolve with your
                business. Think of us as your extended tech team.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* CITIES SERVED */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Cities We Serve Across Canada</h2>
          <p>
            From coast to coast, Beeclue Tech delivers web development
            services to businesses in every major Canadian market.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div>
            <h3 style={{ color: "var(--primary-light)", marginBottom: "1rem" }}>
              Ontario
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["Toronto", "Ottawa", "Mississauga", "Hamilton", "London", "Kitchener", "Windsor", "Barrie"].map((city) => (
                <span key={city} style={{ color: "var(--muted)" }}>
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ color: "var(--primary-light)", marginBottom: "1rem" }}>
              British Columbia
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["Vancouver", "Victoria", "Surrey", "Burnaby", "Richmond", "Kelowna"].map((city) => (
                <span key={city} style={{ color: "var(--muted)" }}>
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ color: "var(--primary-light)", marginBottom: "1rem" }}>
              Alberta
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["Calgary", "Edmonton", "Red Deer", "Lethbridge"].map((city) => (
                <span key={city} style={{ color: "var(--muted)" }}>
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ color: "var(--primary-light)", marginBottom: "1rem" }}>
              Quebec
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["Montreal", "Quebec City", "Laval", "Gatineau"].map((city) => (
                <span key={city} style={{ color: "var(--muted)" }}>
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ color: "var(--primary-light)", marginBottom: "1rem" }}>
              Prairie Provinces
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["Winnipeg", "Saskatoon", "Regina", "Brandon"].map((city) => (
                <span key={city} style={{ color: "var(--muted)" }}>
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ color: "var(--primary-light)", marginBottom: "1rem" }}>
              Atlantic Canada
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["Halifax", "Fredericton", "Saint John", "Charlottetown", "St. John&apos;s"].map((city) => (
                <span key={city} style={{ color: "var(--muted)" }}>
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* TECHNOLOGY STACK */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Our Technology Stack</h2>
          <p>
            We use modern, industry-leading technologies to build fast,
            scalable, and secure web solutions.
          </p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <h3>Next.js & React</h3>
            <p>Modern frontend frameworks for blazing-fast user experiences</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Node.js & Python</h3>
            <p>Scalable backend APIs and server-side logic</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>TypeScript</h3>
            <p>Type-safe code for reliability and maintainability</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>PostgreSQL & MongoDB</h3>
            <p>Robust databases for every data model</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>AWS & Cloudflare</h3>
            <p>Enterprise-grade cloud hosting and CDN</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Shopify & WooCommerce</h3>
            <p>E-commerce platforms for online retail</p>
          </div>
        </div>
      </FadeIn>

      {/* RELATED SERVICES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Related Services</h2>
          <p>
            Explore our specialized services across Canada.
          </p>
        </div>
        <div className={styles.scroller}>
          <Link
            href="/web-design-toronto"
            className={styles.serviceCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>Web Design Toronto</h3>
            <p>
              Custom web design services for Toronto businesses — from
              concept and branding through to responsive development and
              launch.
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
            <h3>E-Commerce Development Toronto</h3>
            <p>
              Full-service e-commerce development covering Shopify,
              WooCommerce, headless commerce, and B2B wholesale portals.
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
            <h3>Custom Software Development Toronto</h3>
            <p>
              Bespoke software solutions — from internal tools and
              dashboards to customer-facing applications and APIs.
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

      {/* FAQ */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Frequently Asked Questions</h2>
          <p>
            Common questions about our web development services across Canada.
          </p>
        </div>
        <FaqAccordion faqs={faqs} />
      </FadeIn>

      {/* CTA */}
      <FadeIn className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Ready to Build Your Digital Presence?</h2>
          <p className={styles.footerSub}>
            Let&apos;s discuss your project. Our Canada-wide team will build
            a custom website, e-commerce platform, or web application that
            drives real business growth.
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
