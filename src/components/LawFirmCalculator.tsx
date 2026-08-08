"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, TrendingUp } from "lucide-react";
import styles from "./LawFirmCalculator.module.css";

interface PracticeAreaOption {
  id: string;
  name: string;
  avgRetainer: number; // in USD
}

const practiceAreas: PracticeAreaOption[] = [
  { id: "personal-injury", name: "Personal Injury", avgRetainer: 15000 },
  { id: "family-law", name: "Family Law", avgRetainer: 7500 },
  { id: "criminal-defense", name: "Criminal Defense", avgRetainer: 8000 },
  { id: "corporate-law", name: "Corporate / Business", avgRetainer: 12000 },
  { id: "real-estate", name: "Real Estate Law", avgRetainer: 4500 },
];

const firmSizes = [
  { id: "solo", name: "Solo Practitioner", multiplier: 1.0 },
  { id: "small", name: "2–5 Attorneys", multiplier: 1.35 },
  { id: "medium", name: "6–20 Attorneys", multiplier: 1.8 },
  { id: "large", name: "20+ Partners", multiplier: 2.5 },
];

const primaryGoals = [
  { id: "leads", name: "Max Case Leads", baseCost: 4500, estMonthlyLeads: 8 },
  { id: "authority", name: "Top Brand Authority", baseCost: 6500, estMonthlyLeads: 12 },
  { id: "rebuild", name: "Complete Site Rebuild", baseCost: 3800, estMonthlyLeads: 6 },
];

export default function LawFirmCalculator() {
  const [selectedPractice, setSelectedPractice] = useState<string>("personal-injury");
  const [selectedSize, setSelectedSize] = useState<string>("small");
  const [selectedGoal, setSelectedGoal] = useState<string>("leads");

  const practice = practiceAreas.find((p) => p.id === selectedPractice) || practiceAreas[0];
  const size = firmSizes.find((s) => s.id === selectedSize) || firmSizes[1];
  const goal = primaryGoals.find((g) => g.id === selectedGoal) || primaryGoals[0];

  const estimatedCost = Math.round(goal.baseCost * size.multiplier);
  const estimatedMonthlyLeads = Math.round(goal.estMonthlyLeads * (size.multiplier * 0.8));
  // Assume a conservative 15% lead-to-retained-client conversion rate
  const annualProjectedRevenue = Math.round(estimatedMonthlyLeads * 12 * 0.15 * practice.avgRetainer);

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.header}>
        <h2>
          <Calculator style={{ verticalAlign: "middle", marginRight: "8px", color: "var(--primary)" }} /> Law Firm Website Cost &amp; ROI Calculator
        </h2>
        <p>Calculate your estimated website investment and projected annual case retainer revenue.</p>
      </div>

      <div className={styles.grid}>
        <div>
          {/* Practice Area Selector */}
          <div className={styles.inputGroup}>
            <label>1. Select Primary Practice Area</label>
            <div className={styles.optionsGrid}>
              {practiceAreas.map((pa) => (
                <button
                  key={pa.id}
                  type="button"
                  className={`${styles.optionButton} ${selectedPractice === pa.id ? styles.activeOption : ""}`}
                  onClick={() => setSelectedPractice(pa.id)}
                >
                  {pa.name}
                </button>
              ))}
            </div>
          </div>

          {/* Firm Size Selector */}
          <div className={styles.inputGroup}>
            <label>2. Firm Size</label>
            <div className={styles.optionsGrid}>
              {firmSizes.map((fs) => (
                <button
                  key={fs.id}
                  type="button"
                  className={`${styles.optionButton} ${selectedSize === fs.id ? styles.activeOption : ""}`}
                  onClick={() => setSelectedSize(fs.id)}
                >
                  {fs.name}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Goal Selector */}
          <div className={styles.inputGroup}>
            <label>3. Primary Objective</label>
            <div className={styles.optionsGrid}>
              {primaryGoals.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  className={`${styles.optionButton} ${selectedGoal === g.id ? styles.activeOption : ""}`}
                  onClick={() => setSelectedGoal(g.id)}
                >
                  {g.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className={styles.resultCard}>
          <div>
            <div className={styles.resultTitle}>Estimated Project Summary</div>

            <div className={styles.metricBlock}>
              <div className={styles.metricLabel}>Estimated Website Investment</div>
              <div className={styles.metricValue}>
                ${estimatedCost.toLocaleString()}
                <span style={{ fontSize: "1rem", color: "var(--muted)", fontWeight: "normal" }}> (one-time)</span>
              </div>
            </div>

            <div className={styles.metricBlock}>
              <div className={styles.metricLabel}>Est. Qualified Case Leads / Year</div>
              <div className={styles.metricValue} style={{ color: "var(--primary)" }}>
                ~{(estimatedMonthlyLeads * 12).toLocaleString()} Leads
              </div>
            </div>

            <div className={styles.metricBlock}>
              <div className={styles.metricLabel}>Projected Annual Retainer Value ROI</div>
              <div className={`${styles.metricValue} ${styles.roiValue}`}>
                ${annualProjectedRevenue.toLocaleString()}
                <TrendingUp size={24} style={{ inlineSize: "24px", marginLeft: "8px", verticalAlign: "middle", color: "var(--primary)" }} />
              </div>
            </div>
          </div>

          <Link href="/contact" className={styles.ctaButton}>
            Get Detailed Proposal <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
