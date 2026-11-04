"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Blocks, Cog, LineChart, MapPin, Rocket, type LucideIcon } from "lucide-react";
import { traction } from "@/lib/mechservi";
import { site } from "@/lib/site";
import { Reveal } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export function Hero() {
  return (
    <section id="home" className="noise relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="glow-cyan pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[1000px] -translate-x-1/2" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <motion.p {...fadeUp(0)} className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan sm:text-xs sm:tracking-[0.28em]">
          <span className="h-px w-6 shrink-0 bg-cyan/60 sm:w-10" aria-hidden />
          Strategy, Operations &amp; Growth
        </motion.p>

        <motion.p
          {...fadeUp(0.08)}
          className="mt-8 text-3xl font-medium tracking-[-0.03em] text-fg md:text-4xl"
        >
          Rishabh <span className="font-serif font-normal italic">Shukla</span>
        </motion.p>

        <motion.h1
          {...fadeUp(0.16)}
          className="text-gradient mt-5 max-w-5xl text-[2.6rem] font-medium leading-[1.04] tracking-[-0.035em] sm:text-6xl md:text-7xl"
        >
          Turning business ideas into execution,{" "}
          <span className="font-serif font-normal italic text-cyan [-webkit-text-fill-color:currentColor]">growth and results.</span>
        </motion.h1>

        <motion.p {...fadeUp(0.24)} className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          I work across business operations, performance marketing and digital product development, helping businesses
          acquire customers, improve processes and execute technology-driven initiatives.
        </motion.p>

        <motion.div {...fadeUp(0.32)} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-4 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_#3fe0ff] transition hover:bg-white"
          >
            View Experience
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-4 text-sm font-medium text-fg transition hover:border-fg"
          >
            Explore Projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
          <a href="#contact" className="px-3 py-4 text-sm font-medium text-muted transition hover:text-fg">
            Contact
          </a>
        </motion.div>
        <motion.p {...fadeUp(0.4)} className="mt-8 flex items-center gap-2 text-sm text-muted">
          <MapPin className="size-4 text-cyan" aria-hidden />
          {site.availability}
        </motion.p>
      </div>
    </section>
  );
}

const focusAreas: { title: string; icon: LucideIcon }[] = [
  { title: "Business Strategy & Operations", icon: Cog },
  { title: "Growth & Go-to-Market", icon: Rocket },
  { title: "Product & Marketplace Operations", icon: Blocks },
  { title: "Process Automation & Technology Implementation", icon: LineChart },
];

/** Part of Home: kept short and factual. */
export function Overview() {
  return (
    <section aria-labelledby="overview-title" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p id="overview-title" className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            Professional overview
          </p>
          <p className="mt-6 text-2xl font-medium leading-snug tracking-tight text-fg md:text-3xl">
            With experience in building and operating businesses, I have worked across business development, growth
            marketing, marketplace operations, vendor management, customer acquisition and technology implementation.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2" aria-label="Focus areas">
            {focusAreas.map(({ title, icon: Icon }, i) => (
              <li key={title} className="flex flex-col justify-between gap-10 bg-ink-2 p-7 transition-colors hover:bg-panel">
                <div className="flex items-center justify-between">
                  <Icon className="size-5 text-cyan" aria-hidden />
                  <span className="font-mono text-xs text-dim">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-medium leading-snug tracking-tight">{title}</h3>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-2">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">MechServi traction</p>
            <Link href="/mechservi/" className="group inline-flex items-center gap-1.5 text-sm font-medium text-cyan hover:text-fg">
              Sources & methodology
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
            {traction.map((m) => (
              <div key={m.label} className="bg-ink-2 p-6 md:p-7">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="block font-serif text-4xl italic leading-none md:text-5xl">{m.value}</span>
                  <span className="mt-3 block font-medium tracking-tight">{m.label}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted">{m.note}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
