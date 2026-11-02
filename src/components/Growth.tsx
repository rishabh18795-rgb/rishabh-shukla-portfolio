import { ArrowRight } from "lucide-react";
import { funnel, growthPillars } from "@/lib/content";
import { Reveal, SectionHeading } from "./ui";

export function Growth() {
  return (
    <section id="growth" className="relative overflow-hidden border-t border-line py-28 md:py-36">
      <div className="glow-cyan pointer-events-none absolute -right-60 top-20 h-[500px] w-[700px]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="05"
          label="Growth & business execution"
          title={
            <>
              From first ad to{" "}
              <span className="font-serif font-normal italic text-cyan">repeat customer</span>.
            </>
          }
          intro="The funnel I build for service businesses, and the operating systems that sit behind it."
        />

        <Reveal>
          <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-5" aria-label="Acquisition funnel">
            {funnel.map((f, i) => (
              <li key={f.step} className="relative bg-ink-2 p-6">
                <span className="font-mono text-[11px] text-cyan">Step {i + 1}</span>
                <p className="mt-3 text-xl font-medium tracking-tight">{f.step}</p>
                <p className="mt-1 text-sm text-muted">{f.detail}</p>
                {i < funnel.length - 1 && (
                  <ArrowRight className="absolute right-4 top-6 hidden size-4 text-dim sm:block" aria-hidden />
                )}
                <span
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-cyan"
                  style={{ opacity: 1 - i * 0.18 }}
                  aria-hidden
                />
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {growthPillars.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05} className="flex flex-col rounded-2xl border border-line bg-white/[0.015] p-6">
              <h3 className="text-lg font-medium tracking-tight">{g.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{g.body}</p>
              <p className="mt-5 border-t border-line pt-4 font-mono text-[11px] text-cyan">{g.proof}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 grid gap-8 rounded-3xl border border-line bg-panel p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Case in numbers · Guerdon Kicks</p>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-fg/85">
              Meta catalogue sales campaign for an e-commerce brand, after diagnosing Pixel and purchase-event
              tracking issues.
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-6 md:gap-10">
            {[
              ["₹7,435", "Spend"],
              ["₹14,497", "Attributed revenue"],
              ["1.94×", "ROAS · 2.25% CTR"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd>
                  <span className="block font-serif text-3xl italic md:text-4xl">{v}</span>
                  <span className="mt-1 block text-xs text-muted">{l}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
