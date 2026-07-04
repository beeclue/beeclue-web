import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Construction Company Website Design Toronto | Showcase Your Projects | Beeclue",
  description:
    "Professional construction company websites in Toronto. Project portfolios, quote request forms, and SEO to dominate local search.",
  openGraph: {
    title:
      "Construction Company Website Design Toronto | Showcase Your Projects | Beeclue",
    description:
      "Professional construction company websites in Toronto. Project portfolios, quote request forms, and SEO to dominate local search.",
    url: "https://beeclue.com/web-design-for-construction-companies",
    siteName: "Beeclue",
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
