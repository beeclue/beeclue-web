import Link from "next/link";
import styles from "./page.module.css";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div className={styles.heroContent} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 className={styles.title} style={{ fontSize: "clamp(5rem, 15vw, 12rem)", marginBottom: "0" }}>
            <span className={styles.titleLinePrimary}>404</span>
          </h1>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem" }}>
            Page Not Found
          </h2>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto 3rem auto" }}>
            The page you are looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Link href="/" className={styles.ctaButtonLight}>
            <Home className={styles.arrow} style={{ marginRight: "0.5rem" }} size={20} /> Back to Homepage
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
