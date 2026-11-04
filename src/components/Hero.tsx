"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Blocks, Cog, LineChart, MapPin, Rocket, type LucideIcon } from "lucide-react";
import { asset, site } from "@/lib/site";
import { Reveal } from "./ui";

const expertise = ["Startup Building", "Strategy & Operations", "Growth & GTM", "Digital Products", "Business Development"];

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
        <motion.p
          {...fadeUp(0)}
          className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.12em] text-cyan sm:text-xs sm:tracking-[0.28em]"
        >
          <span className="hidden h-px w-10 shrink-0 bg-cyan/60 sm:block" aria-hidden />
          Strategy · Business Operations · Growth
        </motion.p>

        <motion.p {...fadeUp(0.06)} className="mt-8 text-3xl font-medium tracking-[-0.03em] text-fg md:text-4xl">
          Rishabh <span className="font-serif font-normal italic">Shukla</span>
        </motion.p>

        <motion.h1
          {...fadeUp(0.12)}
          className="mt-5 max-w-5xl text-[2.4rem] font-medium leading-[1.06] tracking-[-0.035em] text-fg sm:text-6xl md:text-[4.25rem]"
        >
          I build businesses, <span className="font-serif font-normal italic text-cyan">drive growth</span>{" "}
          <span className="text-fg/75">and turn strategy into</span>{" "}
          <span className="font-serif font-normal italic text-cyan">execution.</span>
        </motion.h1>

        <motion.p {...fadeUp(0.18)} className="mt-8 max-w-3xl text-lg leading-relaxed text-fg/70 md:text-xl md:leading-relaxed">
          An entrepreneur and business operator with hands-on experience building ventures, developing digital products,
          driving customer acquisition, establishing operational systems and growing business partnerships. I combine
          strategic thinking with execution to turn business opportunities into measurable outcomes.
        </motion.p>

        <motion.ul
          {...fadeUp(0.24)}
          aria-label="Areas of expertise"
          className="mt-8 flex max-w-4xl flex-wrap items-center gap-x-4 gap-y-2 border-y border-line py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-fg/80 sm:text-xs"
        >
          {expertise.map((e, i) => (
            <li key={e} className="flex items-center gap-4 whitespace-nowrap">
              {e}
              {i < expertise.length - 1 && <span className="size-1 rounded-full bg-cyan/70" aria-hidden />}
            </li>
          ))}
        </motion.ul>

        <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-4 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_#3fe0ff] transition hover:bg-white"
          >
            Let&apos;s Discuss Opportunities
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-4 text-sm font-medium text-fg transition hover:border-fg"
          >
            Explore My Work
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
        </motion.div>
        <motion.p {...fadeUp(0.36)} className="mt-6 flex items-center gap-2 text-sm text-muted">
          <MapPin className="size-4 text-cyan" aria-hidden />
          {site.availability}
        </motion.p>
      </div>
    </section>
  );
}

const focusAreas: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Startup building & strategy",
    body: "Founded and ran MechServi: business model, service design, pricing structure and partnerships.",
    icon: Rocket,
  },
  {
    title: "Operations & systems",
    body: "SOPs, vendor onboarding, field-team coordination, CRM and WhatsApp workflows that run without constant oversight.",
    icon: Cog,
  },
  {
    title: "Growth & go-to-market",
    body: "Meta and Google Ads, WhatsApp-first funnels and local launch plans for MechServi, SetoraHome and InstaBeam.",
    icon: LineChart,
  },
  {
    title: "Digital products",
    body: "Requirements, architecture and delivery for marketplaces and apps, from MechServi's customer and partner apps to BlooCube.",
    icon: Blocks,
  },
];

/** Part of Home: kept short and factual. */
export function Overview() {
  return (
    <section aria-labelledby="overview-title" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p id="overview-title" className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            What I bring
          </p>
          <p className="mt-6 text-2xl font-medium leading-snug tracking-tight text-fg md:text-3xl">
            I take ownership of a business problem end to end:{" "}
            <span className="text-fg/60">
              set the strategy, build the systems and products, acquire the customers and run the operations.
            </span>
          </p>
          <p className="mt-6 max-w-lg leading-relaxed text-muted">
            Experience across a founded startup, independent consulting and product engagements, working directly with
            founders, partners, field teams and developers.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2" aria-label="Capabilities">
            {focusAreas.map(({ title, body, icon: Icon }, i) => (
              <li key={title} className="flex flex-col gap-6 bg-ink-2 p-7 transition-colors hover:bg-panel">
                <div className="flex items-center justify-between">
                  <Icon className="size-5 text-cyan" aria-hidden />
                  <span className="font-mono text-xs text-dim">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium leading-snug tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-2">
          <Link
            href="/mechservi/"
            aria-label="Explore MechServi case study"
            className="group grid overflow-hidden rounded-3xl border border-line bg-ink-2 transition-colors hover:border-cyan/50 lg:grid-cols-[1fr_1.05fr]"
          >
            <div className="flex flex-col justify-center p-7 md:p-10">
              <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan">
                <span className="h-px w-8 bg-cyan/60" aria-hidden />
                Featured case study
              </p>
              <h2 className="mt-5 text-2xl font-medium leading-snug tracking-tight text-fg md:text-3xl">
                MechServi – Building a connected{" "}
                <span className="font-serif font-normal italic text-cyan">vehicle-care marketplace</span>
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                Developed a technology-enabled vehicle-care business connecting customers, garages and service partners
                through digital platforms, performance marketing, WhatsApp automation and operational systems.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition group-hover:text-fg">
                Explore MechServi Case Study
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
            <div className="relative border-t border-line bg-panel p-5 md:p-7 lg:border-l lg:border-t-0">
              <div className="overflow-hidden rounded-xl border border-line shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
                <Image
                  src={asset("/mechservi/website-hero.jpg")}
                  alt="MechServi website: doorstep vehicle-care services in Lucknow"
                  width={1184}
                  height={740}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
