import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Law Firm Website Design Toronto & Canada | Attorney Web Development — Beeclue Tech",
  description:
    "Custom law firm website design and legal SEO for attorneys across Toronto & Canada. Built with LSO Rule 4.2 compliance, PIPEDA-secure client intake, and sub-second Next.js speed.",
  alternates: {
    canonical: "https://beeclue.com/web-design-for-law-firms",
  },
  keywords: [
    "law firm website design toronto",
    "web design for law firms",
    "lawyer website development canada",
    "legal seo agency toronto",
    "attorney website design ontario",
    "lso compliant lawyer websites",
    "personal injury law firm web design",
    "family law website design",
    "pipeda compliant legal intake forms"
  ],
  openGraph: {
    title: "Law Firm Website Design Toronto & Canada | Attorney Web Development — Beeclue Tech",
    description:
      "Custom law firm website design and legal SEO for attorneys across Toronto & Canada. Built with LSO Rule 4.2 compliance, PIPEDA-secure client intake, and sub-second Next.js speed.",
    url: "https://beeclue.com/web-design-for-law-firms",
    siteName: "Beeclue Tech",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Law Firm Website Design Toronto & Canada | Beeclue Tech",
    description:
      "Custom law firm website design and legal SEO for attorneys across Toronto & Canada. LSO Rule 4.2 compliant, PIPEDA-secure intake, and sub-second Next.js speed.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

