import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Company Web Design Toronto",
  description:
    "Professional construction company websites in Toronto. Project portfolios, quote request forms, and SEO to dominate local search.",
  alternates: {
    canonical: "https://beeclue.com/web-design-for-construction-companies",
  },
  openGraph: {
    title: "Construction Company Web Design Toronto",
    description:
      "Professional construction company websites in Toronto. Project portfolios, quote request forms, and SEO to dominate local search.",
    url: "https://beeclue.com/web-design-for-construction-companies",
    siteName: "Beeclue Tech",
    type: "website",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
