import { Container } from "@/components/layout/Container";
import { socialProofLogos } from "@/lib/data";

const proofStats = [
  {
    value: "3.4M+",
    label: "workflow actions orchestrated monthly",
  },
  {
    value: "27%",
    label: "average reduction in exception volume",
  },
  {
    value: "11",
    label: "countries supported across active teams",
  },
];

export function SocialProofSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="eyebrow-label">Why teams switch</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-[2.5rem]">
              Operators adopt OrbitOps when spreadsheets, tickets, and status meetings stop scaling.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              The platform is designed for companies that need tighter execution, better visibility,
              and more credible operational reporting without slowing down the teams doing the work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {proofStats.map((stat) => (
              <article key={stat.label} className="surface-panel px-5 py-6">
                <p className="data-label text-slate-500">{stat.label}</p>
                <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950">
                  {stat.value}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="surface-panel-muted mt-10 px-5 py-6 sm:px-6">
          <p className="data-label text-slate-500">
            Trusted by operations teams at scaling B2B software companies
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {socialProofLogos.map((company) => (
              <li
                key={company}
                className="flex min-h-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-3 text-center text-sm font-semibold text-slate-700"
              >
                {company}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
