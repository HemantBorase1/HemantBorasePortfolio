"use client";

import Link from "next/link";
import { projectsData } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/interactive/Reveal";
import { ExternalLink, ArrowRight, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Projects"
          title="Case Studies &amp; Products"
          subtitle="A selection of high-impact web apps, distributed platforms, and client solutions I've architected."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Reveal key={project.slug} delay={0.1 * (index + 1)}>
              <Card className="flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-7 group">
                {/* Visual Header / Banner */}
                <div className="relative w-full h-48 rounded-xl bg-gradient-to-br from-indigo-950 via-zinc-900 to-zinc-950 flex flex-col justify-between p-5 border border-zinc-800 overflow-hidden mb-6">
                  {/* Decorative glow */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-indigo-500/20 blur-2xl group-hover:bg-indigo-500/30 transition-all" />

                  <div className="flex items-center justify-between z-10">
                    <span className="p-2 rounded-lg bg-white/10 text-white backdrop-blur-md">
                      <FolderGit2 className="w-5 h-5 text-indigo-400" />
                    </span>
                    <span className="text-xs font-mono text-zinc-400 bg-black/40 px-2.5 py-1 rounded-md border border-white/5">
                      Case Study #0{index + 1}
                    </span>
                  </div>

                  <div className="z-10">
                    <h4 className="text-lg font-bold text-white tracking-tight line-clamp-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-indigo-300 font-mono mt-0.5">
                      {project.role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      <Link href={`/projects/${project.slug}/`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-2.5 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech} size="xs" variant="default">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 4 && (
                        <Badge size="xs" variant="outline">
                          +{project.techStack.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Actions / Links */}
                  <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}/`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-2 transition-all"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository for ${project.title}`}
                          className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo for ${project.title}`}
                          className="p-2 rounded-lg text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
