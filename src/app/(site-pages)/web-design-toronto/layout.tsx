import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Toronto | Custom Websites Built to Convert — Beeclue Tech",
  description: "Custom web design and Next.js development in Toronto. We build high-speed, SEO-optimized business websites engineered to rank on Google and turn visitors into paying clients.",
  alternates: {
    canonical: "https://beeclue.com/web-design-toronto",
  },
  openGraph: {
    title: "Web Design Toronto | Custom Websites Built to Convert — Beeclue Tech",
    description: "Custom web design and Next.js development in Toronto. We build high-speed, SEO-optimized business websites engineered to rank on Google and turn visitors into paying clients.",
    url: "https://beeclue.com/web-design-toronto",
    siteName: "Beeclue Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Toronto | Custom Websites Built to Convert — Beeclue Tech",
    description: "Custom web design and Next.js development in Toronto. We build high-speed, SEO-optimized business websites engineered to rank on Google and turn visitors into paying clients.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
