import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best E-Commerce Platform Canada: 2026 Review | Beeclue",
  description:
    "Compare the best e-commerce platforms in Canada for 2026. Shopify vs WooCommerce vs custom solutions — features, pricing, and expert recommendations.",
  openGraph: {
    title: "Best E-Commerce Platform Canada: 2026 Review | Beeclue",
    description:
      "Compare the best e-commerce platforms in Canada for 2026. Shopify vs WooCommerce vs custom solutions — features, pricing, and expert recommendations.",
    url: "https://beeclue.com/best-ecommerce-platform-canada",
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
