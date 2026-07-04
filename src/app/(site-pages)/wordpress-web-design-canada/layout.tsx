import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress Web Design & Development in Canada | Beeclue Tech",
  description: "WordPress web design in Canada. Custom themes, WooCommerce integration, and performance optimization. Fast, reliable Canadian hosting available for your site.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
