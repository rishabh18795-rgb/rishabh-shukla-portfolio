import { experience } from "@/lib/content";
import { Reveal, SectionHeading } from "./ui";

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="02"
          label="Experience"
          title={
            <>
              Three chapters, one thread:{" "}
              <span className="font-serif font-normal italic text-cyan">execution</span>.
            </>
          }
          intro="A startup built from zero, a portfolio of consulting engagements, and the freelance growth work that came first."
        />

        <ol className="relative">
          <span className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-cyan/60 via-line-strong to-transparent md:left-[calc(25%+7px)]" aria-hidden />
          {experience.map((job, i) => (
            <li key={job.role} className="relative grid gap-6 pb-20 pl-10 last:pb-0 md:grid-cols-[25%_1fr] md:gap-12 md:pl-0">
              <span
                className={`absolute left-0 top-1.5 size-[15px] rounded-full border-2 md:left-[25%] ${
                  i === 0 ? "border-cyan bg-ink shadow-[0_0_16px_#3fe0ff]" : "border-line-strong bg-ink"
                }`}
                aria-hidden
              />
              <Reveal className="md:pr-10 md:text-right">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">{job.period}</p>
                <p className="mt-2 text-sm text-muted">{job.place}</p>
              </Reveal>

              <Reveal delay={0.05} className="md:pl-12">
                <h3 className="text-2xl font-medium tracking-tight md:text-3xl">{job.role}</h3>
                <p className="mt-1 font-serif text-xl italic text-muted">{job.org}</p>
                <p className="mt-4 max-w-3xl leading-relaxed text-muted">{job.summary}</p>

                {job.points.length > 0 && (
                  <ul className="mt-6 grid max-w-3xl gap-3">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 leading-relaxed text-fg/85">
                        <span className="mt-2.5 size-1 shrink-0 rounded-full bg-cyan" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}

                {job.engagements && (
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {job.engagements.map((e) => (
                      <article
                        key={e.name}
                        className="rounded-2xl border border-line bg-white/[0.015] p-5 transition-colors hover:border-line-strong"
                      >
                        <h4 className="font-medium">{e.name}</h4>
                        <p className="mt-0.5 font-mono text-[11px] text-cyan">{e.role}</p>
                        <ul className="mt-3 space-y-2">
                          {e.points.map((p) => (
                            <li key={p} className="text-sm leading-relaxed text-muted">
                              {p}
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                )}

                {job.more && (
                  <ul className="mt-5 space-y-1.5 text-sm text-dim">
                    {job.more.map((m) => (
                      <li key={m}>+ {m}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
