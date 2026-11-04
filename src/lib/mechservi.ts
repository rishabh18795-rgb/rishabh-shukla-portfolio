// MechServi founder case study: content and figures.
//
// Rules this file follows:
// - No prices, package prices, revenue or other currency figures anywhere.
// - No customer names, phone numbers, addresses or vehicle numbers. App
//   screenshots use seeded demo accounts, with every amount blurred.
// - Two kinds of numbers, never mixed or added together:
//   1. Founder-reported figures for the whole business history (2023 – present).
//   2. Verified figures from a limited operating sample (Nov 2025 – Apr 2026)
//      and from Meta Ads Manager exports. Each is labelled with its source.
// - App features are listed only when they exist in the source code.

export type Status = "live" | "developed" | "built" | "planned" | "future";

export const statusLabel: Record<Status, string> = {
  live: "Live",
  developed: "Developed · in deployment",
  built: "Built & tested",
  planned: "Planned",
  future: "Future opportunity",
};

/** Founder-reported traction across the business history. */
export const traction = [
  { value: "1,000+", label: "Customers served", note: "Founder-reported, full business history" },
  { value: "400+", label: "Monthly subscription plans sold / managed", note: "Plans sold or managed over time, not active subscribers today" },
  { value: "38%", label: "Customer retention", note: "Founder-reported: customers who came back after their first service" },
  { value: "4,799", label: "Meta ads chat enquiries", note: "Verified: Meta Ads Manager, all campaigns to Nov 2026" },
];

export const tractionTags = [
  "Lucknow local market",
  "Meta-led customer acquisition",
  "WhatsApp-led enquiries & bookings",
  "Customer & partner apps developed",
];

/** Verified operating sample — a subset of the business history. */
export const sample = {
  period: "Nov 2025 – Apr 2026",
  stats: [
    { value: "402", label: "Unique customers", note: "De-duplicated by phone across both trackers" },
    { value: "389", label: "Completed one-time services", note: "Records marked done" },
    { value: "91", label: "Subscription customers", note: "In the available plan tracker snapshot" },
    { value: "28%", label: "Repeat one-time bookings", note: "94 of 336 one-time customers booked again" },
  ],
};

export const company = {
  facts: [
    ["Company", "MechServi Technology Pvt. Ltd."],
    ["Founded", "2023 · Lucknow, Uttar Pradesh"],
    ["Model", "B2C doorstep services + B2B partner marketplace"],
    ["Registration", "MSME-registered"],
    ["Role", "Founder & CEO"],
  ],
};

export const problems = [
  { title: "Vehicle owners lose time and trust", body: "A routine wash or service means half a day at a workshop, unclear pricing and no record of what was done." },
  { title: "Good mechanics lack steady demand", body: "Skilled independent garages and washers depend on walk-ins and word of mouth, with no digital booking or job management." },
  { title: "After-sales care is fragmented", body: "Washing, repairs, roadside help, parts and accessories sit with separate, unconnected local providers." },
];

export const solutions = [
  { title: "Doorstep services on demand", body: "Book washing, detailing, repairs and roadside help at home or office, instantly or for a chosen slot." },
  { title: "A verified partner network", body: "Mechanics and service partners are onboarded, KYC-checked and matched to jobs by skill and availability." },
  { title: "One connected platform", body: "Customers, service partners and automotive businesses meet in one system, with bookings, payments and records in one place." },
];

export const ecosystem = {
  owners: {
    title: "Vehicle owners",
    points: ["Discover vehicle-care services", "Book doorstep services", "Find trusted professionals", "Track service requests", "Access a wider auto-care ecosystem"],
  },
  partners: {
    title: "Garages & service partners",
    points: ["Receive customer job requests", "Digitise service operations", "Access new business", "Manage jobs and workflows", "Build a digital presence"],
  },
  platform: {
    title: "MechServi platform",
    points: ["Booking & matching", "Payments & subscriptions", "Quality & verification", "Customer support"],
  },
  brands: {
    title: "Brands, vendors & automotive businesses",
    points: ["Reach garages and service partners", "Develop B2B partnerships", "Distribute products and services", "Join a connected automotive network"],
  },
};

