// MechServi flagship case study: every figure below was computed from
// MechServi's own records or reports, never estimated. How each number was
// derived is described in `method` at the bottom of this file.
//
// Rules this file follows:
// - No prices, package prices or currency amounts anywhere.
// - No customer names, phone numbers, addresses or vehicle numbers.
// - Workbook versions are never added together: the largest snapshot of each
//   tracker is used, and customers are de-duplicated by phone number.

export type Status = "live" | "built" | "prototype" | "planned" | "framework";

export const statusLabel: Record<Status, string> = {
  live: "Live in operations",
  built: "Built & tested",
  prototype: "Prototype",
  planned: "Planned",
  framework: "Framework",
};

/** Headline results, Nov 2025 – Apr 2026 operating records unless noted. */
export const headline = [
  { value: "402", label: "Unique customers", note: "De-duplicated by phone across both trackers" },
  { value: "389", label: "Completed one-time services", note: "Records marked done in the one-time tracker" },
  { value: "28%", label: "Repeat booking rate", note: "94 of 336 one-time customers booked again" },
  { value: "20 days", label: "Median time to rebook", note: "Across customers with a second dated booking" },
  { value: "91", label: "Subscription customers", note: "Monthly plans with wash-level tracking" },
  { value: "4,799", label: "Ad-driven chat enquiries", note: "Messaging conversations from Meta ads, all campaigns" },
];

export const records = {
  total: 652,
  oneTime: 490,
  subscription: 162,
  uniqueCustomers: 402,
  oneTimeCustomers: 336,
  subscribers: 91,
  overlap: 25,
  period: "Nov 2025 – Apr 2026",
};

/** New vs returning active customers per month (both trackers combined). */
export const monthly = [
  { month: "Nov", newC: 171, returning: 0 },
  { month: "Dec", newC: 60, returning: 21 },
  { month: "Jan", newC: 9, returning: 10 },
  { month: "Feb", newC: 53, returning: 14 },
  { month: "Mar", newC: 39, returning: 38 },
  { month: "Apr*", newC: 5, returning: 9 },
];

export const retention = [
  { value: "94", label: "Repeat one-time customers", detail: "28% of 336; 2.6 bookings each on average" },
  { value: "62%", label: "Rebooked within 30 days", detail: "44 of 71 customers with a dated second booking" },
  { value: "18", label: "One-time → subscription upgrades", detail: "Customers whose first record was a one-time wash" },
  { value: "22", label: "Subscribers with repeat plan starts", detail: "Plans started in two or more different months (24%)" },
  { value: "75%", label: "Subscription wash utilisation", detail: "Washes used vs included, on rows that log both" },
  { value: "49%", label: "Returning share of active customers", detail: "38 of 77 active customers in March 2026" },
];

/** One-time service mix by package name (share of 490 records). */
export const serviceMix = [
  { label: "Supreme wash", share: 53 },
  { label: "Ultimate wash", share: 18 },
  { label: "One-time (unspecified)", share: 16 },
  { label: "Weekend offer", share: 7 },
  { label: "Essential wash", share: 3 },
  { label: "Other", share: 3 },
];

export const marketing = {
  october: [
    { value: "501.8K", label: "Facebook views", detail: "500.6K from ads · 345K viewers" },
    { value: "367.5K", label: "Instagram views", detail: "317.3K from ads" },
    { value: "325.1K", label: "Instagram reach", detail: "Up from the previous month" },
    { value: "16.8K", label: "Instagram interactions", detail: "Saves, shares, comments, likes" },
  ],
  november: [
    { value: "271.5K", label: "Instagram views", detail: "147K reach · 9.5K interactions" },
    { value: "141.8K", label: "Facebook views", detail: "Watch time up 64%" },
    { value: "+64%", label: "Google Business Profile calls", detail: "11 → 18 calls month on month" },
  ],
  /** Meta Ads Manager export, account lifetime (Oct 2023 – Nov 2026). */
  lifetime: [
    { value: "2.16M", label: "Impressions", detail: "15 campaigns · 821.8K unique reach" },
    { value: "16,550", label: "Link clicks", detail: "0.77% link CTR · ~₹5 per click" },
    { value: "4,799", label: "Chat conversations", detail: "9 messaging campaigns · ~₹14 each" },
    { value: "4,871", label: "Profile visits", detail: "Festival & traffic campaigns" },
  ],
  /** Meta Ads Manager export for the operating-records window. */
  window: [
    { value: "2,235", label: "Chat conversations", detail: "Nov 2025 – Apr 2026 · ~₹18 each" },
    { value: "₹6.29", label: "Cost per link click", detail: "6,735 link clicks · 0.76% CTR" },
    { value: "15%", label: "Conversation → new customer", detail: "337 new customers ÷ 2,235 chats (blended)" },
    { value: "~₹126", label: "Ad cost per new customer", detail: "Blended: ad spend ÷ all new customers" },
  ],
  localities: ["Indira Nagar", "Gomti Nagar", "Hazratganj", "Mahanagar", "Aliganj", "Ashiyana"],
  source: "MechServi monthly Meta & Google Business Profile reports, October–November 2025",
  adsSource: "Meta Ads Manager campaign exports (account lifetime, and 1 Nov 2025 – 29 Apr 2026)",
};

