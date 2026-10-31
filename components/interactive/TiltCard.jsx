"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Interactive 3D tilt card that rotates subtly based on cursor position.
 */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  glare = true,
  ...props
}) {
  const cardRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    setRotateX(-yPct * maxTilt);
    setRotateY(xPct * maxTilt);

    if (glare) {
      setGlarePosition({
        x: (mouseX / width) * 100,
        y: (mouseY / height) * 100,
        opacity: 0.15,
      });
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{ transformStyle: "preserve-3d" }}
      className={`relative overflow-hidden rounded-2xl will-change-transform ${className}`}
      {...props}
    >
      {children}

      {glare && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4), transparent 60%)`,
            opacity: glarePosition.opacity,
          }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}
