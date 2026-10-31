"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

const emptySubscribe = () => () => {};

function getIsTouchSnapshot() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

/**
 * Custom interactive dual-ring cursor that follows mouse movement.
 * Automatically disabled on touch screens and mobile devices.
 * Adds/removes 'has-custom-cursor' on <body> to hide the native cursor via CSS.
 */
export default function CustomCursor() {
  const { x, y, isPointerInside } = useMousePosition();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const isTouchDevice = useSyncExternalStore(
    emptySubscribe,
    getIsTouchSnapshot,
    () => true
  );
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    if (isTouchDevice) return;

    // Hide the native cursor when our custom cursor is active
    document.body.classList.add("has-custom-cursor");

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        target.hasAttribute("data-clickable");

      setIsHoveringClickable(!!isClickable);
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isTouchDevice]);

  // Avoid any SSR hydration mismatch: server and initial client render return null
  if (!mounted || isTouchDevice || !isPointerInside) {
    return null;
  }

  const outerSize = isHoveringClickable ? 48 : 32;
  const outerOffset = outerSize / 2;

  return (
    <>
      {/* Outer trailing aura */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-cyan-400/60 bg-cyan-400/10"
        animate={{
          x: x - outerOffset,
          y: y - outerOffset,
          width: outerSize,
          height: outerSize,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.4,
        }}
      />

      {/* Center sharp dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-cyan-400"
        animate={{
          x: x - 4,
          y: y - 4,
          scale: isHoveringClickable ? 0.4 : 1,
        }}
        transition={{
          type: "spring",
          damping: 45,
          stiffness: 800,
        }}
      />
    </>
  );
}
