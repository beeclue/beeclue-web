import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Website vs Wix Comparison",
  description: "Compare custom website development vs Wix. Learn why Canadian businesses choose custom solutions for scalability, SEO, performance, and brand control.",
  alternates: {
    canonical: "https://beeclue.com/custom-website-vs-wix",
  },
  openGraph: {
    title: "Custom Website vs Wix Comparison",
    description: "Compare custom website development vs Wix. Learn why Canadian businesses choose custom solutions for scalability, SEO, performance, and brand control.",
    url: "https://beeclue.com/custom-website-vs-wix",
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
