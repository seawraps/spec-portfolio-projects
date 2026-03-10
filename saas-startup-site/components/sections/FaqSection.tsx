import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";

export function FaqSection() {
  return (
    <section className="bg-[#edf2f8] py-16 md:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers for operators, systems teams, and procurement stakeholders"
            description="The evaluation questions are usually about rollout effort, governance, and whether non-technical teams can own change safely. OrbitOps is built around those realities."
          />
        </Reveal>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.04}>
              <details className="surface-panel group overflow-hidden px-6 py-6">
                <summary className="cursor-pointer list-none pr-7 text-sm font-semibold leading-6 text-slate-950 marker:content-none">
                  {faq.question}
                  <span
                    className="float-right text-slate-400 transition group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
