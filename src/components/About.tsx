import { Reveal, SectionHeading } from "./ui";

const principles = [
  {
    title: "Business model first",
    body: "Pricing, unit economics and the partner side get designed before the website does.",
  },
  {
    title: "Systems over heroics",
    body: "SOPs, SLAs and CRM workflows so service quality doesn't depend on one person being online.",
  },
  {
    title: "Funnels you can measure",
    body: "Every ad ends in a conversation and every conversation in a tracked outcome.",
  },
  {
    title: "Ship, then harden",
    body: "Get a working version in front of customers, then test and fix it under real use.",
  },
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

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted">
            <p>
              <span className="text-fg">I started MechServi&apos;s operations from nothing.</span> No mechanic network, no
              booking flow, no customers. Turning a doorstep bike and car service into something that runs every day
              meant recruiting and onboarding partners, writing their SOPs and pricing, managing field teams and resolving
              complaints, while also running the Meta and Google campaigns that brought customers in.
            </p>
            <p>
              That experience taught me how a startup actually works end to end: how{" "}
              <span className="text-fg">vendor supply, customer acquisition, operations and technology</span> pull on
              each other, and how a funnel that looks good in Ads Manager can still leak at the WhatsApp reply or the
              doorstep.
            </p>
            <p>
              Since then I&apos;ve applied the same approach for other early-stage teams: defining the commission and
              wallet model for an influencer marketplace, planning a home-services launch in Varanasi, building growth
              funnels and teaching a 16-session advertising course. I work hands-on with technology too. I scope,
              direct, test and deploy web products using modern frameworks and AI-assisted development.
            </p>
            <p className="text-fg">
              I&apos;m looking for a Founder&apos;s Office, Business Operations, Growth or Strategy &amp; Operations
              role where 0-to-1 execution matters.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-px self-start overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.title} className="bg-ink-2 p-7">
                <span className="font-mono text-xs text-cyan">0{i + 1}</span>
                <h3 className="mt-5 text-lg font-medium tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
