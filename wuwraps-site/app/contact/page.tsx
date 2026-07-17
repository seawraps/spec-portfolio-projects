import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { company, consultationChecklist, contactPageFaq } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact & Booking",
  description:
    "Wu Wraps is appointment only. Call (206) 707-6491 or send your vehicle details to book vinyl wraps, chrome deletes, PPF or window tint in Renton, WA.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Start the conversation."
        description="The studio is appointment only, no walk-ins. Send the car, the look you are chasing and your timeline, and Mark will get back to you with a straight answer."
      />

      <section className="bg-[var(--fog)] py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal>
            <div className="rounded-2xl bg-[var(--bone)] p-7 sm:p-9">
              <h2 className="display text-[1.8rem] text-[var(--ink)]">Request an appointment</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--slate)]">
                The more detail you give, the faster the quote. Not sure what you want yet?
                Tell us the vibe and we will help you figure it out.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <div className="on-dark rounded-2xl bg-[var(--graphite)] p-7">
                <h2 className="display text-[1.4rem] text-[var(--bone)]">The studio</h2>
                <dl className="mt-6 space-y-5 text-sm">
                  <div>
                    <dt className="label text-[0.6rem] text-[var(--mist)]">Call or text</dt>
                    <dd className="mt-1">
                      <a
                        className="text-[var(--bone)] hover:text-[var(--cedar)]"
                        href={`tel:${company.phoneRaw}`}
                      >
                        {company.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="label text-[0.6rem] text-[var(--mist)]">Email</dt>
                    <dd className="mt-1">
                      <a
                        className="text-[var(--bone)] hover:text-[var(--cedar)]"
                        href={`mailto:${company.email}`}
                      >
                        {company.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="label text-[0.6rem] text-[var(--mist)]">Instagram</dt>
                    <dd className="mt-1">
                      <a
                        className="text-[var(--bone)] hover:text-[var(--cedar)]"
                        href={company.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {company.instagram}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="label text-[0.6rem] text-[var(--mist)]">Location</dt>
                    <dd className="mt-1 text-[var(--bone)]">
                      {company.addressLine}, {company.cityStateZip}
                    </dd>
                  </div>
                  <div>
                    <dt className="label text-[0.6rem] text-[var(--mist)]">Hours</dt>
                    <dd className="mt-1 space-y-1 text-[var(--bone)]">
                      {company.hours.map((hours) => (
                        <p key={hours}>{hours}</p>
                      ))}
                    </dd>
                  </div>
                </dl>
                <p className="label mt-6 border-t border-[var(--line-darker)] pt-4 text-[0.6rem] text-[var(--mist)]">
                  {company.appointmentNote}
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-2xl border border-[var(--line-light)] p-7">
                <h2 className="display text-[1.2rem] text-[var(--ink)]">Have this handy</h2>
                <ul className="mt-4 space-y-2.5 text-sm leading-7 text-[var(--slate)]">
                  {consultationChecklist.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-[3px] w-4 shrink-0 rounded-full bg-[var(--cedar)]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--fog-deep)] py-16 lg:py-24">
        <Container>
          <Reveal>
            <p className="eyebrow text-[var(--slate)]">Good to know</p>
            <h2 className="display mt-5 max-w-3xl text-[2.2rem] text-[var(--ink)] sm:text-[3rem]">
              Questions, answered.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {contactPageFaq.map((faq, index) => (
              <Reveal key={faq.question} delay={Math.min(index * 50, 200)}>
                <details className="group rounded-2xl bg-[var(--bone)] p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-3 text-[0.95rem] font-semibold leading-snug text-[var(--ink)]">
                    {faq.question}
                    <span
                      aria-hidden="true"
                      className="display text-xl text-[var(--cedar)] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[var(--slate)]">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
