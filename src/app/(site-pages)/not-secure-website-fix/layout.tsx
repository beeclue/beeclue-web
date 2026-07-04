import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Secure Website Fix: SSL Guide 2026 | Beeclue",
  description:
    "Why your website shows Not Secure and how to fix it. Complete SSL/HTTPS guide for 2026. Step-by-step instructions and professional help.",
  openGraph: {
    title: "Not Secure Website Fix: SSL Guide 2026 | Beeclue",
    description:
      "Why your website shows Not Secure and how to fix it. Complete SSL/HTTPS guide.",
    url: "https://beeclue.com/not-secure-website-fix",
    siteName: "Beeclue",
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
