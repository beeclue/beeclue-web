import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Development in Toronto | Shopify Experts | Beeclue Tech",
  description: "Boost your online sales today with expert e-commerce development services in Toronto. We specialize in custom Shopify and high-performance Next.js storefronts.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
