import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Digital Marketing Services in Toronto | Beeclue Tech",
  description: "SEO services in Toronto that drive real results. Technical SEO, content strategy, and local search optimization. Free SEO audit available.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
