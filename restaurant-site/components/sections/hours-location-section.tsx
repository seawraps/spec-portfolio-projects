import Image from "next/image";
import { contactDetails, hours, siteImages } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { Reveal } from "@/components/ui/reveal";

export function HoursLocationSection() {
  return (
    <section className="section-light py-18 md:py-22 lg:py-26">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
        <Reveal>
          <div className="surface-card rounded-[2.4rem] p-7 sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow="Hours & Location"
              title="A harbor-side address designed for date nights, celebrations, and lingering final pours"
              description="Valet begins at 5 PM, terrace requests are welcomed, and the room is a short walk from the pier once the coast cools down."
            />

            <address className="mt-8 not-italic text-base leading-relaxed text-[#5b4538]">
              <p>{contactDetails.addressLine1}</p>
              <p>{contactDetails.addressLine2}</p>
              <p className="mt-4 text-lg font-semibold text-[#2a1c14]">{contactDetails.phone}</p>
              <p className="mt-5">
                <a
                  href={contactDetails.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8d5d35] underline decoration-[#b98956] underline-offset-8"
                >
                  Open in Maps
                </a>
              </p>
            </address>

            <dl className="mt-8 divide-y divide-[#d9cbbd] overflow-hidden rounded-[1.8rem] border border-[#dac5b1] bg-[rgba(255,255,255,0.55)]">
              {hours.map((entry) => (
                <div key={entry.day} className="flex items-center justify-between gap-3 px-5 py-4 text-sm">
                  <dt className="font-semibold uppercase tracking-[0.18em] text-[#7b583d]">
                    {entry.day}
                  </dt>
                  <dd className="text-[#5b4538]">{entry.hours}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Valet after 5 PM", "Private dining for 24", "Terrace on request"].map((note) => (
                <div
                  key={note}
                  className="rounded-[1.5rem] border border-[#d7bfa8] bg-[rgba(255,255,255,0.5)] px-4 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7f5634]"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal delay={90}>
              <InteractivePanel className="rounded-[2.2rem]">
                <figure className="image-shell rounded-[2.2rem]">
                  <Image
                    src={siteImages.terraceNight.src}
                    alt={siteImages.terraceNight.alt}
                    width={1800}
                    height={1200}
                    className="h-[21rem] w-full object-cover sm:h-[26rem]"
                  />
                </figure>
              </InteractivePanel>
            </Reveal>

            <Reveal delay={160} className="rounded-[2rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(16,11,8,0.82)] p-6 text-[#f7ead7] shadow-[0_24px_70px_-34px_rgba(0,0,0,0.78)]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#d8af79]">
                Concierge Note
              </p>
              <h3 className="mt-4 font-display text-[2.5rem] leading-[0.92]">
                Ocean-facing terrace by sunset, candlelit room by night.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-[#d0bea8]">
                The patio catches the marine air while the interior leans into darker tones, brass
                light, and a quieter kind of drama once the first seating settles in.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <InteractivePanel className="rounded-[2.2rem]">
              <figure className="image-shell rounded-[2.2rem]">
                <Image
                  src={siteImages.heroOccasion.src}
                  alt={siteImages.heroOccasion.alt}
                  width={1800}
                  height={2700}
                  className="h-[22rem] w-full object-cover sm:h-[28rem]"
                />
              </figure>
            </InteractivePanel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
