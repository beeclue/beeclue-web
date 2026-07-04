import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Website Design & Development Services | Beeclue Tech",
    description: "School website design in Canada. Student portals, event calendars, and parent communication tools. Custom-built websites for Canadian schools and districts.",
    openGraph: {
      title: "School Website Design & Development Services | Beeclue Tech",
      description: "School website design in Canada. Student portals, event calendars, and parent communication tools. Custom-built websites for Canadian schools and districts.",
    url: "https://beeclue.com/school-website-design-services",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
