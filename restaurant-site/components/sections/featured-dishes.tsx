import Image from "next/image";
import Link from "next/link";
import { featuredDishes } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function FeaturedDishes() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Featured"
            title="Signature plates from tonight’s kitchen"
            description="A rotating selection of guest favorites and seasonal highlights from our open-fire menu."
          />
          <Link
            href="/menu"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-stone-700 underline decoration-amber-600 underline-offset-4 transition-colors hover:text-amber-700"
          >
            Full Menu
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredDishes.map((dish) => (
            <article
              key={dish.name}
              className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-50/70 shadow-sm"
            >
              <Image
                src={dish.image}
                alt={dish.alt}
                width={720}
                height={480}
                className="h-52 w-full object-cover"
              />
              <div className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl text-stone-900">{dish.name}</h3>
                  <p className="pt-1 text-sm font-semibold text-amber-700">{dish.price}</p>
                </div>
                <p className="text-sm leading-relaxed text-stone-600">{dish.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
