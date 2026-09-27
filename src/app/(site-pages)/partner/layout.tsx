import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agency & Business Manager Partner Program | 20% Referral Commission — Beeclue Tech",
  description:
    "Partner with Beeclue Tech. Earn 20% commission on every web design, Shopify, and custom development referral, or white-label our development team for your agency and clients.",
  alternates: {
    canonical: "https://beeclue.com/partner",
  },
  openGraph: {
    title: "Agency & Business Manager Partner Program | 20% Commission — Beeclue Tech",
    description:
      "Earn 20% commission on web design and development referrals with zero fulfillment headaches. White-label or referral tracks for business managers, consultants, and creators.",
    url: "https://beeclue.com/partner",
    siteName: "Beeclue Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beeclue Partner Program | 20% Referral Commission",
    description:
      "Partner with Beeclue Tech. Earn 20% commission on web design and development referrals with zero fulfillment headaches.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
