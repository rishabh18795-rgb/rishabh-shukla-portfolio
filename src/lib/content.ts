// All facts on this site come from Rishabh's 2026 resume or from his GitHub
// repositories. Nothing here is an estimate: no invented clients, traffic,
// revenue or user numbers. Update this file when the facts change.

export type EngagementKind = "Founder" | "Operating role" | "Freelance practice" | "Project engagement" | "Consulting engagement" | "Training";

export type Experience = {
  id: string;
  name: string;
  role: string;
  kind: EngagementKind;
  /** Only verified dates. Undefined means the resume gives no separate dates. */
  period?: string;
  description: string;
  highlights: string[];
  contribution?: string;
  link?: { label: string; href: string };
};

export const coreExperience: Experience[] = [
  {
    id: "mechservi",
    name: "MechServi Technology Pvt. Ltd.",
    role: "Founder & CEO",
    kind: "Founder",
    period: "2023 — Present",
    description: "Doorstep automotive services business, Lucknow.",
    highlights: [
      "Built and managed a doorstep automotive services business.",
      "Developed operational processes, service SOPs and pricing structures.",
      "Managed vendor and service-provider onboarding.",
      "Worked on B2B partnerships, subscriptions and business development.",
      "Managed customer acquisition through Meta and Google Ads.",
      "Implemented CRM and WhatsApp Business workflows.",
      "Coordinated field teams, service delivery and customer issue resolution.",
    ],
    contribution:
      "Built a connected vehicle-care marketplace serving 1,000+ customers, with 400+ monthly subscription plans sold or managed and 38% retention (founder-reported); customer and partner apps developed and in deployment.",
    link: { label: "Read the MechServi case study", href: "/mechservi/" },
  },
  {
    id: "freelance",
    name: "Independent",
    role: "Growth & Digital Marketing Consultant",
    kind: "Freelance practice",
    period: "2022 — 2023",
    description: "Growth and e-commerce work for businesses across service, retail, e-commerce, real estate and education.",
    highlights: [
      "Managed Meta Ads and Google Ads campaigns for businesses.",
      "Built Shopify stores and supported e-commerce operations.",
      "Worked on lead generation, marketing funnels and customer acquisition.",
      "Supported SEO, analytics, reporting and social media growth.",
    ],
  },
];

/** Engagements from Rishabh's independent consulting period, May – Nov 2026. */
export const engagementsPeriod = "May 2026 — Nov 2026";

