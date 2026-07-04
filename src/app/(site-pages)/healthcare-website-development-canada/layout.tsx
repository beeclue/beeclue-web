import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Website Development Canada | Medical Website Design | Beeclue",
  description:
    "Healthcare website development in Canada. HIPAA-compliant medical websites with patient portals, appointment booking, and secure forms.",
  openGraph: {
    title: "Healthcare Website Development Canada | Medical Website Design | Beeclue",
    description:
      "Healthcare website development in Canada. HIPAA-compliant medical websites with patient portals.",
    url: "https://beeclue.com/healthcare-website-development-canada",
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
