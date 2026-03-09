# Personal Brand Site (Nadia Vale)

A production-style concept website for a polished creator, educator, keynote speaker, and advisory brand.

This project is designed to look like real commercial client work for a personal brand that could sell services, book speaking engagements, attract sponsorships, and grow a newsletter audience.

## Personal Brand Concept

**Nadia Vale** is a fictional content strategist, keynote speaker, and media host who helps founders and expert-led brands turn their ideas into authority-led content systems.

The positioning blends:

- Personal brand strategy
- Executive visibility
- Keynote and workshop design
- Sponsorship and partnership positioning
- Newsletter and media growth

The visual direction is intentionally editorial, warm, and aspirational rather than generic startup SaaS.

## Demo / Portfolio Note

This is a concept/demo portfolio project. The brand, testimonials, organizations, media appearances, and performance metrics are fictionalized for presentation while remaining commercially believable.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- React 19
- Mobile-first responsive design
- Accessible semantic HTML
- SEO-ready App Router metadata
- Vercel-ready project structure

## Pages Included

- `/` Homepage
- `/about` About page
- `/services` Services page
- `/contact` Contact page

## Core Features

- Editorial-style hero with strong personal positioning
- Featured offerings and service architecture
- Realistic testimonials and social proof
- Media and speaking highlight cards
- Newsletter signup UI with client-side success state
- Polished responsive navigation with mobile menu
- Client-side validated contact form with no backend dependency
- Reusable components and centralized content data in `lib/data.ts`
- SEO metadata, sitemap, robots, and semantic heading structure

## Project Structure

```text
personal-brand-site/
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

## Install

From inside the project folder:

```bash
cd personal-brand-site
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

To verify the production build locally:

```bash
npm run build
npm run start
```

## Contact Form Note

The contact form is intentionally frontend-only so the project is easy to demo, portable for portfolio use, and deployable without environment variables.

In a real implementation, the same UI could be wired to:

- Next.js Server Actions
- Route Handlers
- Resend
- Formspree
- HubSpot
- ConvertKit or Beehiiv for newsletter capture

## Deploying to Vercel

### Option 1: Import the project in the Vercel dashboard

1. Push this folder to a Git provider.
2. In Vercel, click **Add New Project**.
3. Import the repository.
4. Keep the framework preset as **Next.js**.
5. Deploy.

Vercel should auto-detect the correct build settings:

- Install command: `npm install`
- Build command: `npm run build`
- Output: standard Next.js output

### Option 2: Deploy with the Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts to link the project and create preview or production deployments.

## Connecting a Custom Domain

After deployment, open the Vercel project and go to **Settings -> Domains**.

### 1. Using its own domain

Example:

- `nadiavale.com`
- `www.nadiavale.com`

Flow:

1. Add the domain in Vercel.
2. Copy the DNS records Vercel gives you.
3. Update the domain at your registrar or DNS provider.
4. Wait for verification and automatic HTTPS provisioning.

Typical setup:

- Root/apex domain: Vercel A record or ALIAS/ANAME depending on provider
- `www`: CNAME to the Vercel target

### 2. Using a subdomain on a shared portfolio domain

Example:

- `creator.mydomain.com`

Flow:

1. Add `creator.mydomain.com` in Vercel Domains.
2. In the DNS provider for `mydomain.com`, create a CNAME record.
3. Set the host to `creator`.
4. Point it to the Vercel target shown in the dashboard.
5. Wait for DNS propagation and verification.

This approach is useful when multiple spec or client projects live under one umbrella portfolio domain.

## Vercel Environment Notes

This project does not require secrets or environment variables for the demo experience.

If you later connect:

- a real newsletter provider
- a CRM
- a contact submission backend
- analytics

then add those credentials in Vercel under **Settings -> Environment Variables**.

## Recommended Next Steps for Real Use

- Replace placeholder illustrations with real brand photography
- Connect the contact form to a backend or CRM
- Wire newsletter signup to Beehiiv, ConvertKit, or Mailchimp
- Add analytics and event tracking
- Update the metadata base URL to the final production domain if needed

## Summary

This project is a polished personal-brand portfolio spec built to feel like a real creator and speaking website rather than a simple scaffold. It is ready for local development, production builds, and deployment to Vercel with either its own custom domain or a shared-domain subdomain.
