export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public/ asset path with the deployment base path. */
export const asset = (path: string) => `${BASE_PATH}${path}`;

export const site = {
  name: "Rishabh Shukla",
  url: "https://rishabh18795-rgb.github.io/rishabh-shukla-portfolio",
  title: "Rishabh Shukla — Business Operator | Strategy, Operations & Growth",
  description:
    "Rishabh Shukla is an entrepreneur and business operator from Lucknow, India, with a mechanical engineering foundation: founder of MechServi, with hands-on experience in startup building, strategy and operations, growth and GTM, digital products and business development.",
  designation: "Founder-Level Business Operator · Strategy, Operations & Growth",
  headline: ["Business Strategy & Operations", "Growth & Performance Marketing", "Product & Technology Execution"],
  location: "Lucknow, Uttar Pradesh, India",
  availability: "Open to immediate relocation · Delhi NCR, Bengaluru or remote",
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
  { id: "skills", label: "Technical Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

/** Standalone pages linked from the main navigation. */
export const pageLinks = [{ href: "/mechservi/", label: "MechServi case study" }] as const;
