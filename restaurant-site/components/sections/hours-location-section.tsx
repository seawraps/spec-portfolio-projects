import Image from "next/image";
import { contactDetails, hours } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function HoursLocationSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Hours & Location"
            title="Visit us by the Santa Monica harbor"
            description="A short walk from the pier, with valet parking after 5 PM and public lots nearby."
          />

          <address className="mt-6 not-italic text-base leading-relaxed text-stone-700">
            <p>{contactDetails.addressLine1}</p>
            <p>{contactDetails.addressLine2}</p>
            <p className="mt-3">{contactDetails.phone}</p>
            <p>
              <a
                href={contactDetails.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-amber-700 underline decoration-amber-500 underline-offset-4"
              >
                Open in Maps
              </a>
            </p>
          </address>

          <dl className="mt-8 divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-stone-50/80">
            {hours.map((entry) => (
              <div key={entry.day} className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
                <dt className="font-medium text-stone-700">{entry.day}</dt>
                <dd className="text-stone-600">{entry.hours}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100 shadow-lg">
          <Image
            src="/images/location-map.svg"
            alt="Illustrated map marker near Santa Monica harbor for Astera Coastal Bistro"
            width={980}
            height={760}
            className="h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
}
