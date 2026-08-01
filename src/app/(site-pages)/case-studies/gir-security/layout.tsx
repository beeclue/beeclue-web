import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://beeclue.com/case-studies/gir-security",
  },
  title: "Gir Security - Web Experience Case Study",
  description: "Discover how Beeclue Tech completely transformed Gir Security's online presence with a modern, blazing-fast, and highly secure corporate web experience.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
