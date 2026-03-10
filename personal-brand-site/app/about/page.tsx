import type { Metadata } from "next";
import Image from "next/image";

import { PartnershipCtaSection } from "@/components/sections/partnership-cta-section";
import { PageIntro } from "@/components/sections/page-intro";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  aboutValues,
  careerTimeline,
  heroStats,
  projectNote,
  speakingTopics,
  siteConfig,
} from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "About",
  "Meet Nadia Vale, a content strategist, keynote speaker, and media host helping ambitious experts turn clarity into authority.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Nadia"
        title="Editorial instincts, commercial strategy, and a stage presence built to move rooms."
        description="I built this brand around a simple belief: expertise deserves better packaging. The most valuable founders and operators are often the least clearly understood. My work closes that gap."
        stats={heroStats}
      />

      <section className="section-shell">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="surface-card grain relative overflow-hidden p-3">
              <Image
                src="/images/nadia-portrait.svg"
                alt="Editorial-style portrait illustration representing Nadia Vale."
                width={960}
                height={1120}
                className="h-auto w-full rounded-[1.5rem]"
                priority
              />
            </div>
            <div className="surface-card absolute -bottom-6 left-6 max-w-xs p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/68">
                Based in Brooklyn
              </p>
              <p className="mt-2 text-sm leading-6 text-ink/72">
                Advising founder-led brands, venture-backed teams, and conference organizers globally.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <SectionHeading
              eyebrow="My Story"
              title="From newsroom producer to the strategist people call when the message matters."
              description="My background spans media production, founder storytelling, and high-trust audience development. That mix means I care as much about what feels true on stage as what performs in-market."
            />

            <div className="space-y-5 text-base leading-8 text-ink/74">
              <p>
                I started in editorial environments where attention had to be earned quickly, structure mattered,
                and vague thinking showed up instantly. Later, I brought those instincts into startup and creator
                ecosystems where personal brands often carried sales, recruiting, fundraising, and product launches
                all at once.
              </p>
              <p>
                Today, I work with leaders who need more than content volume. They need a clear thesis, repeatable
                formats, and a presence that feels credible in boardrooms, on podcasts, and in front of live audiences.
              </p>
              <p>
                The result is strategy that is warm but rigorous, visually polished, and directly useful to the business
                behind the brand.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Working Style"
            title="What clients remember after the strategy session."
            description="The work is designed to feel precise, collaborative, and commercially grounded."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aboutValues.map((value) => (
              <article key={value.title} className="surface-card h-full p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose">
                  Signature Principle
                </p>
                <h3 className="mt-4 text-3xl text-ink">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/70">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Timeline"
              title="A career shaped by editorial discipline and founder proximity."
              description="Each chapter sharpened the same core skill: turning sharp thinking into stories people can carry forward."
            />

            <div className="mt-8 space-y-5">
              {careerTimeline.map((item) => (
                <article key={item.year} className="surface-card p-6">
                  <p className="text-sm font-semibold tracking-[0.18em] text-rose">{item.year}</p>
                  <h3 className="mt-2 text-3xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/72">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="dark-panel p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/62">
                Speaking Topics
              </p>
              <ul className="mt-5 space-y-4 text-base leading-7 text-white/82">
                {speakingTopics.map((topic) => (
                  <li key={topic} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-clay" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/68">
                Concept Note
              </p>
              <p className="mt-4 text-sm leading-7 text-ink/70">{projectNote}</p>
              <p className="mt-4 text-sm leading-7 text-ink/70">
                All names, companies, and performance details are fictionalized for presentation while staying grounded
                in believable positioning and service design.
              </p>
            </div>

            <div className="surface-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/68">
                Direct Contact
              </p>
              <h3 className="mt-4 text-3xl text-ink">Need a speaker, strategist, or host?</h3>
              <p className="mt-4 text-sm leading-7 text-ink/70">
                The fastest path is a concise note with audience, timing, and the outcome you want to create.
              </p>
              <ButtonLink href={`mailto:${siteConfig.email}`} className="mt-6">
                {siteConfig.email}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <PartnershipCtaSection />
    </>
  );
}
