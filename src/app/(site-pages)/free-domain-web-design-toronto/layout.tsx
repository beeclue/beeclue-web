import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Domain Name & Custom Web Design Toronto | Beeclue Tech",
  description:
    "Get a 100% free premium domain name (.com/.ca), fast hosting, and award-winning custom web design in Toronto. Zero upfront setup.",
  alternates: {
    canonical: "https://beeclue.com/free-domain-web-design-toronto",
  },
  openGraph: {
    title: "Free Domain Name & Custom Web Design Toronto | Beeclue Tech",
    description:
      "Get a 100% free premium domain name (.com/.ca), fast hosting, and award-winning custom web design in Toronto. Zero upfront setup.",
    url: "https://beeclue.com/free-domain-web-design-toronto",
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
