import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Beeclue Tech | Top Toronto Web Design & Software Agency",
  description: "Meet the elite engineers and designers at Beeclue Tech. We build high-performance web applications, custom software, and digital brands that drive massive growth.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
