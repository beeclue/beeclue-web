import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Digital Marketing Services in Toronto | Beeclue Tech",
  description: "SEO services in Toronto that deliver measurable results. Technical SEO audits, content strategy, and local search optimization. Get your free SEO audit today.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
