import Image from "next/image";
import Link from "next/link";

import { buttonClassName } from "@/components/ui/button-styles";
import { contactDetails } from "@/lib/data";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-24 md:pb-16 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-28 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
            Mediterranean Coastal Dining
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-stone-900 sm:text-6xl">
            Fire-led flavors, served with harbor light.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-700 sm:text-lg">
            Astera Coastal Bistro brings modern Mediterranean cooking to Santa Monica with
            wood-fired seafood, housemade pasta, and warm, attentive service from first pour to
            last course.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={contactDetails.reservationsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClassName("primary")}
            >
              Reserve A Table
            </a>
            <Link
              href="/menu"
              className={buttonClassName("secondary")}
            >
              Explore Menu
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 text-sm sm:max-w-md">
            <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-6">
              <dt className="text-stone-500">Location</dt>
              <dd className="mt-1 font-medium text-stone-800">Santa Monica Harbor</dd>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-6">
              <dt className="text-stone-500">Service</dt>
              <dd className="mt-1 font-medium text-stone-800">Dinner Daily</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-amber-200/30 to-stone-200/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100 shadow-xl">
            <Image
              src="/images/hero-scene.svg"
              alt="Evening dinner table with Mediterranean dishes and candlelight"
              width={860}
              height={980}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
