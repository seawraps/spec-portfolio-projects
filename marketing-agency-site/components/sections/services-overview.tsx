import Link from "next/link";

import { services } from "@/lib/data";
import { SectionIntro } from "@/components/ui/section-intro";

export function ServicesOverview() {
  return (
    <section className="section-spacing bg-paper text-ink">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <SectionIntro
            eyebrow="Core Services"
            title="One agency partner across strategy, creative, and performance execution."
            description="We work like a tightly run growth pod. Every engagement starts with strategic pressure points, then moves straight into the media, page, message, and campaign work that changes results."
            tone="light"
          />
          <Link href="/services" className="button-primary">
            View Full Service Stack
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className={`paper-panel flex h-full flex-col gap-5 p-6 md:p-7 ${
                index % 3 === 0 ? "md:translate-y-10" : index % 3 === 2 ? "md:-translate-y-6" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-signal">{service.tagline}</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold uppercase leading-none text-ink">{service.name}</h3>
                </div>
                <span className="rounded-full border border-ink/10 bg-white/60 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink/60">
                  {service.cadence}
                </span>
              </div>

              <p className="text-sm leading-7 text-ink/70">{service.short}</p>

              <ul className="space-y-3 border-t border-ink/10 pt-5 text-sm text-ink/80">
                {service.outcomes.slice(0, 2).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-auto text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink/46">
                {service.deliverables.slice(0, 2).join(" / ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
