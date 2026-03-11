import Link from "next/link";
import Image from "next/image";

import { buttonClassName } from "@/components/ui/button-styles";
import { Reveal } from "@/components/ui/reveal";
import { contactDetails, siteImages } from "@/lib/data";

type ReservationCtaProps = {
  compact?: boolean;
};

export function ReservationCta({ compact = false }: ReservationCtaProps) {
  return (
    <section className={`section-shell px-5 ${compact ? "py-16 lg:py-20" : "py-20 lg:py-28"} sm:px-8 lg:px-10`}>
      <div className="mx-auto max-w-[96rem]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.2rem] border border-[rgba(233,209,181,0.12)]">
            <Image
              src={siteImages.terraceNight.src}
              alt={siteImages.terraceNight.alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,8,7,0.94)_0%,rgba(9,8,7,0.72)_46%,rgba(9,8,7,0.56)_100%)]" />

            <div className="relative grid gap-8 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-16">
              <div>
                <p className="eyebrow">Reservations</p>
                <h2 className="mt-5 max-w-3xl font-display text-[clamp(3.2rem,7vw,6rem)] leading-[0.86] tracking-[-0.06em] text-[#fff0db]">
                  Reserve the table before the room fills in around it.
                </h2>
                <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-[#dccab6] sm:text-[1.08rem]">
                  Dining room and terrace reservations are available online. For private dining,
                  celebrations, or same-day requests, the host stand is best reached directly.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={contactDetails.reservationsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClassName("primary", "w-full sm:w-auto")}
                  >
                    Book Online
                  </a>
                  <Link href="/contact" className={buttonClassName("secondaryInverse", "w-full sm:w-auto")}>
                    Private Dining
                  </Link>
                </div>
              </div>

              <div className="frame-panel rounded-[1.6rem] p-5 sm:p-6">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#d7aa75]">
                  Concierge Notes
                </p>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#cfbda8] sm:text-base">
                  <p>Terrace requests are welcomed and confirmed each evening with the weather.</p>
                  <p>Private room buyouts are available for 14 to 24 guests with plated pacing.</p>
                  <p>
                    Same-day changes and celebration details are best handled via{" "}
                    <a
                      href={`mailto:${contactDetails.reservationEmail}`}
                      className="text-[#f1ddbf] underline decoration-[#d1a364] underline-offset-4"
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
