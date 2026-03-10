import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Listing } from "@/lib/data";

type ListingCardProps = {
  listing: Listing;
  featured?: boolean;
};

export function ListingCard({ listing, featured = false }: ListingCardProps) {
  const stats = [listing.beds, listing.baths, listing.area];

  if (featured) {
    return (
      <article className="group overflow-hidden rounded-[34px] border border-[var(--color-line)] bg-[var(--color-surface-strong)] shadow-[0_32px_82px_-44px_rgba(17,23,29,0.34)] reveal-up delay-1">
        <div className="grid h-full md:grid-cols-[1.02fr_0.98fr]">
          <div className="image-frame image-reveal relative min-h-[420px] rounded-none border-0 md:min-h-full">
            <Image
              src={listing.imageSrc}
              alt={listing.imageAlt}
              fill
              sizes="(min-width: 1280px) 44vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/68 via-[#10171d]/10 to-transparent" />
            <div className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-navy)]">
              {listing.label}
            </div>
            <div className="absolute inset-x-5 bottom-5 rounded-[26px] border border-white/12 bg-black/26 p-5 text-white backdrop-blur-md">
              <p className="font-display text-5xl leading-none">{listing.price}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/72">
                {listing.address} • {listing.neighborhood}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stats.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/16 bg-white/10 px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 sm:p-10">
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                  Featured property
                </p>
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Private preview
                </span>
              </div>
              <h3 className="mt-4 font-display text-5xl leading-[0.92] text-[var(--color-ink)]">
                {listing.name}
              </h3>
              <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                {listing.description}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted-strong)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[26px] border border-[var(--color-line)] bg-white/78 p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                  Property story
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)]">
                  {listing.feature}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-5 border-t border-[var(--color-line)] pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                  Address
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {listing.address}
                </p>
              </div>
              <ButtonLink href="/contact" variant="secondary">
                Request Private Details
              </ButtonLink>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-[30px] border border-[var(--color-line)] bg-[var(--color-surface-strong)] shadow-[0_28px_64px_-42px_rgba(17,23,29,0.28)] reveal-up delay-2">
      <div className="grid sm:grid-cols-[0.92fr_1.08fr]">
        <div className="image-frame image-reveal relative min-h-[280px] rounded-none border-0 sm:min-h-full">
          <Image
            src={listing.imageSrc}
            alt={listing.imageAlt}
            fill
            sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/72 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-navy)]">
            {listing.label}
          </div>
          <div className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/12 bg-black/24 p-4 text-white backdrop-blur-md">
            <p className="font-display text-4xl leading-none">{listing.price}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/72">
              {listing.neighborhood}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-7">
          <div>
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
              Listing note
            </p>
            <h3 className="mt-3 font-display text-4xl leading-[0.94] text-[var(--color-ink)]">
              {listing.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              {listing.description}
            </p>
            <div className="mt-5 rounded-[22px] border border-[var(--color-line)] bg-[var(--color-cream)] p-5">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                Why it lingers
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)]">
                {listing.feature}
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-[var(--color-line)] pt-5">
            <div className="flex flex-wrap gap-2">
              {stats.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-sm leading-6 text-[var(--color-muted-strong)]">
                {listing.address}
              </p>
              <ButtonLink
                href="/contact"
                variant="ghost"
                className="h-auto px-0 text-[0.68rem] tracking-[0.26em] text-[var(--color-bronze)]"
              >
                View Details
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
