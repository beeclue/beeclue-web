import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Web Design Services in Toronto | Beeclue Tech",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
