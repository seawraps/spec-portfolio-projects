import Image from "next/image";
import Link from "next/link";

import { buttonClassName } from "@/components/ui/button-styles";
import { Reveal } from "@/components/ui/reveal";
import { contactDetails, siteImages } from "@/lib/data";

type ReservationCtaProps = {
  compact?: boolean;
};

export function ReservationCta({ compact = false }: ReservationCtaProps) {
  return (
    <section id="reservations" className={compact ? "py-14 md:py-18" : "py-18 md:py-22 lg:py-26"}>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.6rem] border border-[rgba(255,233,204,0.12)]">
            <Image
              src={siteImages.heroOccasion.src}
              alt={siteImages.heroOccasion.alt}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,198,144,0.18),transparent_30%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(92deg,rgba(9,6,4,0.92)_0%,rgba(9,6,4,0.84)_44%,rgba(9,6,4,0.48)_100%)]" />

            <div className="relative grid gap-8 px-8 py-10 sm:px-10 sm:py-12 lg:grid-cols-[0.96fr_0.64fr] lg:px-14 lg:py-14">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.36em] text-[#f1ddbf]">
                  Reservations
                </p>
                <h2 className="mt-5 max-w-3xl font-display text-[clamp(3.2rem,7vw,5.6rem)] leading-[0.88] tracking-[-0.04em] text-[#fff2df]">
                  Reserve the dinner people describe before they even mention the food.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d8c6b2]">
                  Book online for dining room and terrace seating. For celebrations, private events,
                  or group dinners, our team can shape the evening around your table from first pour
                  to final course.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href={contactDetails.reservationsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClassName("accent")}
                  >
                    Book Online
                  </a>
                  <Link href="/contact" className={buttonClassName("secondaryInverse")}>
                    Plan A Private Evening
                  </Link>
                </div>
              </div>

              <div className="self-end rounded-[2rem] border border-[rgba(255,233,204,0.14)] bg-[rgba(12,8,6,0.7)] p-6 shadow-[0_24px_70px_-34px_rgba(0,0,0,0.82)] backdrop-blur-xl">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#d8af79]">
                  Reservation Notes
                </p>
                <div className="mt-5 space-y-5 text-base text-[#f2e4d2]">
                  <p>Terrace requests are welcomed and confirmed as the marine layer settles.</p>
                  <p>Private dining is available for parties of up to 24 guests.</p>
                  <p className="text-[#d1bfaa]">
                    For same-day changes or celebration details, email{" "}
                    <a
                      href={`mailto:${contactDetails.reservationEmail}`}
                      className="text-[#f1ddbf] underline decoration-[#d1a364] underline-offset-6"
                    >
                      {contactDetails.reservationEmail}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
