import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Toronto | iOS, Android & Cross-Platform",
  description: "Mobile app development in Toronto. iOS, Android, and cross-platform apps built with React Native and Flutter. Launch your app with our expert development team.",
  alternates: {
    canonical: "https://beeclue.com/mobile-app-development-toronto",
  },
  openGraph: {
    title: "Mobile App Development Toronto | iOS, Android & Cross-Platform",
    description: "Mobile app development in Toronto. iOS, Android, and cross-platform apps built with React Native and Flutter.",
    url: "https://beeclue.com/mobile-app-development-toronto",
    siteName: "Beeclue Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Toronto | iOS, Android & Cross-Platform",
    description: "Mobile app development in Toronto. iOS, Android, and cross-platform apps built with React Native and Flutter.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
