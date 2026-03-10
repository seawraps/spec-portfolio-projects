import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { aboutValues } from "@/lib/data";

const teamShape = [
  {
    title: "Strategy Lead",
    text: "Frames the commercial problem, prioritizes bets, and keeps the work attached to revenue reality.",
  },
  {
    title: "Performance Lead",
    text: "Runs the channel model, budget pressure, reporting logic, and optimization cadence.",
  },
  {
    title: "Creative Lead",
    text: "Shapes campaign direction, messaging, and page experience so performance work still feels distinct.",
  },
];

export const metadata: Metadata = {
  title: "About | Signal & Stone",
  description:
    "Meet Signal & Stone, a senior-led marketing agency focused on measurable growth through strategy, creative, and performance execution.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Senior operators, strategists, and creatives built for growth-stage pressure."
        description="We built Signal & Stone for teams that need sharper work and clearer decisions. The agency model is intentionally compact, senior-led, and designed to keep strategy close to execution."
        aside={
          <div className="space-y-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/44">How we operate</p>
            <ul className="space-y-3 text-sm text-white/74">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                <span>Senior-led work from kickoff through optimization.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                <span>Weekly decision cadence with reporting built for real operators.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                <span>Shared KPI ownership across strategy, creative, and channel execution.</span>
              </li>
            </ul>
          </div>
        }
      />

      <section className="section-spacing bg-paper text-ink">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="space-y-6">
            <p className="eyebrow-label eyebrow-label-light">Inside The Room</p>
            <h2 className="font-display text-5xl font-semibold uppercase leading-[0.9] text-ink sm:text-6xl">
              We built the kind of agency we wanted to hire.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-ink/72">
              Too many firms separate the strategic deck from the execution reality. Our model keeps the same senior team
              inside the planning, the campaign work, and the reporting. That is what keeps momentum high and recommendations
              grounded.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="paper-panel p-5">
                <p className="font-display text-4xl font-semibold uppercase leading-none text-ink">1</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/48">Senior pod</p>
              </article>
              <article className="paper-panel p-5">
                <p className="font-display text-4xl font-semibold uppercase leading-none text-ink">Wkly</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/48">Decision loop</p>
              </article>
              <article className="paper-panel p-5">
                <p className="font-display text-4xl font-semibold uppercase leading-none text-ink">Full</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/48">Strategy to launch</p>
              </article>
            </div>
          </div>

          <div className="surface-panel overflow-hidden">
            <Image
              src="/media/strategy-session.jpg"
              alt="Agency team collaborating during a strategy session"
              width={1600}
              height={1068}
              className="aspect-[6/5] w-full object-cover"
            />
            <div className="border-t border-white/10 px-6 py-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-volt">Campaign review</p>
              <p className="mt-2 max-w-xl text-sm leading-7 text-white/72">
                Creative and performance reviews happen in the same room so the work stays ambitious without drifting away from what converts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing border-y border-white/10">
        <div className="mx-auto w-full max-w-7xl space-y-10 px-6">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow-label">Point Of View</p>
            <h2 className="font-display text-5xl font-semibold uppercase leading-[0.9] text-white sm:text-6xl">
              Growth is a systems problem, not a channel problem.
            </h2>
            <p className="text-base leading-8 text-white/70">
              The teams we help usually do not need more effort. They need a cleaner system connecting positioning, paid media,
              page experience, and reporting. That is the gap this agency is built to close.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {aboutValues.map((value, index) => (
              <article key={value.title} className={`surface-panel p-6 sm:p-8 ${index % 2 === 1 ? "md:translate-y-8" : ""}`}>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/40">0{index + 1}</p>
                <h3 className="mt-4 font-display text-4xl font-semibold uppercase leading-none text-white">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-paper text-ink">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="eyebrow-label eyebrow-label-light">Team Shape</p>
            <h2 className="font-display text-5xl font-semibold uppercase leading-[0.9] text-ink sm:text-6xl">
              A compact team with clear roles and no handoff theater.
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {teamShape.map((role) => (
                <article key={role.title} className="paper-panel p-5">
                  <h3 className="font-display text-3xl font-semibold uppercase leading-none text-ink">{role.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/70">{role.text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="surface-panel p-6 sm:p-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-volt">Portfolio concept notice</p>
            <p className="mt-4 text-sm leading-7 text-white/74">
              This website is a concept project for a portfolio workspace. The agency narrative, case studies, and metrics are
              crafted to feel realistic while remaining demo-safe.
            </p>
            <Link href="/contact" className="button-primary mt-6">
              Discuss a Production Build
            </Link>
          </aside>
        </div>
      </section>

      <CtaSection
        title="Need an agency partner that can pressure-test both strategy and execution?"
        description="Tell us where the growth system is leaking and we will map the right engagement shape around it."
        primaryLabel="Contact the Team"
        primaryHref="/contact"
        secondaryLabel="Review Services"
        secondaryHref="/services"
      />
    </>
  );
}
