import type { Metadata } from "next";
import Image from "next/image";

import { ContactForm } from "@/components/contact/contact-form";
import { ReservationCta } from "@/components/sections/reservation-cta";
import { Reveal } from "@/components/ui/reveal";
import { contactDetails, hours, siteImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Astera Coastal Bistro for reservations, private events, large-party dining, and general guest support.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-shell relative overflow-hidden border-b border-[rgba(233,209,181,0.08)]">
        <div className="absolute inset-0">
          <Image
            src={siteImages.terraceNight.src}
            alt={siteImages.terraceNight.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,5,0.32)_0%,rgba(7,6,5,0.64)_42%,rgba(7,6,5,0.92)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-[96rem] px-5 pb-14 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pb-18 lg:pt-36">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(4rem,10vw,7.4rem)] leading-[0.84] tracking-[-0.065em] text-[#fff0db]">
              Reach the host stand for celebrations, reservations, and slower dinner plans.
            </h1>
            <p className="mt-6 max-w-2xl text-[1rem] leading-relaxed text-[#dccab6] sm:text-[1.12rem]">
              The room is designed for planning as much as dining. Use the form for private events,
              large-party notes, or collaboration inquiries. For same-day changes, call directly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-shell px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[96rem] grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-10">
            <Reveal>
              <div className="border-t border-[rgba(233,209,181,0.1)] py-5">
                <p className="eyebrow">Visit</p>
                <address className="mt-4 not-italic text-[1rem] leading-relaxed text-[#cfbda8]">
                  <p>{contactDetails.addressLine1}</p>
                  <p>{contactDetails.addressLine2}</p>
                  <p className="mt-4">{contactDetails.phone}</p>
                  <p className="mt-1">
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="text-[#f1ddbf] underline decoration-[#d1a364] underline-offset-4"
                    >
                      {contactDetails.email}
                    </a>
                  </p>
                </address>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-4 border-t border-[rgba(233,209,181,0.1)] py-5">
                <p className="eyebrow">Hours</p>
                <dl className="divide-y divide-[rgba(233,209,181,0.1)]">
                  {hours.map((entry) => (
                    <div key={entry.day} className="flex items-center justify-between gap-4 py-3 text-sm">
                      <dt className="font-semibold uppercase tracking-[0.22em] text-[#f1ddbf]">
                        {entry.day}
                      </dt>
                      <dd className="text-[#cfbda8]">{entry.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <figure className="image-frame rounded-[1.7rem]">
                <Image
                  src={siteImages.diningRoom.src}
                  alt={siteImages.diningRoom.alt}
                  width={2000}
                  height={1400}
                  className="h-[20rem] w-full object-cover sm:h-[26rem]"
                />
              </figure>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <ReservationCta compact />
    </>
  );
}
