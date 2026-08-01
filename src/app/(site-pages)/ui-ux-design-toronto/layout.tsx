import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Agency Toronto | User Research & Prototyping",
  description: "UI/UX design services in Toronto that turn visitors into loyal customers. User research, wireframing, prototyping, and usability testing by expert designers.",
  alternates: {
    canonical: "https://beeclue.com/ui-ux-design-toronto",
  },
  openGraph: {
    title: "UI/UX Design Agency Toronto | User Research & Prototyping",
    description: "UI/UX design services in Toronto that turn visitors into loyal customers. User research, wireframing, prototyping, and usability testing.",
    url: "https://beeclue.com/ui-ux-design-toronto",
    siteName: "Beeclue Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Agency Toronto | User Research & Prototyping",
    description: "UI/UX design services in Toronto that turn visitors into loyal customers.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
