import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Website Cost Canada: 2026 Pricing Guide | Beeclue",
  description:
    "How much does an e-commerce website cost in Canada? Complete 2026 pricing guide with breakdowns for Shopify, WooCommerce, and custom solutions.",
  alternates: {
    canonical: "https://beeclue.com/ecommerce-website-cost-canada",
  },
  openGraph: {
    title: "Ecommerce Website Cost Canada: 2026 Pricing Guide | Beeclue",
    description:
      "How much does an e-commerce website cost in Canada? Complete 2026 pricing guide.",
    url: "https://beeclue.com/ecommerce-website-cost-canada",
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
