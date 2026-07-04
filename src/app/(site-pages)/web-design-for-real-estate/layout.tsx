import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Real Estate Website Design Toronto | IDX Integration & Lead Capture | Beeclue",
  description:
    "Real estate websites in Toronto with MLS/IDX integration, virtual tours, and lead capture. Stand out in the competitive Toronto market.",
  openGraph: {
    title:
      "Real Estate Website Design Toronto | IDX Integration & Lead Capture | Beeclue",
    description:
      "Real estate websites in Toronto with MLS/IDX integration, virtual tours, and lead capture. Stand out in the competitive Toronto market.",
    url: "https://beeclue.com/web-design-for-real-estate",
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
