import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { aboutStats, artistPoints, company } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Mark Wu",
  description:
    "Mark Wu is the artist behind Wu Wraps, the Pacific Northwest's most trusted name in vinyl. Known across Avants, Tesla, Mini and classic car communities.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Mark Wu"
        title="No one outwraps him."
        description="If you are a car enthusiast in the PNW and do not know Wu Wraps, you are living under a rock. Here is why."
      />

      <section className="bg-[var(--fog)] py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal>
            <div className="space-y-6 text-[1.02rem] leading-8 text-[var(--slate)]">
              <p>
                Mark Wu has been laying vinyl in the Renton and greater Seattle area since{" "}
                {company.foundedYear}, long before color change wraps were a trend. He grew up
                on comics and graffiti, and the mural on the studio wall is his own work. That
                is the point: Mark is not a vinyl installer who happens to be careful. He is an
                artist whose medium happens to be film.
              </p>
              <p>
                The name travels. He is known across the Avants community, the local Tesla and
                Mini Cooper groups, and the classic car crowd. When shops like Imperial Tint
                and Accutint have vinyl work to place, it lands on Mark's table, because
                everyone in the business knows no one can outwrap him.
              </p>
              <p>
                The specialty runs deeper than color changes: interiors, rims and body kits,
                tail light and headlight tinting, custom racing stripes, and the highly
                detailed chrome deletes he is famous for. If it can be wrapped, he has wrapped
                it, and probably on a car worth more than the shop.
              </p>
              <p>
                Now there is a new, larger facility, which added paint protection film and
                window tint to the lineup. The studio stays appointment only, one build at a
                time. Pricing is competitive, and you are getting the best work in town, so it
                tends to be one hell of a deal. If you want your project wrapped right, call
                Mark.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl bg-[var(--bone)]">
              <figure className="photo-frame rounded-none">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/gallery/ford-bronco-raptor.jpg"
                    alt="Ford Bronco Raptor with blacked out accents inside the Wu Wraps studio"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <span className="photo-tone" aria-hidden="true" />
                </div>
              </figure>
              <dl className="divide-y divide-[var(--line-lighter)]">
                {aboutStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between gap-4 px-6 py-4"
                  >
                    <dt className="label text-[0.62rem] text-[var(--slate)]">{stat.label}</dt>
                    <dd className="display text-right text-[0.95rem] text-[var(--ink)]">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="on-dark py-20 lg:py-28">
        <Container>
          <Reveal>
            <p className="eyebrow text-[var(--mist)]">The standard</p>
            <h2 className="display mt-5 max-w-3xl text-[2.4rem] text-[var(--bone)] sm:text-[3.2rem]">
              Craftsmanship you cannot fake.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {artistPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 80}>
                <div className="border-t-2 border-[var(--cedar)] pt-5">
                  <h3 className="display text-[1.15rem] text-[var(--bone)]">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--mist)]">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
