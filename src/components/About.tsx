import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const principles = [
  {
    title: "Business Before Technology",
    body: "Understand the business model, customer problem and economics before building systems.",
  },
  {
    title: "Systems Over Heroics",
    body: "Build SOPs, workflows and accountability rather than depending on individual effort.",
  },
  {
    title: "Growth With Measurement",
    body: "Connect acquisition, conversion and retention to measurable outcomes.",
  },
  {
    title: "Build, Test, Improve",
    body: "Launch working solutions, collect feedback and improve through execution.",
  },
];

const focus = [
  "Business Strategy & Operations",
  "Growth & Revenue Operations",
  "Product & Marketplace Operations",
  "GTM Strategy",
  "Technology Implementation",
  "Performance Marketing",
  "Business Development",
  "Process Automation",
];

export function About() {
  return (
    <section id="about" className="relative border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="01"
          label="About"
          title={
            <>
              An operator who builds{" "}
              <span className="font-serif font-normal italic text-cyan">the whole machine</span>.
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              <span className="text-fg">I&apos;m a strategy and operations professional who builds businesses from zero.</span>{" "}
              My work spans operations, customer acquisition, product and technology.
            </p>
            <p>
              At MechServi, I led the 0-to-1 launch of a doorstep vehicle-service business, bringing together service
              partners, customers, processes and technology.
            </p>
            <p>
              Since then I&apos;ve worked across marketplaces, home services, digital products and performance marketing,
              turning ideas into executable systems.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">Focus areas</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {focus.map((f) => (
                <li key={f} className="rounded-full border border-line bg-white/[0.02] px-3.5 py-1.5 text-sm text-fg/85">
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-line bg-white/[0.015] p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-panel">
                <GraduationCap className="size-4 text-cyan" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">B.Tech, Glocal University, Saharanpur</p>
                <p className="text-xs text-muted">2013 — 2017</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <h3 className="text-2xl font-medium tracking-tight md:text-3xl">How I Think &amp; Work</h3>
        </Reveal>
        <Reveal delay={0.05} className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <div key={p.title} className="group bg-ink-2 p-7 transition-colors hover:bg-panel">
              <span className="font-mono text-xs text-cyan">0{i + 1}</span>
              <h4 className="mt-8 text-lg font-medium leading-snug tracking-tight">{p.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
