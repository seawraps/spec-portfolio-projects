import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Stat } from "@/lib/data";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats?: Stat[];
  aside?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, stats, aside }: PageIntroProps) {
  return (
    <section className="section-shell pt-14 md:pt-18 lg:pt-20">
      <Container>
        <div className="section-rule pt-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <SectionHeading eyebrow={eyebrow} title={title} description={description} as="h1" />

            {stats?.length ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <article key={stat.label} className="border-b border-ink/8 pb-4">
                    <p className="text-3xl leading-none text-ink">{stat.value}</p>
                    <p className="mt-3 text-sm leading-6 text-mocha/84">{stat.label}</p>
                  </article>
                ))}
              </div>
            ) : aside ? (
              aside
            ) : (
              <div className="paper-panel p-6 sm:p-8">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                  Studio Approach
                </p>
                <p className="mt-4 text-base leading-8 text-mocha/92">
                  Designed like an editorial brand system rather than a generic services site: sharper story, stronger
                  imagery, and more believable commercial context.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
