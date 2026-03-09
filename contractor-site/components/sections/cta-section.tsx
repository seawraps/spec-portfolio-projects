import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { company } from "@/lib/data";

type CtaSectionProps = {
  title: string;
  description: string;
};

export function CtaSection({ title, description }: CtaSectionProps) {
  return (
    <section className="pb-16 pt-8 sm:pb-20">
      <Container>
        <div className="rounded-3xl bg-[var(--color-brand)] px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12">
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
              className="inline-flex items-center justify-center rounded-full border border-[color:rgba(255,255,255,0.35)] px-5 py-3 text-sm font-semibold transition hover:bg-[color:rgba(255,255,255,0.09)]"
            >
              Call {company.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
