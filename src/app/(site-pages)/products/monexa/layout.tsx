import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monexa | Take Control of Your Finances",
  description: "Monexa by Beeclue Tech is the simple, beautiful, and powerful way to track expenses, manage budgets, and achieve your financial goals.",
  alternates: {
    canonical: "https://beeclue.com/products/monexa",
  },
};

export default function MonexaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
