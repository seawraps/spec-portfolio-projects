# Blue Oak Remodeling Co. (Concept Site)

Production-quality concept website for a premium local contractor business, built as a portfolio-ready demo project.

## Project Overview

This project showcases a commercial-grade marketing site for a local home services company. It is designed to look and behave like real paid client work, with:

- polished branding and visual hierarchy
- conversion-focused layout and CTAs
- responsive navigation and mobile-first structure
- reusable section/component architecture
- SEO-ready App Router metadata setup

## Business Concept

**Blue Oak Remodeling Co.** is a fictional Nashville-based residential remodeling contractor specializing in:

- Kitchen remodeling
- Bathroom renovation
- Whole-home refresh projects
- Outdoor living upgrades

All names, testimonials, and contact details are demo-safe fictional content created for portfolio usage.

## Tech Stack

- Next.js `16.1.6`
- App Router
- TypeScript
- Tailwind CSS (v4)
- React 19
- ESLint (Next.js config)

## Project Structure

```text
contractor-site/
  app/
    about/
    contact/
    services/
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    forms/
    layout/
    sections/
    ui/
  lib/
    data.ts
    metadata.ts
    utils.ts
  public/
    images/
  README.md
  package.json
```

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Lint the project

```bash
npm run lint
```

### 4. Build for production

```bash
npm run build
```

### 5. Run production server locally

```bash
npm run start
```

## SEO and Metadata Setup

The project uses App Router metadata best practices:

- global metadata in `lib/metadata.ts`
- page-level metadata via `createPageMetadata(...)`
- canonical paths per route
- Open Graph and Twitter card metadata
- `robots.ts` and `sitemap.ts` for crawl/index support

### Recommended environment variable (production)

Set your deployed site URL:

```bash
NEXT_PUBLIC_SITE_URL=https://your-live-domain.com
```

This ensures canonical and Open Graph URLs resolve correctly in production.

## Deploying to Vercel

### Option A: Deploy from GitHub repository

1. Push `contractor-site` to a GitHub repo (or monorepo path).
2. In Vercel, click **Add New → Project**.
3. Import the repository.
4. If this is a monorepo, set **Root Directory** to `contractor-site`.
5. Add environment variable:
   - `NEXT_PUBLIC_SITE_URL` = your production URL
6. Click **Deploy**.

Vercel will auto-detect Next.js and set correct build settings.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

Then set `NEXT_PUBLIC_SITE_URL` in Vercel project settings and redeploy.

## Connecting a Custom Domain

### 1) Individual domain for this project

Example: `blueoakremodeling.com`

1. Open your Vercel project dashboard.
2. Go to **Settings → Domains**.
3. Add your custom domain (`blueoakremodeling.com`).
4. Follow DNS instructions from Vercel (A/CNAME records).
5. Set `NEXT_PUBLIC_SITE_URL=https://blueoakremodeling.com`.
6. Redeploy to update canonical/Open Graph metadata.

### 2) Subdomain on a shared portfolio domain

Example: `contractor.mydomain.com`

1. In the same Domains screen, add `contractor.mydomain.com`.
2. Create the DNS CNAME record pointing to Vercel target.
3. Set `NEXT_PUBLIC_SITE_URL=https://contractor.mydomain.com`.
4. Redeploy.

This is ideal when hosting multiple portfolio specs under one parent domain.

## Notes

- This is a **concept/demo portfolio project**, not a live client property.
- No backend is required for contact form demo behavior (client-side validation + success state only).
- The codebase is Vercel-ready and can be used as a reusable starter for similar contractor/local service builds.
