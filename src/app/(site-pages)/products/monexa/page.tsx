import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { ArrowRight, CheckCircle2, LineChart, PiggyBank, RefreshCcw, Sparkles, ListTree } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function MonexaProductPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Monexa",
    "operatingSystem": "Web",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Beeclue Tech"
    }
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* HEADER SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <div style={{ marginBottom: "2rem" }}>
            <Image 
              src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/monexa.png" 
              alt="Monexa Logo" 
              width={200} 
              height={60} 
              style={{ objectFit: "contain" }}
            />
          </div>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Take Control of Your Finances,</span>
            <span className={styles.titleLine}>Effortlessly.</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            The simple, beautiful, and powerful way to track expenses, manage budgets, and achieve your financial goals. Stop wondering where your money goes.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <a 
              href="https://monexa.beeclue.com?utm_source=beeclue&utm_medium=website&utm_campaign=product_page" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
            >
              Start Tracking For Free <ArrowRight className={styles.arrow} />
            </a>
          </div>
        </div>
      </FadeIn>

      {/* DASHBOARD SHOWCASE */}
      <FadeIn className={styles.luxuryIntro} style={{ paddingBottom: "2rem" }}>
        <div className={styles.aboutImageContainer} style={{ height: "60vh", minHeight: "400px", width: "100%", position: "relative", borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
          <Image 
            src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/monexa-dashboard.webp" 
            alt="Monexa Dashboard Preview" 
            fill
            style={{ objectFit: "contain", padding: "2rem" }}
          />
        </div>
      </FadeIn>

      {/* DETAILED FEATURES */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Why You'll Love Monexa</h2>
          <p>Built by Beeclue to give you absolute clarity and control over your financial health.</p>
        </div>
        
        <div className={styles.scrollerFlexCentered}>
          <div className={styles.serviceCard}>
            <LineChart className={styles.serviceIcon} />
            <h3>See Your Full Financial Picture</h3>
            <p>Instantly see your spending trends, account balances, and cash flow without getting lost in spreadsheets. Make informed decisions quickly with a clear, visual overview.</p>
          </div>
          <div className={styles.serviceCard}>
            <PiggyBank className={styles.serviceIcon} />
            <h3>Create Budgets That Work</h3>
            <p>Our flexible budgeting tool helps you plan your spending and stick to it. Proactively manage your money, prevent overspending, and reach your savings goals faster.</p>
          </div>
          <div className={styles.serviceCard}>
            <RefreshCcw className={styles.serviceIcon} />
            <h3>Automate Your Financial Life</h3>
            <p>Set up recurring expenses like rent or subscriptions just once. Our app will automatically log them when they're due, so your records are always accurate with zero effort.</p>
          </div>
          <div className={styles.serviceCard}>
            <Sparkles className={styles.serviceIcon} />
            <h3>AI-Powered Insights</h3>
            <p>Go beyond simple numbers. Our AI analyst studies your habits, provides personalized insights, and highlights trends you might have missed to improve your financial habits.</p>
          </div>
          <div className={styles.serviceCard}>
            <ListTree className={styles.serviceIcon} />
            <h3>Detailed Tracking</h3>
            <p>Log expenses, deposits, and transfers with ease. Categorize everything, assign payments to specific accounts, and maintain a crystal-clear record of all activities.</p>
          </div>
        </div>
      </FadeIn>

      {/* TESTIMONIALS SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.testimonialsSection}`}>
        <div className={styles.testimonialsTop}>
          <h2>What Users Are Saying</h2>
        </div>

        <div className={styles.testimonialScroller}>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"I finally feel in control of my money. The dashboard is amazing, and the budgeting feature helped me save $300 in my first month!"</p>
            <div className={styles.clientName}>— Alex P.</div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"The best money management app I've used. It's beautiful, fast, and the AI insights are surprisingly useful. Highly recommended."</p>
            <div className={styles.clientName}>— Sarah K.</div>
          </div>
        </div>
      </FadeIn>

      {/* CUSTOM SOFTWARE SECTION */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingBottom: "4rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>We Build Custom Software Like Monexa</h2>
        <p style={{ color: "var(--muted)", fontSize: "1.25rem", maxWidth: "800px", margin: "0 auto 2rem auto" }}>
          Need a robust, customized internal tool or SaaS product for your own business? Beeclue Tech specializes in building proprietary software that fits your exact needs.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="/contact" className={styles.ctaButtonLight}>
            Discuss Your App Idea <ArrowRight className={styles.arrow} size={20} />
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
