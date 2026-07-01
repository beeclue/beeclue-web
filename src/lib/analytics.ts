/**
 * Lightweight analytics event tracking utility.
 * Uses GA4 (gtag) already loaded via @next/third-parties/google.
 */

type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(command: string, ...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(command, ...args);
  }
}

export function trackEvent(eventName: string, params?: EventParams) {
  gtag("event", eventName, params);
}

// ── P0 Events ──────────────────────────────────────────────────────────

export function trackFormSubmit(formType: string, serviceName?: string) {
  trackEvent("form_submit", {
    form_type: formType,
    ...(serviceName ? { service: serviceName } : {}),
  });
}

export function trackCTAClick(ctaName: string, location: string) {
  trackEvent("cta_click", {
    cta_name: ctaName,
    location,
  });
}

export function trackPageView(pagePath: string) {
  trackEvent("page_view_custom", {
    page_path: pagePath,
  });
}

export function trackCaseStudyView(slug: string) {
  trackEvent("case_study_view", {
    case_study: slug,
  });
}

export function trackBlogView(slug: string) {
  trackEvent("blog_view", {
    blog: slug,
  });
}

export function trackServiceView(service: string) {
  trackEvent("service_view", {
    service,
  });
}

export function trackComparisonView() {
  trackEvent("comparison_page_view", {
    page: "custom-website-vs-wix",
  });
}
