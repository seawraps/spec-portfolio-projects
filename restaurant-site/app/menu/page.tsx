import type { Metadata } from "next";
import Link from "next/link";
import { MenuCategory } from "@/components/menu/menu-category";
import { SectionHeading } from "@/components/section-heading";
import { menuCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse Astera Coastal Bistro's menu featuring Mediterranean small plates, seafood, wood-fired mains, desserts, and signature cocktails.",
};

export default function MenuPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="pb-12 md:pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Menu"
            title="Seasonal Mediterranean dining, from mezze to fire-charred mains"
            description="Menus shift with availability and market produce. Prices shown are current sample pricing for this concept project."
            as="h1"
          />

          <nav
            aria-label="Menu categories"
            className="mt-8 flex flex-wrap gap-2 rounded-2xl border border-stone-200 bg-stone-50/80 p-3"
          >
            {menuCategories.map((category) => (
              <Link
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-stone-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone-700 transition-colors hover:border-amber-600 hover:text-amber-700"
              >
                {category.title}
              </Link>
            ))}
          </nav>

          <div className="mt-10 space-y-6">
            {menuCategories.map((category) => (
              <MenuCategory key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
