import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Beeclue Tech | Toronto Web Design Agency",
  description: "Discover Beeclue Tech, a leading Toronto digital agency specializing in luxury web design, custom software engineering, and innovative mobile applications.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
