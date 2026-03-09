import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutTimeline, companyValues, leadershipTeam } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story behind OrbitOps and how the team is building a practical workflow platform for modern B2B operations.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white py-16 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">About OrbitOps</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Building reliable operations software for teams that move fast.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            OrbitOps exists to help operations teams replace fragile manual systems with repeatable,
            measurable workflows. We design for real operators and focus on outcomes teams can
            prove in production.
          </p>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Our Journey"
            title="From internal toolkit to operations platform"
            description="OrbitOps was built by operators and engineers who spent years managing process bottlenecks in scaling SaaS companies."
          />
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {aboutTimeline.map((item) => (
              <li key={item.year} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
                  {item.year}
                </p>
                <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-slate-50 py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Values"
            title="How we build"
            description="Our product and customer teams align around these principles when designing new workflows and platform improvements."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {companyValues.map((value) => (
              <article key={value.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="font-display text-xl font-semibold tracking-tight text-slate-900">
                  {value.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="A team with deep operations and platform experience"
            description="We combine hands-on operational leadership with technical expertise in workflow orchestration and reliability engineering."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {leadershipTeam.map((member) => (
              <article key={member.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="font-display text-xl font-semibold tracking-tight text-slate-900">
                  {member.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-cyan-700">{member.role}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{member.bio}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
            This site and brand are a concept/demo portfolio project designed to represent a
            realistic SaaS startup marketing experience.
          </div>

          <div className="mt-8">
            <ButtonLink href="/contact">Schedule a Product Walkthrough</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
