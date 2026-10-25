"use client";

import { achievementsData } from "@/data/achievements";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/interactive/Reveal";
import { Trophy, Award, Star } from "lucide-react";

export default function Achievements() {
  const icons = [Trophy, Award, Star];

  return (
    <section id="achievements" className="py-20 md:py-28 bg-zinc-50/50 dark:bg-zinc-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Milestones"
          title="Honors &amp; Recognition"
          subtitle="Key milestones, hackathon wins, and verified industry credentials."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {achievementsData.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Reveal key={item.title} delay={0.1 * (index + 1)}>
                <Card className="flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
