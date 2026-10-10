'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './grader.module.css';
import {
  Sparkles,
  ArrowRight,
  Search,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Cpu,
  MapPin,
  FileText,
  Zap,
  Globe,
  Share2
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

    // Progress bar animation simulation
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
        return <Cpu size={18} />;
      case 'trust':
        return <ShieldCheck size={18} />;
      case 'services':
        return <Globe size={18} />;
      case 'localSeo':
        return <MapPin size={18} />;
      case 'content':
        return <FileText size={18} />;
      case 'technical':
        return <Zap size={18} />;
      default:
        return <Sparkles size={18} />;
    }
  };

  return (
    <div className={styles.toolContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.badge}>
          <Sparkles size={14} />
          <span>Generative Engine Optimization (GEO) & AI Audit</span>
        </div>
        <h1 className={styles.pageTitle}>
          Is Your Business Visible to <span className={styles.gradientText}>AI Search</span>?
        </h1>
        <p className={styles.pageSubtitle}>
          When clients ask ChatGPT, Google AI Overviews, or Perplexity to recommend a local business, does your company show up? Get your instant AI Readiness Score, category breakdown, and fix roadmap in 30 seconds.
        </p>

        {/* Input Form */}
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
              className={styles.submitBtn}
            >
              {isLoading ? (
                <>Analyzing...</>
              ) : (
                <>
                  <Search size={18} />
                  <span>Audit My Website</span>
                </>
              )}
            </button>
          </form>
          <p className={styles.formDisclaimer}>
            100% Free · Instant automated crawler · Tests Schema JSON-LD, bot permissions & local AI signals
          </p>
        </div>
      </div>

      {/* Loading Sequence */}
      {isLoading && (
        <div className={styles.loadingContainer}>
          <div className={styles.spinner} />
          <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <AlertCircle size={20} />
            <strong style={{ fontSize: '1rem' }}>Scan Incomplete</strong>
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{error}</p>
          <button
            onClick={() => setError(null)}
            style={{
              marginTop: '1rem',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              padding: '0.4rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
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
              <strong style={{ display: 'block', color: '#fff', marginBottom: '0.4rem' }}>
                Executive AI Search Verdict:
              </strong>
              {result.executiveSummary.aiVerdict}
            </div>
          </div>

          {/* Category Breakdown */}
          <div>
            <h3 className={styles.sectionTitle}>Category Score Breakdown</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              The six critical evaluation layers large language models and search engines assess before citing a business.
            </p>

            <div className={styles.categoriesGrid}>
              {result.categories.map((cat) => (
                <div key={cat.category} className={styles.categoryCard}>
                  <div className={styles.categoryHeader}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--primary-light)' }}>
                        {getCategoryIcon(cat.category)}
                      </span>
                      <span className={styles.categoryLabel}>{cat.label}</span>
                    </div>
                    <span className={styles.categoryScore} style={{ color: cat.score >= 70 ? '#10b981' : cat.score >= 50 ? '#f59e0b' : '#ef4444' }}>
                      {cat.score}%
                    </span>
                  </div>

                  <h4 className={styles.categoryQuestion}>{cat.question}</h4>
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

          {/* Key Findings / High Impact Gaps */}
          {result.recommendations.length > 0 && (
            <div>
              <h3 className={styles.sectionTitle}>
                High-Priority Visibility Fixes ({result.recommendations.length})
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                Actionable gaps preventing ChatGPT, Perplexity, and Google AI Overviews from citing your services.
              </p>

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
                        <span
                          className={`${styles.impactBadge} ${
                            rec.impact === 'high' ? styles.impactHigh : styles.impactMedium
                          }`}
                        >
                          {rec.impact} impact
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                          · {rec.category}
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
            <h3 className={styles.pitchHeading}>Want Beeclue Tech to Build Your AI-Ready Website?</h3>
            <p className={styles.pitchText}>
              We develop lightning-fast websites engineered specifically for Generative Engine Optimization (GEO), Schema JSON-LD entity validation, and conversational search citations. All managed plans start from just <strong>$19/mo</strong> with zero upfront build fees.
            </p>
            <div className={styles.pitchCtas}>
              <Link href="/pricing" className={styles.ctaPrimary}>
                <span>View Managed Plans ($19–$29/mo)</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/case-studies" className={styles.ctaSecondary}>
                <span>Explore Live Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
