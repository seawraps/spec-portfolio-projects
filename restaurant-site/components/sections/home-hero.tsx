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
          className="ambient-pan object-cover object-[center_50%] md:object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,198,144,0.22),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.42),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(9,6,4,0.95)_0%,rgba(9,6,4,0.84)_44%,rgba(9,6,4,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,6,4,0.28)_0%,rgba(9,6,4,0.04)_26%,rgba(9,6,4,0.58)_100%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-6 pb-14 pt-28 sm:gap-10 sm:pt-32 lg:grid-cols-[0.86fr_1.14fr] lg:items-end lg:gap-12 lg:pb-18 lg:pt-36">
        <Reveal className="max-w-[38rem] lg:pb-6">
          <p className="editorial-kicker">Santa Monica · Mediterranean After Dark</p>
          <p className="mt-6 max-w-sm text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#d6bea3]">
            Reservation-first evenings · Terrace seating when the marine layer holds
          </p>
          <h1 className="mt-7 max-w-[9ch] font-display text-[clamp(3rem,13vw,7rem)] leading-[0.88] tracking-[-0.05em] text-[#fff1df]">
            A room for <span className="italic text-[#f0d6b3]">slow pours, sea air,</span> and
            the kind of dinner that keeps the night open.
          </h1>
          <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-[#d8c6b2] sm:text-xl">
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

        <div className="relative h-[16.5rem] sm:h-[21rem] md:h-[24rem] lg:h-[36rem] xl:h-[39rem]">
          <Reveal className="absolute left-[4%] top-[7%] z-10 hidden max-w-[14rem] rounded-[1.55rem] border border-[rgba(255,233,204,0.14)] bg-[rgba(14,10,8,0.72)] p-5 text-[#f5e7d6] shadow-[0_24px_70px_-34px_rgba(0,0,0,0.75)] backdrop-blur-xl md:block">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#d8af79]">
              Tonight at Astera
            </p>
            <p className="mt-3 font-display text-[2.05rem] leading-[0.94]">
              A bar-first arrival, then fire, then a second bottle.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#d1bea8]">
              Start with martinis and shellfish. Let the kitchen take it from there.
            </p>
          </Reveal>

          <Reveal delay={100} className="absolute right-0 top-0 z-20 w-[74%] sm:w-[70%] lg:w-[68%] hero-drift">
            <InteractivePanel className="rounded-[2.2rem]">
              <figure className="image-shell rounded-[2.2rem]">
                <Image
                  src={siteImages.heroTableWine.src}
                  alt={siteImages.heroTableWine.alt}
                  width={1800}
                  height={2400}
                  className="h-[16rem] w-full object-cover object-[center_38%] sm:h-[20rem] md:h-[23rem] lg:h-[33rem] xl:h-[36rem]"
                />
              </figure>
            </InteractivePanel>
          </Reveal>

          <Reveal delay={220} className="absolute bottom-0 left-0 z-30 w-[49%] sm:w-[43%] lg:w-[39%] hero-drift-delayed">
            <InteractivePanel className="rounded-[1.8rem]">
              <figure className="image-shell rounded-[1.8rem]">
                <Image
                  src={siteImages.featuredPasta.src}
                  alt={siteImages.featuredPasta.alt}
                  width={1800}
                  height={1200}
                  className="h-[7.6rem] w-full object-cover object-[center_58%] sm:h-[10rem] md:h-[12rem] lg:h-[13rem]"
                />
              </figure>
            </InteractivePanel>
          </Reveal>

          <Reveal
            delay={300}
            className="absolute bottom-[16%] left-[20%] z-30 hidden max-w-[13rem] rounded-[1.45rem] border border-[rgba(255,233,204,0.14)] bg-[rgba(11,8,6,0.72)] p-4 text-[#f4e7d4] shadow-[0_24px_70px_-34px_rgba(0,0,0,0.76)] backdrop-blur-xl lg:block"
          >
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#d8af79]">
              Service Note
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#f4e7d4]">
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
