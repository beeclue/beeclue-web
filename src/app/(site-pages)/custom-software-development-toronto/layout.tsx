import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development in Toronto | Beeclue Tech",
  description: "Custom software development in Toronto. Web apps, APIs, dashboards, and enterprise solutions built with 10+ years of proven expertise. Get your free quote.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
