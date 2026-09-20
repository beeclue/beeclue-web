import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development Cost in Toronto (2026 Price Guide & Breakdown) | Beeclue",
  description:
    "How much does website development cost in Toronto in 2026? Compare real agency pricing, freelancer rates, hourly benchmarks, and ROI for GTA businesses.",
  alternates: {
    canonical: "https://beeclue.com/website-development-cost-toronto",
  },
  openGraph: {
    title: "Website Development Cost in Toronto (2026 Price Guide & Breakdown)",
    description:
      "How much does website development cost in Toronto in 2026? Compare real agency pricing, freelancer rates, hourly benchmarks, and ROI for GTA businesses.",
    url: "https://beeclue.com/website-development-cost-toronto",
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
