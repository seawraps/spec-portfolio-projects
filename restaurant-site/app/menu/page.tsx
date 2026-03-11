import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { MenuCategory } from "@/components/menu/menu-category";
import { Reveal } from "@/components/ui/reveal";
import { menuCategories, siteImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse Astera Coastal Bistro's dinner menu of opening plates, seafood, hearth mains, desserts, and cellar-forward cocktails.",
};

export default function MenuPage() {
  return (
    <>
      <section className="section-shell relative overflow-hidden border-b border-[rgba(233,209,181,0.08)]">
        <div className="absolute inset-0">
          <Image
            src={siteImages.menuPlated.src}
            alt={siteImages.menuPlated.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_58%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,5,0.34)_0%,rgba(8,6,5,0.62)_38%,rgba(8,6,5,0.92)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-[96rem] px-5 pb-14 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pb-18 lg:pt-36">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <Reveal>
              <p className="eyebrow">Dinner Menu</p>
              <h1 className="mt-6 max-w-4xl font-display text-[clamp(4rem,10vw,7.6rem)] leading-[0.84] tracking-[-0.065em] text-[#fff0db]">
                Dinner chapters for a room that wants time around them.
              </h1>
              <p className="mt-6 max-w-2xl text-[1rem] leading-relaxed text-[#dccab6] sm:text-[1.12rem]">
                The menu is sequenced like service: brighter openings, a stronger middle, then
                desserts and cellar pours that extend the conversation without flattening the pace.
              </p>
            </Reveal>

            <Reveal delay={120} className="frame-panel rounded-[1.7rem] p-5 sm:p-6">
              <p className="eyebrow">How To Order</p>
              <p className="mt-4 text-sm leading-relaxed text-[#cfbda8] sm:text-base">
                Start with two opening plates and a cold bar round, add one pasta or harbor course,
                then let the table decide whether to lean into the hearth or finish lightly.
              </p>
              <Link href="/contact" className="editorial-link mt-6">
                Ask About Group Dining
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[96rem]">
          <Reveal>
            <nav aria-label="Menu chapters" className="border-y border-[rgba(233,209,181,0.1)] py-5">
              <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {menuCategories.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={`#${category.id}`}
                      className="block text-[#cfbda8] transition-colors duration-300 hover:text-[#fff1df]"
                    >
                      <p className="font-display text-[1.9rem] leading-[0.94] tracking-[-0.04em]">
                        {category.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        </div>
      </section>

      <section className="section-shell px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[96rem]">
          {menuCategories.map((category, index) => (
            <MenuCategory key={category.id} category={category} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
