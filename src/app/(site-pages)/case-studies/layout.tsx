import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Beeclue Tech",
  description: "Explore our featured case studies and see how Beeclue Tech delivers custom digital solutions, software, and websites for our clients.",
  alternates: {
    canonical: "https://beeclue.com/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
