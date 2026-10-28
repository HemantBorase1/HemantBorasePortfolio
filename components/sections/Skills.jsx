"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillsData } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0.3 }
        : {
            staggerChildren: 0.05,
            delayChildren: 0.1,
          },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-zinc-50/50 dark:bg-zinc-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Arsenal"
          title="Skills &amp; Technologies"
          subtitle="A comprehensive overview of the modern tools and frameworks I use to engineer robust products."
        />

        {/* Clean responsive grid: ~3 cols mobile, 4-5 cols tablet, 6-7 cols desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-y-10 gap-x-6 sm:gap-y-12 sm:gap-x-8 items-center justify-items-center max-w-5xl mx-auto mt-12"
        >
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            const brandColor = skill.color;

            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.12,
                        y: -6,
                        transition: { duration: 0.25, ease: "easeOut" },
                      }
                }
                className="group flex flex-col items-center justify-center text-center cursor-pointer select-none relative"
              >
                {/* Soft ambient brand glow on hover */}
                <div
                  className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300 pointer-events-none -z-10"
                  style={{ backgroundColor: brandColor }}
                  aria-hidden="true"
                />

                {/* Icon: muted gray by default, transitions to brand color on hover */}
                <div
                  className="text-zinc-400 transition-colors duration-300 group-hover:text-[var(--hover-color)] flex items-center justify-center"
                  style={{ "--hover-color": brandColor }}
                >
                  <Icon className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 drop-shadow-sm" />
                </div>

                {/* Skill Name */}
                <span className="mt-3 text-xs sm:text-sm font-medium text-zinc-400 group-hover:text-zinc-100 transition-colors duration-300 tracking-tight text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
