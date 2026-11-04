import { ArrowRight, Check, CircleDashed } from "lucide-react";
import type { ReactNode } from "react";
import { statusLabel, type Status } from "@/lib/mechservi";
import { Reveal } from "./ui";

const statusTone: Record<Status, string> = {
  live: "border-live/30 text-live",
  built: "border-cyan/30 text-cyan",
  prototype: "border-amber/30 text-amber",
  planned: "border-line-strong text-muted",
  framework: "border-line-strong text-muted",
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
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-12 max-w-3xl md:mb-16">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            <span className="text-cyan">{index}</span>
            <span className="h-px w-8 bg-line-strong" />
            {label}
          </p>
          <h2 className="mt-5 text-3xl font-medium leading-[1.08] tracking-tight md:text-5xl">{title}</h2>
          {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function StatGrid({ items, cols = 3 }: { items: { value: string; label: string; detail?: string; note?: string }[]; cols?: 2 | 3 | 4 }) {
  const grid = { 2: "", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" }[cols];
  return (
    <Reveal className={`grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line ${grid}`}>
      {items.map((s) => (
        <div key={s.label} className="bg-ink-2 p-5 md:p-7">
          <p className="font-serif text-3xl italic leading-none text-fg sm:text-4xl md:text-5xl">{s.value}</p>
          <p className="mt-3 text-sm font-medium tracking-tight sm:text-base">{s.label}</p>
          {(s.detail || s.note) && <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">{s.detail ?? s.note}</p>}
        </div>
      ))}
    </Reveal>
  );
}

/** Stacked bars for new vs returning customers, drawn with plain divs (no chart library). */
export function MonthlyChart({ data }: { data: { month: string; newC: number; returning: number }[] }) {
  const max = Math.max(...data.map((d) => d.newC + d.returning));
  return (
    <Reveal className="rounded-3xl border border-line bg-white/[0.015] p-6 md:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-lg font-medium tracking-tight">Active customers per month</h3>
        <ul className="flex gap-4 text-xs text-muted" aria-hidden>
          <li className="flex items-center gap-2"><span className="size-2.5 rounded-sm bg-cyan" /> New</li>
          <li className="flex items-center gap-2"><span className="size-2.5 rounded-sm bg-fg/70" /> Returning</li>
        </ul>
      </div>
      <div className="mt-8 grid h-56 grid-cols-6 items-end gap-3 md:gap-6" role="img" aria-label={data.map((d) => `${d.month}: ${d.newC} new, ${d.returning} returning`).join("; ")}>
        {data.map((d) => {
          const total = d.newC + d.returning;
          return (
            <div key={d.month} className="flex h-full flex-col justify-end">
              <span className="mb-2 text-center font-mono text-xs text-fg/80">{total}</span>
              <div className="flex flex-col overflow-hidden rounded-md" style={{ height: `${(total / max) * 100}%` }}>
                <div className="bg-fg/70" style={{ flexGrow: d.returning }} />
                <div className="bg-cyan" style={{ flexGrow: d.newC }} />
              </div>
              <span className="mt-2 text-center font-mono text-[11px] text-muted">{d.month}</span>
            </div>
          );
        })}
      </div>
      <p className="mt-5 text-xs text-dim">* April 2026 is a partial month. Returning = active this month and first seen in an earlier month.</p>
    </Reveal>
  );
}

export function ShareBars({ title, items }: { title: string; items: { label: string; share: number }[] }) {
  return (
    <Reveal className="rounded-3xl border border-line bg-white/[0.015] p-6 md:p-8">
      <h3 className="text-lg font-medium tracking-tight">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((i) => (
          <li key={i.label}>
            <div className="flex justify-between text-sm">
              <span className="text-fg/85">{i.label}</span>
              <span className="font-mono text-muted">{i.share}%</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <div className="h-full rounded-full bg-cyan" style={{ width: `${i.share}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/** Horizontal (desktop) / vertical (mobile) chain of steps. */
export function FlowChain({ steps, numbered = true }: { steps: string[]; numbered?: boolean }) {
  return (
    <Reveal>
      <ol className="flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:items-center">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2 lg:gap-2">
            <span className="flex items-center gap-2.5 rounded-full border border-line bg-white/[0.02] px-4 py-2 text-sm">
              {numbered && <span className="font-mono text-[11px] text-cyan">{String(i + 1).padStart(2, "0")}</span>}
              {s}
            </span>
            {i < steps.length - 1 && <ArrowRight className="size-4 shrink-0 rotate-90 text-dim lg:rotate-0" aria-hidden />}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export function FunnelEvidence({ rows }: { rows: { stage: string; evidence: string; status: "verified" | "not-tracked" }[] }) {
  return (
    <Reveal className="overflow-hidden rounded-3xl border border-line">
      <ol>
        {rows.map((r, i) => (
          <li
            key={r.stage}
            className="grid grid-cols-[2.25rem_1fr] items-start gap-x-3 gap-y-1 border-b border-line bg-ink-2 px-5 py-4 last:border-b-0 sm:grid-cols-[2.25rem_11rem_1fr_auto] sm:items-center"
          >
            <span className="font-mono text-xs text-cyan">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-medium">{r.stage}</span>
            <span className="col-start-2 text-sm text-muted sm:col-start-auto">{r.evidence}</span>
            <span className="col-start-2 sm:col-start-auto">
              {r.status === "verified" ? (
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-live">
                  <Check className="size-3.5" aria-hidden /> Verified
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-amber">
                  <CircleDashed className="size-3.5" aria-hidden /> Not tracked
                </span>
              )}
            </span>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export function StatusSteps({ steps }: { steps: { step: string; detail: string; status: Status }[] }) {
  return (
    <Reveal className="grid gap-3 md:grid-cols-2">
      {steps.map((s, i) => (
        <div key={s.step} className="flex gap-4 rounded-2xl border border-line bg-white/[0.015] p-5">
          <span className="font-mono text-xs text-cyan">{String(i + 1).padStart(2, "0")}</span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-medium">{s.step}</h3>
              <StatusTag status={s.status} />
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.detail}</p>
          </div>
        </div>
      ))}
    </Reveal>
  );
}

export function CardGrid({ items, cols = 3 }: { items: { title: string; body: string }[]; cols?: 2 | 3 | 5 }) {
  const lg = { 2: "", 3: "lg:grid-cols-3", 5: "lg:grid-cols-5" }[cols];
  return (
    <Reveal className={`grid gap-3 sm:grid-cols-2 ${lg}`}>
      {items.map((c) => (
        <div key={c.title} className="rounded-2xl border border-line bg-white/[0.015] p-6">
          <h3 className="font-medium tracking-tight">{c.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
        </div>
      ))}
    </Reveal>
  );
}
