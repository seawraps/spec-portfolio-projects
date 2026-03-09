import { Container } from "@/components/layout/Container";
import { socialProofLogos } from "@/lib/data";

export function SocialProofSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-10 sm:py-12">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Trusted by operations teams at growth-stage B2B companies
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {socialProofLogos.map((company) => (
            <li
              key={company}
              className="flex h-14 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 text-center text-sm font-semibold text-slate-600"
            >
              {company}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
