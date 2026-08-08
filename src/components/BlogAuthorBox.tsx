import React from "react";
import Image from "next/image";
import blogStyles from "@/app/(blogs)/shared-blog.module.css";

interface BlogAuthorBoxProps {
  name?: string;
  bio?: string;
}

export default function BlogAuthorBox({
  name = "Beeclue Design Team",
  bio = "Beeclue Tech is a Toronto-based engineering and web design agency specializing in high-performance digital platforms. With expertise in Next.js, WordPress, and Custom Software Development, our team delivers scalable solutions that drive measurable business growth."
}: BlogAuthorBoxProps) {
  return (
    <div className={blogStyles.authorBox}>
      <Image
        src="/apple-touch-icon.png"
        alt={name}
        width={60}
        height={60}
        className={blogStyles.authorImage}
      />
      <div className={blogStyles.authorDetails}>
        <h4>{name}</h4>
        <p>{bio}</p>
      </div>
    </div>
  );
}
