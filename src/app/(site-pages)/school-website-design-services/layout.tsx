import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Website Design & Development Services | Beeclue Tech",
  description: "School website design in Canada. Student portals, event calendars, and parent communication tools. Built for Canadian schools.",
  openGraph: {
    title: "School Website Design & Development Services | Beeclue Tech",
    description: "School website design in Canada. Student portals, event calendars, and parent communication tools. Built for Canadian schools.",
    url: "https://beeclue.com/school-website-design-services",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
