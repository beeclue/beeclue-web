import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dental Website Design Toronto | High-Converting Dental Web Design | Beeclue",
  description:
    "Top-rated dental website design in Toronto with online booking, patient portal integration, and local dental SEO. Turn searchers into new patient appointments.",
  alternates: {
    canonical: "https://beeclue.com/web-design-for-dental-clinics",
  },
  openGraph: {
    title:
      "Dental Website Design Toronto | High-Converting Dental Web Design",
    description:
      "Top-rated dental website design in Toronto with online booking, patient portal integration, and local dental SEO. Turn searchers into new patient appointments.",
    url: "https://beeclue.com/web-design-for-dental-clinics",
    siteName: "Beeclue Tech",
    type: "website",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
