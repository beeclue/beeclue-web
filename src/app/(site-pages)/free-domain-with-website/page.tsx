import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FaqAccordion from "@/components/FaqAccordion";
import { ArrowRight, Globe, ShieldCheck, Zap } from "lucide-react";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Free Domain With Your Website | Beeclue Toronto",
  description: "Get a free domain with your new website from Beeclue — design, hosting and ongoing care included. No big upfront cost.",
  alternates: { canonical: "https://beeclue.com/free-domain-with-website" },
  openGraph: {
    title: "Free Domain With Your Website",
    description: "Your domain included free.",
    url: "https://beeclue.com/free-domain-with-website",
  },
};

const faqs = [
  { q: "What kind of domain do I get?", a: "A professional domain like yourname.com. Just tell us 3 name ideas and we'll set up your favourite for you." },
  { q: "Is the domain really free?", a: "Yes — your domain stays free while you're with us. No separate domain bills, ever." },
  { q: "Do I have to deal with any of the technical stuff?", a: "No — we take care of everything: registration, setup and yearly renewals. Your logo and website content are always 100% yours." },
  { q: "What happens if I leave?", a: "Your site stays live as long as your plan is active, and you'll have 30 days to take your domain with you. Moving it to your own account is a one-time $100 transfer fee." },
  { q: "Can I get email like hello@mybusiness.com?", a: "Yes — we'll help you set up a professional email address. Hosting and ongoing care are always included." },
  { q: "How do I start?", a: "Send us 3 name ideas and we'll start with a free mockup of your new website." },
];

export default function FreeDomainPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://beeclue.com" }, { "@type": "ListItem", position: 2, name: "Free Domain With Website", item: "https://beeclue.com/free-domain-with-website" }] },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
            <span className={styles.titleLinePrimary}>Get a Free Domain</span>
            <span className={styles.titleLine}>With Your Website</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Stop sending clients to yourname.wixsite.com. Get a free domain with your website — design, hosting and ongoing care included.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact?plan=business&promo=freedomain&utm_source=beeclue&utm_medium=landing&utm_campaign=free-domain" className={styles.ctaButton}>Claim my free domain <ArrowRight className={styles.arrow} /></Link>
            <Link href="/top-5-free-domain-registrars-pros-and-cons" className={styles.ctaButtonLight}>Why not 100% free?</Link>
          </div>
          <p style={{ color: "var(--muted)", marginTop: "1rem" }}>Free domain with your website</p>
        </div>
      </FadeIn>
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}><h2>How it works in 3 steps</h2><p>Ready shortly after you join.</p></div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}><Globe color="var(--primary-light)" size={32} /><div><h3>1. You pick 3 names</h3><p>Tell us 3 name ideas and we&apos;ll set up your favourite.</p></div></div>
          <div className={styles.valueItem}><Zap color="var(--primary-light)" size={32} /><div><h3>2. We handle everything</h3><p>We register and connect it all for you — hosting included.</p></div></div>
          <div className={styles.valueItem}><ShieldCheck color="var(--primary-light)" size={32} /><div><h3>3. You grow, we take care of it</h3><p>Your domain stays free as long as you&apos;re with us.</p></div></div>
        </div>
      </FadeIn>
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}><h2>Ready for your free domain?</h2><p>Tell us your name ideas and we&apos;ll start with a free mockup of your new website.</p></div>
        <Link href="/contact?plan=business&promo=freedomain&utm_source=beeclue&utm_medium=landing&utm_campaign=free-domain" className={styles.ctaButton}>Claim my free domain <ArrowRight className={styles.arrow} /></Link>
      </FadeIn>
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}><h2>Free domain questions</h2></div>
        <FaqAccordion faqs={faqs} />
      </FadeIn>
    </main>
  );
}
