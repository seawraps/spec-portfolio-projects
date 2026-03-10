import Image from "next/image";

import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/projects";

const technologies = [
  {
    name: "Next.js",
    description:
      "App Router architecture for premium marketing pages, strong SEO foundations, and production-ready rendering.",
  },
  {
    name: "React",
    description:
      "Composable interfaces that keep layouts expressive, maintainable, and easy to evolve.",
  },
  {
    name: "Tailwind CSS",
    description:
      "A fast styling system for consistent spacing, typography, motion, and responsive polish.",
  },
  {
    name: "TypeScript",
    description:
      "Stronger front-end contracts with fewer regressions and cleaner handoff into future iterations.",
  },
  {
    name: "Vercel",
    description:
      "Straightforward preview and deployment workflows so launch-ready work moves quickly.",
  },
];

const proofMetrics = [
  {
    label: "Live builds",
    value: "6",
    description: "Full websites you can open right now, not static mockups.",
  },
  {
    label: "Industries",
    value: "6",
    description: "Range across product, hospitality, services, property, and personal brand.",
  },
  {
    label: "Delivery lens",
    value: "Design + code",
    description: "Positioning, interface direction, and production front-end execution in one workflow.",
  },
];

const heroSignals = [
  {
    title: "Strategy into interface",
    description:
      "I translate brand positioning into hierarchy, pacing, and page structure that feels intentional.",
  },
  {
    title: "Design into production",
    description:
      "The same level of polish carries through implementation, responsiveness, and launch readiness.",
  },
];

const studioPrinciples = [
  "Sharper positioning so the offer feels clearer and more valuable from the first screen.",
  "Typography, spacing, and interaction choices that create polish without making the hub louder than the work.",
  "Responsive Next.js builds that stay fast, readable, and credible across desktop and mobile.",
];

const capabilityCards = [
  {
    title: "Positioning",
    description:
      "Each build is framed to communicate what the business does, why it matters, and where the next action should happen.",
  },
  {
    title: "Visual Craft",
    description:
      "Premium interfaces come from disciplined typography, contrast, spacing, and restraint, not just decoration.",
  },
  {
    title: "Execution",
    description:
      "The front-end work is built to feel finished in-browser, not just compelling in a design file.",
  },
];

const featuredProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <>
      <section id="hero" className="section-shell overflow-hidden px-6 pb-16 pt-14 md:pb-20 md:pt-20 lg:pb-24 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_460px] lg:items-start">
            <div className="reveal-up">
              <span className="inline-flex rounded-full border border-emerald-200/20 bg-emerald-200/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-50">
                Independent Designer + Front-End Developer
              </span>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-400">
                Premium websites for businesses, founders, and personal brands
              </p>
              <h1 className="mt-5 max-w-5xl text-balance font-display text-5xl leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-[5.6rem]">
                Designer-led websites
                <span className="mt-2 block font-accent text-[1.08em] font-semibold italic tracking-[-0.04em] text-emerald-50/95">
                  that feel established from the first scroll.
                </span>
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                I design and build modern marketing websites that sharpen
                positioning, elevate visual credibility, and turn live
                front-end execution into a stronger first impression. This hub
                is the quiet front door; the six live sites are the proof.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#projects" className="cta-primary w-full sm:w-auto">
                  Browse the live work
                </a>
                <a href="#about" className="cta-secondary w-full sm:w-auto">
                  See the approach
                </a>
              </div>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
                Six live demos spanning SaaS, agency, restaurant, home
                services, real estate, and personal brand categories.
              </p>
              <dl className="mt-10 grid gap-4 sm:grid-cols-3">
                {proofMetrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="glass-card reveal-up rounded-[1.75rem] p-6"
                    style={{ animationDelay: `${140 + index * 90}ms` }}
                  >
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                      {metric.label}
                    </dt>
                    <dd className="mt-3 font-display text-3xl tracking-tight text-white">
                      {metric.value}
                    </dd>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </dl>
            </div>

            <div
              className="glass-card reveal-up rounded-[2rem] p-6 sm:p-7"
              style={{ animationDelay: "120ms" }}
            >
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                <span>Selected live launches</span>
                <span>Portfolio hub</span>
              </div>
              <h2 className="mt-6 text-balance font-display text-3xl tracking-[-0.04em] text-white sm:text-[2.2rem]">
                A premium frame that lets the work stay center stage.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                The hub stays restrained so each site can carry its own tone.
                Open any preview and you land in a full live build.
              </p>

              <div className="mt-8 space-y-4">
                {featuredProjects.map((project, index) => (
                  <a
                    key={project.title}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-3 transition duration-200 hover:-translate-y-1 hover:border-emerald-200/30 hover:bg-white/[0.05]"
                  >
                    <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-[1.15rem] border border-white/10 bg-slate-950/80">
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        sizes="128px"
                        className="object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0),rgba(2,6,23,0.75))]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-100/[0.85]">
                        {project.category}
                      </p>
                      <h3 className="mt-2 truncate font-display text-xl tracking-tight text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {project.highlight}
                      </p>
                    </div>
                    <span className="font-display text-2xl text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {heroSignals.map((signal) => (
                  <div
                    key={signal.title}
                    className="rounded-[1.4rem] border border-white/10 bg-slate-950/[0.35] p-5"
                  >
                    <p className="text-sm font-semibold text-white">
                      {signal.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {signal.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell px-6 py-14 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Selected Work"
              title="Six live sites built to prove range without sacrificing polish."
              description="Different business categories, one standard: clear positioning, premium visual hierarchy, and front-end execution that feels finished in-browser."
            />
            <p className="max-w-md text-sm leading-7 text-slate-400 lg:text-right">
              Each card opens a live site in a new tab so the demos remain the
              stars.
            </p>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="tech-stack" className="section-shell px-6 py-14 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div className="glass-card reveal-up rounded-[2rem] p-8 sm:p-10">
            <SectionHeading
              eyebrow="Tech Stack"
              title="Design thinking paired with production-level front-end delivery."
              description="The stack stays focused so more attention can go into hierarchy, rhythm, responsiveness, and the details that make a site feel premium."
            />
            <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-300">
              {studioPrinciples.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology, index) => (
              <article
                key={technology.name}
                className="glass-card reveal-up rounded-[1.65rem] p-6"
                style={{ animationDelay: `${120 + index * 70}ms` }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Core tool
                </p>
                <h3 className="mt-4 font-display text-2xl tracking-tight text-white">
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

      <section id="about" className="section-shell px-6 py-14 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="glass-card reveal-up rounded-[2rem] p-8 sm:p-10">
            <SectionHeading
              eyebrow="Approach"
              title="A designer's eye for credibility, paired with a developer's bias for shipping."
              description="I am not presenting isolated visuals. The portfolio shows the full chain from positioning and hierarchy to responsive implementation and live delivery. The result is work that looks considered and behaves like production."
            />
          </div>
          <div className="grid gap-5">
            {capabilityCards.map((card, index) => (
              <article
                key={card.title}
                className="glass-card reveal-up rounded-[1.65rem] p-6"
                style={{ animationDelay: `${140 + index * 80}ms` }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {card.title}
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-100">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell px-6 pb-20 pt-14 md:pb-24 md:pt-20 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="glass-card reveal-up rounded-[2.75rem] border-emerald-200/25 bg-[linear-gradient(135deg,rgba(209,250,229,0.12),rgba(15,23,42,0.88)_36%,rgba(56,189,248,0.12)_100%)] p-8 sm:p-10 lg:p-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-100">
              Availability
            </p>
            <h2 className="mt-5 max-w-4xl text-balance font-display text-4xl tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.9rem]">
              If you need a website that feels premium before the first sales call, start with the live work.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              These six demos are the clearest proof of how I combine design
              judgment, front-end craft, and launch-ready execution. The hub is
              built to make that case quickly, then get out of the way.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="cta-light">
                Explore all six live sites
              </a>
              <a href="#tech-stack" className="cta-secondary border-white/20">
                Review the stack
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
