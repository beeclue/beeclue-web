"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackBlogView } from "@/lib/analytics";

function slugToName(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function BlogTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const slug = pathname.split("/").filter(Boolean).pop() || "";
    if (slug) {
      trackBlogView(slugToName(slug));
    }
  }, [pathname]);

  return null;
}
