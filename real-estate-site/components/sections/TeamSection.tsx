import { AgentCard } from "@/components/cards/AgentCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutStats, agents } from "@/lib/data";

type TeamSectionProps = {
  title?: string;
  description?: string;
};

export function TeamSection({
  title = "A senior-led team built for fewer clients and better execution.",
  description = "Every client works directly with an advisor who understands pricing, presentation, and the practical details that keep a move feeling composed.",
}: TeamSectionProps) {
  return (
    <section className="py-14 md:py-18 lg:py-24" aria-labelledby="team-heading">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
          <SectionHeading
            id="team-heading"
            eyebrow="Meet The Advisors"
            title={title}
            description={description}
            className="reveal-up"
          />
          <div className="dark-panel reveal-up delay-1 rounded-[34px] p-8 text-white sm:p-10">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze-soft)]">
                  Why boutique works
                </p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
                  The roster stays narrow by design, which keeps communication
                  senior-led and every launch plan specific to the home, timing,
                  and buyer profile in play.
                </p>
              </div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-white/54">
                Fewer clients. More considered execution.
              </p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="stat-tile rounded-[24px] border border-white/10 bg-white/6 p-5"
                >
                  <p className="font-display text-4xl leading-none text-white">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/66">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.name} agent={agent} />
          ))}
        </div>
      </Container>
    </section>
  );
}
