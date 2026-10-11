"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const PredictiveArc = dynamic(() => import("@/components/PredictiveArc"), { ssr: false });

export default function BackgroundScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <PredictiveArc />;
}
