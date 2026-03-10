import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Listing } from "@/lib/data";
import { cn } from "@/lib/utils";

type ListingCardProps = {
  listing: Listing;
  featured?: boolean;
};

export function ListingCard({ listing, featured = false }: ListingCardProps) {
  if (featured) {
    return (
      <article className="overflow-hidden rounded-[32px] border border-[var(--color-line)] bg-[var(--color-surface-strong)] shadow-[0_30px_80px_-44px_rgba(19,26,33,0.38)]">
        <div className="grid h-full md:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[360px] md:min-h-full">
            <Image
              src={listing.imageSrc}
              alt={listing.imageAlt}
              fill
              sizes="(min-width: 1280px) 44vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/64 via-[#10171d]/12 to-transparent" />
            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-navy)]">
              {listing.label}
            </div>
            <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/12 bg-black/26 p-5 text-white backdrop-blur-md">
              <p className="font-display text-5xl leading-none">{listing.price}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/72">
                {listing.address} • {listing.neighborhood}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 sm:p-10">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                Featured property
              </p>
              <h3 className="mt-4 font-display text-5xl leading-[0.94] text-[var(--color-ink)]">
                {listing.name}
              </h3>
              <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                {listing.description}
              </p>
              <div className="mt-6 rounded-[24px] border border-[var(--color-line)] bg-[var(--color-cream)] p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                  Why buyers respond
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)]">
                  {listing.feature}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {[listing.beds, listing.baths, listing.area].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]"
                >
                  {item}
                </span>
              ))}
              <ButtonLink href="/contact" variant="secondary" className="ml-auto">
                Request Private Details
              </ButtonLink>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="overflow-hidden rounded-[30px] border border-[var(--color-line)] bg-[var(--color-surface-strong)] shadow-[0_26px_60px_-42px_rgba(19,26,33,0.32)]">
      <div className="relative aspect-[4/3]">
        <Image
          src={listing.imageSrc}
          alt={listing.imageAlt}
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/68 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-navy)]">
          {listing.label}
        </div>
        <div className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/12 bg-black/24 p-5 text-white backdrop-blur-md">
          <p className="font-display text-4xl leading-none">{listing.price}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/72">
            {listing.neighborhood}
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="font-display text-4xl leading-[0.95] text-[var(--color-ink)]">
          {listing.name}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
          {listing.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {[listing.beds, listing.baths, listing.area].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--color-line)] bg-[var(--color-cream)] px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-sm leading-6 text-[var(--color-muted-strong)]">
            {listing.address}
          </p>
          <ButtonLink href="/contact" variant="ghost" className={cn("px-0", "text-[var(--color-bronze)]")}>
            View Details
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
