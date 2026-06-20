import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Website Design – Only $19/Month | Beeclue Tech",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
