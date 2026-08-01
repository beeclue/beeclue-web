import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Development Toronto | Shopify & Custom Online Stores",
  description: "E-commerce development in Toronto. Custom Shopify, WooCommerce, and headless commerce solutions. Build a high-converting online store that drives real sales.",
  alternates: {
    canonical: "https://beeclue.com/ecommerce-development-toronto",
  },
  openGraph: {
    title: "E-Commerce Development Toronto | Shopify & Custom Online Stores",
    description: "E-commerce development in Toronto. Custom Shopify, WooCommerce, and headless commerce solutions. Build a high-converting online store.",
    url: "https://beeclue.com/ecommerce-development-toronto",
    siteName: "Beeclue Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Development Toronto | Shopify & Custom Online Stores",
    description: "E-commerce development in Toronto. Custom Shopify, WooCommerce, and headless commerce solutions.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
