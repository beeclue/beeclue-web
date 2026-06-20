"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function BackgroundScene() {
  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check for mobile device or reduced motion preferences
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (isMobile || prefersReducedMotion) {
      setShouldRender(false);
      return;
    }

    // Defer loading the heavy 3D scene to prevent blocking the main thread
    const timer = setTimeout(() => setMounted(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender || !mounted) return null;

  return <Scene />;
}
