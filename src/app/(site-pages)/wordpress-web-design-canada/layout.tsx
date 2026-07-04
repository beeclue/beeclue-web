import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress Web Design & Development in Canada | Beeclue Tech",
  description: "WordPress web design in Canada. Custom themes, WooCommerce, and performance optimization. Local Canadian hosting available.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
