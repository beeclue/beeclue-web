import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dental Clinic Web Design Toronto",
  description:
    "Custom dental clinic websites in Toronto with online booking, patient portals, and HIPAA-compliant forms. Convert more visitors into appointments.",
  alternates: {
    canonical: "https://beeclue.com/web-design-for-dental-clinics",
  },
  openGraph: {
    title:
      "Dental Clinic Web Design Toronto",
    description:
      "Custom dental clinic websites in Toronto with online booking, patient portals, and HIPAA-compliant forms. Convert more visitors into appointments.",
    url: "https://beeclue.com/web-design-for-dental-clinics",
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
