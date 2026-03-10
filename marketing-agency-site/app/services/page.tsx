import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { faqs, services } from "@/lib/data";

const serviceModel = [
  {
    title: "Strategy layer",
    items: ["Positioning", "Offer framing", "Budget logic", "Measurement design"],
  },
  {
    title: "Execution layer",
    items: ["Paid media", "Creative production", "Landing pages", "Lifecycle content"],
  },
  {
    title: "Optimization layer",
    items: ["Weekly testing", "Conversion analysis", "Reporting cadence", "Playbook handoff"],
  },
];

export const metadata: Metadata = {
  title: "Services | Signal & Stone",
  description:
    "Explore Signal & Stone services across paid ads, branding, web strategy, CRO, content strategy, and creative campaigns.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Integrated growth services built to move pipeline, conversion, and creative velocity at once."
        description="Every engagement starts with strategy and measurement, then moves quickly into execution. We can lead one service pillar or run an integrated system across media, message, and page performance."
        aside={
          <div className="space-y-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/44">Included in every engagement</p>
            <ul className="space-y-3 text-sm text-white/74">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                <span>Shared KPI dashboard and weekly readout.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                <span>Senior strategic recommendations tied to business outcomes.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                <span>Experiment roadmap with clear owners and launch timing.</span>
              </li>
            </ul>
          </div>
        }
      />

      <section className="section-spacing bg-paper text-ink">
        <div className="mx-auto w-full max-w-7xl space-y-6 px-6">
          {services.map((service) => (
            <article
              key={service.slug}
              className="paper-panel grid gap-6 p-6 md:grid-cols-[0.42fr_0.58fr] md:p-8"
            >
              <div className="space-y-5">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-signal">{service.tagline}</p>
                  <h2 className="mt-3 font-display text-5xl font-semibold uppercase leading-[0.9] text-ink">
                    {service.name}
                  </h2>
                </div>
                <p className="text-sm leading-7 text-ink/72">{service.description}</p>
                <span className="inline-flex rounded-full border border-ink/10 bg-white/60 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink/58">
                  {service.cadence}
                </span>
              </div>

              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[1.35rem] border border-ink/10 bg-white/55 p-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink/46">Primary outcomes</p>
                  <ul className="mt-4 space-y-3 text-sm text-ink/78">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.35rem] border border-ink/10 bg-ink p-5 text-paper">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-paper/54">Typical deliverables</p>
                  <ul className="mt-4 space-y-3 text-sm text-paper/80">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-6 rounded-full bg-volt" aria-hidden="true" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-spacing border-y border-white/10">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="surface-panel overflow-hidden">
            <Image
              src="/media/strategy-workshop.svg"
              alt="Creative strategy board showing planning, campaign narrative, and testing rhythm"
              width={760}
              height={760}
              className="w-full"
            />
          </div>

          <div className="space-y-6">
            <p className="eyebrow-label">How Services Connect</p>
            <h2 className="font-display text-5xl font-semibold uppercase leading-[0.9] text-white sm:text-6xl">
              Strategy, execution, and optimization are one connected system here.
            </h2>
            <p className="text-base leading-8 text-white/70">
              We do not treat brand, paid, page experience, and reporting as separate silos. The strongest outcomes come when
              those layers are designed to reinforce one another from the start.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {serviceModel.map((group) => (
                <article key={group.title} className="surface-panel p-5">
                  <h3 className="font-display text-3xl font-semibold uppercase leading-none text-white">{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/72">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-paper text-ink">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-4">
              <p className="eyebrow-label eyebrow-label-light">FAQ</p>
              <h2 className="font-display text-5xl font-semibold uppercase leading-[0.9] text-ink sm:text-6xl">
                Common questions before a kickoff call.
              </h2>
              <p className="text-base leading-8 text-ink/72">
                These are usually the questions teams ask when they are choosing between agencies, contractors, and in-house expansion.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="paper-panel p-6" name="faq">
                  <summary className="cursor-pointer list-none font-display text-3xl font-semibold uppercase leading-[0.95] text-ink">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-ink/72">{faq.answer}</p>
                </details>
              ))}

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="button-primary">
                  Request a Proposal
                </Link>
                <Link href="/about" className="button-secondary !border-ink/14 !bg-ink !text-paper">
                  Meet the Agency
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Have channels in place but no unified growth system behind them?"
        description="We can audit the current setup and build a focused 90-day plan around performance, message clarity, and conversion lift."
        primaryLabel="Book Discovery Call"
        primaryHref="/contact"
        secondaryLabel="Back to Homepage"
        secondaryHref="/"
      />
    </>
  );
}
