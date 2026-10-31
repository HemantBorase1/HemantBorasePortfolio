"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { educationData } from "@/data/education";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import TiltCard from "@/components/interactive/TiltCard";
import Reveal from "@/components/interactive/Reveal";
import { slideInLeft, slideInRight, fadeUp } from "@/lib/animations";
import { GraduationCap, Calendar } from "lucide-react";

/** Floating glass badge pinned around the profile photo */
function ProfileBadge({ label, icon, className, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`absolute hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full
        bg-white/70 dark:bg-zinc-900/80 backdrop-blur-md
        border border-zinc-200/80 dark:border-zinc-700/80
        text-xs font-semibold text-zinc-900 dark:text-zinc-100 shadow-xl
        select-none pointer-events-none z-20 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={
        shouldReduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: [0, -6, 0] }
      }
      transition={{
        opacity: { delay, duration: 0.5 },
        y: shouldReduceMotion
          ? { duration: 0.5 }
          : {
              delay,
              duration: 3.5 + delay * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            },
      }}
    >
      <span aria-hidden="true">{icon}</span>
      <span>{label}</span>
    </motion.div>
  );
}

/** Interactive profile picture with TiltCard, glow, rotating shimmer ring, badges, and fallback */
function ProfileCard() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto group">
      {/* Soft indigo/violet glow behind the photo - brightens on hover */}
      <div
        className="absolute inset-0 -z-10 rounded-3xl blur-2xl sm:blur-3xl opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.5) 0%, rgba(168,85,247,0.3) 50%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Floating glass badges */}
      <ProfileBadge
        label="Full Stack Developer"
        icon="💻"
        className="-top-3 -right-2 sm:-right-4"
        delay={0.8}
      />
      <ProfileBadge
        label="Open to Work"
        icon="🟢"
        className="-bottom-3 -left-2 sm:-left-4"
        delay={1.2}
      />

      {/* Tilt Card 3D effect */}
      <TiltCard
        maxTilt={8}
        glare={true}
        className="relative rounded-3xl p-1.5 transition-all duration-300"
      >
        {/* Shimmering gradient border ring */}
        <div
          className="absolute inset-0 rounded-3xl p-0.5 pointer-events-none -z-10 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"
          aria-hidden="true"
        />

        {/* Inner container with subtle border */}
        <div className="relative rounded-[22px] overflow-hidden bg-zinc-900 border border-zinc-200/30 dark:border-zinc-800/80 shadow-2xl">
          {imgError ? (
            /* Fallback avatar with initials HB */
            <div
              className="w-full aspect-[4/5] bg-gradient-to-br from-indigo-950 via-zinc-900 to-purple-950 flex flex-col items-center justify-center gap-3 select-none"
              aria-label="Profile photo placeholder"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg">
                HB
              </div>
              <p className="text-sm font-semibold text-zinc-300">{siteConfig.name}</p>
            </div>
          ) : (
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Hemant Borase profile photograph"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                onError={() => setImgError(true)}
              />
            </div>
          )}
        </div>
      </TiltCard>
    </div>
  );
}

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  // Split siteConfig.summary into 2 short readable paragraphs
  const paragraph1 =
    "Enthusiastic Software Developer passionate about building scalable, high-performance applications using strong technical and problem-solving skills.";
  const paragraph2 =
    "Proficient in Core Java, OOP, and full-stack development with Next.js, Node.js, SQL, Supabase, and RESTful APIs, with experience delivering secure, scalable solutions and integrating Artificial Intelligence to build intelligent, data-driven applications.";

  const leftVariant = shouldReduceMotion ? fadeUp : slideInLeft;
  const rightVariant = shouldReduceMotion ? fadeUp : slideInRight;

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="About Me"
          align="left"
          className="mb-10 md:mb-14"
        />

        {/* Two-column layout: Photo on left, About content on right (desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Profile Picture */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <Reveal variants={leftVariant} delay={0.1} duration={0.7} className="w-full flex justify-center">
              <ProfileCard />
            </Reveal>
          </div>

          {/* Right Column: About content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col justify-center">
            <Reveal variants={rightVariant} delay={0.2} duration={0.7}>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                    {siteConfig.name}
                  </span>
                </h3>

                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {paragraph1}
                </p>

                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {paragraph2}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Education Timeline */}
        <Reveal delay={0.3} className="mt-16 md:mt-20">
          <div className="pt-6 border-t border-zinc-200/70 dark:border-zinc-800/80">
            <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span>Education</span>
            </h4>

            <div className="relative max-w-4xl">
              {/* Vertical timeline bar */}
              <div
                className="absolute left-3 sm:left-4 top-2 bottom-2 w-0.5 bg-zinc-200 dark:bg-zinc-800"
                aria-hidden="true"
              />
              <div className="space-y-6">
                {educationData.map((edu) => (
                  <div key={edu.degree} className="relative flex items-start gap-4 sm:gap-6 pl-9 sm:pl-12">
                    {/* Timeline dot */}
                    <span className="absolute left-0 sm:left-1 top-2 w-6 h-6 rounded-full bg-white dark:bg-zinc-900 border-2 border-indigo-500 shadow-sm shadow-indigo-500/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
                    </span>
                    <Card className="flex-1 p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-indigo-500/40 transition-colors">
                      <p className="text-base font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
                        {edu.degree}
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                        {edu.institution}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{edu.period}</span>
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 font-semibold border border-indigo-100 dark:border-indigo-900/60">
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
    </section>
  );
}
