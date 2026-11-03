import { Blocks, Briefcase, Code2, Database, LineChart, Server, type LucideIcon } from "lucide-react";
import { deliveryTools, skillGroups, skillKinds, type SkillKind } from "@/lib/content";
import { Reveal, SectionHeading } from "./ui";

const icons: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  data: Database,
  product: Blocks,
  growth: LineChart,
  operations: Briefcase,
};

const kindStyle: Record<SkillKind, { dot: string; text: string; chip: string }> = {
  "hands-on": { dot: "bg-cyan shadow-[0_0_8px_#3fe0ff]", text: "text-cyan", chip: "border-cyan/25 text-fg" },
  managed: { dot: "bg-fg", text: "text-fg", chip: "border-line-strong text-fg/90" },
  capability: { dot: "border border-muted bg-transparent", text: "text-muted", chip: "border-line text-fg/80" },
};

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="02"
          label="Technical skills"
          title={
            <>
              What I can build,{" "}
              <span className="font-serif font-normal italic text-cyan">run and scale</span>.
            </>
          }
          intro="Every technology listed is in my repositories or platforms I've run for businesses. I build with modern frameworks and AI-assisted development, and I own scoping, review, testing and deployment."
        />

        <Reveal>
          <ul className="mb-10 flex flex-wrap gap-x-8 gap-y-3" aria-label="Legend">
            {(Object.keys(skillKinds) as SkillKind[]).map((k) => (
              <li key={k} className="flex items-center gap-2.5 text-sm">
                <span className={`size-2 rounded-full ${kindStyle[k].dot}`} aria-hidden />
                <span className="text-fg">{skillKinds[k].label}</span>
                <span className="text-dim">· {skillKinds[k].note}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.id];
            const style = kindStyle[g.kind];
            return (
              <Reveal
                key={g.id}
                delay={(i % 3) * 0.06}
                className="group flex flex-col rounded-3xl border border-line bg-white/[0.015] p-6 transition-colors hover:border-line-strong md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-2xl border border-line bg-panel transition-colors group-hover:border-cyan/40">
                    <Icon className="size-5 text-cyan" aria-hidden />
                  </span>
                  <span className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest ${style.text}`}>
                    <span className={`size-1.5 rounded-full ${style.dot}`} aria-hidden />
                    {skillKinds[g.kind].label}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-medium tracking-tight">{g.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{g.summary}</p>
                <ul className="mt-5 flex flex-1 flex-wrap content-start gap-1.5">
                  {g.items.map((s) => (
                    <li key={s} className={`rounded-full border bg-white/[0.02] px-3 py-1 text-[13px] ${style.chip}`}>
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-line pt-4 font-mono text-[10px] uppercase leading-relaxed tracking-widest text-dim">
                  Seen in · {g.evidence}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6 flex flex-col gap-3 rounded-2xl border border-line px-6 py-4 sm:flex-row sm:items-center">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">Delivery &amp; testing</span>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-fg/85">
            {deliveryTools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
