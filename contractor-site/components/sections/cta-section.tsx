import { ButtonLink, buttonClassName } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { company } from "@/lib/data";

type CtaSectionProps = {
  title: string;
  description: string;
};

export function CtaSection({ title, description }: CtaSectionProps) {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <Container>
        <div className="rounded-3xl bg-[var(--color-brand)] px-6 py-10 text-white shadow-[0_24px_56px_-30px_rgba(23,54,77,0.7)] md:px-8 md:py-12 lg:px-10 lg:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
            Ready to Start?
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:rgba(255,255,255,0.82)] sm:text-base">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/contact" variant="light">
              Request Your Estimate
            </ButtonLink>
            <a
              href={`tel:${company.phoneRaw}`}
              className={buttonClassName("outline")}
            >
              Call {company.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
