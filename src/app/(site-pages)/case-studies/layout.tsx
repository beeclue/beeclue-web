import { Metadata } from "next";
import CaseStudyTracker from "@/components/CaseStudyTracker";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://beeclue.com/case-studies",
  },
  title: "Our Portfolio & Case Studies",
  description: "Browse our extensive portfolio of successful digital transformations, innovative custom software builds, and luxury web designs for businesses across Canada.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CaseStudyTracker />
      {children}
    </>
  );
}
