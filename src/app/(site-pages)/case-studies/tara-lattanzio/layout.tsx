import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tara Lattanzio Law Case Study",
  description: "Discover how Beeclue Tech built a compassionate, high-converting Next.js website for Tara Lattanzio Family Law in Waterloo Region, Ontario.",
  alternates: {
    canonical: "https://beeclue.com/case-studies/tara-lattanzio",
  },
  openGraph: {
    title: "Tara Lattanzio Law Case Study",
    description: "Discover how Beeclue Tech built a compassionate, high-converting Next.js website for Tara Lattanzio Family Law.",
    url: "https://beeclue.com/case-studies/tara-lattanzio",
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
