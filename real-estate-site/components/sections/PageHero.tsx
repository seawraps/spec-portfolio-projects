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
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
};

export function PageHero({
  eyebrow,
  title,
  description,
  highlights,
  primaryAction,
  secondaryAction,
}: PageHeroProps) {
  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div className="section-shell overflow-hidden rounded-[40px] border border-[var(--color-line)] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-muted)]">
                {eyebrow}
              </p>
              <h1 className="mt-6 max-w-4xl font-display text-[clamp(3rem,6vw,5.6rem)] leading-[0.94] text-[var(--color-ink)]">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                {description}
              </p>
              {primaryAction || secondaryAction ? (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {primaryAction ? (
                    <ButtonLink href={primaryAction.href} variant={primaryAction.variant}>
                      {primaryAction.label}
                    </ButtonLink>
                  ) : null}
                  {secondaryAction ? (
                    <ButtonLink
                      href={secondaryAction.href}
                      variant={secondaryAction.variant ?? "secondary"}
                    >
                      {secondaryAction.label}
                    </ButtonLink>
                  ) : null}
                </div>
              ) : null}
            </div>

            <aside className="soft-card rounded-[30px] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                At A Glance
              </p>
              <ul className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-[22px] border border-[var(--color-line)] bg-white/76 p-4 text-sm leading-7 text-[var(--color-ink)]"
                  >
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
