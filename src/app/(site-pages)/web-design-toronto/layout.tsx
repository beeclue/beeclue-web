import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web Design Toronto | Award-Winning Web Agency | Beeclue",
  description: "Premier web design agency in Toronto. We build high-speed, custom Next.js websites and web applications engineered to rank #1 on Google and turn search traffic into clients.",
  alternates: {
    canonical: "https://beeclue.com/web-design-toronto",
  },
  openGraph: {
    title: "Custom Web Design Toronto | Award-Winning Web Agency | Beeclue",
    description: "Premier web design agency in Toronto. We build high-speed, custom Next.js websites and web applications engineered to rank #1 on Google and turn search traffic into clients.",
    url: "https://beeclue.com/web-design-toronto",
    siteName: "Beeclue Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Design Toronto | Award-Winning Web Agency | Beeclue",
    description: "Premier web design agency in Toronto. We build high-speed, custom Next.js websites engineered to rank #1 on Google.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