export const customerApp = {
  status: "developed" as Status,
  journey: [
    { step: "Open the app & sign in", detail: "Phone number login with a one-time code" },
    { step: "Add vehicles", detail: "Cars and bikes with make, model and fuel type" },
    { step: "Choose a service", detail: "Washing, detailing, repairs and roadside categories" },
    { step: "Pick a location", detail: "Saved addresses or a new pin" },
    { step: "Pick a time", detail: "Instant booking or a scheduled slot" },
    { step: "Review & book", detail: "Booking summary and confirmation" },
    { step: "Partner assigned", detail: "Live status: assigned, en route, arrived, in progress" },
    { step: "Track & chat", detail: "Tracking screen, chat with partner, call and support" },
    { step: "Pay & review", detail: "Online payment, wallet, pay on completion or subscription; rate the service" },
  ],
  extras: ["Monthly wash passes", "Wallet & payment history", "Offers & coupons", "Referrals", "Notifications", "24/7 roadside help"],
  screens: [
    { src: "/mechservi/app/customer-login.jpg", alt: "MechServi customer app: phone number login", caption: "Sign in" },
    { src: "/mechservi/app/customer-home.jpg", alt: "MechServi customer app home with categories and an active booking", caption: "Home" },
    { src: "/mechservi/app/customer-vehicles.jpg", alt: "MechServi customer app: saved car and bike", caption: "My vehicles" },
    { src: "/mechservi/app/customer-service.jpg", alt: "MechServi customer app: Premium Car Wash service details", caption: "Service details" },
    { src: "/mechservi/app/customer-booking.jpg", alt: "MechServi customer app: booking in progress with assigned partner", caption: "Booking status" },
  ],
};

export const partnerApp = {
  status: "developed" as Status,
  journey: [
    { step: "Register & apply", detail: "Partner application with profile and business details" },
    { step: "Choose services", detail: "Select the service categories offered" },
    { step: "Verification", detail: "Upload Aadhaar, PAN, licence and bank details for admin review" },
    { step: "Go online", detail: "Availability, working days and vacation mode" },
    { step: "Job requests", detail: "New jobs matched by skill, with accept or reject" },
    { step: "Job details", detail: "Customer, vehicle and service; exact address shared after accepting" },
    { step: "Execute the service", detail: "Navigate, call, chat, checklist and before/after photos" },
    { step: "Update & complete", detail: "Status updates and completion verified with a customer code" },
    { step: "Earnings & settlements", detail: "Per-job earnings, settlement history and withdrawal requests" },
  ],
  value: ["Access to digital customer demand", "Organised job management", "Better visibility and ratings", "Digital service workflows", "Room to grow a local business", "Centralised service records"],
  screens: [
    { src: "/mechservi/app/partner-dashboard.jpg", alt: "MechServi partner app dashboard with today's progress", caption: "Dashboard" },
    { src: "/mechservi/app/partner-request.jpg", alt: "MechServi partner app: new job request with accept and reject", caption: "Job request" },
    { src: "/mechservi/app/partner-job.jpg", alt: "MechServi partner app: service in progress with checklist and photos", caption: "Job in progress" },
    { src: "/mechservi/app/partner-kyc.jpg", alt: "MechServi partner app: documents and KYC upload", caption: "Documents & KYC" },
    { src: "/mechservi/app/partner-reviews.jpg", alt: "MechServi partner app: ratings and reviews", caption: "Ratings" },
  ],
};

export const admin = {
  status: "developed" as Status,
  features: ["Bookings with partner assignment and status control", "Partner onboarding and KYC review", "Customer management", "Service catalogue, packages and add-ons", "Subscriptions, coupons and payments", "Invoices, commission and settlements", "Notifications, CMS and reports", "Role-based access and audit log"],
  screens: [
    { src: "/mechservi/app/admin-booking.jpg", alt: "MechServi admin: booking detail with status timeline and partner assignment", caption: "Booking control" },
    { src: "/mechservi/app/admin-catalog.jpg", alt: "MechServi admin: service categories", caption: "Service catalogue" },
  ],
};

export const revenueLoop = ["Customer acquisition", "First transaction", "Subscription", "Repeat usage", "Partner network", "Marketplace revenue", "Customer lifetime value"];

