import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Law Firm Website Design Toronto | Turn Visitors Into Retained Clients — Beeclue Tech",
  description:
    "Specialized law firm website design and attorney web development in Toronto & North America. Engineered with confidential client intake, mobile speed, and legal SEO to retain more clients.",
  alternates: {
    canonical: "https://beeclue.com/web-design-for-law-firms",
  },
  openGraph: {
    title: "Law Firm Website Design Toronto | Turn Visitors Into Retained Clients — Beeclue Tech",
    description:
      "Specialized law firm website design and attorney web development in Toronto & North America. Engineered with confidential client intake, mobile speed, and legal SEO to retain more clients.",
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

