"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function BackgroundScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer loading the heavy 3D scene to prevent blocking the main thread
    const timer = setTimeout(() => setMounted(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return <Scene />;
}
