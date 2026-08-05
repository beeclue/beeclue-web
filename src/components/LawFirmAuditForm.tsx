import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./LawFirmAuditForm.module.css";

export default function LawFirmAuditForm() {
  return (
    <div className={styles.auditFormContainer}>
      <div className={styles.header}>
        <h2>Request a Free Law Firm Website &amp; SEO Audit</h2>
        <p>
          We will analyze your law firm&apos;s website design, mobile UX, speed, and local Google map rankings, then record a private 5-minute video walkthrough delivered to your email in 24 hours.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <Link
            href="/contact?utm_source=beeclue&utm_medium=audit_cta&utm_campaign=law-firm-website-audit"
            className={styles.submitButton}
          >
            Request Free Video Audit <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
