'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import globalStyles from '@/app/page.module.css';
import styles from './grader.module.css';
import {
  ArrowRight,
  AlertCircle,
  ShieldCheck,
  Cpu,
  MapPin,
  FileText,
  Zap,
  Globe
} from 'lucide-react';

interface CategoryResult {
  category: string;
  label: string;
  question: string;
  description: string;
  score: number;
  checksTotal: number;
  checksPassed: number;
}

interface Finding {
  check: string;
  impact: 'high' | 'medium' | 'low';
  category: string;
  details: string;
  recommendation?: string;
}

interface AuditData {
  domain: string;
  overallScore: number;
  letterGrade: string;
  passedChecks: number;
  totalChecks: number;
  responseTimeMs: number;
  executiveSummary: {
    aiVerdict: string;
  };
  categories: CategoryResult[];
  recommendations: Finding[];
}

const LOADING_STEPS = [
  { pct: 10, label: 'Connecting to server & resolving DNS...' },
  { pct: 25, label: 'Scanning robots.txt & AI scraper permissions (GPTBot, ClaudeBot, Perplexity)...' },
  { pct: 45, label: 'Extracting Schema.org JSON-LD structured data...' },
  { pct: 60, label: 'Evaluating NAP consistency, contact signals & map verification...' },
  { pct: 75, label: 'Analyzing content depth, FAQ structure & semantic hierarchy...' },
  { pct: 88, label: 'Auditing SSL security, mobile viewport & edge response speed...' },
  { pct: 96, label: 'Calculating weighted category scores & generating AI verdict...' },
];

