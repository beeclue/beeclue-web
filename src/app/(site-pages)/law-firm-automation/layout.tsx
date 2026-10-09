import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Law Firm Practice Workflow Automation | Legal Intake & Scheduling — Beeclue Tech",
  description:
    "Automate your law firm's daily operations. Turnkey legal workflow automations: 24/7 intelligent client intake, calendar sync, automated retainer e-signatures, document collection, and Google review generation.",
  alternates: {
    canonical: "https://beeclue.com/law-firm-automation",
  },
  openGraph: {
    title: "Law Firm Practice Workflow Automation | Legal Intake & Scheduling — Beeclue Tech",
    description:
      "Automate your law firm's daily operations. Turnkey legal workflow automations: 24/7 intelligent client intake, calendar sync, automated retainer e-signatures, document collection, and Google review generation.",
    url: "https://beeclue.com/law-firm-automation",
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
