import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Toronto | Data-Driven Marketing Solutions | Beeclue",
  description:
    "Digital marketing services in Toronto. SEO, PPC, social media marketing, and content strategy. Data-driven campaigns that deliver ROI.",
  openGraph: {
    title: "Digital Marketing Toronto | Data-Driven Marketing Solutions | Beeclue",
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
