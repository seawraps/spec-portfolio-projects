import { ButtonLink, buttonClassName } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { company } from "@/lib/data";

type CtaSectionProps = {
  title: string;
  description: string;
};

export function CtaSection({ title, description }: CtaSectionProps) {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="rounded-[2.6rem] bg-[linear-gradient(135deg,var(--color-brand-deep),var(--color-brand))] px-6 py-10 text-[var(--color-surface)] shadow-[0_42px_100px_-56px_rgba(22,36,52,0.94)] md:px-8 md:py-12 lg:px-10 lg:py-14">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
            Ready To Start
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] sm:text-5xl lg:text-[3.6rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-[color:rgba(255,250,243,0.8)] sm:text-base">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/contact" variant="light">
              Request Consultation
            </ButtonLink>
            <a href={`tel:${company.phoneRaw}`} className={buttonClassName("outline")}>
              Call {company.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
