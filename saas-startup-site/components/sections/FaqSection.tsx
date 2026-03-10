import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";

export function FaqSection() {
  return (
    <section className="bg-[#f4f8fd] py-14 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Answers for operations and procurement teams"
          description="Everything you need to evaluate fit, rollout effort, and governance readiness."
        />

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="surface-panel group overflow-hidden px-6 py-6"
            >
              <summary className="cursor-pointer list-none pr-7 text-sm font-semibold leading-6 text-slate-950 marker:content-none">
                {faq.question}
                <span className="float-right text-slate-400 transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
