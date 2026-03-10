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
  primaryAction,
  secondaryAction,
}: PageHeroProps) {
  return (
    <section className="py-8 md:py-10 lg:py-12">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="soft-card rounded-[34px] p-8 sm:p-10 lg:p-12">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-bronze)]">
              {eyebrow}
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.9rem,7vw,5.9rem)] leading-[0.9] text-[var(--color-ink)]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
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

            <ul className="mt-8 grid gap-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-[22px] border border-[var(--color-line)] bg-white px-5 py-4 text-sm leading-7 text-[var(--color-muted-strong)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="image-frame relative min-h-[360px] lg:min-h-[580px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/74 via-[#10171d]/14 to-transparent" />
            {imageCaption ? (
              <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/12 bg-black/24 p-5 text-white backdrop-blur-md sm:max-w-[420px]">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/68">
                  Crescent Vale
                </p>
                <p className="mt-3 font-display text-4xl leading-[0.94] text-white">
                  {imageCaption}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
