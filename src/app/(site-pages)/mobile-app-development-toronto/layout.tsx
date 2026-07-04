import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services in Toronto | Beeclue Tech",
  description: "Mobile app development in Toronto. iOS, Android, and cross-platform apps with React Native and Flutter.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
