# Beeclue SEO Ranking Improvement Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all technical SEO issues, optimize existing content, create 13 new pages, and add 8 blog posts to improve beeclue.com rankings from page 4-5 to page 1-2 for target keywords.

**Architecture:** Hybrid approach — technical fixes first (weeks 1-2), new content creation (weeks 3-4), internal linking and blog content (weeks 5-8). All changes are to a Next.js site deployed on Cloudflare Pages.

**Tech Stack:** Next.js, React, TypeScript, CSS Modules, Lucide icons, Cloudflare Pages

## Global Constraints

- Site deployed on Cloudflare Pages (no Node.js server)
- All images use Next.js `<Image>` component with `sizes` prop
- All pages use CSS Modules (not Tailwind)
- JSON-LD schemas use `@graph` pattern with `Service` and `FAQPage` types
- Meta titles: 55-60 chars, meta descriptions: 150-160 chars
- Blog posts: 2000-3000 words, Unsplash images, BlogPosting + BreadcrumbList schemas
- External links opening in new tab must have UTM tags: `?utm_source=beeclue&utm_medium=blog&utm_campaign=<name>`
- `llms.txt` and `llms-full.txt` must be updated for any new page or content

---

## Phase 1: Technical SEO Fixes (Week 1-2)

### Task 1: Add Metadata to 7 Niche Service Pages

**Files:**
- Modify: `src/app/(site-pages)/web-design-for-salons/page.tsx`
- Modify: `src/app/(site-pages)/web-design-for-dental-clinics/page.tsx`
- Modify: `src/app/(site-pages)/web-design-for-construction-companies/page.tsx`
- Modify: `src/app/(site-pages)/web-design-for-restaurants/page.tsx`
- Modify: `src/app/(site-pages)/web-design-for-real-estate/page.tsx`
- Modify: `src/app/(site-pages)/web-design-for-healthcare/page.tsx`
- Modify: `src/app/(site-pages)/web-design-for-law-firms/page.tsx`

**Interfaces:**
- Produces: `metadata` export for each page with title, description, openGraph, twitter

- [ ] **Step 1: Add metadata to web-design-for-salons**

```typescript
// At top of src/app/(site-pages)/web-design-for-salons/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salon Website Design Toronto | Book More Clients Online | Beeclue",
  description: "Professional salon and barbershop website design in Toronto. Online booking, portfolio galleries, and SEO that brings local clients to your chair.",
  openGraph: {
    title: "Salon Website Design Toronto | Book More Clients Online | Beeclue",
    description: "Professional salon and barbershop website design in Toronto. Online booking, portfolio galleries, and SEO that brings local clients to your chair.",
    url: "https://beeclue.com/web-design-for-salons",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 2: Add metadata to web-design-for-dental-clinics**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Clinic Website Design Toronto | Patient-Focused Sites | Beeclue",
  description: "Custom dental clinic websites in Toronto with online booking, patient portals, and HIPAA-compliant forms. Convert more visitors into appointments.",
  openGraph: {
    title: "Dental Clinic Website Design Toronto | Patient-Focused Sites | Beeclue",
    description: "Custom dental clinic websites in Toronto with online booking, patient portals, and HIPAA-compliant forms. Convert more visitors into appointments.",
    url: "https://beeclue.com/web-design-for-dental-clinics",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 3: Add metadata to web-design-for-construction-companies**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Company Website Design Toronto | Showcase Your Projects | Beeclue",
  description: "Professional construction company websites in Toronto. Project portfolios, quote request forms, and SEO to dominate local search.",
  openGraph: {
    title: "Construction Company Website Design Toronto | Showcase Your Projects | Beeclue",
    description: "Professional construction company websites in Toronto. Project portfolios, quote request forms, and SEO to dominate local search.",
    url: "https://beeclue.com/web-design-for-construction-companies",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 4: Add metadata to web-design-for-restaurants**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Website Design Toronto | Online Ordering & Reservations | Beeclue",
  description: "Restaurant websites in Toronto with online ordering, reservation systems, and menu management. Increase direct orders and bookings.",
  openGraph: {
    title: "Restaurant Website Design Toronto | Online Ordering & Reservations | Beeclue",
    description: "Restaurant websites in Toronto with online ordering, reservation systems, and menu management. Increase direct orders and bookings.",
    url: "https://beeclue.com/web-design-for-restaurants",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 5: Add metadata to web-design-for-real-estate**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Website Design Toronto | IDX Integration & Lead Capture | Beeclue",
  description: "Real estate websites in Toronto with MLS/IDX integration, virtual tours, and lead capture. Stand out in the competitive Toronto market.",
  openGraph: {
    title: "Real Estate Website Design Toronto | IDX Integration & Lead Capture | Beeclue",
    description: "Real estate websites in Toronto with MLS/IDX integration, virtual tours, and lead capture. Stand out in the competitive Toronto market.",
    url: "https://beeclue.com/web-design-for-real-estate",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 6: Add metadata to web-design-for-healthcare**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Website Design Toronto | Patient-Centered Medical Sites | Beeclue",
  description: "Healthcare and medical practice websites in Toronto. Appointment booking, patient portals, and HIPAA-compliant solutions.",
  openGraph: {
    title: "Healthcare Website Design Toronto | Patient-Centered Medical Sites | Beeclue",
    description: "Healthcare and medical practice websites in Toronto. Appointment booking, patient portals, and HIPAA-compliant solutions.",
    url: "https://beeclue.com/web-design-for-healthcare",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 7: Add metadata to web-design-for-law-firms**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Law Firm Website Design Toronto | Professional Legal Websites | Beeclue",
  description: "Law firm websites in Toronto with case evaluation forms, attorney profiles, and SEO to attract high-value clients.",
  openGraph: {
    title: "Law Firm Website Design Toronto | Professional Legal Websites | Beeclue",
    description: "Law firm websites in Toronto with case evaluation forms, attorney profiles, and SEO to attract high-value clients.",
    url: "https://beeclue.com/web-design-for-law-firms",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 8: Build and verify no errors**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 9: Commit**

```bash
git add src/app/\(site-pages\)/web-design-for-salons/page.tsx src/app/\(site-pages\)/web-design-for-dental-clinics/page.tsx src/app/\(site-pages\)/web-design-for-construction-companies/page.tsx src/app/\(site-pages\)/web-design-for-restaurants/page.tsx src/app/\(site-pages\)/web-design-for-real-estate/page.tsx src/app/\(site-pages\)/web-design-for-healthcare/page.tsx src/app/\(site-pages\)/web-design-for-law-firms/page.tsx
git commit -m "feat(seo): add metadata to 7 niche service pages"
```

---

### Task 2: Add Metadata to /custom-website-vs-wix

**Files:**
- Modify: `src/app/(site-pages)/custom-website-vs-wix/page.tsx`

**Interfaces:**
- Produces: `metadata` export with title, description, openGraph

- [ ] **Step 1: Add metadata**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Website vs Wix: Why Custom Development Wins for Canadian Businesses | Beeclue",
  description: "Compare custom website development vs Wix. Learn why Canadian businesses choose custom solutions for scalability, SEO, and brand control.",
  openGraph: {
    title: "Custom Website vs Wix: Why Custom Development Wins for Canadian Businesses | Beeclue",
    description: "Compare custom website development vs Wix. Learn why Canadian businesses choose custom solutions for scalability, SEO, and brand control.",
    url: "https://beeclue.com/custom-website-vs-wix",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/app/\(site-pages\)/custom-website-vs-wix/page.tsx
git commit -m "feat(seo): add metadata to custom-website-vs-wix page"
```

