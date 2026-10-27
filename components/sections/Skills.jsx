"use client";

import { useState } from "react";
import { skillsData } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/interactive/Reveal";
import { Layers, Server, Database, Wrench, Code2, Bot } from "lucide-react";

export default function Skills() {
  const categories = Object.keys(skillsData);
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryIcons = {
    Languages: Code2,
    Frontend: Layers,
    Backend: Server,
    Database: Database,
    AI: Bot,
    Tools: Wrench,
  };

  const filteredCategories =
    activeCategory === "All"
      ? categories
      : categories.filter((cat) => cat === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-zinc-50/50 dark:bg-zinc-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Arsenal"
          title="Skills &amp; Technologies"
          subtitle="A comprehensive overview of the modern tools and frameworks I use to engineer robust products."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              suppressHydrationWarning
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 border border-zinc-200 dark:border-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category] || Layers;
            const items = skillsData[category] || [];

            return (
              <Reveal key={category} delay={0.1}>
                <Card className="h-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50">
                        {category}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {items.length} key competencies
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 rounded-xl text-sm font-medium bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800/60 text-zinc-800 dark:text-zinc-200"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
