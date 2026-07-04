import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  ShoppingCart,
  LayoutTemplate,
  Globe,
  RefreshCcw,
  Zap,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Development Toronto | Custom Shopify Stores | Beeclue",
  description:
    "Professional Shopify development in Toronto. Custom themes, apps, and headless commerce solutions. Increase your online sales with a high-converting Shopify store.",
  openGraph: {
    title: "Shopify Development Toronto | Custom Shopify Stores | Beeclue",
    description:
      "Professional Shopify development in Toronto. Custom themes, apps, and headless commerce solutions.",
    url: "https://beeclue.com/shopify-development-toronto",
    siteName: "Beeclue",
    type: "website",
  },
};

export default function ShopifyDevelopmentTorontoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Shopify Development Toronto",
        "description":
          "Professional Shopify development services in Toronto including custom themes, apps, and headless commerce solutions.",
        "url": "https://beeclue.com/shopify-development-toronto",
        "provider": {
          "@type": "Organization",
          "name": "Beeclue",
          "url": "https://beeclue.com",
        },
        "areaServed": {
          "@type": "City",
          "name": "Toronto",
        },
        "serviceType": "Shopify Development",
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
            "name": "Shopify Development Toronto",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does Shopify development cost in Toronto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shopify development costs in Toronto range from $5,000 for a basic custom theme to $50,000+ for a fully custom headless commerce solution. The final cost depends on design complexity, custom features, integrations, and whether you need a standard Shopify store or a Shopify Plus headless build.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a custom Shopify store?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard custom Shopify store typically takes 4 to 8 weeks from discovery to launch. More complex projects involving custom apps, headless architecture, or extensive third-party integrations can take 8 to 14 weeks. We provide a detailed timeline during the scoping phase.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you build Shopify Plus headless stores?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in headless Shopify Plus builds using Next.js and Shopify's Storefront API. Headless architecture decouples the frontend from the backend, delivering sub-second page loads, unlimited design flexibility, and enterprise-grade performance ideal for high-traffic brands.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you migrate my existing store to Shopify?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We execute complete platform migrations from WooCommerce, Magento, Wix, Squarespace, and custom platforms to Shopify. Our migration process transfers all products, customer accounts, order history, and content while setting up 301 redirects to preserve your SEO rankings.",
            },
          },
          {
            "@type": "Question",
            "name": "Will my Shopify store be optimized for SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Every Shopify store we build is optimized for search engines with clean URL structures, schema markup, fast page speeds, mobile-first design, optimized product pages, and proper meta tags. We also implement advanced SEO features like automated sitemaps and canonical tags.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you build custom Shopify apps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We develop custom Shopify apps tailored to your business needs, including inventory management tools, custom checkout experiences, subscription integrations, wholesale portals, and API-driven solutions that connect Shopify with your existing business systems.",
            },
          },
          {
            "@type": "Question",
            "name": "What makes Beeclue different from other Shopify developers in Toronto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Beeclue combines deep Shopify platform expertise with a performance-first approach. We don't use cookie-cutter themes. Every store is engineered for speed, conversion rate optimization, and scalability. Our Toronto-based team provides end-to-end service from strategy and design through development, launch, and ongoing support.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main style={{ padding: 0 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section
        style={{
          paddingTop: "20vh",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          padding: "20vh 5vw 5vh 5vw",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Shopify Development
            <br />
            <span style={{ color: "var(--primary-light, #3385ff)" }}>
              in Toronto
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--muted, #a0a0a0)",
              maxWidth: "800px",
              marginBottom: "2rem",
              lineHeight: 1.6,
            }}
          >
            Beeclue builds high-converting, custom Shopify stores for Toronto
            businesses. From premium theme development to headless commerce
            architecture, we engineer Shopify solutions designed to maximize
            your online revenue and dominate your market.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                background: "var(--primary, #3385ff)",
                color: "#fff",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "1.1rem",
                textDecoration: "none",
              }}
            >
              Get a Free Consultation <ArrowRight size={20} />
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ color: "#fbbf24", fontSize: "1.25rem", letterSpacing: "2px" }}>
                ★★★★★
              </div>
              <span style={{ color: "var(--muted, #a0a0a0)", fontSize: "0.875rem" }}>
                5.0 from 30+ reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section style={{ padding: "5rem 5vw" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
              Professional Shopify Development Services for Toronto Businesses
            </h2>
            <p style={{ color: "var(--muted, #a0a0a0)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Your Shopify store is the engine of your digital retail operation.
              In Toronto&apos;s competitive ecommerce landscape, a generic theme
              and basic setup won&apos;t cut it. You need a store engineered for
              speed, conversion, and scalability — one that turns browsers into
              buyers and keeps them coming back.
            </p>
            <p style={{ color: "var(--muted, #a0a0a0)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              At Beeclue, a leading Shopify development agency in Toronto, we
              don&apos;t just install themes and call it done. We architect custom
              Shopify experiences built from the ground up to align with your
              brand, your customers, and your revenue goals. Whether you need a
              custom Shopify theme, a headless Shopify Plus build, or a custom
              Shopify app, our Toronto-based team delivers end-to-end solutions
              that perform.
            </p>
            <p style={{ color: "var(--muted, #a0a0a0)", lineHeight: 1.7 }}>
              Our deep expertise across the Shopify ecosystem — including
              Shopify, Shopify Plus, and the Storefront API — means we can
              build exactly what your business needs, not what a template
              allows. We&apos;ve helped Toronto retailers, DTC brands, and B2B
              wholesalers transform their online stores into powerful revenue
              machines.
            </p>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid var(--border, #333)",
              borderRadius: "12px",
              padding: "2rem",
            }}
          >
            <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
              Why Invest in Custom Shopify Development
            </h3>
            <p style={{ color: "var(--muted, #a0a0a0)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              Toronto businesses rely on professional Shopify development to:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Build a store that converts at 2-3x the industry average",
                "Achieve sub-second page loads that Google rewards with higher rankings",
                "Create a seamless checkout experience that reduces cart abandonment",
                "Scale effortlessly during high-traffic events and flash sales",
                "Integrate with your ERP, CRM, and fulfillment systems seamlessly",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <Check size={20} color="var(--primary-light, #3385ff)" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ color: "var(--muted, #a0a0a0)", fontSize: "0.95rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SHOPIFY SERVICES */}
      <section style={{ padding: "5rem 5vw", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Our Shopify Development Services
            </h2>
            <p style={{ color: "var(--muted, #a0a0a0)", maxWidth: "700px", margin: "0 auto" }}>
              End-to-end Shopify solutions engineered to drive sales and scale
              your Toronto business.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: <LayoutTemplate size={48} color="#3385ff" strokeWidth={1} />,
                title: "Custom Shopify Theme Development",
                desc: "We design and build bespoke Shopify themes tailored to your brand identity. No cookie-cutter templates. Every pixel, animation, and interaction is crafted to engage your audience and drive conversions. Our themes are built with performance and SEO baked in from day one.",
              },
              {
                icon: <Globe size={48} color="#3385ff" strokeWidth={1} />,
                title: "Headless Shopify Plus",
                desc: "Future-proof your storefront with headless commerce. We decouple your Shopify backend and build a blazing-fast Next.js frontend using the Storefront API. The result: sub-second loads, limitless design freedom, and enterprise-grade performance for high-traffic brands.",
              },
              {
                icon: <ShoppingCart size={48} color="#3385ff" strokeWidth={1} />,
                title: "Shopify App Development",
                desc: "Need functionality beyond what off-the-shelf apps offer? We build custom Shopify apps tailored to your operations — from subscription management and custom checkout flows to inventory automation and B2B wholesale tools that plug directly into your store.",
              },
              {
                icon: <RefreshCcw size={48} color="#3385ff" strokeWidth={1} />,
                title: "Shopify Store Migrations",
                desc: "Outgrowing WooCommerce, Magento, or Wix? We execute flawless platform migrations to Shopify, transferring all products, customers, orders, and content. Our migration process includes 301 redirects and SEO preservation so you lose zero search rankings.",
              },
              {
                icon: <Zap size={48} color="#3385ff" strokeWidth={1} />,
                title: "Performance Optimization",
                desc: "Slow stores lose sales. We audit and optimize every layer of your Shopify store — from image compression and code minification to app auditing and CDN configuration. Our optimizations consistently improve Core Web Vitals scores and page speed by 40-60%.",
              },
              {
                icon: <Shield size={48} color="#3385ff" strokeWidth={1} />,
                title: "Ongoing Shopify Support",
                desc: "Launch is just the beginning. We provide ongoing Shopify maintenance, feature additions, A/B testing, and strategic guidance to ensure your store continues to perform and grow. Think of us as your dedicated Shopify engineering partner in Toronto.",
              },
            ].map((service, i) => (
              <div
                key={i}
                style={{
                  padding: "2rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border, #333)",
                  borderRadius: "12px",
                }}
              >
                <div style={{ marginBottom: "1.5rem" }}>{service.icon}</div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
                  {service.title}
                </h3>
                <p style={{ color: "var(--muted, #a0a0a0)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOPIFY DEVELOPMENT PROCESS */}
      <section style={{ padding: "5rem 5vw" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Our Shopify Development Process
            </h2>
            <p style={{ color: "var(--muted, #a0a0a0)", maxWidth: "700px", margin: "0 auto" }}>
              A proven, transparent process that delivers results on time and
              on budget.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                desc: "We start by understanding your business, your customers, and your competitive landscape. Through stakeholder interviews, competitor analysis, and user research, we define a clear strategy that aligns your Shopify store with your revenue goals. This phase includes technical architecture planning and a detailed project roadmap.",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                desc: "Our design team crafts wireframes and high-fidelity mockups that balance brand aesthetics with conversion-focused UX. We prototype key user flows — product discovery, cart, and checkout — so you can see and interact with the design before a single line of code is written. Iteration is built into this phase.",
              },
              {
                step: "03",
                title: "Development & Integration",
                desc: "This is where your store comes to life. Our Shopify developers build custom themes, configure apps, and integrate third-party systems (ERP, CRM, payment gateways, shipping providers). Every build follows Shopify best practices with clean, maintainable code. We run continuous QA throughout development.",
              },
              {
                step: "04",
                title: "Launch & Optimization",
                desc: "After rigorous testing across devices and browsers, we launch your store with a comprehensive checklist covering performance, SEO, security, and analytics. Post-launch, we monitor performance metrics and run conversion rate optimization experiments to continuously improve your store's revenue per visitor.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "2rem",
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "var(--primary-light, #3385ff)",
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--muted, #a0a0a0)", lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "5rem 5vw", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Why Choose Our Shopify Team
            </h2>
            <p style={{ color: "var(--muted, #a0a0a0)", maxWidth: "700px", margin: "0 auto" }}>
              We combine deep platform expertise with a relentless focus on
              your business outcomes.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: <CheckCircle2 size={28} color="var(--primary-light, #3385ff)" />,
                title: "Shopify Platform Experts",
                desc: "Our team has built hundreds of Shopify stores across every niche. We know the platform inside and out — from Liquid templating to the Storefront API — and we use that depth to build stores that outperform the competition.",
              },
              {
                icon: <CheckCircle2 size={28} color="var(--primary-light, #3385ff)" />,
                title: "Conversion-Focused Design",
                desc: "Every design decision we make is driven by data and conversion psychology. We don't design for awards; we design for revenue. Our stores consistently achieve conversion rates 2-3x higher than industry averages.",
              },
              {
                icon: <CheckCircle2 size={28} color="var(--primary-light, #3385ff)" />,
                title: "Performance-First Architecture",
                desc: "Page speed directly impacts sales. We build Shopify stores that load in under 2 seconds, earn top Core Web Vitals scores, and provide a frictionless experience across every device and connection speed.",
              },
              {
                icon: <CheckCircle2 size={28} color="var(--primary-light, #3385ff)" />,
                title: "Toronto-Based Team",
                desc: "We're local. When you work with Beeclue, you get a dedicated Toronto team that understands the Canadian market, Canadian payment preferences, and Canadian consumer expectations. No offshore surprises.",
              },
              {
                icon: <CheckCircle2 size={28} color="var(--primary-light, #3385ff)" />,
                title: "Transparent Process",
                desc: "We believe in radical transparency. You get a dedicated project manager, regular progress updates, access to our project management tools, and honest timelines. No black boxes, no surprises.",
              },
              {
                icon: <CheckCircle2 size={28} color="var(--primary-light, #3385ff)" />,
                title: "Long-Term Partnership",
                desc: "We don't disappear after launch. Beeclue provides ongoing Shopify support, performance monitoring, feature development, and strategic guidance to ensure your store continues to grow and evolve with your business.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  padding: "1.5rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border, #333)",
                  borderRadius: "12px",
                }}
              >
                <div style={{ flexShrink: 0, marginTop: "2px" }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--muted, #a0a0a0)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section style={{ padding: "5rem 5vw" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Our Shopify Technology Stack
          </h2>
          <p style={{ color: "var(--muted, #a0a0a0)", maxWidth: "700px", margin: "0 auto 3rem auto" }}>
            We leverage the full Shopify ecosystem and modern web technologies
            to build stores that perform at the highest level.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
              textAlign: "left",
            }}
          >
            {[
              { name: "Shopify & Shopify Plus", desc: "Enterprise ecommerce platform" },
              { name: "Shopify Storefront API", desc: "Headless commerce backend" },
              { name: "Next.js & React", desc: "Blazing-fast frontend framework" },
              { name: "Shopify Liquid", desc: "Theme templating language" },
              { name: "Tailwind CSS", desc: "Utility-first styling" },
              { name: "Shopify Polaris", desc: "Admin UI component library" },
            ].map((tech, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border, #333)",
                  borderRadius: "8px",
                }}
              >
                <h4 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>{tech.name}</h4>
                <p style={{ color: "var(--muted, #a0a0a0)", fontSize: "0.85rem" }}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING FACTORS */}
      <section style={{ padding: "5rem 5vw", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Shopify Development Pricing Factors
            </h2>
            <p style={{ color: "var(--muted, #a0a0a0)", maxWidth: "700px", margin: "0 auto" }}>
              Every project is unique. Here&apos;s what influences the investment
              required for your Shopify store.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {[
              {
                factor: "Design Complexity",
                desc: "Custom designs with unique animations, interactions, and brand-specific visual systems require more design and development time than adapting existing Shopify themes.",
              },
              {
                factor: "Number of Products & Collections",
                desc: "Stores with large catalogs (1,000+ products) need advanced filtering, search functionality, and collection structures that add complexity to the build.",
              },
              {
                factor: "Custom Features & Functionality",
                desc: "Custom product configurators, subscription models, dynamic pricing, or wholesale portals require bespoke development that increases project scope.",
              },
              {
                factor: "Third-Party Integrations",
                desc: "Connecting Shopify with your ERP, CRM, accounting software, shipping providers, or marketing tools adds integration development time.",
              },
              {
                factor: "Headless vs. Traditional Shopify",
                desc: "Headless builds using Next.js and the Storefront API offer superior performance but require more development investment than traditional Shopify theme customization.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border, #333)",
                  borderRadius: "8px",
                }}
              >
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--primary-light, #3385ff)" }}>
                  {item.factor}
                </h3>
                <p style={{ color: "var(--muted, #a0a0a0)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <p style={{ color: "var(--muted, #a0a0a0)", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
              Ready to discuss your project? We provide transparent quotes with
              no hidden fees.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                background: "var(--primary, #3385ff)",
                color: "#fff",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "1.1rem",
                textDecoration: "none",
              }}
            >
              Get Your Free Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ padding: "5rem 5vw" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Related Services
            </h2>
            <p style={{ color: "var(--muted, #a0a0a0)", maxWidth: "700px", margin: "0 auto" }}>
              Explore our other digital services that complement your Shopify
              store.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <Link
              href="/ecommerce-development-toronto"
              style={{
                padding: "2rem",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--border, #333)",
                borderRadius: "12px",
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 0.2s",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", color: "var(--foreground, #fff)" }}>
                Ecommerce Development Toronto
              </h3>
              <p style={{ color: "var(--muted, #a0a0a0)", lineHeight: 1.6, marginBottom: "1rem" }}>
                Full-service ecommerce development covering Shopify, WooCommerce,
                headless commerce, and B2B wholesale portals for Toronto businesses.
              </p>
              <span
                style={{
                  color: "var(--primary-light, #3385ff)",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Learn More <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              href="/shopify-ecommerce-website-design"
              style={{
                padding: "2rem",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--border, #333)",
                borderRadius: "12px",
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 0.2s",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", color: "var(--foreground, #fff)" }}>
                Shopify Ecommerce Website Design
              </h3>
              <p style={{ color: "var(--muted, #a0a0a0)", lineHeight: 1.6, marginBottom: "1rem" }}>
                Premium Shopify website design that combines stunning visuals
                with conversion-focused UX to create stores that sell.
              </p>
              <span
                style={{
                  color: "var(--primary-light, #3385ff)",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Learn More <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: "5rem 5vw", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: "var(--muted, #a0a0a0)" }}>
              Common questions about our Shopify development services in Toronto.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              {
                q: "How much does Shopify development cost in Toronto?",
                a: "Shopify development costs in Toronto range from $5,000 for a basic custom theme to $50,000+ for a fully custom headless commerce solution. The final cost depends on design complexity, custom features, integrations, and whether you need a standard Shopify store or a Shopify Plus headless build.",
              },
              {
                q: "How long does it take to build a custom Shopify store?",
                a: "A standard custom Shopify store typically takes 4 to 8 weeks from discovery to launch. More complex projects involving custom apps, headless architecture, or extensive third-party integrations can take 8 to 14 weeks. We provide a detailed timeline during the scoping phase.",
              },
              {
                q: "Do you build Shopify Plus headless stores?",
                a: "Yes. We specialize in headless Shopify Plus builds using Next.js and Shopify's Storefront API. Headless architecture decouples the frontend from the backend, delivering sub-second page loads, unlimited design flexibility, and enterprise-grade performance ideal for high-traffic brands.",
              },
              {
                q: "Can you migrate my existing store to Shopify?",
                a: "Yes. We execute complete platform migrations from WooCommerce, Magento, Wix, Squarespace, and custom platforms to Shopify. Our migration process transfers all products, customer accounts, order history, and content while setting up 301 redirects to preserve your SEO rankings.",
              },
              {
                q: "Will my Shopify store be optimized for SEO?",
                a: "Absolutely. Every Shopify store we build is optimized for search engines with clean URL structures, schema markup, fast page speeds, mobile-first design, optimized product pages, and proper meta tags. We also implement advanced SEO features like automated sitemaps and canonical tags.",
              },
              {
                q: "Do you build custom Shopify apps?",
                a: "Yes. We develop custom Shopify apps tailored to your business needs, including inventory management tools, custom checkout experiences, subscription integrations, wholesale portals, and API-driven solutions that connect Shopify with your existing business systems.",
              },
              {
                q: "What makes Beeclue different from other Shopify developers in Toronto?",
                a: "Beeclue combines deep Shopify platform expertise with a performance-first approach. We don't use cookie-cutter themes. Every store is engineered for speed, conversion rate optimization, and scalability. Our Toronto-based team provides end-to-end service from strategy and design through development, launch, and ongoing support.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border, #333)",
                  borderRadius: "8px",
                }}
              >
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>
                  {faq.q}
                </h3>
                <p style={{ color: "var(--muted, #a0a0a0)", lineHeight: 1.6 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GTA AREA */}
      <section style={{ padding: "5rem 5vw", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Shopify Development Across Toronto & the GTA
        </h2>
        <p style={{ color: "var(--muted, #a0a0a0)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto 2rem auto" }}>
          Beeclue proudly serves Shopify merchants across:
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {[
            "Downtown Toronto",
            "North York",
            "Scarborough",
            "Etobicoke",
            "Mississauga",
            "Brampton",
            "Markham",
            "Vaughan",
          ].map((city) => (
            <span
              key={city}
              style={{
                padding: "0.5rem 1.5rem",
                border: "1px solid var(--border, #333)",
                borderRadius: "50px",
                color: "var(--primary-light, #3385ff)",
                fontSize: "0.95rem",
              }}
            >
              {city}
            </span>
          ))}
        </div>
        <p style={{ color: "var(--muted, #a0a0a0)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
          If your business operates in the Greater Toronto Area, we can build a
          Shopify store that drives real revenue growth.
        </p>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          padding: "5rem 5vw",
          background: "var(--primary, #3385ff)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "1.5rem",
            }}
          >
            Ready to Build Your Shopify Store?
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.85)",
              marginBottom: "2rem",
              lineHeight: 1.6,
            }}
          >
            Let&apos;s discuss your project. Our Toronto Shopify team will
            create a high-converting store that turns your visitors into loyal
            customers.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2.5rem",
              background: "#fff",
              color: "var(--primary, #3385ff)",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "1.15rem",
              textDecoration: "none",
            }}
          >
            Get Started Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
