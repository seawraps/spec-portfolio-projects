import Image from "next/image";

import { ButtonLink, type ButtonVariant } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

type HeroAction = {
  href: string;
  label: string;
  variant?: ButtonVariant;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
  imageCaption?: string;
  imagePosition?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
};

export function PageHero({
  eyebrow,
  title,
  description,
  highlights,
  imageSrc,
  imageAlt,
  imageCaption,
  imagePosition,
  primaryAction,
  secondaryAction,
}: PageHeroProps) {
  return (
    <section className="hero-spacing">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[0.74fr_1.26fr] xl:items-end">
          <div className="reveal-up xl:pr-8">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-bronze)]">
              {eyebrow}
            </p>
            <h1 className="mt-6 max-w-[13ch] font-display text-[clamp(3.2rem,7vw,6.4rem)] leading-[0.88] text-[var(--color-ink)]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-[var(--color-muted)]">
              {description}
            </p>

            {primaryAction || secondaryAction ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {primaryAction ? (
                  <ButtonLink
                    href={primaryAction.href}
                    variant={primaryAction.variant}
                    className="w-full sm:w-auto"
                  >
                    {primaryAction.label}
                  </ButtonLink>
                ) : null}
                {secondaryAction ? (
                  <ButtonLink
                    href={secondaryAction.href}
                    variant={secondaryAction.variant ?? "secondary"}
                    className="w-full sm:w-auto"
                  >
                    {secondaryAction.label}
                  </ButtonLink>
                ) : null}
              </div>
            ) : null}

            <div className="mt-8 border-t border-[var(--color-line-strong)] pt-6">
              <div className="grid gap-4">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="border-b border-[var(--color-line)] pb-4 text-sm leading-7 text-[var(--color-muted-strong)] last:border-b-0 last:pb-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="image-frame image-reveal reveal-up delay-1 relative min-h-[360px] sm:min-h-[460px] lg:min-h-[640px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1280px) 56vw, (min-width: 1024px) 58vw, 100vw"
                className={`object-cover ${imagePosition ?? ""}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111921]/80 via-[#111921]/16 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-navy)]">
                {eyebrow}
              </div>
            </div>

            <aside className="reveal-up delay-2 flex flex-col justify-end gap-6 border border-[var(--color-line)] bg-[rgba(255,255,255,0.48)] p-6 sm:p-7">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                  Crescent Vale note
                </p>
                <p className="mt-4 font-display text-[2.35rem] leading-[0.94] text-[var(--color-ink)] sm:text-[2.85rem]">
                  {imageCaption ?? "Presented with quiet precision and private-market discipline."}
                </p>
              </div>

              <div className="border-t border-[var(--color-line)] pt-5">
                <p className="text-sm leading-7 text-[var(--color-muted-strong)]">
                  The visual language stays restrained so the page can read like
                  a listing story rather than a stack of features.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
