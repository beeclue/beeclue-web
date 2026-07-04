import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Development in Toronto | Shopify Experts | Beeclue Tech",
  description: "E-commerce development in Toronto. Custom Shopify, WooCommerce, and headless solutions. Increase your online sales with a high-converting store.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
