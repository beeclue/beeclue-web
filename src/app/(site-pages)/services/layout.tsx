import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software, Mobile Apps & Web Design Services | Beeclue",
  description: "Dominate your market with our elite digital services. From custom enterprise software and high-conversion web design to advanced SEO strategies, we scale your revenue.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
