import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Beeclue Tech | Get a Free Consultation",
  description: "Contact Beeclue Tech for a free consultation today. Let our experts help your Toronto business scale through custom software and premium web design services.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
