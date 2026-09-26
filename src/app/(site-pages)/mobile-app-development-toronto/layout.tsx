import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Toronto | Custom iOS & Android Apps — Beeclue",
  description: "Top-rated mobile app development company in Toronto. We build custom iOS, Android, and cross-platform apps with React Native & Swift engineered to scale.",
  alternates: {
    canonical: "https://beeclue.com/mobile-app-development-toronto",
  },
  openGraph: {
    title: "Mobile App Development Toronto | Custom iOS & Android Apps — Beeclue",
    description: "Top-rated mobile app development company in Toronto. We build custom iOS, Android, and cross-platform apps with React Native & Swift engineered to scale.",
    url: "https://beeclue.com/mobile-app-development-toronto",
    siteName: "Beeclue Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Toronto | Custom iOS & Android Apps — Beeclue",
    description: "Top-rated mobile app development company in Toronto. We build custom iOS, Android, and cross-platform apps with React Native & Swift engineered to scale.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
