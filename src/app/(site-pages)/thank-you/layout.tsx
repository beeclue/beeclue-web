import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks — Pick Your Call Time",
  description: "Thanks for contacting Beeclue Tech. Book a call time or wait for our email reply within one business day.",
  alternates: {
    canonical: "https://beeclue.com/thank-you",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
