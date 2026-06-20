import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Digital Services | Web, Mobile & Custom Software",
  description: "Explore Beeclue Tech's premium digital services, including luxury web design, custom software engineering, mobile app development, and technical SEO strategies.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
