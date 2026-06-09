import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sure Shot Photobooth Case Study | Beeclue Tech",
  description: "Discover how Beeclue Tech built a highly interactive, modern Next.js website for Sure Shot Photobooth featuring immersive animations and advanced SEO.",
  alternates: {
    canonical: "https://beeclue.com/case-studies/sure-shot-photobooth",
  },
};

export default function SureShotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
