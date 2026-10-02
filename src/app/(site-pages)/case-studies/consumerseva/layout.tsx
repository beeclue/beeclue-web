import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://beeclue.com/case-studies/consumerseva",
  },
  title: "Law Firm Website Design Case Study: Consumer Seva (Empower Legal LLP) | Beeclue",
  description: "See how Beeclue Tech built a high-performance WordPress web platform, logo design, legal blog content engine, and hosting for Consumer Seva & Empower Legal LLP.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
