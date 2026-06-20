import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Development in Toronto | Shopify Experts | Beeclue Tech",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
