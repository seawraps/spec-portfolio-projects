import { Reveal } from "@/components/motion/reveal";
import { ButtonLink, buttonClassName } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { company } from "@/lib/data";

type CtaSectionProps = {
  title: string;
  description: string;
};

export function CtaSection({ title, description }: CtaSectionProps) {
  return (
    <section id="consultation-cta" className="py-18 md:py-22 lg:py-26">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.8rem] bg-[linear-gradient(145deg,var(--color-brand-deep),var(--color-brand))] px-6 py-8 text-[var(--color-surface)] shadow-[0_48px_112px_-60px_rgba(18,29,40,0.94)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 top-0 h-48 w-48 rounded-full bg-[color:rgba(234,219,193,0.12)] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-44 w-44 rounded-full bg-[color:rgba(180,136,72,0.16)] blur-3xl"
            />
            <div className="grid gap-8 xl:grid-cols-[1.18fr_0.82fr] xl:items-end">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
                  Ready to start
                </p>
                <h2 className="mt-4 max-w-4xl font-display text-[2.7rem] leading-[1.01] sm:text-[3.9rem]">
                  {title}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-[color:rgba(255,250,243,0.8)] sm:text-base">
                  {description}
                </p>
              </div>

              <div className="rounded-[2rem] border border-[color:rgba(255,250,243,0.12)] bg-[color:rgba(255,250,243,0.06)] p-5 sm:p-6">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                  What happens after you reach out
                </p>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-[color:rgba(255,250,243,0.82)] sm:text-base">
                  <li>We review the rooms involved and confirm whether the scope fits our core work.</li>
                  <li>Qualified projects move to a walkthrough with practical timing and budget guidance.</li>
                  <li>You get a direct next recommendation instead of a vague sales sequence.</li>
                </ul>

                <div className="mt-6 grid gap-3 min-[430px]:grid-cols-2">
                  <ButtonLink href="/contact" variant="light" className="w-full">
                    Request Consultation
                  </ButtonLink>
                  <a href={`tel:${company.phoneRaw}`} className={buttonClassName("outline", "w-full")}>
                    Call {company.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
