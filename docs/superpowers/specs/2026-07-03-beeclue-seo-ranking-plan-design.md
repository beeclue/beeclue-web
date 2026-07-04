# Beeclue Tech — Comprehensive SEO Ranking Improvement Plan

**Date**: 2026-07-03
**Status**: Approved — Ready for Implementation
**Approach**: Hybrid (Balanced) — 6-8 weeks
**Goals**: Local (Toronto) + National (Canada) rankings, AI/GEO visibility

---

## Current State

### GSC Data (28-day snapshot)
| Metric | Value | Assessment |
|--------|-------|------------|
| Total clicks | 11 | Very low |
| Total impressions | 1,674 | Decent visibility |
| CTR | 0.66% | Poor (target: 2-5%) |
| Avg position | 42.5 | Page 4-5 (target: page 1) |
| Service page positions | 33-56 | Page 4-6 (buried) |
| Informational content | 13-14 | Page 2 (close to page 1) |

### Quick Wins Identified
| Keyword | Position | Impressions | Action |
|---------|----------|-------------|--------|
| "mobile app development" | 6 | 29 | CTR optimization |
| "web design toronto" | 33.2 | — | Content + links |
| "ecommerce development toronto" | 43.2 | — | Case studies + pricing |
| "seo services toronto" | 47.8 | — | Testimonials + metrics |
| "custom software development toronto" | 33.4 | 39 | Portfolio + tech stack |

### Content Gap Keywords (High Impressions, Low Position)
| Keyword | Position | Impressions |
|---------|----------|-------------|
| "ecommerce website builder canada" | 58.9 | 164 |
| "not secure website" cluster | 13-58 | High |
| "custom software development toronto" | 33.4 | 39 |
| "school website design services" | 42.4 | 54 |

### Site Audit Findings
- 7 service pages missing metadata (salons, dental, construction, restaurants, real estate, healthcare, law firms)
- 1 page missing metadata (`/custom-website-vs-wix`)
- No canonical tags anywhere
- No hreflang tags
- Sitemap lastModified hardcoded to 2026-06-27
- Case studies use `Article` instead of `CaseStudy` schema
- 12 pages missing BreadcrumbList schema
- No RSS feed
- Blog not in navigation
- Footer missing service/case study links
- Raw `<img>` tags on homepage (Google/Trustpilot logos)

---

## Section 1: Technical SEO Fixes (Week 1-2)

### 1.1 Add Missing Metadata to 8 Pages

| Page | Proposed Title | Meta Description |
|------|----------------|------------------|
| `/web-design-for-salons` | "Salon Website Design Toronto \| Book More Clients Online \| Beeclue" | "Professional salon and barbershop website design in Toronto. Online booking, portfolio galleries, and SEO that brings local clients to your chair." |
| `/web-design-for-dental-clinics` | "Dental Clinic Website Design Toronto \| Patient-Focused Sites \| Beeclue" | "Custom dental clinic websites in Toronto with online booking, patient portals, and HIPAA-compliant forms. Convert more visitors into appointments." |
| `/web-design-for-construction-companies` | "Construction Company Website Design Toronto \| Showcase Your Projects \| Beeclue" | "Professional construction company websites in Toronto. Project portfolios, quote request forms, and SEO to dominate local search." |
| `/web-design-for-restaurants` | "Restaurant Website Design Toronto \| Online Ordering & Reservations \| Beeclue" | "Restaurant websites in Toronto with online ordering, reservation systems, and menu management. Increase direct orders and bookings." |
| `/web-design-for-real-estate` | "Real Estate Website Design Toronto \| IDX Integration & Lead Capture \| Beeclue" | "Real estate websites in Toronto with MLS/IDX integration, virtual tours, and lead capture. Stand out in the competitive Toronto market." |
| `/web-design-for-healthcare` | "Healthcare Website Design Toronto \| Patient-Centered Medical Sites \| Beeclue" | "Healthcare and medical practice websites in Toronto. Appointment booking, patient portals, and HIPAA-compliant solutions." |
| `/web-design-for-law-firms` | "Law Firm Website Design Toronto \| Professional Legal Websites \| Beeclue" | "Law firm websites in Toronto with case evaluation forms, attorney profiles, and SEO to attract high-value clients." |
| `/custom-website-vs-wix` | "Custom Website vs Wix: Why Custom Development Wins for Canadian Businesses \| Beeclue" | "Compare custom website development vs Wix. Learn why Canadian businesses choose custom solutions for scalability, SEO, and brand control." |

**Files**: Each page's `page.tsx` needs `export const metadata: Metadata` added.

