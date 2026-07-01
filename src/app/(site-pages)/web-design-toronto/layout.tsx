import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Web Design Agency Toronto | Custom & E-Commerce Web Design",
  description: "Award-winning web design agency in Toronto specializing in custom WordPress, Shopify, and Next.js sites that drive traffic and conversions. Get a free quote!",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
