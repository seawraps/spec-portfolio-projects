import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/projects";

const technologies = [
  {
    name: "Next.js",
    description:
      "App Router architecture for fast navigation, strong performance, and production-ready rendering.",
  },
  {
    name: "React",
    description:
      "Composable component-driven interfaces that stay maintainable as the project grows.",
  },
  {
    name: "Tailwind CSS",
    description:
      "A fast styling workflow for clean, responsive layouts with consistent visual systems.",
  },
  {
    name: "TypeScript",
    description:
      "Safer front-end code with stronger contracts, fewer regressions, and easier maintenance.",
  },
  {
    name: "Vercel",
    description:
      "Simple deployment pipelines for fast previews, production launches, and smooth iteration.",
  },
];

const deliveryHighlights = [
  "Responsive websites with strong visual hierarchy and clear calls to action.",
  "Reusable Next.js components that keep content updates and scaling straightforward.",
  "Modern UI patterns designed to feel polished on both desktop and mobile.",
];

const projectCategories = [...new Set(projects.map((project) => project.category))];

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="px-6 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-24 lg:pt-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.15fr)_380px] lg:items-end">
          <div>
            <span className="inline-flex rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100">
              Portfolio Hub
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-5xl tracking-tight text-white sm:text-6xl lg:text-7xl">
              Modern Web Development Portfolio
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I build modern websites and interfaces with Next.js, React,
              Tailwind CSS, and thoughtful UI/UX for businesses, startups, and
              personal brands.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
              >
                View live projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/60 hover:bg-white/10"
              >
                Project availability
              </a>
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <dt className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Live builds
                </dt>
                <dd className="mt-2 font-display text-3xl text-white">6</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <dt className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Core stack
                </dt>
                <dd className="mt-2 font-display text-3xl text-white">
                  Next.js
                </dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <dt className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Deployment
                </dt>
                <dd className="mt-2 font-display text-3xl text-white">Vercel</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(2,8,23,0.35)] backdrop-blur-sm sm:p-8">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
              <span>Build focus</span>
              <span>2026</span>
            </div>
            <h2 className="mt-6 font-display text-3xl tracking-tight text-white sm:text-4xl">
              Launch-ready websites with modern UX, sharp hierarchy, and clean
              implementation.
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              {deliveryHighlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                Project types
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {projectCategories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Projects"
            title="Six live portfolio builds across multiple business categories."
            description="Each project below is deployed and ready to explore. The collection covers SaaS, agency, restaurant, home services, real estate, and personal brand concepts."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="tech-stack" className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Built with modern front-end tools that ship fast and scale cleanly."
            description="The work in this portfolio is grounded in a focused stack: Next.js, React, Tailwind CSS, TypeScript, and Vercel."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {technologies.map((technology) => (
              <article
                key={technology.name}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="font-display text-2xl tracking-tight text-white">
                  {technology.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {technology.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10">
            <SectionHeading
              eyebrow="About"
              title="Modern responsive websites for businesses and startups."
              description="I build modern responsive websites for businesses and startups with an emphasis on clean interfaces, clear messaging, and implementation quality. The goal is simple: ship work that looks strong, loads fast, and feels credible from the first scroll."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                What I optimize
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                Strong first impressions, responsive layouts, and reusable code
                structures that are easy to extend.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                Delivery style
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                Practical front-end execution with a design-forward eye for
                spacing, typography, and hierarchy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 pt-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] border border-emerald-300/25 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(15,23,42,0.85)_45%,rgba(56,189,248,0.14))] p-8 shadow-[0_25px_80px_rgba(2,8,23,0.35)] sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100">
              Availability
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl tracking-tight text-white sm:text-5xl">
              Available for freelance and contract projects
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              Need a polished landing page, business website, or modern product
              marketing build? These live demos show the level of execution I
              bring to production work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Explore the projects
              </a>
              <a
                href="#hero"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
