"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Scissors,
  Stethoscope,
  UtensilsCrossed,
  Building2,
  Heart,
  Scale,
  HardHat,
  ArrowRight,
} from "lucide-react";
import styles from "@/app/page.module.css";

export interface IndustryItem {
  href: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const industries: IndustryItem[] = [
  {
    href: "/web-design-for-salons",
    title: "Web Design for Salons",
    description:
      "Booking-ready websites for salons, barbershops, and beauty professionals with online scheduling and portfolio showcases.",
    icon: Scissors,
  },
  {
    href: "/web-design-for-dental-clinics",
    title: "Web Design for Dental Clinics",
    description:
      "Patient-ready dental websites with appointment booking, smile galleries, and HIPAA-conscious design.",
    icon: Stethoscope,
  },
  {
    href: "/web-design-for-construction-companies",
    title: "Web Design for Construction",
    description:
      "Professional websites for contractors with project portfolios, quote forms, and lead capture systems.",
    icon: HardHat,
  },
  {
    href: "/web-design-for-restaurants",
    title: "Web Design for Restaurants",
    description:
      "Mouth-watering restaurant websites with online ordering, menu displays, and reservation systems.",
    icon: UtensilsCrossed,
  },
  {
    href: "/web-design-for-real-estate",
    title: "Web Design for Real Estate",
    description:
      "Property-focused real estate websites with MLS integration, virtual tours, and lead capture forms.",
    icon: Building2,
  },
  {
    href: "/web-design-for-healthcare",
    title: "Web Design for Healthcare",
    description:
      "HIPAA-conscious healthcare websites with patient portals, appointment booking, and provider directories.",
    icon: Heart,
  },
  {
    href: "/web-design-for-law-firms",
    title: "Web Design for Law Firms",
    description:
      "Professional law firm websites with case evaluation forms, attorney profiles, and practice area pages.",
    icon: Scale,
  },
];

export function IndustryList({ exclude }: { exclude?: string }) {
  const pathname = usePathname();
  const currentPath = exclude !== undefined ? exclude : pathname;

  const filteredIndustries = industries.filter((item) => {
    if (!currentPath) return true;
    const cleanCurrent = currentPath.replace(/\/$/, "");
    const cleanHref = item.href.replace(/\/$/, "");
    return cleanCurrent !== cleanHref;
  });

  return (
    <div className={styles.industriesGrid} style={{ width: "100%" }}>
      {filteredIndustries.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <Link key={index} href={item.href} className={styles.industryCard}>
            <IconComponent className={styles.industryIcon} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className={styles.learnMoreLink}>
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default IndustryList;
