import Image from "next/image";
import { contactDetails, hours, siteImages } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function HoursLocationSection() {
  return (
    <section className="section-light py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="surface-card rounded-[2rem] p-7 sm:p-8">
          <SectionHeading
            eyebrow="Hours & Location"
            title="A harbor-side dinner address built for date nights and celebrations"
            description="Valet begins at 5 PM, terrace requests are welcomed, and the room is a short walk from the Santa Monica Pier."
          />

          <address className="mt-8 not-italic text-base leading-relaxed text-[#5b4538]">
            <p>{contactDetails.addressLine1}</p>
            <p>{contactDetails.addressLine2}</p>
            <p className="mt-3">{contactDetails.phone}</p>
            <p className="mt-4">
              <a
                href={contactDetails.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8d5d35] underline decoration-[#b98956] underline-offset-8"
              >
                Open in Maps
              </a>
            </p>
          </address>

          <dl className="mt-8 divide-y divide-[#d9cbbd] overflow-hidden rounded-[1.6rem] border border-[#dac5b1] bg-[rgba(255,255,255,0.55)]">
            {hours.map((entry) => (
              <div key={entry.day} className="flex items-center justify-between gap-3 px-5 py-4 text-sm">
                <dt className="font-semibold uppercase tracking-[0.16em] text-[#7b583d]">
                  {entry.day}
                </dt>
                <dd className="text-[#5b4538]">{entry.hours}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <figure className="image-shell rounded-[2rem] sm:col-span-2">
            <Image
              src={siteImages.terraceNight.src}
              alt={siteImages.terraceNight.alt}
              width={1800}
              height={1200}
              className="h-[21rem] w-full object-cover sm:h-[27rem]"
            />
          </figure>
          <figure className="image-shell rounded-[1.8rem]">
            <Image
              src={siteImages.patioOcean.src}
              alt={siteImages.patioOcean.alt}
              width={1800}
              height={2700}
              className="h-[22rem] w-full object-cover"
            />
          </figure>
          <div className="surface-card-soft rounded-[1.8rem] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d1a364]">
              Dining Atmosphere
            </p>
            <h3 className="mt-4 font-display text-4xl leading-none text-[#f8efe4]">
              Ocean-facing terrace by day, candlelit room by night
            </h3>
            <p className="mt-5 text-base leading-relaxed text-[#d4c3b0]">
              The patio catches the marine air while the interior leans into darker tones, brass
              light, and a quieter kind of drama once service settles in.
            </p>
            <ul className="mt-6 space-y-3 text-sm uppercase tracking-[0.16em] text-[#f1ddbf]">
              <li>Valet after 5 PM</li>
              <li>Private dining for up to 24</li>
              <li>Terrace requests welcomed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
