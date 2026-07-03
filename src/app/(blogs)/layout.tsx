import BlogTracker from "@/components/BlogTracker";

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogTracker />
      {children}
    </>
  );
}
