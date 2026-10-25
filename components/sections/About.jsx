"use client";

import { siteConfig } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/interactive/Reveal";
import { Code, Rocket, Users, ShieldCheck, MapPin, Mail } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "4+", icon: Rocket },
    { label: "Projects Completed", value: "30+", icon: Code },
    { label: "Client Satisfaction", value: "100%", icon: ShieldCheck },
    { label: "Collaborators & Teams", value: "15+", icon: Users },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Passion for Engineering & Design"
          subtitle="Get to know the developer behind the code and what drives my craft."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.1}>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                Hi there, I&apos;m {siteConfig.name}
              </h3>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {siteConfig.bio}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Over the past 4+ years, I have worked across the entire software development lifecycle—from whiteboard system architecture to shipping production-ready web apps for clients worldwide. I bridge the gap between intuitive design aesthetics and resilient backend logic.
              </p>
            </Reveal>

            {/* Location & Quick Contact */}
            <Reveal delay={0.3}>
              <div className="pt-2 flex flex-wrap gap-6 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  <span>{siteConfig.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-indigo-500" />
                  <span>{siteConfig.email}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={0.1 * (idx + 1)}>
                  <Card className="text-center p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 mb-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
                      {item.value}
                    </div>
                    <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                      {item.label}
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
