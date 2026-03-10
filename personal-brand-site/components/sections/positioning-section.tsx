import type { CSSProperties } from "react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { positioningPillars } from "@/lib/data";

export function PositioningSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="ink-panel p-8 sm:p-10">
            <SectionHeading
              eyebrow="What Changes"
              title="A premium personal brand should feel authored, not assembled."
              description="The job is not to look more online. The job is to become easier to describe, easier to trust, and easier to book."
              className="[&_h2]:text-white [&_p]:text-white/78 [&_.eyebrow]:border-white/12 [&_.eyebrow]:bg-white/8 [&_.eyebrow]:text-white/70"
            />

            <div className="mt-8 rounded-[1.7rem] border border-white/10 bg-white/6 p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold">
                The practical shift
              </p>
              <p className="mt-4 text-base leading-8 text-white/82">
                When the story gets sharper, buyers trust faster, event teams see the fit sooner, and content starts
                sounding like one clear mind instead of a busy feed.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {positioningPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={index === 1 ? "ink-panel sequence-card h-full p-8" : "paper-panel sequence-card h-full p-8"}
                style={{ "--sequence-index": index + 1 } as CSSProperties}
              >
                <p
                  className={
                    index === 1
                      ? "text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/62"
                      : "text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-mocha/68"
                  }
                >
                  0{index + 1}
                </p>
                <h3 className={index === 1 ? "mt-5 text-3xl text-white" : "mt-5 text-3xl text-ink"}>
                  {pillar.title}
                </h3>
                <p className={index === 1 ? "mt-4 text-sm leading-7 text-white/76" : "mt-4 text-sm leading-7 text-mocha/88"}>
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
