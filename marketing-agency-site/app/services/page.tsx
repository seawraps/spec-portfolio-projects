import type { Metadata } from "next";
import Link from "next/link";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { faqs, services } from "@/lib/data";

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
        title="Integrated growth services built to improve pipeline, conversion, and efficiency"
        description="Every engagement starts with strategy and measurement, then moves quickly into execution. We can lead one service pillar or run an integrated multi-channel program."
        aside={
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Included in every engagement</p>
            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
                <span>Growth KPI dashboard and reporting cadence</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
                <span>Executive-level strategic recommendations</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
                <span>Experiment roadmap tied to business outcomes</span>
              </li>
            </ul>
          </div>
        }
      />

      <section className="section-spacing">
        <div className="mx-auto w-full max-w-7xl space-y-6 px-6">
          {services.map((service) => (
            <article key={service.slug} className="surface-panel grid gap-6 p-6 md:grid-cols-[1.05fr_0.95fr] md:p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">{service.name}</h2>
                <p className="text-sm leading-7 text-slate-300">{service.description}</p>
                <ul className="space-y-2 text-sm text-slate-200">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sun" aria-hidden="true" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-deep-2/80 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">Typical Deliverables</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-mint" aria-hidden="true" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-spacing border-y border-white/10 bg-deep-2/70">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">Common questions before kickoff</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                If you are evaluating multiple agency options, these are the topics we cover in initial strategy calls.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="surface-panel group p-6" name="faq">
                  <summary className="cursor-pointer list-none text-base font-semibold text-white">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="button-primary">
              Request a Proposal
            </Link>
            <Link href="/about" className="button-secondary">
              Meet the Agency
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        title="Have a channel mix but no unified strategy?"
        description="We can audit your current setup and deliver a clear 90-day action plan with budget and execution priorities."
        primaryLabel="Book Discovery Call"
        primaryHref="/contact"
        secondaryLabel="Back to Homepage"
        secondaryHref="/"
      />
    </>
  );
}
