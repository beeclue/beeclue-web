import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify E-Commerce Website Design | Custom Shopify Stores | Beeclue",
  description:
    "Professional Shopify e-commerce website design. Custom themes, product pages, and checkout optimization. Convert more visitors into paying customers.",
  openGraph: {
    title: "Shopify E-Commerce Website Design | Custom Shopify Stores | Beeclue",
    description:
      "Professional Shopify e-commerce website design. Custom themes, product pages, and checkout optimization.",
    url: "https://beeclue.com/shopify-ecommerce-website-design",
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
