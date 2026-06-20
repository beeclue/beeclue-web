import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services in Toronto | Beeclue Tech",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
