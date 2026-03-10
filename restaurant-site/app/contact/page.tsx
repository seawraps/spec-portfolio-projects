import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { ReservationCta } from "@/components/sections/reservation-cta";
import { contactDetails, hours, siteImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Astera Coastal Bistro for reservations, private events, large-party dining, and general guest support.",
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="section-dark pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="pt-8">
            <SectionHeading
              eyebrow="Contact"
              title="We'd love to host your next dinner, celebration, or private gathering"
              description="Reach out for reservations, terrace requests, private events, collaborations, or any questions about the room."
              as="h1"
              theme="dark"
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <article className="rounded-[1.8rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.04)] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d1a364]">
                  Visit
                </p>
                <address className="mt-4 not-italic text-base leading-relaxed text-[#d4c3b0]">
                  <p>{contactDetails.addressLine1}</p>
                  <p>{contactDetails.addressLine2}</p>
                  <p className="mt-3">{contactDetails.phone}</p>
                  <p className="mt-1">
                    <a href={`mailto:${contactDetails.email}`} className="text-[#f1ddbf] underline">
                      {contactDetails.email}
                    </a>
                  </p>
                </address>
              </article>

              <article className="rounded-[1.8rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.04)] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d1a364]">
                  Guest Notes
                </p>
                <ul className="mt-4 space-y-3 text-base leading-relaxed text-[#d4c3b0]">
                  <li>Valet parking begins nightly at 5 PM.</li>
                  <li>Private dining accommodates up to 24 guests.</li>
                  <li>Terrace requests are based on weather and availability.</li>
                </ul>
              </article>
            </div>

            <dl className="mt-6 divide-y divide-[rgba(255,233,204,0.12)] overflow-hidden rounded-[1.8rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.03)]">
              {hours.map((entry) => (
                <div key={entry.day} className="flex items-center justify-between gap-3 px-5 py-4 text-sm">
                  <dt className="font-semibold uppercase tracking-[0.16em] text-[#f1ddbf]">
                    {entry.day}
                  </dt>
                  <dd className="text-[#d4c3b0]">{entry.hours}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:pt-8">
            <figure className="image-shell rounded-[2rem] sm:col-span-2">
              <Image
                src={siteImages.terraceNight.src}
                alt={siteImages.terraceNight.alt}
                width={1800}
                height={1200}
                className="h-[20rem] w-full object-cover sm:h-[25rem]"
                priority
              />
            </figure>
            <figure className="image-shell rounded-[1.8rem]">
              <Image
                src={siteImages.patioOcean.src}
                alt={siteImages.patioOcean.alt}
                width={1800}
                height={2700}
                className="h-[24rem] w-full object-cover"
              />
            </figure>
            <figure className="image-shell rounded-[1.8rem]">
              <Image
                src={siteImages.wineToast.src}
                alt={siteImages.wineToast.alt}
                width={1800}
                height={1200}
                className="h-[24rem] w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section-light py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading
                eyebrow="Inquiries"
                title="Tell us what kind of evening you have in mind"
                description="We usually reply within one business day. For same-day dining changes, please call the restaurant directly."
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <ReservationCta compact />
    </div>
  );
}
