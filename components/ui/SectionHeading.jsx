"use client";

/**
 * Standardized Section Heading with subtitle, badge tag, and responsive alignment.
 */
export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl"
      } ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
          {badge}
        </span>
      )}
      {title && (
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-zinc-50">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 text-base text-zinc-600 sm:text-lg dark:text-zinc-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
