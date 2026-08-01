import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Web Design Toronto | IDX & MLS",
  description:
    "Real estate websites in Toronto with MLS/IDX integration, virtual tours, and lead capture. Stand out in the competitive Toronto market.",
  alternates: {
    canonical: "https://beeclue.com/web-design-for-real-estate",
  },
  openGraph: {
    title: "Real Estate Web Design Toronto | IDX & MLS",
    description:
      "Real estate websites in Toronto with MLS/IDX integration, virtual tours, and lead capture. Stand out in the competitive Toronto market.",
    url: "https://beeclue.com/web-design-for-real-estate",
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
