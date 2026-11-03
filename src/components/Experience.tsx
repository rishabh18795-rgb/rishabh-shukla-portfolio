"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, GraduationCap } from "lucide-react";
import { coreExperience, engagements, engagementsPeriod, type Experience as Exp } from "@/lib/content";
import { Reveal, SectionHeading } from "./ui";

function ExperienceItem({ e, open, onToggle, highlight }: { e: Exp; open: boolean; onToggle: () => void; highlight?: boolean }) {
  const panelId = `exp-${e.id}`;
  return (
    <div
      className={`rounded-2xl border transition-colors ${
        open ? "border-line-strong bg-white/[0.025]" : "border-line bg-white/[0.01] hover:border-line-strong"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start gap-4 p-5 text-left md:p-6"
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h4 className={`font-medium tracking-tight ${highlight ? "text-xl md:text-2xl" : "text-lg"}`}>{e.name}</h4>
            <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
              {e.kind}
            </span>
          </div>
          <p className="mt-1 text-sm text-cyan">{e.role}</p>
          <p className="mt-2 text-sm text-muted">{e.description}</p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-3">
          {e.period && <span className="font-mono text-xs text-fg/80">{e.period}</span>}
          <span
            className={`grid size-8 place-items-center rounded-full border border-line transition-transform ${open ? "rotate-180 border-cyan/50 text-cyan" : "text-muted"}`}
          >
            <ChevronDown className="size-4" aria-hidden />
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-line px-5 pb-6 pt-5 md:px-6">
              <ul className="space-y-2.5">
                {e.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-fg/85">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>
              {e.contribution && (
                <div className="mt-5 rounded-xl border border-cyan/20 bg-cyan-soft/40 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-cyan">Key contribution</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg">{e.contribution}</p>
                </div>
              )}
              {e.link && (
                <a
                  href={e.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-cyan"
                >
                  {e.link.label}
                  <ArrowUpRight className="size-3.5" aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Experience() {
  const [open, setOpen] = useState<Set<string>>(() => new Set(["mechservi"]));
  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <section id="experience" className="relative border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="02"
          label="Experience"
          title={
            <>
              What I&apos;ve <span className="font-serif font-normal italic text-cyan">executed</span>.
            </>
          }
          intro="Roles first, then consulting and project engagements. Select an entry for details."
        />

        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <Reveal className="hidden lg:block">
            <div className="sticky top-28 space-y-6 border-l border-line pl-5">
              <div className="relative">
                <span className="absolute -left-[25px] top-1 size-2.5 rounded-full bg-cyan shadow-[0_0_10px_#3fe0ff]" aria-hidden />
                <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">2022 — Present</p>
                <p className="mt-1 text-sm text-muted">Operating &amp; freelance roles</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[25px] top-1 size-2.5 rounded-full border border-line-strong bg-ink" aria-hidden />
                <p className="font-mono text-[11px] uppercase tracking-widest text-fg/80">{engagementsPeriod}</p>
                <p className="mt-1 text-sm text-muted">Independent consulting: {engagements.length} engagements</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">Roles</h3>
            </Reveal>
            <div className="grid gap-3">
              {coreExperience.map((e, i) => (
                <Reveal key={e.id} delay={i * 0.05}>
                  <ExperienceItem e={e} open={open.has(e.id)} onToggle={() => toggle(e.id)} highlight />
                </Reveal>
              ))}
            </div>

            <Reveal className="mb-4 mt-14 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">Consulting &amp; project engagements</h3>
              <p className="text-xs text-dim">
                {engagementsPeriod} · Independent / remote · Titles are roles held on each engagement, not employment.
              </p>
            </Reveal>
            <div className="grid gap-3 md:grid-cols-2 md:items-start">
              {engagements.map((e, i) => (
                <Reveal key={e.id} delay={(i % 2) * 0.05}>
                  <ExperienceItem e={e} open={open.has(e.id)} onToggle={() => toggle(e.id)} />
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-8">
              <div className="flex items-center gap-4">
                <GraduationCap className="size-5 text-cyan" aria-hidden />
                <div>
                  <p className="font-medium">Bachelor of Technology (B.Tech)</p>
                  <p className="text-sm text-muted">Glocal University, Saharanpur</p>
                </div>
              </div>
              <span className="font-mono text-xs text-fg/80">2013 — 2017</span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
