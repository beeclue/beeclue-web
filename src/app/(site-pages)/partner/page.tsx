"use client";

import Link from "next/link";
import styles from "@/app/page.module.css";
import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Handshake,
  ShieldCheck,
  Sparkles,
  Zap,
  Layers,
  Users,
  Award,
  TrendingUp,
  Globe
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ServiceTracker from "@/components/ServiceTracker";
import FaqAccordion from "@/components/FaqAccordion";

export default function PartnerProgramPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Beeclue Partner Program — Agency & Business Manager Partnerships",
    "description":
      "Partner with Beeclue Tech. Earn 20% commission on every web design, Shopify, and custom software referral with zero fulfillment headache.",
    "publisher": {
      "@type": "Organization",
      "name": "Beeclue Tech",
      "url": "https://beeclue.com"
    }
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Partner Program", "item": "https://beeclue.com/partner" }
    ]
  };

  const faqs = [
    {
      q: "How does the 20% commission payout work?",
      a: "For every client you introduce who signs a web design, Shopify, or custom development project with Beeclue Tech, you receive 20% of the gross project fee upon invoice milestone completion. For monthly subscriptions or ongoing maintenance contracts, you earn 20% recurring monthly rev-share for the first 12 months. Payouts are made directly to your business bank account or PayPal/Stripe on the 1st of every month."
    },
    {
      q: "What is my role as a partner? Do I have to handle any project management?",
      a: "Zero project management required. In the Referral Partner track, your only job is making the warm introduction (via email or sharing your dedicated partner link). Beeclue's team takes over client discovery, scoping, technical architecture, UI/UX design, custom coding, QA, and post-launch hosting. You stay informed on progress and receive your payout when milestones complete."
    },
    {
      q: "Can I offer web development as a white-label service under my own brand?",
      a: "Yes. For Online Business Managers (OBMs), fractional COOs, and boutique agencies, we offer a dedicated White-Label Tech Partner track. We work as your silent engineering department behind the scenes. You bill the client directly at your preferred markup, and Beeclue fulfills the build to your specifications with zero direct Beeclue client branding."
    },
    {
      q: "What makes it easy to refer clients to Beeclue?",
      a: "We eliminate sales friction with our Free 48-Hour Interactive Mobile Mockup & SEO Audit offer. Instead of your client having to commit to a vague $5,000 agency proposal, we build them a working, interactive mobile preview of their new site within 48 hours for free. This gives them immediate tangible confidence and closes deals at an industry-leading rate."
    },
    {
      q: "What types of client projects does Beeclue handle?",
      a: "We specialize in modern Next.js web applications, high-converting Shopify e-commerce stores, custom web design for professional service firms (law firms, medical clinics, boutique retailers, luxury ateliers), mobile app development (React Native), and AI shopping agents."
    },
    {
      q: "How do I get started as a partner?",
      a: "Simply fill out the quick partnership inquiry below or book a 15-minute intro chat. We will assign you a dedicated partner manager, provide your partner tracking link, and walk you through how to introduce your first client."
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
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary-light)", fontWeight: 600, fontSize: "1rem", marginBottom: "1rem" }}>
            <Handshake size={20} /> Beeclue Partner Network
          </div>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 4.75rem)" }}>
            <span className={styles.titleLinePrimary}>Earn 20% Commission</span>
            <span className={styles.titleLine}>On Every Web Referral</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            For business managers, fractional operations leaders, and agency consultants. Add full-stack web design, Shopify, and custom engineering to your client services — with zero fulfillment headache.
          </p>
          <div className={styles.heroRatingContainer}>
            <Link href="/contact" className={styles.ctaButton}>
              Apply as a Partner <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/case-studies" className={styles.ctaButtonLight}>
              View Client Case Studies <ArrowRight className={styles.arrow} size={20} />
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* WHY PARTNER WITH BEECLUE */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Turn Client Web Requests Into Predictable High-Margin Revenue</h2>
            <p>
              As a business manager, operations consultant, or marketing advisor, your clients frequently ask you: <em>&quot;Who can fix our website?&quot;</em> or <em>&quot;Can we migrate our store to Shopify?&quot;</em>
            </p>
            <p>
              Referring to unvetted freelancers risks your reputation when they disappear or deliver buggy code. Building an in-house engineering team is expensive and distracting.
            </p>
            <p>
              Beeclue Tech acts as your reliable engineering backbone. We handle the heavy lifting — from UX strategy to production-grade Next.js development — while you look like a hero to your clients and pocket 20% on every closed deal.
            </p>
          </div>

          <div className={styles.luxuryCard}>
            <h3>The Partner Advantage</h3>
            <p>Designed specifically for client-facing advisors:</p>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}>
                <CheckCircle2 size={24} color="var(--primary-light)" />
                <span><strong>20% Direct Commission:</strong> Earn $300 to $1,500+ on every client referral.</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <CheckCircle2 size={24} color="var(--primary-light)" />
                <span><strong>Zero Fulfillment Work:</strong> We handle 100% of design, coding, testing, and deployment.</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <CheckCircle2 size={24} color="var(--primary-light)" />
                <span><strong>Free 48-Hour Mockup Offer:</strong> We build your clients a free interactive preview to close deals fast.</span>
              </div>
              <div className={styles.luxuryCheckItem}>
                <CheckCircle2 size={24} color="var(--primary-light)" />
                <span><strong>White-Label Ready:</strong> Pitch web services under your brand or make warm introductions.</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 3 FLEXIBLE PARTNERSHIP TRACKS */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Choose How You Want to Partner</h2>
          <p>Flexible engagement models tailored to how you run your business and manage your clients.</p>
        </div>

        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <DollarSign className={styles.serviceIcon} />
            <h3>1. The Referral Partner Track</h3>
            <p>
              Make the warm introduction via email or share your dedicated partner link. Beeclue manages client discovery, proposals, delivery, and post-launch support. You receive 20% commission on the project upon milestone completion.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <Layers className={styles.serviceIcon} />
            <h3>2. The White-Label Tech Partner</h3>
            <p>
              Ideal for Online Business Managers (OBMs), branding agencies, and marketing consultants. Sell web design, Shopify setups, and speed optimization under your agency brand. Beeclue executes the engineering invisibly.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <Sparkles className={styles.serviceIcon} />
            <h3>3. Co-Branded Audits &amp; Perks</h3>
            <p>
              For business creators, podcast hosts, and community leaders. Offer your audience a co-branded &quot;Free 48-Hour Website UX &amp; SEO Audit Powered by Beeclue&quot;. We audit their sites, and you earn rev-share on all converted projects.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* COMMISSION MATH BREAKDOWN */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Real Commission Earnings Potential</h2>
          <p>Transparent math on what you earn per referred client project.</p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <TrendingUp className={styles.valueIcon} />
            <div>
              <h3>Boutique Business Website ($1,500 – $2,500)</h3>
              <p>Custom 5–10 page responsive website for local professional practices, service firms, or consultancies. <strong>Your Referral Payout: $300 – $500 per client.</strong></p>
            </div>
          </div>

          <div className={styles.valueItem}>
            <TrendingUp className={styles.valueIcon} />
            <div>
              <h3>Custom Shopify Store ($3,500 – $6,000)</h3>
              <p>Turnkey e-commerce platform with custom theme architecture, conversion checkout funnels, and app integrations. <strong>Your Referral Payout: $700 – $1,200 per client.</strong></p>
            </div>
          </div>

          <div className={styles.valueItem}>
            <TrendingUp className={styles.valueIcon} />
            <div>
              <h3>Custom Web App / Portal ($7,500 – $15,000+)</h3>
              <p>Bespoke web applications, member portals, or specialized software systems engineered with modern frameworks. <strong>Your Referral Payout: $1,500 – $3,000+ per client.</strong></p>
            </div>
          </div>

          <div className={styles.valueItem}>
            <TrendingUp className={styles.valueIcon} />
            <div>
              <h3>Monthly Maintenance Retainer ($150 – $300/mo)</h3>
              <p>Ongoing managed cloud hosting, security monitoring, and content updates. <strong>Your Recurring Rev-Share: $30 – $60/month per client for 12 months.</strong></p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* PROVEN PORTFOLIO PROOF */}
      <FadeIn className={styles.luxuryIntro}>
        <div className={styles.luxuryBlobs}>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.luxuryIntroContent}>
          <div className={styles.luxuryText}>
            <h2>Proven Work Your Clients Will Love</h2>
            <p>
              Your reputation is your most valuable asset. When you refer clients to Beeclue Tech, you are recommending a proven development partner trusted by growing brands across North America.
            </p>
            <p>
              From custom Shopify stores with autonomous AI shopping agents (Work N Wear) to museum-grade luxury ateliers (Tuxedo Frame Gallery in Buckhead) and high-converting legal platforms (Tara Lattanzio), we engineer websites that convert visitors into retained revenue.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "1.5rem", alignItems: "center" }}>
              <Link href="/case-studies" className={styles.learnMoreLink}>
                Browse All Case Studies <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className={styles.learnMoreLink} style={{ color: "var(--foreground)" }}>
                Schedule a Partner Call <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className={styles.luxuryCard}>
            <h3>What Your Clients Experience</h3>
            <div className={styles.luxuryChecklist}>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Sub-second load times &amp; perfect mobile responsiveness</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Modern Next.js &amp; Shopify Storefront API architecture</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>Hyper-local SEO and structured rich snippet schema</span></div>
              <div className={styles.luxuryCheckItem}><CheckCircle2 size={24} color="var(--primary-light)" /><span>High-touch communication with predictable launch timelines</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* HOW IT WORKS: 3 SIMPLE STEPS */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>How the Partnership Works</h2>
          <p>From initial hello to automated commission payout in 3 simple steps.</p>
        </div>

        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <Award className={styles.serviceIcon} />
            <h3>Step 1: Join the Network</h3>
            <p>Fill out the short partner form below or email us at hello@beeclue.com. We will set up your partner tracking link and send over our partner kit.</p>
          </div>

          <div className={styles.serviceCard}>
            <Users className={styles.serviceIcon} />
            <h3>Step 2: Introduce Your Client</h3>
            <p>Whenever a client needs a website overhaul or Shopify store, connect us via warm email intro. We will build them a free 48-hour interactive mockup to prove value.</p>
          </div>

          <div className={styles.serviceCard}>
            <DollarSign className={styles.serviceIcon} />
            <h3>Step 3: Collect 20% Payout</h3>
            <p>Once the project agreement is signed and milestone payments clear, your 20% commission is deposited directly to your bank account or PayPal.</p>
          </div>
        </div>
      </FadeIn>

      {/* FAQ SECTION */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about the Beeclue Tech Partner Program.</p>
        </div>
        <FaqAccordion faqs={faqs} />
      </FadeIn>

      {/* CTA SECTION */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingBottom: "10rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Handshake size={48} color="var(--primary-light)" style={{ marginBottom: "2rem" }} />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>
            Ready to Partner With Beeclue Tech?
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Let&apos;s build an enduring, profitable partnership. Contact us today to join our partner roster and start earning 20% on every web referral.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className={styles.ctaButton}>
              Apply as a Partner <ArrowRight className={styles.arrow} />
            </Link>
            <Link href="/case-studies" className={styles.ctaButtonLight}>
              Explore Our Portfolio <ArrowRight className={styles.arrow} size={20} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
