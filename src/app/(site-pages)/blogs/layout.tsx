import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Blogs | Web Design & Tech News by Beeclue",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
