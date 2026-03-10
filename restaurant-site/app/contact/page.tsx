import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { ReservationCta } from "@/components/sections/reservation-cta";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { Reveal } from "@/components/ui/reveal";
import { contactDetails, hours, siteImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Astera Coastal Bistro for reservations, private events, large-party dining, and general guest support.",
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="section-dark pb-18 md:pb-22 lg:pb-26">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="pt-6">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="For reservations, celebrations, and private evenings, the team is ready"
                description="Reach out for terrace requests, large tables, private events, collaborations, or any questions about the room."
                as="h1"
                theme="dark"
              />
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <Reveal delay={90}>
                <article className="rounded-[1.9rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.04)] p-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#d8af79]">
                    Visit
                  </p>
                  <address className="mt-4 not-italic text-base leading-relaxed text-[#d4c3b0]">
                    <p>{contactDetails.addressLine1}</p>
                    <p>{contactDetails.addressLine2}</p>
                    <p className="mt-3">{contactDetails.phone}</p>
                    <p className="mt-1">
                      <a
                        href={`mailto:${contactDetails.email}`}
                        className="text-[#f1ddbf] underline decoration-[#d1a364] underline-offset-6"
                      >
                        {contactDetails.email}
                      </a>
                    </p>
                  </address>
                </article>
              </Reveal>

              <Reveal delay={150}>
                <article className="rounded-[1.9rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.04)] p-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#d8af79]">
                    Guest Notes
                  </p>
                  <ul className="mt-4 space-y-3 text-base leading-relaxed text-[#d4c3b0]">
                    <li>Valet parking begins nightly at 5 PM.</li>
                    <li>Private dining accommodates up to 24 guests.</li>
                    <li>Terrace requests are based on weather and availability.</li>
                  </ul>
                </article>
              </Reveal>
            </div>

            <Reveal delay={220}>
              <dl className="mt-6 divide-y divide-[rgba(255,233,204,0.12)] overflow-hidden rounded-[1.9rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.03)]">
                {hours.map((entry) => (
                  <div key={entry.day} className="flex items-center justify-between gap-3 px-5 py-4 text-sm">
                    <dt className="font-semibold uppercase tracking-[0.18em] text-[#f1ddbf]">
                      {entry.day}
                    </dt>
                    <dd className="text-[#d4c3b0]">{entry.hours}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:pt-6">
            <Reveal className="sm:col-span-2">
              <InteractivePanel className="rounded-[2.2rem]">
                <figure className="image-shell rounded-[2.2rem]">
                  <Image
                    src={siteImages.terraceNight.src}
                    alt={siteImages.terraceNight.alt}
                    width={1800}
                    height={1200}
                    className="h-[20rem] w-full object-cover sm:h-[26rem]"
                    priority
                  />
                </figure>
              </InteractivePanel>
            </Reveal>
            <Reveal delay={110}>
              <InteractivePanel className="rounded-[1.9rem]">
                <figure className="image-shell rounded-[1.9rem]">
                  <Image
                    src={siteImages.diningRoom.src}
                    alt={siteImages.diningRoom.alt}
                    width={1800}
                    height={1200}
                    className="h-[24rem] w-full object-cover"
                  />
                </figure>
              </InteractivePanel>
            </Reveal>
            <Reveal delay={170}>
              <InteractivePanel className="rounded-[1.9rem]">
                <figure className="image-shell rounded-[1.9rem]">
                  <Image
                    src={siteImages.wineToast.src}
                    alt={siteImages.wineToast.alt}
                    width={1800}
                    height={1200}
                    className="h-[24rem] w-full object-cover"
                  />
                </figure>
              </InteractivePanel>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-light py-18 md:py-22 lg:py-26">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Inquiries"
                title="Tell us what kind of evening you have in mind"
                description="We usually reply within one business day. For same-day dining changes, please call the restaurant directly."
              />
            </Reveal>
            <Reveal delay={80}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <ReservationCta compact />
    </div>
  );
}
