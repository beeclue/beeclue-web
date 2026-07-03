"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackServiceView } from "@/lib/analytics";

function slugToName(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ServiceTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const slug = pathname.split("/").filter(Boolean).pop() || "";
    if (slug && slug !== "services") {
      trackServiceView(slugToName(slug));
    }
  }, [pathname]);

  return null;
}
