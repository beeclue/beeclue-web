import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Toronto Website Redesign & Web Development Agency | Beeclue",
  description:
    "Professional website redesign in Toronto. Modernize your outdated website with better design, faster performance, and higher conversions.",
  openGraph: {
    title:
      "Toronto Website Redesign & Web Development Agency | Beeclue",
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
