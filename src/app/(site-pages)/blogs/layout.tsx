import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Blogs | Web Design & Tech News by Beeclue",
  description: "Explore the Beeclue Tech blog for expert insights, practical tutorials, and industry news on luxury web design, SEO, and custom software development trends.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
