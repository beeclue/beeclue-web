import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services in Toronto | Beeclue Tech",
  description: "Deliver exceptional user experiences with our premium UI/UX design services in Toronto. We craft highly intuitive, engaging, and beautiful digital interfaces.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