/** Funnel for one window, Nov 2025 – Apr 2026: Ads Manager export + operating records. */
export const funnel: { stage: string; evidence: string; status: "verified" | "not-tracked" | "withheld" }[] = [
  { stage: "Campaigns", evidence: "8 local Meta campaigns with delivery", status: "verified" },
  { stage: "Local reach", evidence: "361.8K people reached · 888K impressions", status: "verified" },
  { stage: "Clicks", evidence: "6,735 link clicks · 0.76% CTR", status: "verified" },
  { stage: "Enquiries", evidence: "2,235 chat conversations started from ads", status: "verified" },
  { stage: "New customers", evidence: "337 first-time customers in service records", status: "verified" },
  { stage: "Completed services", evidence: "389 completed one-time services", status: "verified" },
  { stage: "Repeat customers", evidence: "94 repeat one-time customers", status: "verified" },
  { stage: "Subscribers", evidence: "91 monthly subscription customers", status: "verified" },
  { stage: "Revenue & ROAS", evidence: "Withheld: this page publishes no revenue or prices", status: "withheld" },
];

export const whatsappFlow: { step: string; detail: string; status: Status }[] = [
  { step: "Customer", detail: "Clicks WhatsApp from an ad, the website or a flyer QR code", status: "live" },
  { step: "WhatsApp entry", detail: "Click-to-chat links on mechservi.in and every creative", status: "live" },
  { step: "Greeting & options", detail: "Scripted greeting, location, slot and service options (SOP)", status: "live" },
  { step: "Lead qualification", detail: "Team qualifies vehicle, area and plan using call scripts", status: "live" },
  { step: "Booking & CRM", detail: "Booking logged in the one-time or subscription tracker", status: "live" },
  { step: "Follow-up", detail: "Follow-up date on every record; renewal lists for subscribers", status: "live" },
  { step: "WhatsApp Cloud API", detail: "OTP login via Meta's Cloud API in the new platform backend", status: "built" },
  { step: "AI-assisted booking", detail: "LLM conversational booking over WhatsApp, specified in the technical architecture", status: "planned" },
];

export const revenueLoop = [
  "Customer acquisition",
  "First service",
  "Subscription conversion",
  "Repeat service",
  "Upsell & add-ons",
  "Retention",
  "Lifetime value",
];

export const revenueLevers = [
  { title: "One-time services", body: "Package-based doorstep washes: the entry point for new customers." },
  { title: "Monthly subscriptions", body: "Plans with a fixed number of washes, tracked wash by wash." },
  { title: "Recurring relationships", body: "Renewal lists flag plans that are finished or ending soon." },
  { title: "Add-ons & upselling", body: "Higher wash tiers, detailing and battery or breakdown services." },
  { title: "Repeat bookings", body: "28% of one-time customers came back, typically within weeks." },
  { title: "Partner commissions", body: "Vendor revenue-share model with KYC, trial and payout tracking." },
  { title: "B2B partnerships", body: "Signed B2B service agreement (May 2025) and fleet packages." },
  { title: "Retention", body: "Follow-up dates on every record and a daily renewal report." },
  { title: "Lifetime value", body: "One-time → subscription upgrades extend each relationship." },
  { title: "Diversification", body: "Marketplace for parts and accessories, and expansion cities in plan." },
];

export const operations = [
  { title: "Customer & booking management", body: "Separate trackers for one-time and subscription customers, each with follow-up dates and remarks." },
  { title: "Service scheduling", body: "Field teams assigned per booking; 10 distinct team allocations recorded in the subscription tracker." },
  { title: "Retention operations", body: "Daily report snapshot: 12 plans due for renewal, 21 ending soon, 25 active." },
  { title: "Field team management", body: "Hiring, appointment policy, attendance, timetables and incentive policy for washing agents." },
  { title: "Vendor onboarding", body: "Onboarding SOP, agreement and tracker covering KYC, equipment, trials, ratings and payouts." },
  { title: "Quality & SOPs", body: "Master SOP manual, WhatsApp SOPs, washing-agent rules and before/after photo standards." },
];

