import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio & Case Studies | Beeclue Tech",
  description: "Browse our extensive portfolio of successful digital transformations, innovative custom software builds, and luxury web designs for businesses across Canada.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
