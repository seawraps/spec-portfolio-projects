import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { company, consultationChecklist, contactPageFaq } from "@/lib/data";
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
      <section id="contact-overview" className="py-10 md:py-12 lg:py-14">
        <Container className="architectural-grid grid gap-8 py-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Tell us about the home, the rooms involved, and what you want to improve."
              description="The more context you share, the better we can tell you whether the project is a fit and what the right next step should be."
              as="h1"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border border-[color:rgba(31,35,39,0.12)] bg-[color:rgba(247,242,234,0.72)] p-5">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  Call
                </p>
                <p className="mt-3 text-lg font-semibold text-[var(--color-brand)]">
                  <a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a>
                </p>
              </div>
              <div className="border border-[color:rgba(31,35,39,0.12)] bg-[color:rgba(247,242,234,0.72)] p-5">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  Email
                </p>
                <p className="mt-3 text-lg font-semibold text-[var(--color-brand)]">
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
              </div>
            </div>

            <div className="line-list mt-8 border-y border-[color:rgba(31,35,39,0.12)]">
              {consultationChecklist.map((item) => (
                <p
                  key={item}
                  className="py-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base"
                >
                  {item}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="image-frame relative min-h-[420px] overflow-hidden rounded-[1rem] sm:min-h-[560px]">
              <Image
                src="/images/bathroom-shower.jpg"
                alt="A premium bathroom remodel with a warm vanity and walk-in shower."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,35,45,0.06),rgba(23,35,45,0.56))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--color-surface)] sm:p-8">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                  Consultation window
                </p>
                <p className="mt-3 max-w-sm font-display text-[2.2rem] leading-[0.96] sm:text-[3rem]">
                  Most first visits can be scheduled within 7 to 10 business days.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="contact-form" className="py-16 md:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <Reveal>
            <div className="border border-[color:rgba(31,35,39,0.12)] bg-[color:rgba(247,242,234,0.72)] p-6 sm:p-8">
              <p className="architectural-eyebrow">Request a Consultation</p>
              <h2 className="mt-5 font-display text-[2.6rem] leading-[0.94] text-[var(--color-brand)] sm:text-[3.4rem]">
                Start the conversation.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                We typically respond within one business day. If your project is time-sensitive,
                include that in the message so we can prioritize the follow-up.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="line-list border-y border-[color:rgba(31,35,39,0.12)]">
            <Reveal>
              <div className="py-6">
                <h2 className="font-display text-[2rem] leading-[0.96] text-[var(--color-brand)] sm:text-[2.4rem]">
                  What happens next
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  {nextSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="py-6">
                <h2 className="font-display text-[2rem] leading-[0.96] text-[var(--color-brand)] sm:text-[2.4rem]">
                  Office details
                </h2>
                <address className="mt-4 space-y-2 text-sm not-italic leading-7 text-[var(--color-muted)] sm:text-base">
                  <p>{company.addressLine}</p>
                  <p>{company.cityStateZip}</p>
                  <p>{company.phoneDisplay}</p>
                  <p>{company.email}</p>
                </address>

                <p className="mt-6 text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  Hours
                </p>
                <ul className="mt-3 space-y-1 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  {company.hours.map((hour) => (
                    <li key={hour}>{hour}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="py-6">
                <h2 className="font-display text-[2rem] leading-[0.96] text-[var(--color-brand)] sm:text-[2.4rem]">
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
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
