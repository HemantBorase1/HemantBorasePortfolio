import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Award,
  Layers,
  UserCheck,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export const dynamic = "force-static";

/**
 * Pre-generate static params for all project slugs for static site export.
 */
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Dynamic metadata for case study pages.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Case Study`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-28 pb-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="border-b border-zinc-200 dark:border-zinc-800 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 mb-4">
            Case Study
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Quick Meta Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800">
              <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block">
                  My Role
                </span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  {project.role}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800">
              <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block">
                  Core Technologies
                </span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  {project.techStack.slice(0, 3).join(", ")}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary" size="md">
                <span>View Live Application</span>
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="outline" size="md">
                <FaGithub className="w-4 h-4 mr-1.5" />
                <span>Source Code</span>
              </Button>
            )}
          </div>
        </header>

        {/* Case Study Detailed Content */}
        <div className="py-12 space-y-12">
          {/* 1. Problem Statement */}
          <section>
            <div className="flex items-center gap-2.5 mb-4 text-amber-600 dark:text-amber-400 font-bold text-lg">
              <AlertTriangle className="w-5 h-5" />
              <h2>The Challenge &amp; Problem</h2>
            </div>
            <Card className="p-6 bg-amber-50/40 dark:bg-amber-950/20 border-amber-200/60 dark:border-amber-900/40">
              <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </Card>
          </section>

          {/* 2. Key Features & Architecture */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
              Key Features &amp; Implementation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-3.5 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Tech Stack Breakdown */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} size="md" variant="indigo">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/* 4. Outcomes & Business Results */}
          <section>
            <div className="flex items-center gap-2.5 mb-4 text-emerald-600 dark:text-emerald-400 font-bold text-lg">
              <Award className="w-5 h-5" />
              <h2>Results &amp; Impact</h2>
            </div>
            <Card className="p-6 bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-900/40">
              <p className="text-base font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed">
                {project.result}
              </p>
            </Card>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          <Button href="/#contact" variant="primary" size="sm">
            Discuss Similar Project
          </Button>
        </div>
      </div>
    </article>
  );
}
