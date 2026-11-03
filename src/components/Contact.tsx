import { ArrowUpRight, Briefcase, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Portrait } from "./Portrait";
import { Reveal } from "./ui";

const channels = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: LinkedInIcon, label: "LinkedIn", value: "rishabh-shukla-896681a4", href: site.linkedin, external: true },
  { icon: GitHubIcon, label: "GitHub", value: "rishabh18795-rgb", href: site.github, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-28 md:py-36">
      <div className="bg-grid pointer-events-none absolute inset-0 rotate-180 opacity-60" aria-hidden />
      <div className="glow-cyan pointer-events-none absolute -left-60 top-40 h-[500px] w-[700px]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            <span className="text-cyan">05</span>
            <span className="h-px w-8 bg-line-strong" />
            Contact
          </p>
          <div className="mt-8 flex items-center gap-5">
            <Portrait className="w-24 shrink-0 md:w-28" sizes="112px" />
            <div>
              <p className="text-lg font-medium tracking-tight">Rishabh Shukla</p>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">{site.designation}</p>
            </div>
          </div>
          <h2 className="mt-10 text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            Let&apos;s build something{" "}
            <span className="font-serif font-normal italic text-cyan">meaningful</span>.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            I&apos;m open to startup opportunities, business collaborations and professional conversations. If
            you&apos;re building something that needs strategy and execution, I&apos;d like to hear about it.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-start gap-3 text-fg/85">
              <MapPin className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden />
              Lucknow, India · Open to Delhi NCR and remote
            </li>
            <li className="flex items-start gap-3 text-fg/85">
              <Briefcase className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden />
              Open to Founder&apos;s Office, Business Operations, Growth and Strategy roles
            </li>
          </ul>
        </Reveal>

        <div>
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2">
              {channels.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-white/[0.015] p-4 transition hover:border-cyan/50"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-panel">
                      <Icon className="size-4 text-muted transition group-hover:text-cyan" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-dim">{label}</span>
                      <span className="block truncate text-sm text-fg transition group-hover:text-cyan">{value}</span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-dim transition group-hover:text-cyan" aria-hidden />
                    {external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="mt-4">
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
