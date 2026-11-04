# Rishabh Shukla — Portfolio

Personal portfolio of **Rishabh Shukla**: Startup Operator, 0-to-1 Builder, Growth Strategist and Business Operations & Technology Execution professional based in Lucknow, India.

**Live site:** https://rishabh18795-rgb.github.io/rishabh-shukla-portfolio/

The site presents MechServi (where Rishabh leads startup operations and growth), his consulting engagements, and selected ventures: BlooCube, SetoraHome, InstaBeam and Hasiru Nidhi. Each project lists the role held, the problem solved, what was built, what is still planned, and a technology stack taken from the actual repository.

## Tech stack

| | |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 (design tokens in `src/app/globals.css`) |
| Animation | Framer Motion, with `prefers-reduced-motion` respected |
| Icons | lucide-react, plus inline GitHub/LinkedIn SVGs |
| Fonts | Inter Tight, Instrument Serif, JetBrains Mono via `next/font` (self-hosted at build) |
| Output | Fully static export (`output: "export"`) |
| Hosting | GitHub Pages, deployed by GitHub Actions on every push to `main` |
| Contact form | [FormSubmit](https://formsubmit.co) AJAX endpoint: client-side validation, honeypot, real email delivery, no API keys |

## Sections

Home (hero, overview, verified results) · Technical Skills · Experience (expandable timeline, education) · Projects · Contact (form + direct channels) · Resume download

**MechServi case study** (`/mechservi/`): investor-style founder case study of a connected vehicle-care marketplace: traction (founder-reported figures kept separate from the verified Nov 2025 – Apr 2026 sample), three-sided ecosystem, real customer, partner and admin app screenshots (developed, in deployment), price-free business model, acquisition, retention, operations, technology, growth opportunities, founder ownership and social links. No charts. Data rules: no prices, no customer personal data, figures never summed across sources. Figures and their derivation live in `src/lib/mechservi.ts`.

SEO: metadata, Open Graph/Twitter image (`public/og.png`), JSON-LD `Person` schema, `sitemap.xml`, `robots.txt`, SVG favicon.

## Project structure

```
src/
  app/            layout (metadata, fonts), page, mechservi/ (case study), icon.svg, sitemap.ts, robots.ts, not-found
  components/     Nav, Hero (incl. Overview), Skills, Experience, Projects, Contact, ContactForm, mechservi (case-study blocks), ui
  lib/
    site.ts       profile, links, contact details, base-path helper
    content.ts    experience, projects, skill groups: all site copy lives here
    mechservi.ts  case-study figures, sources and methodology
scripts/og.html   source for public/og.png (render at 1200x630)
public/
  projects/       screenshots of the live project sites
  mechservi/      website hero; app/ holds price-blurred customer, partner and admin screenshots
  Rishabh_Shukla_Resume_2026.pdf
  og.png
.github/workflows/deploy.yml
```

To update content, edit `src/lib/content.ts` (experience, projects, skills) or `src/lib/site.ts` (contact details, links). To replace the resume, overwrite `public/Rishabh_Shukla_Resume_2026.pdf`, or change `resume` / `resumeFileName` in `site.ts`.

## Local development

Requires Node.js 20.9+ (tested on Node 24) and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000/rishabh-shukla-portfolio/ (the site is built for the `/rishabh-shukla-portfolio` base path).

```bash
npm run lint     # ESLint
npm run build    # static export to ./out
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which lints, builds the static export and publishes `out/` to GitHub Pages.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Custom domain

To serve from a domain root (e.g. `rishabhshukla.in`):

1. Add the domain in **Settings → Pages → Custom domain** and create `public/CNAME` containing the domain.
2. Build with an empty base path: add `PAGES_BASE_PATH: ""` as an `env` entry on the build step in the workflow.
3. Update `site.url` in `src/lib/site.ts`.

## Contact form

Submissions are POSTed from the browser to `https://formsubmit.co/ajax/<email>`, which emails them to Rishabh. There is no backend and no secret. FormSubmit sends a one-time activation email the first time the form is used; after the link in that email is clicked, submissions are delivered. If delivery fails, the form shows the error and a direct mailto link.

## Security

No API keys, tokens or credentials are used or committed. `.env*` files are git-ignored.

## License

Content, resume and images © Rishabh Shukla. All rights reserved. The code may be used as a reference.
