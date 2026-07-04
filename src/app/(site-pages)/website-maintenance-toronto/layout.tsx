import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Website Maintenance Toronto | Keep Your Site Running Smoothly | Beeclue",
  description:
    "Website maintenance services in Toronto. Updates, security patches, backups, and performance monitoring. Keep your website safe and fast.",
  openGraph: {
    title:
      "Website Maintenance Toronto | Keep Your Site Running Smoothly | Beeclue",
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
