import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Restaurant Website Design Toronto | Online Ordering & Reservations | Beeclue",
  description:
    "Restaurant websites in Toronto with online ordering, reservation systems, and menu management. Increase direct orders and bookings.",
  alternates: {
    canonical: "https://beeclue.com/web-design-for-restaurants",
  },
  openGraph: {
    title:
      "Restaurant Website Design Toronto | Online Ordering & Reservations | Beeclue",
    description:
      "Restaurant websites in Toronto with online ordering, reservation systems, and menu management. Increase direct orders and bookings.",
    url: "https://beeclue.com/web-design-for-restaurants",
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
