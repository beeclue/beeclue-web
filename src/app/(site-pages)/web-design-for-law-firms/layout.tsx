import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Law Firm Website Design & Attorney Web Development | Toronto & US | Beeclue",
  description:
    "Specialized law firm website design and attorney web development in Toronto & North America. Establishes legal authority, client intake forms, and high-ROI legal SEO.",
  alternates: {
    canonical: "https://beeclue.com/web-design-for-law-firms",
  },
  openGraph: {
    title: "Law Firm Website Design & Attorney Web Development | Toronto & US",
    description:
      "Specialized law firm website design and attorney web development in Toronto & North America. Establishes legal authority, client intake forms, and high-ROI legal SEO.",
    url: "https://beeclue.com/web-design-for-law-firms",
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

