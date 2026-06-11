import React from "react";
import Link from "next/link";
import globalStyles from "@/app/page.module.css";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className={globalStyles.footer}>
      <div className={globalStyles.footerContent}>
        <h2>Let's Build Something Powerful</h2>
        <p className={globalStyles.footerSub}>
          Join our newsletter for the latest tech insights, or start your project today to build digital solutions designed for growth.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginBottom: '3rem', width: '100%' }}>
          <Newsletter />
          <Link href="/contact" className={globalStyles.ctaButtonLight}>
            Start a Project
          </Link>
        </div>

        <div className={globalStyles.footerContact}>
          <a href="mailto:hello@beeclue.com" className={globalStyles.emailLink}>
            hello@beeclue.com
          </a>
          <a href="tel:+16479476253" className={globalStyles.emailLink}>
            +1 (647) 947-6253
          </a>
          <p className={globalStyles.footerLocation}>36 Carslake Crescent, Toronto, ON M1J 2A7</p>
          <div className={globalStyles.legalLinks}>
            <Link href="/blogs">Blogs</Link>
            <span>|</span>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
