import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services in Toronto | Beeclue Tech",
  description: "UI/UX design in Toronto that turns visitors into customers. User research, wireframing, prototyping, and usability testing.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
