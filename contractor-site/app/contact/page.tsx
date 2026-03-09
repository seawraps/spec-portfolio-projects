import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { company, contactPageFaq } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Blue Oak Remodeling Co. to schedule a remodeling consultation in Nashville, Brentwood, or Franklin.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Tell us about your project"
              description="Share your goals and timeline. We will follow up to schedule a consultation and confirm the best next steps for your home."
            />

            <div className="mt-7 rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[var(--color-brand)]">Office Details</h2>
              <address className="mt-4 space-y-2 text-sm not-italic leading-7 text-[var(--color-muted)]">
                <p>{company.addressLine}</p>
                <p>{company.cityStateZip}</p>
                <p>
                  <a
                    className="font-medium text-[var(--color-brand)] transition hover:text-[var(--color-accent)]"
                    href={`tel:${company.phoneRaw}`}
                  >
                    {company.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a
                    className="font-medium text-[var(--color-brand)] transition hover:text-[var(--color-accent)]"
                    href={`mailto:${company.email}`}
                  >
                    {company.email}
                  </a>
                </p>
              </address>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                Hours
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-[var(--color-muted)]">
                {company.hours.map((hour) => (
                  <li key={hour}>{hour}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-brand-soft)] p-6">
              <h2 className="text-lg font-semibold text-[var(--color-brand)]">Quick Answers</h2>
              <dl className="mt-4 space-y-4">
                {contactPageFaq.map((item) => (
                  <div key={item.question}>
                    <dt className="text-sm font-semibold text-[var(--color-brand)]">{item.question}</dt>
                    <dd className="mt-1 text-sm leading-6 text-[var(--color-muted)]">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-lg sm:p-8">
            <h2 className="font-display text-4xl text-[var(--color-brand)]">Request a Consultation</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              We typically respond within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
