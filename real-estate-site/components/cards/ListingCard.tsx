import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Listing } from "@/lib/data";
import { cn } from "@/lib/utils";

type ListingCardProps = {
  listing: Listing;
  featured?: boolean;
  layout?: "default" | "compact" | "portrait";
};

export function ListingCard({
  listing,
  featured = false,
  layout = "default",
}: ListingCardProps) {
  const stats = [listing.beds, listing.baths, listing.area];
  const isCompact = layout === "compact";
  const isPortrait = layout === "portrait";
  const imagePosition = listing.imagePosition ?? "";

  if (featured) {
    return (
      <article className="group reveal-up delay-1 grid gap-8 border-t border-[var(--color-line-strong)] pt-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
        <div className="image-frame image-reveal relative min-h-[420px] sm:min-h-[540px] xl:min-h-[620px]">
          <Image
            src={listing.imageSrc}
            alt={listing.imageAlt}
            fill
            sizes="(min-width: 1280px) 42vw, (min-width: 1024px) 48vw, 100vw"
            className={`object-cover ${imagePosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111921]/76 via-[#111921]/12 to-transparent" />
          <div className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-navy)]">
            {listing.label}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
            <span>Featured residence</span>
            <span className="h-1 w-1 rounded-full bg-[rgba(134,105,71,0.45)]" />
            <span>{listing.neighborhood}</span>
          </div>

          <div className="border-b border-[var(--color-line)] pb-5">
            <h3 className="font-display text-[clamp(3.2rem,5vw,5.2rem)] leading-[0.9] text-[var(--color-ink)]">
              {listing.name}
            </h3>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">
                {listing.address}
              </p>
              <p className="font-display text-[clamp(3rem,5vw,4.4rem)] leading-none text-[var(--color-ink)]">
                {listing.price}
              </p>
            </div>
          </div>

          <p className="text-[1.02rem] leading-8 text-[var(--color-muted)]">
            {listing.description}
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item}
                className="border-l border-[var(--color-line-strong)] pl-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted-strong)]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="grid gap-5 border-t border-[var(--color-line)] pt-6 md:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                Property note
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                Signature residences are presented with private-preview pacing
                and direct advisory follow-through.
              </p>
            </div>
            <p className="text-sm leading-7 text-[var(--color-muted-strong)]">
              {listing.feature}
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t border-[var(--color-line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Private tours arranged through the advisory team
            </p>
            <ButtonLink href="/contact" variant="secondary">
              Request Private Details
            </ButtonLink>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group reveal-up delay-2 grid gap-4">
      <div
        className={cn(
          "image-frame image-reveal relative overflow-hidden",
          isCompact
            ? "min-h-[280px] sm:min-h-[320px]"
            : isPortrait
              ? "min-h-[380px] sm:min-h-[460px] xl:min-h-[540px]"
              : "min-h-[320px] sm:min-h-[360px]",
        )}
      >
        <Image
          src={listing.imageSrc}
          alt={listing.imageAlt}
          fill
          sizes={
            isPortrait
              ? "(min-width: 1280px) 28vw, (min-width: 1024px) 34vw, 100vw"
              : "(min-width: 1280px) 34vw, (min-width: 768px) 48vw, 100vw"
          }
          className={`object-cover ${imagePosition}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111921]/78 via-[#111921]/12 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-navy)]">
          {listing.label}
        </div>
      </div>

      <div className="border-t border-[var(--color-line-strong)] pt-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
              {listing.neighborhood}
            </p>
            <h3
              className={cn(
                "mt-3 font-display leading-[0.92] text-[var(--color-ink)]",
                isPortrait ? "text-[2.9rem] sm:text-[3.4rem]" : "text-[2.6rem] sm:text-[3rem]",
              )}
            >
              {listing.name}
            </h3>
          </div>

          <p
            className={cn(
              "font-display leading-none text-[var(--color-ink)]",
              isPortrait ? "text-[2.8rem] sm:text-[3.4rem]" : "text-[2.5rem] sm:text-[3rem]",
            )}
          >
            {listing.price}
          </p>
        </div>

        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">
          {listing.address}
        </p>

        <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
          {listing.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 border-y border-[var(--color-line)] py-4">
          {stats.map((item) => (
            <span
              key={item}
              className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted-strong)]"
            >
              {item}
            </span>
          ))}
        </div>

        <div
          className={cn(
            "mt-5 grid gap-4",
            !isCompact && "md:grid-cols-[1fr_auto] md:items-end",
          )}
        >
          <p className="text-sm leading-7 text-[var(--color-muted-strong)] transition-colors duration-200 group-hover:text-[var(--color-ink)]">
            {listing.feature}
          </p>
          <ButtonLink
            href="/contact"
            variant="secondary"
            className={cn(
              "h-10 px-4 text-[0.6rem] tracking-[0.26em]",
              isCompact && "w-full sm:w-auto",
            )}
          >
            Request Details
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
