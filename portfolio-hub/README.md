# Portfolio Hub

`portfolio-hub` is a polished landing site that acts as the main entry point for a portfolio of six live spec projects. It is built with Next.js, React, TypeScript, Tailwind CSS, and is ready to deploy on Vercel.

## Project Purpose

This site presents a single portfolio homepage that:

- introduces the overall web development offering
- showcases six deployed portfolio projects
- highlights the core technology stack
- includes a short about section and availability call to action

## Install

From the `portfolio-hub` folder:

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run start
```

## Deploy to Vercel

1. Import the `portfolio-hub` folder into Vercel.
2. Use the default Next.js framework detection.
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain if you want metadata, sitemap, and robots output to use the live URL.
4. Deploy.

## Notes

- Project data is stored in `lib/projects.ts`.
- The site uses the App Router and Tailwind CSS v4.
- Deployment links for the six portfolio projects are sourced from `DEPLOYED_PORTFOLIO_SITES.md`.
