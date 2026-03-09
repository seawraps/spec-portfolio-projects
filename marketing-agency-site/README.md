# Marketing Agency Site (Signal & Stone)

A production-style concept website for a bold, conversion-focused marketing agency.

This project is intentionally built as a portfolio-ready spec to look and behave like paid client work, including realistic service positioning, case study storytelling, conversion-focused CTAs, and a polished contact flow.

## Agency Concept

**Signal & Stone** is a strategy-led marketing agency concept offering:

- Paid ads
- Branding
- Web strategy
- CRO
- Content strategy
- Creative campaigns

The site is designed to feel commercially believable for modern agency sales funnels.

## Tech Stack

- Next.js (App Router, latest stable)
- TypeScript
- Tailwind CSS (v4)
- React 19
- Vercel-ready configuration

## Pages Included

- `/` Homepage
- `/about` About page
- `/services` Services page
- `/contact` Contact page

## Core UI/UX Features

- Bold hero section and high-conversion CTA flow
- Services overview and detailed services content
- Case study highlights and results metrics
- Process section and testimonials
- Engagement model section
- Responsive navigation with mobile menu
- Accessible semantic structure and focus states
- SEO-friendly metadata via App Router
- Client-side validated contact form with success state (no backend required)

## Demo / Concept Note

This is a concept/demo portfolio project. Brand story, testimonial identities, and numeric outcomes are realistic placeholders used for presentation purposes.

## Project Structure

```text
marketing-agency-site/
  app/
    about/
    contact/
    services/
    globals.css
    layout.tsx
    page.tsx
  components/
    forms/
    layout/
    sections/
    ui/
  lib/
    data.ts
  public/
    media/
  README.md
  package.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### 3. Lint

```bash
npm run lint
```

### 4. Build production bundle

```bash
npm run build
```

### 5. Run production server locally (optional)

```bash
npm run start
```

## Deploying to Vercel

### Option A: Deploy via Vercel Dashboard (recommended)

1. Push this folder to a Git provider (GitHub/GitLab/Bitbucket).
2. In Vercel, click **Add New Project**.
3. Import the repository.
4. Keep framework preset as **Next.js**.
5. Click **Deploy**.

Vercel will auto-detect build settings:

- Build command: `next build` (or `npm run build`)
- Output: Next.js standard output

### Option B: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow prompts for project linking and production deployment.

## Connecting a Custom Domain

After deployment, open the project in Vercel and go to **Settings -> Domains**.

### 1) Use its own domain (example: `signalandstone.com`)

1. Add `signalandstone.com` (and optionally `www.signalandstone.com`) in Vercel Domains.
2. Update DNS at your registrar:
   - Apex/root domain: use Vercel A record or ALIAS/ANAME as instructed by Vercel.
   - `www`: usually CNAME to Vercel target.
3. Wait for verification and SSL provisioning.

### 2) Use a subdomain on a shared portfolio domain (example: `agency.mydomain.com`)

1. Add `agency.mydomain.com` in Vercel Domains.
2. In your DNS provider for `mydomain.com`, create a CNAME record:
   - Host: `agency`
   - Value: target provided by Vercel
3. After DNS propagates, Vercel verifies the domain and issues HTTPS automatically.

## Production Notes

- Contact form is intentionally frontend-only for demo portability.
- For real projects, connect form submission to API routes, server actions, or a provider (HubSpot, Resend, Formspree, etc.).
- Metadata and semantic heading structure are implemented for SEO and social sharing readiness.
