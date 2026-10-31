"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

/**
 * Scroll-reveal wrapper component that animates elements into view.
 */
export default function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  duration = 0.6,
  className = "",
  width = "w-full",
  once = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const activeVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : variants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      variants={activeVariants}
      transition={{
        duration: shouldReduceMotion ? 0.01 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`${width} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
