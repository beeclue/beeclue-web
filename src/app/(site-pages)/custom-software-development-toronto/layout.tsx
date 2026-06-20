import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development in Toronto | Beeclue Tech",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
