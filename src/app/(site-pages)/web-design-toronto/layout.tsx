import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Web Design Agency Toronto | Custom & E-Commerce Web Design",
  description: "Custom web design in Toronto that converts. Responsive, SEO-optimized websites built with React, Next.js, and modern frameworks. Get a free quote.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
