import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monexa | Personal Finance Manager built by Beeclue Tech",
  description: "Take total control of your personal finances with Monexa, a beautifully simple and highly powerful expense manager and budgeting tool built by Beeclue Tech.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
