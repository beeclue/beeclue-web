'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './HeroLeadForm.module.css';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { trackFormSubmit } from '@/lib/analytics';

export default function HeroLeadForm() {
  const router = useRouter();
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please provide your work email address.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '2394a933-0d56-4b63-8d32-2269f36e5679',
          name: 'Homepage Hero Lead',
          email: email.trim(),
          website: website.trim() || 'Not specified',
          service: 'Free Website Teardown / Audit',
          message: `Hero fast-submit lead. Website: ${website || 'None provided'}`,
          from_url: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });

      if (response.ok) {
        trackFormSubmit('hero_lead_form', 'Free Website Audit');

        // Newsletter subscription in background
        try {
          await fetch('/api/newsletter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.trim() }),
          });
        } catch {
          // Non-blocking
        }

        router.push('/thank-you?service=Website+Audit');
      } else {
        setError('Submission failed. Please try again or reach out to hello@beeclue.com.');
        setIsSubmitting(false);
      }
    } catch {
      setError('Connection error. Please try again or contact us directly.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.leadCard}>
      <div className={styles.leadHeader}>
        <div className={styles.badgeWrap}>
          <span className={styles.liveDot} />
          <span className={styles.badgeText}>Instant 48-Hour Website Teardown</span>
        </div>
        <h3 className={styles.leadTitle}>Get Your Free Website Video &amp; Speed Audit</h3>
        <p className={styles.leadSubtitle}>
          Enter your website and email. We&apos;ll record a bespoke 3-minute video showing conversion leaks, mobile speed issues, and where you&apos;re losing leads.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.formStack}>
        <div className={styles.fieldGroup}>
          <label htmlFor="hero-website" className={styles.label}>
            Your Current Website <span className={styles.optional}>(Optional if new site)</span>
          </label>
          <input
            id="hero-website"
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="e.g. yourbusiness.ca"
            className={styles.input}
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="hero-email" className={styles.label}>
            Work Email Address <span className={styles.required}>*</span>
          </label>
          <input
            id="hero-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            className={styles.input}
            disabled={isSubmitting}
          />
        </div>

        {error && <p className={styles.errorText}>{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitBtn}
        >
          {isSubmitting ? (
            'Preparing Your Audit...'
          ) : (
            <>
              <span>Send My Free Video Teardown</span>
              <ArrowRight size={18} className={styles.arrow} />
            </>
          )}
        </button>
      </form>

      <div className={styles.trustFooter}>
        <div className={styles.trustPill}>
          <ShieldCheck size={14} className={styles.trustIcon} />
          <span>100% Free &bull; No Sales Pressure</span>
        </div>
        <div className={styles.trustPill}>
          <Zap size={14} className={styles.trustIcon} />
          <span>Delivered within 48 Hours</span>
        </div>
      </div>
    </div>
  );
}
