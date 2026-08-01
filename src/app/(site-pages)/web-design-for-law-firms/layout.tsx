import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Law Firm Website Design Toronto | Legal SEO Agency | Beeclue",
  description:
    "Specialized law firm website design in Toronto. Build client trust with case evaluation forms, attorney profiles, and legal SEO engineered for high ROI.",
  alternates: {
    canonical: "https://beeclue.com/web-design-for-law-firms",
  },
  openGraph: {
    title: "Law Firm Website Design Toronto | Legal SEO Agency",
    description:
      "Specialized law firm website design in Toronto. Build client trust with case evaluation forms, attorney profiles, and legal SEO engineered for high ROI.",
    url: "https://beeclue.com/web-design-for-law-firms",
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
