import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, Mail } from "lucide-react";
import { Footer } from "@/components/Contact";
import { LinkedInIcon } from "@/components/icons";
import {
  CardGrid,
  CaseSection,
  FlowChain,
  FunnelEvidence,
  MonthlyChart,
  ShareBars,
  StatGrid,
  StatusSteps,
  StatusTag,
} from "@/components/mechservi";
import { Motion, Reveal } from "@/components/ui";
import {
  creatives,
  funnel,
  headline,
  influencer,
  learnings,
  marketing,
  method,
  monthly,
  operations,
  ownership,
  records,
  retention,
  revenueLevers,
  revenueLoop,
  serviceMix,
  tech,
  whatsappFlow,
} from "@/lib/mechservi";
import { asset, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "MechServi case study — Rishabh Shukla",
  description:
    "How Rishabh Shukla built and operated MechServi, a doorstep vehicle-care business in Lucknow: 402 unique customers, 389 completed services, a 28% repeat rate and 870K+ monthly Meta views.",
  alternates: { canonical: "mechservi/" },
  openGraph: {
    type: "article",
    url: "mechservi/",
    title: "MechServi case study — Rishabh Shukla",
    description: "402 unique customers, 389 completed services and a 28% repeat rate, from founder-led operations, growth and technology.",
    images: [{ url: "og.png", width: 1200, height: 630 }],
  },
};

const jump = [
  ["results", "Results"],
  ["customers", "Customers"],
  ["growth", "Growth"],
  ["whatsapp", "WhatsApp"],
  ["operations", "Operations"],
  ["revenue", "Revenue model"],
  ["technology", "Technology"],
  ["learnings", "Learnings"],
] as const;

function CaseHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-xl">
      <nav aria-label="Case study" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 md:px-8">
        <Link href="/" className="group inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg">
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden />
          <span className="hidden sm:inline">Back to portfolio</span>
          <span className="sm:hidden">Portfolio</span>
        </Link>
        <div className="flex items-center gap-2">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="inline-flex size-10 items-center justify-center gap-2 rounded-full border border-line-strong text-sm font-medium transition hover:border-cyan hover:text-cyan sm:size-auto sm:px-4 sm:py-2"
          >
            <LinkedInIcon className="size-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href={asset(site.resume)}
            download={site.resumeFileName}
            className="inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-ink transition hover:bg-cyan"
          >
            <Download className="size-4" aria-hidden />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

