import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fix Not Secure Website Warning",
  description:
    "Why your website shows Not Secure and how to fix it. Complete SSL/HTTPS guide for 2026. Step-by-step instructions and professional help.",
  alternates: {
    canonical: "https://beeclue.com/not-secure-website-fix",
  },
  openGraph: {
    title: "Fix Not Secure Website Warning",
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
