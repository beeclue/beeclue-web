import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify E-Commerce Website Design Canada | Certified Shopify Partner",
  description:
    "Award-winning Shopify e-commerce website design & custom themes. Certified Shopify Partner delivering high-converting storefronts, mobile checkout optimization, and Canadian tax/shipping setups.",
  alternates: {
    canonical: "https://beeclue.com/shopify-ecommerce-website-design",
  },
  keywords: [
    "shopify ecommerce website design",
    "shopify web design canada",
    "custom shopify themes",
    "shopify store redesign agency",
    "shopify conversion rate optimization",
    "shopify product page design",
    "shopify partner web designer"
  ],
  openGraph: {
    title: "Shopify E-Commerce Website Design Canada | Beeclue Tech",
    description:
      "High-converting custom Shopify storefronts designed by Certified Shopify Partners. Optimized for sub-second mobile speed and higher average order values.",
    url: "https://beeclue.com/shopify-ecommerce-website-design",
    siteName: "Beeclue Tech",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/wnw-home.webp",
        width: 1200,
        height: 630,
        alt: "Shopify E-Commerce Website Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify E-Commerce Website Design Canada | Beeclue Tech",
    description:
      "High-converting custom Shopify storefronts designed by Certified Shopify Partners. Mobile checkout optimization and Canadian tax/shipping setups.",
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
