# Beeclue Web Design System

This document outlines the core design system, CSS variables, typography, layouts, and reusable components for the Beeclue website.

## 1. Global CSS Variables (`src/app/globals.css`)
Our theme uses a deeply dark "obsidian" mode layout.

- **Primary Colors:** 
  - `--primary`: `#004d99` (Deep blue)
  - `--primary-light`: `#3385ff` (Vibrant blue accent)
- **Backgrounds & Text:**
  - `--background`: `#050505` (Obsidian black)
  - `--foreground`: `#f4f4f5` (Off-white text)
- **Accents:**
  - `--muted`: `#a1a1aa` (Muted gray text)
  - `--border`: `#27272a` (Subtle dark borders)

## 2. Typography
- **Headings (`h1` - `h6`)**: `var(--font-outfit)`, semi-bold (600 weight).
- **Body**: `var(--font-inter)`, regular sans-serif.

## 3. Core Layout Classes (`src/app/page.module.css`)

When building new pages, ALWAYS reuse these CSS module classes instead of writing custom inline styles:

- **`.baseSection`**: The standard section container. Applies consistent padding (`15vh 5vw`) and maximum layout width constraints.
- **`.servicesHeader`**: The standard layout for section titles and subtitles (typically an `h2` and a `p` tag), left-aligned with appropriate bottom spacing.
- **`.valueGrid` / `.valueItem`**: A standard CSS Grid layout used for feature lists or "Why Choose Us" sections.
- **`.scroller` / `.serviceCard`**: A horizontally scrolling layout containing bordered cards with hover effects, typically used for listing services or related pages.
- **`.testimonialsSection` / `.testimonialScroller` / `.testimonialCard`**: Pre-styled layouts for client reviews and testimonials.
- **`.ctaButton`**: Standard primary button styling with gradient borders and hover animations.

## 4. Reusable React Components (`src/components/`)

Whenever a new page or feature is built, reuse these components before recreating logic:

- **`<AnimationProvider>`**: Context provider for global animations.
- **`<BackgroundScene>` / `<Scene>`**: Used for complex 3D header backgrounds.
- **`<BlogAuthorBox>`**: Standard author attribution block (must be at the bottom of all blog posts).
- **`<BlogTracker>`, `<CaseStudyTracker>`, `<ServiceTracker>`**: Client-side tracking components to log view analytics or update recently viewed states for specific content types.
- **`<CustomCursor>`**: Provides the global animated cursor.
- **`<FadeIn>`**: Wrap sections in `<FadeIn>` to ensure consistent scroll-triggered reveal animations.
- **`<FaqAccordion faqs={faqs}>`**: Use for Frequently Asked Questions.
- **`<Footer>`**: The global site footer.
- **`<FreeSEOReportModal>`**: A popup modal designed to capture leads by offering a free SEO report.
- **`<GlobalLogo>`**: The standard Beeclue logo component.
- **`<IndustryList>`**: A reusable, animated marquee/list of industries served.
- **`<LawFirmAuditForm>`**: Lead generation form specific to law firm audits.
- **`<LawFirmCalculator>`**: ROI or cost calculator specific to law firm services.
- **`<Navigation>`**: The global site header and navigation menu.
- **`<Newsletter>`**: Reusable newsletter subscription form.
- **`<ReviewsMeta campaign="...">`**: Use above testimonial sections to show aggregate ratings.
- **`<SmoothScroll>`**: Wraps the layout to provide Lenis smooth scrolling.

## 5. Design Guidelines for Agents
- **Don't touch horizontal padding**: Rely on `.baseSection` to provide left and right padding (`5vw`). If you use inline `padding`, only overwrite `paddingTop` or `paddingBottom`.
- **Center alignments require intent**: Most content (like `.servicesHeader`) is left-aligned. Only center elements if it specifically mimics a confirmed pattern (like the Footer CTA blocks).
- **Use Lucide Icons**: Import icons from `lucide-react` and size them appropriately (e.g., `size={32}` or `size={48}` for headers) colored with `var(--primary-light)`.
