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
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="section-shell overflow-hidden rounded-[40px] border border-[var(--color-line)] px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)] sm:tracking-[0.34em]">
                {eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl text-balance font-display text-[clamp(2.35rem,11vw,4.2rem)] leading-[0.96] text-[var(--color-ink)] sm:mt-6 sm:text-[clamp(3rem,6vw,5.6rem)]">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:mt-6 sm:text-lg sm:leading-8">
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
            </div>

            <aside className="soft-card min-w-0 rounded-[30px] p-5 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)] sm:tracking-[0.28em]">
                At A Glance
              </p>
              <ul className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-[22px] border border-[var(--color-line)] bg-white/76 p-5 text-sm leading-7 text-[var(--color-ink)] sm:p-6"
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
