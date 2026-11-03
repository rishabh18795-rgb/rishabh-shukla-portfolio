"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { asset, site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Portrait } from "./Portrait";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export function Hero() {
  return (
    <section id="home" className="noise relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 md:pt-32">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="glow-cyan pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[900px] -translate-x-1/2" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-live" />
            </span>
            Open to Strategy &amp; Operations roles
          </motion.p>

          <motion.div {...fadeUp(0.08)} className="mt-8">
            <p className="text-xl font-medium tracking-tight text-fg md:text-2xl">Rishabh Shukla</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.22em] text-cyan">{site.designation}</p>
          </motion.div>

          <motion.h1
            {...fadeUp(0.14)}
            className="text-gradient mt-6 text-[2.6rem] font-medium leading-[1] tracking-[-0.035em] sm:text-6xl xl:text-7xl"
          >
            I build <span className="font-serif font-normal italic text-fg">businesses</span>, systems, products &amp;{" "}
            <span className="font-serif font-normal italic text-cyan [-webkit-text-fill-color:currentColor]">growth engines.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.22)} className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            3+ years of startup execution, from launching a doorstep vehicle-service business to building GTM, growth and
            product systems for early-stage teams.
          </motion.p>

          <motion.ul {...fadeUp(0.28)} className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
            {site.positioning.map((p) => (
              <li key={p} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-fg/80">
                {p}
              </li>
            ))}
          </motion.ul>

          <motion.div {...fadeUp(0.34)} className="mt-10 flex flex-wrap items-center gap-3">
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
            <div className="flex items-center gap-2 sm:ml-1">
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
          className="mx-auto w-full max-w-[290px] sm:max-w-[360px] lg:mx-0 lg:justify-self-end"
        >
          <div className="rounded-[28px] border border-line bg-panel/80 p-3 backdrop-blur">
            <div className="grid aspect-square place-items-center rounded-[20px] bg-[radial-gradient(circle_at_50%_40%,rgba(63,224,255,0.14),transparent_65%)]">
              <Portrait priority className="w-[84%]" sizes="(min-width: 1024px) 300px, 70vw" />
            </div>
            <div className="px-2 pb-1 pt-4">
              <p className="text-sm font-medium">{site.designation}</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                <MapPin className="size-3.5 text-cyan" aria-hidden />
                Lucknow, India · Open to Delhi NCR &amp; Remote
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
