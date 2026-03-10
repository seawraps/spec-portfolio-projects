import { AgentCard } from "@/components/cards/AgentCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { agents } from "@/lib/data";

type TeamSectionProps = {
  title?: string;
  description?: string;
};

export function TeamSection({
  title = "Meet The Team",
  description = "A tight, senior-led team means thoughtful advice, direct communication, and better continuity from strategy to closing.",
}: TeamSectionProps) {
  return (
    <section className="py-12 md:py-16 lg:py-24" aria-labelledby="team-heading">
      <Container>
        <SectionHeading
          id="team-heading"
          align="center"
          eyebrow="Team Or Agent Bios"
          title={title}
          description={description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.name} agent={agent} />
          ))}
        </div>
      </Container>
    </section>
  );
}
