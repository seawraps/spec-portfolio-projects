import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { siteImages, storyHighlights } from "@/lib/data";

export function StorySection() {
  return (
    <section className="section-dark py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="grid gap-5 sm:grid-cols-[0.72fr_0.28fr] lg:gap-6">
          <div className="image-shell rounded-[2rem]">
            <Image
              src={siteImages.storyChef.src}
              alt={siteImages.storyChef.alt}
              width={1800}
              height={2700}
              className="h-[26rem] w-full object-cover sm:h-[34rem]"
            />
          </div>
          <div className="space-y-5 sm:pt-20">
            <div className="image-shell rounded-[1.6rem]">
              <Image
                src={siteImages.wineToast.src}
                alt={siteImages.wineToast.alt}
                width={1800}
                height={1200}
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="rounded-[1.6rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.03)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d1a364]">
                Since 2022
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#d9c8b5]">
                Built as a neighborhood room with destination-level cooking and pacing.
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Our Story"
            title="Hospitality that begins in the kitchen and ends at the table"
            description="Astera was imagined as a Santa Monica dining room where fire-led Mediterranean cooking meets soft light, attentive choreography, and an easy sense of occasion."
            theme="dark"
          />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d9c8b5]">
            The menu stays close to the coast, but the experience is broader than the plate:
            polished service, a strong aperitivo ritual, and a room that encourages guests to stay
            longer than they planned.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {storyHighlights.map((highlight) => (
              <li
                key={highlight.title}
                className="rounded-[1.7rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.03)] p-5"
              >
                <h3 className="font-display text-2xl text-[#f6ecdf]">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#d0bea9]">
                  {highlight.description}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[#f1ddbf] underline decoration-[#d1a364] underline-offset-8"
          >
            Learn More About Astera
          </Link>
        </div>
      </div>
    </section>
  );
}
