import Image from "next/image";
import Link from "next/link";

import { buttonClassName } from "@/components/ui/button-styles";
import { contactDetails, siteImages } from "@/lib/data";

type ReservationCtaProps = {
  compact?: boolean;
};

export function ReservationCta({ compact = false }: ReservationCtaProps) {
  return (
    <section id="reservations" className={compact ? "py-12 md:py-16" : "py-16 md:py-20 lg:py-24"}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-[rgba(255,233,204,0.12)]">
          <Image
            src={siteImages.heroOccasion.src}
            alt={siteImages.heroOccasion.alt}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,8,6,0.88)_0%,rgba(11,8,6,0.78)_46%,rgba(11,8,6,0.5)_100%)]" />

          <div className="relative px-8 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f1ddbf]">
              Reservations
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.92] text-[#f8efe4] sm:text-6xl">
              Reserve the kind of dinner people talk about on the drive home.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#d9c8b5]">
              Book online for standard dining room and terrace seating. For celebrations, group
              dinners, or private events, our reservations team can shape the evening around your
              table.
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
                Private Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