export const revenueStreams: { title: string; body: string; status: Status }[] = [
  { title: "One-time services", body: "Doorstep washes, detailing, repairs and roadside jobs, booked per visit.", status: "live" },
  { title: "Monthly subscriptions", body: "Prepaid plans with a set number of washes, tracked wash by wash.", status: "live" },
  { title: "Marketplace commission", body: "A platform share on partner-delivered jobs, calculated per booking.", status: "developed" },
  { title: "Partner network", body: "Service partners join for digital demand, tools and a verified profile.", status: "developed" },
  { title: "B2B partnerships", body: "Fleet, corporate and business service agreements.", status: "live" },
  { title: "Brands & vendors", body: "Product and service collaborations with automotive businesses.", status: "planned" },
  { title: "Service add-ons", body: "Higher service tiers, detailing and extra services on a booking.", status: "live" },
  { title: "Technology-enabled services", body: "Parts marketplace, data-led maintenance reminders and partner software.", status: "future" },
];

export const acquisition = {
  channels: [
    { title: "Hyperlocal Meta ads", body: "Facebook and Instagram campaigns targeted to Lucknow localities such as Indira Nagar, Gomti Nagar, Hazratganj, Mahanagar, Aliganj and Ashiyana." },
    { title: "WhatsApp-first conversion", body: "Every ad, flyer and the website lead to a WhatsApp chat, where the team qualifies the customer and books the slot." },
    { title: "Local search", body: "Google Business Profile with service listings; profile calls rose from 11 to 18 month on month in November 2025." },
    { title: "Content & community", body: "Education-led posts and reels on car care, festival offers and local influencer collaborations." },
  ],
  ads: [
    { value: "2.16M", label: "Ad impressions" },
    { value: "821.8K", label: "Unique people reached" },
    { value: "16,550", label: "Link clicks" },
    { value: "4,799", label: "Chat conversations" },
  ],
  adsNote: "Meta Ads Manager export, all 15 MechServi campaigns, October 2023 – November 2026.",
};

export const retention = {
  steps: [
    { step: "First service", detail: "A one-time wash or service, booked over WhatsApp or the app" },
    { step: "Plan offer", detail: "Subscription offered after a good first experience" },
    { step: "Wash-by-wash tracking", detail: "Each plan logs washes used and remaining" },
    { step: "Renewal follow-up", detail: "Daily lists of plans finished or ending soon" },
  ],
  evidence: [
    "In the operating sample, 94 of 336 one-time customers (28%) booked again, with a median 20 days to the next booking.",
    "18 customers moved from a one-time wash to a subscription, and 22 subscribers started plans in two or more months.",
    "Across the sample, 33% of customers have two or more service records. The 38% headline is founder-reported over the full history.",
  ],
};

export const operations = [
  { title: "Customer & booking management", body: "One-time and subscription trackers with follow-up dates for every customer." },
  { title: "Service scheduling", body: "Field teams assigned to each booking and coordinated through the day." },
  { title: "Field team management", body: "Hiring, appointment policy, attendance, timetables and incentives for washing agents." },
  { title: "Vendor & partner onboarding", body: "Onboarding SOP, agreement and tracker covering KYC, equipment, trials and ratings." },
  { title: "Quality & SOPs", body: "Master SOP manual, WhatsApp SOPs, agent rules and before/after photo standards." },
  { title: "B2B partnerships", body: "Signed B2B service agreement in May 2025, plus fleet and corporate packages." },
];

export const tech: { name: string; detail: string; stack: string[]; status: Status }[] = [
  { name: "Customer app", detail: "Booking, tracking, payments, subscriptions, wallet and chat.", stack: ["Flutter", "Dart"], status: "developed" },
  { name: "Partner app", detail: "Onboarding, KYC, job requests, execution, earnings and settlements.", stack: ["Flutter", "Dart"], status: "developed" },
  { name: "Admin dashboard", detail: "Operations, partners, catalogue, finance and audit.", stack: ["Next.js", "React", "TypeScript"], status: "developed" },
  { name: "Platform API", detail: "Bookings, matching, payments, commission, subscriptions, real-time updates; ~227 automated tests.", stack: ["NestJS", "Prisma", "PostgreSQL", "Razorpay", "WhatsApp Cloud API"], status: "developed" },
  { name: "mechservi.in", detail: "Live marketing website with service catalogue, partner sign-up and WhatsApp booking.", stack: ["Netlify", "WhatsApp click-to-chat"], status: "live" },
];

