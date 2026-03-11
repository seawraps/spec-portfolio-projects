import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { siteImages } from "@/lib/data";

export function GallerySection() {
  return (
    <section className="section-shell px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[96rem]">
        <div className="grid gap-6 lg:grid-cols-[1.14fr_0.86fr] lg:items-start">
          <Reveal>
            <figure className="image-frame rounded-[2.1rem]">
              <Image
                src={siteImages.diningRoom.src}
                alt={siteImages.diningRoom.alt}
                width={2200}
                height={1400}
                className="h-[24rem] w-full object-cover sm:h-[34rem] lg:h-[40rem]"
              />
            </figure>
          </Reveal>

          <div className="grid gap-6">
            <Reveal className="frame-panel rounded-[1.8rem] p-6 sm:p-7">
              <p className="eyebrow">The Room</p>
              <h2 className="mt-5 font-display text-[clamp(3rem,6vw,5rem)] leading-[0.88] tracking-[-0.05em] text-[#fff0db]">
                Spacious when it needs drama, intimate when dinner finally lands.
              </h2>
              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-[#cfbda8] sm:text-[1.08rem]">
                Warm darkness, linen surfaces, brass reflections, and enough breathing room around
                the imagery keep the site from feeling like a templated interface dressed in better
                colors.
              </p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal delay={120}>
                <figure className="image-frame rounded-[1.5rem]">
                  <Image
                    src={siteImages.terraceNight.src}
                    alt={siteImages.terraceNight.alt}
                    width={1800}
                    height={1600}
                    className="h-[18rem] w-full object-cover sm:h-[22rem]"
                  />
                </figure>
              </Reveal>

              <Reveal delay={200}>
                <figure className="image-frame rounded-[1.5rem]">
                  <Image
                    src={siteImages.wineToast.src}
                    alt={siteImages.wineToast.alt}
                    width={1800}
                    height={1600}
                    className="h-[18rem] w-full object-cover sm:h-[22rem]"
                  />
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
