"use client";

import { siteConfig } from "@/data/site";
import Reveal from "@/components/interactive/Reveal";
import TypingText from "@/components/interactive/TypingText";
import TiltCard from "@/components/interactive/TiltCard";
import Button from "@/components/ui/Button";
import { ArrowRight, Download, Sparkles, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  const typingWords = [
    "Full-Stack Architect",
    "React & Next.js Specialist",
    "Modern Web Consultant",
    "Scalable Systems Engineer",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text / CTA Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Availability Pill */}
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for freelance contracts &amp; roles</span>
              </div>
            </Reveal>

            {/* Main Headline */}
            <Reveal delay={0.2}>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
                .
              </h1>
            </Reveal>

            {/* Dynamic Animated Subtitle */}
            <Reveal delay={0.3}>
              <div className="mt-4 text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
                <span>I build </span>
                <TypingText words={typingWords} className="text-indigo-600 dark:text-indigo-400" />
              </div>
            </Reveal>

            {/* Tagline */}
            <Reveal delay={0.4}>
              <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {siteConfig.tagline}
              </p>
            </Reveal>

            {/* CTA Action Buttons */}
            <Reveal delay={0.5}>
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button href="#projects" variant="primary" size="lg">
                  <span>Explore Work</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  href={siteConfig.resumePath}
                  variant="outline"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  <span>Resume</span>
                </Button>
                <Button href="#contact" variant="ghost" size="lg">
                  <span>Hire Me</span>
                </Button>
              </div>
            </Reveal>

            {/* Social Links */}
            <Reveal delay={0.6}>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-zinc-500 dark:text-zinc-400 text-sm">
                <span>Connect with me:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2 rounded-lg hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2 rounded-lg hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                    className="p-2 rounded-lg hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <FaXTwitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Interactive Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal delay={0.3} className="w-full max-w-md">
              <TiltCard className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-3xl border border-zinc-800 shadow-2xl relative">
                {/* Code Editor Header */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>developer.js</span>
                  </div>
                  <div className="w-12" />
                </div>

                {/* Code snippet preview */}
                <pre className="font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-purple-400">const</span> developer = {"{\n"}
                    {"  "}name: <span className="text-emerald-300">&apos;Hemant Borase&apos;</span>,{"\n"}
                    {"  "}title: <span className="text-emerald-300">&apos;Full Stack Engineer&apos;</span>,{"\n"}
                    {"  "}focus: [<span className="text-amber-300">&apos;Next.js&apos;</span>, <span className="text-amber-300">&apos;React&apos;</span>, <span className="text-amber-300">&apos;Node&apos;</span>],{"\n"}
                    {"  "}cleanCode: <span className="text-cyan-300">true</span>,{"\n"}
                    {"  "}hardWorker: <span className="text-cyan-300">true</span>,{"\n"}
                    {"  "}openToWork: <span className="text-cyan-300">true</span>,{"\n"}
                    {"};"}
                  </code>
                </pre>

                {/* Floating Highlight Badge */}
                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-1 text-indigo-400">
                    <Sparkles className="w-4 h-4" />
                    <span>Production Grade</span>
                  </div>
                  <span className="text-zinc-500">100% Client Satisfaction</span>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
