import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Website Redesign Toronto | Modernize Your Online Presence | Beeclue",
  description:
    "Professional website redesign in Toronto. Modernize your outdated website with better design, faster performance, and higher conversions.",
  openGraph: {
    title:
      "Website Redesign Toronto | Modernize Your Online Presence | Beeclue",
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
