import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FaqAccordion from "@/components/FaqAccordion";
import ReviewsMeta from "@/components/ReviewsMeta";
import BlogAuthorBox from "@/components/BlogAuthorBox";
import { ArrowRight, CheckCircle2, Globe, ShieldCheck, Zap } from "lucide-react";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Free .com/.ca While on $29/mo Website Plan | Beeclue Toronto",
  description: "Get a real .com or .ca free while subscribed to Beeclue Business $29/mo or Premium $59/mo. Hosting, SSL, maintenance included. No $3k upfront.",
  alternates: { canonical: "https://beeclue.com/free-domain-with-website" },
  openGraph: {
    title: "Free .com/.ca + Website for $29/mo",
    description: "Real domain free while subscribed. Hosting + SSL included.",
    url: "https://beeclue.com/free-domain-with-website",
  },
};

const faqs = [
  { q: "Which domains are free?", a: ".com or .ca only, standard-availability under $25/yr, 1 per client. No .io/.ai/premium/aftermarket. You give 3 choices, we approve and register in our Cloudflare account." },
  { q: "Is it really free forever?", a: "Free while your Business $29/mo or Premium $59/mo stays active — we pay first registration + yearly renewals. Core $19/mo does not include a domain." },
  { q: "Who owns the domain?", a: "Beeclue holds it in Cloudflare Registrar and licenses it to you while subscribed, same as site IP in our subscription terms. Your logo/content stays yours." },
  { q: "What if I cancel?", a: "30 days to transfer out for $25 admin + you pay next renewal. Otherwise domain stays with Beeclue and site deactivates. Buyout terms apply where noted." },
  { q: "Do I get email + SSL?", a: "Yes — DNS to Vercel, free SSL, hosting + maintenance included. We guide you to connect Google Workspace/forwarding for hello@yourdomain.com." },
  { q: "How fast?", a: "Send 3 name ideas via contact with promo=freedomain. We check Cloudflare, buy, set DNS/SSL in ~15 min after plan activation, then build your 5-page site with free mockup first." },
];

export default function FreeDomainPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Product", name: "Business Website + Free Domain", brand: { "@type": "Brand", name: "Beeclue Tech" }, offers: { "@type": "Offer", price: "29", priceCurrency: "CAD", availability: "https://schema.org/InStock", url: "https://beeclue.com/free-domain-with-website", description: "Free .com/.ca while subscribed to $29/mo Business plan" } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://beeclue.com" }, { "@type": "ListItem", position: 2, name: "Free Domain With Website" }] },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
            <span className={styles.titleLinePrimary}>Free .com/.ca + Website</span>
            <span className={styles.titleLine}>for $29/mo — No $3k Upfront</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Stop sending clients to yourname.wixsite.com. Get a real domain free while subscribed, plus 5-page site, hosting, SSL + maintenance. By Kay at Beeclue Tech, Toronto.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact?plan=business&promo=freedomain&utm_source=beeclue&utm_medium=landing&utm_campaign=free-domain" className={styles.ctaButton}>Claim my free domain <ArrowRight className={styles.arrow} /></Link>
            <Link href="/top-5-free-domain-registrars-pros-and-cons" className={styles.ctaButtonLight}>Why not 100% free?</Link>
          </div>
          <p style={{ color: "var(--muted)", marginTop: "1rem" }}>Business $29/mo • Premium $59/mo WooCommerce • Core $19/mo excluded • .com/.ca only</p>
        </div>
      </FadeIn>
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}><h2>How it works in 3 steps</h2><p>Manual Cloudflare setup — ~15 minutes after activation.</p></div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}><Globe color="var(--primary-light)" size={32} /><div><h3>1. You pick 3 names</h3><p>Send ideas via contact with promo=freedomain. We check standard availability.</p></div></div>
          <div className={styles.valueItem}><Zap color="var(--primary-light)" size={32} /><div><h3>2. We register + connect</h3><p>We buy in Beeclue Cloudflare, set DNS to Vercel, add SSL + hosting.</p></div></div>
          <div className={styles.valueItem}><ShieldCheck color="var(--primary-light)" size={32} /><div><h3>3. You grow, we renew</h3><p>Free renewals while active. Cancel? 30-day transfer for $25 or domain stays.</p></div></div>
        </div>
      </FadeIn>
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}><h2>Pricing — free domain highlighted</h2></div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}><CheckCircle2 className={styles.valueIcon} /><div><h3>Core $19/mo</h3><p>Up to 5 pages, hosting, SSL, contact form. No free domain.</p></div></div>
          <div className={styles.valueItem} style={{ border: "1px solid var(--primary-light)", borderRadius: "12px", padding: "1rem" }}><CheckCircle2 className={styles.valueIcon} /><div><h3>Business $29/mo — Most Popular + Free Domain</h3><p>Everything in Core + free .com/.ca while subscribed, expanded pages.</p><Link href="/contact?plan=business&promo=freedomain" className={styles.learnMoreLink}>Claim Business <ArrowRight size={16} /></Link></div></div>
          <div className={styles.valueItem}><CheckCircle2 className={styles.valueIcon} /><div><h3>Premium $59/mo + Free Domain</h3><p>WooCommerce build + free .com/.ca while subscribed.</p></div></div>
        </div>
      </FadeIn>
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}><h2>Free domain questions</h2></div>
        <FaqAccordion faqs={faqs} />
      </FadeIn>
      <FadeIn className={styles.baseSection}>
        <ReviewsMeta campaign="free_domain" />
        <BlogAuthorBox />
      </FadeIn>
    </main>
  );
}
