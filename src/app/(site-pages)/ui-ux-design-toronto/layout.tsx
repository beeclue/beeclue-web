import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services in Toronto | Beeclue Tech",
  description: "UI/UX design services in Toronto that turn visitors into loyal customers. User research, wireframing, prototyping, and usability testing by expert designers.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
