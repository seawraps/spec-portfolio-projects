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
          title="Common questions before an engagement starts."
          description="Clear expectations make premium services feel easier to buy."
        />

        <div className="mt-10 space-y-4">
          {items.map((item) => (
            <details key={item.question} className="surface-card p-6">
              <summary className="flex items-center justify-between gap-4 text-left text-xl text-ink">
                <span>{item.question}</span>
                <span className="shrink-0 text-sm font-semibold uppercase tracking-[0.18em] text-rose">Open</span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/72">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
