import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Stat } from "@/lib/data";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats?: Stat[];
};

export function PageIntro({ eyebrow, title, description, stats }: PageIntroProps) {
  return (
    <section className="section-shell pt-16 sm:pt-20">
      <Container>
        <div className="surface-card relative overflow-hidden px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <SectionHeading eyebrow={eyebrow} title={title} description={description} as="h1" />
            {stats?.length ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <article key={stat.label} className="rounded-[1.5rem] border border-ink/8 bg-sand/65 p-5">
                    <p className="text-3xl leading-none text-ink">{stat.value}</p>
                    <p className="mt-3 text-sm leading-6 text-ink/68">{stat.label}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
