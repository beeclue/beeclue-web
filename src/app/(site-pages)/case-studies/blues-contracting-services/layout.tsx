import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blues Contracting Services Case Study | Beeclue Tech",
  description: "Learn how Beeclue Tech developed a highly performant Next.js website for Blues Contracting Services, optimizing their UX design and Search Console visibility.",
  alternates: {
    canonical: "https://beeclue.com/case-studies/blues-contracting-services",
  },
};

export default function BluesContractingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