---

### Task 3: Add Canonical Tags and Hreflang to Root Layout

**Files:**
- Modify: `src/app/layout.tsx` (metadata export, lines 25-59)

**Interfaces:**
- Produces: `alternates` property in metadata with canonical and languages

- [ ] **Step 1: Add alternates to metadata**

Find the `metadata` export in `src/app/layout.tsx` and add `alternates`:

```typescript
export const metadata: Metadata = {
  // ... existing title, description, icons, openGraph, twitter
  alternates: {
    canonical: 'https://beeclue.com',
    languages: {
      'en-CA': 'https://beeclue.com',
    },
  },
};
```

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(seo): add canonical and hreflang tags to root layout"
```

---

### Task 4: Fix Sitemap lastModified

**Files:**
- Modify: `src/app/sitemap.ts` (line 72)

**Interfaces:**
- Produces: dynamic `lastModified` date for all sitemap entries

- [ ] **Step 1: Replace hardcoded date**

Find line 72 in `src/app/sitemap.ts`:

```typescript
// Before:
lastModified: new Date("2026-06-27"),

// After:
lastModified: new Date(),
```

- [ ] **Step 2: Build and verify**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "fix(seo): make sitemap lastModified dynamic"
```

---

### Task 5: Update robots.txt with AI Crawler Rules

**Files:**
- Modify: `public/robots.txt`

**Interfaces:**
- Produces: updated robots.txt allowing AI crawlers

- [ ] **Step 1: Update robots.txt**

```txt
User-agent: *
Allow: /
Sitemap: https://beeclue.com/sitemap.xml

User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

- [ ] **Step 2: Commit**

```bash
git add public/robots.txt
git commit -m "feat(seo): add AI crawler rules to robots.txt"
```

---

### Task 6: Fix Raw <img> Tags on Homepage

**Files:**
- Modify: `src/app/page.tsx` (lines 34, 40)

**Interfaces:**
- Produces: Next.js `<Image>` components with proper sizes and priority

- [ ] **Step 1: Replace Google logo img with Image**

```tsx
// Before (line 34):
<img src="/google-logo.svg" alt="Google" width="20" height="20" />

// After:
<Image src="/google-logo.svg" alt="Google" width="20" height="20" priority />
```

- [ ] **Step 2: Replace Trustpilot stars img with Image**

```tsx
// Before (line 40):
<img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" alt="Trustpilot 5 Stars" width="80" height="16" />

// After:
<Image src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" alt="Trustpilot 5 Stars" width="80" height="16" priority />
```

- [ ] **Step 3: Build and verify**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "fix(seo): replace raw img tags with Next.js Image on homepage"
```

---

## Phase 2: On-Page Optimization (Week 1-2)

### Task 7: Optimize Service Page Meta Descriptions

**Files:**
- Modify: `src/app/(site-pages)/web-design-toronto/page.tsx`
- Modify: `src/app/(site-pages)/ecommerce-development-toronto/page.tsx`
- Modify: `src/app/(site-pages)/seo-services-toronto/page.tsx`
- Modify: `src/app/(site-pages)/ui-ux-design-toronto/page.tsx`
- Modify: `src/app/(site-pages)/custom-software-development-toronto/page.tsx`
- Modify: `src/app/(site-pages)/mobile-app-development-toronto/page.tsx`
- Modify: `src/app/(site-pages)/wordpress-web-design-canada/page.tsx`
- Modify: `src/app/(site-pages)/school-website-design-services/page.tsx`

**Interfaces:**
- Produces: updated `description` in metadata export for each page

- [ ] **Step 1: Update web-design-toronto meta description**

```typescript
// In the metadata export, update description:
description: "Custom web design in Toronto that converts. Responsive, SEO-optimized websites built with React, Next.js, and modern frameworks. Get a free quote.",
```

- [ ] **Step 2: Update ecommerce-development-toronto meta description**

```typescript
description: "E-commerce development in Toronto. Custom Shopify, WooCommerce, and headless solutions. Increase your online sales with a high-converting store.",
```

- [ ] **Step 3: Update seo-services-toronto meta description**

```typescript
description: "SEO services in Toronto that drive real results. Technical SEO, content strategy, and local search optimization. Free SEO audit available.",
```

- [ ] **Step 4: Update ui-ux-design-toronto meta description**

```typescript
description: "UI/UX design in Toronto that turns visitors into customers. User research, wireframing, prototyping, and usability testing.",
```

- [ ] **Step 5: Update custom-software-development-toronto meta description**

```typescript
description: "Custom software development in Toronto. Web apps, APIs, dashboards, and enterprise solutions. 10+ years of experience.",
```

- [ ] **Step 6: Update mobile-app-development-toronto meta description**

```typescript
description: "Mobile app development in Toronto. iOS, Android, and cross-platform apps with React Native and Flutter.",
```

- [ ] **Step 7: Update wordpress-web-design-canada meta description**

```typescript
description: "WordPress web design in Canada. Custom themes, WooCommerce, and performance optimization. Local Canadian hosting available.",
```

- [ ] **Step 8: Update school-website-design-services meta description**

```typescript
description: "School website design in Canada. Student portals, event calendars, and parent communication tools. Built for Canadian schools.",
```

