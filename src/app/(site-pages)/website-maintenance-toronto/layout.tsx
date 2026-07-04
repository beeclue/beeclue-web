import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Toronto Website Maintenance & Support Services | Beeclue",
  description:
    "Website maintenance services in Toronto. Updates, security patches, backups, and performance monitoring. Keep your website safe and fast.",
  openGraph: {
    title:
      "Toronto Website Maintenance & Support Services | Beeclue",
    description:
      "Website maintenance services in Toronto. Updates, security patches, backups, and performance monitoring.",
    url: "https://beeclue.com/website-maintenance-toronto",
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
