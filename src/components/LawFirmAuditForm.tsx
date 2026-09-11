"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Scale, Sparkles, X } from "lucide-react";
import styles from "./LawFirmAuditForm.module.css";
import { trackFormSubmit, trackFormStart } from "@/lib/analytics";

interface LawFirmAuditFormProps {
  initialFirmName?: string;
  className?: string;
}

export default function LawFirmAuditForm({ initialFirmName = "", className }: LawFirmAuditFormProps) {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [showFloatingBar, setShowFloatingBar] = useState(false);
  const [floatingDismissed, setFloatingDismissed] = useState(false);

  const [formData, setFormData] = useState({
    firmName: initialFirmName,
    attorneyName: "",
    email: "",
    phoneOrWebsite: "",
    practiceArea: "Real Estate & Estates",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFocus = () => {
    trackFormStart("law_firm_mockup_form", formData.practiceArea);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.firmName.trim()) {
      errs.firmName = "Firm name is required";
    }
    if (!formData.attorneyName.trim()) {
      errs.attorneyName = "Your name or role is required";
    }
    if (!formData.email.trim()) {
      errs.email = "Direct email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2394a933-0d56-4b63-8d32-2269f36e5679",
          subject: `New Law Firm Mockup Request: ${formData.firmName} (${formData.email})`,
          from_name: "Beeclue Legal Lead Gen",
          name: formData.attorneyName,
          email: formData.email,
          law_firm_name: formData.firmName,
          current_website_or_phone: formData.phoneOrWebsite || "Not provided",
          practice_area: formData.practiceArea,
          package_interest: "Core $19/month Legal Plan ($0 Down)",
          source: "Case Study / Law Firm Page Mockup Request",
        }),
      });

      if (response.status === 200) {
        setFormStatus("success");
        trackFormSubmit("law_firm_mockup_form", formData.practiceArea);

        // Background newsletter signup
        try {
          await fetch("/api/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: formData.email }),
          });
        } catch {
          // Non-critical background sync
        }
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      <section id="free-mockup" className={`${styles.auditSection} ${className || ""}`}>
        <div className={styles.auditFormContainer}>
          <div className={styles.header}>
            <div className={styles.badge}>
              <Sparkles size={16} /> 48-Hour Legal Mockup Offer
            </div>
            <h2>
              Want to See a Modernized Website for <span className={styles.highlight}>Your Law Practice</span>?
            </h2>
            <p>
              Tell us your firm name and practice areas. We will design a custom 5-page mobile-ready website mockup and email you a private preview link in 48 hours. Zero build fee, no commitment — just $19/month if you love it.
            </p>
          </div>

          <div className={styles.guaranteeGrid}>
            <div className={styles.guaranteeItem}>
              <Scale size={20} className={styles.guaranteeIcon} />
              <span>Custom 5-Page Interactive Preview</span>
            </div>
            <div className={styles.guaranteeItem}>
              <ShieldCheck size={20} className={styles.guaranteeIcon} />
              <span>$0 Upfront Build Fee ($0 Down)</span>
            </div>
            <div className={styles.guaranteeItem}>
              <CheckCircle2 size={20} className={styles.guaranteeIcon} />
              <span>Secure Client Consultation Intake</span>
            </div>
            <div className={styles.guaranteeItem}>
              <Sparkles size={20} className={styles.guaranteeIcon} />
              <span>Delivered to Your Inbox in 48 Hours</span>
            </div>
          </div>

          {formStatus === "success" ? (
            <div className={styles.successCard}>
              <div className={styles.successIconWrapper}>
                <CheckCircle2 size={40} />
              </div>
              <h3 className={styles.successTitle}>Mockup Request Received!</h3>
              <p className={styles.successMessage}>
                Thank you, <strong>{formData.attorneyName}</strong>! Kay at Beeclue Tech is reviewing your practice details for <strong>{formData.firmName}</strong>. We will prepare your interactive 5-page website preview and email it to <strong>{formData.email}</strong> within 48 hours.
              </p>
              <div className={styles.successReassurance}>
                <p>
                  Questions in the meantime? Feel free to reach out directly to <strong>hello@beeclue.com</strong> or call/text <strong>647-947-6253</strong>.
                </p>
              </div>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="firmName">
                    Law Firm / Practice Name *
                  </label>
                  <input
                    id="firmName"
                    name="firmName"
                    type="text"
                    required
                    placeholder="e.g. Ahuja Professional Corporation"
                    value={formData.firmName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={styles.input}
                  />
                  {errors.firmName && <span className={styles.errorText}>{errors.firmName}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="attorneyName">
                    Your Name &amp; Title *
                  </label>
                  <input
                    id="attorneyName"
                    name="attorneyName"
                    type="text"
                    required
                    placeholder="e.g. Suman Ahuja, Principal Counsel"
                    value={formData.attorneyName}
                    onChange={handleChange}
                    className={styles.input}
                  />
                  {errors.attorneyName && <span className={styles.errorText}>{errors.attorneyName}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">
                    Direct Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. sahuja@rogers.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="phoneOrWebsite">
                    Current Website or City / Phone <span className={styles.optional}>(Optional)</span>
                  </label>
                  <input
                    id="phoneOrWebsite"
                    name="phoneOrWebsite"
                    type="text"
                    placeholder="e.g. No website yet / Mississauga, ON"
                    value={formData.phoneOrWebsite}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                  <label className={styles.label} htmlFor="practiceArea">
                    Primary Practice Focus
                  </label>
                  <select
                    id="practiceArea"
                    name="practiceArea"
                    value={formData.practiceArea}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="Real Estate & Estates">Real Estate &amp; Wills / Estates</option>
                    <option value="Family Law & Divorce">Family Law &amp; Divorce / Custody</option>
                    <option value="Criminal Defence & Bail">Criminal Defence &amp; Bail Hearings</option>
                    <option value="Corporate & Commercial Law">Corporate &amp; Commercial Law</option>
                    <option value="Civil Litigation">Civil Litigation &amp; Dispute Resolution</option>
                    <option value="Immigration Law">Immigration &amp; Refugee Law</option>
                    <option value="General Practice">General Legal Practice</option>
                  </select>
                </div>
              </div>

              {formStatus === "error" && (
                <p className={styles.errorText} style={{ textAlign: "center", fontSize: "0.95rem" }}>
                  An error occurred while sending your request. Please email us directly at hello@beeclue.com or call 647-947-6253.
                </p>
              )}

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className={styles.submitButton}
              >
                {formStatus === "submitting" ? (
                  "Preparing Your Mockup Request..."
                ) : (
                  <>
                    Request Free 5-Page Website Mockup <ArrowRight size={20} />
                  </>
                )}
              </button>

              <p className={styles.privacyNotice}>
                100% Confidential. No credit card required. $19/month Core subscription only if you decide to publish.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Floating Sticky Conversion Bar on Scroll */}
      {showFloatingBar && formStatus !== "success" && (
        <div className={styles.floatingBar}>
          <div className={styles.floatingText}>
            <Sparkles size={18} color="var(--primary-light)" />
            <span>
              Get a <strong>free 5-page website mockup</strong> for your law firm
            </span>
          </div>
          <a
            href="#free-mockup"
            className={styles.floatingButton}
            onClick={() => {
              const el = document.getElementById("free-mockup");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Claim Mockup ($0 Down)
          </a>
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
      )}
    </>
  );
}

