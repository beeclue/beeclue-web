import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software, Mobile Apps & Web Design Services",
  description: "Dominate your market with our elite digital services. From custom enterprise software and high-conversion web design to advanced SEO strategies, we scale your revenue.",
  alternates: {
    canonical: "https://beeclue.com/services",
  },
  openGraph: {
    title: "Custom Software, Mobile Apps & Web Design Services",
    description: "Dominate your market with our elite digital services. Enterprise software, web design, and SEO.",
    url: "https://beeclue.com/services",
    siteName: "Beeclue Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software, Mobile Apps & Web Design Services",
    description: "Dominate your market with our elite digital services.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
