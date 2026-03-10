import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MenuCategory } from "@/components/menu/menu-category";
import { SectionHeading } from "@/components/section-heading";
import { menuCategories, menuHighlights, siteImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse Astera Coastal Bistro's dinner menu of opening plates, seafood, hearth mains, desserts, and cellar-forward cocktails.",
};

export default function MenuPage() {
  return (
    <div className="page-shell">
      <section className="section-dark pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl pt-8">
            <SectionHeading
              eyebrow="Menu"
              title="Dinner is paced like a real service, not a card of categories"
              description="The menu opens with bright starters and shellfish, moves into charcoal and pasta, and closes with cellar pours, citrus, and olive oil desserts."
              as="h1"
              theme="dark"
            />
            <p className="mt-7 text-lg leading-relaxed text-[#d4c3b0]">
              Pricing reflects the concept restaurant positioning. Menus would naturally evolve with
              fish availability, market produce, and seasonal drinks.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-[0.6fr_0.4fr]">
            <figure className="image-shell rounded-[2rem]">
              <Image
                src={siteImages.menuPlated.src}
                alt={siteImages.menuPlated.alt}
                width={1800}
                height={2700}
                className="h-[30rem] w-full object-cover"
                priority
              />
            </figure>
            <div className="space-y-5 sm:pt-20">
              <figure className="image-shell rounded-[1.7rem]">
                <Image
                  src={siteImages.cocktailService.src}
                  alt={siteImages.cocktailService.alt}
                  width={1800}
                  height={1260}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="rounded-[1.7rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.03)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d1a364]">
                  Dinner Format
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#d4c3b0]">
                  Best experienced over several shared starters, one pasta, and a main from the
                  hearth with the bar involved early.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <nav
            aria-label="Menu categories"
            className="flex flex-wrap gap-3 rounded-[1.8rem] border border-[#d8c4b0] bg-[rgba(255,255,255,0.6)] p-3"
          >
            {menuCategories.map((category) => (
              <Link
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-[#c8aa8b] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6d4c34] transition-colors hover:border-[#9a6435] hover:text-[#9a6435]"
              >
                {category.title}
              </Link>
            ))}
          </nav>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {menuHighlights.map((highlight) => (
              <article key={highlight.title} className="surface-card rounded-[1.9rem] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a6435]">
                  {highlight.eyebrow}
                </p>
                <h2 className="mt-4 font-display text-[2rem] leading-none text-[#201511]">
                  {highlight.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#5b4538]">
                  {highlight.description}
                </p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#8d5d35]">
                  {highlight.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-6">
            {menuCategories.map((category) => (
              <MenuCategory key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
