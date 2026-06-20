import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sure Shot Photobooth - Web Experience Case Study",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
