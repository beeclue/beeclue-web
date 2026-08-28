"use client";

import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const BackgroundScene = dynamic(() => import("@/components/BackgroundScene"), { ssr: false });
const FreeSEOReportModal = dynamic(() => import("@/components/FreeSEOReportModal"), { ssr: false });

/**
 * Client-side wrapper that lazy-loads non-critical UI features.
 * These are progressive enhancements that don't affect initial paint:
 * - SmoothScroll (Lenis): smooth wheel scrolling on desktop
 * - CustomCursor: animated cursor on desktop
 * - BackgroundScene: 3D Three.js scene
 * - FreeSEOReportModal: modal that appears after 5s on homepage
 */
export default function ClientFeatures({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <BackgroundScene />
      {children}
      <FreeSEOReportModal />
    </SmoothScroll>
  );
}
