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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beeclue Tech | Luxury Web Design & Custom Software Agency",
  description: "Beeclue Tech is a premium web design and custom software development agency specializing in Next.js, WordPress, and Shopify.",
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
                "image": "https://beeclue.com/logo.png",
                "@id": "https://beeclue.com",
                "url": "https://beeclue.com",
                "telephone": "+1-647-947-6253",
                "email": "hello@beeclue.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "36 Carslake Crescent",
                  "addressLocality": "Toronto",
                  "addressRegion": "ON",
                  "postalCode": "M1J 2A7",
                  "addressCountry": "CA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 43.6532,
                  "longitude": -79.3832
                },
                "priceRange": "$$$"
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Beeclue Tech",
                "url": "https://beeclue.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://beeclue.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
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
                    "name": "Web Design",
                    "url": "https://beeclue.com/web-design-toronto"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 4,
                    "name": "Custom Software",
                    "url": "https://beeclue.com/custom-software-development-toronto"
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
      </body>
    </html>
  );
}
