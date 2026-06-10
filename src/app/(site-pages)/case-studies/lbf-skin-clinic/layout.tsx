import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LBF Skin Clinic Case Study | Beeclue Tech",
  description: "Learn how Beeclue Tech built a strong and elegant digital presence for LBF Skin Clinic, including a custom WordPress website, logo design, and Google Business Profile optimization.",
  alternates: {
    canonical: "https://beeclue.com/case-studies/lbf-skin-clinic",
  },
};

export default function LbfSkinClinicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
