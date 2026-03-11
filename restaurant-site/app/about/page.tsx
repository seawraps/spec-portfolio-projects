import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { housePrinciples } from "@/lib/experience-data";
import { pressMentions, siteImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Astera Coastal Bistro's culinary point of view, hospitality style, and the atmosphere behind its Mediterranean dining experience.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-shell relative overflow-hidden border-b border-[rgba(233,209,181,0.08)]">
        <div className="absolute inset-0">
          <Image
            src={siteImages.heroFeast.src}
            alt={siteImages.heroFeast.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,5,0.34)_0%,rgba(7,6,5,0.62)_36%,rgba(7,6,5,0.92)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-[96rem] px-5 pb-14 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pb-18 lg:pt-36">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">About Astera</p>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(4rem,10vw,7.6rem)] leading-[0.84] tracking-[-0.065em] text-[#fff0db]">
              A restaurant concept shaped by atmosphere, appetite, and poised service.
            </h1>
            <p className="mt-6 max-w-2xl text-[1rem] leading-relaxed text-[#dccab6] sm:text-[1.12rem]">
              Astera was designed to feel like a real hospitality brand with ritual and restraint,
              not a general-purpose portfolio template wearing restaurant photos. Every page is
              meant to behave like part of the evening.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-shell px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[96rem] grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Reveal>
              <p className="eyebrow">House Principles</p>
              <h2 className="mt-5 max-w-lg font-display text-[clamp(3.1rem,6.4vw,5.2rem)] leading-[0.88] tracking-[-0.055em] text-[#fff0db]">
                The brand is built around hospitality logic rather than business-template rhythm.
              </h2>
            </Reveal>

            <div className="mt-8">
              {housePrinciples.map((principle, index) => (
                <Reveal key={principle.title} delay={index * 80}>
                  <article className="border-t border-[rgba(233,209,181,0.1)] py-5">
                    <h3 className="font-display text-[2rem] leading-[0.94] tracking-[-0.04em] text-[#fff1df]">
                      {principle.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#cfbda8] sm:text-base">
                      {principle.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-[1.08fr_0.92fr]">
            <Reveal className="sm:row-span-2">
              <figure className="image-frame rounded-[1.9rem]">
                <Image
                  src={siteImages.diningRoom.src}
                  alt={siteImages.diningRoom.alt}
                  width={2000}
                  height={2600}
                  className="h-[24rem] w-full object-cover sm:h-[38rem] lg:h-[44rem]"
                />
              </figure>
            </Reveal>

            <Reveal delay={120}>
              <figure className="image-frame rounded-[1.5rem]">
                <Image
                  src={siteImages.storyChef.src}
                  alt={siteImages.storyChef.alt}
                  width={1800}
                  height={2000}
                  className="h-[18rem] w-full object-cover sm:h-[20rem]"
                />
              </figure>
            </Reveal>

            <Reveal delay={200} className="frame-panel rounded-[1.5rem] p-6">
              <p className="eyebrow">Creative Direction</p>
              <p className="mt-4 text-sm leading-relaxed text-[#cfbda8] sm:text-base">
                Typography leans editorial, navigation behaves like a host stand, and each section
                gives the photography enough room to carry emotion before copy explains it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell section-light px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[96rem]">
          <Reveal>
            <p className="eyebrow !text-[#9f6b3d]">Press Read</p>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(3.1rem,6.5vw,5.5rem)] leading-[0.88] tracking-[-0.055em] text-[#21150f]">
              Coverage the brand could plausibly earn because the identity feels restaurant-led.
            </h2>
          </Reveal>

          <div className="mt-10 divide-y divide-[#d7c2af] border-y border-[#d7c2af]">
            {pressMentions.map((mention, index) => (
              <Reveal key={mention.source} delay={index * 80}>
                <article className="grid gap-4 py-6 lg:grid-cols-[0.3fr_0.7fr] lg:items-start">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#9f6b3d]">
                    {mention.source}
                  </p>
                  <div>
                    <h3 className="font-display text-[2rem] leading-[0.94] tracking-[-0.04em] text-[#241812] sm:text-[2.6rem]">
                      {mention.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#5b4538] sm:text-base">
                      {mention.excerpt}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/menu" className="editorial-link !text-[#7e502f]">
                Explore The Menu
              </Link>
              <Link href="/contact" className="editorial-link !text-[#7e502f]">
                Plan A Visit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
