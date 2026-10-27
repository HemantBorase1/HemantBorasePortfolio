"use client";

import { siteConfig } from "@/data/site";
import { educationData } from "@/data/education";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/interactive/Reveal";
import { MapPin, Mail, Phone, GraduationCap, Calendar } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Passion for Engineering & Innovation"
          subtitle="Get to know the developer behind the code and what drives my craft."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.1}>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                Hi there, I&apos;m {siteConfig.name}
              </h3>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {siteConfig.summary}
              </p>
            </Reveal>

            {/* Location & Quick Contact */}
            <Reveal delay={0.2}>
              <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>{siteConfig.location}</span>
                </div>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-indigo-500 transition-colors">
                  <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-indigo-500 transition-colors">
                  <Phone className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </Reveal>

            {/* Education Timeline */}
            <Reveal delay={0.3}>
              <div className="pt-4">
                <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-5 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-500" />
                  Education
                </h4>
                <div className="relative">
                  {/* Vertical bar */}
                  <div
                    className="absolute left-3 top-2 bottom-2 w-0.5 bg-zinc-200 dark:bg-zinc-800"
                    aria-hidden="true"
                  />
                  <div className="space-y-6">
                    {educationData.map((edu) => (
                      <div key={edu.degree} className="relative flex items-start gap-5 pl-10">
                        {/* Timeline dot */}
                        <span className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-zinc-900 border-2 border-indigo-500 shadow-sm shadow-indigo-500/20 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
                        </span>
                        <Card className="flex-1 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
                            {edu.degree}
                          </p>
                          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                            {edu.institution}
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                              {edu.period}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 font-semibold">
                              {edu.grade}
                            </span>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column placeholder for future profile image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delay={0.2} className="w-full max-w-sm">
              <Card className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-extrabold mb-4 select-none">
                  HB
                </div>
                <p className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{siteConfig.name}</p>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-1">{siteConfig.role}</p>
                <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">{siteConfig.location}</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
