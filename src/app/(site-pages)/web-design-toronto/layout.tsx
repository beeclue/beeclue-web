import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Web Design Services in Toronto | Beeclue Tech",
  description: "Elevate your brand with Beeclue Tech's luxury web design services in Toronto. We build lightning-fast, high-converting, and stunning Next.js business sites.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
