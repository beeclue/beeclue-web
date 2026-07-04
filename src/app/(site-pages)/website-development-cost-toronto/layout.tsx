import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development Cost Toronto: 2026 Guide | Beeclue",
  description:
    "How much does website development cost in Toronto? Detailed 2026 pricing breakdown for small businesses, startups, and enterprises.",
  openGraph: {
    title: "Website Development Cost Toronto: 2026 Guide | Beeclue",
    description:
      "How much does website development cost in Toronto? Detailed 2026 pricing breakdown.",
    url: "https://beeclue.com/website-development-cost-toronto",
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
