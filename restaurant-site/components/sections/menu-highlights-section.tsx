import Link from "next/link";
import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { seasonalNotes } from "@/lib/experience-data";
import { contactDetails, siteImages } from "@/lib/data";

export function MenuHighlightsSection() {
  return (
    <section className="section-shell bg-[linear-gradient(180deg,rgba(11,9,8,0.86),rgba(7,6,5,0.96))] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[96rem]">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Reveal>
              <p className="eyebrow">Chef Notes</p>
              <h2 className="mt-5 max-w-lg font-display text-[clamp(3.2rem,6.8vw,5.8rem)] leading-[0.88] tracking-[-0.055em] text-[#fff0db]">
                Seasonal notes, private rooms, and the quieter details of service.
              </h2>
              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-[#cfbda8] sm:text-[1.08rem]">
                Not everything needs to be visible at once. This section reveals itself more like a
                menu note from the captain than another static block of copy.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={contactDetails.reservationsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
                  Reserve Dinner
                </a>
                <Link href="/contact" className="editorial-link">
                  Ask About Private Dining
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="space-y-3">
            {seasonalNotes.map((note, index) => (
              <Reveal key={note.title} delay={index * 90}>
                <details
                  className="group border-t border-[rgba(233,209,181,0.12)] py-5 text-[#fff1df]"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-[#a98766]">
                        {note.season}
                      </p>
                      <h3 className="mt-3 font-display text-[2rem] leading-[0.92] tracking-[-0.04em] sm:text-[2.7rem]">
                        {note.title}
                      </h3>
                    </div>
                    <span className="mt-2 text-xl text-[#d7aa75] transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 max-w-3xl space-y-4 text-sm leading-relaxed text-[#cfbda8] sm:text-base">
                    <p>{note.description}</p>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f1ddbf]">
                      {note.pairing}
                    </p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <figure className="image-frame rounded-[2rem]">
              <Image
                src={siteImages.storyChef.src}
                alt={siteImages.storyChef.alt}
                width={2200}
                height={1600}
                className="h-[24rem] w-full object-cover sm:h-[30rem] lg:h-[34rem]"
              />
            </figure>
          </Reveal>

          <Reveal delay={140} className="frame-panel rounded-[2rem] p-6 sm:p-8">
            <p className="eyebrow">Private Dining</p>
            <h3 className="mt-5 font-display text-[2.7rem] leading-[0.9] tracking-[-0.05em] text-[#fff1df] sm:text-[3.5rem]">
              A secluded room for coastal celebrations and elegant business dinners.
            </h3>
            <p className="mt-5 text-[1rem] leading-relaxed text-[#cfbda8]">
              Group dining is handled with the same restraint as the main room: plated pacing,
              polished wine service, and formats that still feel like Astera rather than event
              catering.
            </p>
            <div className="mt-6 space-y-3 text-sm uppercase tracking-[0.26em] text-[#d9c6b0]">
              <p>14 to 24 guests</p>
              <p>Tasting or shared-course formats</p>
              <p>Cellar pairings on request</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
