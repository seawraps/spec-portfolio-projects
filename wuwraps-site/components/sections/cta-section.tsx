import { Container } from "@/components/layout/container";
import { ButtonLink, buttonClassName } from "@/components/ui/button-link";
import { Reveal } from "@/components/motion/reveal";
import { company } from "@/lib/data";

export function CtaSection() {
  return (
    <section className="border-b border-[var(--color-line)] py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="comic-panel relative overflow-hidden p-8 sm:p-12 lg:p-16">
            <div className="speed-lines absolute inset-0 -z-0 opacity-50" aria-hidden="true" />
            <div className="relative z-10 max-w-3xl">
              <span className="comic-tag">Ready When You Are</span>
              <h2 className="comic-display mt-5 text-[3rem] leading-[0.88] sm:text-[4.4rem]">
                <span className="ink-stroke-red">Let&apos;s wrap it.</span>
              </h2>
              <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-[var(--color-ink-soft)]">
                Tell Mark about your vehicle and the look you&apos;re after. You&apos;ll get a
                straight, honest quote and a spot on the schedule at the new Renton shop.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href="/contact" variant="red">
                  Start My Quote →
                </ButtonLink>
                <a href={`tel:${company.phoneRaw}`} className={buttonClassName("blue")}>
                  Call {company.phoneDisplay}
                </a>
                <a
                  href={company.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClassName("yellow")}
                >
                  Follow {company.instagram}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
