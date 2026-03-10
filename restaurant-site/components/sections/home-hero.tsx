import Image from "next/image";
import Link from "next/link";

import { buttonClassName } from "@/components/ui/button-styles";
import { contactDetails, siteImages } from "@/lib/data";

export function HomeHero() {
  return (
    <section className="relative min-h-[95vh] overflow-hidden">
      <Image
        src={siteImages.heroTableWine.src}
        alt={siteImages.heroTableWine.alt}
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,8,6,0.92)_0%,rgba(12,8,6,0.72)_45%,rgba(12,8,6,0.34)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,163,100,0.22),transparent_28%)]" />

      <div className="relative mx-auto grid min-h-[95vh] max-w-7xl gap-10 px-6 pb-14 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pb-20 lg:pt-36">
        <div className="max-w-2xl">
          <p className="editorial-kicker">Mediterranean Coastal Dining</p>
          <h1 className="mt-5 font-display text-6xl leading-[0.88] text-[#f8efe4] sm:text-7xl lg:text-[5.6rem]">
            A candlelit room for seafood, wine, and long evenings.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#d9c8b5] sm:text-xl">
            Astera Coastal Bistro channels harbor air, live-fire cooking, and polished service into
            a restaurant experience that feels indulgent from the first pour onward.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={contactDetails.reservationsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClassName("primary")}
            >
              Reserve A Table
            </a>
            <Link href="/menu" className={buttonClassName("secondaryInverse")}>
              Explore Menu
            </Link>
          </div>

          <dl className="mt-12 grid gap-4 text-sm text-[#eadcc9] sm:grid-cols-3">
            <div className="rounded-[1.75rem] border border-[rgba(255,233,204,0.16)] bg-[rgba(11,8,6,0.4)] px-5 py-6 backdrop-blur-sm">
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#cda672]">
                Signature
              </dt>
              <dd className="mt-3 text-base font-medium text-[#f8efe4]">Fire-led seafood</dd>
            </div>
            <div className="rounded-[1.75rem] border border-[rgba(255,233,204,0.16)] bg-[rgba(11,8,6,0.4)] px-5 py-6 backdrop-blur-sm">
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#cda672]">
                Atmosphere
              </dt>
              <dd className="mt-3 text-base font-medium text-[#f8efe4]">Low-lit harbor dining</dd>
            </div>
            <div className="rounded-[1.75rem] border border-[rgba(255,233,204,0.16)] bg-[rgba(11,8,6,0.4)] px-5 py-6 backdrop-blur-sm">
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#cda672]">
                Seating
              </dt>
              <dd className="mt-3 text-base font-medium text-[#f8efe4]">Terrace and dining room</dd>
            </div>
          </dl>
        </div>

        <div className="lg:justify-self-end">
          <div className="ml-auto max-w-md rounded-[2rem] border border-[rgba(255,233,204,0.16)] bg-[rgba(13,10,8,0.48)] p-4 backdrop-blur-md sm:p-5">
            <div className="image-shell rounded-[1.7rem]">
              <Image
                src={siteImages.heroFeast.src}
                alt={siteImages.heroFeast.alt}
                width={1800}
                height={2400}
                className="h-[25rem] w-full object-cover object-center sm:h-[31rem]"
              />
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#cda672]">
                  Tonight&apos;s mood
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#f2e4d2]">
                  Salted butter, shellfish broth, chilled wine, and a table that stays full.
                </p>
              </div>
              <div className="rounded-full border border-[rgba(255,233,204,0.14)] px-3 py-2 text-xs uppercase tracking-[0.22em] text-[#f1ddbf]">
                Dinner Daily
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
