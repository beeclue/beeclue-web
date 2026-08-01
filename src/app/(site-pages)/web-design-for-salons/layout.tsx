import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salon Website Design Toronto | Book More Clients Online | Beeclue",
  description:
    "Professional salon and barbershop website design in Toronto. Online booking, portfolio galleries, and SEO that brings local clients to your chair.",
  alternates: {
    canonical: "https://beeclue.com/web-design-for-salons",
  },
  openGraph: {
    title: "Salon Website Design Toronto | Book More Clients Online | Beeclue",
    description:
      "Professional salon and barbershop website design in Toronto. Online booking, portfolio galleries, and SEO that brings local clients to your chair.",
    url: "https://beeclue.com/web-design-for-salons",
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
