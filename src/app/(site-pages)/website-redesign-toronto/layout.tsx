import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Redesign Agency Toronto",
  description:
    "Professional website redesign in Toronto. Modernize your outdated website with better design, faster performance, and higher conversions.",
  alternates: {
    canonical: "https://beeclue.com/website-redesign-toronto",
  },
  openGraph: {
    title: "Website Redesign Agency Toronto",
    description:
      "Professional website redesign in Toronto. Modernize your outdated website with better design, faster performance, and higher conversions.",
    url: "https://beeclue.com/website-redesign-toronto",
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
