import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://beeclue.com/contact",
  },
  title: "Contact Beeclue Tech | Hire Top Toronto Software Developers",
  description: "Ready to scale? Contact Beeclue Tech for a free digital consultation. Hire our expert Toronto web designers and software engineers to build your custom platform today.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
