"use client";

import { achievementsData } from "@/data/achievements";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/interactive/TiltCard";
import Reveal from "@/components/interactive/Reveal";
import { Trophy, Award, BadgeCheck } from "lucide-react";

const iconMap = {
  Trophy,
  Award,
  BadgeCheck,
};

const typeConfig = {
  winner: {
    accentLine: "from-amber-400 via-yellow-500 to-amber-600",
    iconBg: "from-amber-500/20 to-yellow-600/20 text-amber-400 border-amber-500/30",
    glow: "rgba(245, 158, 11, 0.15)",
    borderHover: "hover:border-amber-500/50",
    pillBg: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    pillLabel: "2025",
  },
  finalist: {
    accentLine: "from-indigo-400 via-purple-500 to-indigo-600",
    iconBg: "from-indigo-500/20 to-purple-600/20 text-indigo-400 border-indigo-500/30",
    glow: "rgba(99, 102, 241, 0.15)",
    borderHover: "hover:border-indigo-500/50",
    pillBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    pillLabel: "2024",
  },
  certification: {
    accentLine: "from-teal-400 via-emerald-500 to-teal-600",
    iconBg: "from-teal-500/20 to-emerald-600/20 text-teal-400 border-teal-500/30",
    glow: "rgba(20, 184, 166, 0.15)",
    borderHover: "hover:border-teal-500/50",
    pillBg: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    pillLabel: "Certification",
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-zinc-50/50 dark:bg-zinc-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title: Only "Achievements" */}
        <SectionHeading
          badge="Milestones"
          title="Achievements"
        />

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 items-stretch">
          {achievementsData.map((item, index) => {
            const Icon = iconMap[item.icon] || Award;
            const style = typeConfig[item.type] || typeConfig.winner;
            const badgeText = item.year || style.pillLabel;

            return (
              <Reveal key={item.title} delay={0.15 * (index + 1)} className="h-full">
                <TiltCard
                  maxTilt={6}
                  glare={true}
                  className="h-full rounded-2xl p-0 transition-all duration-300 group"
                >
                  <div
                    className={`relative flex flex-col h-full rounded-2xl bg-zinc-900/60 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/80 ${style.borderHover} p-6 sm:p-7 overflow-hidden shadow-lg transition-all duration-300 group-hover:-translate-y-1`}
                  >
                    {/* Top edge accent gradient line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${style.accentLine}`}
                      aria-hidden="true"
                    />

                    {/* Ambient glow behind card on hover */}
                    <div
                      className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                      style={{ backgroundColor: style.glow }}
                      aria-hidden="true"
                    />

                    {/* Header Row: Icon Badge & Year/Type Pill */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${style.iconBg} border flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full border ${style.pillBg}`}
                      >
                        {badgeText}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