### 1.2 Add Canonical Tags

Add `alternates.canonical` to root layout and per-page overrides.

**File**: `src/app/layout.tsx`

### 1.3 Fix Sitemap lastModified

Change hardcoded `2026-06-27` to `new Date()`.

**File**: `src/app/sitemap.ts` line 72

### 1.4 Add Hreflang Tags

```typescript
alternates: {
  canonical: 'https://beeclue.com',
  languages: { 'en-CA': 'https://beeclue.com' },
}
```

**File**: `src/app/layout.tsx`

### 1.5 Update robots.txt

Add AI crawler rules for GPTBot, Google-Extended, ClaudeBot, PerplexityBot.

**File**: `public/robots.txt`

### 1.6 Fix Raw `<img>` Tags

Replace `<img>` with Next.js `<Image>` for Google logo and Trustpilot stars.

**File**: `src/app/page.tsx` lines 34, 40

---

## Section 2: On-Page Optimization (Week 1-2)

### 2.1 Optimize Service Page Meta Descriptions

| Page | Proposed Meta Description |
|------|---------------------------|
| `/web-design-toronto` | "Custom web design in Toronto that converts. Responsive, SEO-optimized websites built with React, Next.js, and modern frameworks. Get a free quote." |
| `/ecommerce-development-toronto` | "E-commerce development in Toronto. Custom Shopify, WooCommerce, and headless solutions. Increase your online sales with a high-converting store." |
| `/seo-services-toronto` | "SEO services in Toronto that drive real results. Technical SEO, content strategy, and local search optimization. Free SEO audit available." |
| `/ui-ux-design-toronto` | "UI/UX design in Toronto that turns visitors into customers. User research, wireframing, prototyping, and usability testing." |
| `/custom-software-development-toronto` | "Custom software development in Toronto. Web apps, APIs, dashboards, and enterprise solutions. 10+ years of experience." |
| `/mobile-app-development-toronto` | "Mobile app development in Toronto. iOS, Android, and cross-platform apps with React Native and Flutter." |
| `/wordpress-web-design-canada` | "WordPress web design in Canada. Custom themes, WooCommerce, and performance optimization. Local Canadian hosting available." |
| `/school-website-design-services` | "School website design in Canada. Student portals, event calendars, and parent communication tools. Built for Canadian schools." |

### 2.2 Optimize Homepage

- **Title**: "Toronto Web Design & Software Development Agency \| Beeclue"
- **H1**: "Toronto's Premier Web Design & Software Development Agency"
- Add location signals: "Serving Toronto, Mississauga, Brampton, Vaughan, and the Greater Toronto Area"

### 2.3 Quick-Win Keyword Optimization

Improve CTR for position 4-15 keywords through meta description and content improvements.

### 2.4 Location Signals

Add city name, service area listing, and local case studies to all service pages.

### 2.5 Content Depth

Expand each service page to 1500-2500 words with:
- Detailed process/workflow section
- Technology stack explanation
- Pricing overview
- 2-3 mini case studies
- Comparison tables

---

## Section 3: New Content Creation (Week 3-4)

### 3.1 New Service Pages (5)

| Page Slug | Target Keywords | Priority |
|-----------|-----------------|----------|
| `/shopify-development-toronto` | "shopify development toronto" | Critical |
| `/website-redesign-toronto` | "website redesign toronto" | Critical |
| `/website-maintenance-toronto` | "website maintenance toronto" | High |
| `/web-development-services-canada` | "web development services canada" | High |
| `/digital-marketing-toronto` | "digital marketing toronto" | High |

### 3.2 Industry Vertical Pages (4)

| Page Slug | Target Keywords | Priority |
|-----------|-----------------|----------|
| `/shopify-ecommerce-website-design` | "shopify ecommerce website design" | Critical |
| `/healthcare-website-development-canada` | "healthcare website development canada" | High |
| `/restaurant-website-design-canada` | "restaurant website design canada" | Medium |
| `/real-estate-website-development-toronto` | "real estate website development toronto" | Medium |

### 3.3 Landing Pages (4)

| Page Slug | Target Keywords | GSC Position | Priority |
|-----------|-----------------|--------------|----------|
| `/ecommerce-website-cost-canada` | "ecommerce website cost canada" | Pos 58.9, 164 imp | Critical |
| `/website-development-cost-toronto` | "website development cost toronto" | Pos 13.4, 53 clicks | High |
| `/best-ecommerce-platform-canada` | "best ecommerce platform canada" | Pos 58.9, 164 imp | High |
| `/not-secure-website-fix` | "not secure website" | Pos 13.6, 221 clicks | High |

