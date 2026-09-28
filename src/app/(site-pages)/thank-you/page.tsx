import Link from "next/link";
import styles from "@/app/page.module.css";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

const BOOKING_URL = "https://calendar.app.google/jbSujvkqFgn4336Y6";
const BOOKING_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Gv1oV1cjIVTpCX0YSMdWzqZIC0Sp8iwy3w1dP9Spv1O_YksSzEI_ppsGuZtSVN5C1cd-l7Jql?gv=true";

export default function ThankYouPage() {
  return (
    <main className={styles.main}>
      <section className={styles.baseSection} style={{ paddingTop: "18vh", minHeight: "60vh" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
            <span className={styles.titleLine}>Thanks — we got it.</span>
            <span className={styles.titleLinePrimary}>Want it faster? Pick a time.</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.15rem", maxWidth: "720px" }}>
            We reply by email within one business day. Skip the back-and-forth and lock in a call right now — no obligation, no sales pressure.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Book Your Call <ArrowRight className={styles.arrow} size={20} />
            </a>
            <Link href="/case-studies" className={styles.ctaButtonLight}>
              See Our Work While You Wait
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.baseSection} style={{ paddingTop: "2rem" }}>
        <div className={styles.heroContent}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Book directly below</h2>
        </div>
        <div style={{ width: "100%", border: "1px solid var(--border)", borderRadius: "16px", overflow: "hidden", background: "#fff" }}>
          {/* Google Calendar Appointment Scheduling begin */}
          <iframe
            src={BOOKING_EMBED_URL}
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            title="Book a call with Beeclue Tech"
            loading="lazy"
          />
          {/* end Google Calendar Appointment Scheduling */}
        </div>
        <div className={styles.heroContent}>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginTop: "0.75rem" }}>
            Calendar not loading? <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Open it in a new tab</a>.
          </p>
        </div>
      </section>

      <section className={styles.baseSection} style={{ paddingTop: "2rem" }}>
        <div className={styles.heroContent}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>What happens next</h2>
          <ol style={{ lineHeight: 2, color: "var(--muted)", paddingLeft: "1.25rem" }}>
            <li><strong style={{ color: "var(--foreground)" }}>Today:</strong> we review your site and goals.</li>
            <li><strong style={{ color: "var(--foreground)" }}>Within one business day:</strong> you get a plain-language teardown + fixed quote by email.</li>
            <li><strong style={{ color: "var(--foreground)" }}>On your call (if you book):</strong> we walk through options and timeline. Have your website URL, two examples you like, and your timeline handy.</li>
          </ol>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "1.5rem", fontSize: "0.95rem" }}>
            <a href="mailto:hello@beeclue.com" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <Mail size={18} /> hello@beeclue.com
            </a>
            <a href="https://api.whatsapp.com/send/?phone=16479476253&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <MessageCircle size={18} /> WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
