import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Beeclue Tech | Toronto Web Design Agency",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
