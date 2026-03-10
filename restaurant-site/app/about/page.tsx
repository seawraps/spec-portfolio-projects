import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { buttonClassName } from "@/components/ui/button-styles";
import { GallerySection } from "@/components/sections/gallery-section";
import { SectionHeading } from "@/components/section-heading";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { Reveal } from "@/components/ui/reveal";
import { pressMentions, siteImages, storyHighlights } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Astera Coastal Bistro's culinary point of view, hospitality style, and the atmosphere behind its Mediterranean dining experience.",
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="section-dark pb-18 md:pb-22 lg:pb-26">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-end">
          <Reveal className="max-w-3xl pt-6">
            <SectionHeading
              eyebrow="About Astera"
              title="A restaurant concept built around appetite, atmosphere, and editorial composure"
              description="Astera imagines what a premium Santa Monica dining room should feel like: polished but sensual, image-led but believable, and rooted in genuine hospitality rather than trend language."
              as="h1"
              theme="dark"
            />
            <p className="mt-8 text-lg leading-relaxed text-[#d4c3b0]">
              The room takes cues from coastal Europe and contemporary California. Menus are
              seasonal, the service is warm without becoming casual, and the visual identity leans
              toward restaurant culture rather than generic lifestyle branding.
            </p>
          </Reveal>

          <div className="relative h-[30rem] sm:h-[38rem] xl:h-[44rem]">
            <Reveal className="absolute right-0 top-0 z-20 w-[72%] hero-drift">
              <InteractivePanel className="rounded-[2.2rem]">
                <figure className="image-shell rounded-[2.2rem]">
                  <Image
                    src={siteImages.heroOccasion.src}
                    alt={siteImages.heroOccasion.alt}
                    width={1800}
                    height={2400}
                    className="h-[23rem] w-full object-cover sm:h-[31rem] xl:h-[38rem]"
                    priority
                  />
                </figure>
              </InteractivePanel>
            </Reveal>

            <Reveal delay={140} className="absolute bottom-0 left-0 z-30 w-[42%] hero-drift-delayed">
              <InteractivePanel className="rounded-[1.8rem]">
                <figure className="image-shell rounded-[1.8rem]">
                  <Image
                    src={siteImages.wineToast.src}
                    alt={siteImages.wineToast.alt}
                    width={1800}
                    height={1200}
                    className="h-[13rem] w-full object-cover sm:h-[17rem]"
                  />
                </figure>
              </InteractivePanel>
            </Reveal>

            <Reveal
              delay={220}
              className="absolute left-[9%] top-[8%] z-40 max-w-[15rem] rounded-[1.7rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(11,8,6,0.78)] p-5 text-[#f6ecdf] shadow-[0_24px_70px_-34px_rgba(0,0,0,0.82)] backdrop-blur-xl"
            >
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#d8af79]">
                Concept Notes
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#d4c3b0]">
                A portfolio project that treats the restaurant as a full hospitality brand, not a
                mock landing page with nicer photos.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-light py-18 md:py-22 lg:py-26">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 xl:grid-cols-[1fr_0.92fr] xl:items-center">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="How It Feels"
                title="The restaurant is designed as an evening that unfolds in layers"
                description="Aperitivo energy at the bar gives way to low-lit tables, seafood paced with confidence, and a room that gets more compelling after sunset."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {storyHighlights.map((highlight, index) => (
                <Reveal key={highlight.title} delay={100 + index * 70}>
                  <article className="surface-card rounded-[1.9rem] p-6">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#9a6435]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-4 font-display text-[2.15rem] leading-[0.92] text-[#201511]">
                      {highlight.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-[#5b4538]">
                      {highlight.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal className="sm:col-span-2">
              <InteractivePanel className="rounded-[2.2rem]">
                <figure className="image-shell rounded-[2.2rem]">
                  <Image
                    src={siteImages.diningRoom.src}
                    alt={siteImages.diningRoom.alt}
                    width={1800}
                    height={1200}
                    className="h-[18rem] w-full object-cover sm:h-[24rem]"
                  />
                </figure>
              </InteractivePanel>
            </Reveal>
            <Reveal delay={120}>
              <InteractivePanel className="rounded-[1.9rem]">
                <figure className="image-shell rounded-[1.9rem]">
                  <Image
                    src={siteImages.storyChef.src}
                    alt={siteImages.storyChef.alt}
                    width={1800}
                    height={2700}
                    className="h-[24rem] w-full object-cover"
                  />
                </figure>
              </InteractivePanel>
            </Reveal>
            <Reveal delay={180}>
              <InteractivePanel className="rounded-[1.9rem]">
                <figure className="image-shell rounded-[1.9rem]">
                  <Image
                    src={siteImages.cocktailService.src}
                    alt={siteImages.cocktailService.alt}
                    width={1800}
                    height={1260}
                    className="h-[24rem] w-full object-cover"
                  />
                </figure>
              </InteractivePanel>
            </Reveal>
          </div>
        </div>
      </section>

      <GallerySection
        title="The visual language leans toward cinematic hospitality"
        description="Real photography, low-contrast interiors, and appetite-led imagery keep the site grounded in restaurant culture rather than polished portfolio sameness."
        theme="dark"
      />

      <section className="section-light py-18 md:py-22 lg:py-26">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Press"
              title="Coverage the brand could credibly grow into"
              description="The language stays aspirational but believable, supporting the photography-driven art direction without losing the hospitality core."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pressMentions.map((mention, index) => (
              <Reveal key={mention.source} delay={100 + index * 70}>
                <article className="surface-card rounded-[1.9rem] p-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#9a6435]">
                    {mention.source}
                  </p>
                  <h3 className="mt-4 font-display text-[2rem] leading-[0.92] text-[#201511]">
                    {mention.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#5b4538]">{mention.excerpt}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/menu" className={buttonClassName("primary")}>
                Explore Our Menu
              </Link>
              <Link href="/contact" className={buttonClassName("secondary")}>
                Plan A Visit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
