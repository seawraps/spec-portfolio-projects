import type { Agent } from "@/lib/data";

type AgentCardProps = {
  agent: Agent;
};

export function AgentCard({ agent }: AgentCardProps) {
  const initials = agent.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="soft-card reveal-up delay-2 h-full rounded-[30px] p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
            {agent.role}
          </p>
          <h3 className="mt-3 font-display text-4xl leading-[0.92] text-[var(--color-ink)]">
            {agent.name}
          </h3>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/78 font-display text-xl text-[var(--color-ink)] shadow-[0_14px_28px_-20px_rgba(17,23,29,0.24)]">
          {initials}
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
        {agent.bio}
      </p>

      <div className="mt-6 rounded-[24px] border border-[var(--color-line)] bg-[var(--color-cream)] p-5">
        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
          Client lens
        </p>
        <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)]">
          {agent.experience}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-[var(--color-line)] pt-5">
        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
          {agent.metric}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {agent.specialties.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
