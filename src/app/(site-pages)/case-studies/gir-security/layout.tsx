import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gir Security - Web Experience Case Study",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
