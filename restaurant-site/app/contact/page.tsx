import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { ReservationCta } from "@/components/sections/reservation-cta";
import { contactDetails, hours } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Astera Coastal Bistro for reservations, private dining inquiries, events, and general guest support.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="We'd love to host you"
            description="Reach out for reservations, private events, or partnership inquiries."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="space-y-6">
              <div className="rounded-3xl border border-stone-200 bg-stone-50/80 p-6">
                <h2 className="font-display text-2xl text-stone-900">Visit</h2>
                <address className="mt-3 not-italic text-sm leading-relaxed text-stone-600">
                  <p>{contactDetails.addressLine1}</p>
                  <p>{contactDetails.addressLine2}</p>
                  <p className="mt-3">{contactDetails.phone}</p>
                  <p>
                    <a href={`mailto:${contactDetails.email}`} className="text-amber-700 underline">
                      {contactDetails.email}
                    </a>
                  </p>
                </address>
              </div>

              <div className="rounded-3xl border border-stone-200 bg-stone-50/80 p-6">
                <h2 className="font-display text-2xl text-stone-900">Hours</h2>
                <dl className="mt-3 divide-y divide-stone-200 text-sm">
                  {hours.map((entry) => (
                    <div key={entry.day} className="flex justify-between gap-3 py-2">
                      <dt className="font-medium text-stone-700">{entry.day}</dt>
                      <dd className="text-stone-600">{entry.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <figure className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-100">
                <Image
                  src="/images/contact-lounge.svg"
                  alt="Bar and lounge area with evening lighting"
                  width={860}
                  height={620}
                  className="h-auto w-full"
                />
              </figure>
            </aside>

            <ContactForm />
          </div>
        </div>
      </section>

      <ReservationCta compact />
    </div>
  );
}
