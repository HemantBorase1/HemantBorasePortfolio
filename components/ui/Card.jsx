"use client";

/**
 * Reusable Card component with subtle border glows and backdrop blur.
 */
export default function Card({
  children,
  className = "",
  hoverable = true,
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl border border-zinc-200/80 bg-white/80 p-6 backdrop-blur-md transition-all duration-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-sm ${
        hoverable
          ? "hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:border-indigo-500/30 dark:hover:shadow-indigo-500/10"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
