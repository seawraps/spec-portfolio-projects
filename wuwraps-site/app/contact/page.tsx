import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { company, consultationChecklist, contactPageFaq } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact & Quotes",
  description:
    "Get a free vinyl wrap quote from Wu Wraps in Renton, WA. Call (206) 707-6491, email wuwraps@gmail.com, or send your vehicle details for color-change, fleet, and custom wraps.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="Tell us about your ride."
        description="Send over your vehicle and the look you're chasing, and Mark will follow up with a straight, honest quote and a spot on the schedule."
        variant="red"
      />

      <section className="border-b border-[var(--color-line)] py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal>
            <div className="comic-panel bg-[var(--color-paper)] p-6 sm:p-8">
              <h2 className="comic-display text-[2.2rem] leading-none text-[var(--color-ink)]">
                Start your quote
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
                The more detail you give, the faster we can dial in a price. Not sure what you want
                yet? No problem, tell us the vibe and we&apos;ll help you figure it out.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <div className="comic-panel-ink p-6">
                <h2 className="comic-display text-[1.9rem] leading-none text-[var(--color-yellow)]">
                  The Shop
                </h2>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="comic-heavy text-[0.64rem] tracking-[0.14em] text-[var(--color-yellow)]">
                      Call / Text
                    </dt>
                    <dd className="mt-1">
                      <a className="text-[var(--color-paper)] hover:text-[var(--color-yellow)]" href={`tel:${company.phoneRaw}`}>
                        {company.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="comic-heavy text-[0.64rem] tracking-[0.14em] text-[var(--color-yellow)]">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a className="text-[var(--color-paper)] hover:text-[var(--color-yellow)]" href={`mailto:${company.email}`}>
                        {company.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="comic-heavy text-[0.64rem] tracking-[0.14em] text-[var(--color-yellow)]">
                      Instagram
                    </dt>
                    <dd className="mt-1">
                      <a
                        className="text-[var(--color-paper)] hover:text-[var(--color-yellow)]"
                        href={company.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {company.instagram}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="comic-heavy text-[0.64rem] tracking-[0.14em] text-[var(--color-yellow)]">
                      Location
                    </dt>
                    <dd className="mt-1 text-[var(--color-paper)]">
                      {company.addressLine}
                      <br />
                      {company.cityStateZip}
                    </dd>
                  </div>
                  <div>
                    <dt className="comic-heavy text-[0.64rem] tracking-[0.14em] text-[var(--color-yellow)]">
                      Hours
                    </dt>
                    <dd className="mt-1 space-y-1 text-[var(--color-paper)]">
                      {company.hours.map((hours) => (
                        <p key={hours}>{hours}</p>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="comic-panel-yellow p-6">
                <h2 className="comic-display text-[1.7rem] leading-none text-[var(--color-ink)]">
                  Have this handy
                </h2>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--color-ink)]">
                  {consultationChecklist.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-line)] py-16 lg:py-24">
        <Container>
          <Reveal>
            <span className="comic-tag">Good to Know</span>
            <h2 className="comic-display mt-5 max-w-3xl text-[2.7rem] leading-[0.92] text-[var(--color-ink)] sm:text-[3.6rem]">
              Questions, answered.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {contactPageFaq.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 50}>
                <details className="comic-panel comic-panel-hover group p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="comic-heavy flex cursor-pointer items-center justify-between gap-3 text-[0.92rem] leading-snug tracking-[0.02em] text-[var(--color-ink)]">
                    {faq.question}
                    <span
                      aria-hidden="true"
                      className="comic-display text-2xl text-[var(--color-red)] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
