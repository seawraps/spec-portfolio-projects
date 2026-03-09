# Crescent Vale Realty

A production-style real estate agency concept site built for a portfolio showcase. The project presents a boutique brokerage serving an upscale metro and suburban market with commercially believable copy, polished responsive layouts, and a client-side contact workflow.

## Project Overview

This site is designed to feel like a real agency someone could launch with minimal adaptation. It includes:

- Homepage
- About page
- Services page
- Contact page
- Featured listings, neighborhood profiles, buyer and seller process content
- Team bios, testimonials, home valuation CTA, and consultation CTA
- SEO metadata, sitemap, robots rules, and accessible semantic structure

## Agency Concept

`Crescent Vale Realty` is a fictional boutique real estate advisory serving the Harbor City metro core and surrounding premium residential enclaves. The brand position is calm, design-forward, and trust-led rather than flashy. Listing details, agent identities, testimonials, and market figures are illustrative for demo purposes.

## Tech Stack

- Next.js 16 with the App Router
- TypeScript
- Tailwind CSS 4
- React 19
- Vercel-ready project structure

## Install Instructions

```bash
npm install
```

## Local Run Instructions

Start the development server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Build Instructions

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run start
```

## Project Structure

```text
real-estate-site/
  app/
  components/
  lib/
  public/
  README.md
  package.json
```

## Deploying To Vercel

This project is ready to deploy as a standard Next.js application.

1. Push the project to GitHub, GitLab, or Bitbucket.
2. In Vercel, choose `Add New Project`.
3. Import the repository.
4. Keep the framework preset as `Next.js`.
5. Add `NEXT_PUBLIC_SITE_URL` as an environment variable with the final production URL.
6. Deploy.

Suggested `NEXT_PUBLIC_SITE_URL` values:

- `https://crescentvalerealty.vercel.app`
- `https://www.yourdomain.com`
- `https://realestate.yourdomain.com`

## Connecting A Custom Domain

### 1. Using Its Own Domain

Use this when the project should live on a standalone brand domain such as `crescentvalerealty.com`.

1. Open the project in Vercel.
2. Go to `Settings` -> `Domains`.
3. Add the root domain, for example `crescentvalerealty.com`.
4. Add the `www` domain as well if you want `www.crescentvalerealty.com`.
5. Update your DNS records at your registrar with the values Vercel provides.
6. Once verification passes, choose the preferred primary domain.
7. Update `NEXT_PUBLIC_SITE_URL` so canonical URLs, sitemap entries, and metadata match the final production domain.

### 2. Using A Subdomain On A Shared Portfolio Domain

Use this when the site should live under a parent domain such as `realestate.mydomain.com`.

1. Open the project in Vercel.
2. Go to `Settings` -> `Domains`.
3. Add the subdomain, for example `realestate.mydomain.com`.
4. Create the required DNS record for that subdomain at your DNS provider.
5. Wait for Vercel to verify the domain.
6. Set the subdomain as the production domain for the project.
7. Update `NEXT_PUBLIC_SITE_URL` so metadata, sitemap, and canonical URLs point to the subdomain.

## Notes

- The contact form is intentionally client-side only. It is validated and styled, but it does not submit to a backend.
- Listing imagery is demo-safe placeholder artwork stored locally in `public/`.
- This is a concept/demo portfolio project intended to showcase frontend execution, UI craft, and product-minded architecture.
