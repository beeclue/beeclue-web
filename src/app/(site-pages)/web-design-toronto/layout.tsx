import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Agency Toronto",
  description: "Custom web design in Toronto that converts. Responsive, SEO-optimized websites built with React, Next.js, and modern frameworks. Get a free quote.",
  alternates: {
    canonical: "https://beeclue.com/web-design-toronto",
  },
  openGraph: {
    title: "Web Design Agency Toronto",
    description: "Custom web design in Toronto that converts. Responsive, SEO-optimized websites built with React, Next.js, and modern frameworks.",
    url: "https://beeclue.com/web-design-toronto",
    siteName: "Beeclue Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Agency Toronto",
    description: "Custom web design in Toronto that converts. Responsive, SEO-optimized websites built with React, Next.js, and modern frameworks.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
