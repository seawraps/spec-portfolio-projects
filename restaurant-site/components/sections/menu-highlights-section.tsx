import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { menuHighlights } from "@/lib/data";

export function MenuHighlightsSection() {
  return (
    <section className="section-light py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Menu Highlights"
          title="Built for aperitivo hour, shared starters, and a lingering final course"
          description="Astera is structured around the rhythm of a real dinner service, not a simple list of items."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {menuHighlights.map((highlight) => (
            <article key={highlight.title} className="surface-card overflow-hidden rounded-[2rem]">
              <div className="overflow-hidden">
                <Image
                  src={highlight.image.src}
                  alt={highlight.image.alt}
                  width={1800}
                  height={1800}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a6435]">
                  {highlight.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-[2rem] leading-none text-[#201511]">
                  {highlight.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#5b4538]">
                  {highlight.description}
                </p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#8d5d35]">
                  {highlight.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/menu"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7f5634] underline decoration-[#b98956] underline-offset-8"
          >
            See the full dinner and bar menu
          </Link>
        </div>
      </div>
    </section>
  );
}
