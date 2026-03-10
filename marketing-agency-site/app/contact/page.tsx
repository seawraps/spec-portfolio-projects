import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { agency } from "@/lib/data";

const startingPoints = [
  {
    title: "Paid media reset",
    text: "For teams with active spend, rising CAC, and unclear channel accountability.",
  },
  {
    title: "Launch sprint",
    text: "For rebrands, product launches, or campaign moments that need one coordinated rollout.",
  },
  {
    title: "CRO intensive",
    text: "For teams that have traffic but need sharper pages, offers, and on-site conversion.",
  },
];

export const metadata: Metadata = {
  title: "Contact | Signal & Stone",
  description:
    "Contact Signal & Stone to discuss paid ads, branding, web strategy, CRO, and creative campaign engagements.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where the growth system is leaking and what needs to move next."
        description="Share the target, the friction, and the timeline. We will respond with the right next-step recommendation, not a generic sales sequence."
        aside={
          <div className="space-y-4 text-sm text-white/72">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/44">Direct contact</p>
            <p>
              Email:{" "}
              <a href={`mailto:${agency.email}`} className="text-white underline-offset-4 hover:underline">
                {agency.email}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href={`tel:${agency.phone}`} className="text-white underline-offset-4 hover:underline">
                {agency.phone}
              </a>
            </p>
            <p>Location: {agency.location}</p>
            <p className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs uppercase tracking-[0.14em] text-white/46">
              Typical response time: within one business day.
            </p>
          </div>
        }
      />

      <section className="section-spacing bg-paper text-ink">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[1.06fr_0.94fr]">
          <ContactForm />

          <aside className="grid gap-4 self-start">
            <article className="surface-panel p-6 sm:p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-volt">What happens next</p>
              <ol className="mt-5 space-y-4 text-sm leading-7 text-white/74">
                <li>1. We review the submission against your target, timing, and decision constraints.</li>
                <li>2. We schedule a focused strategy call with the right lead from our side.</li>
                <li>3. You receive a scoped recommendation with the best-fit engagement path.</li>
              </ol>
            </article>

            <article className="paper-panel p-6 sm:p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-signal">Best-fit teams</p>
              <ul className="mt-5 space-y-3 text-sm text-ink/76">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                  <span>Growth-stage B2B and DTC teams with real revenue goals.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                  <span>Companies that already have budget ownership and need sharper execution.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                  <span>Decision-makers ready to move quickly once the path is clear.</span>
                </li>
              </ul>
            </article>
          </aside>
        </div>
      </section>

      <section className="section-spacing border-y border-white/10">
        <div className="mx-auto w-full max-w-7xl space-y-8 px-6">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow-label">Common Starting Points</p>
            <h2 className="font-display text-5xl font-semibold uppercase leading-[0.9] text-white sm:text-6xl">
              Most conversations start with one of these pressure points.
            </h2>
            <p className="text-base leading-8 text-white/70">
              If you are not sure where the engagement should start, describe the closest match and we will route the call from there.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {startingPoints.map((point, index) => (
              <article key={point.title} className="surface-panel p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42">0{index + 1}</p>
                <h3 className="mt-4 font-display text-4xl font-semibold uppercase leading-none text-white">{point.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
