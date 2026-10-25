"use client";

import { servicesData } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/interactive/Reveal";
import { Code2, Rocket, Zap, Network, Clock, CheckCircle2 } from "lucide-react";

export default function Services() {
  const iconMap = {
    Code2,
    Rocket,
    Zap,
    Network,
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-zinc-50/50 dark:bg-zinc-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Freelance Offerings"
          title="How I Can Help Your Business"
          subtitle="Specialized consulting and development services designed to help founders and companies ship quickly and scale confidently."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;

            return (
              <Reveal key={service.title} delay={0.1 * (index + 1)}>
                <Card className="flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{service.timeline}</span>
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-zinc-900 dark:text-zinc-50">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                      Key Deliverables
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
