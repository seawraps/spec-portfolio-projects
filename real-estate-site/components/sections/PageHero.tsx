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
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-start">
          <div className="reveal-up flex flex-col gap-6 xl:pr-6">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-bronze)]">
              {eyebrow}
            </p>
            <h1 className="max-w-none font-display text-[clamp(3rem,5.5vw,5.3rem)] leading-[0.9] text-[var(--color-ink)]">
              {title}
            </h1>
            <p className="max-w-2xl text-[1.02rem] leading-8 text-[var(--color-muted)]">
              {description}
            </p>

            {primaryAction || secondaryAction ? (
              <div className="flex flex-col gap-3 sm:flex-row">
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

            <div className="border-t border-[var(--color-line-strong)] pt-6">
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

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(15rem,0.72fr)] lg:items-start">
            <div className="image-frame image-reveal reveal-up delay-1 relative self-start min-h-[340px] sm:min-h-[440px] lg:min-h-[520px] xl:min-h-[560px]">
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

            <aside className="reveal-up delay-2 flex self-start flex-col gap-6 border border-[var(--color-line)] bg-[rgba(255,255,255,0.48)] p-6 sm:p-7">
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
