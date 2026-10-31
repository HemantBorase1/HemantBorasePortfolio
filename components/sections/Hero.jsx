"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import Reveal from "@/components/interactive/Reveal";
import TypingText from "@/components/interactive/TypingText";
import Button from "@/components/ui/Button";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

/** Developer image with radial mask blend, glow, float animation, and fallback */
function HeroIllustration() {
  const [imgError, setImgError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Floating animation definition
  const floatingAnimate = shouldReduceMotion
    ? { opacity: 1, scale: 1, y: 0 }
    : {
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      };

  const floatingTransition = shouldReduceMotion
    ? { duration: 0.8, ease: "easeOut" }
    : {
        opacity: { duration: 0.8, ease: "easeOut" },
        scale: { duration: 0.8, ease: "easeOut" },
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        },
      };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Soft blurred accent glow behind the illustration */}
      <div
        className="absolute inset-4 -z-10 rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.35) 0%, rgba(139,92,246,0.2) 50%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Motion wrapper with fade-in, slight scale-up, and floating loop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={floatingAnimate}
        transition={floatingTransition}
        className="relative w-full overflow-hidden"
      >
        {imgError ? (
          /* Placeholder with matching 1078/768 aspect ratio */
          <div
            className="w-full aspect-[1078/768] rounded-2xl bg-gradient-to-br from-indigo-950/60 via-zinc-900/60 to-purple-950/60 flex flex-col items-center justify-center gap-3 border border-indigo-500/20"
            aria-label="Developer illustration placeholder"
          >
            <div className="text-5xl select-none" aria-hidden="true">
              👨‍💻
            </div>
            <p className="text-xs text-zinc-400 font-mono">hero-developer.png</p>
          </div>
        ) : (
          <div
            className="w-full relative flex items-center justify-center"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 95% 90% at 50% 50%, black 55%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 95% 90% at 50% 50%, black 55%, transparent 100%)",
            }}
          >
            <Image
              src="/images/hero-developer.png"
              alt="Illustration of a full stack developer working at a desk with Next.js, React, Node.js, Supabase, Java, SQL and Tailwind"
              width={1078}
              height={768}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto object-contain select-none pointer-events-none"
              onError={() => setImgError(true)}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const typingWords = siteConfig.heroWords || ["Software Developer", "Freelancer"];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ── Left — Text & CTA ── */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Availability pill */}
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for freelance contracts &amp; roles</span>
              </div>
            </Reveal>

            {/* Main headline - font-serif applied for the Hero name/title */}
            <Reveal delay={0.2}>
              <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
                .
              </h1>
            </Reveal>

            {/* Dynamic Animated Subtitle: "I am a " + changing words */}
            <Reveal delay={0.3}>
              <div className="mt-4 text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300 flex flex-wrap items-center justify-center lg:justify-start min-h-[2.5rem]">
                <span className="mr-2 whitespace-nowrap">I am a</span>
                <span className="inline-block min-w-[210px] sm:min-w-[260px] text-left">
                  <TypingText
                    words={typingWords}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                </span>
              </div>
            </Reveal>

            {/* Tagline */}
            <Reveal delay={0.4}>
              <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {siteConfig.tagline}
              </p>
            </Reveal>

            {/* CTA buttons */}
            <Reveal delay={0.5}>
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button href="#projects" variant="primary" size="lg">
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button href="#contact" variant="outline" size="lg">
                  <span>Contact Me</span>
                </Button>
                <Button
                  href={siteConfig.resume}
                  variant="ghost"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  <span>Resume</span>
                </Button>
              </div>
            </Reveal>

            {/* Social links */}
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
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right — Developer illustration panel ── */}
          <div className="lg:col-span-5 flex justify-center items-center mt-6 lg:mt-0 w-full overflow-hidden">
            <Reveal delay={0.35} className="w-full">
              <HeroIllustration />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
