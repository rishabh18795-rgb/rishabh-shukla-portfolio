import { ArrowUpRight, Globe, GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Reveal, SectionHeading } from "./ui";

export function Education() {
  return (
    <section id="education" className="border-t border-line py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[25%_1fr] md:px-8">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            <span className="text-cyan">06</span>
            <span className="h-px w-8 bg-line-strong" />
            Education
          </p>
        </Reveal>
        <Reveal delay={0.05} className="flex flex-col gap-6 rounded-3xl border border-line bg-white/[0.015] p-7 sm:flex-row sm:items-center sm:justify-between md:p-9">
          <div className="flex items-start gap-5">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-line bg-panel">
              <GraduationCap className="size-5 text-cyan" aria-hidden />
            </span>
            <div>
              <h3 className="text-2xl font-medium tracking-tight">Bachelor of Technology (B.Tech)</h3>
              <p className="mt-1 text-muted">Glocal University, Saharanpur, Uttar Pradesh</p>
            </div>
          </div>
          <p className="font-mono text-sm text-cyan">2013 — 2017</p>
        </Reveal>
      </div>
    </section>
  );
}

const channels = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: LinkedInIcon, label: "LinkedIn", value: "rishabh-shukla-896681a4", href: site.linkedin, external: true },
  { icon: GitHubIcon, label: "GitHub", value: "rishabh18795-rgb", href: site.github, external: true },
  { icon: Globe, label: "Website", value: "mechservi.in", href: site.website, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-28 md:py-36">
      <div className="bg-grid pointer-events-none absolute inset-0 rotate-180 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="07"
          label="Contact"
          title={
            <>
              Building something that needs{" "}
              <span className="font-serif font-normal italic text-cyan">an operator?</span>
            </>
          }
          intro="I'm open to Founder's Office, Business Operations, Growth, Strategy & Operations, startup leadership and EIR opportunities. Based in Lucknow, open to Delhi NCR and remote."
        />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <ul className="divide-y divide-line border-y border-line">
              {channels.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 py-5"
                  >
                    <Icon className="size-4 shrink-0 text-muted transition group-hover:text-cyan" aria-hidden />
                    <span className="w-20 shrink-0 font-mono text-[11px] uppercase tracking-widest text-dim">{label}</span>
                    <span className="min-w-0 flex-1 truncate text-fg transition group-hover:text-cyan">{value}</span>
                    <ArrowUpRight className="size-4 shrink-0 text-dim transition group-hover:text-cyan" aria-hidden />
                    {external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted">
              <MapPin className="size-4 text-cyan" aria-hidden /> {site.location}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 text-sm text-dim md:flex-row md:items-center md:px-8">
        <p>© {new Date().getFullYear()} Rishabh Shukla · Lucknow, India</p>
        <p className="font-mono text-xs">Built with Next.js, TypeScript &amp; Tailwind CSS · Hosted on GitHub Pages</p>
        <a href="#home" className="hover:text-fg">Back to top ↑</a>
      </div>
    </footer>
  );
}