- [ ] **Step 9: Build and verify**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 10: Commit**

```bash
git add src/app/\(site-pages\)/web-design-toronto/page.tsx src/app/\(site-pages\)/ecommerce-development-toronto/page.tsx src/app/\(site-pages\)/seo-services-toronto/page.tsx src/app/\(site-pages\)/ui-ux-design-toronto/page.tsx src/app/\(site-pages\)/custom-software-development-toronto/page.tsx src/app/\(site-pages\)/mobile-app-development-toronto/page.tsx src/app/\(site-pages\)/wordpress-web-design-canada/page.tsx src/app/\(site-pages\)/school-website-design-services/page.tsx
git commit -m "feat(seo): optimize meta descriptions for 8 service pages"
```

---

### Task 8: Optimize Homepage Title and H1

**Files:**
- Modify: `src/app/page.tsx` (line 18 for H1)

**Interfaces:**
- Produces: updated H1 tag with primary keywords

- [ ] **Step 1: Update homepage title in root layout**

In `src/app/layout.tsx`, update the title:

```typescript
title: "Toronto Web Design & Software Development Agency | Beeclue",
```

- [ ] **Step 2: Update homepage H1**

In `src/app/page.tsx`, update the hidden H1:

```tsx
<h1 className={styles.srOnly}>Toronto's Premier Web Design & Software Development Agency</h1>
```

- [ ] **Step 3: Build and verify**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx
git commit -m "feat(seo): optimize homepage title and H1 for Toronto keywords"
```

---

## Phase 3: New Content Creation (Week 3-4)

### Task 9: Create /shopify-development-toronto

**Files:**
- Create: `src/app/(site-pages)/shopify-development-toronto/page.tsx`

**Interfaces:**
- Produces: complete service page with metadata, content, Service schema, FAQPage schema, BreadcrumbList schema

- [ ] **Step 1: Create page file**

```typescript
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Development Toronto | Custom Shopify Stores | Beeclue",
  description: "Professional Shopify development in Toronto. Custom themes, apps, and headless commerce solutions. Increase your online sales with a high-converting Shopify store.",
  openGraph: {
    title: "Shopify Development Toronto | Custom Shopify Stores | Beeclue",
    description: "Professional Shopify development in Toronto. Custom themes, apps, and headless commerce solutions.",
    url: "https://beeclue.com/shopify-development-toronto",
    siteName: "Beeclue",
    type: "website",
  },
};

export default function ShopifyDevelopmentToronto() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Shopify Development Toronto",
                "description": "Professional Shopify development services in Toronto including custom themes, apps, and headless commerce solutions.",
                "url": "https://beeclue.com/shopify-development-toronto",
                "provider": {
                  "@type": "Organization",
                  "name": "Beeclue",
                  "url": "https://beeclue.com"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Toronto"
                },
                "serviceType": "Shopify Development"
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com" },
                  { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://beeclue.com/services" },
                  { "@type": "ListItem", "position": 3, "name": "Shopify Development Toronto" }
                ]
              }
            ]
          })
        }}
      />
      <main style={{ padding: "10vh 5vw" }}>
        <h1>Shopify Development Toronto</h1>
        {/* Content: 2000-3000 words about Shopify development services */}
        {/* Include: process, technology stack, pricing factors, mini case studies */}
        {/* Internal links to /ecommerce-development-toronto, /shopify-ecommerce-website-design */}
        {/* CTA section linking to /contact */}
      </main>
    </>
  );
}
```

- [ ] **Step 2: Write full content (2000-3000 words)**

The page content should include:
- Hero section with H1 and primary keyword
- "Our Shopify Services" section (custom themes, apps, migrations, headless)
- "Our Shopify Development Process" section (4 steps)
- "Why Choose Our Shopify Team" section (experience, certifications, portfolio)
- "Shopify Pricing Factors" section
- "Related Case Studies" section
- "Frequently Asked Questions" section (5-8 questions with FAQPage schema)
- CTA section

- [ ] **Step 3: Add FAQPage schema**

Add to the `@graph` array in the JSON-LD:

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does Shopify development cost in Toronto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shopify development costs in Toronto range from $5,000 for a basic custom theme to $50,000+ for a fully custom headless commerce solution. The final cost depends on design complexity, custom features, and integrations required."
      }
    }
    // Add 5-8 more FAQ questions
  ]
}
```

- [ ] **Step 4: Build and verify**

Run: `npm run build`
Expected: Build succeeds, page renders at `/shopify-development-toronto`

- [ ] **Step 5: Commit**

```bash
git add src/app/\(site-pages\)/shopify-development-toronto/page.tsx
git commit -m "feat(content): create shopify-development-toronto page"
```

---

### Task 10: Create /website-redesign-toronto

**Files:**
- Create: `src/app/(site-pages)/website-redesign-toronto/page.tsx`

**Interfaces:**
- Produces: complete service page with metadata, content, schemas

- [ ] **Step 1: Create page file with metadata and schemas**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Redesign Toronto | Modernize Your Online Presence | Beeclue",
  description: "Professional website redesign in Toronto. Modernize your outdated website with better design, faster performance, and higher conversions.",
  openGraph: {
    title: "Website Redesign Toronto | Modernize Your Online Presence | Beeclue",
    description: "Professional website redesign in Toronto. Modernize your outdated website with better design, faster performance, and higher conversions.",
    url: "https://beeclue.com/website-redesign-toronto",
    siteName: "Beeclue",
    type: "website",
  },
};
// ... full page implementation
```

- [ ] **Step 2: Write full content (2000-3000 words)**

Include: signs you need a redesign, our redesign process, before/after examples, pricing, FAQ section

- [ ] **Step 3: Build and verify**

Run: `npm run build`

- [ ] **Step 4: Commit**

```bash
git add src/app/\(site-pages\)/website-redesign-toronto/page.tsx
git commit -m "feat(content): create website-redesign-toronto page"
```

---

### Task 11: Create /website-maintenance-toronto

**Files:**
- Create: `src/app/(site-pages)/website-maintenance-toronto/page.tsx`

**Interfaces:**
- Produces: complete service page

- [ ] **Step 1: Create page file with metadata and schemas**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Maintenance Toronto | Keep Your Site Running Smoothly | Beeclue",
  description: "Website maintenance services in Toronto. Updates, security patches, backups, and performance monitoring. Keep your website safe and fast.",
  openGraph: {
    title: "Website Maintenance Toronto | Keep Your Site Running Smoothly | Beeclue",
    description: "Website maintenance services in Toronto. Updates, security patches, backups, and performance monitoring.",
    url: "https://beeclue.com/website-maintenance-toronto",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 2: Write full content (2000-2500 words)**

Include: why maintenance matters, what's included, pricing plans, FAQ section

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(site-pages\)/website-maintenance-toronto/page.tsx
git commit -m "feat(content): create website-maintenance-toronto page"
```

