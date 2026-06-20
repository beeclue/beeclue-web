import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monexa | Personal Finance Manager built by Beeclue Tech",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
