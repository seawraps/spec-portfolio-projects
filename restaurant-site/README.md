# Astera Coastal Bistro (Concept Restaurant Website)

Production-style Next.js restaurant website built as a portfolio demo project.

## Project Overview
Astera Coastal Bistro is a modern Mediterranean restaurant concept designed to feel commercially believable for a real hospitality client. The site focuses on visual storytelling, clean menu UX, responsive layout, and practical contact/reservation flows.

This project includes:
- Homepage with hero, featured dishes, story, gallery, testimonials, hours/location, and reservation CTA
- About page with brand story, press mentions, and concept note
- Menu page with categorized, readable menu sections
- Contact page with client-side validated form and success state

## Restaurant Concept
- **Name:** Astera Coastal Bistro
- **Cuisine:** Modern Mediterranean coastal
- **Positioning:** Upscale-but-warm dinner destination near the Santa Monica harbor
- **Brand tone:** Atmospheric, polished, ingredient-forward

## Tech Stack
- Next.js (latest stable)
- React
- TypeScript
- Tailwind CSS
- App Router
- ESLint

## Project Structure

```text
restaurant-site/
  app/
    about/
    contact/
    menu/
    globals.css
    layout.tsx
    page.tsx
  components/
    contact/
    layout/
    menu/
    sections/
    section-heading.tsx
  lib/
    data.ts
  public/
    images/
  README.md
  package.json
```

## Installation
From the `spec-portfolio-projects` root:

```bash
cd restaurant-site
npm install
```

## Run Locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

## Deploying To Vercel

### Option A: Deploy via Vercel Dashboard
1. Push `restaurant-site` to a Git provider (GitHub, GitLab, or Bitbucket).
2. In Vercel, click **Add New Project**.
3. Import the repository.
4. Set the root directory to `restaurant-site` (if this repo contains multiple projects).
5. Keep framework preset as **Next.js**.
6. Click **Deploy**.

### Option B: Deploy via Vercel CLI

```bash
npm i -g vercel
cd restaurant-site
vercel
```

For production:

```bash
vercel --prod
```

## Connecting A Custom Domain

### 1) Standalone Domain (example: `asteracoastal.com`)
1. Open your Vercel project.
2. Go to **Settings > Domains**.
3. Add `asteracoastal.com` and `www.asteracoastal.com`.
4. In your DNS provider, add the records Vercel provides (typically an A record and/or CNAME).
5. Verify domain status in Vercel until it shows active.

### 2) Subdomain on Portfolio Domain (example: `restaurant.mydomain.com`)
1. Open your Vercel project.
2. Go to **Settings > Domains**.
3. Add `restaurant.mydomain.com`.
4. In your DNS provider, create a CNAME record:
   - **Host/Name:** `restaurant`
   - **Value/Target:** `cname.vercel-dns.com`
5. Wait for DNS propagation and verify activation in Vercel.

## SEO + Accessibility Notes
- App Router metadata configured globally and per page
- Semantic heading/content structure
- Accessible labels and validation messaging in contact form
- Mobile-first responsive layout
- Internal linking across all required pages

## Portfolio Disclaimer
This is a **concept/demo portfolio project** intended to demonstrate full-stack/frontend architecture, brand execution, and production-ready UI implementation for restaurant websites.
