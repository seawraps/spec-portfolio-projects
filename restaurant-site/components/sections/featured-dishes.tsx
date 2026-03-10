import Image from "next/image";
import Link from "next/link";
import { featuredDishes } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function FeaturedDishes() {
  return (
    <section className="section-light py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHeading
            eyebrow="From The Pass"
            title="Signature plates with appetite, smoke, and restraint"
            description="The menu moves with market produce and the fish board, but these are the dishes guests ask about before they sit down."
          />
          <Link
            href="/menu"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7f5634] underline decoration-[#b98956] underline-offset-8"
          >
            View Full Menu
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.95fr_0.95fr]">
          {featuredDishes.map((dish, index) => (
            <article
              key={dish.name}
              className={`surface-card overflow-hidden rounded-[2rem] ${
                index === 0 ? "lg:translate-y-4" : index === 2 ? "lg:translate-y-8" : ""
              }`}
            >
              <div className="overflow-hidden">
                <Image
                  src={dish.image.src}
                  alt={dish.image.alt}
                  width={1800}
                  height={1800}
                  className="h-72 w-full object-cover"
                />
              </div>
              <div className="space-y-4 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a6435]">
                  {dish.course}
                </p>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-[2rem] leading-none text-[#201511]">
                    {dish.name}
                  </h3>
                  <p className="pt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#8d5d35]">
                    {dish.price}
                  </p>
                </div>
                <p className="text-base leading-relaxed text-[#5b4538]">{dish.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
