"use client";

import Link from "next/link";

/**
 * Versatile accessible Button component supporting multiple variants and Link routing.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  target,
  rel,
  ariaLabel,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-500/25 dark:bg-indigo-500 dark:hover:bg-indigo-400 focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-zinc-900",
    secondary:
      "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700/80 focus-visible:ring-zinc-400",
    outline:
      "border border-zinc-300 dark:border-zinc-700/80 text-zinc-800 dark:text-zinc-200 hover:border-indigo-500 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 focus-visible:ring-indigo-500",
    ghost:
      "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800/60 focus-visible:ring-zinc-400",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className={combinedClasses} aria-label={ariaLabel} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
      suppressHydrationWarning
      {...props}
    >
      {children}
    </button>
  );
}
