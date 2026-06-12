import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceAreasSection } from "@/components/sections/service-areas-section";
import { CtaSection } from "@/components/sections/cta-section";
import { ComicCar } from "@/components/ui/comic-car";
import { Reveal } from "@/components/motion/reveal";
import { aboutHighlights, aboutStats, company, differentiators } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Mark Wu",
  description:
    "Mark Wu has been wrapping vehicles in the Renton and Seattle area for 18 years. Learn the story behind Wu Wraps and the brand-new, bigger shop.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Origin Story"
        title="18 years. One set of hands. Thousands of wraps."
        description="Mark Wu built Wu Wraps the old-fashioned way, clean install after clean install, until his name became the one Seattle gearheads pass to a friend."
        variant="ink"
      />

      <section className="border-b border-[var(--color-line)] py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <Reveal>
            <div className="space-y-5 text-[1.02rem] leading-8 text-[var(--color-ink-soft)]">
              <p>
                For 18 years, Mark Wu has been laying vinyl in the Renton and greater Seattle area,
                long before color-change wraps were a trend. He started with a heat gun, a squeegee,
                and a reputation to build, and he built it one flawless edge at a time.
              </p>
              <p>
                In an industry full of rushed jobs and bargain shops, Wu Wraps became the opposite:
                the place you go when you want it done right. Daily drivers, exotics, race cars,
                and entire commercial fleets all roll through, and they all get the same obsessive
                prep and factory-grade finish.
              </p>
              <p>
                That trust adds up. Thousands of vehicles across Puget Sound now wear a Wu Wraps
                install, and most new customers show up because a friend pointed them here. No
                franchise, no gimmicks. Just a craftsman who treats every car like it&apos;s his
                own.
              </p>
              <p>
                Now Mark has moved into a brand-new, bigger shop. More space, more lifts, and room
                to take on full fleets without the wait. Same hands laying the vinyl on every
                build that rolls out the door.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="comic-panel comic-panel-hover overflow-hidden">
              <div className="aspect-[5/4] w-full border-b-[3px] border-[var(--color-ink)]">
                <ComicCar accent="blue" />
              </div>
              <dl className="divide-y divide-dashed divide-[var(--color-line-strong)]">
                {aboutStats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between gap-4 px-5 py-4">
                    <dt className="comic-heavy text-[0.66rem] tracking-[0.12em] text-[var(--color-blue)]">
                      {stat.label}
                    </dt>
                    <dd className="comic-heavy text-right text-[0.78rem] tracking-[0.04em] text-[var(--color-ink)]">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="halftone-yellow border-b border-[var(--color-line)] py-16 lg:py-24">
        <Container>
          <Reveal>
            <span className="comic-tag">What Sets Us Apart</span>
            <h2 className="comic-display mt-5 max-w-3xl text-[2.7rem] leading-[0.92] text-[var(--color-ink)] sm:text-[3.6rem]">
              Craftsmanship you can&apos;t fake.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aboutHighlights.map((highlight, index) => (
              <Reveal key={highlight.title} delay={index * 70}>
                <div className="comic-panel comic-panel-hover h-full bg-[var(--color-paper)] p-6">
                  <h3 className="comic-display text-[1.7rem] leading-none text-[var(--color-ink)]">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
                    {highlight.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <ul className="grid gap-3 sm:grid-cols-2">
              {differentiators.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border border-[var(--color-line-strong)] bg-[var(--color-paper)] p-4 text-sm leading-7 text-[var(--color-ink)] shadow-[0_14px_30px_-18px_rgba(20,19,26,0.5)]"
                >
                  <span aria-hidden="true" className="comic-display text-xl text-[var(--color-red)]">
                    ★
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <ServiceAreasSection />
      <CtaSection />
    </>
  );
}
