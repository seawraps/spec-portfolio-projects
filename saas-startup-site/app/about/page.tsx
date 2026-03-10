import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutTimeline, companyValues, leadershipTeam } from "@/lib/data";

const operatingModel = [
  "Start with one workflow cluster and one accountable team",
  "Launch with reporting, governance, and clear success metrics from day one",
  "Expand into adjacent workflows only after the command layer is proving value",
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how OrbitOps builds enterprise-ready operations software for teams standardizing revenue, onboarding, and service workflows.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_28%),linear-gradient(180deg,#f8fbff_0%,#eef5fb_100%)] py-14 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 xl:grid-cols-[0.94fr_1.06fr] xl:items-start">
            <div>
              <p className="eyebrow-label">About OrbitOps</p>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[0.96]">
                Building the operational system of record teams wish they had years earlier.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                OrbitOps was built by operators, product leaders, and infrastructure engineers who
                spent years managing fragile processes at scaling B2B software companies. The goal
                is simple: make complex operational work easier to run, govern, and improve.
              </p>

              <div className="surface-panel mt-8 px-6 py-6">
                <p className="data-label text-slate-500">How we think about rollout</p>
                <ul className="mt-5 space-y-3">
                  {operatingModel.map((item, index) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                        0{index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="surface-panel-dark surface-grid overflow-hidden px-6 py-6 sm:px-8">
              <p className="data-label text-sky-300">Company timeline</p>
              <div className="mt-6 space-y-6">
                {aboutTimeline.map((item) => (
                  <article key={item.year} className="grid gap-4 border-b border-white/10 pb-6 last:border-b-0 last:pb-0 sm:grid-cols-[auto_1fr]">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-sm font-semibold text-white">
                      {item.year}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
            <SectionHeading
              eyebrow="How we build"
              title="We design for teams carrying operational risk, not just automation volume."
              description="That means better visibility, cleaner governance, and product decisions tied to measurable process outcomes."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {companyValues.map((value) => (
                <article key={value.title} className="surface-panel px-6 py-6">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.04em] text-slate-950">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f8fd] py-14 md:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="A team with deep operations, platform, and implementation experience."
            description="OrbitOps is shaped by leaders who have run enterprise software operations firsthand and know how painful brittle handoffs become at scale."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {leadershipTeam.map((member) => (
              <article key={member.name} className="surface-panel px-6 py-6">
                <p className="data-label text-slate-500">{member.role}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  {member.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{member.bio}</p>
              </article>
            ))}
          </div>

          <div className="surface-panel-dark mt-10 px-6 py-6 sm:px-8">
            <p className="data-label text-sky-300">Portfolio note</p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
              OrbitOps is a concept brand built as part of a portfolio project. The goal is to
              represent the level of product design, messaging, and enterprise positioning expected
              from a modern B2B SaaS company.
            </p>
            <ButtonLink href="/contact" variant="light" className="mt-6">
              Schedule a product walkthrough
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
