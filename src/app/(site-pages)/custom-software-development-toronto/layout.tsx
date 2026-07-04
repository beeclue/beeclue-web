import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development in Toronto | Beeclue Tech",
  description: "Custom software development in Toronto. Web apps, APIs, dashboards, and enterprise solutions. 10+ years of experience.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
