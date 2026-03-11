import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { eveningMoments } from "@/lib/experience-data";
import { siteImages } from "@/lib/data";

export function StorySection() {
  return (
    <section className="section-shell px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[96rem]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Reveal>
              <p className="eyebrow">Tonight&apos;s Mood</p>
              <h2 className="mt-5 max-w-xl font-display text-[clamp(3.5rem,7vw,5.9rem)] leading-[0.88] tracking-[-0.055em] text-[#fff0db]">
                The evening moves in deliberate chapters.
              </h2>
              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-[#cfbda8] sm:text-[1.08rem]">
                Instead of stacking interchangeable content blocks, the page opens like service
                itself: arrival, aperitivo, dinner, and the quieter pull of the last seating.
              </p>
            </Reveal>

            <div className="mt-10">
              {eveningMoments.map((moment, index) => (
                <Reveal key={moment.label} delay={index * 80}>
                  <article className="border-t border-[rgba(233,209,181,0.1)] py-5">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#d7aa75]">
                      {moment.label}
                    </p>
                    <h3 className="mt-3 font-display text-[2rem] leading-[0.94] tracking-[-0.04em] text-[#fff1df] sm:text-[2.5rem]">
                      {moment.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#ccb8a1] sm:text-base">
                      {moment.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={280}>
              <Link href="/about" className="editorial-link mt-4">
                Read The House Story
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
            <Reveal className="sm:row-span-2">
              <figure className="image-frame h-full rounded-[1.9rem]">
                <Image
                  src={siteImages.diningRoom.src}
                  alt={siteImages.diningRoom.alt}
                  width={1800}
                  height={2400}
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
                  height={2400}
                  className="h-[18rem] w-full object-cover sm:h-[21rem]"
                />
              </figure>
            </Reveal>

            <Reveal delay={200} className="frame-panel rounded-[1.5rem] p-5 sm:p-6">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#d7aa75]">
                Service Note
              </p>
              <p className="mt-3 font-display text-[2rem] leading-[0.94] tracking-[-0.04em] text-[#fff1df]">
                Hospitality here stays poised rather than busy.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#cfbda8]">
                Copy stays spare, spacing breathes, and the imagery gets room to dominate without
                losing legibility.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
