import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import GlobalLogo from "@/components/GlobalLogo";
import Footer from "@/components/Footer";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

import BackgroundScene from "@/components/BackgroundScene";
import AnimationProvider from "@/components/AnimationProvider";
import FreeSEOReportModal from "@/components/FreeSEOReportModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://beeclue.com'),
  title: {
    default: "Toronto Web Design & Software Development Agency | Beeclue Tech",
    template: "%s | Beeclue Tech",
  },
  description: "Transform your business with elite web design, custom software development, and advanced SEO services. Beeclue Tech engineers scalable digital platforms for maximum ROI.",
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Beeclue',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://beeclue.com',
    siteName: 'Beeclue Tech',
    images: [
      {
        url: 'https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/image.png',
        width: 1200,
        height: 630,
        alt: 'Beeclue Tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/image.png'],
  },
  alternates: {
    languages: {
      'en-CA': 'https://beeclue.com',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-TPL6XD4" />
      <GoogleAnalytics gaId="G-23WTB04MCH" />
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Beeclue Tech",
                "description": "Digital development agency in Toronto specializing in web design, custom software, and e-commerce solutions",
                "image": "https://beeclue.com/logo.png",
                "@id": "https://beeclue.com",
                "url": "https://beeclue.com",
                "telephone": "+1-647-947-6253",
                "email": "hello@beeclue.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Toronto",
                  "addressRegion": "ON",
                  "addressCountry": "CA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 43.6532,
                  "longitude": -79.3832
                },
                "priceRange": "$$",
                "openingHours": "Mo-Fr 09:00-18:00",
                "sameAs": [
                  "https://www.facebook.com/beeclue",
                  "https://www.linkedin.com/company/beeclue",
                  "https://www.instagram.com/beeclue"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Digital Services",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Design" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software Development" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Development" } }
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Beeclue Tech",
                "url": "https://beeclue.com",
                "publisher": {
                  "@type": "Organization",
                  "name": "Beeclue Tech",
                  "logo": { "@type": "ImageObject", "url": "https://beeclue.com/logo.png" }
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "SiteNavigationElement",
                    "position": 1,
                    "name": "Services",
                    "url": "https://beeclue.com/services"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 2,
                    "name": "Case Studies",
                    "url": "https://beeclue.com/case-studies"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 3,
                    "name": "Blog",
                    "url": "https://beeclue.com/blogs"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 4,
                    "name": "Products",
                    "url": "https://beeclue.com/products/monexa"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 5,
                    "name": "About Us",
                    "url": "https://beeclue.com/about-us"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 6,
                    "name": "Contact",
                    "url": "https://beeclue.com/contact"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 7,
                    "name": "Web Design Toronto",
                    "url": "https://beeclue.com/web-design-toronto"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 8,
                    "name": "Custom Software Development Toronto",
                    "url": "https://beeclue.com/custom-software-development-toronto"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 9,
                    "name": "WordPress Web Design Canada",
                    "url": "https://beeclue.com/wordpress-web-design-canada"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 10,
                    "name": "Mobile App Development Toronto",
                    "url": "https://beeclue.com/mobile-app-development-toronto"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 11,
                    "name": "E-Commerce Development Toronto",
                    "url": "https://beeclue.com/ecommerce-development-toronto"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 12,
                    "name": "SEO Services Toronto",
                    "url": "https://beeclue.com/seo-services-toronto"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 13,
                    "name": "UI/UX Design Toronto",
                    "url": "https://beeclue.com/ui-ux-design-toronto"
                  }
                ]
              }
            ])
          }}
        />
        <AnimationProvider>
          <SmoothScroll>
            <GlobalLogo />
            <Navigation />
            <CustomCursor />
            <div className="animatedGrid"></div>
            <BackgroundScene />
            {children}
            <Footer />
          </SmoothScroll>
        </AnimationProvider>
        <FreeSEOReportModal />
      </body>
    </html>
  );
}
