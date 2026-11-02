import { businessSkills, technicalSkills } from "@/lib/content";
import { Reveal, SectionHeading } from "./ui";

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="04"
          label="Capabilities"
          title={
            <>
              Business depth,{" "}
              <span className="font-serif font-normal italic text-cyan">technical range</span>.
            </>
          }
          intro={
            <>
              I&apos;m an operator who ships technology, not a senior software engineer. I scope products, make the
              architecture and data-model decisions, direct AI-assisted development, review and test the result, and
              deploy it. Every technology below appears in my repositories.
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h3 className="flex items-center gap-3 text-xl font-medium">
                <span className="size-2 rounded-full bg-cyan shadow-[0_0_10px_#3fe0ff]" /> Technical
              </h3>
            </Reveal>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {technicalSkills.map((g, i) => (
                <Reveal key={g.title} delay={i * 0.04} className="rounded-2xl border border-line bg-white/[0.015] p-5">
                  <h4 className="font-medium">{g.title}</h4>
                  <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-sm text-muted">
                    {g.items.map((s, j) => (
                      <li key={s}>
                        {s}
                        {j < g.items.length - 1 && <span className="ml-2 text-dim">·</span>}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-dim">Seen in: {g.evidence}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h3 className="flex items-center gap-3 text-xl font-medium">
                <span className="size-2 rounded-full bg-fg" /> Business &amp; operations
              </h3>
            </Reveal>
            <div className="mt-6 grid gap-3">
              {businessSkills.map((g, i) => (
                <Reveal key={g.title} delay={i * 0.04} className="rounded-2xl border border-line bg-white/[0.015] p-5">
                  <h4 className="font-medium">{g.title}</h4>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {g.items.map((s) => (
                      <li key={s} className="rounded-full bg-white/[0.04] px-3 py-1 text-sm text-fg/85">
                        {s}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
