import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Toronto Digital Marketing Agency & SEO Services | Beeclue",
  description:
    "Digital marketing services in Toronto. SEO, PPC, social media marketing, and content strategy. Data-driven campaigns that deliver ROI.",
  alternates: {
    canonical: "https://beeclue.com/digital-marketing-toronto",
  },
  openGraph: {
  title: "Toronto Digital Marketing Agency & SEO Services | Beeclue",
    description:
      "Digital marketing services in Toronto. SEO, PPC, social media marketing, and content strategy.",
    url: "https://beeclue.com/digital-marketing-toronto",
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
