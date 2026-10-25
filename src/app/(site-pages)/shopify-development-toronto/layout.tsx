import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Shopify Partner Toronto & Canada | Shopify Store Setup & Web Design",
  description:
    "Certified Shopify Partner in Toronto & Canada. Turnkey Shopify store setup, custom theme design, and Canadian tax/shipping integration for new & growing e-commerce businesses. $0 Shopify fees during build.",
  alternates: {
    canonical: "https://beeclue.com/shopify-development-toronto",
  },
  keywords: [
    "shopify partner toronto",
    "shopify store setup service canada",
    "shopify web design toronto",
    "hire shopify expert canada",
    "shopify development company toronto",
    "turnkey shopify store for small business",
    "shopify migration canada",
    "canadian ecommerce website design",
    "shopify hst gst setup agency"
  ],
  openGraph: {
    title: "Official Shopify Partner Toronto & Canada | Shopify Store Setup & Web Design — Beeclue Tech",
    description:
      "Certified Shopify Partner in Toronto & Canada. Turnkey Shopify store setup, custom theme design, and Canadian tax/shipping integration. Unlimited development trial for new merchants.",
    url: "https://beeclue.com/shopify-development-toronto",
    siteName: "Beeclue Tech",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/wnw-home.webp",
        width: 1200,
        height: 630,
        alt: "Beeclue Tech Official Shopify Partner Web Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Official Shopify Partner Toronto & Canada | Beeclue Tech",
    description:
      "Turnkey Shopify store setup, custom themes, and Canadian tax/shipping configuration. Unlimited development store trial for new founders.",
    images: ["https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/wnw-home.webp"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
