import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Gallery & Custom Framing Web Design | Luxury Digital Experiences — Beeclue Tech",
  description:
    "Bespoke web design and local SEO for fine art galleries, custom picture framing shops, and art restoration studios. Showcase exhibitions, artist rosters, and custom framing consultations with editorial digital design.",
  alternates: {
    canonical: "https://beeclue.com/web-design-for-art-galleries",
  },
  openGraph: {
    title: "Art Gallery & Custom Framing Web Design | Luxury Digital Experiences — Beeclue Tech",
    description:
      "Bespoke web design and local SEO for fine art galleries, custom picture framing shops, and art restoration studios. Showcase exhibitions, artist rosters, and custom framing consultations with editorial digital design.",
    url: "https://beeclue.com/web-design-for-art-galleries",
    siteName: "Beeclue Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Art Gallery & Custom Framing Web Design | Beeclue Tech",
    description:
      "Bespoke web design and local SEO for fine art galleries and custom picture framing studios. Turn art enthusiasts and interior designers into high-ticket clients.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
