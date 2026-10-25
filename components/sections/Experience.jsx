"use client";

import { experienceData } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/interactive/Reveal";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Work History"
          title="Professional Experience"
          subtitle="My journey crafting high-scale applications and collaborating with engineering teams."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline bar */}
          <div
            className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10 sm:space-y-12">
            {experienceData.map((exp, index) => (
              <div key={exp.company} className="relative flex items-start gap-6 sm:gap-10">
                {/* Timeline node icon */}
                <div className="relative z-10 flex items-center justify-center w-8 sm:w-16 h-8 sm:h-16 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-indigo-500 shadow-md shadow-indigo-500/20 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Briefcase className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>

                {/* Experience Content Card */}
                <div className="flex-1">
                  <Reveal delay={0.1 * (index + 1)}>
                    <Card className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-7">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                            {exp.role}
                          </h3>
                          <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                            {exp.company}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                          <span className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md">
                            <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Responsibilities & Achievements */}
                      <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
