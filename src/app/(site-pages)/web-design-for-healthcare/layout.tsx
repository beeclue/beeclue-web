import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare & Medical Web Design Toronto",
  description:
    "Healthcare and medical practice websites in Toronto. Appointment booking, patient portals, and HIPAA-compliant solutions.",
  alternates: {
    canonical: "https://beeclue.com/web-design-for-healthcare",
  },
  openGraph: {
    title: "Healthcare & Medical Web Design Toronto",
    description:
      "Healthcare and medical practice websites in Toronto. Appointment booking, patient portals, and HIPAA-compliant solutions.",
    url: "https://beeclue.com/web-design-for-healthcare",
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
