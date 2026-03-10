import Image from "next/image";
import Link from "next/link";
import { featuredDishes } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { Reveal } from "@/components/ui/reveal";

export function FeaturedDishes() {
  const [signatureDish, ...supportingDishes] = featuredDishes;

  return (
    <section className="section-light py-18 md:py-22 lg:py-26">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 xl:grid-cols-[0.78fr_1.22fr]">
          <Reveal className="flex flex-col justify-between">
            <div>
              <SectionHeading
                eyebrow="From The Pass"
                title="Plates designed to feel generous, polished, and unmistakably dinner-first"
                description="The food never fights the room. It arrives with appetite, clarity, and enough visual restraint to stay elegant."
              />
              <p className="mt-8 max-w-md text-base leading-relaxed text-[#5c473a]">
                The menu is Mediterranean in instinct and California in pace: seafood, citrus,
                charcoal, olive oil, and a table built for sharing without clutter.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm uppercase tracking-[0.22em] text-[#7f5634]">
              <span className="luxury-divider max-w-16" />
              The dishes guests mention before they sit down
            </div>
          </Reveal>

          <div className="grid gap-6 xl:grid-cols-[1.06fr_0.94fr]">
            <Reveal delay={80}>
              <InteractivePanel className="h-full rounded-[2.4rem]">
                <article className="surface-card h-full overflow-hidden rounded-[2.4rem]">
                  <div className="overflow-hidden">
                    <Image
                      src={signatureDish.image.src}
                      alt={signatureDish.image.alt}
                      width={1800}
                      height={2400}
                      className="h-80 w-full object-cover lg:h-[28rem]"
                    />
                  </div>
                  <div className="space-y-4 p-8">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#98653a]">
                      Signature Plate · {signatureDish.course}
                    </p>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-[2.8rem] leading-[0.9] tracking-[-0.03em] text-[#201511]">
                        {signatureDish.name}
                      </h3>
                      <p className="pt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#8d5d35]">
                        {signatureDish.price}
                      </p>
                    </div>
                    <p className="max-w-xl text-lg leading-relaxed text-[#5b4538]">
                      {signatureDish.description}
                    </p>
                    <Link
                      href="/menu"
                      className="inline-flex text-sm font-semibold uppercase tracking-[0.22em] text-[#7f5634] underline decoration-[#b98956] underline-offset-8"
                    >
                      Explore the full dinner format
                    </Link>
                  </div>
                </article>
              </InteractivePanel>
            </Reveal>

            <div className="grid gap-6">
              {supportingDishes.map((dish, index) => (
                <Reveal key={dish.name} delay={140 + index * 90}>
                  <InteractivePanel className="rounded-[2.1rem]">
                    <article className="surface-card overflow-hidden rounded-[2.1rem]">
                      <div className="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
                        <div className="overflow-hidden">
                          <Image
                            src={dish.image.src}
                            alt={dish.image.alt}
                            width={1800}
                            height={1800}
                            className="h-64 w-full object-cover md:h-full"
                          />
                        </div>
                        <div className="space-y-4 p-7">
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#98653a]">
                            {dish.course}
                          </p>
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="font-display text-[2.15rem] leading-[0.92] text-[#201511]">
                              {dish.name}
                            </h3>
                            <p className="pt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#8d5d35]">
                              {dish.price}
                            </p>
                          </div>
                          <p className="text-base leading-relaxed text-[#5b4538]">
                            {dish.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </InteractivePanel>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
