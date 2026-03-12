import Image from "next/image";

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
    <article className="soft-card reveal-up delay-2 flex h-full flex-col overflow-hidden rounded-[30px]">
      <div className="image-frame image-reveal relative min-h-[320px] rounded-none border-0">
        <Image
          src={agent.imageSrc}
          alt={agent.imageAlt}
          fill
          sizes="(min-width: 768px) 34vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/84 via-[#10171d]/14 to-transparent" />
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 rounded-[24px] border border-white/12 bg-black/24 p-5 text-white backdrop-blur-md">
          <div>
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze-soft)]">
              {agent.role}
            </p>
            <h3 className="mt-3 font-display text-4xl leading-[0.92] text-white">
              {agent.name}
            </h3>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/16 bg-white/10 font-display text-xl text-white shadow-[0_14px_28px_-20px_rgba(17,23,29,0.24)]">
            {initials}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="flex-1 text-sm leading-7 text-[var(--color-muted)]">
          {agent.bio}
        </p>

        <div className="mt-6 flex min-h-[9.5rem] flex-col justify-center rounded-[24px] border border-[var(--color-line)] bg-[var(--color-cream)] p-5">
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
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-3 py-1.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
