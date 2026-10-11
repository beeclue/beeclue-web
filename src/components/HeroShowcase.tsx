'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroShowcase.module.css';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface CaseStudySlide {
  id: string;
  client: string;
  industry: string;
  domain: string;
  image: string;
  metricLabel: string;
  metricValue: string;
  summary: string;
  href: string;
}

const CASE_STUDIES: CaseStudySlide[] = [
  {
    id: 'tara-lattanzio',
    client: 'Tara Lattanzio Family Law',
    industry: 'Legal Practice · Waterloo & Toronto',
    domain: 'taralattanzio.ca',
    image: 'https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/tara-lattanzio.webp',
    metricValue: '+140%',
    metricLabel: 'Inbound Consultations',
    summary: 'Custom Next.js legal platform with empathetic consultation workflows and local SEO authority.',
    href: '/case-studies/tara-lattanzio',
  },
  {
    id: 'work-n-wear',
    client: 'Work N Wear',
    industry: 'Shopify E-Commerce & Retail',
    domain: 'worknwear.ca',
    image: 'https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/wnw-home.webp',
    metricValue: '3.2x',
    metricLabel: 'Online Revenue Growth',
    summary: 'High-converting Shopify platform with custom brand identity and AI shopping assistant.',
    href: '/case-studies/work-n-wear',
  },
  {
    id: 'tuxedo-frame-gallery',
    client: 'Tuxedo Frame Gallery',
    industry: 'Luxury Framing & Fine Art Atelier',
    domain: 'tuxedoframegallery.com',
    image: 'https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/tuxedoframegallery.webp',
    metricValue: '0.4s',
    metricLabel: 'Mobile Speed · #1 Local SEO',
    summary: 'Luxury digital showcase highlighting 35+ years of bespoke craftsmanship and local search dominance.',
    href: '/case-studies/tuxedo-frame-gallery',
  },
];

export default function HeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CASE_STUDIES.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeStudy = CASE_STUDIES[activeIndex];

  return (
    <div
      className={styles.showcaseWrapper}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Device Chrome / Browser Mockup Header */}
      <div className={styles.browserFrame}>
        <div className={styles.browserBar}>
          <div className={styles.windowControls}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
          </div>

          <div className={styles.addressBar}>
            <span className={styles.sslLock}>🔒</span>
            <span className={styles.addressText}>{activeStudy.domain}</span>
          </div>

          <div className={styles.browserActions}>
            <Link
              href={activeStudy.href}
              className={styles.caseStudyLink}
              title={`Read ${activeStudy.client} case study`}
            >
              <span>Case Study</span>
              <ExternalLink size={13} />
            </Link>
          </div>
        </div>

        {/* Viewport with client screenshot */}
        <Link href={activeStudy.href} className={styles.viewportLink}>
          <div className={styles.viewport}>
            <Image
              src={activeStudy.image}
              alt={`${activeStudy.client} web design case study`}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
              className={styles.projectImage}
            />
            <div className={styles.imageGlow} />
          </div>
        </Link>

        {/* Project Meta & Real Performance Outcome */}
        <div className={styles.metaRow}>
          <div className={styles.metaText}>
            <span className={styles.metaIndustry}>{activeStudy.industry}</span>
            <h4 className={styles.metaClient}>{activeStudy.client}</h4>
          </div>

          <div className={styles.metaStat}>
            <span className={styles.statVal}>{activeStudy.metricValue}</span>
            <span className={styles.statLabel}>{activeStudy.metricLabel}</span>
          </div>
        </div>

        {/* Tab Selector */}
        <div className={styles.tabsNav} role="tablist">
          {CASE_STUDIES.map((study, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={study.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(idx)}
                className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
              >
                <span className={styles.tabIndex}>0{idx + 1}</span>
                <span className={styles.tabName}>{study.client}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Direct Case Study Action */}
      <div className={styles.bottomBar}>
        <span className={styles.bottomHint}>Explore recent verified client launches:</span>
        <Link href={activeStudy.href} className={styles.readFullLink}>
          Read Full Breakdown <ArrowRight size={14} className={styles.arrow} />
        </Link>
      </div>
    </div>
  );
}
