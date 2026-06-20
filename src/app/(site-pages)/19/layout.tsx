import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Website Design – Only $19/Month | Beeclue Tech",
  description: "Get a premium, fully managed, and highly optimized website for just $19/month. Affordable, professional web design built by experts for small businesses.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
