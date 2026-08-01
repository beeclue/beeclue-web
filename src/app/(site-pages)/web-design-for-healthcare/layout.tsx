import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Healthcare Website Design Toronto | Patient-Centered Medical Sites | Beeclue",
  description:
    "Healthcare and medical practice websites in Toronto. Appointment booking, patient portals, and HIPAA-compliant solutions.",
  alternates: {
    canonical: "https://beeclue.com/web-design-for-healthcare",
  },
  openGraph: {
    title:
      "Healthcare Website Design Toronto | Patient-Centered Medical Sites | Beeclue",
    description:
      "Healthcare and medical practice websites in Toronto. Appointment booking, patient portals, and HIPAA-compliant solutions.",
    url: "https://beeclue.com/web-design-for-healthcare",
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
