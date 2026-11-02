import type { Metadata, Viewport } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"], display: "swap" });
const serif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});
const mono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(`${site.url}/`),
  title: site.title,
  description: site.description,
  applicationName: "Rishabh Shukla",
  authors: [{ name: site.name, url: site.linkedin }],
  keywords: [
    "Rishabh Shukla",
    "Startup Operations",
    "Founder's Office",
    "Growth Strategy",
    "Business Operations",
    "Marketplace",
    "Performance Marketing",
    "WhatsApp Automation",
    "Lucknow",
  ],
  alternates: { canonical: "./" },
  openGraph: {
    type: "profile",
    url: "./",
    siteName: "Rishabh Shukla",
    title: site.title,
    description: site.description,
    locale: "en_IN",
    images: [{ url: "og.png", width: 1200, height: 630, alt: "Rishabh Shukla — I build businesses, systems, products & growth engines." }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#06080b",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/rishabh-shukla.jpg`,
  jobTitle: "Startup Operations & Growth Lead",
  worksFor: { "@type": "Organization", name: "MechServi", url: site.website },
  address: { "@type": "PostalAddress", addressLocality: "Lucknow", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Glocal University" },
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin, site.github],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable} antialiased`}>
      <body className="min-h-screen bg-ink text-fg">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cyan focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
