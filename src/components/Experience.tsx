"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, Factory, GraduationCap } from "lucide-react";
import { coreExperience, engagements, industrialTraining, type Experience as Exp } from "@/lib/content";
import { Reveal, SectionHeading } from "./ui";

const journey = [
  { title: "Engineering foundation", body: "Mechanical engineering and industrial training in plant and manufacturing environments.", target: "exp-engineering" },
  { title: "Startup building", body: "Founded and ran MechServi, plus earlier growth and e-commerce work for businesses.", target: "exp-roles" },
  { title: "Consulting & products", body: `Strategy, growth and technology delivery across ${engagements.length} engagements.`, target: "exp-consulting" },
];

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
        <div className="flex shrink-0 flex-col items-end">
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
              {e.link?.href.startsWith("/") && (
                <Link
                  href={e.link.href}
                  className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-cyan transition hover:text-fg"
                >
                  {e.link.label}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              )}
              {e.link && !e.link.href.startsWith("/") && (
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
          intro="From an engineering foundation in industrial environments to founding a startup, consulting and building digital products. Select an entry for details."
        />

        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <Reveal className="hidden lg:block">
            <ol className="sticky top-28 space-y-6 border-l border-line pl-5" aria-label="Professional journey">
              {journey.map((j, i) => (
                <li key={j.title} className="relative">
                  <span
                    className={`absolute -left-[25px] top-1 size-2.5 rounded-full ${
                      i === 1 ? "bg-cyan shadow-[0_0_10px_#3fe0ff]" : "border border-line-strong bg-ink"
                    }`}
                    aria-hidden
                  />
                  <a href={`#${j.target}`} className="font-mono text-[11px] uppercase tracking-widest text-fg/85 transition hover:text-cyan">
                    {j.title}
                  </a>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{j.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <div>
            <Reveal>
              <h3 id="exp-roles" className="mb-4 scroll-mt-28 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">Roles</h3>
            </Reveal>
            <div className="grid gap-3">
              {coreExperience.map((e, i) => (
                <Reveal key={e.id} delay={i * 0.05}>
                  <ExperienceItem e={e} open={open.has(e.id)} onToggle={() => toggle(e.id)} highlight />
                </Reveal>
              ))}
            </div>

            <Reveal className="mb-4 mt-14 flex flex-wrap items-baseline justify-between gap-2">
              <h3 id="exp-consulting" className="scroll-mt-28 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                Consulting &amp; project engagements
              </h3>
              <p className="text-xs text-dim">Independent / remote · Titles are roles held on each engagement, not employment.</p>
            </Reveal>
            <div className="grid gap-3 md:grid-cols-2 md:items-start">
              {engagements.map((e, i) => (
                <Reveal key={e.id} delay={(i % 2) * 0.05}>
                  <ExperienceItem e={e} open={open.has(e.id)} onToggle={() => toggle(e.id)} />
                </Reveal>
              ))}
            </div>

            <div id="exp-engineering" className="mt-16 scroll-mt-28 border-t border-line pt-14">
              <Reveal className="max-w-2xl">
                <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                  Engineering Foundations &amp;{" "}
                  <span className="font-serif font-normal italic text-cyan">Industrial Experience</span>
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Industrial training during my B.Tech in Mechanical Engineering gave me first-hand exposure to plants,
                  machinery and production environments: an early, practical view of how work flows on the ground that I
                  later drew on when setting up operations at MechServi.
                </p>
              </Reveal>
              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {industrialTraining.map((t, i) => (
                  <Reveal key={t.org} delay={i * 0.05} className="h-full">
                    <article className="flex h-full flex-col rounded-2xl border border-line bg-white/[0.015] p-6 transition-colors hover:border-line-strong">
                      <div className="flex items-start justify-between gap-3">
                        <Factory className="size-5 text-cyan" aria-hidden />
                        <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                          {t.kind}
                        </span>
                      </div>
                      <h4 className="mt-5 text-lg font-medium tracking-tight">{t.org}</h4>
                      <p className="mt-1 text-sm text-cyan">{t.unit}</p>
                      <ul className="mt-4 space-y-2">
                        {t.points.map((pt) => (
                          <li key={pt} className="flex gap-3 text-sm leading-relaxed text-fg/80">
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan" aria-hidden />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="mt-14 flex items-center gap-4 border-t border-line pt-8">
              <GraduationCap className="size-5 text-cyan" aria-hidden />
              <div>
                <p className="font-medium">Bachelor of Technology (B.Tech), Mechanical Engineering</p>
                <p className="text-sm text-muted">Glocal University, Saharanpur</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
