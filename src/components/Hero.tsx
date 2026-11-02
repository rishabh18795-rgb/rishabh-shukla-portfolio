"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { asset, site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon } from "./icons";

const ease = [0.22, 1, 0.36, 1] as const;

const facts = [
  { value: "0 → 1", label: "Led MechServi from concept to live operations" },
  { value: "3+ yrs", label: "Running startup operations and growth" },
  { value: "6", label: "Sectors consulted, from automotive to education" },
  { value: "1.94×", label: "ROAS on an e-commerce catalogue campaign" },
];

export function Hero() {
  return (
    <section id="home" className="noise relative overflow-hidden pt-28 md:pt-36">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="glow-cyan pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[900px] -translate-x-1/2" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-live" />
            </span>
            Open to Founder&apos;s Office, Ops &amp; Growth roles
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-8 text-lg font-medium tracking-tight text-fg md:text-xl"
          >
            Rishabh Shukla
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.14, ease }}
            className="text-gradient mt-3 text-[2.75rem] font-medium leading-[0.98] tracking-[-0.035em] sm:text-6xl md:text-7xl xl:text-[5.6rem]"
          >
            I build <span className="font-serif font-normal italic text-fg">businesses</span>, systems, products &amp;{" "}
            <span className="font-serif font-normal italic text-cyan [-webkit-text-fill-color:currentColor]">growth engines.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          >
            Startup operator from Lucknow. For three years I&apos;ve run operations and growth at{" "}
            <span className="text-fg">MechServi</span>, a doorstep vehicle-service startup, taking it from concept to live
            operations. I turn business models into SOPs, acquisition funnels and shipped products.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-dim"
            aria-label="Positioning"
          >
            {site.positioning.map((p, i) => (
              <li key={p} className="flex items-center gap-3">
                {i > 0 && <span className="text-cyan/60">/</span>}
                {p}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_#3fe0ff] transition hover:bg-white"
            >
              Explore my work
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
            </a>
            <a
              href={asset(site.resume)}
              download={site.resumeFileName}
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 text-sm font-medium text-fg transition hover:border-fg"
            >
              <Download className="size-4" aria-hidden />
              Download resume
            </a>
            <div className="ml-1 flex items-center gap-2">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className="grid size-12 place-items-center rounded-full border border-line text-muted transition hover:border-cyan hover:text-cyan"
              >
                <LinkedInIcon className="size-[18px]" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className="grid size-12 place-items-center rounded-full border border-line text-muted transition hover:border-cyan hover:text-cyan"
              >
                <GitHubIcon className="size-[18px]" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-sm lg:mx-0"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-line bg-panel p-3">
            <div className="relative grid aspect-square place-items-center overflow-hidden rounded-[20px] bg-[radial-gradient(circle_at_50%_40%,rgba(63,224,255,0.14),transparent_65%)]">
              <div className="relative size-[86%] overflow-hidden rounded-full ring-1 ring-cyan/40 shadow-[0_0_60px_-10px_rgba(63,224,255,0.45)]">
                <Image
                  src={asset("/rishabh-shukla.jpg")}
                  alt="Portrait of Rishabh Shukla"
                  fill
                  priority
                  sizes="(min-width: 1024px) 330px, 80vw"
                  className="scale-[1.04] object-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-4">
              <div>
                <p className="text-sm font-medium">Startup Operations &amp; Growth Lead</p>
                <p className="mt-0.5 text-xs text-muted">MechServi · 2023 — Present</p>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-cyan">Now</span>
            </div>
          </div>
          <p className="mt-4 flex items-center gap-2 px-1 text-xs text-muted">
            <MapPin className="size-3.5 text-cyan" aria-hidden />
            {site.location} · Delhi NCR · Remote
          </p>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-20 max-w-7xl px-5 md:mt-28 md:px-8">
        <dl className="grid grid-cols-2 border-y border-line md:grid-cols-4">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08, ease }}
              className={`py-7 pr-4 md:px-6 ${i % 2 ? "pl-4 border-l border-line" : ""} ${i > 0 ? "md:border-l md:border-line" : "md:pl-0"} ${i > 1 ? "border-t border-line md:border-t-0" : ""}`}
            >
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="block font-serif text-4xl italic text-fg md:text-5xl">{f.value}</span>
                <span className="mt-2 block text-sm leading-snug text-muted">{f.label}</span>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
