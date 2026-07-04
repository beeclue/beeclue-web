import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Restaurant Website Design & Development Canada | Beeclue",
  description:
    "Restaurant website design in Canada. Online ordering, reservation systems, menu management, and local SEO. Increase direct orders and bookings.",
  openGraph: {
  title: "Restaurant Website Design & Development Canada | Beeclue",
    description:
      "Restaurant website design in Canada. Online ordering, reservation systems, and menu management.",
    url: "https://beeclue.com/restaurant-website-design-canada",
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
