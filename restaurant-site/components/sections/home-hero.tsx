import Image from "next/image";
import Link from "next/link";

import { buttonClassName } from "@/components/ui/button-styles";
import { Reveal } from "@/components/ui/reveal";
import { contactDetails, siteImages } from "@/lib/data";

const heroFacts = [
  "Open nightly from 5 PM",
  "Terrace seating on request",
  "Private dining for up to 24",
];

export function HomeHero() {
  return (
    <section className="section-shell relative min-h-[100svh] overflow-hidden border-b border-[rgba(233,209,181,0.08)]">
      <div className="absolute inset-0">
        <Image
          src={siteImages.heroOccasion.src}
          alt={siteImages.heroOccasion.alt}
          fill
          priority
          sizes="100vw"
          className="ambient-pan object-cover object-[center_36%]"
        />
        <div className="hero-mist absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,5,4,0.34)_0%,rgba(6,5,4,0.56)_24%,rgba(6,5,4,0.84)_68%,rgba(6,5,4,0.94)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,rgba(9,8,7,0),rgba(9,8,7,0.94))]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[96rem] flex-col px-5 pb-8 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pt-36">
        <div className="grid flex-1 gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <Reveal className="max-w-4xl pb-6 lg:pb-12">
            <p className="eyebrow">Santa Monica Harbor · Candlelit Mediterranean Dining</p>
            <h1 className="text-shadow-soft mt-6 max-w-4xl font-display text-[clamp(4.4rem,12vw,8.8rem)] leading-[0.84] tracking-[-0.065em] text-[#fff0db]">
              A coastal bistro
              <span className="block italic text-[#efcfaa]"> paced like an evening out.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-[#dccab6] sm:text-[1.15rem]">
              Astera is built around mood, appetite, and quiet hospitality. The welcome begins at
              the host stand, the bar pours cold and bright, and dinner opens into fire, sea air,
              and the kind of room that gets better after dark.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={contactDetails.reservationsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClassName("primary", "w-full sm:w-auto")}
              >
                Reserve A Table
              </a>
              <Link href="/menu" className={buttonClassName("secondaryInverse", "w-full sm:w-auto")}>
                Preview Tonight&apos;s Menu
              </Link>
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:justify-self-end lg:self-center">
            <div className="frame-panel max-w-md rounded-[1.75rem] p-4 sm:p-5">
              <figure className="image-frame overflow-hidden rounded-[1.25rem]">
                <Image
                  src={siteImages.heroTableWine.src}
                  alt={siteImages.heroTableWine.alt}
                  width={1800}
                  height={1200}
                  className="h-[14rem] w-full object-cover object-[center_44%] sm:h-[17rem]"
                />
              </figure>

              <div className="mt-5 border-t border-[rgba(233,209,181,0.1)] pt-5">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#d7aa75]">
                  Tonight&apos;s Mood
                </p>
                <p className="mt-3 font-display text-[2rem] leading-[0.92] tracking-[-0.04em] text-[#fff1df]">
                  Low light, polished service, and one more bottle still in play.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#cfbda8]">
                  The site leads with atmosphere because the restaurant would too. Images hold the
                  room, and the interface steps back just enough to let them do it.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="ambient-border mt-8 grid gap-6 py-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="grid gap-4 sm:grid-cols-3">
              {heroFacts.map((fact) => (
                <p
                  key={fact}
                  className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#d9c6b0]"
                >
                  {fact}
                </p>
              ))}
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#c6b29b] lg:justify-self-end">
              Reservation-first navigation, room-led imagery, and deliberate spacing keep the
              experience closer to a hospitality brand book than a conventional landing page.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
