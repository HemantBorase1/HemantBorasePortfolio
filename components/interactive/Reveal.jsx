"use client";

import { motion } from "framer-motion";
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
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      variants={variants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`${width} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