export default function AiReadinessGrader() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const [progressLabel, setProgressLabel] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AuditData | null>(null);

  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = url.trim();
    if (!cleanUrl) return;

    setError(null);
    setResult(null);
    setIsLoading(true);
    setProgressPct(5);
    setProgressLabel('Initiating AI crawl sequence...');

    let stepIdx = 0;
    const progressTimer = setInterval(() => {
      if (stepIdx < LOADING_STEPS.length) {
        setProgressPct(LOADING_STEPS[stepIdx].pct);
        setProgressLabel(LOADING_STEPS[stepIdx].label);
        stepIdx++;
      }
    }, 1200);

    try {
      const res = await fetch('/api/ai-readiness', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: cleanUrl }),
      });

      clearInterval(progressTimer);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to complete website audit. Please try again.');
        setIsLoading(false);
        return;
      }

      setProgressPct(100);
      setProgressLabel('Report complete!');

      setTimeout(() => {
        setResult(data);
        setIsLoading(false);
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }, 400);
    } catch {
      clearInterval(progressTimer);
      setError('Unable to reach the audit service. Please check your network connection and try again.');
      setIsLoading(false);
    }
  };

  const getGradeClass = (grade: string) => {
    if (grade.startsWith('A')) return styles.gradeA;
    if (grade.startsWith('B')) return styles.gradeB;
    if (grade.startsWith('C')) return styles.gradeC;
    return styles.gradeF;
  };

  const getBarColorClass = (score: number) => {
    if (score >= 80) return styles.barGreen;
    if (score >= 65) return styles.barBlue;
    if (score >= 50) return styles.barYellow;
    return styles.barRed;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'aiInfrastructure':
        return <Cpu size={20} />;
      case 'trust':
        return <ShieldCheck size={20} />;
      case 'services':
        return <Globe size={20} />;
      case 'localSeo':
        return <MapPin size={20} />;
      case 'content':
        return <FileText size={20} />;
      case 'technical':
        return <Zap size={20} />;
      default:
        return <Cpu size={20} />;
    }
  };

  return (
    <div className={styles.toolContainer}>
      {/* Hero Section matching site design */}
      <div className={styles.heroContent}>
        <h1 className={globalStyles.title}>
          <span className={globalStyles.titleLinePrimary}>Is Your Website</span>
          <span className={globalStyles.titleLine}>Visible to AI Search?</span>
        </h1>
        <p className={globalStyles.subtitle}>
          When clients ask ChatGPT, Google AI Overviews, or Perplexity to recommend a local business, does your company show up? Get your instant AI Readiness Score, category breakdown, and fix roadmap in 30 seconds.
        </p>

        {/* Input Form with Primary Button Style */}
        <div className={styles.formCard}>
          <form onSubmit={handleSubmit} className={styles.inputGroup}>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="e.g. yourbusiness.com or https://company.ca"
              className={styles.urlInput}
              required
              disabled={isLoading}
              aria-label="Website address to audit"
            />
            <button
              type="submit"
              disabled={isLoading || !url.trim()}
              className={globalStyles.ctaButton}
              style={{ cursor: isLoading || !url.trim() ? 'not-allowed' : 'pointer' }}
            >
              {isLoading ? 'Analyzing...' : 'Audit Website'}
              <ArrowRight className={globalStyles.arrow} />
            </button>
          </form>
          <p className={styles.formDisclaimer}>
            Free automated audit · Checks Schema JSON-LD, AI bot permissions & local signals
          </p>
        </div>
      </div>

      {/* Loading Sequence */}
      {isLoading && (
        <div className={styles.loadingContainer}>
          <div className={styles.spinner} />
          <h3 style={{ color: 'var(--foreground)', fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-outfit)' }}>
            Analyzing AI Search Readiness...
          </h3>
          <div className={styles.progressBarWrap}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className={styles.progressLabel}>{progressLabel}</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className={styles.errorCard}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <AlertCircle size={20} />
            <strong style={{ fontSize: '1rem', color: '#fff' }}>Scan Incomplete</strong>
          </div>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>{error}</p>
          <button
            onClick={() => setError(null)}
            className={globalStyles.ctaButton}
            style={{ marginTop: '1.25rem', padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
          >
            Try Again
          </button>
        </div>
      )}

      {/* Results Section */}
      {result && (
        <div ref={resultsRef} className={styles.resultsContainer}>
          {/* Score Hero */}
          <div className={styles.scoreHeroCard}>
            <span className={styles.domainTag}>AI Readiness Audit Report</span>
            <h2 className={styles.scoreHeadline}>
              Would AI Confidently Recommend <span className={styles.highlightDomain}>{result.domain}</span>?
            </h2>

            <div className={`${styles.gradeCircle} ${getGradeClass(result.letterGrade)}`}>
              {result.letterGrade}
            </div>

            <div className={styles.overallScoreNumber}>{result.overallScore} / 100</div>
            <p className={styles.checksSummary}>
              {result.passedChecks} of {result.totalChecks} automated tests passed · Server response: {result.responseTimeMs}ms
            </p>

            <div className={styles.verdictBox}>
              <strong style={{ display: 'block', color: 'var(--foreground)', marginBottom: '0.5rem', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                Executive AI Search Verdict:
              </strong>
              {result.executiveSummary.aiVerdict}
            </div>
          </div>

          {/* Category Breakdown */}
          <div>
            <div className={globalStyles.servicesHeader} style={{ marginBottom: '1.5rem' }}>
              <h2>Category Score Breakdown</h2>
              <p>The six critical evaluation layers large language models and search engines assess before citing a business.</p>
            </div>

            <div className={styles.categoriesGrid}>
              {result.categories.map((cat) => (
                <div key={cat.category} className={styles.categoryCard}>
                  <div className={styles.categoryHeader}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{ color: 'var(--primary-light)' }}>
                        {getCategoryIcon(cat.category)}
                      </span>
                      <span className={styles.categoryLabel}>{cat.label}</span>
                    </div>
                    <span className={styles.categoryScore} style={{ color: cat.score >= 70 ? '#10b981' : cat.score >= 50 ? '#f59e0b' : '#ef4444' }}>
                      {cat.score}%
                    </span>
                  </div>

                  <h3 className={styles.categoryQuestion}>{cat.question}</h3>
                  <p className={styles.categoryDesc}>{cat.description}</p>

                  <div className={styles.barTrack}>
                    <div
                      className={`${styles.barFill} ${getBarColorClass(cat.score)}`}
                      style={{ width: `${cat.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Findings */}
          {result.recommendations.length > 0 && (
            <div>
              <div className={globalStyles.servicesHeader} style={{ marginBottom: '1.5rem' }}>
                <h2>High-Priority Visibility Fixes</h2>
                <p>Actionable gaps preventing ChatGPT, Perplexity, and Google AI Overviews from citing your services.</p>
              </div>

              <div className={styles.findingsList}>
                {result.recommendations.map((rec, i) => (
                  <div key={i} className={styles.findingCard}>
                    <div className={styles.findingIconWrap}>
                      <AlertCircle
                        size={22}
                        color={rec.impact === 'high' ? '#ef4444' : '#f59e0b'}
                      />
                    </div>
                    <div className={styles.findingContent}>
                      <div className={styles.findingHeader}>
                        <h4 className={styles.findingTitle}>{rec.check}</h4>
                        <span className={styles.impactBadge}>
                          [{rec.impact.toUpperCase()} IMPACT · {rec.category.toUpperCase()}]
                        </span>
                      </div>
                      <p className={styles.findingDetails}>{rec.details}</p>
                      {rec.recommendation && (
                        <div className={styles.findingAction}>
                          <strong>Recommended Fix:</strong> {rec.recommendation}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pitch & CTA Card */}
          <div className={styles.pitchCard}>
            <h2 className={styles.pitchHeading}>Want Beeclue Tech to Build Your AI-Ready Website?</h2>
            <p className={styles.pitchText}>
              We develop lightning-fast websites engineered specifically for Generative Engine Optimization (GEO), Schema JSON-LD entity validation, and conversational search citations. Explore our transparent plans or reach out directly to discuss your project.
            </p>
            <div className={styles.pitchCtas}>
              <Link href="/pricing" className={globalStyles.ctaButton}>
                View Our Pricing <ArrowRight className={globalStyles.arrow} />
              </Link>
              <Link href="/contact" className={globalStyles.ctaButton}>
                Contact Us <ArrowRight className={globalStyles.arrow} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
