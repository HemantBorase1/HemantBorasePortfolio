"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import TiltCard from "@/components/interactive/TiltCard";
import Reveal from "@/components/interactive/Reveal";
import { FaGithub } from "react-icons/fa6";

/** Individual Project Card with 16:9 Image, Badges, Details, and GitHub Link */
function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <TiltCard
      maxTilt={6}
      glare={true}
      className="h-full rounded-2xl p-0 transition-all duration-300 group"
    >
      <div className="flex flex-col h-full rounded-2xl bg-zinc-900/60 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
        {/* a) Project Image: 16:9 Aspect Ratio */}
        <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-indigo-950/80 via-zinc-900 to-purple-950/80 border-b border-zinc-200/30 dark:border-zinc-800/80">
          {imgError ? (
            /* Fallback placeholder when image file is missing */
            <div
              className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none"
              aria-label={`${project.title} preview placeholder`}
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-2">
                <span className="text-xl font-bold">{project.title.charAt(0)}</span>
              </div>
              <h4 className="text-base font-semibold text-zinc-200">{project.title}</h4>
              <p className="text-xs text-zinc-400 mt-1 font-mono">Screenshot coming soon</p>
            </div>
          ) : (
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title} web application`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        {/* Card Body */}
        <div className="flex-1 flex flex-col p-6 sm:p-7">
          {/* b) Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
            {project.title}
          </h3>

          {/* c) Tech Stack Badge Pills */}
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge key={tech} size="xs" variant="default">
                {tech}
              </Badge>
            ))}
          </div>

          {/* d) Short Description (line-clamp-3) */}
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* e) Bottom Right: ONLY a GitHub Icon */}
          <div className="mt-auto pt-6 flex items-center justify-end">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="p-2.5 rounded-xl text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-all duration-200 hover:scale-110"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. TITLE: Just "Projects" */}
        <SectionHeading
          badge="Portfolio"
          title="Projects"
          subtitle="A selection of full-stack web applications and intelligent platforms I have built."
        />

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-12 items-stretch">
          {projectsData.map((project, index) => (
            <Reveal key={project.slug} delay={0.15 * (index + 1)} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