### 3.4 Content Specifications

Each new page:
- 2000-3000 words of unique content
- H1 with primary keyword
- H2/H3 structure with secondary keywords
- Service schema JSON-LD
- BreadcrumbList schema
- FAQ section (5-8 questions) with FAQPage schema
- Internal links to 2-3 related service pages
- Internal links to 1-2 relevant case studies
- CTA section with contact form
- Hero image optimized with Next.js `<Image>`
- Meta title (55-60 chars) with primary keyword
- Meta description (150-160 chars) with primary keyword + CTA

**Total new pages**: 13

---

## Section 4: Schema & Structured Data (Week 3-4)

### 4.1 Fix Case Study Schema

Change from `Article` to `CaseStudy` with enhanced properties (datePublished, dateModified, image).

**Files**: All 5 case study `page.tsx` files.

### 4.2 Add BreadcrumbList to Missing Pages

Pages missing BreadcrumbList:
- Case study detail pages (5)
- Services hub (`/services`)
- Case studies hub (`/case-studies`)
- About Us (`/about-us`)
- Monexa product page (`/products/monexa`)

### 4.3 Enhance Global LocalBusiness Schema

Add: image, priceRange, openingHours, sameAs (social links), hasOfferCatalog.

**File**: `src/app/layout.tsx` lines 75-96

### 4.4 Enhance Global WebSite Schema

Add: publisher with logo.

**File**: `src/app/layout.tsx` lines 97-107

### 4.5 Add Organization Schema to Homepage

New schema with name, url, logo, description, foundingDate, areaServed, knowsAbout.

**File**: `src/app/page.tsx`

### 4.6 Update Global ItemList Schema

Add missing nav items: Blog, Products/Monexa, niche service pages.

**File**: `src/app/layout.tsx` lines 108-149

**Total schema changes**: ~30 files

---

## Section 5: Internal Linking & Site Architecture (Week 5-6)

### 5.1 Navigation

Add **Blog** to top nav. NO Industries dropdown.

```
Home | Services (dropdown) | Case Studies | Blog | About | Contact
```

**File**: `src/components/Navigation.tsx`

### 5.2 Homepage Industries Section

New section after Services, before Featured Work. 7 industry cards linking to niche pages.

Uses existing `.industriesGrid` CSS class (line 1056 of page.module.css).

New icons: Scissors, Stethoscope, UtensilsCrossed, Building2, Heart, Scale, HardHat (from Lucide).

**Files**: `src/app/page.tsx`, `src/app/page.module.css`

### 5.3 Footer Expansion

Add service links, industry links, and resource links.

**File**: `src/components/Footer.tsx`

### 5.4 Internal Linking per Page

- Service pages → 2-3 case studies, 1-2 blog posts, 2-3 related services
- Blog posts → 1-2 service pages, 1-2 related blogs, 1 case study
- Case studies → service page used, 1-2 related case studies
- Homepage → all main services, featured case studies, top blog posts

### 5.5 Hub-and-Spoke Architecture

```
Web Design Hub: /services
  ├── /web-design-toronto
  ├── /wordpress-web-design-canada
  ├── /shopify-development-toronto (NEW)
  ├── /website-redesign-toronto (NEW)
  ├── /ui-ux-design-toronto
  └── /web-design-for-[industry] (7 niche pages)

E-Commerce Hub: /ecommerce-development-toronto
  ├── /shopify-ecommerce-website-design (NEW)
  ├── /best-ecommerce-platform-canada (NEW)
  ├── /ecommerce-website-cost-canada (NEW)
  └── Blog: best-ecommerce-website-builder-canada

Software Hub: /custom-software-development-toronto
  ├── /mobile-app-development-toronto
  └── Blog: what-is-cms-web-development
```

### 5.6 Related Services + Featured Case Studies Sections

Add to all service pages:
- "Related Services" grid (3 cards)
- "Featured Case Studies" section (1-2 relevant)

### 5.7 Visual Breadcrumbs

Create reusable `<Breadcrumbs>` component for all pages.

### 5.8 Sitemap Update

Add 13 new pages with appropriate priorities (0.6-0.8).

**File**: `src/app/sitemap.ts`

**Total internal linking changes**: ~35 files

---

## Section 6: Blog Content Strategy (Week 5-8)

### 6.1 New Blog Posts (8)

