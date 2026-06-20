"use client";

import { m } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeIn({ children, delay = 0, className, style }: FadeInProps) {
  return (
    <m.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </m.section>
  );
}
