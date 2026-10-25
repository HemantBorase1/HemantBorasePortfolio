"use client";

/**
 * Pill Badge component for tech stack tags, categories, or status indicators.
 */
export default function Badge({
  children,
  variant = "default",
  className = "",
  size = "sm",
}) {
  const sizeStyles = {
    xs: "px-2 py-0.5 text-[10px]",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
  };

  const variantStyles = {
    default:
      "bg-zinc-100 text-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60",
    indigo:
      "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60",
    cyan:
      "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-800/60",
    emerald:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60",
    outline:
      "border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 bg-transparent",
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-lg transition-colors ${
        sizeStyles[size] || sizeStyles.sm
      } ${variantStyles[variant] || variantStyles.default} ${className}`}
    >
      {children}
    </span>
  );
}
