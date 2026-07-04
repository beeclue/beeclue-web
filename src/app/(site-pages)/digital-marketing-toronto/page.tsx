"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  Search,
  BarChart3,
  Target,
  TrendingUp,
  Megaphone,
  Mail,
  ChevronDown,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";

export default function DigitalMarketingTorontoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How much does digital marketing cost in Toronto?", a: "Digital marketing costs in Toronto vary based on scope and channels. Monthly retainers typically range from $2,000 to $15,000 depending on the services included — SEO, PPC, social media, content creation, and analytics. We provide transparent pricing tailored to your business goals and competitive landscape." },
    { q: "How long does it take to see results from digital marketing?", a: "PPC and paid social campaigns can generate traffic within days. SEO typically shows meaningful results within 3 to 6 months as your domain authority and content library grow. Content marketing compounds over time — most clients see significant ROI within 6 to 12 months of consistent execution." },
    { q: "What digital marketing services do you offer?", a: "We offer a full suite of digital marketing services including SEO, PPC management (Google Ads and Meta Ads), social media marketing, content strategy and creation, email marketing, conversion rate optimization, analytics and reporting, and marketing automation. Each engagement is customized to your specific business objectives." },
    { q: "Do you work with small businesses in Toronto?", a: "Yes. We work with businesses of all sizes across Toronto — from startups and local shops to established enterprises. Our strategies are scalable and tailored to your budget, ensuring every dollar drives measurable results regardless of company size." },
    { q: "How do you measure digital marketing success?", a: "We track ROI through clearly defined KPIs aligned with your business goals — revenue, lead generation, organic traffic growth, conversion rates, and customer acquisition cost. You receive monthly performance reports with transparent data and actionable insights, not vanity metrics." },
    { q: "Can you integrate digital marketing with my existing website?", a: "Absolutely. We audit your existing website, analytics setup, and marketing infrastructure before making recommendations. Whether your site runs on Shopify, WordPress, or a custom platform, we integrate our strategies with your current stack for a seamless, data-driven marketing engine." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Digital Marketing",
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
            "name": "Digital Marketing Toronto",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does digital marketing cost in Toronto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Digital marketing costs in Toronto vary based on scope and channels. Monthly retainers typically range from $2,000 to $15,000 depending on the services included — SEO, PPC, social media, content creation, and analytics. We provide transparent pricing tailored to your business goals and competitive landscape.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from digital marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PPC and paid social campaigns can generate traffic within days. SEO typically shows meaningful results within 3 to 6 months as your domain authority and content library grow. Content marketing compounds over time — most clients see significant ROI within 6 to 12 months of consistent execution.",
            },
          },
          {
            "@type": "Question",
            "name": "What digital marketing services do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer a full suite of digital marketing services including SEO, PPC management (Google Ads and Meta Ads), social media marketing, content strategy and creation, email marketing, conversion rate optimization, analytics and reporting, and marketing automation. Each engagement is customized to your specific business objectives.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you work with small businesses in Toronto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We work with businesses of all sizes across Toronto — from startups and local shops to established enterprises. Our strategies are scalable and tailored to your budget, ensuring every dollar drives measurable results regardless of company size.",
            },
          },
          {
            "@type": "Question",
            "name": "How do you measure digital marketing success?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We track ROI through clearly defined KPIs aligned with your business goals — revenue, lead generation, organic traffic growth, conversion rates, and customer acquisition cost. You receive monthly performance reports with transparent data and actionable insights, not vanity metrics.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you integrate digital marketing with my existing website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We audit your existing website, analytics setup, and marketing infrastructure before making recommendations. Whether your site runs on Shopify, WordPress, or a custom platform, we integrate our strategies with your current stack for a seamless, data-driven marketing engine.",
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
            <span className={styles.titleLinePrimary}>Digital Marketing</span>
            <span className={styles.titleLine}>in Toronto</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Beeclue Tech delivers data-driven digital marketing strategies for Toronto
            businesses. From SEO and PPC to social media and content marketing,
            we build campaigns that generate measurable revenue growth and
            dominate your market.
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
            <h2>Data-Driven Digital Marketing for Toronto Businesses</h2>
            <p>
              Digital marketing is no longer optional — it is the primary growth engine for
              businesses across Toronto. In a city where competition spans every industry,
              you need a marketing partner who understands the local landscape and delivers
              measurable results, not vanity metrics.
            </p>
            <p>
              At Beeclue Tech, a leading digital marketing agency in Toronto, we build
              integrated marketing strategies that connect every channel — search, social,
              email, content, and paid media — into a single revenue-generating machine.
              We don&apos;t believe in one-size-fits-all campaigns. Every strategy is
              engineered around your business model, your customers, and your competitive
              advantage.
            </p>
            <p>
              Our approach combines deep analytics expertise with creative execution.
              We track every dollar spent, every click, every conversion, and every
              dollar earned — so you always know exactly what your marketing investment
              returns. This transparency and accountability is why Toronto businesses
              trust Beeclue Tech to drive their digital growth.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>Why Toronto Businesses Need Digital Marketing</h3>
            <p>Professional digital marketing helps Toronto businesses:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Attract high-intent customers actively searching for your services</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Generate 3-5x more qualified leads than traditional advertising</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Outperform competitors with a higher search ranking and brand visibility</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Maximize ROI with data-backed campaigns that eliminate wasted spend</span></div>
              <div className={styles.luxuryCheckItem}><Check size={24} color="var(--primary-light)" /><span>Build long-term brand authority through consistent content and engagement</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* SERVICES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Digital Marketing Services</h2>
          <p>Full-service digital marketing engineered to drive traffic, leads, and revenue for Toronto businesses.</p>
        </div>

        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Search className={styles.serviceIcon} />
            <h3>Search Engine Optimization (SEO)</h3>
            <p>Dominate Google search results in Toronto and across Canada. Our SEO strategies combine technical optimization, high-quality content creation, strategic link building, and local SEO to put your business in front of customers who are ready to buy.</p>
          </div>
          <div className={styles.serviceCard}>
            <Target className={styles.serviceIcon} />
            <h3>PPC & Paid Advertising</h3>
            <p>Get immediate, measurable results with targeted PPC campaigns across Google Ads, Meta, LinkedIn, and other platforms. We manage every aspect — keyword research, ad creation, bid optimization, and conversion tracking — to maximize your return on ad spend.</p>
          </div>
          <div className={styles.serviceCard}>
            <Megaphone className={styles.serviceIcon} />
            <h3>Social Media Marketing</h3>
            <p>Build brand awareness and community engagement across Instagram, Facebook, LinkedIn, and TikTok. Our social media strategies combine organic content, paid amplification, and influencer partnerships to grow your audience and drive conversions.</p>
          </div>
          <div className={styles.serviceCard}>
            <BarChart3 className={styles.serviceIcon} />
            <h3>Content Marketing</h3>
            <p>Attract, educate, and convert your ideal customers with strategic content. We create blog posts, landing pages, whitepapers, and video content that ranks in search engines, builds trust, and positions your brand as the authority in your industry.</p>
          </div>
          <div className={styles.serviceCard}>
            <Mail className={styles.serviceIcon} />
            <h3>Email Marketing & Automation</h3>
            <p>Nurture leads and retain customers with automated email sequences, newsletters, and campaigns. From welcome flows to win-back campaigns, we build email marketing systems that generate consistent revenue on autopilot.</p>
          </div>
          <div className={styles.serviceCard}>
            <TrendingUp className={styles.serviceIcon} />
            <h3>Conversion Rate Optimization</h3>
            <p>Turn more visitors into paying customers. We analyze your website traffic, user behavior, and conversion funnels to identify friction points and implement A/B tests that increase your conversion rate without increasing ad spend.</p>
          </div>
        </div>
      </FadeIn>

      {/* PROCESS */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Digital Marketing Process</h2>
          <p>A proven, data-driven process that delivers measurable results on time and on budget.</p>
        </div>
        <div className={styles.processTimeline}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <h3>Audit & Strategy</h3>
            <p>We begin with a comprehensive audit of your current digital presence — website, analytics, search rankings, competitors, and existing campaigns. Based on this data, we develop a customized strategy that identifies your highest-impact opportunities and maps out a clear roadmap for growth.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <h3>Campaign Setup & Execution</h3>
            <p>Our team sets up tracking, analytics, and campaign infrastructure across all channels. We create ad copy, content calendars, email sequences, and social media plans. Every element is designed to work together, creating a cohesive marketing engine that drives qualified traffic and leads.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <h3>Optimization & Scaling</h3>
            <p>We continuously monitor campaign performance, analyzing data to identify what works and what doesn&apos;t. Through ongoing A/B testing, bid adjustments, audience refinement, and content optimization, we improve performance week over week and scale winning campaigns for maximum impact.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <h3>Reporting & Strategy Refinement</h3>
            <p>You receive detailed monthly reports with clear metrics tied to business outcomes — revenue, leads, and ROI. We review results together, discuss insights, and refine the strategy based on real performance data. No vanity metrics, no jargon — just actionable intelligence.</p>
          </div>
        </div>
      </FadeIn>

      {/* WHY CHOOSE US */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Choose Beeclue Tech for Digital Marketing</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Full-Service Expertise</h3>
              <p>We don&apos;t specialize in one channel and hope for the best. Our team covers SEO, PPC, social, content, and email — so every piece of your marketing works together as one integrated strategy that compounds results across channels.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Data-Driven Decision Making</h3>
              <p>Every recommendation we make is backed by data. We use analytics, attribution modeling, and performance data to allocate budget to what works and cut what doesn&apos;t — ensuring your marketing dollars drive real business outcomes.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Toronto Market Knowledge</h3>
              <p>We understand the Toronto market — from local SEO signals and regional consumer behavior to seasonal trends and competitive dynamics. This local expertise gives your campaigns an edge that generic agencies cannot replicate.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Transparent Reporting</h3>
              <p>No black boxes. You get full access to campaign data, performance dashboards, and monthly reports that clearly tie marketing activity to business results. We believe transparency builds trust and drives better collaboration.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Proven Track Record</h3>
              <p>We&apos;ve helped Toronto businesses across industries — from startups to enterprises — achieve significant growth through digital marketing. Our client retention rate reflects the consistent, measurable results we deliver.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Strategic Partnership</h3>
              <p>We function as an extension of your team, not a vendor. Your dedicated account manager ensures you always have a direct line to strategists who understand your business, your goals, and your market — and who are invested in your success.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* TECHNOLOGY STACK */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Our Marketing Technology Stack</h2>
          <p>We leverage industry-leading tools and platforms to deliver maximum performance and transparency.</p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <h3>Google Analytics 4</h3>
            <p>Advanced tracking & attribution</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Google Ads & Meta Ads</h3>
            <p>Paid campaign management</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>SEMrush & Ahrefs</h3>
            <p>SEO research & monitoring</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>HubSpot & Mailchimp</h3>
            <p>Email marketing & automation</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Hotjar & Microsoft Clarity</h3>
            <p>User behavior analytics</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Google Tag Manager</h3>
            <p>Event tracking & data layer</p>
          </div>
        </div>
      </FadeIn>

      {/* RELATED SERVICES */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Related Services</h2>
          <p>Explore our other services that complement your digital marketing strategy.</p>
        </div>
        <div className={styles.scroller}>
          <Link href="/seo-services-toronto" className={styles.serviceCard} style={{ textDecoration: "none", color: "inherit" }}>
            <h3>SEO Services Toronto</h3>
            <p>Search engine optimization strategies that drive organic traffic, improve rankings, and generate long-term sustainable growth for Toronto businesses.</p>
            <span style={{ color: "var(--primary-light)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
          <Link href="/web-design-toronto" className={styles.serviceCard} style={{ textDecoration: "none", color: "inherit" }}>
            <h3>Web Design Toronto</h3>
            <p>High-performance website design and development that converts your marketing traffic into paying customers.</p>
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
          <p>Common questions about our digital marketing services in Toronto.</p>
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

      {/* CTA SECTION */}
      <FadeIn className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Ready to Grow Your Business with Digital Marketing?</h2>
          <p className={styles.footerSub}>
            Let&apos;s discuss your goals. Our Toronto digital marketing team will
            build a strategy that drives traffic, generates leads, and
            accelerates your revenue growth.
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
