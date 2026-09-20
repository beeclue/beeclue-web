"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, X } from "lucide-react";
import styles from "./LawFirmAuditForm.module.css";

interface LawFirmAuditFormProps {
  initialFirmName?: string;
  className?: string;
}

export default function LawFirmAuditForm({ className }: LawFirmAuditFormProps = {}) {
  const [showFloatingBar, setShowFloatingBar] = useState(false);
  const [floatingDismissed, setFloatingDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (floatingDismissed) return;
      if (window.scrollY > 600) {
        setShowFloatingBar(true);
      } else {
        setShowFloatingBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [floatingDismissed]);

  if (!showFloatingBar) return null;

  return (
    <div className={`${styles.floatingBar} ${className || ""}`}>
      <div className={styles.floatingText}>
        <Sparkles size={18} color="var(--primary-light)" />
        <span>
          Get a <strong>free 5-page website mockup</strong> for your law firm
        </span>
      </div>
      <Link href="/contact" className={styles.floatingButton}>
        Claim Mockup ($0 Down)
      </Link>
      <button
        type="button"
        className={styles.floatingClose}
        onClick={() => {
          setShowFloatingBar(false);
          setFloatingDismissed(true);
        }}
        aria-label="Dismiss mockup banner"
      >
        <X size={16} />
      </button>
    </div>
  );
}