export default function MechServiCaseStudy() {
  return (
    <Motion>
      <CaseHeader />
      <main id="main">
        {/* Intro + results */}
        <section id="results" className="noise relative overflow-hidden pb-20 pt-16 md:pt-24">
          <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
          <div className="glow-cyan pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-cyan">
                <span className="h-px w-10 bg-cyan/60" aria-hidden />
                Flagship case study · Founder &amp; CEO · 2023 — Present
              </p>
              <h1 className="text-gradient mt-6 max-w-5xl text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-6xl md:text-7xl">
                MechServi: a doorstep vehicle-care business,{" "}
                <span className="font-serif font-normal italic text-cyan [-webkit-text-fill-color:currentColor]">built and run end to end.</span>
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
                MechServi Technology Pvt. Ltd. brings car and bike care to customers&apos; doorsteps in Lucknow. I designed the
                business model, ran local acquisition, built the WhatsApp-led sales process and CRM, managed field operations
                and led the website, app and platform builds.
              </p>
            </Reveal>

            <div className="mt-12">
              <StatGrid items={headline} />
            </div>
            <Reveal className="mt-4 text-xs text-dim">
              Operating records {records.period}. Marketing figures from October 2025. Methodology at the end of this page.
            </Reveal>

            <nav aria-label="Case study sections" className="mt-12 flex flex-wrap gap-2">
              {jump.map(([id, label]) => (
                <a key={id} href={`#${id}`} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted transition hover:border-cyan hover:text-cyan">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Context + role */}
        <CaseSection
          id="context"
          index="01"
          label="Context & my role"
          title={<>Turning a half-day workshop visit into a <span className="font-serif font-normal italic text-cyan">doorstep service</span>.</>}
          intro="Vehicle owners in Lucknow lose hours to workshop visits, while skilled local mechanics lack steady demand. MechServi connects the two with doorstep washes, subscriptions and service partners."
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal className="overflow-hidden rounded-2xl border border-line bg-panel">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                <span className="size-2.5 rounded-full bg-white/10" />
                <span className="size-2.5 rounded-full bg-white/10" />
                <span className="size-2.5 rounded-full bg-white/10" />
                <span className="ml-3 font-mono text-[11px] text-dim">mechservi.in</span>
              </div>
              <Image src={asset("/mechservi/website-hero.jpg")} alt="MechServi website hero: trusted vehicle services, delivered on your terms" width={1184} height={740} className="h-auto w-full" />
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">What I owned</h3>
              <ul className="mt-5 space-y-3">
                {ownership.map((o) => (
                  <li key={o} className="flex gap-3 leading-relaxed text-fg/85">
                    <span className="mt-2.5 size-1 shrink-0 rounded-full bg-cyan" aria-hidden />
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </CaseSection>

        {/* Customers & retention */}
        <CaseSection
          id="customers"
          index="02"
          label="Customer & retention analytics"
          title={<>Customers came back: <span className="font-serif font-normal italic text-cyan">28% rebooked</span>, most within a month.</>}
          intro={`From ${records.total} customer and service records (${records.oneTime} one-time, ${records.subscription} subscription), de-duplicated to ${records.uniqueCustomers} unique customers. ${records.overlap} customers appear in both trackers.`}
        >
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <MonthlyChart data={monthly} />
            <ShareBars title="One-time service mix" items={serviceMix} />
          </div>
          <div className="mt-4">
            <StatGrid items={retention} />
          </div>
          <Reveal className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-line bg-white/[0.015] p-6 md:p-8">
              <h3 className="text-lg font-medium tracking-tight">Acquisition → activation → retention → value</h3>
              <dl className="mt-5 space-y-3 text-sm leading-relaxed">
                {[
                  ["Acquisition", "A customer's first record: 171 new customers in November 2025 alone."],
                  ["Activation", "A completed first service: 267 one-time customers have at least one completed wash."],
                  ["Retention", "Coming back: 94 repeat one-time customers and 22 subscribers with repeat plan starts."],
                  ["Lifetime value", "Retention × frequency × spend over time; framework below."],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[7rem_1fr] gap-3">
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-cyan">{k}</dt>
                    <dd className="text-muted">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-3xl border border-line bg-white/[0.015] p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-medium tracking-tight">Customer lifetime value</h3>
                <StatusTag status="framework" />
              </div>
              <p className="mt-5 rounded-xl border border-line bg-ink px-4 py-3 font-mono text-sm text-fg/85">
                CLV = Avg revenue per customer × Purchase frequency × Customer lifespan
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Frequency is measurable (2.6 bookings per repeat customer, median 20 days apart). Revenue per customer and
                lifespan aren&apos;t published here, so no CLV figure is claimed.
              </p>
            </div>
          </Reveal>
        </CaseSection>

        {/* Growth & performance marketing */}
        <CaseSection
          id="growth"
          index="03"
          label="Performance marketing & local growth"
          title={<>Hyperlocal Meta campaigns reached <span className="font-serif font-normal italic text-cyan">870K+ views</span> in a month.</>}
          intro={`Facebook and Instagram campaigns targeted Lucknow localities (${marketing.localities.join(", ")}), with Google Business Profile for local search. Creatives pushed one action: message on WhatsApp or call to book.`}
        >
          <Reveal>
            <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">October 2025</h3>
          </Reveal>
          <StatGrid items={marketing.october} cols={4} />
          <Reveal>
            <h3 className="mb-4 mt-10 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">November 2025</h3>
          </Reveal>
          <StatGrid items={marketing.november} />
          <Reveal className="mt-4 text-xs text-dim">Source: {marketing.source}.</Reveal>

          <Reveal>
            <h3 className="mb-2 mt-16 text-2xl font-medium tracking-tight">From campaign to repeat customer</h3>
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">
              The evidence for each stage of the funnel. Stages come from different periods, so this is not one cohort, and
              per-campaign enquiries weren&apos;t logged, so CPL, cost per booking and ROAS are not claimed.
            </p>
          </Reveal>
          <FunnelEvidence rows={funnel} />

          <Reveal>
            <h3 className="mb-6 mt-16 text-2xl font-medium tracking-tight">Creatives I directed</h3>
          </Reveal>
          <Reveal className="columns-2 gap-3 md:columns-3 [&>*]:mb-3">
            {creatives.map((c) => (
              <Image key={c.src} src={asset(c.src)} alt={c.alt} width={c.w} height={c.h} className="h-auto w-full break-inside-avoid rounded-2xl border border-line" sizes="(min-width: 768px) 33vw, 50vw" />
            ))}
          </Reveal>
        </CaseSection>

        {/* WhatsApp & automation */}
        <CaseSection
          id="whatsapp"
          index="04"
          label="WhatsApp & automation"
          title={<>One channel from <span className="font-serif font-normal italic text-cyan">ad to booking</span> to follow-up.</>}
          intro="WhatsApp connected marketing, sales and operations. The live process ran on WhatsApp Business with scripted SOPs and CRM trackers; the API and AI layers are labelled for what they are."
        >
          <StatusSteps steps={whatsappFlow} />
        </CaseSection>

        {/* Operations */}
        <CaseSection
          id="operations"
          index="05"
          label="CRM & business operations"
          title={<>Online demand, <span className="font-serif font-normal italic text-cyan">offline delivery</span>: the systems in between.</>}
          intro="Every booking became a field job. These systems kept quality consistent without me on every job."
        >
          <CardGrid items={operations} />
        </CaseSection>

        {/* Revenue model */}
        <CaseSection
          id="revenue"
          index="06"
          label="Revenue model"
          title={<>Built for <span className="font-serif font-normal italic text-cyan">recurring</span>, not one-off, revenue.</>}
          intro="The model turns a first wash into a long relationship. 18 customers upgraded from a one-time wash to a subscription."
        >
          <FlowChain steps={revenueLoop} />
          <div className="mt-8">
            <CardGrid items={revenueLevers} cols={5} />
          </div>
        </CaseSection>

        {/* Technology */}
        <CaseSection
          id="technology"
          index="07"
          label="Website, app & platform"
          title={<>From WhatsApp booking to a <span className="font-serif font-normal italic text-cyan">full platform</span>, in stages.</>}
          intro="Reviewed from the source code. I owned requirements, content and launch decisions, and built with the tech team; each part is labelled by its real status."
        >
          <Reveal className="grid gap-3 md:grid-cols-2">
            {tech.map((t) => (
              <div key={t.name} className="flex flex-col rounded-2xl border border-line bg-white/[0.015] p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-medium tracking-tight">{t.name}</h3>
                  <StatusTag status={t.status} />
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.detail}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {t.stack.map((s) => (
                    <li key={s} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-fg/80">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </CaseSection>

        {/* Social & influencer */}
        <CaseSection
          id="social"
          index="08"
          label="Social media & influencer marketing"
          title={<>Content that sold the <span className="font-serif font-normal italic text-cyan">problem</span> before the service.</>}
          intro="Education-led posts and reels (why cars get dirty, open parking, dead batteries), hyperlocal creative and local influencer collaborations. Influencer campaign metrics weren't recorded, so this shows the process I ran, not results."
        >
          <div className="flex flex-wrap items-center gap-3">
            <StatusTag status="framework" />
            <span className="text-sm text-muted">Influencer collaboration process</span>
          </div>
          <div className="mt-5">
            <FlowChain steps={influencer} />
          </div>
        </CaseSection>

        {/* Learnings */}
        <CaseSection id="learnings" index="09" label="Challenges & learnings" title={<>What I&apos;d keep, and what I&apos;d <span className="font-serif font-normal italic text-cyan">change</span>.</>}>
          <CardGrid items={learnings} cols={2} />
        </CaseSection>

        {/* Method */}
        <section className="border-t border-line py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Reveal>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">Methodology & data notes</h2>
              <ul className="mt-6 space-y-3">
                {method.map((m) => (
                  <li key={m} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan" aria-hidden />
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="mt-12 flex flex-wrap gap-3">
              <Link href="/#projects" className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium transition hover:border-fg">
                <ArrowLeft className="size-4" aria-hidden /> All projects
              </Link>
              <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white">
                <Mail className="size-4" aria-hidden /> Contact me
              </Link>
              <a href={site.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-2 py-3 text-sm text-muted hover:text-cyan">
                mechservi.in <ArrowUpRight className="size-3.5" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </Motion>
  );
}
