import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MenuCategory } from "@/components/menu/menu-category";
import { SectionHeading } from "@/components/section-heading";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { Reveal } from "@/components/ui/reveal";
import { menuCategories, menuHighlights, siteImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse Astera Coastal Bistro's dinner menu of opening plates, seafood, hearth mains, desserts, and cellar-forward cocktails.",
};

export default function MenuPage() {
  return (
    <div className="page-shell">
      <section className="section-dark pb-18 md:pb-22 lg:pb-26">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr] xl:items-end">
            <Reveal className="max-w-3xl pt-6">
              <SectionHeading
                eyebrow="Dinner Menu"
                title="A dinner menu paced like service, not sorted like a brochure"
                description="The sequence begins with chilled plates and shellfish, moves through pasta and fire, then closes with citrus, olive oil desserts, and a cellar designed for long nights."
                as="h1"
                theme="dark"
              />
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#d4c3b0]">
                Pricing reflects the concept restaurant positioning. Menus would evolve with fish
                availability, market produce, and what the bar wants to pour that night.
              </p>

              <div className="mt-10 flex items-center gap-4 text-sm uppercase tracking-[0.22em] text-[#d8c6b2]">
                <span className="luxury-divider max-w-16" />
                Read it like a night out: first round, middle of dinner, final pour.
              </div>
            </Reveal>

            <div className="relative h-[30rem] sm:h-[36rem] xl:h-[42rem]">
              <Reveal className="absolute right-0 top-0 z-20 w-[72%] hero-drift">
                <InteractivePanel className="rounded-[2.2rem]">
                  <figure className="image-shell rounded-[2.2rem]">
                    <Image
                      src={siteImages.menuPlated.src}
                      alt={siteImages.menuPlated.alt}
                      width={1800}
                      height={2700}
                      className="h-[22rem] w-full object-cover sm:h-[30rem] xl:h-[37rem]"
                      priority
                    />
                  </figure>
                </InteractivePanel>
              </Reveal>

              <Reveal delay={140} className="absolute bottom-0 left-0 z-30 w-[44%] hero-drift-delayed">
                <InteractivePanel className="rounded-[1.9rem]">
                  <figure className="image-shell rounded-[1.9rem]">
                    <Image
                      src={siteImages.cocktailService.src}
                      alt={siteImages.cocktailService.alt}
                      width={1800}
                      height={1260}
                      className="h-[14rem] w-full object-cover sm:h-[17rem] xl:h-[19rem]"
                    />
                  </figure>
                </InteractivePanel>
              </Reveal>

              <Reveal
                delay={240}
                className="absolute left-[10%] top-[8%] z-40 max-w-[16rem] rounded-[1.7rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(12,8,6,0.76)] p-5 text-[#f6ecdf] shadow-[0_24px_70px_-34px_rgba(0,0,0,0.82)] backdrop-blur-xl"
              >
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#d8af79]">
                  Format
                </p>
                <p className="mt-3 text-base leading-relaxed">
                  Best experienced over several shared starters, one pasta, one fire-led main, and
                  a bar round involved early.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {menuHighlights.map((highlight, index) => (
              <Reveal key={highlight.title} delay={120 + index * 70}>
                <article className="rounded-[1.8rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.04)] p-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#d8af79]">
                    {highlight.eyebrow}
                  </p>
                  <h2 className="mt-4 font-display text-[2.15rem] leading-[0.92] text-[#f8efe4]">
                    {highlight.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[#d0bea8]">
                    {highlight.description}
                  </p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#f1ddbf]">
                    {highlight.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 xl:grid-cols-[0.34fr_0.66fr] xl:items-start">
          <Reveal>
            <div className="rounded-[2rem] border border-[#d7c2af] bg-[rgba(255,255,255,0.46)] p-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#9a6435]">
                Dinner Map
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#5b4538]">
                Move through the menu by appetite rather than category. Each course block includes
                its own rhythm and pairing note.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <nav
              aria-label="Menu categories"
              className="flex flex-wrap gap-3 rounded-[2rem] border border-[#d8c4b0] bg-[rgba(255,255,255,0.6)] p-3"
            >
              {menuCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`#${category.id}`}
                  className="rounded-full border border-[#c8aa8b] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6d4c34] transition-all hover:-translate-y-0.5 hover:border-[#9a6435] hover:text-[#9a6435]"
                >
                  {category.title}
                </Link>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      <section className="section-dark py-18 md:py-22 lg:py-26">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-8 lg:space-y-10">
            {menuCategories.map((category, index) => (
              <MenuCategory key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
