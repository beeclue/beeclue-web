import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development Toronto | Enterprise Web Apps & APIs",
  description: "Custom software development in Toronto. Web apps, APIs, dashboards, and enterprise solutions built with modern technology stacks. Get a free consultation.",
  alternates: {
    canonical: "https://beeclue.com/custom-software-development-toronto",
  },
  openGraph: {
    title: "Custom Software Development Toronto | Enterprise Web Apps & APIs",
    description: "Custom software development in Toronto. Web apps, APIs, dashboards, and enterprise solutions built with modern technology stacks.",
    url: "https://beeclue.com/custom-software-development-toronto",
    siteName: "Beeclue Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Toronto | Enterprise Web Apps & APIs",
    description: "Custom software development in Toronto. Web apps, APIs, dashboards, and enterprise solutions built with modern technology stacks.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
