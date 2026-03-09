import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Listing } from "@/lib/data";

type ListingCardProps = {
  listing: Listing;
};

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <article className="group soft-card flex h-full flex-col overflow-hidden rounded-[30px]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={listing.imageSrc}
          alt={listing.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#19231e]/72 via-transparent to-[#19231e]/10" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-forest)]">
          {listing.label}
        </div>
        <div className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/16 bg-black/18 p-4 backdrop-blur-md">
          <p className="font-display text-4xl text-white">{listing.price}</p>
          <p className="mt-1 text-sm text-white/72">
            {listing.address} • {listing.neighborhood}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-4xl leading-none text-[var(--color-ink)]">
          {listing.name}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-muted)]">
          {listing.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {[listing.beds, listing.baths, listing.area].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--color-line)] bg-white/76 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <ButtonLink href="/contact" variant="secondary" className="w-full justify-center">
            Schedule A Private Tour
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
