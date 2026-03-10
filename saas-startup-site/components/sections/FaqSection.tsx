import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";

export function FaqSection() {
  return (
    <section className="bg-slate-50 py-12 md:py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Answers for operations and procurement teams"
          description="Everything you need to evaluate fit, rollout effort, and governance readiness."
        />

        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200 bg-white p-6 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none pr-7 text-sm font-semibold leading-6 text-slate-900 marker:content-none">
                {faq.question}
                <span className="float-right text-slate-400 transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
