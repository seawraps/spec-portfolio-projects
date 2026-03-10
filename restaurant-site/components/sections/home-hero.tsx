import Image from "next/image";
import Link from "next/link";

import { buttonClassName } from "@/components/ui/button-styles";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { Reveal } from "@/components/ui/reveal";
import { contactDetails, serviceMoments, siteImages } from "@/lib/data";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-[rgba(255,233,204,0.08)]">
      <div className="absolute inset-0">
        <Image
          src={siteImages.diningRoom.src}
          alt={siteImages.diningRoom.alt}
          fill
          priority
          className="ambient-pan object-cover object-[72%_46%] md:object-[70%_48%]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,198,144,0.18),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(9,6,4,0.46),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(9,6,4,0.84)_0%,rgba(9,6,4,0.66)_40%,rgba(9,6,4,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,6,4,0.26)_0%,rgba(9,6,4,0.03)_28%,rgba(9,6,4,0.54)_100%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-14 pt-28 sm:gap-12 sm:pt-32 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-12 lg:pb-18 lg:pt-36">
        <Reveal className="max-w-[34rem] lg:pb-10">
          <p className="editorial-kicker">Santa Monica · Mediterranean After Dark</p>
          <p className="mt-6 max-w-sm text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#d6bea3]">
            Reservation-first evenings · Terrace seating when the marine layer holds
          </p>
          <h1 className="mt-7 max-w-[8.8ch] font-display text-[clamp(2.8rem,8.4vw,5.9rem)] leading-[0.9] tracking-[-0.05em] text-[#fff1df]">
            A room for <span className="italic text-[#f0d6b3]">slow pours, sea air,</span> and
            the kind of dinner that keeps the night open.
          </h1>
          <p className="mt-7 max-w-lg text-[1rem] leading-relaxed text-[#ddd0c0] sm:text-[1.1rem]">
            Astera is built like a real service: aperitivo at the bar, fire-led seafood from the
            pass, and candlelit tables composed to feel indulgent without noise.
          </p>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap">
            <a
              href={contactDetails.reservationsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClassName("primary", "w-full rounded-[1.15rem] sm:w-auto")}
            >
              Reserve The Table
            </a>
            <Link
              href="/menu"
              className={buttonClassName("secondaryInverse", "w-full rounded-[1.15rem] sm:w-auto")}
            >
              Read The Dinner Menu
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm uppercase tracking-[0.22em] text-[#d9c8b5] sm:mt-10">
            <span className="luxury-divider max-w-14" />
            Hospitality first, image-led, and paced for a long evening.
          </div>
        </Reveal>

        <div className="relative h-[18rem] sm:h-[22rem] md:h-[25rem] lg:h-[37rem] xl:h-[39rem]">
          <Reveal delay={100} className="absolute right-0 top-3 z-20 w-[76%] sm:w-[72%] lg:w-[70%] hero-drift">
            <InteractivePanel className="rounded-[2.2rem]">
              <figure className="image-shell rounded-[2.2rem]">
                <Image
                  src={siteImages.heroTableWine.src}
                  alt={siteImages.heroTableWine.alt}
                  width={1800}
                  height={2400}
                  className="h-[17rem] w-full object-cover object-[center_40%] sm:h-[21rem] md:h-[24rem] lg:h-[34.5rem] xl:h-[37rem]"
                />
              </figure>
            </InteractivePanel>
          </Reveal>

          <Reveal
            delay={220}
            className="absolute bottom-0 left-0 z-30 w-[50%] sm:w-[45%] lg:w-[41%] hero-drift-delayed"
          >
            <InteractivePanel className="rounded-[1.8rem]">
              <figure className="image-shell rounded-[1.8rem]">
                <Image
                  src={siteImages.featuredPasta.src}
                  alt={siteImages.featuredPasta.alt}
                  width={1800}
                  height={1200}
                  className="h-[8.4rem] w-full object-cover object-[center_56%] sm:h-[10.5rem] md:h-[12rem] lg:h-[13.4rem]"
                />
              </figure>
            </InteractivePanel>
          </Reveal>
        </div>
      </div>

      <Reveal delay={220} className="relative mx-auto max-w-7xl px-6 pb-14 lg:pb-18">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceMoments.map((moment, index) => (
            <article
              key={moment.label}
              className={`rounded-[1.75rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(15,11,8,0.46)] px-5 py-6 backdrop-blur-md ${
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
