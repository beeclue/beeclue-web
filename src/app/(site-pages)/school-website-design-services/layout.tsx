import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Website Design & Development Services | Beeclue Tech",
  description: "Beeclue Tech engineers secure, AODA-compliant, and high-performance websites for private schools, public districts, and universities across Canada.",
  openGraph: {
    title: "School Website Design & Development Services | Beeclue Tech",
    description: "Beeclue Tech engineers secure, AODA-compliant, and high-performance websites for private schools, public districts, and universities across Canada.",
    url: "https://beeclue.com/school-website-design-services",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