export const engagements: Experience[] = [
  {
    id: "bloocube",
    name: "BlooCube",
    role: "CTO / Technology Lead",
    kind: "Project engagement",
    description: "Brand and creator collaboration marketplace.",
    highlights: [
      "Product architecture: brand and creator registration, authentication and separate dashboards.",
      "Payment and wallet requirements, commission model and withdrawal workflow.",
      "Coordinated frontend and backend delivery across GitHub, Vercel and Railway; API debugging and integration.",
    ],
    contribution: "Defined the marketplace's monetisation and payout model and brought the platform to a working production deployment.",
    link: { label: "bloocube.com", href: "https://bloocube.com" },
  },
  {
    id: "setorahome",
    name: "SetoraHome",
    role: "Digital Growth & Marketing Consultant",
    kind: "Consulting engagement",
    description: "Multi-service home-care brand launching in Varanasi.",
    highlights: [
      "Customer acquisition strategy, service positioning and Meta Ads lead-generation planning.",
      "WhatsApp Business setup and catalogue; lead qualification, booking workflow and follow-up SOPs.",
      "AI-assisted video ad concepts, scripts, Hindi voiceovers and creative direction.",
    ],
    contribution: "Designed the launch GTM from ad to WhatsApp conversation to booking. Three Meta campaigns started 135 WhatsApp conversations in 15 days (4–18 Oct 2026).",
    link: { label: "setorahome.com", href: "https://www.setorahome.com" },
  },
  {
    id: "instabeam",
    name: "InstaBeam / Beam.Growth",
    role: "Digital Growth & Technology Consultant",
    kind: "Consulting engagement",
    description: "Digital marketing and technology services brand. “One Signal. Full Funnel.”",
    highlights: [
      "Agency positioning, service lines, packages and pricing across web, Shopify, ads, SEO and analytics.",
      "WhatsApp Business API automation, CRM implementation and lead-management offerings.",
    ],
    contribution: "Packaged growth and technology services into a priced, full-funnel offer.",
    link: { label: "instabeam.site", href: "https://instabeam.site" },
  },
  {
    id: "guerdon",
    name: "Guerdon Kicks",
    role: "E-commerce Performance Marketing Consultant",
    kind: "Consulting engagement",
    description: "E-commerce brand.",
    highlights: [
      "Meta campaigns across awareness, retargeting and catalogue sales.",
      "Diagnosed Pixel, purchase-event and catalogue tracking issues; delivered optimisation benchmarks.",
    ],
    contribution: "Catalogue sales campaign: ₹14,497 attributed revenue on ₹7,435 spend (1.94× ROAS, 2.25% CTR).",
  },
  {
    id: "hasiru",
    name: "Hasiru Nidhi",
    role: "Website & Digital Product Consultant",
    kind: "Project engagement",
    description: "Nature stays and experiences company near Bengaluru.",
    highlights: [
      "Website structure, contact and booking forms.",
      "Frontend implementation, Vercel deployment with GitHub version control, ongoing improvements.",
    ],
    contribution: "Delivered the live website; Supabase database integration is planned.",
    link: { label: "hasiru-nidhi.vercel.app", href: "https://hasiru-nidhi.vercel.app" },
  },
  {
    id: "kumba",
    name: "Kumba Gateway",
    role: "Marketing Funnel & Growth Strategy Consultant",
    kind: "Consulting engagement",
    description: "Funnel strategy and design engagement.",
    highlights: [
      "Mapped the journey: Meta ad → landing page → catalogue → WhatsApp chatbot qualification → conversion.",
      "Landing-page content, CTA strategy, chatbot qualification and retargeting plan.",
    ],
    contribution: "Designed a complete acquisition funnel, ready for execution.",
  },
  {
    id: "meta-classes",
    name: "Meta Classes",
    role: "Digital Marketing Trainer & Curriculum Developer",
    kind: "Training",
    description: "Practical digital advertising course.",
    highlights: [
      "Designed and taught a four-week, 16-session course on Meta Ads and Google Ads.",
      "Built niche-specific handbooks and hands-on campaign exercises.",
    ],
    contribution: "Turned campaign experience into a structured, repeatable curriculum.",
  },
];

export type Project = {
  slug: string;
  name: string;
  kicker: string;
  tagline: string;
  status: { label: string; tone: "live" | "progress" | "private" };
  role: string;
  problem: string;
  work: string[];
  built?: string[];
  planned?: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  links: { label: string; href: string }[];
  note?: string;
  /** Verified headline results shown on the card. */
  results?: { value: string; label: string }[];
  /** Internal route to a full case study. */
  caseStudy?: string;
};

