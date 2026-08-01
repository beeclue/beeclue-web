import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Law Firm Website Design Toronto | Legal SEO",
  description:
    "Law firm websites in Toronto with case evaluation forms, attorney profiles, and SEO to attract high-value clients.",
  alternates: {
    canonical: "https://beeclue.com/web-design-for-law-firms",
  },
  openGraph: {
    title: "Law Firm Website Design Toronto | Legal SEO",
    description:
      "Law firm websites in Toronto with case evaluation forms, attorney profiles, and SEO to attract high-value clients.",
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
