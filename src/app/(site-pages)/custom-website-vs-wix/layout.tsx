import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Website vs Wix: Why Custom Development Wins for Canadian Businesses | Beeclue",
  description: "Compare custom website development vs Wix. Learn why Canadian businesses choose custom solutions for scalability, SEO, and brand control.",
  openGraph: {
    title: "Custom Website vs Wix: Why Custom Development Wins for Canadian Businesses | Beeclue",
    description: "Compare custom website development vs Wix. Learn why Canadian businesses choose custom solutions for scalability, SEO, and brand control.",
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
