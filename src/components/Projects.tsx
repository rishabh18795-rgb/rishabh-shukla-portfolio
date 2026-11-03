import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";
import { moreRepos, projects, type Project } from "@/lib/content";
import { asset } from "@/lib/site";
import { GitHubIcon } from "./icons";
import { Chip, Reveal, SectionHeading } from "./ui";

const tone = {
  live: "border-live/30 text-live",
  progress: "border-amber/30 text-amber",
  private: "border-line-strong text-muted",
};

function ProjectCase({ p, index }: { p: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article id={`project-${p.slug}`} className="grid gap-10 border-t border-line py-16 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <Reveal className={`lg:sticky lg:top-24 lg:self-start ${flip ? "lg:order-2" : ""}`}>
        <a
          href={p.links[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-2xl border border-line bg-panel"
          aria-label={`Open ${p.name} live site (opens in a new tab)`}
        >
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="ml-3 truncate font-mono text-[11px] text-dim">{p.links[0].href.replace("https://", "")}</span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={asset(p.image)}
              alt={p.imageAlt}
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </a>
        <p className="mt-3 font-mono text-[11px] text-dim">Screenshot of the live site, captured November 2026.</p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-cyan">0{index + 1}</span>
          <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest ${tone[p.status.tone]}`}>
            {p.status.label}
          </span>
        </div>
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{p.kicker}</p>
        <h3 className="mt-2 text-4xl font-medium tracking-tight md:text-5xl">{p.name}</h3>
        <p className="mt-4 text-lg leading-relaxed text-fg/85">{p.tagline}</p>

        <dl className="mt-8 grid gap-6 sm:grid-cols-[120px_1fr]">
          <dt className="font-mono text-[11px] uppercase tracking-widest text-dim">My role</dt>
          <dd className="text-fg">{p.role}</dd>
          <dt className="font-mono text-[11px] uppercase tracking-widest text-dim">Problem</dt>
          <dd className="leading-relaxed text-muted">{p.problem}</dd>
          <dt className="font-mono text-[11px] uppercase tracking-widest text-dim">What I did</dt>
          <dd>
            <ul className="space-y-2.5">
              {p.work.map((w) => (
                <li key={w} className="flex gap-3 text-sm leading-relaxed text-fg/85">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan" aria-hidden />
                  {w}
                </li>
              ))}
            </ul>
          </dd>
          {(p.built || p.planned) && (
            <>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-dim">Status</dt>
              <dd className="space-y-2 text-sm leading-relaxed">
                {p.built?.map((b) => (
                  <p key={b} className="text-muted">
                    <span className="mr-2 font-mono text-[10px] uppercase tracking-widest text-live">Built</span>
                    {b}
                  </p>
                ))}
                {p.planned?.map((b) => (
                  <p key={b} className="text-muted">
                    <span className="mr-2 font-mono text-[10px] uppercase tracking-widest text-amber">Planned</span>
                    {b}
                  </p>
                ))}
              </dd>
            </>
          )}
          <dt className="font-mono text-[11px] uppercase tracking-widest text-dim">Stack</dt>
          <dd className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </dd>
        </dl>

        <div className="mt-9 flex flex-wrap items-center gap-2">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-sm transition hover:border-cyan hover:text-cyan"
            >
              {l.label === "GitHub" && <GitHubIcon className="size-3.5" />}
              {l.label}
              <ArrowUpRight className="size-3.5" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ))}
          {!p.links.some((l) => l.label === "GitHub") && (
            <span className="inline-flex items-center gap-1.5 px-2 py-2 text-sm text-dim">
              <Lock className="size-3.5" aria-hidden /> Private repository
            </span>
          )}
        </div>
        {p.note && <p className="mt-4 text-xs text-dim">{p.note}</p>}
      </Reveal>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="03"
          label="Projects"
          title={
            <>
              Ventures and products,{" "}
              <span className="font-serif font-normal italic text-cyan">built in the open</span>.
            </>
          }
          intro="Each case shows my role, what was built, and what is still planned. Tech stacks are taken from the actual repositories."
        />

        <div>
          {projects.map((p, i) => (
            <ProjectCase key={p.slug} p={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-10 border-t border-line pt-16">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">More on GitHub</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {moreRepos.map((r) => (
              <a
                key={r.name}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-line bg-white/[0.015] p-5 transition hover:border-cyan/50"
              >
                <span className="flex items-center justify-between">
                  <GitHubIcon className="size-4 text-muted" />
                  <ArrowUpRight className="size-4 text-dim transition group-hover:text-cyan" aria-hidden />
                </span>
                <span className="mt-4 font-mono text-sm text-fg">{r.name}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-muted">{r.description}</span>
                <span className="mt-4 font-mono text-[11px] text-dim">{r.stack}</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