export const projects: Project[] = [
  {
    slug: "mechservi",
    name: "MechServi",
    kicker: "Automotive services · 2023 → present",
    tagline: "A connected vehicle-care marketplace in Lucknow, linking vehicle owners, garages and service partners through customer and partner apps.",
    status: { label: "Live business", tone: "live" },
    caseStudy: "/mechservi/",
    role: "Founder & CEO",
    problem:
      "Vehicle owners lose half a day to a workshop visit, while skilled independent mechanics have no steady demand or booking system. MechServi brings the service to the driveway.",
    work: [
      "Business model, service packages and pricing structure",
      "Mechanic and vendor partner network with onboarding SOPs and quality control",
      "Field team operations, complaint resolution and vendor SLAs",
      "B2B fleet packages and subscription plans for recurring revenue",
      "Meta Ads + Google Ads → WhatsApp → booking acquisition funnel",
      "WhatsApp Business API and CRM workflows for reminders and follow-ups",
      "Brand, website content, social media and creative assets, built in-house",
    ],
    built: [
      "Live customer business at mechservi.in with partner network and booking workflow",
      "Next-generation platform in private development: NestJS + Prisma/PostgreSQL API, Next.js admin, and Flutter customer and partner apps",
    ],
    stack: ["Meta Ads", "Google Ads", "WhatsApp Business API", "CRM", "NestJS", "PostgreSQL", "Next.js", "Flutter"],
    image: "/projects/mechservi.jpg",
    imageAlt: "MechServi homepage: trusted vehicle services, delivered on your schedule",
    links: [{ label: "mechservi.in", href: "https://mechservi.in" }],
    note: "Platform source code is private and not publicly launched.",
  },
  {
    slug: "bloocube",
    name: "BlooCube",
    kicker: "Creator marketplace · Technology lead",
    tagline: "A marketplace where brands post campaigns and creators bid, with escrow, wallets and withdrawals.",
    status: { label: "Live at bloocube.com", tone: "live" },
    role: "CTO / Technology Lead (project engagement)",
    problem:
      "Brands and creators negotiate collaborations in DMs and spreadsheets, with no bidding, no escrow and no payout trail.",
    work: [
      "Defined the commission model, partner wallet, withdrawal rules and payout workflow",
      "Made payment release, refund and withdrawal operations atomic, closing race conditions that could push a wallet negative",
      "Single-use password-reset tokens with transactional email (Resend)",
      "A separate office-admin portal with audit logging, verification and suspend flows",
      "Fixed production CORS and cookie issues on the custom domain with an API proxy",
      "Redesigned the homepage and authentication screens",
      "Tested the campaign → bid → accept → escrow → wallet → withdrawal flow end to end in production",
    ],
    built: [
      "Brand and creator sign-up, login and separate dashboards",
      "5-step campaign wizard, bidding, bid acceptance and messaging",
      "Internal escrow and wallet ledger with commission, withdrawal requests and admin review",
    ],
    planned: [
      "Live payment gateway (payments currently run on a mock provider)",
      "Automated payouts to creators",
    ],
    stack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Express", "Prisma", "SQLite", "JWT", "Resend", "Vitest", "Vercel", "Railway"],
    image: "/projects/bloocube.jpg",
    imageAlt: "BlooCube homepage: where brands meet their next great creators",
    links: [
      { label: "bloocube.com", href: "https://bloocube.com" },
      { label: "GitHub", href: "https://github.com/rishabh18795-rgb/BlooCube" },
    ],
    note: "Multi-contributor codebase. My commits begin in October 2026.",
  },
  {
    slug: "setorahome",
    name: "SetoraHome",
    kicker: "Home services · Varanasi launch",
    tagline: "A multi-service home-care brand: shifting, cleaning, repairs, car washing and senior care.",
    status: { label: "Live brand · redesign ready", tone: "live" },
    results: [
      { value: "135", label: "WhatsApp conversations" },
      { value: "13.5K", label: "Ad impressions" },
      { value: "91", label: "Partner-hiring chats" },
      { value: "15 days", label: "Campaign window" },
    ],
    role: "Digital Growth & Marketing Consultant",
    problem:
      "Households in Varanasi have no single, trusted channel to book everyday home help, from shifting and repairs to hospital assistance for parents.",
    work: [
      "Customer acquisition strategy, service positioning and marketing communication",
      "Meta Ads lead-generation planning, local ad budgets and conversion funnels",
      "WhatsApp Business setup, catalogue and lead qualification",
      "Booking workflow, follow-up SOPs and a 10-minute warm-lead response process",
      "AI-assisted video ad concepts, scripts, Hindi voiceovers and creative direction",
      "Redesigned website: nine service SEO pages, each with a pre-filled WhatsApp booking",
    ],
    built: [
      "Redesigned site: 23 statically rendered routes, local SEO, WhatsApp hand-off booking form (no backend)",
    ],
    planned: ["Moving the redesign onto www.setorahome.com (awaiting owner approval)"],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Meta Ads", "WhatsApp Business"],
    image: "/projects/setorahome.jpg",
    imageAlt: "SetoraHome redesigned homepage: your home has a problem? We have a solution",
    links: [
      { label: "setorahome.com", href: "https://www.setorahome.com" },
      { label: "Redesign preview", href: "https://setorahome-website.vercel.app" },
      { label: "GitHub", href: "https://github.com/rishabh18795-rgb/setorahome-website" },
    ],
  },
  {
    slug: "instabeam",
    name: "InstaBeam",
    kicker: "Growth & technology services · One Signal. Full Funnel.",
    tagline: "A digital marketing and technology brand that builds the site, runs the ads and wires the funnel.",
    status: { label: "Live at instabeam.site", tone: "live" },
    role: "Digital Growth & Technology Consultant",
    problem:
      "Small businesses buy a website, ads, tracking and WhatsApp from four vendors whose work never connects, so nobody can see where leads leak.",
    work: [
      "Agency positioning, service lines, packages and pricing",
      "Service range: websites, Shopify, Meta and Google Ads, WhatsApp automation, SEO, analytics, CRM",
      "Website with enquiry forms that email the team (Resend) and store every lead in a Supabase table",
      "Password-protected leads dashboard: search, filters, status, notes and CSV export",
      "GTM and Meta Pixel tracking, withheld from admin pages",
      "Private two-founder workspace with Supabase Auth and row-level security (in preview)",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "React Hook Form", "Zod", "Supabase", "Resend", "GTM", "Meta Pixel", "Vercel"],
    image: "/projects/instabeam.jpg",
    imageAlt: "InstaBeam homepage: one signal, full funnel",
    links: [
      { label: "instabeam.site", href: "https://instabeam.site" },
      { label: "GitHub", href: "https://github.com/rishabh18795-rgb/instabeam5" },
    ],
  },
  {
    slug: "hasiru-nidhi",
    name: "Hasiru Nidhi",
    kicker: "Nature stays & experiences · Bengaluru",
    tagline: "A nature-stay brand website, extended into a stays marketplace with host and admin portals.",
    status: { label: "Live · database pending", tone: "progress" },
    role: "Website & Digital Product Consultant",
    problem:
      "A nature-stay company an hour from Bengaluru needed one place to market stays and experiences, and to take bookings, quotes and host applications.",
    work: [
      "Website structure and information architecture",
      "Contact, booking-request and gardening quote forms",
      "Stay search, property pages and an 8-step host listing wizard",
      "Traveller, host and admin dashboards with booking-request handling and double-booking protection",
      "Supabase schema with row-level security; Vitest database tests and Playwright smoke tests in CI",
      "Vercel deployment with GitHub version control",
    ],
    built: [
      "Live marketing site and a clearly labelled demo mode for stays",
      "Marketplace code written and tested (184 Vitest tests, including a real-Postgres suite)",
    ],
    planned: [
      "Connecting the production Supabase database, which enables accounts and live bookings",
      "Payments and payouts (not built)",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase", "Zod", "GSAP", "Vitest", "Playwright", "GitHub Actions", "Vercel"],
    image: "/projects/hasiru-nidhi.jpg",
    imageAlt: "Hasiru Nidhi homepage: escape the city, embrace nature",
    links: [
      { label: "hasiru-nidhi.vercel.app", href: "https://hasiru-nidhi.vercel.app" },
      { label: "GitHub", href: "https://github.com/rishabh18795-rgb/hasiru-nidhi-website-2" },
    ],
  },
];

export const moreRepos = [
  {
    name: "meta-ads-ebook",
    description: "Landing page and lead magnets for a Meta Ads eBook: checklists, ad-copy guides and prompt packs.",
    stack: "HTML · CSS",
    href: "https://github.com/rishabh18795-rgb/meta-ads-ebook",
  },
  {
    name: "yoga",
    description: "Single-page marketing site for a yoga and wellness niche.",
    stack: "HTML · CSS",
    href: "https://github.com/rishabh18795-rgb/yoga",
  },
  {
    name: "landing-page",
    description: "Course landing page built for a training offer.",
    stack: "HTML · CSS",
    href: "https://github.com/rishabh18795-rgb/landing-page",
  },
  {
    name: "rishabh-shukla-portfolio",
    description: "This site. Static Next.js export, deployed to GitHub Pages by GitHub Actions.",
    stack: "Next.js · TypeScript · Tailwind",
    href: "https://github.com/rishabh18795-rgb/rishabh-shukla-portfolio",
  },
];

export type SkillKind = "hands-on" | "managed" | "capability";

export const skillKinds: Record<SkillKind, { label: string; note: string }> = {
  "hands-on": { label: "Used hands-on", note: "Appears in my code repositories" },
  managed: { label: "Platforms managed", note: "Run day to day for businesses" },
  capability: { label: "Business capability", note: "Demonstrated in operating roles" },
};

export type SkillGroup = {
  id: string;
  title: string;
  kind: SkillKind;
  summary: string;
  items: string[];
  evidence: string;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    kind: "hands-on",
    summary: "Responsive, SEO-ready web apps and marketing sites.",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS", "Framer Motion", "GSAP", "Technical SEO"],
    evidence: "BlooCube, SetoraHome, InstaBeam, Hasiru Nidhi, this site",
  },
  {
    id: "backend",
    title: "Backend Development",
    kind: "hands-on",
    summary: "APIs and server logic for marketplaces and lead pipelines.",
    items: ["Node.js", "Express", "NestJS", "REST APIs", "Next.js server actions", "Prisma ORM", "Transactional email", "Webhooks"],
    evidence: "BlooCube, InstaBeam, MechServi platform (private)",
  },
  {
    id: "data",
    title: "Database & Authentication",
    kind: "hands-on",
    summary: "Relational data, access control and sign-in flows.",
    items: ["PostgreSQL", "Supabase", "SQLite", "Row-level security", "Supabase Auth", "JWT & cookie sessions"],
    evidence: "Hasiru Nidhi, InstaBeam, BlooCube",
  },
  {
    id: "product",
    title: "Business & Product Technology",
    kind: "hands-on",
    summary: "The systems that make a marketplace or service business run.",
    items: ["Marketplace architecture", "Wallet, commission & payouts", "Payment gateway integration", "WhatsApp Business API", "CRM implementation", "Automation workflows", "Product development"],
    evidence: "BlooCube, MechServi, InstaBeam, Shopify stores",
  },
  {
    id: "growth",
    title: "Growth & Marketing Technology",
    kind: "managed",
    summary: "Acquisition, tracking and conversion platforms.",
    items: ["Meta Ads Manager", "Google Ads", "Google Analytics 4", "Google Tag Manager", "Meta Pixel & events", "Shopify", "SEO", "Google Business Profile", "Conversion tracking"],
    evidence: "MechServi, Guerdon Kicks, SetoraHome, client stores",
  },
  {
    id: "operations",
    title: "Business Operations",
    kind: "capability",
    summary: "Strategy and execution behind the numbers.",
    items: ["Startup operations", "GTM strategy", "Business development", "Revenue strategy", "Vendor management", "Process design & SOPs", "Team management", "Customer acquisition"],
    evidence: "MechServi, SetoraHome, consulting engagements",
  },
];

export const deliveryTools = ["GitHub", "GitHub Actions", "Vercel", "Railway", "Vitest", "Playwright"];
