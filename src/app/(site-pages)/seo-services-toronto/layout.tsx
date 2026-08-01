import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services Toronto | Technical Audits & Search Optimization",
  description: "SEO services in Toronto that deliver measurable organic growth. Technical SEO audits, content strategy, link building, and local search optimization.",
  alternates: {
    canonical: "https://beeclue.com/seo-services-toronto",
  },
  openGraph: {
    title: "SEO Services Toronto | Technical Audits & Search Optimization",
    description: "SEO services in Toronto that deliver measurable organic growth. Technical SEO audits, content strategy, and local search optimization.",
    url: "https://beeclue.com/seo-services-toronto",
    siteName: "Beeclue Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services Toronto | Technical Audits & Search Optimization",
    description: "SEO services in Toronto that deliver measurable organic growth.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
