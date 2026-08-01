import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress Web Design Canada",
  description: "WordPress web design in Canada. Custom themes, WooCommerce integration, headless Next.js architecture, and speed optimization. Get your free project quote.",
  alternates: {
    canonical: "https://beeclue.com/wordpress-web-design-canada",
  },
  openGraph: {
    title: "WordPress Web Design Canada",
    description: "WordPress web design in Canada. Custom themes, WooCommerce integration, headless Next.js architecture, and speed optimization.",
    url: "https://beeclue.com/wordpress-web-design-canada",
    siteName: "Beeclue Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Web Design Canada",
    description: "WordPress web design in Canada. Custom themes, WooCommerce integration, and performance optimization.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
