import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress Web Design & Development in Canada | Beeclue Tech",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
