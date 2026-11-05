import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, Globe, Mail } from "lucide-react";
import { Footer } from "@/components/Contact";
import { LinkedInIcon } from "@/components/icons";
import {
  BrowserShot,
  CardGrid,
  CaseSection,
  Ecosystem,
  FlowChain,
  MetricGrid,
  PhoneRow,
  StatusTag,
  StepList,
} from "@/components/mechservi";
import { Motion, Reveal } from "@/components/ui";
import {
  acquisition,
  admin,
  company,
  customerApp,
  ecosystem,
  growth,
  method,
  operations,
  ownership,
  ownershipLabel,
  ownershipNote,
  partnerApp,
  problems,
  retention,
  revenueLoop,
  revenueStreams,
  sample,
  scalability,
  social,
  solutions,
  tech,
  traction,
  tractionTags,
} from "@/lib/mechservi";
import { asset, site } from "@/lib/site";

const title = "MechServi: a connected vehicle-care marketplace — Rishabh Shukla";
const description =
  "Founder case study: how Rishabh Shukla built MechServi, a vehicle-care marketplace connecting vehicle owners, garages and service partners in Lucknow, with customer and partner apps, local growth and operations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "mechservi/" },
  openGraph: { type: "article", url: "mechservi/", title, description, images: [{ url: "og.png", width: 1200, height: 630 }] },
};

const jump = [
  ["traction", "Traction"],
  ["ecosystem", "Marketplace"],
  ["customer-app", "Customer app"],
  ["partner-app", "Partner app"],
  ["business-model", "Business model"],
  ["acquisition", "Growth"],
  ["technology", "Technology"],
  ["founder", "Founder"],
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

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8.1v3h2.5V21h2.9Z" />
    </svg>
  );
}

const socialIcon = { Instagram: InstagramIcon, Facebook: FacebookIcon, Website: Globe } as const;

