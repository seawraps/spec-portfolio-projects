import type { Agent } from "@/lib/data";

type AgentCardProps = {
  agent: Agent;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <article className="soft-card h-full rounded-[28px] p-6">
      <div className="flex items-start gap-4">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] text-lg font-semibold text-white"
          style={{ background: agent.accent }}
          aria-hidden="true"
        >
          {getInitials(agent.name)}
        </div>
        <div>
          <h3 className="font-display text-4xl leading-none text-[var(--color-ink)]">
            {agent.name}
          </h3>
          <p className="mt-2 text-sm font-medium text-[var(--color-gold)]">
            {agent.role}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
        {agent.bio}
      </p>

      <div className="mt-5 rounded-[22px] border border-[var(--color-line)] bg-white/74 p-6 text-sm text-[var(--color-ink)]">
        {agent.experience}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {agent.specialties.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--color-line)] bg-white/76 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
