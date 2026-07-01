import Link from "next/link";
import styles from "./page.module.css";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Home, Search, FileText, Briefcase, Phone } from "lucide-react";

const popularPages = [
  { name: "Our Services", href: "/services", icon: Briefcase },
  { name: "Case Studies", href: "/case-studies", icon: FileText },
  { name: "Contact Us", href: "/contact", icon: Phone },
];

export default function NotFound() {
  return (
    <main className={styles.main}>
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div className={styles.heroContent} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 className={styles.title} style={{ fontSize: "clamp(5rem, 15vw, 12rem)", marginBottom: "0" }}>
            <span className={styles.titleLinePrimary}>404</span>
          </h1>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem" }}>
            Oops! This page doesn&apos;t exist.
          </h2>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto 2rem auto" }}>
            But we can still help you build something great. Here are some popular pages to get you started.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "2.5rem" }}>
            {popularPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  border: "1px solid var(--border)",
                  borderRadius: "50px",
                  color: "var(--foreground)",
                  fontSize: "0.9rem",
                  transition: "all 0.3s ease",
                }}
              >
                <page.icon size={16} /> {page.name}
              </Link>
            ))}
          </div>

          <a
            href="https://www.google.com/search?q=site:beeclue.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--muted)",
              fontSize: "0.9rem",
              marginBottom: "2.5rem",
              transition: "color 0.3s ease",
            }}
          >
            <Search size={16} /> Or search our site
          </a>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/" className={styles.ctaButtonLight}>
              <Home style={{ marginRight: "0.5rem" }} size={20} /> Back to Homepage
            </Link>
            <Link href="/contact" className={styles.ctaButton}>
              Contact Us <ArrowRight className={styles.arrow} />
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