export default function MechServiCaseStudy() {
  return (
    <Motion>
      <CaseHeader />
      <main id="main">
        {/* Intro */}
        <section id="intro" className="noise relative overflow-hidden pb-16 pt-16 md:pb-20 md:pt-24">
          <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
          <div className="glow-cyan pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-cyan">
                <span className="h-px w-10 bg-cyan/60" aria-hidden />
                Founder case study · Founder &amp; CEO · Incorporated May 2024
              </p>
              <h1 className="text-gradient mt-6 max-w-5xl text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-6xl md:text-7xl">
                MechServi: a connected vehicle-care marketplace,{" "}
                <span className="font-serif font-normal italic text-cyan [-webkit-text-fill-color:currentColor]">built from the ground up.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-fg/90 md:text-2xl">
                Connecting vehicle owners, garages and service partners through one trusted auto-care ecosystem.
              </p>
            </Reveal>
            <Reveal className="mt-8 grid max-w-5xl gap-5 text-lg leading-relaxed text-muted md:grid-cols-2">
              <p>
                MechServi Technology (OPC) Private Limited is a technology-enabled vehicle-care marketplace that connects customers with
                trusted garages, workshops, mechanics, service professionals and automotive businesses.
              </p>
              <p>
                As Founder &amp; CEO, I took it from concept to execution: the business model, the digital presence, local
                performance marketing, WhatsApp-led customer journeys, field operations, and the customer and partner
                applications.
              </p>
            </Reveal>
            <nav aria-label="Case study sections" className="mt-10 flex flex-wrap gap-2">
              {jump.map(([id, label]) => (
                <a key={id} href={`#${id}`} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted transition hover:border-cyan hover:text-cyan">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Traction */}
        <section id="traction" className="border-t border-line py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">Early traction &amp; validation</p>
            </Reveal>
            <MetricGrid items={traction} />
            <Reveal className="mt-4 flex flex-wrap gap-2">
              {tractionTags.map((t) => (
                <span key={t} className="rounded-full border border-line bg-white/[0.02] px-3 py-1 text-sm text-fg/80">{t}</span>
              ))}
            </Reveal>
            <Reveal className="mt-10 rounded-3xl border border-line bg-white/[0.015] p-6 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-medium tracking-tight">Verified operating sample · {sample.period}</h2>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Subset of the business history</span>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
                A six-month spreadsheet record, analysed line by line. It covers only part of the business history, and these are
                the figures that can be evidenced from the records.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
                {sample.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="block font-serif text-3xl italic leading-none md:text-4xl">{s.value}</span>
                      <span className="mt-2 block text-sm font-medium">{s.label}</span>
                      <span className="mt-1 block text-xs text-muted">{s.note}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* 01 Company */}
        <CaseSection id="company" index="01" label="Company introduction" title={<>A doorstep vehicle-care business, <span className="font-serif font-normal italic text-cyan">growing into a marketplace</span>.</>}>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Reveal className="overflow-hidden rounded-2xl border border-line bg-panel">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                <span className="size-2.5 rounded-full bg-white/10" />
                <span className="size-2.5 rounded-full bg-white/10" />
                <span className="size-2.5 rounded-full bg-white/10" />
                <span className="ml-3 font-mono text-[11px] text-dim">mechservi.in</span>
              </div>
              <Image src={asset("/mechservi/website-hero.jpg")} alt="MechServi website: trusted vehicle services, delivered on your terms" width={1184} height={740} className="h-auto w-full" />
            </Reveal>
            <Reveal delay={0.05}>
              <dl className="divide-y divide-line border-y border-line">
                {company.facts.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[8rem_1fr] gap-4 py-4">
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-dim">{k}</dt>
                    <dd className="text-fg/90">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </CaseSection>

        {/* 02-03 Problem & solution */}
        <CaseSection id="problem" index="02" label="Market problem" title={<>Vehicle care is <span className="font-serif font-normal italic text-cyan">fragmented</span> on both sides.</>}>
          <CardGrid items={problems} />
        </CaseSection>
        <CaseSection id="solution" index="03" label="Proposed solution" title={<>Bring the service to the customer, and <span className="font-serif font-normal italic text-cyan">demand to the partner</span>.</>}>
          <CardGrid items={solutions} />
        </CaseSection>

        {/* 04 Ecosystem */}
        <CaseSection
          id="ecosystem"
          index="04"
          label="Connected marketplace ecosystem"
          title={<>Three sides, <span className="font-serif font-normal italic text-cyan">one platform</span>.</>}
          intro="MechServi aims to connect the fragmented automotive after-sales market: vehicle owners on one side, garages and service partners on the other, with brands and vendors joining through B2B."
        >
          <Ecosystem owners={ecosystem.owners} platform={ecosystem.platform} partners={ecosystem.partners} brands={ecosystem.brands} />
        </CaseSection>

        {/* 05 Customer app */}
        <CaseSection
          id="customer-app"
          index="05"
          label="Customer application"
          title={<>One platform for <span className="font-serif font-normal italic text-cyan">every vehicle-care need</span>.</>}
          aside={<StatusTag status={customerApp.status} />}
        >
          <PhoneRow screens={customerApp.screens} />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">Customer journey</h3>
              <StepList steps={customerApp.journey} />
            </div>
            <Reveal>
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">Also in the app</h3>
              <ul className="flex flex-wrap gap-2">
                {customerApp.extras.map((e) => (
                  <li key={e} className="rounded-full border border-line bg-white/[0.02] px-3 py-1.5 text-sm text-fg/85">{e}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </CaseSection>

        {/* 06 Partner app */}
        <CaseSection
          id="partner-app"
          index="06"
          label="Partner application"
          title={<>Helping local garages and service professionals <span className="font-serif font-normal italic text-cyan">grow digitally</span>.</>}
          aside={<StatusTag status={partnerApp.status} />}
        >
          <PhoneRow screens={partnerApp.screens} />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">Partner journey</h3>
              <StepList steps={partnerApp.journey} />
            </div>
            <Reveal>
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">Why partners join</h3>
              <ul className="space-y-2.5">
                {partnerApp.value.map((v) => (
                  <li key={v} className="flex gap-3 text-fg/85">
                    <span className="mt-2.5 size-1 shrink-0 rounded-full bg-cyan" aria-hidden />
                    {v}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-dim">
                Verification is an admin review of uploaded documents. Settlements are tracked in the app and paid out by the
                team; payouts are not automated.
              </p>
            </Reveal>
          </div>
        </CaseSection>

        {/* 07 Admin */}
        <CaseSection id="admin" index="07" label="Admin & operations system" title={<>The control room behind <span className="font-serif font-normal italic text-cyan">every booking</span>.</>} aside={<StatusTag status={admin.status} />}>
          <Reveal className="grid gap-6 md:grid-cols-2">
            {admin.screens.map((s) => (
              <BrowserShot key={s.src} {...s} />
            ))}
          </Reveal>
          <Reveal className="mt-8 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
            {admin.features.map((f) => (
              <p key={f} className="flex gap-3 border-t border-line pt-3 text-sm leading-relaxed text-fg/85">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan" aria-hidden />
                {f}
              </p>
            ))}
          </Reveal>
        </CaseSection>

        {/* 08 Business model */}
        <CaseSection
          id="business-model"
          index="08"
          label="Business model"
          title={<>Built for <span className="font-serif font-normal italic text-cyan">recurring</span>, network-driven revenue.</>}
          intro="How revenue grows as customers return and the partner network deepens. Each stream is labelled by its real status."
        >
          <FlowChain steps={revenueLoop} />
          <div className="mt-8">
            <CardGrid items={revenueStreams} cols={4} />
          </div>
        </CaseSection>

        {/* 09 Acquisition */}
        <CaseSection id="acquisition" index="09" label="Customer acquisition strategy" title={<>Hyperlocal ads, <span className="font-serif font-normal italic text-cyan">WhatsApp-first</span> conversion.</>}>
          <CardGrid items={acquisition.channels} cols={4} />
          <div className="mt-6">
            <MetricGrid items={acquisition.ads} />
          </div>
          <Reveal className="mt-3 text-xs text-dim">Source: {acquisition.adsNote}</Reveal>
        </CaseSection>

        {/* 10-11 Retention */}
        <CaseSection id="retention" index="10" label="Retention & subscription model" title={<>Turning a first wash into a <span className="font-serif font-normal italic text-cyan">long relationship</span>.</>}>
          <div className="grid gap-10 lg:grid-cols-2">
            <StepList steps={retention.steps} />
            <Reveal className="space-y-4">
              {retention.evidence.map((e) => (
                <p key={e} className="flex gap-3 leading-relaxed text-fg/85">
                  <span className="mt-2.5 size-1 shrink-0 rounded-full bg-cyan" aria-hidden />
                  {e}
                </p>
              ))}
            </Reveal>
          </div>
        </CaseSection>

        {/* 12 Operations */}
        <CaseSection id="operations" index="11" label="Operational execution" title={<>Online demand, <span className="font-serif font-normal italic text-cyan">offline delivery</span>.</>} intro="Every booking became a field job. These systems kept quality consistent without the founder on every job.">
          <CardGrid items={operations} />
        </CaseSection>

        {/* 13 Technology */}
        <CaseSection id="technology" index="12" label="Technology & scalability" title={<>A platform designed to <span className="font-serif font-normal italic text-cyan">scale beyond one city</span>.</>}>
          <Reveal className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
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
          <Reveal className="mt-8 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {scalability.map((f) => (
              <p key={f} className="flex gap-3 border-t border-line pt-3 text-sm leading-relaxed text-fg/85">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan" aria-hidden />
                {f}
              </p>
            ))}
          </Reveal>
        </CaseSection>

        {/* 14 Growth */}
        <CaseSection id="growth" index="13" label="Growth opportunities" title={<>Where the marketplace <span className="font-serif font-normal italic text-cyan">goes next</span>.</>} intro="Roadmap, not results: none of these are claimed as current operations." aside={<StatusTag status="future" />}>
          <CardGrid items={growth} />
        </CaseSection>

        {/* 15 Founder */}
        <CaseSection id="founder" index="14" label="Founder background & ownership" title={<>What I <span className="font-serif font-normal italic text-cyan">personally</span> did.</>}>
          <Reveal className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {ownership.map((o) => (
              <div key={o.area} className="rounded-2xl border border-line bg-white/[0.015] p-6">
                <h3 className="font-medium tracking-tight">{o.area}</h3>
                <ul className="mt-3 space-y-1.5">
                  {o.items.map((i) => (
                    <li key={i} className="text-sm leading-relaxed text-muted">{i}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {o.how.map((h) => (
                    <span key={h} className="rounded-full bg-cyan-soft px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-cyan">{ownershipLabel[h]}</span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-6 max-w-4xl text-sm leading-relaxed text-muted">{ownershipNote}</Reveal>
        </CaseSection>

        {/* Social */}
        <section id="social" className="border-t border-line py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal className="flex flex-col gap-8 rounded-3xl border border-line bg-panel p-6 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="max-w-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">Brand building &amp; social presence</p>
                <p className="mt-3 text-2xl font-medium leading-snug tracking-tight">
                  Local brand built through Instagram reels, Facebook campaigns and community content.
                </p>
              </div>
              <ul className="flex flex-wrap gap-3">
                {social.map((s) => {
                  const Icon = socialIcon[s.label as keyof typeof socialIcon];
                  return (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-2xl border border-line-strong bg-ink px-4 py-3 transition hover:border-cyan">
                        <Icon className="size-5 text-fg transition group-hover:text-cyan" />
                        <span>
                          <span className="block text-sm font-medium">{s.label}</span>
                          <span className="block text-xs text-muted">{s.handle}</span>
                        </span>
                        <ArrowUpRight className="size-4 text-dim transition group-hover:text-cyan" aria-hidden />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Method */}
        <section className="border-t border-line py-16">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Reveal>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">Sources & methodology</h2>
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
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </Motion>
  );
}
