import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development in Toronto | Beeclue Tech",
  description: "Streamline operations with expert custom software development in Toronto. We engineer highly scalable, secure, and modern digital platforms for your business.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
