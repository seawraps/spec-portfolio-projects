import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { FAQItem } from "@/lib/data";

type FaqSectionProps = {
  items: FAQItem[];
};

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <section className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions clients usually ask before the engagement starts."
          description="Clear expectations make premium services easier to understand and much easier to buy."
        />

        <div className="mt-10 space-y-4">
          {items.map((item) => (
            <details key={item.question} className="paper-panel p-6 sm:p-7">
              <summary className="flex items-center justify-between gap-4 text-left text-2xl text-ink sm:text-[2rem]">
                <span>{item.question}</span>
                <span className="shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-plum">
                  Open
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-mocha/88">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
