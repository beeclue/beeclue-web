import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Digital Services | Web, Mobile & Custom Software",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
