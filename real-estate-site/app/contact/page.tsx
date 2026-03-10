import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactMethods, officeHours } from "@/lib/data";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Crescent Vale Realty to schedule a consultation, request a home valuation, or ask about buying and selling in the Harbor City market.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with a conversation, not a sales script."
        description="Tell us what you are considering, whether that is a spring listing launch, a relocation search, or a valuation before making plans. We will reach out with thoughtful next steps."
        highlights={[
          "Typically replies within one business day",
          "Consultations available in person or by video",
          "Phone, email, and form inquiries welcome",
        ]}
      />

      <section className="py-12 md:py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="min-w-0 soft-card rounded-[32px] p-8 sm:p-10">
              <SectionHeading
                eyebrow="Get In Touch"
                title="Request a private consultation."
                description="Share a few details below and we will follow up with availability, expected timing, and the best next step for your situation."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="min-w-0 space-y-6">
              <aside className="soft-card rounded-[32px] p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Direct Contact
                </p>
                <div className="mt-6 space-y-5">
                  {contactMethods.map((method) => (
                    <div
                      key={method.label}
                      className="rounded-[24px] border border-[var(--color-line)] bg-white/75 p-6"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                        {method.label}
                      </p>
                      <a
                        href={method.href}
                        className="mt-2 block break-all font-display text-3xl text-[var(--color-ink)] hover:text-[var(--color-forest)]"
                      >
                        {method.value}
                      </a>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                        {method.description}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>

              <aside className="soft-card rounded-[32px] bg-[var(--color-forest)] p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                  Office Hours
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-white/78">
                  {officeHours.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-8 rounded-[24px] border border-white/12 bg-white/8 p-6">
                  <h2 className="font-display text-3xl text-white">
                    What happens next
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/74">
                    We review your note, confirm timing, and respond with a
                    tailored recommendation. If a conversation makes sense, we
                    will propose a consultation window and outline what to bring
                    to make it useful.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
