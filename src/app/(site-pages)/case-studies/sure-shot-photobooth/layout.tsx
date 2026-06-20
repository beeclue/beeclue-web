import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sure Shot Photobooth - Web Experience Case Study",
  description: "Explore our exciting work with Sure Shot Photobooth, featuring highly interactive digital web experiences, smooth modern transitions, and immersive animations.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
