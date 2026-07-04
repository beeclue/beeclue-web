import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Toronto | Custom Shopify Stores | Beeclue Tech",
  description:
    "Professional Shopify development in Toronto. Custom themes, apps, and headless commerce solutions. Increase your online sales with a high-converting Shopify store.",
  openGraph: {
    title: "Shopify Development Toronto | Custom Shopify Stores | Beeclue Tech",
    description:
      "Professional Shopify development in Toronto. Custom themes, apps, and headless commerce solutions.",
    url: "https://beeclue.com/shopify-development-toronto",
    siteName: "Beeclue Tech",
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