| # | Title | Target Keywords | Words |
|---|-------|-----------------|-------|
| 1 | "How Much Does a Website Cost in Toronto? 2026 Pricing Guide" | "website cost toronto" | 2500-3000 |
| 2 | "Best E-Commerce Platforms in Canada: 2026 Comparison" | "best ecommerce platform canada" | 2500-3000 |
| 3 | "Why Your Website Shows 'Not Secure' — And How to Fix It" | "not secure website" | 2000-2500 |
| 4 | "Custom Website vs Wix vs Shopify: Which Is Right for Your Business?" | "custom website vs wix" | 2500-3000 |
| 5 | "Top 10 Website Features Every Canadian Small Business Needs in 2026" | "website features small business" | 2000-2500 |
| 6 | "How AI Is Changing Web Development in 2026" | "ai web development" | 2000-2500 |
| 7 | "School Website Design: Complete Guide for Canadian Schools" | "school website design canada" | 2500-3000 |
| 8 | "SEO for Toronto Businesses: A Practical Guide to Ranking on Google" | "seo toronto" | 2500-3000 |

### 6.2 Update Existing Posts (5)

| Post | Action |
|------|--------|
| `/how-to-fix-not-secure-website-warning` | Add CTA to SSL services, update for 2026 |
| `/what-are-cookies-a-helpful-guide-to-computer-cookies` | Add CTA to privacy services |
| `/cost-to-build-ecommerce-website-canada` | Cross-link to new comparison post |
| `/best-ecommerce-website-builder-canada` | Cross-link to new comparison post |
| `/5-tips-for-choosing-the-right-website-development-company` | Add CTA to contact, update for 2026 |

### 6.3 Blog-to-Service Linking Map

```
Blog: "Website Cost Guide" → /web-design-toronto, /custom-software-development-toronto, /ecommerce-development-toronto
Blog: "Best E-Commerce Platforms" → /ecommerce-development-toronto, /shopify-development-toronto
Blog: "Not Secure Fix" → /seo-services-toronto, /web-design-toronto
Blog: "Custom vs Wix vs Shopify" → /web-design-toronto, /shopify-development-toronto, /wordpress-web-design-canada
```

**Total blog changes**: 13 (8 new + 5 updated)

---

## Section 7: Monitoring & Iteration (Ongoing)

### 7.1 Key Metrics

| Metric | Current | 30-Day Target | 90-Day Target |
|--------|---------|---------------|---------------|
| Total clicks | 11 | 50+ | 200+ |
| Total impressions | 1,674 | 3,000+ | 8,000+ |
| Avg CTR | 0.66% | 1.5% | 3%+ |
| Avg position | 42.5 | 35 | 25 |
| Service page positions | 33-56 | 25-40 | 15-25 |

### 7.2 Weekly Monitoring

1. Site Snapshot — clicks, impressions, CTR, position
2. Quick Wins — position 4-15 keywords
3. Content Gaps — new impression queries
4. Traffic Drops — pages losing ranking
5. Alerts — position drops, CTR collapses

### 7.3 Post-Launch Validation

After each phase, verify all items in the checklist.

### 7.4 Iteration Triggers

| Trigger | Action |
|---------|--------|
| Keyword drops 10+ positions | Investigate competitors, update content |
| New page doesn't index in 2 weeks | Check robots.txt, sitemap, canonical |
| CTR drops below 1% | Rewrite meta description, add rich snippets |
| Competitor outranks | Analyze their content, create better version |
| Blog gets 100+ clicks/month | Create dedicated service page |
| New high-impression queries | Create targeted content |

### 7.5 Phase 2 Content (Month 3+)

- Monthly blog posts (2-4)
- Quarterly content audits
- Backlink outreach
- Local SEO (Google Business Profile)
- AI/GEO optimization (llms.txt updates)

---

## Summary

| Phase | Timeline | Changes | Files |
|-------|----------|---------|-------|
| 1. Technical SEO Fixes | Week 1-2 | Metadata, canonicals, sitemap, robots.txt | ~15 |
| 2. On-Page Optimization | Week 1-2 | Meta descriptions, homepage, content depth | ~10 |
| 3. New Content Creation | Week 3-4 | 13 new pages | 13 |
| 4. Schema & Structured Data | Week 3-4 | Schema fixes + enhancements | ~30 |
| 5. Internal Linking | Week 5-6 | Navigation, footer, breadcrumbs, sitemap | ~35 |
| 6. Blog Content | Week 5-8 | 8 new posts + 5 updates | 13 |
| 7. Monitoring | Ongoing | Weekly checks, monthly reports | — |
| **Total** | **6-8 weeks** | **~120 file changes** | — |
