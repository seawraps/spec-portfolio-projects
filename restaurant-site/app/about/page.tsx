import type { Metadata } from "next";
import Link from "next/link";
import { GallerySection } from "@/components/sections/gallery-section";
import { SectionHeading } from "@/components/section-heading";
import { pressMentions, restaurantName } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Astera Coastal Bistro, our Mediterranean cooking philosophy, culinary team, and hospitality approach.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Astera"
            title="A modern coastal bistro rooted in Mediterranean craft"
            description="Astera was built for guests who value flavorful food, thoughtful service, and spaces designed for conversation."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-stone-200 bg-stone-50/80 p-5">
              <h2 className="font-display text-2xl text-stone-900">Our Kitchen</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                We focus on fire-driven cooking, seasonal produce, and clean Mediterranean flavors
                that celebrate ingredients instead of hiding them.
              </p>
            </article>
            <article className="rounded-2xl border border-stone-200 bg-stone-50/80 p-5">
              <h2 className="font-display text-2xl text-stone-900">Our Team</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                From the bar to the pass, our team is trained to deliver detail-oriented service
                with genuine warmth and consistency every night.
              </p>
            </article>
            <article className="rounded-2xl border border-stone-200 bg-stone-50/80 p-5">
              <h2 className="font-display text-2xl text-stone-900">Our Cellar</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                The beverage program highlights Mediterranean regions, small producers, and
                low-intervention wines designed for the table.
              </p>
            </article>
          </div>
        </div>
      </section>

      <GallerySection
        title="Designed for atmosphere and ease"
        description="Layered textures, warm tones, and open kitchen energy give each service a sense of occasion without formality."
      />

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Press"
            title="Recent mentions"
            description="Recognition from local editors and hospitality publications."
          />

          <div className="mt-8 grid gap-4">
            {pressMentions.map((mention) => (
              <article
                key={mention.source}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
                  {mention.source}
                </p>
                <h3 className="mt-2 font-display text-2xl text-stone-900">{mention.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{mention.excerpt}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-5 text-sm text-stone-600">
            <p>
              {restaurantName} is a concept brand created for portfolio demonstration purposes.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/menu"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-stone-50 transition-colors hover:bg-stone-700"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
