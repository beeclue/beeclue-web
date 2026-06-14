import { Metadata } from "next";

export const metadata: Metadata = {
  title: "$19/Month Website Design for Toronto Small Businesses | Beeclue Tech",
  description:
    "Get a professional 5-page website for just $19/month — free hosting, free maintenance, WhatsApp button & more. Built for Toronto & GTA small businesses by Beeclue Tech.",
  alternates: {
    canonical: "https://beeclue.com/19",
  },
  openGraph: {
    type: "website",
    title: "$19/Month Website Design for Toronto Small Businesses | Beeclue Tech",
    description:
      "Get a professional 5-page website for just $19/month — free hosting, free maintenance, WhatsApp button & more. Built for Toronto & GTA small businesses by Beeclue Tech.",
    url: "https://beeclue.com/19",
    images: [
      {
        url: "https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/og-image.png",
        width: 1200,
        height: 630,
        alt: "$19/Month Website Design for Toronto Small Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$19/Month Website Design for Toronto Small Businesses | Beeclue Tech",
    description:
      "Get a professional 5-page website for just $19/month — free hosting, free maintenance, WhatsApp button & more. Built for Toronto & GTA small businesses by Beeclue Tech.",
    images: [
      "https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/og-image.png",
    ],
  },
};

export default function NineteenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
