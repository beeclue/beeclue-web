import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tara Lattanzio Family Law - Digital Transformation Case Study | Beeclue Tech",
  description: "Discover how Beeclue Tech built a compassionate, high-converting Next.js website for Tara Lattanzio Family Law in Waterloo Region, Ontario, driving client trust and consultations.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