export const scalability = [
  "Three separate sign-in realms: customer, partner and admin",
  "Skill-based job matching with accept/reject",
  "Server-side pricing and payment verification",
  "Commission and settlement engine",
  "Real-time booking updates and in-app chat",
  "Role-based admin access with audit logging",
];

export const growth = [
  { title: "More service categories", body: "Extend from washing into servicing, repairs, EV care and accessories." },
  { title: "Grow partner supply", body: "Onboard more garages and washers through the partner app." },
  { title: "Geographic expansion", body: "Replicate the Lucknow playbook in new cities, with Kolkata and Katihar in planning." },
  { title: "B2B automotive partnerships", body: "Fleets, dealerships, housing societies and corporate accounts." },
  { title: "Subscription adoption", body: "Move more one-time customers onto recurring plans." },
  { title: "Digital tools for providers", body: "Give local service businesses job, payment and customer tools." },
];

export type Ownership = "led" | "built" | "managed" | "team";
export const ownershipLabel: Record<Ownership, string> = {
  led: "Designed & led",
  built: "Built (AI-assisted)",
  managed: "Managed hands-on",
  team: "With the team",
};

export const ownership: { area: string; items: string[]; how: Ownership[] }[] = [
  { area: "Business strategy", items: ["Business model and service positioning", "Customer segmentation", "Revenue model planning", "Market entry and operational planning"], how: ["led"] },
  { area: "Website & technology", items: ["Website planning and booking journey", "Product requirements and digital workflows", "App and platform development"], how: ["led", "team"] },
  { area: "Growth & performance marketing", items: ["Meta Ads with local targeting", "Lead generation and conversion", "Campaign creatives and optimisation"], how: ["managed"] },
  { area: "Automation & CRM", items: ["WhatsApp Business flows and scripts", "CRM trackers and follow-up systems", "Lead qualification process"], how: ["led", "managed"] },
  { area: "Operations", items: ["Customer and subscription operations", "Scheduling and field teams", "Vendor and partner relationships", "Service delivery and retention"], how: ["managed"] },
  { area: "Brand building", items: ["Social media and content planning", "Instagram and Facebook marketing", "Influencer collaborations", "Local brand awareness"], how: ["managed", "team"] },
  { area: "Product", items: ["Customer and partner app features", "Marketplace workflows", "Platform architecture (NestJS, Flutter, Next.js)"], how: ["led", "built"] },
];

export const ownershipNote =
  "The website and early mobile app were built by MechServi's in-house developers under my product direction. The current platform (API, customer and partner apps, admin) was built under my direction with AI-assisted development; I owned the requirements, architecture decisions, testing and review.";

export const social = [
  { label: "Instagram", handle: "@mechservi", href: "https://www.instagram.com/mechservi/" },
  { label: "Facebook", handle: "Mechservi Technology", href: "https://www.facebook.com/people/Mechservi-Technology/61574689574135/" },
  { label: "Website", handle: "mechservi.in", href: "https://mechservi.in" },
];

export const method = [
  "Headline traction (1,000+ customers served, 400+ subscription plans sold or managed, 38% retention) is founder-reported for the full business history since 2023. Subscription plans are plans sold or managed over time, not current subscribers.",
  "The operating sample is the spreadsheet record for November 2025 – April 2026: the largest snapshot of each tracker (490 one-time and 162 subscription records), de-duplicated by phone number. It is a subset of the business history, so its figures are lower than the headline and are never added to it.",
  "Retention in the sample: 28% of one-time customers booked again, and 33% of all sample customers have two or more records. The 38% headline uses the full history.",
  "Ad figures come from Meta Ads Manager exports for the MechServi ad account. No spend, revenue, ROAS, GMV or market-size figures are published.",
  "App screenshots come from the MechServi customer, partner and admin applications running with demo accounts and demo data. Amounts are blurred; no real customer data appears.",
];
