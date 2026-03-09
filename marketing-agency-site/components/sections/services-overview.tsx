import Link from "next/link";

import { services } from "@/lib/data";
import { SectionIntro } from "@/components/ui/section-intro";

export function ServicesOverview() {
  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Core Services"
          title="Everything needed to move from scattered tactics to strategic growth"
          description="We partner with marketing leaders who need measurable outcomes and fast execution. Services can be engaged individually or combined into one integrated growth program."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="surface-panel flex h-full flex-col p-6">
              <h3 className="text-xl font-semibold text-white">{service.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.short}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {service.outcomes.slice(0, 2).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="flex justify-start">
          <Link href="/services" className="button-secondary">
            View Detailed Service Breakdown
          </Link>
        </div>
      </div>
    </section>
  );
}
