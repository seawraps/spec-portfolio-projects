import type { Metadata } from "next";
import Image from "next/image";

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
        description="Tell us what you are considering, whether that is a spring listing launch, a relocation search, or a valuation before making plans. We will come back with thoughtful next steps and a clear recommendation."
        imageSrc="/images/contact-consultation.jpg"
        imageAlt="A polished residential interior used to convey the calm tone of a private consultation."
        imageCaption="A calm, polished setting for buyers, sellers, and owners planning their next move."
        highlights={[
          "Typically replies within one business day",
          "Consultations available in person or by video",
          "Phone, email, and form inquiries welcome",
        ]}
      />

      <section className="page-section-spacing">
        <Container>
          <div className="section-shell rounded-[40px] p-4 sm:p-6 lg:p-8">
            <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
              <aside className="dark-panel min-w-0 rounded-[34px] p-6 text-white sm:p-10">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze-soft)]">
                  Direct lines
                </p>
                <h2 className="mt-4 font-display text-[clamp(2.9rem,12vw,4.6rem)] leading-[0.92] text-white">
                  Appointment-first guidance for buyers, sellers, and owners planning the next move.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                  Use the direct line when timing matters, or send a thoughtful
                  note if you want context before taking the next step.
                </p>

                <div className="image-frame relative mt-8 min-h-[280px]">
                  <Image
                    src="/images/neighborhood-old-harbor.jpg"
                    alt="An upscale urban neighborhood used to reinforce Harbor City contact and service area storytelling."
                    fill
                    sizes="(min-width: 1280px) 36vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/74 via-transparent to-transparent" />
                  <div className="overlay-panel absolute inset-x-5 bottom-5 rounded-[24px] p-5 text-white">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/68">
                      Harbor City office
                    </p>
                    <p className="mt-3 font-display text-4xl leading-[0.94] text-white">
                      Meetings are available by appointment in the heart of the agency’s core market.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid min-w-0 gap-4 md:grid-cols-3 xl:grid-cols-1">
                  {contactMethods.map((method) => (
                    <div
                      key={method.label}
                      className="min-w-0 rounded-[24px] border border-white/10 bg-white/6 p-6"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze-soft)]">
                        {method.label}
                      </p>
                      <a
                        href={method.href}
                        className="mt-2 block break-words font-display text-[clamp(1.75rem,9vw,2.65rem)] leading-[0.94] text-white hover:text-white/80"
                      >
                        {method.value}
                      </a>
                      <p className="mt-2 text-sm leading-6 text-white/68">
                        {method.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[28px] border border-white/10 bg-white/6 p-6">
                  <div className="grid gap-6 sm:grid-cols-[0.9fr_1.1fr] xl:grid-cols-1">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze-soft)]">
                        Office Hours
                      </p>
                      <ul className="mt-5 space-y-3 text-sm leading-7 text-white/72">
                        {officeHours.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-black/16 p-5">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze-soft)]">
                        Meeting note
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/70">
                        Private advisory meetings are available in person in
                        Harbor City or by video when a first review is the most
                        useful place to start.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>

              <div className="grid gap-6">
                <div className="min-w-0 soft-card rounded-[34px] p-8 sm:p-10">
                  <SectionHeading
                    eyebrow="Get In Touch"
                    title="Request a private consultation."
                    description="Share a few details below and we will follow up with availability, expected timing, and the most useful next step for your situation."
                    className="reveal-up"
                  />
                  <div className="mt-8">
                    <ContactForm />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-[0.92fr_1.08fr] md:items-start">
                  <aside className="soft-card self-start rounded-[28px] p-6 sm:p-7">
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                      Response cadence
                    </p>
                    <p className="mt-4 font-display text-4xl leading-[0.94] text-[var(--color-ink)]">
                      Typically within one business day.
                    </p>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                      <li>In-person and video consultations are both available.</li>
                      <li>Phone, email, and form inquiries are all welcome.</li>
                      <li>Timing, neighborhood, and property type help shape the first reply.</li>
                    </ul>
                  </aside>

                  <aside className="soft-card self-start rounded-[28px] p-6 sm:p-7">
                    <h2 className="font-display text-4xl leading-[0.94] text-[var(--color-ink)]">
                      What happens next
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                      We review your note, confirm timing, and respond with a
                      tailored recommendation. If a conversation makes sense, we
                      will propose a consultation window and outline what to
                      prepare so the meeting is genuinely useful.
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[20px] border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-4">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                          Consultation mode
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[var(--color-muted-strong)]">
                          In person for local clients, video for early planning and relocations.
                        </p>
                      </div>
                      <div className="rounded-[20px] border border-[var(--color-line)] bg-white/78 px-4 py-4">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                          Preparation
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[var(--color-muted-strong)]">
                          A few details on timing, budget, or address help us answer more directly.
                        </p>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
