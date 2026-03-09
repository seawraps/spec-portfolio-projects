import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { agency } from "@/lib/data";

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
        title="Tell us what you need to grow next"
        description="Share your current goals, friction points, and timeline. We will follow up with the right next-step recommendation for your team."
        aside={
          <div className="space-y-4 text-sm text-slate-300">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Direct Contact</p>
            <p>
              Email: <a href={`mailto:${agency.email}`} className="text-white underline-offset-4 hover:underline">{agency.email}</a>
            </p>
            <p>
              Phone: <a href={`tel:${agency.phone}`} className="text-white underline-offset-4 hover:underline">{agency.phone}</a>
            </p>
            <p>Location: {agency.location}</p>
            <p className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-slate-400">
              Typical response time: within one business day.
            </p>
          </div>
        }
      />

      <section className="section-spacing">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <ContactForm />

          <aside className="space-y-4">
            <article className="surface-panel p-6">
              <h2 className="text-xl font-semibold text-white">What to expect</h2>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <li>1. We review your submission and growth constraints.</li>
                <li>2. We schedule a 30-minute strategy call.</li>
                <li>3. You receive a scoped recommendation and engagement option.</li>
              </ol>
            </article>

            <article className="surface-panel p-6">
              <h2 className="text-xl font-semibold text-white">Best-fit clients</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
                  <span>Growth-stage B2B and DTC teams</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
                  <span>Companies with defined revenue goals and budget ownership</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
                  <span>Teams ready to move quickly with clear decision-makers</span>
                </li>
              </ul>
            </article>
          </aside>
        </div>
      </section>
    </>
  );
}
