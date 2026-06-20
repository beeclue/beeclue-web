import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blues Contracting Services - Digital Transformation Case Study",
  description: "Read exactly how Beeclue Tech completely revitalized the digital web presence for Blues Contracting Services using modern Next.js and advanced technical SEO.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
