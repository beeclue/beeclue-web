import { Metadata } from "next";

export const metadata: Metadata = {
  title: "G.I.R Security Case Study | Beeclue Tech",
  description: "Learn how Beeclue Tech transformed G.I.R Security's digital presence with a custom web platform, career portal, and modern branding.",
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
