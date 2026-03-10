import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export function StorySection() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Our Story"
            title="Built around fire, seasonality, and coastal rhythm"
            description="Opened in 2022, Astera was created as a neighborhood restaurant with destination-level craft. Our menu moves with local market produce and sustainable seafood."
          />
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Every service is grounded in a simple promise: cook with intention, host generously,
            and let great ingredients stay recognizable on the plate.
          </p>
          <ul className="mt-8 grid gap-6 text-sm text-stone-700 sm:grid-cols-2">
            <li className="rounded-2xl border border-stone-200 bg-stone-50/70 p-6">
              Daily deliveries from local fish markets
            </li>
            <li className="rounded-2xl border border-stone-200 bg-stone-50/70 p-6">
              Housemade breads and fresh pasta program
            </li>
            <li className="rounded-2xl border border-stone-200 bg-stone-50/70 p-6">
              Curated Mediterranean wine and amaro list
            </li>
            <li className="rounded-2xl border border-stone-200 bg-stone-50/70 p-6">
              Private dining and group tasting experiences
            </li>
          </ul>
          <Link
            href="/about"
            className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-stone-800 underline decoration-amber-600 underline-offset-4 transition-colors hover:text-amber-700"
          >
            Learn More About Astera
          </Link>
        </div>

        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100 shadow-lg">
            <Image
              src="/images/story-kitchen.svg"
              alt="Chef plating dishes in an open Mediterranean kitchen"
              width={900}
              height={940}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
