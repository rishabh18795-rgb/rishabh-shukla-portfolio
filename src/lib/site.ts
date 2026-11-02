export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public/ asset path with the deployment base path. */
export const asset = (path: string) => `${BASE_PATH}${path}`;

export const site = {
  name: "Rishabh Shukla",
  url: "https://rishabh18795-rgb.github.io/rishabh-shukla-portfolio",
  title: "Rishabh Shukla — Startup Operator, 0-to-1 Builder & Growth Strategist",
  description:
    "Rishabh Shukla is a startup operations and growth professional from Lucknow, India. He took MechServi from concept to live operations and works with early-stage teams on marketplaces, growth funnels, WhatsApp automation and product delivery.",
  positioning: [
    "Startup Operator",
    "0-to-1 Builder",
    "Growth Strategist",
    "Business Operations & Technology Execution",
  ],
  location: "Lucknow, Uttar Pradesh, India",
  availability: "Open to Delhi NCR (Gurgaon / Noida) and Remote",
  email: "rishabh18795@gmail.com",
  phone: "+91 95591 33317",
  phoneHref: "tel:+919559133317",
  linkedin: "https://www.linkedin.com/in/rishabh-shukla-896681a4",
  github: "https://github.com/rishabh18795-rgb",
  website: "https://mechservi.in",
  resume: "/Rishabh_Shukla_Resume_2026.pdf",
  resumeFileName: "Rishabh_Shukla_Resume_2026.pdf",
  // FormSubmit forwards submissions to the inbox below. No API key is involved.
  formEndpoint: "https://formsubmit.co/ajax/rishabh18795@gmail.com",
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
