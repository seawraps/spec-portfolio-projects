import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { aboutValues } from "@/lib/data";

export const metadata: Metadata = {
  title: "About | Signal & Stone",
  description:
    "Meet Signal & Stone, a senior-led marketing agency focused on measurable growth through strategy, creative, and performance execution.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Senior strategists, operators, and creatives built for growth-stage momentum"
        description="We built Signal & Stone for teams that need agency-level execution with in-house accountability. Our work blends strategic clarity, creative quality, and measurable performance outcomes."
        aside={
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">How We Operate</p>
            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
                <span>Senior-led day-to-day execution</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
                <span>Transparent weekly reporting cadence</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
                <span>Shared KPI ownership with your team</span>
              </li>
            </ul>
          </div>
        }
      />

      <section className="section-spacing">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Agency Point of View</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">Growth is a systems problem, not a channel problem.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Most teams do not fail from a lack of effort. They fail from fragmented strategy across channels, offers, and onsite
              experience. We close that gap by building one integrated growth system your team can execute confidently.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Our clients include SaaS, healthcare, logistics, and ecommerce teams who need sharper positioning, better conversion,
              and stronger media efficiency.
            </p>
          </div>

          <div className="surface-panel overflow-hidden p-3">
            <Image
              src="/media/strategy-workshop.svg"
              alt="Abstract creative strategy board with campaign planning cards"
              width={760}
              height={760}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="section-spacing border-y border-white/10 bg-deep-2/70">
        <div className="mx-auto w-full max-w-7xl space-y-8 px-6">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">What we optimize for</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {aboutValues.map((value) => (
              <article key={value.title} className="surface-panel p-6">
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="surface-panel p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">Portfolio Concept Notice</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
              This website is a concept/demo project created for a portfolio. Brand narrative, client names, and metrics are crafted
              to reflect realistic agency scenarios.
            </p>
            <Link href="/contact" className="button-secondary mt-6">
              Discuss a Real Production Build
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        title="Looking for a strategic partner, not just channel execution?"
        description="Tell us where growth is stalling, and we will outline a focused engagement model around your goals."
        primaryLabel="Contact the Team"
        primaryHref="/contact"
        secondaryLabel="Review Services"
        secondaryHref="/services"
      />
    </>
  );
}
