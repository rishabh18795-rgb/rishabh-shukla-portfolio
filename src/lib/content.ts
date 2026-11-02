// All facts on this site come from Rishabh's 2026 resume or from his GitHub
// repositories. Nothing here is an estimate: no invented clients, traffic,
// revenue or user numbers. Update this file when the facts change.

export type Experience = {
  role: string;
  org: string;
  period: string;
  place: string;
  summary: string;
  points: string[];
  engagements?: { name: string; role: string; points: string[] }[];
  more?: string[];
};

export const experience: Experience[] = [
  {
    role: "Startup Operations & Growth Lead",
    org: "MechServi",
    period: "2023 — Present",
    place: "Lucknow, Uttar Pradesh",
    summary:
      "Doorstep automotive service startup offering on-demand bike and car servicing (mechservi.in).",
    points: [
      "Led the 0-to-1 launch: vendor onboarding, field staff coordination, booking management and customer acquisition.",
      "Designed and ran performance marketing funnels on Meta Ads and Google Ads (ads → WhatsApp → confirmed booking), optimising cost-per-lead and conversion workflows.",
      "Built a mechanic and service-partner network with onboarding SOPs, service pricing, B2B fleet packages and subscription plans.",
      "Deployed WhatsApp Business API and CRM workflows for customer communication, booking reminders and post-service follow-ups.",
      "Led cross-functional operations: field execution, complaint resolution, team coordination, vendor SLA management and brand communications.",
      "Developed B2B outreach to fleet operators, corporate accounts and local businesses.",
      "Built the brand, website, social media presence, creative and WhatsApp campaigns in-house.",
    ],
  },
  {
    role: "Independent Startup, Technology & Growth Consultant",
    org: "Freelance",
    period: "May 2026 — Nov 2026",
    place: "Independent / Remote",
    summary:
      "Project-based engagements with early-stage businesses. Titles show the role held on each engagement, not employment.",
    points: [],
    engagements: [
      {
        name: "BlooCube",
        role: "CTO / Technology Lead (project engagement)",
        points: [
          "Product architecture for a brand–creator marketplace: registration, authentication and separate dashboards for each side.",
          "Designed payment and wallet requirements, a commission model (10–15% proposed) and creator withdrawal workflows (₹1,000 minimum).",
          "Coordinated frontend and backend delivery across GitHub, Vercel and Railway; API debugging and backend integration.",
        ],
      },
      {
        name: "SetoraHome",
        role: "Digital Growth & Marketing Consultant",
        points: [
          "Customer acquisition strategy, service positioning and Meta Ads lead-generation planning for a Varanasi launch.",
          "WhatsApp Business setup and catalogue; lead qualification, booking workflow and a 10-minute warm-lead response process.",
          "AI-assisted video ad concepts, scripts, Hindi voiceovers and creative direction.",
        ],
      },
      {
        name: "InstaBeam / Beam.Growth",
        role: "Digital Growth & Technology Consultant",
        points: [
          "Positioning, service lines, packages and pricing across web, Shopify, Meta and Google Ads, SEO, Google Business Profile and analytics.",
          "WhatsApp Business API automation, CRM implementation and lead-management offerings.",
        ],
      },
      {
        name: "Guerdon Kicks",
        role: "E-commerce Performance Marketing Consultant",
        points: [
          "Meta campaigns across awareness, retargeting and catalogue sales; Pixel and purchase-event tracking diagnostics.",
          "Catalogue sales campaign: ₹14,497 attributed revenue on ₹7,435 spend (1.94× ROAS, 2.25% CTR).",
        ],
      },
      {
        name: "Hasiru Nidhi",
        role: "Website & Digital Product Consultant",
        points: [
          "Website structure, contact and booking forms; Vercel deployment with GitHub version control.",
        ],
      },
      {
        name: "Kumba Gateway",
        role: "Marketing Funnel & Growth Strategy Consultant",
        points: [
          "Full acquisition funnel: Meta ad → landing page → catalogue → WhatsApp chatbot qualification → conversion.",
        ],
      },
      {
        name: "Meta Classes",
        role: "Digital Marketing Trainer & Curriculum Developer",
        points: [
          "Designed and taught a four-week, 16-session Meta Ads and Google Ads course with handbooks and campaign exercises.",
        ],
      },
    ],
    more: [
      "No Means No (international film): digital marketing strategy discussions (proposal stage)",
      "Rashtriyebharat: social media content and creative",
      "Yoga / Chakra niche: marketing strategy and an educational handbook",
    ],
  },
  {
    role: "Growth & Digital Marketing Consultant",
    org: "Independent / Freelance",
    period: "2022 — 2023",
    place: "Remote",
    summary:
      "Growth and e-commerce work for SME clients in services, retail, e-commerce, real estate and education.",
    points: [
      "Managed Meta Ads and Google Ads campaigns focused on ROAS and lead volume.",
      "Built and launched Shopify stores: product setup, payment integration, theme customisation and initial SEO.",
      "Developed conversion funnels (awareness → lead capture → purchase) and coached clients on WhatsApp follow-up.",
      "Delivered SEO, campaign analytics reporting and social media growth strategies.",
    ],
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
};

export const projects: Project[] = [
  {
    slug: "mechservi",
    name: "MechServi",
    kicker: "Automotive services · 2023 → present",
    tagline: "A doorstep bike and car service business, taken from idea to live operations in Lucknow.",
    status: { label: "Live business", tone: "live" },
    role: "Startup Operations & Growth Lead",
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
      "Defined the commission model (10–15% proposed), wallet, ₹1,000 minimum withdrawal and payout workflow",
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

export const technicalSkills = [
  {
    title: "Frontend",
    items: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Responsive UI", "Technical SEO"],
    evidence: "All five project repositories",
  },
  {
    title: "Backend & APIs",
    items: ["Express", "NestJS", "Next.js server actions", "REST APIs", "Transactional email (Resend)", "Webhooks"],
    evidence: "BlooCube, InstaBeam, MechServi platform",
  },
  {
    title: "Database & auth",
    items: ["Supabase (Postgres, Auth, Storage)", "Row-level security", "Prisma ORM", "PostgreSQL", "SQLite", "JWT & cookie sessions"],
    evidence: "Hasiru Nidhi, InstaBeam, BlooCube",
  },
  {
    title: "Payments & automation",
    items: ["Wallet, commission & withdrawal logic", "Razorpay (test mode)", "Shopify payments", "WhatsApp Business API", "Google Apps Script"],
    evidence: "BlooCube, MechServi, Shopify client stores",
  },
  {
    title: "Testing & delivery",
    items: ["Vitest", "Playwright", "GitHub Actions", "Vercel", "Railway", "GitHub"],
    evidence: "Hasiru Nidhi, BlooCube, this site",
  },
  {
    title: "Marketing technology",
    items: ["Meta Pixel & events", "GA4", "Google Tag Manager", "Google Business Profile", "Shopify", "Veblika CRM"],
    evidence: "InstaBeam, Guerdon Kicks, MechServi",
  },
];

export const businessSkills = [
  {
    title: "Startup & business operations",
    items: ["0-to-1 startup building", "Founder's office operations", "Business model development", "Revenue strategy", "Vendor management", "Process & SOP development"],
  },
  {
    title: "Growth & performance marketing",
    items: ["Meta Ads", "Google Ads", "Conversion funnels", "Retargeting", "Custom & lookalike audiences", "ROAS optimisation"],
  },
  {
    title: "Product & delivery",
    items: ["Product strategy", "Marketplace design", "Requirements from business models", "Frontend/backend coordination", "Deployment"],
  },
  {
    title: "Leadership & consulting",
    items: ["Client management", "Cross-functional coordination", "Field team leadership", "Creative direction", "Digital marketing training"],
  },
];

export const growthPillars = [
  {
    title: "Performance marketing",
    body: "Meta and Google campaigns across awareness, retargeting and catalogue sales, with custom and lookalike audiences.",
    proof: "Guerdon Kicks catalogue campaign: 1.94× ROAS",
  },
  {
    title: "Acquisition funnels",
    body: "Ads → WhatsApp → booking funnels that turn local intent into confirmed jobs, with clear hand-offs at each step.",
    proof: "MechServi, SetoraHome, Kumba Gateway",
  },
  {
    title: "WhatsApp automation",
    body: "WhatsApp Business API, catalogues, chatbot qualification, reminders and post-service follow-ups.",
    proof: "MechServi CRM workflows",
  },
  {
    title: "Vendor ecosystems",
    body: "Recruiting, onboarding and pricing a mechanic and service-partner network, with SLAs and quality control.",
    proof: "MechServi partner network",
  },
  {
    title: "B2B development",
    body: "Fleet packages, subscription plans and outreach to fleet operators, corporate accounts and local businesses.",
    proof: "MechServi B2B fleet packages",
  },
  {
    title: "Process automation",
    body: "Lead capture into CRM tables, automated email notifications, admin dashboards and repeatable SOPs.",
    proof: "InstaBeam leads pipeline",
  },
];

export const funnel = [
  { step: "Ad", detail: "Meta / Google" },
  { step: "Conversation", detail: "WhatsApp, landing page" },
  { step: "Qualify", detail: "Chatbot, 10-min call-back" },
  { step: "Book", detail: "Confirmed job" },
  { step: "Retain", detail: "Reminders, subscriptions" },
];
