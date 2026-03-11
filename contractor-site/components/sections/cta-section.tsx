import { Reveal } from "@/components/motion/reveal";
import { ButtonLink, buttonClassName } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { company } from "@/lib/data";

type CtaSectionProps = {
  title: string;
  description: string;
};

const nextSteps = [
  "We review the rooms involved and confirm whether the scope fits our core work.",
  "Qualified projects move to a walkthrough with practical timing and budget framing.",
  "You get a direct recommendation for the next step instead of a generic sales follow-up.",
];

export function CtaSection({ title, description }: CtaSectionProps) {
  return (
    <section id="consultation-cta" className="py-16 md:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="overflow-hidden border border-[color:rgba(255,255,255,0.08)] bg-[var(--color-brand-deep)] text-[var(--color-surface)]">
            <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.14fr_0.86fr] lg:px-10 lg:py-12">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
                  Start with the right first conversation
                </p>
                <h2 className="mt-4 max-w-4xl font-display text-[2.8rem] leading-[0.94] sm:text-[4rem]">
                  {title}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-[color:rgba(247,242,234,0.8)] sm:text-base">
                  {description}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ButtonLink href="/contact" variant="light">
                    Request Consultation
                  </ButtonLink>
                  <a href={`tel:${company.phoneRaw}`} className={buttonClassName("outline")}>
                    Call {company.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="border-t border-[color:rgba(255,255,255,0.12)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                  What happens after you reach out
                </p>
                <div className="line-list mt-4 border-y border-[color:rgba(255,255,255,0.12)]">
                  {nextSteps.map((step) => (
                    <p
                      key={step}
                      className="py-4 text-sm leading-7 text-[color:rgba(247,242,234,0.82)] sm:text-base"
                    >
                      {step}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