---

### Task 12: Create /web-development-services-canada

**Files:**
- Create: `src/app/(site-pages)/web-development-services-canada/page.tsx`

**Interfaces:**
- Produces: national service page

- [ ] **Step 1: Create page file**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services Canada | Nationwide Digital Solutions | Beeclue",
  description: "Professional web development services across Canada. Custom websites, e-commerce, and software solutions for businesses from coast to coast.",
  openGraph: {
    title: "Web Development Services Canada | Nationwide Digital Solutions | Beeclue",
    description: "Professional web development services across Canada. Custom websites, e-commerce, and software solutions.",
    url: "https://beeclue.com/web-development-services-canada",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 2: Write full content (2000-3000 words)**

Include: nationwide coverage, services offered, cities served, case studies, FAQ

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(site-pages\)/web-development-services-canada/page.tsx
git commit -m "feat(content): create web-development-services-canada page"
```

---

### Task 13: Create /digital-marketing-toronto

**Files:**
- Create: `src/app/(site-pages)/digital-marketing-toronto/page.tsx`

**Interfaces:**
- Produces: service page expanding into digital marketing

- [ ] **Step 1: Create page file**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Toronto | Data-Driven Marketing Solutions | Beeclue",
  description: "Digital marketing services in Toronto. SEO, PPC, social media marketing, and content strategy. Data-driven campaigns that deliver ROI.",
  openGraph: {
    title: "Digital Marketing Toronto | Data-Driven Marketing Solutions | Beeclue",
    description: "Digital marketing services in Toronto. SEO, PPC, social media marketing, and content strategy.",
    url: "https://beeclue.com/digital-marketing-toronto",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 2: Write full content (2000-3000 words)**

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(site-pages\)/digital-marketing-toronto/page.tsx
git commit -m "feat(content): create digital-marketing-toronto page"
```

---

### Task 14: Create /shopify-ecommerce-website-design

**Files:**
- Create: `src/app/(site-pages)/shopify-ecommerce-website-design/page.tsx`

**Interfaces:**
- Produces: industry vertical page

- [ ] **Step 1: Create page file**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify E-Commerce Website Design | Custom Shopify Stores | Beeclue",
  description: "Professional Shopify e-commerce website design. Custom themes, product pages, and checkout optimization. Convert more visitors into paying customers.",
  openGraph: {
    title: "Shopify E-Commerce Website Design | Custom Shopify Stores | Beeclue",
    description: "Professional Shopify e-commerce website design. Custom themes, product pages, and checkout optimization.",
    url: "https://beeclue.com/shopify-ecommerce-website-design",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 2: Write full content (2000-3000 words)**

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(site-pages\)/shopify-ecommerce-website-design/page.tsx
git commit -m "feat(content): create shopify-ecommerce-website-design page"
```

---

### Task 15: Create /healthcare-website-development-canada

**Files:**
- Create: `src/app/(site-pages)/healthcare-website-development-canada/page.tsx`

**Interfaces:**
- Produces: industry vertical page

- [ ] **Step 1: Create page file**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Website Development Canada | Medical Website Design | Beeclue",
  description: "Healthcare website development in Canada. HIPAA-compliant medical websites with patient portals, appointment booking, and secure forms.",
  openGraph: {
    title: "Healthcare Website Development Canada | Medical Website Design | Beeclue",
    description: "Healthcare website development in Canada. HIPAA-compliant medical websites with patient portals.",
    url: "https://beeclue.com/healthcare-website-development-canada",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 2: Write full content (2000-2500 words)**

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(site-pages\)/healthcare-website-development-canada/page.tsx
git commit -m "feat(content): create healthcare-website-development-canada page"
```

---

### Task 16: Create /restaurant-website-design-canada

**Files:**
- Create: `src/app/(site-pages)/restaurant-website-design-canada/page.tsx`

**Interfaces:**
- Produces: industry vertical page

- [ ] **Step 1: Create page file**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Website Design Canada | Online Ordering & Reservations | Beeclue",
  description: "Restaurant website design in Canada. Online ordering, reservation systems, menu management, and local SEO. Increase direct orders and bookings.",
  openGraph: {
    title: "Restaurant Website Design Canada | Online Ordering & Reservations | Beeclue",
    description: "Restaurant website design in Canada. Online ordering, reservation systems, and menu management.",
    url: "https://beeclue.com/restaurant-website-design-canada",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 2: Write full content (2000-2500 words)**

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(site-pages\)/restaurant-website-design-canada/page.tsx
git commit -m "feat(content): create restaurant-website-design-canada page"
```

---

### Task 17: Create /real-estate-website-development-toronto

**Files:**
- Create: `src/app/(site-pages)/real-estate-website-development-toronto/page.tsx`

**Interfaces:**
- Produces: industry vertical page

- [ ] **Step 1: Create page file**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Website Development Toronto | MLS/IDX Integration | Beeclue",
  description: "Real estate website development in Toronto. MLS/IDX integration, virtual tours, lead capture, and property listings. Stand out in the Toronto market.",
  openGraph: {
    title: "Real Estate Website Development Toronto | MLS/IDX Integration | Beeclue",
    description: "Real estate website development in Toronto. MLS/IDX integration, virtual tours, and lead capture.",
    url: "https://beeclue.com/real-estate-website-development-toronto",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 2: Write full content (2000-2500 words)**

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(site-pages\)/real-estate-website-development-toronto/page.tsx
git commit -m "feat(content): create real-estate-website-development-toronto page"
```

---

### Task 18: Create /ecommerce-website-cost-canada

**Files:**
- Create: `src/app/(site-pages)/ecommerce-website-cost-canada/page.tsx`

**Interfaces:**
- Produces: landing page targeting high-impression content gap keyword

- [ ] **Step 1: Create page file**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Website Cost Canada: 2026 Pricing Guide | Beeclue",
  description: "How much does an e-commerce website cost in Canada? Complete 2026 pricing guide with breakdowns for Shopify, WooCommerce, and custom solutions.",
  openGraph: {
    title: "E-Commerce Website Cost Canada: 2026 Pricing Guide | Beeclue",
    description: "How much does an e-commerce website cost in Canada? Complete 2026 pricing guide.",
    url: "https://beeclue.com/ecommerce-website-cost-canada",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 2: Write full content (2500-3000 words)**

Include: pricing breakdown by platform, hidden costs, ROI calculations, comparison table, FAQ

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(site-pages\)/ecommerce-website-cost-canada/page.tsx
git commit -m "feat(content): create ecommerce-website-cost-canada landing page"
```

---

### Task 19: Create /website-development-cost-toronto

**Files:**
- Create: `src/app/(site-pages)/website-development-cost-toronto/page.tsx`

**Interfaces:**
- Produces: landing page targeting quick-win keyword

- [ ] **Step 1: Create page file**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development Cost Toronto: 2026 Pricing Guide | Beeclue",
  description: "How much does website development cost in Toronto? Detailed 2026 pricing breakdown for small businesses, startups, and enterprises.",
  openGraph: {
    title: "Website Development Cost Toronto: 2026 Pricing Guide | Beeclue",
    description: "How much does website development cost in Toronto? Detailed 2026 pricing breakdown.",
    url: "https://beeclue.com/website-development-cost-toronto",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 2: Write full content (2500-3000 words)**

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(site-pages\)/website-development-cost-toronto/page.tsx
git commit -m "feat(content): create website-development-cost-toronto landing page"
```

---

### Task 20: Create /best-ecommerce-platform-canada

**Files:**
- Create: `src/app/(site-pages)/best-ecommerce-platform-canada/page.tsx`

**Interfaces:**
- Produces: landing page targeting high-impression content gap keyword

- [ ] **Step 1: Create page file**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best E-Commerce Platform Canada: 2026 Comparison | Beeclue",
  description: "Compare the best e-commerce platforms in Canada for 2026. Shopify vs WooCommerce vs custom solutions — features, pricing, and recommendations.",
  openGraph: {
    title: "Best E-Commerce Platform Canada: 2026 Comparison | Beeclue",
    description: "Compare the best e-commerce platforms in Canada for 2026.",
    url: "https://beeclue.com/best-ecommerce-platform-canada",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 2: Write full content (2500-3000 words)**

Include: platform comparison table, pros/cons, recommendations by business type, FAQ

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(site-pages\)/best-ecommerce-platform-canada/page.tsx
git commit -m "feat(content): create best-ecommerce-platform-canada landing page"
```

---

### Task 21: Create /not-secure-website-fix

**Files:**
- Create: `src/app/(site-pages)/not-secure-website-fix/page.tsx`

**Interfaces:**
- Produces: landing page targeting highest-traffic content gap keyword

- [ ] **Step 1: Create page file**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Secure Website? How to Fix It in 2026 | SSL Guide | Beeclue",
  description: "Why your website shows 'Not Secure' and how to fix it. Complete SSL/HTTPS guide for 2026. Step-by-step instructions and professional help.",
  openGraph: {
    title: "Not Secure Website? How to Fix It in 2026 | SSL Guide | Beeclue",
    description: "Why your website shows 'Not Secure' and how to fix it. Complete SSL/HTTPS guide.",
    url: "https://beeclue.com/not-secure-website-fix",
    siteName: "Beeclue",
    type: "website",
  },
};
```

- [ ] **Step 2: Write full content (2000-2500 words)**

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(site-pages\)/not-secure-website-fix/page.tsx
git commit -m "feat(content): create not-secure-website-fix landing page"
```

---

## Phase 4: Schema & Structured Data (Week 3-4)

### Task 22: Fix Case Study Schema (Article → CaseStudy)

**Files:**
- Modify: `src/app/(site-pages)/case-studies/new-angkor-wat/page.tsx`
- Modify: `src/app/(site-pages)/case-studies/blues-contracting-services/page.tsx`
- Modify: `src/app/(site-pages)/case-studies/gir-security/page.tsx`
- Modify: `src/app/(site-pages)/case-studies/lbf-skin-clinic/page.tsx`
- Modify: `src/app/(site-pages)/case-studies/sure-shot-photobooth/page.tsx`

**Interfaces:**
- Produces: updated JSON-LD schema with CaseStudy type, dates, and image

- [ ] **Step 1: Update new-angkor-wat schema**

Find the JSON-LD script tag and change `@type` from `Article` to `CaseStudy`, add `datePublished`, `dateModified`, and `image`:

```json
{
  "@type": "CaseStudy",
  "name": "New Angkor Wat — Digital Platform",
  "description": "Comprehensive digital platform promoting book and charitable organization",
  "datePublished": "2024-01-15",
  "dateModified": "2024-06-20",
  "image": "https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/newangkorwat.webp",
  "author": { "@type": "Organization", "name": "Beeclue" },
  "publisher": { "@type": "Organization", "name": "Beeclue" }
}
```

- [ ] **Step 2: Update blues-contracting-services schema**

Same pattern — change type to CaseStudy, add dates and image.

- [ ] **Step 3: Update gir-security schema**

- [ ] **Step 4: Update lbf-skin-clinic schema**

- [ ] **Step 5: Update sure-shot-photobooth schema**

- [ ] **Step 6: Build and verify**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 7: Commit**

```bash
git add src/app/\(site-pages\)/case-studies/new-angkor-wat/page.tsx src/app/\(site-pages\)/case-studies/blues-contracting-services/page.tsx src/app/\(site-pages\)/case-studies/gir-security/page.tsx src/app/\(site-pages\)/case-studies/lbf-skin-clinic/page.tsx src/app/\(site-pages\)/case-studies/sure-shot-photobooth/page.tsx
git commit -m "fix(schema): change case study schema from Article to CaseStudy"
```

---

### Task 23: Add BreadcrumbList to Missing Pages

**Files:**
- Modify: 5 case study page.tsx files (add BreadcrumbList to existing JSON-LD)
- Modify: `src/app/(site-pages)/services/page.tsx`
- Modify: `src/app/(site-pages)/case-studies/page.tsx`
- Modify: `src/app/(site-pages)/about-us/page.tsx`
- Modify: `src/app/(site-pages)/products/monexa/page.tsx`

**Interfaces:**
- Produces: BreadcrumbList schema added to JSON-LD on each page

- [ ] **Step 1: Add BreadcrumbList to case study pages**

Each case study page needs BreadcrumbList added to its `@graph` array:

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com" },
    { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://beeclue.com/case-studies" },
    { "@type": "ListItem", "position": 3, "name": "Case Study Title" }
  ]
}
```

- [ ] **Step 2: Add BreadcrumbList to services hub**

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com" },
    { "@type": "ListItem", "position": 2, "name": "Services" }
  ]
}
```

- [ ] **Step 3: Add BreadcrumbList to case-studies hub**

- [ ] **Step 4: Add BreadcrumbList to about-us**

- [ ] **Step 5: Add BreadcrumbList to monexa product page**

- [ ] **Step 6: Build and verify**

- [ ] **Step 7: Commit**

```bash
git commit -m "fix(schema): add BreadcrumbList to 9 pages missing it"
```

---

### Task 24: Enhance Global LocalBusiness Schema

**Files:**
- Modify: `src/app/layout.tsx` (lines 75-96)

**Interfaces:**
- Produces: enhanced LocalBusiness schema with sameAs, openingHours, priceRange, hasOfferCatalog

- [ ] **Step 1: Update LocalBusiness schema**

```json
{
  "@type": "LocalBusiness",
  "name": "Beeclue",
  "description": "Digital development agency in Toronto specializing in web design, custom software, and e-commerce solutions",
  "url": "https://beeclue.com",
  "telephone": "+1-xxx-xxx-xxxx",
  "address": { /* existing */ },
  "geo": { /* existing */ },
  "image": "https://beeclue.com/og-image.jpg",
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-18:00",
  "sameAs": [
    "https://www.facebook.com/beeclue",
    "https://www.linkedin.com/company/beeclue",
    "https://www.instagram.com/beeclue"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Development" } }
    ]
  }
}
```

- [ ] **Step 2: Build and verify**

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(schema): enhance global LocalBusiness schema"
```

---

### Task 25: Enhance Global WebSite Schema

**Files:**
- Modify: `src/app/layout.tsx` (lines 97-107)

**Interfaces:**
- Produces: enhanced WebSite schema with publisher logo

- [ ] **Step 1: Add publisher to WebSite schema**

```json
{
  "@type": "WebSite",
  "name": "Beeclue",
  "url": "https://beeclue.com",
  "potentialAction": { /* existing SearchAction */ },
  "publisher": {
    "@type": "Organization",
    "name": "Beeclue",
    "logo": { "@type": "ImageObject", "url": "https://beeclue.com/logo.png" }
  }
}
```

- [ ] **Step 2: Build and verify**

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(schema): enhance global WebSite schema with publisher"
```

---

### Task 26: Add Organization Schema to Homepage

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Produces: Organization JSON-LD schema on homepage

- [ ] **Step 1: Add Organization schema**

Add a `<script type="application/ld+json">` tag at the top of the homepage return:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Beeclue",
  "url": "https://beeclue.com",
  "logo": "https://beeclue.com/logo.png",
  "description": "Toronto-based digital development agency",
  "areaServed": { "@type": "Country", "name": "Canada" },
  "knowsAbout": ["Web Design", "Custom Software Development", "E-Commerce", "Mobile Apps", "SEO"]
}
```

- [ ] **Step 2: Build and verify**

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(schema): add Organization schema to homepage"
```

---

### Task 27: Update Global ItemList Schema

**Files:**
- Modify: `src/app/layout.tsx` (lines 108-149)

**Interfaces:**
- Produces: updated ItemList with all nav items including Blog and Products

- [ ] **Step 1: Add missing items to ItemList**

Add entries for:
- Blog (`/blogs`)
- Products/Monexa (`/products/monexa`)
- All 7 niche service pages

- [ ] **Step 2: Build and verify**

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(schema): update global ItemList with all nav items"
```

---

## Phase 5: Internal Linking & Site Architecture (Week 5-6)

### Task 28: Add Blog to Navigation

**Files:**
- Modify: `src/components/Navigation.tsx` (lines 10-37)

**Interfaces:**
- Produces: Blog link added to top navigation

- [ ] **Step 1: Add Blog link to nav**

Find the navigation items array and add:

```typescript
{ name: "Blog", href: "/blogs" }
```

Place it after "Case Studies" and before "About".

- [ ] **Step 2: Build and verify**

- [ ] **Step 3: Commit**

```bash
git add src/components/Navigation.tsx
git commit -m "feat(nav): add Blog link to top navigation"
```

---

### Task 29: Create Industries Section on Homepage

**Files:**
- Modify: `src/app/page.tsx` (insert after line 131)
- Modify: `src/app/page.module.css` (add new CSS classes)

**Interfaces:**
- Produces: Industries section with 7 cards linking to niche pages

- [ ] **Step 1: Add industry icons import**

```typescript
import { Scissors, Stethoscope, UtensilsCrossed, Building2, Heart, Scale, HardHat } from "lucide-react";
```

- [ ] **Step 2: Add Industries section to page.tsx**

Insert after the services section closing tag (line 131):

```tsx
{/* INDUSTRIES SECTION */}
<FadeIn className={`${styles.baseSection} ${styles.industriesSection}`}>
  <div className={styles.servicesHeader}>
    <h2>Industries We Serve</h2>
    <p>Specialized web solutions tailored to your industry&apos;s unique needs.</p>
  </div>
  
  <div className={styles.industriesGrid}>
    <Link href="/web-design-for-salons" className={styles.industryCard}>
      <Scissors className={styles.industryIcon} />
      <h3>Salons & Barbershops</h3>
      <p>Online booking, portfolio galleries, and local SEO to fill your chairs.</p>
      <span className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></span>
    </Link>
    
    <Link href="/web-design-for-dental-clinics" className={styles.industryCard}>
      <Stethoscope className={styles.industryIcon} />
      <h3>Dental Clinics</h3>
      <p>Patient portals, appointment booking, and HIPAA-compliant forms.</p>
      <span className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></span>
    </Link>
    
    <Link href="/web-design-for-restaurants" className={styles.industryCard}>
      <UtensilsCrossed className={styles.industryIcon} />
      <h3>Restaurants</h3>
      <p>Online ordering, reservation systems, and menu management.</p>
      <span className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></span>
    </Link>
    
    <Link href="/web-design-for-real-estate" className={styles.industryCard}>
      <Building2 className={styles.industryIcon} />
      <h3>Real Estate</h3>
      <p>MLS/IDX integration, virtual tours, and lead capture forms.</p>
      <span className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></span>
    </Link>
    
    <Link href="/web-design-for-healthcare" className={styles.industryCard}>
      <Heart className={styles.industryIcon} />
      <h3>Healthcare</h3>
      <p>Medical practice websites with patient portals and secure forms.</p>
      <span className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></span>
    </Link>
    
    <Link href="/web-design-for-law-firms" className={styles.industryCard}>
      <Scale className={styles.industryIcon} />
      <h3>Law Firms</h3>
      <p>Case evaluation forms, attorney profiles, and professional design.</p>
      <span className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></span>
    </Link>
    
    <Link href="/web-design-for-construction-companies" className={styles.industryCard}>
      <HardHat className={styles.industryIcon} />
      <h3>Construction</h3>
      <p>Project portfolios, quote request forms, and local SEO.</p>
      <span className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></span>
    </Link>
  </div>
</FadeIn>
```

- [ ] **Step 3: Add CSS for industry cards**

Add to `page.module.css`:

```css
.industriesSection {
  /* inherits .baseSection styles */
}

.industryCard {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  padding: 2.5rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.industryCard:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--primary);
  transform: translateY(-5px);
}

.industryIcon {
  color: var(--primary);
  width: 40px;
  height: 40px;
  margin-bottom: 1.5rem;
}

.industryCard h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--foreground);
}

.industryCard p {
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}
```

- [ ] **Step 4: Build and verify**

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/app/page.module.css
git commit -m "feat(homepage): add Industries We Serve section with 7 industry cards"
```

---

### Task 30: Expand Footer Links

**Files:**
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Produces: expanded footer with service, industry, and resource links

- [ ] **Step 1: Add service links to footer**

Add a new section with links to all main service pages.

- [ ] **Step 2: Add resource links**

Add links to Case Studies, About Us, Blog.

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat(footer): expand footer with service and resource links"
```

---

### Task 31: Update Sitemap with New Pages

**Files:**
- Modify: `src/app/sitemap.ts`

**Interfaces:**
- Produces: sitemap with 13 new pages added

- [ ] **Step 1: Add new service pages to sitemap**

```typescript
{ url: "https://beeclue.com/shopify-development-toronto", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
{ url: "https://beeclue.com/website-redesign-toronto", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
{ url: "https://beeclue.com/website-maintenance-toronto", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
{ url: "https://beeclue.com/web-development-services-canada", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
{ url: "https://beeclue.com/digital-marketing-toronto", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
```

- [ ] **Step 2: Add industry vertical pages**

```typescript
{ url: "https://beeclue.com/shopify-ecommerce-website-design", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
{ url: "https://beeclue.com/healthcare-website-development-canada", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
{ url: "https://beeclue.com/restaurant-website-design-canada", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
{ url: "https://beeclue.com/real-estate-website-development-toronto", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
```

- [ ] **Step 3: Add landing pages**

```typescript
{ url: "https://beeclue.com/ecommerce-website-cost-canada", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
{ url: "https://beeclue.com/website-development-cost-toronto", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
{ url: "https://beeclue.com/best-ecommerce-platform-canada", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
{ url: "https://beeclue.com/not-secure-website-fix", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
```

- [ ] **Step 4: Build and verify**

- [ ] **Step 5: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat(seo): add 13 new pages to sitemap"
```

---

## Phase 6: Blog Content (Week 5-8)

### Task 32: Create Blog Post — Website Cost Guide

**Files:**
- Create: `src/app/(blogs)/website-cost-toronto-2026-guide/page.tsx`

**Interfaces:**
- Produces: blog post with BlogPosting + BreadcrumbList schemas

- [ ] **Step 1: Create blog post file**

Follow existing blog pattern (e.g., `cost-to-build-ecommerce-website-canada`):
- Export metadata with title/description
- BlogPosting + BreadcrumbList JSON-LD
- Hero image with priority
- 2500-3000 words

- [ ] **Step 2: Write content**

Target keywords: "website cost toronto", "web design cost toronto", "how much does a website cost"

Include: pricing breakdown by type (brochure, e-commerce, custom), hidden costs, ROI calculations, comparison table, FAQ

Internal links: `/web-design-toronto`, `/ecommerce-development-toronto`, `/custom-software-development-toronto`

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(blogs\)/website-cost-toronto-2026-guide/page.tsx
git commit -m "feat(blog): add website cost toronto 2026 guide"
```

---

### Task 33: Create Blog Post — Best E-Commerce Platforms

**Files:**
- Create: `src/app/(blogs)/best-ecommerce-platforms-canada-2026/page.tsx`

**Interfaces:**
- Produces: blog post

- [ ] **Step 1: Create blog post file**

- [ ] **Step 2: Write content (2500-3000 words)**

Target keywords: "best ecommerce platform canada", "ecommerce website builder canada"

Include: Shopify vs WooCommerce vs BigCommerce vs custom, comparison table, recommendations by business type

Internal links: `/ecommerce-development-toronto`, `/shopify-development-toronto`, `/shopify-ecommerce-website-design`

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(blogs\)/best-ecommerce-platforms-canada-2026/page.tsx
git commit -m "feat(blog): add best ecommerce platforms canada 2026"
```

---

### Task 34: Create Blog Post — Not Secure Fix

**Files:**
- Create: `src/app/(blogs)/fix-not-secure-website-warning-2026/page.tsx`

**Interfaces:**
- Produces: blog post

- [ ] **Step 1: Create blog post file**

- [ ] **Step 2: Write content (2000-2500 words)**

Target keywords: "not secure website", "how to fix not secure warning"

Include: what causes the warning, step-by-step SSL fix, when to get professional help

Internal links: `/seo-services-toronto`, `/web-design-toronto`, existing not-secure blog post

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(blogs\)/fix-not-secure-website-warning-2026/page.tsx
git commit -m "feat(blog): add fix not secure website warning 2026"
```

---

### Task 35: Create Blog Post — Custom vs Wix vs Shopify

**Files:**
- Create: `src/app/(blogs)/custom-website-vs-wix-vs-shopify/page.tsx`

**Interfaces:**
- Produces: blog post

- [ ] **Step 1: Create blog post file**

- [ ] **Step 2: Write content (2500-3000 words)**

Include: comparison table, pros/cons, recommendations, cost analysis

Internal links: `/web-design-toronto`, `/shopify-development-toronto`, `/wordpress-web-design-canada`, `/custom-website-vs-wix`

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(blogs\)/custom-website-vs-wix-vs-shopify/page.tsx
git commit -m "feat(blog): add custom website vs wix vs shopify comparison"
```

---

### Task 36: Create Blog Post — Website Features for Small Business

**Files:**
- Create: `src/app/(blogs)/website-features-small-business-canada-2026/page.tsx`

**Interfaces:**
- Produces: blog post

- [ ] **Step 1: Create blog post file**

- [ ] **Step 2: Write content (2000-2500 words)**

Include: top 10 features with explanations, why each matters, implementation tips

Internal links: `/web-design-toronto`, `/seo-services-toronto`, `/ui-ux-design-toronto`

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(blogs\)/website-features-small-business-canada-2026/page.tsx
git commit -m "feat(blog): add website features for small business 2026"
```

---

### Task 37: Create Blog Post — AI in Web Development

**Files:**
- Create: `src/app/(blogs)/ai-web-development-2026/page.tsx`

**Interfaces:**
- Produces: blog post

- [ ] **Step 1: Create blog post file**

- [ ] **Step 2: Write content (2000-2500 words)**

Include: AI tools, automation, impact on development workflow, future trends

Internal links: `/custom-software-development-toronto`, existing AI blog post

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(blogs\)/ai-web-development-2026/page.tsx
git commit -m "feat(blog): add ai web development 2026"
```

---

### Task 38: Create Blog Post — School Website Design Guide

**Files:**
- Create: `src/app/(blogs)/school-website-design-canada-guide/page.tsx`

**Interfaces:**
- Produces: blog post

- [ ] **Step 1: Create blog post file**

- [ ] **Step 2: Write content (2500-3000 words)**

Include: features, compliance, case studies, pricing, FAQ

Internal links: `/school-website-design-services`, existing school website blog posts

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(blogs\)/school-website-design-canada-guide/page.tsx
git commit -m "feat(blog): add school website design canada guide"
```

---

### Task 39: Create Blog Post — SEO for Toronto Businesses

**Files:**
- Create: `src/app/(blogs)/seo-toronto-businesses-guide-2026/page.tsx`

**Interfaces:**
- Produces: blog post

- [ ] **Step 1: Create blog post file**

- [ ] **Step 2: Write content (2500-3000 words)**

Include: local SEO, Google Business Profile, on-page SEO, content strategy, link building

Internal links: `/seo-services-toronto`, `/web-design-toronto`

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
git add src/app/\(blogs\)/seo-toronto-businesses-guide-2026/page.tsx
git commit -m "feat(blog): add seo toronto businesses guide 2026"
```

---

### Task 40: Update 5 Existing Blog Posts

**Files:**
- Modify: `src/app/(blogs)/how-to-fix-not-secure-website-warning/page.tsx`
- Modify: `src/app/(blogs)/what-are-cookies-a-helpful-guide-to-computer-cookies/page.tsx`
- Modify: `src/app/(blogs)/cost-to-build-ecommerce-website-canada/page.tsx`
- Modify: `src/app/(blogs)/best-ecommerce-website-builder-canada/page.tsx`
- Modify: `src/app/(blogs)/5-tips-for-choosing-the-right-website-development-company/page.tsx`

**Interfaces:**
- Produces: updated blog posts with CTAs and cross-links

- [ ] **Step 1: Update not-secure blog**

Add CTA section linking to `/seo-services-toronto` and `/not-secure-website-fix`

- [ ] **Step 2: Update cookies blog**

Add CTA linking to privacy-related services

- [ ] **Step 3: Update cost-to-build-ecommerce blog**

Add cross-link to new `/ecommerce-website-cost-canada` page and `/best-ecommerce-platform-canada`

- [ ] **Step 4: Update best-ecommerce-builder blog**

Add cross-link to new comparison blog post

- [ ] **Step 5: Update 5-tips blog**

Add CTA to `/contact`, update content for 2026

- [ ] **Step 6: Build and verify**

- [ ] **Step 7: Commit**

```bash
git commit -m "feat(blog): update 5 existing posts with CTAs and cross-links"
```

---

## Phase 7: LLMs.txt Updates

### Task 41: Update llms.txt and llms-full.txt

**Files:**
- Modify: `public/llms.txt`
- Modify: `public/llms-full.txt`

**Interfaces:**
- Produces: updated LLM documentation files

- [ ] **Step 1: Add all new pages to llms.txt**

Add links for:
- 5 new service pages
- 4 industry vertical pages
- 4 landing pages
- 8 new blog posts

- [ ] **Step 2: Add detailed descriptions to llms-full.txt**

Add markdown descriptions for each new page including content summary, target keywords, and internal links.

- [ ] **Step 3: Fix blog count discrepancy**

Ensure all 33 blog posts (25 existing + 8 new) are listed.

- [ ] **Step 4: Add /custom-website-vs-wix**

- [ ] **Step 5: Commit**

```bash
git add public/llms.txt public/llms-full.txt
git commit -m "docs(llms): update llms.txt and llms-full.txt with all new pages"
```

---

## Verification Tasks

### Task 42: Full Build Verification

**Files:**
- None (verification only)

**Interfaces:**
- Produces: confirmation that all changes compile correctly

- [ ] **Step 1: Run full build**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 2: Verify all new pages are accessible**

Check that all 13 new pages render correctly.

- [ ] **Step 3: Verify all schemas validate**

Test a sample of pages with Google Rich Results Test.

- [ ] **Step 4: Verify sitemap includes all pages**

Run: `curl https://beeclue.com/sitemap.xml` and verify all pages are listed.

- [ ] **Step 5: Final commit if any fixes needed**

---

## Summary

| Phase | Tasks | Timeline |
|-------|-------|----------|
| 1. Technical SEO Fixes | Tasks 1-6 | Week 1-2 |
| 2. On-Page Optimization | Tasks 7-8 | Week 1-2 |
| 3. New Content Creation | Tasks 9-21 | Week 3-4 |
| 4. Schema & Structured Data | Tasks 22-27 | Week 3-4 |
| 5. Internal Linking | Tasks 28-31 | Week 5-6 |
| 6. Blog Content | Tasks 32-40 | Week 5-8 |
| 7. LLMs.txt Updates | Task 41 | Week 8 |
| 8. Verification | Task 42 | Week 8 |
| **Total** | **42 tasks** | **8 weeks** |
