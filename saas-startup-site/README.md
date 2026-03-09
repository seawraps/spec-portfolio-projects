# OrbitOps - SaaS Startup Landing Site

OrbitOps is a production-style B2B SaaS marketing site built as a portfolio concept project. It presents a believable startup narrative for an AI workflow operations platform, with conversion-focused messaging and polished responsive UI.

## Project Overview

This project demonstrates how a modern SaaS startup website can be structured and shipped with:

- clear product positioning
- strong homepage conversion flow
- multi-page informational architecture
- reusable component system
- SEO-ready Next.js App Router implementation

## Startup Concept

**OrbitOps** is a fictional B2B SaaS platform that helps operations teams automate recurring workflows, monitor SLA risk, and improve process performance with AI guidance.

Target users:

- Revenue Operations
- Customer Success Operations
- Support and Finance Operations

## Included Pages

- `/` - Homepage
- `/about` - About page
- `/features` - Features page
- `/contact` - Contact page with client-side validated form and success state

## Homepage Sections

- Standout hero section
- Product screenshot/UI mockup section
- Feature grid
- Integrations section
- Social proof logos
- Pricing section
- Testimonial section
- FAQ section
- Final CTA section
- Polished footer
- Responsive navigation

## Tech Stack

- Next.js (latest stable)
- React
- TypeScript
- Tailwind CSS v4
- App Router

## Project Structure

```text
saas-startup-site/
  app/
  components/
  lib/
  public/
  README.md
  package.json
```

## Installation

From the `saas-startup-site` directory:

```bash
npm install
```

## Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

Build for production:

```bash
npm run build
```

Run the production server locally:

```bash
npm run start
```

## Deploying to Vercel

### Option 1: Deploy via Git + Vercel Dashboard

1. Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel, click **Add New > Project**.
3. Import the repository.
4. Keep default framework detection (Next.js).
5. Click **Deploy**.

Vercel will automatically install dependencies, build, and publish.

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

3. For production deployment:

```bash
vercel --prod
```

## Connecting a Custom Domain

After deployment, go to your Vercel project:

1. **Settings > Domains**
2. Add your domain.
3. Update DNS records at your domain provider as instructed by Vercel.

### 1) Use its own domain

Example: `orbitops.com`

- Add `orbitops.com` (and optionally `www.orbitops.com`) to the Vercel project.
- Point DNS records to Vercel.
- Set the primary domain in Vercel.

### 2) Use a subdomain on a shared portfolio domain

Example: `saas.mydomain.com`

- Add `saas.mydomain.com` in Vercel project domain settings.
- Create a DNS record for `saas` at your DNS provider (usually CNAME to Vercel target).
- Keep your main portfolio site on `mydomain.com` and route this project only on the subdomain.

This setup is ideal for showcasing multiple portfolio projects under one root domain.

## SEO Notes

The project includes:

- App Router metadata in `app/layout.tsx`
- page-level metadata on About/Features/Contact pages
- semantic heading structure
- internal linking
- `sitemap.ts` and `robots.ts`

## Accessibility Notes

- semantic HTML landmarks and heading hierarchy
- keyboard-accessible navigation/menu interactions
- labeled form fields and inline validation messaging
- clear color contrast for primary content areas

## Portfolio Disclaimer

This is a **concept/demo portfolio project** created for showcasing full-stack and UI architecture skills. OrbitOps is fictional and not an actual company.
