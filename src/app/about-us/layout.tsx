import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Beeclue Tech",
  description: "Beeclue Tech is a digital development agency helping businesses build powerful websites, scalable software systems, and mobile applications across Toronto.",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
