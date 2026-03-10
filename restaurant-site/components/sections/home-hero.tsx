import Image from "next/image";
import Link from "next/link";

import { buttonClassName } from "@/components/ui/button-styles";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { Reveal } from "@/components/ui/reveal";
import { contactDetails, serviceMoments, siteImages } from "@/lib/data";

export function HomeHero() {
  return (
    <section className="relative min-h-[112svh] overflow-hidden border-b border-[rgba(255,233,204,0.08)]">
      <div className="absolute inset-0">
        <Image
          src={siteImages.heroOccasion.src}
          alt={siteImages.heroOccasion.alt}
          fill
          priority
          className="ambient-pan object-cover object-[center_28%] md:object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,198,144,0.18),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(92deg,rgba(9,6,4,0.94)_0%,rgba(9,6,4,0.8)_42%,rgba(9,6,4,0.46)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,6,4,0.2)_0%,rgba(9,6,4,0)_26%,rgba(9,6,4,0.46)_100%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[102svh] max-w-7xl gap-12 px-6 pb-10 pt-34 lg:grid-cols-[0.94fr_1.06fr] lg:items-end lg:pb-8 lg:pt-40">
        <Reveal className="max-w-3xl">
          <p className="editorial-kicker">Santa Monica · Mediterranean After Dark</p>
          <p className="mt-6 max-w-sm text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#d6bea3]">
            Reservation-first evenings · Terrace seating when the marine layer holds
          </p>
          <h1 className="mt-7 font-display text-[clamp(4.1rem,10vw,8rem)] leading-[0.84] tracking-[-0.05em] text-[#fff1df]">
            A room for <span className="italic text-[#f0d6b3]">slow pours, sea air,</span> and
            the kind of dinner that keeps the night open.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#d8c6b2] sm:text-xl">
            Astera is built like a real service: aperitivo at the bar, fire-led seafood from the
            pass, and candlelit tables composed to feel indulgent without noise.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={contactDetails.reservationsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClassName("primary")}
            >
              Reserve The Table
            </a>
            <Link href="/menu" className={buttonClassName("secondaryInverse")}>
              Read The Dinner Menu
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm uppercase tracking-[0.22em] text-[#d9c8b5]">
            <span className="luxury-divider max-w-14" />
            Hospitality first, image-led, and paced for a long evening.
          </div>
        </Reveal>

        <div className="relative h-[30rem] sm:h-[36rem] lg:h-[44rem]">
          <Reveal className="absolute left-[2%] top-[6%] z-10 hidden max-w-[15rem] rounded-[1.6rem] border border-[rgba(255,233,204,0.14)] bg-[rgba(14,10,8,0.7)] p-5 text-[#f5e7d6] shadow-[0_24px_70px_-34px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:block">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#d8af79]">
              Tonight at Astera
            </p>
            <p className="mt-3 font-display text-3xl leading-none">The room glows brightest after the first round.</p>
            <p className="mt-3 text-sm leading-relaxed text-[#d1bea8]">
              Start with martinis and shellfish. Let the kitchen take it from there.
            </p>
          </Reveal>

          <Reveal delay={120} className="absolute right-0 top-0 z-20 w-[78%] hero-drift">
            <InteractivePanel className="rounded-[2.2rem]">
              <figure className="image-shell rounded-[2.2rem]">
                <Image
                  src={siteImages.heroTableWine.src}
                  alt={siteImages.heroTableWine.alt}
                  width={1800}
                  height={2400}
                  className="h-[24rem] w-full object-cover object-center sm:h-[31rem] lg:h-[38rem]"
                />
              </figure>
            </InteractivePanel>
          </Reveal>

          <Reveal delay={240} className="absolute bottom-0 left-0 z-30 w-[46%] hero-drift-delayed">
            <InteractivePanel className="rounded-[1.8rem]">
              <figure className="image-shell rounded-[1.8rem]">
                <Image
                  src={siteImages.heroFeast.src}
                  alt={siteImages.heroFeast.alt}
                  width={1800}
                  height={1800}
                  className="h-[13rem] w-full object-cover sm:h-[15rem] lg:h-[17rem]"
                />
              </figure>
            </InteractivePanel>
          </Reveal>

          <Reveal
            delay={300}
            className="absolute bottom-[8%] right-[4%] z-30 max-w-[14rem] rounded-[1.6rem] border border-[rgba(255,233,204,0.14)] bg-[rgba(11,8,6,0.76)] p-5 text-[#f4e7d4] shadow-[0_24px_70px_-34px_rgba(0,0,0,0.76)] backdrop-blur-xl"
          >
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#d8af79]">
              Service Note
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#f4e7d4]">
              Sunset terrace requests are welcomed. Ask early if you want the coast at your side.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={220} className="relative mx-auto max-w-7xl px-6 pb-14 lg:pb-18">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceMoments.map((moment, index) => (
            <article
              key={moment.label}
              className={`rounded-[1.75rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(15,11,8,0.58)] px-5 py-6 backdrop-blur-sm ${
                index === 0 ? "xl:-translate-y-3" : index === 2 ? "xl:-translate-y-6" : ""
              }`}
            >
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-[#d6a66b]">
                {moment.label}
              </p>
              <h2 className="mt-4 font-display text-[1.85rem] leading-none text-[#f7ead7]">
                {moment.value}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#d0bea8]">{moment.note}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
