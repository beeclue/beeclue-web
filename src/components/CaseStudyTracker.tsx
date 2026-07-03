"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackCaseStudyView } from "@/lib/analytics";

function slugToName(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function CaseStudyTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const slug = pathname.split("/").filter(Boolean).pop() || "";
    if (slug && slug !== "case-studies") {
      trackCaseStudyView(slugToName(slug));
    }
  }, [pathname]);

  return null;
}
