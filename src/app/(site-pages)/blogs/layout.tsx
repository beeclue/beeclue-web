import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://beeclue.com/blogs",
  },
  title: "Insights & Web Design Blogs",
  description: "Explore the Beeclue Tech blog for expert insights, practical tutorials, and industry news on luxury web design, SEO, and custom software development trends.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
