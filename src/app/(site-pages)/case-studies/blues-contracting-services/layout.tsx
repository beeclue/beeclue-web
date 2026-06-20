import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blues Contracting Services - Digital Transformation Case Study",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
