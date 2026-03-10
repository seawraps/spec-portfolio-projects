import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { Reveal } from "@/components/ui/reveal";
import { menuHighlights } from "@/lib/data";

export function MenuHighlightsSection() {
  const [featureHighlight, ...supportingHighlights] = menuHighlights;

  return (
    <section className="section-dark py-18 md:py-22 lg:py-26">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Menu Highlights"
            title="Dinner is shaped in chapters, each one with its own pace and mood"
            description="Astera is structured around an actual evening out: a first drink, shared starters, a middle built on seafood and flame, and a finish that invites one more round."
            theme="dark"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
          <Reveal delay={80}>
            <InteractivePanel className="h-full rounded-[2.5rem]">
              <article className="relative h-full overflow-hidden rounded-[2.5rem] border border-[rgba(255,233,204,0.12)]">
                <Image
                  src={featureHighlight.image.src}
                  alt={featureHighlight.image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,6,4,0.18)_0%,rgba(9,6,4,0.88)_88%)]" />
                <div className="relative flex h-full min-h-[34rem] flex-col justify-end p-8 lg:p-10">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#f1ddbf]">
                    {featureHighlight.eyebrow}
                  </p>
                  <h3 className="mt-4 max-w-xl font-display text-[3.2rem] leading-[0.9] tracking-[-0.03em] text-[#fff2de]">
                    {featureHighlight.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#dbc8b1]">
                    {featureHighlight.description}
                  </p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#d8af79]">
                    {featureHighlight.detail}
                  </p>
                </div>
              </article>
            </InteractivePanel>
          </Reveal>

          <div className="grid gap-6">
            {supportingHighlights.map((highlight, index) => (
              <Reveal key={highlight.title} delay={140 + index * 90}>
                <InteractivePanel className="rounded-[2rem]">
                  <article className="surface-card-soft overflow-hidden rounded-[2rem]">
                    <div className="grid gap-0 md:grid-cols-[0.88fr_1.12fr]">
                      <div className="overflow-hidden">
                        <Image
                          src={highlight.image.src}
                          alt={highlight.image.alt}
                          width={1800}
                          height={1800}
                          className="h-64 w-full object-cover md:h-full"
                        />
                      </div>
                      <div className="p-7">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#d8af79]">
                          {highlight.eyebrow}
                        </p>
                        <h3 className="mt-4 font-display text-[2.2rem] leading-[0.92] text-[#f7ead7]">
                          {highlight.title}
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-[#d0bea8]">
                          {highlight.description}
                        </p>
                        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#f1ddbf]">
                          {highlight.detail}
                        </p>
                      </div>
                    </div>
                  </article>
                </InteractivePanel>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={220}>
          <div className="mt-10 flex items-center gap-4 text-sm uppercase tracking-[0.22em] text-[#d7c3ac]">
            <span className="luxury-divider max-w-16" />
            <Link href="/menu" className="text-[#f1ddbf] underline decoration-[#d1a364] underline-offset-8">
              Read the full dinner and bar menu
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
