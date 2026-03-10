import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { Reveal } from "@/components/ui/reveal";
import { siteImages, storyHighlights } from "@/lib/data";

export function StorySection() {
  return (
    <section className="section-dark py-18 md:py-22 lg:py-26">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 xl:grid-cols-[1.06fr_0.94fr] xl:items-center">
        <div className="space-y-6">
          <div className="relative">
            <Reveal>
              <InteractivePanel className="rounded-[2.4rem]">
                <figure className="image-shell rounded-[2.4rem]">
                  <Image
                    src={siteImages.diningRoom.src}
                    alt={siteImages.diningRoom.alt}
                    width={1800}
                    height={1200}
                    className="h-[25rem] w-full object-cover sm:h-[31rem] lg:h-[38rem]"
                  />
                </figure>
              </InteractivePanel>
            </Reveal>

            <Reveal
              delay={180}
              className="mt-4 max-w-[15rem] rounded-[1.5rem] border border-[rgba(255,233,204,0.14)] bg-[rgba(10,7,5,0.74)] p-5 shadow-[0_24px_70px_-34px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:absolute sm:bottom-5 sm:left-5 sm:mt-0"
            >
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#d8af79]">
                Interior Mood
              </p>
              <p className="mt-3 font-display text-[1.7rem] leading-[0.94] text-[#f7ead7]">
                The room is tuned to move from glow to hush as the night deepens.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-[0.62fr_0.38fr]">
            <Reveal delay={90}>
              <InteractivePanel className="rounded-[2rem]">
                <figure className="image-shell rounded-[2rem]">
                  <Image
                    src={siteImages.storyChef.src}
                    alt={siteImages.storyChef.alt}
                    width={1800}
                    height={2700}
                    className="h-[22rem] w-full object-cover"
                  />
                </figure>
              </InteractivePanel>
            </Reveal>

            <Reveal delay={160} className="space-y-5">
              <InteractivePanel className="rounded-[1.7rem]">
                <figure className="image-shell rounded-[1.7rem]">
                  <Image
                    src={siteImages.wineToast.src}
                    alt={siteImages.wineToast.alt}
                    width={1800}
                    height={1200}
                    className="h-48 w-full object-cover"
                  />
                </figure>
              </InteractivePanel>

              <div className="rounded-[1.7rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.04)] p-5">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#d8af79]">
                  Since 2022
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#d4c2ad]">
                  Imagined as a harbor dining room where destination-level cooking still feels easy
                  enough for a second reservation the same week.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="Hospitality that starts in the kitchen, then expands into the room around it"
              description="Astera was designed as a restaurant first, not a moodboard: fire-led cooking, polished choreography, and a room that feels more magnetic as the service settles in."
              theme="dark"
            />
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d1bfaa]">
              The menu stays close to the coast, but the experience is broader than the plate. The
              bar has its own ritual, the lighting softens the longer you stay, and every detail is
              calibrated for appetite rather than trend language.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {storyHighlights.map((highlight, index) => (
              <Reveal key={highlight.title} delay={120 + index * 70}>
                <article className="rounded-[1.8rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.03)] p-6">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#d6a66b]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-[2.15rem] leading-[0.92] text-[#f6e8d6]">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#d0bea8]">
                    {highlight.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <Link
              href="/about"
              className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.22em] text-[#f1ddbf] underline decoration-[#d1a364] underline-offset-8"
            >
              Read the full restaurant story
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
