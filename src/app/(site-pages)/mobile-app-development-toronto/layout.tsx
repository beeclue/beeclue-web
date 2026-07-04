import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services in Toronto | Beeclue Tech",
  description: "Mobile app development in Toronto. iOS, Android, and cross-platform apps built with React Native and Flutter. Launch your app with our expert development team.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
