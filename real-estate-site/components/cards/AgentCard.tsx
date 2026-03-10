import Image from "next/image";

import type { Agent } from "@/lib/data";

type AgentCardProps = {
  agent: Agent;
};

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <article className="overflow-hidden rounded-[30px] border border-[var(--color-line)] bg-[var(--color-surface-strong)] shadow-[0_26px_64px_-42px_rgba(19,26,33,0.3)]">
      <div className="relative aspect-[4/5]">
        <Image
          src={agent.imageSrc}
          alt={agent.imageAlt}
          fill
          sizes="(min-width: 768px) 30vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/68 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-navy)]">
          {agent.role}
        </div>
        <div className="absolute bottom-4 right-4 rounded-full border border-white/14 bg-black/24 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
          {agent.metric}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="font-display text-4xl leading-[0.94] text-[var(--color-ink)]">
          {agent.name}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
          {agent.bio}
        </p>
        <p className="mt-5 rounded-[22px] border border-[var(--color-line)] bg-[var(--color-cream)] px-5 py-4 text-sm leading-7 text-[var(--color-muted-strong)]">
          {agent.experience}
        </p>
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
      </div>
    </article>
  );
}
