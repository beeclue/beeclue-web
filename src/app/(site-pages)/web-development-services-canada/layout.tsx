import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Web Development Services Canada | Nationwide Digital Solutions | Beeclue",
  description:
    "Professional web development services across Canada. Custom websites, e-commerce, and software solutions for businesses from coast to coast.",
  openGraph: {
    title:
      "Web Development Services Canada | Nationwide Digital Solutions | Beeclue",
    description:
      "Professional web development services across Canada. Custom websites, e-commerce, and software solutions.",
    url: "https://beeclue.com/web-development-services-canada",
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
