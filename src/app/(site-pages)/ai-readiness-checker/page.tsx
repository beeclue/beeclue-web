import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/app/page.module.css";
import graderStyles from "./grader.module.css";
import FadeIn from "@/components/FadeIn";
import FaqAccordion from "@/components/FaqAccordion";
import AiReadinessGrader from "./AiReadinessGrader";
import { Sparkles, Bot, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Free AI Readiness Checker & Website Grader | Beeclue Tech",
  description: "Test if your website is visible to ChatGPT, Perplexity, and Google AI Overviews. Free automated audit checking Schema.org JSON-LD, AI bot permissions, and GEO signals.",
  alternates: {
    canonical: "https://beeclue.com/ai-readiness-checker",
  },
  keywords: [
    "ai readiness checker",
    "website ai grader",
    "generative engine optimization audit",
    "geo website test",
    "chatgpt seo checker",
    "law firm ai readiness check",
    "contractor ai website audit",
    "schema markup tester",
    "beeclue tech ai audit"
  ],
  openGraph: {
    title: "Free AI Readiness Checker & Website Grader | Beeclue Tech",
    description: "Find out if ChatGPT, Google AI, and Perplexity can recommend your business. Free automated scan with instant score and fix recommendations.",
    url: "https://beeclue.com/ai-readiness-checker",
  },
};

const faqs = [
  {
    q: "What is an AI Readiness Check?",
    a: "An AI Readiness Check audits your website to determine whether artificial intelligence engines (like ChatGPT, Google AI Overviews, Perplexity, and Claude) can discover, comprehend, and confidently recommend your business when prospective clients ask conversational questions."
  },
  {
    q: "How does AI search differ from traditional Google SEO?",
    a: "Traditional SEO focuses on matching search keywords and backlinks. In contrast, Generative Engine Optimization (GEO) focuses on structured data (Schema.org JSON-LD), clear entity identification, direct Q&A formats, and bot access permissions so large language models can extract verifiable facts without scraping errors."
  },
  {
    q: "Why do AI bots get blocked from websites?",
    a: "Many hosting providers, security firewalls (like Cloudflare bot fight mode), or outdated robots.txt files unintentionally block AI user agents like GPTBot, ClaudeBot, or PerplexityBot. If an AI engine cannot crawl your site, it will simply recommend a competitor whose site is accessible."
  },
  {
    q: "How can I fix the issues found in this audit?",
    a: "Most issues can be solved by adding clean Schema.org structured data (Organization, LocalBusiness, FAQPage), updating your robots.txt file, organizing service pages with clear H1/H2 hierarchies, and hosting an /llms.txt file. Beeclue Tech builds and manages AI-ready websites tailored for your business."
  }
];

export default function AiReadinessCheckerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://beeclue.com/ai-readiness-checker#app",
        "name": "Beeclue AI Readiness Checker",
        "url": "https://beeclue.com/ai-readiness-checker",
        "description": "Free instant automated AI readiness audit evaluating Schema JSON-LD, AI crawler access, and Generative Engine Optimization.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "provider": {
          "@type": "Organization",
          "name": "Beeclue Tech",
          "url": "https://beeclue.com"
        }
      }
    ]
  };

  return (
    <div className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Grader Tool Section */}
      <section className={styles.baseSection} style={{ paddingTop: "12vh", paddingBottom: "6vh" }}>
        <FadeIn>
          <AiReadinessGrader />
        </FadeIn>
      </section>

      {/* Educational Guide Section */}
      <section className={styles.baseSection} style={{ paddingTop: "4vh", paddingBottom: "8vh" }}>
        <FadeIn>
          <div className={styles.servicesHeader}>
            <h2>Why AI Visibility Matters for Every Business</h2>
            <p>
              Over 40% of consumers now use conversational AI to find local professionals, service providers, contractors, and clinics. If your website is not engineered for machine comprehension, you lose leads before they ever hit traditional Google search results.
            </p>
          </div>

          <div className={graderStyles.eduGrid}>
            <div className={graderStyles.eduCard}>
              <div className={graderStyles.eduIconWrap}>
                <Cpu size={28} />
              </div>
              <h3>1. AI Infrastructure &amp; Schema</h3>
              <p>
                Large Language Models do not browse websites like humans. They rely on Schema.org JSON-LD tags, FAQPage markup, and machine directories to verify business identity, licensing, and service offerings.
              </p>
            </div>

            <div className={graderStyles.eduCard}>
              <div className={graderStyles.eduIconWrap}>
                <Bot size={28} />
              </div>
              <h3>2. Unrestricted AI Crawler Access</h3>
              <p>
                Many websites unknowingly block GPTBot, ClaudeBot, or Perplexity in their robots.txt file. Our tool checks your server permissions so conversational assistants can freely index your latest pricing and services.
              </p>
            </div>

            <div className={graderStyles.eduCard}>
              <div className={graderStyles.eduIconWrap}>
                <ShieldCheck size={28} />
              </div>
              <h3>3. Verifiable Trust &amp; Entity Authority</h3>
              <p>
                Before an AI assistant recommends a contractor, law firm, or clinic, it verifies credibility signals: registered address, phone numbers, client testimonials, and licenses to protect user trust.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FAQ Accordion Section */}
      <section className={styles.baseSection} style={{ paddingTop: "4vh", paddingBottom: "10vh" }}>
        <FadeIn>
          <div className={styles.servicesHeader}>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about AI search optimization and website grading.</p>
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
            <FaqAccordion faqs={faqs} />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
