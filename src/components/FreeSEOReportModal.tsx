"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./FreeSEOReportModal.module.css";

const STORAGE_KEY = "beeclue_seo_report_modal_dismissed";

export default function FreeSEOReportModal() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only show modal on the homepage ("/")
    if (pathname !== "/") {
      setIsOpen(false);
      return;
    }

    // Check if the user has previously dismissed or claimed the offer
    const isDismissed = localStorage.getItem(STORAGE_KEY);
    if (isDismissed === "true") {
      return;
    }

    // Trigger modal after 5 seconds of browsing
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  };

  if (pathname !== "/" || !isOpen) {
    return null;
  }

  return (
    <div
      className={styles.backdrop}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="seo-modal-title"
    >
      <div
        className={styles.modalCard}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Signature Beeclue Grid Layer Background */}
        <div className={styles.gridLayer} />
        <div className={styles.ambientGlow} />

        <button
          type="button"
          onClick={handleClose}
          className={styles.closeButton}
          aria-label="Close free SEO report dialog"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className={styles.contentWrapper}>
          <div className={styles.kicker}>
            <span className={styles.kickerDot} />
            <span>Complimentary Audit</span>
          </div>

          <h2 id="seo-modal-title" className={styles.headline}>
            Free Professional SEO Report
          </h2>

          <p className={styles.description}>
            Uncover the technical and architectural bottlenecks impacting your Google search rankings. Analyzed manually by senior engineers at Beeclue.
          </p>

          <div className={styles.auditPoints}>
            <div className={styles.pointRow}>
              <div className={styles.checkBadge}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <span>Core Web Vitals & technical crawl diagnosis</span>
            </div>

            <div className={styles.pointRow}>
              <div className={styles.checkBadge}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <span>Keyword visibility & search authority gap analysis</span>
            </div>

            <div className={styles.pointRow}>
              <div className={styles.checkBadge}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <span>Actionable growth roadmap tailored to your website</span>
            </div>
          </div>

          <div className={styles.actions}>
            <Link
              href="/contact?utm_source=beeclue&utm_medium=modal&utm_campaign=free-seo-report"
              onClick={handleClose}
              className={styles.ctaButton}
            >
              <span>Request Your Free Report</span>
              <span className={styles.arrow}>→</span>
            </Link>

            <button
              type="button"
              onClick={handleClose}
              className={styles.secondaryLink}
            >
              Skip for now, continue browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
