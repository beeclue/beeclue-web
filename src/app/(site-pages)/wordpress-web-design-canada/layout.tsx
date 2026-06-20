import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress Web Design & Development in Canada | Beeclue Tech",
  description: "Get a professional, blazing-fast, and easy-to-manage website with our expert WordPress web design and development services available to businesses in Canada.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