export const tech: { name: string; detail: string; stack: string[]; status: Status }[] = [
  {
    name: "mechservi.in website",
    detail: "Marketing site with service catalogue, partner recruitment and WhatsApp booking. Self-hosted with Docker and nginx.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend", "Docker", "nginx"],
    status: "live",
  },
  {
    name: "Customer & vendor dashboards",
    detail: "Bookings, orders, wallet, services, reviews and analytics screens in the website repo, running on sample data.",
    stack: ["Next.js", "Recharts"],
    status: "prototype",
  },
  {
    name: "Customer mobile app",
    detail: "Booking, order tracking, profile, payment and referral screens, with API calls to a backend service.",
    stack: ["React Native", "TypeScript", "React Navigation"],
    status: "prototype",
  },
  {
    name: "Next-generation platform",
    detail: "Booking, partner, payment, invoicing, commission and subscription modules, with ~227 automated backend tests. Not yet launched.",
    stack: ["NestJS", "Prisma", "PostgreSQL", "Next.js admin", "Flutter", "WhatsApp Cloud API", "Razorpay (test)"],
    status: "built",
  },
];

export const ownership = [
  "Business model, service packages and subscription design",
  "Website, app and platform requirements, with the tech team",
  "Local Meta campaigns, creatives and Google Business Profile",
  "WhatsApp-led sales process, scripts and CRM trackers",
  "Hiring and managing field agents and CRM staff",
  "Vendor onboarding, SOPs, quality and complaint resolution",
  "B2B partnerships and expansion planning",
];

export const influencer = [
  "Influencer selection",
  "Local audience analysis",
  "Collaboration brief",
  "Content publication",
  "Reach",
  "Enquiries",
  "Bookings",
  "Performance review",
];

export const creatives = [
  { src: "/mechservi/creative-doorstep-service.jpg", alt: "MechServi Hindi creative for doorstep car services", w: 720, h: 480 },
  { src: "/mechservi/creative-no-time.jpg", alt: "MechServi ad: no time for a car wash? Professional car wash at your doorstep", w: 600, h: 900 },
  { src: "/mechservi/creative-why-dirty.jpg", alt: "MechServi carousel: why your car gets dirty so fast", w: 600, h: 900 },
  { src: "/mechservi/creative-open-parking.jpg", alt: "MechServi carousel: parking in open areas exposes your car to dust", w: 600, h: 900 },
  { src: "/mechservi/creative-battery.jpg", alt: "MechServi ad: battery dead? Instant jump start at your doorstep", w: 720, h: 900 },
  { src: "/mechservi/creative-whatsapp-easy.jpg", alt: "MechServi post: vehicle care as easy as sending a WhatsApp message", w: 600, h: 900 },
];

export const learnings = [
  { title: "Retention beats acquisition spend", body: "Ad reach peaked in October, but by March nearly half of active customers were returning ones. Follow-up discipline mattered more than new campaigns." },
  { title: "Connect the ad to the customer", body: "Meta counted 2,235 conversations and the CRM counted 337 new customers, but nothing linked the two. Next time every WhatsApp lead gets a source tag, so conversion is measured per campaign instead of blended." },
  { title: "Standardise before you scale", body: "SOPs, scripts and trackers came first, so new agents and vendors could deliver the same service without me on every job." },
  { title: "Validate with operations, then build the platform", body: "Spreadsheets and WhatsApp proved the workflows; the platform now encodes them as bookings, subscriptions and commissions." },
];

export const method = [
  "Sources: every saved copy of the one-time wash and monthly subscription trackers (18 files each, several identical or empty), two retention reports, two monthly marketing reports, and the website, app and platform source code.",
  "The largest snapshot of each tracker was used (490 and 162 records). Versions were compared, not added: across all versions only one additional customer appears.",
  "Customers were de-duplicated by the last 10 digits of their phone number; 6 subscription rows without a phone number were excluded from customer counts.",
  "“Completed” means the record's remark is “done”. Utilisation uses only the 40 plan rows that log both included and used washes.",
  "Ad metrics come from Meta Ads Manager exports. Cost figures are per-unit efficiency ratios (per click, per conversation, per new customer); total spend is not shown. Conversion and cost per new customer are blended: they divide by all new customers, whatever channel brought them.",
  "ROAS and customer lifetime value are not shown, because they need revenue figures and this page publishes no prices or revenue.",
  "April 2026 is a partial month. No prices, customer names, phone numbers or addresses appear anywhere on this page.",
];
