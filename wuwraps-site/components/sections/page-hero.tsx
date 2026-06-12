import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  variant?: "red" | "blue" | "ink";
};

const variantClass: Record<NonNullable<PageHeroProps["variant"]>, string> = {
  red: "halftone-red text-[var(--color-paper)]",
  blue: "halftone-blue text-[var(--color-paper)]",
  ink: "halftone-ink text-[var(--color-paper)]",
};

export function PageHero({ eyebrow, title, description, variant = "ink" }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden border-b-[4px] border-[var(--color-ink)] ${variantClass[variant]}`}>
      <div className="speed-lines absolute inset-0 opacity-30" aria-hidden="true" />
      <Container className="relative py-16 lg:py-24">
        <Reveal>
          <span className="comic-tag">{eyebrow}</span>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="comic-display mt-5 max-w-4xl text-[3rem] leading-[0.88] text-[var(--color-paper)] sm:text-[4.4rem] lg:text-[5rem]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-[rgba(251,244,226,0.9)]">
            {description}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
