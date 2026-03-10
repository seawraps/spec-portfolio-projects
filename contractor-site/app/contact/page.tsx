import type { Metadata } from "next";
import Image from "next/image";

import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  company,
  consultationChecklist,
  contactPageFaq,
} from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Blue Oak Remodeling Co. to schedule a home renovation consultation in Nashville, Brentwood, Franklin, and nearby neighborhoods.",
  path: "/contact",
});

const nextSteps = [
  "We review the rooms involved, timing, and whether the project is a fit for our service area.",
  "If it makes sense to move forward, we schedule a walkthrough and talk budget, priorities, and material direction.",
  "You get a practical recommendation for the next step instead of a vague sales follow-up.",
];

export default function ContactPage() {
  return (
    <>
      <section className="pb-12 pt-10 md:pb-16 md:pt-14 lg:pb-20">
        <Container className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="surface-card-strong rounded-[2.4rem] p-7 sm:p-9">
            <SectionHeading
              eyebrow="Contact"
              title="Tell us about the home, the rooms involved, and what you want to improve"
              description="The more context you share, the better we can tell you whether the project is a fit and what the right next step should be."
              as="h1"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[var(--color-surface-strong)] p-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  Call
                </p>
                <p className="mt-3 text-lg font-semibold text-[var(--color-brand)]">
                  <a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a>
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-surface-strong)] p-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  Email
                </p>
                <p className="mt-3 text-lg font-semibold text-[var(--color-brand)]">
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.8rem] border border-[var(--color-border)] bg-[color:rgba(255,250,243,0.7)] p-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                What to include
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                {consultationChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="image-frame relative min-h-[520px] rounded-[2.4rem]">
            <Image
              src="/images/bathroom-shower.jpg"
              alt="A premium bathroom remodel with a warm vanity and walk-in shower."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.08),rgba(22,36,52,0.48))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--color-surface)] sm:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-soft)]">
                Consultation Window
              </p>
              <p className="mt-3 max-w-sm font-display text-4xl leading-tight">
                Most first visits can be scheduled within 7 to 10 business days.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <Container className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="surface-card-strong rounded-[2.4rem] p-6 sm:p-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Request a Consultation
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-brand)]">
              Start the conversation
            </h2>
            <p className="mt-4 text-sm leading-8 text-[var(--color-muted)] sm:text-base">
              We typically respond within one business day. If your project is time-sensitive,
              include that in the message so we can prioritize the follow-up.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="surface-card rounded-[2rem] p-6">
              <h2 className="font-display text-3xl leading-tight text-[var(--color-brand)]">
                What happens next
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                {nextSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>

            <div className="surface-card rounded-[2rem] p-6">
              <h2 className="font-display text-3xl leading-tight text-[var(--color-brand)]">
                Office details
              </h2>
              <address className="mt-4 space-y-2 text-sm not-italic leading-7 text-[var(--color-muted)] sm:text-base">
                <p>{company.addressLine}</p>
                <p>{company.cityStateZip}</p>
                <p>{company.phoneDisplay}</p>
                <p>{company.email}</p>
              </address>

              <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Hours
              </p>
              <ul className="mt-3 space-y-1 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                {company.hours.map((hour) => (
                  <li key={hour}>{hour}</li>
                ))}
              </ul>
            </div>

            <div className="surface-card rounded-[2rem] p-6">
              <h2 className="font-display text-3xl leading-tight text-[var(--color-brand)]">
                Quick answers
              </h2>
              <dl className="mt-5 space-y-4">
                {contactPageFaq.map((item) => (
                  <div key={item.question}>
                    <dt className="text-sm font-semibold text-[var(--color-brand)] sm:text-base">
                      {item.question}
                    </dt>
                    <dd className="mt-1 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
