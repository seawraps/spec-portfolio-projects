import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { buttonClassName } from "@/components/ui/button-styles";
import { GallerySection } from "@/components/sections/gallery-section";
import { SectionHeading } from "@/components/section-heading";
import { pressMentions, siteImages, storyHighlights } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Astera Coastal Bistro's culinary point of view, hospitality style, and the atmosphere behind its Mediterranean dining experience.",
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="section-dark pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-2xl pt-8">
            <SectionHeading
              eyebrow="About Astera"
              title="A restaurant concept built around appetite, atmosphere, and composure"
              description="Astera imagines what a premium Santa Monica dining room should feel like: polished but sensual, image-led but believable, and rooted in genuine hospitality rather than trend language."
              as="h1"
              theme="dark"
            />
            <p className="mt-8 text-lg leading-relaxed text-[#d4c3b0]">
              The room takes cues from coastal Europe and contemporary California. Menus are
              seasonal, the service is warm without being casual, and the visual identity leans
              toward editorial food culture rather than generic lifestyle branding.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-[0.58fr_0.42fr]">
            <figure className="image-shell rounded-[2rem]">
              <Image
                src={siteImages.heroOccasion.src}
                alt={siteImages.heroOccasion.alt}
                width={1800}
                height={2400}
                className="h-[28rem] w-full object-cover sm:h-[36rem]"
                priority
              />
            </figure>
            <div className="space-y-5 sm:pt-16">
              <figure className="image-shell rounded-[1.7rem]">
                <Image
                  src={siteImages.wineToast.src}
                  alt={siteImages.wineToast.alt}
                  width={1800}
                  height={1200}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="rounded-[1.7rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.04)] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d1a364]">
                  Concept Notes
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#d4c3b0]">
                  This portfolio project keeps the restaurant fictional while pushing the visual and
                  experiential cues toward a real hospitality brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="How It Feels"
              title="The restaurant is designed as an evening that unfolds in layers"
              description="Aperitivo energy at the bar gives way to low-lit tables, seafood paced with confidence, and a room that gets more compelling after sunset."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {storyHighlights.map((highlight) => (
                <article key={highlight.title} className="surface-card rounded-[1.8rem] p-6">
                  <h2 className="font-display text-[2rem] leading-none text-[#201511]">
                    {highlight.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[#5b4538]">
                    {highlight.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <figure className="image-shell rounded-[2rem] sm:col-span-2">
              <Image
                src={siteImages.diningRoom.src}
                alt={siteImages.diningRoom.alt}
                width={1800}
                height={1200}
                className="h-[18rem] w-full object-cover sm:h-[24rem]"
              />
            </figure>
            <figure className="image-shell rounded-[1.8rem]">
              <Image
                src={siteImages.storyChef.src}
                alt={siteImages.storyChef.alt}
                width={1800}
                height={2700}
                className="h-[24rem] w-full object-cover"
              />
            </figure>
            <figure className="image-shell rounded-[1.8rem]">
              <Image
                src={siteImages.cocktailService.src}
                alt={siteImages.cocktailService.alt}
                width={1800}
                height={1260}
                className="h-[24rem] w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      <GallerySection
        title="The visual language leans toward editorial hospitality"
        description="Real photography, low-contrast interiors, and appetite-led imagery keep the site grounded in restaurant culture rather than generic portfolio aesthetics."
        theme="dark"
      />

      <section className="section-light py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Press"
            title="Coverage the brand could credibly grow into"
            description="The copy stays aspirational but believable, supporting the photography-driven art direction without slipping into cliché."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pressMentions.map((mention) => (
              <article key={mention.source} className="surface-card rounded-[1.9rem] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a6435]">
                  {mention.source}
                </p>
                <h3 className="mt-4 font-display text-[2rem] leading-none text-[#201511]">
                  {mention.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#5b4538]">{mention.excerpt}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/menu" className={buttonClassName("primary")}>
              Explore Our Menu
            </Link>
            <Link href="/contact" className={buttonClassName("secondary")}>
              Plan A Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
