"use client";

import { useEffect, useRef } from "react";
import styles from "./PredictiveArc.module.css";

interface PredictiveArcProps {
  speed?: number;
  spacing?: number;
  dotSize?: number;
  archHeight?: number;
  thickness?: number;
  brightness?: number;
  hue?: number;
  saturation?: number;
  className?: string;
}

export default function PredictiveArc({
  speed = 1,
  spacing = 5,
  dotSize = 5.5,
  archHeight = 0.65,
  thickness = 1,
  brightness = 1.1,
  hue = 0,
  saturation = 1,
  className = "",
}: PredictiveArcProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let width = 1;
    let height = 1;
    let time = 0;
    let animId = 0;
    let isVisible = true;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = () => {
      // Solid dark background
      ctx.fillStyle = "#030407";
      ctx.fillRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        time += 0.012 * speed;
      }

      const centerX = width / 2;
      const centerY = height * 0.28;
      const archSpan = width * 1.45;
      const calculatedArchHeight = height * archHeight;

      // Additive blending for vivid, luminous glow
      ctx.globalCompositeOperation = "lighter";

      for (let x = 0; x < width; x += spacing) {
        const normX = (x - centerX) / (archSpan / 2);
        const arcY = centerY + normX * normX * calculatedArchHeight;

        for (let y = 0; y < height; y += spacing) {
          const distY = Math.abs(y - arcY);
          const maxDist = (140 + (1 - Math.abs(normX)) * 85) * thickness;
          if (distY >= maxDist) continue;

          let intensity = 1 - distY / maxDist;
          const waveX = Math.sin(x * 0.014 + time);
          const waveY = Math.cos(y * 0.018 + time);

          intensity = intensity * 0.7 + waveX * waveY * 0.3 * intensity;
          intensity *= Math.max(0, 1 - Math.pow(Math.abs(normX), 2.4));

          if (intensity <= 0.02) continue;

          // ThreeUI Predictive Arc deep violet, indigo, and bright core algorithm
          let r = Math.min(255, 60 * intensity + 100 * Math.pow(intensity, 3));
          let g = Math.min(255, 20 * intensity + 65 * Math.pow(intensity, 4));
          let b = Math.min(255, 130 * intensity + 145 * Math.pow(intensity, 2));

          // Luminous core flare
          if (intensity > 0.68) {
            const coreBoost = (intensity - 0.68) * 3.4;
            r = Math.min(255, r + 160 * coreBoost);
            g = Math.min(255, g + 160 * coreBoost);
            b = Math.min(255, b + 160 * coreBoost);
          }

          ctx.fillStyle = `rgb(${Math.floor(r * brightness)}, ${Math.floor(g * brightness)}, ${Math.floor(b * brightness)})`;
          const currentDotSize = dotSize * intensity;
          ctx.fillRect(x, y, currentDotSize, currentDotSize);
        }
      }

      ctx.globalCompositeOperation = "source-over";
    };

    const loop = () => {
      render();
      if (isVisible && !document.hidden && !prefersReducedMotion) {
        animId = requestAnimationFrame(loop);
      } else {
        animId = 0;
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      render();
    });

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry?.isIntersecting ?? true;
      if (isVisible && !animId && !document.hidden && !prefersReducedMotion) {
        animId = requestAnimationFrame(loop);
      } else if (!isVisible && animId) {
        cancelAnimationFrame(animId);
        animId = 0;
      }
    });

    const handleVisibilityChange = () => {
      if (document.hidden && animId) {
        cancelAnimationFrame(animId);
        animId = 0;
      } else if (!document.hidden && isVisible && !animId && !prefersReducedMotion) {
        animId = requestAnimationFrame(loop);
      }
    };

    resizeObserver.observe(container);
    intersectionObserver.observe(container);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    resize();
    render();
    if (!prefersReducedMotion) {
      animId = requestAnimationFrame(loop);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [speed, spacing, dotSize, archHeight, thickness, brightness]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        style={{
          filter: hue || saturation !== 1 ? `hue-rotate(${hue}deg) saturate(${saturation})` : undefined,
        }}
      />
      <div className={styles.overlayGradient} />
    </div>
  );
}
