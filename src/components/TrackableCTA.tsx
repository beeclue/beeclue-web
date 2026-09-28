"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

interface TrackableCTAProps {
  href: string;
  ctaName: string;
  location: string;
  className?: string;
  children: React.ReactNode;
}

export default function TrackableCTA({
  href,
  ctaName,
  location,
  className,
  children,
}: TrackableCTAProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackCTAClick(ctaName, location)}
    >
      {children}
    </Link>
  );
}
