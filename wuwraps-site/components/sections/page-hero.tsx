import { Container } from "@/components/layout/container";
import { Formline } from "@/components/ui/formline";
import { Reveal } from "@/components/motion/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="on-dark relative overflow-hidden">
      <div className="halftone-corner" aria-hidden="true" />
      <Container className="relative py-16 lg:py-24">
        <Reveal>
          <p className="eyebrow text-[var(--mist)]">{eyebrow}</p>
        </Reveal>
        <Reveal delay={70}>
          <h1 className="display print-offset mt-5 max-w-3xl text-[2.8rem] text-[var(--bone)] sm:text-[4rem]">
            {title}
          </h1>
          <Formline className="mt-4 h-4 w-40" />
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-xl text-[1.02rem] leading-8 text-[var(--mist)]">
            {description}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
