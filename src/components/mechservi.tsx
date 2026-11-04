import Image from "next/image";
import { ArrowRight, ArrowLeftRight } from "lucide-react";
import type { ReactNode } from "react";
import { statusLabel, type Status } from "@/lib/mechservi";
import { asset } from "@/lib/site";
import { Reveal } from "./ui";

const statusTone: Record<Status, string> = {
  live: "border-live/30 text-live",
  developed: "border-cyan/30 text-cyan",
  built: "border-cyan/30 text-cyan",
  planned: "border-amber/30 text-amber",
  future: "border-line-strong text-muted",
};

export function StatusTag({ status }: { status: Status }) {
  return (
    <span className={`inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${statusTone[status]}`}>
      {statusLabel[status]}
    </span>
  );
}

export function CaseSection({
  id,
  index,
  label,
  title,
  intro,
  aside,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-10 flex flex-col gap-4 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              <span className="text-cyan">{index}</span>
              <span className="h-px w-8 bg-line-strong" />
              {label}
            </p>
            <h2 className="mt-5 text-3xl font-medium leading-[1.08] tracking-tight md:text-5xl">{title}</h2>
            {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
          </div>
          {aside}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function MetricGrid({ items }: { items: { value: string; label: string; note?: string }[] }) {
  return (
    <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="bg-ink-2 p-5 md:p-7">
          <p className="font-serif text-4xl italic leading-none text-fg md:text-6xl">{s.value}</p>
          <p className="mt-4 text-sm font-medium tracking-tight sm:text-base">{s.label}</p>
          {s.note && <p className="mt-1.5 text-xs leading-relaxed text-muted">{s.note}</p>}
        </div>
      ))}
    </Reveal>
  );
}

/** Horizontal (desktop) / vertical (mobile) chain of steps. */
export function FlowChain({ steps }: { steps: string[] }) {
  return (
    <Reveal>
      <ol className="flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:items-center">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span className="flex items-center gap-2.5 rounded-full border border-line bg-white/[0.02] px-4 py-2 text-sm">
              <span className="font-mono text-[11px] text-cyan">{String(i + 1).padStart(2, "0")}</span>
              {s}
            </span>
            {i < steps.length - 1 && <ArrowRight className="size-4 shrink-0 rotate-90 text-dim lg:rotate-0" aria-hidden />}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export function CardGrid({ items, cols = 3 }: { items: { title: string; body: string; status?: Status }[]; cols?: 2 | 3 | 4 }) {
  const lg = { 2: "", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" }[cols];
  return (
    <Reveal className={`grid gap-3 sm:grid-cols-2 ${lg}`}>
      {items.map((c) => (
        <div key={c.title} className="flex flex-col rounded-2xl border border-line bg-white/[0.015] p-6">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="font-medium tracking-tight">{c.title}</h3>
            {c.status && <StatusTag status={c.status} />}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
        </div>
      ))}
    </Reveal>
  );
}

export function StepList({ steps }: { steps: { step: string; detail: string }[] }) {
  return (
    <Reveal>
      <ol className="grid gap-x-8 sm:grid-cols-2">
        {steps.map((s, i) => (
          <li key={s.step} className="flex gap-4 border-t border-line py-4">
            <span className="w-6 shrink-0 font-mono text-xs text-cyan">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="font-medium tracking-tight">{s.step}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-muted">{s.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

/** Real app screenshots inside a simple phone frame; scrolls sideways on small screens. */
export function PhoneRow({ screens }: { screens: { src: string; alt: string; caption: string }[] }) {
  return (
    <Reveal className="-mx-5 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0">
      <ul className="flex snap-x snap-mandatory gap-4 md:grid md:grid-cols-5 md:gap-5">
        {screens.map((s) => (
          <li key={s.src} className="w-[62vw] shrink-0 snap-start sm:w-56 md:w-auto">
            <figure>
              <div className="rounded-[2rem] border border-line-strong bg-panel p-1.5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
                <div className="relative overflow-hidden rounded-[1.6rem] bg-white" style={{ aspectRatio: "390 / 844" }}>
                  <Image src={asset(s.src)} alt={s.alt} fill sizes="(min-width: 768px) 18vw, 62vw" className="object-cover object-top" />
                </div>
              </div>
              <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-widest text-muted">{s.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function BrowserShot({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-line bg-panel">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="ml-3 font-mono text-[11px] text-dim">MechServi admin</span>
        </div>
        <Image src={asset(src)} alt={alt} width={1600} height={902} className="h-auto w-full" sizes="(min-width: 1024px) 600px, 100vw" />
      </div>
      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted">{caption}</figcaption>
    </figure>
  );
}

type Node = { title: string; points: string[] };

function EcoCard({ node, accent = false }: { node: Node; accent?: boolean }) {
  return (
    <div className={`rounded-3xl border p-6 md:p-7 ${accent ? "border-cyan/40 bg-cyan-soft/40 shadow-[0_0_60px_-20px_rgba(63,224,255,0.5)]" : "border-line bg-ink-2"}`}>
      <h3 className={`text-xl font-medium tracking-tight ${accent ? "text-cyan" : ""}`}>{node.title}</h3>
      <ul className="mt-4 space-y-2">
        {node.points.map((p) => (
          <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-fg/85">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan" aria-hidden />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Three-sided marketplace illustration built from cards and connectors, not a chart. */
export function Ecosystem({ owners, platform, partners, brands }: { owners: Node; platform: Node; partners: Node; brands: Node }) {
  const link = <ArrowLeftRight className="mx-auto size-6 rotate-90 text-cyan lg:rotate-0" aria-hidden />;
  return (
    <Reveal>
      <div className="grid items-center gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <EcoCard node={owners} />
        {link}
        <EcoCard node={platform} accent />
        {link}
        <EcoCard node={partners} />
      </div>
      <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <div className="hidden lg:block" />
        <div className="hidden lg:block" />
        <div className="flex flex-col items-center py-3">
          <span className="h-8 w-px bg-gradient-to-b from-cyan to-line-strong" aria-hidden />
          <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">B2B ecosystem</span>
        </div>
      </div>
      <div className="mx-auto max-w-3xl">
        <EcoCard node={brands} />
      </div>
    </Reveal>
  );
}
