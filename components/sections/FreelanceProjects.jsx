"use client";

import { useState, useRef, useEffect } from "react";
import { freelanceProjects } from "@/data/freelanceProjects";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/interactive/TiltCard";
import Reveal from "@/components/interactive/Reveal";
import { ExternalLink } from "lucide-react";

/**
 * Individual Freelance Project Card with a live scaled desktop iframe preview,
 * mini browser frame, status pill, and direct live URL link.
 */
function FreelanceProjectCard({ project }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.3);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const domain = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "";

  // 1. Observe visibility: only mount iframe when scrolled into view
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. Compute scale factor dynamically based on container width vs desktop 1280px
  useEffect(() => {
    if (!containerRef.current) return;

    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        if (width > 0) {
          setScale(width / 1280);
        }
      }
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <TiltCard
      maxTilt={6}
      glare={true}
      className="h-full rounded-2xl p-0 transition-all duration-300 group"
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.title} website`}
        className="flex flex-col h-full rounded-2xl bg-zinc-900/60 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
      >
        {/* Compact Browser-Style Top Bar */}
        <div className="flex items-center gap-2 px-3.5 py-2 bg-zinc-950 border-b border-zinc-800/80 text-zinc-400 select-none">
          <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <div className="flex-1 mx-2 px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800/80 font-mono text-[11px] text-zinc-400 truncate text-center">
            {domain}
          </div>
        </div>

        {/* 16:9 Desktop Iframe Preview Container */}
        <div
          ref={containerRef}
          className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-indigo-950/80 via-zinc-900 to-purple-950/80 border-b border-zinc-200/30 dark:border-zinc-800/80"
        >
          {/* Fallback / Shimmer Placeholder (Visible before load or if embedding is blocked) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none"
            aria-label={`${project.title} preview placeholder`}
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-2">
              <span className="text-xl font-bold">{project.title.charAt(0)}</span>
            </div>
            <h4 className="text-base font-semibold text-zinc-200">{project.title}</h4>
            <p className="text-xs text-zinc-400 mt-1 font-mono">
              {isLoaded ? "Live Website Preview" : "Loading live preview..."}
            </p>

            {/* Skeleton shimmer pulse */}
            {!isLoaded && (
              <div className="mt-3 w-36 h-1 rounded-full bg-zinc-800/80 overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent animate-pulse" />
              </div>
            )}
          </div>

          {/* Scaled Desktop Iframe */}
          {isVisible && (
            <iframe
              src={project.liveUrl}
              title={`${project.title} website preview`}
              loading="lazy"
              referrerPolicy="no-referrer"
              tabIndex={-1}
              sandbox="allow-scripts allow-same-origin"
              onLoad={() => setIsLoaded(true)}
              className={`absolute top-0 left-0 border-0 pointer-events-none transition-opacity duration-700 ease-out ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              style={{
                width: "1280px",
                height: "720px",
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            />
          )}
        </div>

        {/* Card Body */}
        <div className="flex-1 flex flex-col p-6 sm:p-7 justify-between gap-6">
          <div className="space-y-3">
            {/* Title: Bold Heading */}
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>

            {/* Status Pill with pulsing green dot */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{project.statusNote || project.status}</span>
            </div>
          </div>

          {/* Website URL Line */}
          <div className="pt-2 flex items-center justify-between text-xs sm:text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors border-t border-zinc-200/20 dark:border-zinc-800/60">
            <span className="font-mono truncate mr-2">{domain}</span>
            <ExternalLink className="w-4 h-4 shrink-0 text-zinc-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors" />
          </div>
        </div>
      </a>
    </TiltCard>
  );
}

export default function FreelanceProjects() {
  return (
    <section id="freelance-projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Client Work"
          title="Freelance Projects"
          subtitle="Production client applications and commercial solutions built for active businesses."
        />

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-12 items-stretch">
          {freelanceProjects.map((project, index) => (
            <Reveal key={project.slug} delay={0.15 * (index + 1)} className="h-full">
              <FreelanceProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
