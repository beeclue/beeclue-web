import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Website Development Toronto | Beeclue",
  description:
    "Real estate website development in Toronto. MLS/IDX integration, virtual tours, lead capture, and property listings. Stand out in the Toronto market.",
  openGraph: {
    title: "Real Estate Website Development Toronto | Beeclue",
    description:
      "Real estate website development in Toronto. MLS/IDX integration, virtual tours, and lead capture.",
    url: "https://beeclue.com/real-estate-website-development-toronto",
    siteName: "Beeclue",
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