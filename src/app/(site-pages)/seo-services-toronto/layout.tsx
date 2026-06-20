import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Digital Marketing Services in Toronto | Beeclue Tech",
  description: "Dominate search engine rankings with our advanced technical SEO and digital marketing services in Toronto. We drive massive organic traffic and conversions.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
