import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LBF Skin Clinic - E-Commerce Case Study",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
