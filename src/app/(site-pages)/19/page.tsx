"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import localStyles from "./page.module.css";
import {
  ArrowRight,
  LayoutTemplate,
  Cloud,
  Wrench,
  MessageCircle,
  Image as ImageIcon,
  Share2,
  UtensilsCrossed,
  Scissors,
  HardHat,
  Briefcase,
  ShoppingBag,
  ChevronDown,
  Check,
  X,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

function FaqItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={localStyles.faqItem}>
      <button
        className={localStyles.faqQuestion}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        id={`faq-q-${question.slice(0, 20).replace(/\s/g, "-")}`}
      >
        {question}
        <ChevronDown
          size={20}
          className={`${localStyles.faqChevron} ${
            open ? localStyles.faqChevronOpen : ""
          }`}
        />
      </button>
      <div
        className={`${localStyles.faqAnswer} ${
          open ? localStyles.faqAnswerOpen : ""
        }`}
        role="region"
        aria-labelledby={`faq-q-${question.slice(0, 20).replace(/\s/g, "-")}`}
      >
        {children}
      </div>
    </div>
  );
}

export default function NineteenDollarPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Website Design and Development",
    provider: {
      "@type": "Organization",
      name: "Beeclue Tech",
      url: "https://beeclue.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "36 Carslake Crescent",
        addressLocality: "Toronto",
        addressRegion: "ON",
        postalCode: "M1J 2A7",
        addressCountry: "CA",
      },
    },
    areaServed: [
      "Toronto",
      "Mississauga",
      "Brampton",
      "Scarborough",
      "Etobicoke",
      "North York",
      "Markham",
      "Vaughan",
    ],
    offers: {
      "@type": "Offer",
      price: "19",
      priceCurrency: "CAD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "19",
        priceCurrency: "CAD",
        billingDuration: "P1M",
      },
      description:
        "5-page custom website with free hosting, free maintenance, WhatsApp integration, gallery, and social media integration.",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is there really no upfront cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Correct — the $19/month plan covers your full website build, hosting, and ongoing maintenance with no large upfront design fee. You simply pay the monthly subscription.",
        },
      },
      {
        "@type": "Question",
        name: "What if I already have a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We can migrate your existing content into a new, modern design under the same $19/month plan — including improvements to mobile responsiveness and page speed, which are key Google ranking factors.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build my website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most $19/month websites are completed within 5-7 business days once we receive your content (logo, photos, business details).",
        },
      },
      {
        "@type": "Question",
        name: "Can I cancel anytime?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. There's no long-term contract — you can cancel the subscription at any time.",
        },
      },
      {
        "@type": "Question",
        name: "Do you serve businesses outside Toronto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we work with small businesses across the entire Greater Toronto Area, including Mississauga, Brampton, Markham, Vaughan, Scarborough, and Etobicoke.",
        },
      },
    ],
  };

  return (
    <main className={styles.main}>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ============================================
          SECTION 1 — HERO
          ============================================ */}
      <FadeIn
        className={styles.baseSection}
        style={{
          paddingTop: "20vh",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className={styles.heroContent}>
          <h1
            className={styles.title}
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            <span className={styles.titleLinePrimary}>$19/Month</span>
            <span className={styles.titleLine}>Website Design</span>
            <span className={styles.titleLine}>
              for Toronto &amp; GTA Small Businesses
            </span>
          </h1>
          <p
            className={styles.subtitle}
            style={{ fontSize: "1.25rem", maxWidth: "800px" }}
          >
            A complete, professional website for your business — built, hosted,
            and maintained by Beeclue Tech for less than the cost of a coffee a
            day. No contracts. No hidden fees. Just a website that works as hard
            as you do.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get Started — Book a Free Consultation{" "}
            <ArrowRight className={styles.arrow} />
          </Link>
        </div>
      </FadeIn>

      {/* ============================================
          SECTION 2 — WHAT'S INCLUDED
          ============================================ */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>What&apos;s Included in the $19/Month Plan</h2>
        </div>

        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <LayoutTemplate className={styles.serviceIcon} />
            <h3>Up to 5 Custom Pages</h3>
            <p>
              A fully designed multi-page website covering Home, About,
              Services, Gallery, and Contact — tailored to your business.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Cloud className={styles.serviceIcon} />
            <h3>Free Hosting</h3>
            <p>
              Reliable, secure hosting included every month. No separate hosting
              bills, no surprise renewal fees.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Wrench className={styles.serviceIcon} />
            <h3>Free Ongoing Maintenance</h3>
            <p>
              We handle updates, fixes, and uptime monitoring so your site stays
              fast and secure year-round.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <MessageCircle className={styles.serviceIcon} />
            <h3>WhatsApp Button Integration</h3>
            <p>
              Let customers message you instantly from your website — ideal for
              service-based businesses across the GTA.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <ImageIcon className={styles.serviceIcon} />
            <h3>Photo Gallery</h3>
            <p>
              Showcase your work, products, or storefront with a clean,
              mobile-optimized gallery section.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Share2 className={styles.serviceIcon} />
            <h3>Social Media Integration</h3>
            <p>
              Connect your Instagram, Facebook, and other profiles directly from
              your homepage to grow your following.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* ============================================
          SECTION 3 — BUILT FOR TORONTO + WHO THIS IS FOR
          ============================================ */}
      <FadeIn
        className={styles.baseSection}
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className={styles.servicesHeader} style={{ maxWidth: "900px" }}>
          <h2>Built for Toronto&apos;s Small Business Community</h2>
        </div>

        <div className={localStyles.torontoGrid}>
          <div className={localStyles.bodyCopy}>
            <p>
              Whether you run a restaurant in Mississauga, a salon in Brampton, a
              contracting business in Scarborough, or a professional service in
              downtown Toronto, having a website is no longer optional — it&apos;s
              how customers find and trust you.
            </p>
            <p>
              Beeclue Tech has spent years building{" "}
              <Link href="/web-design-toronto">
                custom websites for businesses across the Greater Toronto Area
              </Link>
              , from{" "}
              <Link href="/services">contractors and trades</Link> to{" "}
              <Link href="/ecommerce-development-toronto">
                e-commerce brands
              </Link>
              . The $19/month plan brings that same quality, mobile-first design,
              and SEO-ready foundation to small businesses at a price built for
              getting started — not breaking the bank.
            </p>
            <p>
              According to{" "}
              <a
                href="https://www.thinkwithgoogle.com/?utm_source=beeclue&utm_medium=blog&utm_campaign=19-month-website-design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Think with Google research on local search behavior
              </a>
              , the majority of consumers search online before visiting a local
              business — making a website one of the highest-impact investments a
              small business can make.
            </p>
          </div>

          <div className={localStyles.torontoImageWrap}>
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
              alt="Toronto small business owner reviewing website design on laptop in a modern storefront"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </FadeIn>

      {/* ============================================
          SECTION 4 — WHO THIS PLAN IS PERFECT FOR
          ============================================ */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Who This Plan Is Perfect For</h2>
        </div>
        <div className={styles.scrollerFlexCentered}>
          <div className={localStyles.industryCard}>
            <UtensilsCrossed
              size={36}
              color="var(--primary)"
              style={{ marginBottom: "1rem" }}
            />
            <h3>Restaurants &amp; Cafés</h3>
            <p>
              Menus, hours, location, and online ordering links in one place.
            </p>
          </div>
          <div className={localStyles.industryCard}>
            <Scissors
              size={36}
              color="var(--primary)"
              style={{ marginBottom: "1rem" }}
            />
            <h3>Salons &amp; Personal Care</h3>
            <p>
              A gallery-first design to showcase your work and attract bookings.
            </p>
          </div>
          <div className={localStyles.industryCard}>
            <HardHat
              size={36}
              color="var(--primary)"
              style={{ marginBottom: "1rem" }}
            />
            <h3>Contractors &amp; Trades</h3>
            <p>
              Build trust with service pages, project photos, and instant
              WhatsApp contact.
            </p>
          </div>
          <div className={localStyles.industryCard}>
            <Briefcase
              size={36}
              color="var(--primary)"
              style={{ marginBottom: "1rem" }}
            />
            <h3>Real Estate &amp; Professional Services</h3>
            <p>
              A polished, credible online presence that converts visitors into
              leads.
            </p>
          </div>
          <div className={localStyles.industryCard}>
            <ShoppingBag
              size={36}
              color="var(--primary)"
              style={{ marginBottom: "1rem" }}
            />
            <h3>Retail &amp; Local Shops</h3>
            <p>
              Show your products, location, and social presence to drive foot
              traffic.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* ============================================
          SECTION 5 — WHY BUSINESSES CHOOSE BEECLUE (STATS + TRUST)
          ============================================ */}
      <FadeIn className={`${styles.baseSection} ${styles.aboutSection}`}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h2>Why Businesses Across the GTA Choose Beeclue Tech</h2>
            <p>
              Beeclue Tech is a Toronto-based{" "}
              <Link href="/" style={{ color: "var(--primary-light)", textDecoration: "underline", textUnderlineOffset: "3px" }}>web design and software development agency</Link>{" "}
              trusted by businesses across Downtown Toronto, North York,
              Scarborough, Etobicoke, Mississauga, Brampton, Markham, and
              Vaughan. Every website we build — including those on the $19/month
              plan — is designed with the same performance, security, and SEO
              standards used in our{" "}
              <Link href="/custom-software-development-toronto" style={{ color: "var(--primary-light)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                enterprise projects
              </Link>
              .
            </p>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>9+</span>
              <span className={styles.statLabel}>Years of Experience</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Enterprise Projects</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* TESTIMONIALS (reused as-is from homepage) */}
      <FadeIn className={`${styles.baseSection} ${styles.testimonialsSection}`}>
        <div className={styles.testimonialsTop}>
          <h2>What Our Clients Say</h2>

          <div className={styles.reviewsMeta}>
            <div className={styles.ratingsBadges}>
              <div className={styles.ratingBadge}>
                <img
                  src="/google-logo.svg"
                  alt="Google"
                  width="24"
                  height="24"
                />
                <div className={styles.ratingInfo}>
                  <div className={styles.ratingStars}>★★★★★</div>
                  <span className={styles.ratingText}>5.0 Rating</span>
                </div>
              </div>
              <div className={styles.ratingBadge}>
                <img
                  src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
                  alt="Trustpilot 5 Stars"
                  width="100"
                  height="20"
                />
                <div className={styles.ratingInfo}>
                  <span className={styles.ratingText}>Excellent</span>
                </div>
              </div>
            </div>

            <a
              href="https://g.page/r/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.reviewButton}
            >
              Review Us on Google
            </a>
          </div>
        </div>

        <div className={styles.testimonialScroller}>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>
              &quot;Very professional and great communicators. The programmer did
              an amazing job keeping his patience. Always available to answer
              questions. Zero ego, friendly and respectful.&quot;
            </p>
            <div className={styles.clientName}>— Chirag Murabia</div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>
              &quot;They perfectly captured my vision and brought it to life with
              creativity and technical expertise. The entire process was smooth,
              and her attention to detail made all the difference.&quot;
            </p>
            <div className={styles.clientName}>— Tejbeer Bhullar</div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>
              &quot;Beeclue is the best as I had really a great experience. Very
              affordable and they listen to customer demands in detail and do
              everything accordingly. Highly recommend!&quot;
            </p>
            <div className={styles.clientName}>— Supreet Bhatia</div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>
              &quot;Thank you for helping me grow my startup. Your web team is
              really admirable. Exactly what I wanted. Thank you for your efforts
              and great work!&quot;
            </p>
            <div className={styles.clientName}>— Payal Sharma</div>
          </div>
        </div>
      </FadeIn>

      {/* ============================================
          SECTION 6 — FAQ
          ============================================ */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className={localStyles.faqList}>
          <FaqItem question="Is there really no upfront cost?">
            <p>
              Correct — the $19/month plan covers your full website build,
              hosting, and ongoing maintenance with no large upfront design fee.
              You simply pay the monthly subscription.
            </p>
          </FaqItem>

          <FaqItem question="What if I already have a website?">
            <p>
              We can migrate your existing content into a new, modern design
              under the same $19/month plan — including improvements to mobile
              responsiveness and page speed, which are key{" "}
              <a
                href="https://developers.google.com/search/docs/appearance/page-experience?utm_source=beeclue&utm_medium=blog&utm_campaign=19-month-website-design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google ranking factors
              </a>
              .
            </p>
          </FaqItem>

          <FaqItem question="How long does it take to build my website?">
            <p>
              Most $19/month websites are completed within 5–7 business days once
              we receive your content (logo, photos, business details).
            </p>
          </FaqItem>

          <FaqItem question="Can I cancel anytime?">
            <p>
              Yes. There&apos;s no long-term contract — you can cancel the
              subscription at any time.
            </p>
          </FaqItem>

          <FaqItem question="Do you serve businesses outside Toronto?">
            <p>
              Yes — we work with small businesses across the entire{" "}
              <Link href="/web-design-toronto">Greater Toronto Area</Link>,
              including Mississauga, Brampton, Markham, Vaughan, Scarborough,
              and Etobicoke.
            </p>
          </FaqItem>
        </div>
      </FadeIn>

      {/* ============================================
          SECTION 7 — PRICING
          ============================================ */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Pricing Plans — Beeclue Tech</h2>
          <p style={{ maxWidth: "800px", margin: "0 auto", color: "var(--muted)", fontSize: "1.1rem" }}>
            Choose the plan that fits your business. All plans include free hosting, free maintenance, and mobile-optimized design — no hidden fees, no long-term contracts.
          </p>
        </div>

        <div className={localStyles.pricingCards}>
          {/* Basic */}
          <div className={localStyles.pricingCard}>
            <h3>Basic</h3>
            <div className={localStyles.price}>$19/mo</div>
            <div className={localStyles.targetAudience}>Perfect for new businesses that need a clean, professional online presence fast.</div>
            <div className={localStyles.description}>
              A simple, fast, mobile-ready website that gets your business found online. Ideal for solo entrepreneurs, trades, salons, and local shops that need the essentials — without the cost of a traditional web agency.
            </div>
            <h4>Includes:</h4>
            <ul>
              <li>Up to 5 custom pages</li>
              <li>Free hosting &amp; maintenance</li>
              <li>Mobile optimized + SSL certificate</li>
              <li>WhatsApp button</li>
              <li>Photo gallery</li>
              <li>Social media links</li>
              <li>Contact form</li>
              <li>Google Maps embed</li>
              <li>1 content update per month</li>
            </ul>
            <div className={localStyles.notIncluded}>
              <strong>Not included:</strong> Blog, custom email, SEO setup, booking forms, e-commerce.
            </div>
          </div>

          {/* Business */}
          <div className={localStyles.pricingCard}>
            <h3>Business</h3>
            <div className={localStyles.price}>$29/mo</div>
            <div className={localStyles.targetAudience}>Built for growing businesses that need more content, lead capture, and visibility.</div>
            <div className={localStyles.description}>
              Everything in Basic, plus more pages, a blog for content marketing, basic SEO setup, and a booking form to capture appointments directly from your site. A great fit for service-based businesses ready to scale their online presence.
            </div>
            <h4>Includes everything in Basic, plus:</h4>
            <ul>
              <li>Up to 10 pages</li>
              <li>Blog / news section</li>
              <li>Booking / appointment form</li>
              <li>Basic SEO setup (meta tags, sitemap)</li>
              <li>Google Analytics &amp; Search Console setup</li>
              <li>2 content updates per month</li>
            </ul>
            <div className={localStyles.notIncluded}>
              <strong>Not included:</strong> Custom email, advanced SEO, e-commerce, priority support.
            </div>
          </div>

          {/* Premium */}
          <div className={localStyles.pricingCard} style={{ borderColor: "var(--primary)" }}>
            <h3>Premium <span style={{ fontSize: "0.8rem", fontWeight: "normal", color: "var(--muted)" }}>(WooCommerce)</span></h3>
            <div className={localStyles.price}>$59/mo</div>
            <div className={localStyles.targetAudience}>For businesses ready to sell online.</div>
            <div className={localStyles.description}>
              Includes a full WooCommerce store with up to 50 products, secure payment integration, and inventory management — combined with advanced SEO to help your products get found. Includes priority support and quarterly performance audits to keep your store running smoothly.
            </div>
            <h4>Includes everything in Business, plus:</h4>
            <ul>
              <li>Up to 20 pages</li>
              <li>WooCommerce store (up to 50 products)</li>
              <li>Payment gateway integration</li>
              <li>Inventory &amp; order management</li>
              <li>Advanced SEO (schema markup, local SEO, content optimization)</li>
              <li>Custom domain email (up to 2 inboxes)</li>
              <li>2 content updates per month</li>
              <li>Priority support</li>
              <li>Quarterly performance &amp; security audits</li>
            </ul>
            <div className={localStyles.notIncluded}>
              <strong>Not included:</strong> Custom integrations, multi-language support, unlimited products.
            </div>
          </div>

          {/* Custom */}
          <div className={localStyles.pricingCard}>
            <h3>Custom</h3>
            <div className={localStyles.price}>Get a Quote</div>
            <div className={localStyles.targetAudience}>For businesses with unique requirements.</div>
            <div className={localStyles.description}>
              Unlimited pages, unlimited products, custom integrations with your existing tools (CRM, booking systems, ERPs), multi-language support, and a dedicated account manager. Built specifically around your business — talk to our team to scope your project.
            </div>
            <h4>Includes everything in Premium, plus:</h4>
            <ul>
              <li>Unlimited pages</li>
              <li>Unlimited products</li>
              <li>Custom integrations (CRM, ERP, APIs)</li>
              <li>Multi-language support</li>
              <li>Dedicated account manager</li>
              <li>Monthly performance &amp; security audits</li>
              <li>Custom content update schedule</li>
            </ul>
          </div>
        </div>

        <h3 style={{ textAlign: "center", marginTop: "5rem", marginBottom: "2rem", fontSize: "1.75rem" }}>Plan Comparison</h3>
        <div className={localStyles.pricingTableWrapper}>
          <table className={localStyles.pricingTable}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Basic ($19/mo)</th>
                <th>Business ($29/mo)</th>
                <th>Premium ($59/mo)</th>
                <th>Custom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pages Included</td>
                <td>Up to 5 pages</td>
                <td>Up to 10 pages</td>
                <td>Up to 20 pages</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Free Hosting</td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Free Maintenance</td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Mobile Optimized</td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>SSL Certificate</td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>WhatsApp Button</td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Photo Gallery</td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Social Media Links</td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Contact Form</td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Google Maps Embed</td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Blog / News Section</td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Custom Domain Email</td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><X size={20} color="var(--muted)" /></td>
                <td>Up to 2 inboxes</td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Booking / Appointment Form</td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Basic SEO Setup</td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Advanced SEO (schema, local SEO)</td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Google Analytics &amp; Search Console</td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>WooCommerce / Online Store</td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><X size={20} color="var(--muted)" /></td>
                <td>Up to 50 products</td>
                <td>Unlimited products</td>
              </tr>
              <tr>
                <td>Payment Gateway Integration</td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Inventory &amp; Order Management</td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Monthly Content Updates</td>
                <td>1/month</td>
                <td>2/month</td>
                <td>2/month</td>
                <td>Custom</td>
              </tr>
              <tr>
                <td>Priority Support</td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Custom Integrations (CRM, ERP, APIs)</td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Multi-language Support</td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Dedicated Account Manager</td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><Check size={20} color="var(--primary)" /></td>
              </tr>
              <tr>
                <td>Performance &amp; Security Audits</td>
                <td><X size={20} color="var(--muted)" /></td>
                <td><X size={20} color="var(--muted)" /></td>
                <td>Quarterly</td>
                <td>Monthly</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className={localStyles.pricingDisclaimer}>
          *All plans: no setup fees, no long-term contracts, cancel anytime.
        </p>
      </FadeIn>

      {/* ============================================
          SECTION 8 — FINAL CTA
          ============================================ */}
      <FadeIn
        className={styles.baseSection}
        style={{ textAlign: "center", borderTop: "1px solid var(--border)" }}
      >
        <h2 style={{ marginBottom: "1.5rem" }}>
          Get Your Business Online — Starting at $19/Month
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1.25rem",
            maxWidth: "700px",
            margin: "0 auto 3rem auto",
            lineHeight: "1.7",
          }}
        >
          Ready to give your business the professional online presence it
          deserves?{" "}
          <Link
            href="/contact"
            style={{
              color: "var(--primary-light)",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            Book a free consultation
          </Link>{" "}
          with our team and we&apos;ll walk you through exactly what your new
          website could look like — no pressure, no obligation.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="/contact" className={styles.ctaButton}>
            Start a Project <ArrowRight className={styles.arrow} />
          </Link>
        </div>
      </FadeIn>

      {/* ============================================
          TERMS & CONDITIONS FOOTNOTE
          ============================================ */}
      <section className={localStyles.termsFootnote}>
        <div className={localStyles.termsInner}>
          <h3>$19/mo Website Development Offer</h3>
          <h4>Terms and Conditions</h4>
          <h5>Effective Date: April 26, 2026 · Company: Beeclue Tech</h5>

          <p className={localStyles.termsSectionTitle}>1. Introduction</p>
          <p>These Terms and Conditions (&ldquo;Agreement&rdquo;) govern the promotional website development services (&ldquo;Services&rdquo;) offered by Beeclue Tech shall be referred to as &ldquo;company&rdquo;, under the $19/month subscription plan (&ldquo;Offer&rdquo;). By subscribing, the client (&ldquo;Client&rdquo;) agrees to be legally bound by this Agreement.</p>

          <p className={localStyles.termsSectionTitle}>2. Promotional Offer Validity</p>
          <p>2.1 This Offer shall remain active and in effect on a continuing basis until such time as it is modified, suspended, or terminated by the Company at its sole and absolute discretion, with or without prior notice to the Client.</p>
          <p>2.2 The Company reserves the right to modify, suspend, or withdraw this Offer at any time without prior notice.</p>

          <p className={localStyles.termsSectionTitle}>3. Scope of Services</p>
          <p>3.1 Company shall provide website design, development, and limited maintenance services as determined at its sole discretion.</p>
          <p>3.2 Pre-Delivery Revisions: Prior to final delivery of the website, the Client shall be entitled to request up to five (5) revisions per month. Any additional revisions beyond this limit may be subject to additional fees as determined by the company.</p>
          <p>3.3 Post-Delivery Maintenance and Revisions: Following final delivery, the Client shall be entitled to request up to two (2) revisions per month at no additional cost, limited to minor updates and maintenance.</p>
          <p>3.4 Non-Accumulation of Revisions: Any unused revisions in a given month, whether pre-delivery or post-delivery, shall not roll over or carry forward to subsequent months.</p>
          <p>3.5 Any services or revisions beyond the scope defined above, including but not limited to major design changes, feature enhancements, or additional development work, shall be subject to separate agreement and additional fees.</p>

          <p className={localStyles.termsSectionTitle}>4. Subscription and Payment</p>
          <p>4.1 The Client agrees to pay a recurring fee of $19 per month, billed in advance.</p>
          <p>4.2 Failure to make payment may result in suspension or termination of Services without notice.</p>
          <p>4.3 The company reserves the right to revise pricing after the promotional period ends.</p>

          <p className={localStyles.termsSectionTitle}>5. Ownership and Intellectual Property</p>
          <p>5.1 All websites, designs, source code, and related intellectual property developed under this Offer shall remain the sole and exclusive property of the company, unless otherwise expressly agreed in writing.</p>
          <p>5.2 Subject to full compliance with this Agreement, the Client is granted a limited, revocable, non-exclusive, and non-transferable license to use the website solely during the term of an active subscription.</p>
          <p>5.3 No ownership rights in the website, design, or underlying intellectual property shall transfer to the Client unless expressly agreed in writing by the company.</p>
          <p>5.4 Notwithstanding the foregoing, any materials provided by the Client, including but not limited to logos, images, trademarks, and other proprietary content (&ldquo;Client Materials&rdquo;), shall remain the sole property of the Client. Company shall have no ownership rights in such Client Materials.</p>
          <p>5.5 The Client represents and warrants that it has all necessary rights, licenses, and permissions to use and provide the Client Materials. In the event of any claim, dispute, or allegation arising from the use of such Client Materials, the Client shall be solely responsible, and Company shall not be held liable.</p>
          <p>5.6 The company reserves the right, upon reasonable notice and in consultation with the Client, to remove or delete any Client Materials from the website in the event of a legal dispute, alleged infringement, or non-compliance with applicable laws or third-party rights.</p>

          <p className={localStyles.termsSectionTitle}>6. Termination, Data Deletion, and Buyout Option</p>
          <p>6.1 Either party may terminate the subscription at any time.</p>
          <p>6.2 Upon termination: The website shall be deactivated; and all data, content, and materials may be permanently deleted without liability to the Company.</p>
          <p>6.3 The Client acknowledges that no rights to the website, code, or data shall remain upon termination.</p>
          <p>6.4 Buyout Option: Notwithstanding Clause 6.3, the Client may request transfer of the website and associated data prior to deletion by paying a one-time fee of $300 (&ldquo;Buyout Fee&rdquo;).</p>
          <p>6.5 Upon receipt of the Buyout Fee: Company shall provide a transferable version of the website (format and scope at Company&apos;s discretion); Limited rights to use the delivered website shall be granted to the Client; Company shall not be obligated to provide ongoing support, maintenance, or compatibility assurances post-transfer.</p>

          <p className={localStyles.termsSectionTitle}>7. Hosting Services</p>
          <p>7.1 Hosting is provided free of charge through third-party platforms (including Vercel).</p>
          <p>7.2 The Client agrees to comply with all applicable third-party terms and conditions.</p>
          <p>7.3 Company shall not be liable for any downtime, service interruptions, or limitations caused by third-party providers.</p>

          <p className={localStyles.termsSectionTitle}>8. Form Submissions</p>
          <p>8.1 The Offer includes up to 250 form submissions per month at no additional cost.</p>
          <p>8.2 Form services are facilitated through Web3Forms, and the Client agrees to comply with its applicable terms and limitations.</p>
          <p>8.3 Any usage exceeding the monthly limit shall incur additional charges in accordance with the pricing of the respective third-party provider.</p>

          <p className={localStyles.termsSectionTitle}>9. Refund Policy</p>
          <p>9.1 All payments made under this Offer are strictly non-refundable, except where required by applicable law.</p>
          <p>9.2 No refunds shall be issued for: Partial use of Services; Early termination by the Client; Suspension or termination due to breach of this Agreement.</p>
          <p>9.3 Any exception to this policy shall be at the sole discretion of Company.</p>

          <p className={localStyles.termsSectionTitle}>10. Limitation of Liability</p>
          <p>10.1 To the fullest extent permitted by law, Company shall not be liable for any indirect, incidental, special, or consequential damages, including loss of business, revenue, or data.</p>
          <p>10.2 Company&apos;s total liability under this Agreement shall not exceed the total fees paid by the Client in the preceding one (1) month.</p>

          <p className={localStyles.termsSectionTitle}>11. Indemnification</p>
          <p>The Client agrees to indemnify, defend, and hold harmless company and its affiliates from and against any claims, damages, liabilities, or expenses (including legal fees) arising out of: The Client&apos;s use of the website; Content uploaded or shared by the Client; Violation of any applicable laws or third-party rights.</p>

          <p className={localStyles.termsSectionTitle}>12. Disclaimer of Warranties</p>
          <p>All Services are provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis without warranties of any kind, whether express or implied, including fitness for a particular purpose or uninterrupted operation.</p>

          <p className={localStyles.termsSectionTitle}>13. Dispute Resolution</p>
          <p>13.1 The parties agree to attempt to resolve disputes through good-faith negotiations.</p>
          <p>13.2 If unresolved within thirty (30) days, the dispute shall be referred to arbitration.</p>

          <p className={localStyles.termsSectionTitle}>14. Arbitration</p>
          <p>14.1 Any dispute arising out of or relating to this Agreement shall be finally resolved by binding arbitration.</p>
          <p>14.2 Arbitration shall: Be conducted in accordance with the rules of a recognized arbitration authority; Take place in Ontario, Canada; Be conducted in English.</p>
          <p>14.3 The arbitrator&apos;s decision shall be final and binding.</p>

          <p className={localStyles.termsSectionTitle}>15. Governing Law</p>
          <p>This Agreement shall be governed by the laws of Ontario, Canada, without regard to conflict of law principles.</p>

          <p className={localStyles.termsSectionTitle}>16. Force Majeure</p>
          <p>The company shall not be liable for delays or failures caused by events beyond its reasonable control.</p>

          <p className={localStyles.termsSectionTitle}>17. Entire Agreement</p>
          <p>This Agreement constitutes the entire agreement between the parties and supersedes all prior communications.</p>

          <p className={localStyles.termsSectionTitle}>18. Contact Information</p>
          <p>Email: info@beeclue.com · Contact Form: <Link href="/contact">beeclue.com/contact</Link></p>
        </div>
      </section>
    </main>
  );
}
