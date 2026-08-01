import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://beeclue.com/case-studies/lbf-skin-clinic",
  },
  title: "LBF Skin Clinic - E-Commerce Case Study",
  description: "See exactly how the experts at Beeclue Tech designed and developed a stunning, high-converting, and blazing-fast e-commerce platform for LBF Skin Clinic.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
