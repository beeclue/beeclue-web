import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services in Toronto | Beeclue Tech",
  description: "Transform your idea into reality with Beeclue Tech's premium mobile app development services in Toronto. We build exceptional native and cross-platform apps.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
