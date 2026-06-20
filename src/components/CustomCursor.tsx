"use client";

import { useEffect, useState } from "react";
import { m, useMotionValue, useSpring } from 'framer-motion';
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 500, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      scale: 1,
      backgroundColor: "transparent",
    },
    hover: {
      scale: 2.5,
      backgroundColor: "var(--primary)",
      mixBlendMode: "difference" as any,
      border: "none",
    },
  };

  return (
    <m.div
      className={styles.cursor}
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
}
