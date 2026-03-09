import Link from "next/link";
import { contactDetails } from "@/lib/data";

type ReservationCtaProps = {
  compact?: boolean;
};

export function ReservationCta({ compact = false }: ReservationCtaProps) {
  return (
    <section id="reservations" className={compact ? "py-12" : "py-16 sm:py-20"}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#1f2937,#292524)] p-8 text-stone-100 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
            Reservations
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-stone-50 sm:text-5xl">
            Plan your next evening at Astera.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-200/90">
            Booking online is the fastest way to secure preferred seating. For private dining,
            celebrations, or parties above 8, reach out to our reservations team directly.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={contactDetails.reservationsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-stone-900 transition-colors hover:bg-amber-200"
            >
              Book Online
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-stone-300/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-stone-100 transition-colors hover:border-stone-100"
            >
              Private Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
