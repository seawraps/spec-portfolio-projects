import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projectHighlights } from "@/lib/data";

export function ProjectsSection() {
  const [featuredProject, ...galleryProjects] = projectHighlights;

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Project Journal"
          title="Recent transformations with better flow, better materials, and believable everyday comfort"
          description="These case studies are written the way homeowners talk about renovations in real life: what was frustrating before, what changed, and how the finished space now works."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="image-frame relative min-h-[520px] rounded-[2.4rem]">
            <Image
              src={featuredProject.image}
              alt={featuredProject.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.08),rgba(22,36,52,0.48))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--color-surface)] sm:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-soft)]">
                {featuredProject.category}
              </p>
              <h3 className="mt-3 max-w-sm font-display text-4xl leading-tight">
                {featuredProject.title}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[color:rgba(255,250,243,0.78)]">
                {featuredProject.location}
              </p>
            </div>
          </div>

          <article className="surface-card-strong rounded-[2.4rem] p-6 sm:p-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Featured Case Study
            </p>
            <h3 className="mt-3 font-display text-4xl leading-tight text-[var(--color-brand)]">
              {featuredProject.summary}
            </h3>

            <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Before
                </p>
                <p className="mt-2">{featuredProject.before}</p>
              </div>
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  After
                </p>
                <p className="mt-2">{featuredProject.after}</p>
              </div>
            </div>

            <div className="editorial-rule mt-6" />

            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.scope.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[var(--color-surface-strong)] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {featuredProject.timeline}
            </p>
          </article>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {galleryProjects.map((project) => (
            <article key={project.title} className="surface-card overflow-hidden rounded-[2rem]">
              <div className="relative h-72 w-full">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    {project.category}
                  </p>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                    {project.timeline}
                  </p>
                </div>
                <h3 className="mt-3 font-display text-3xl leading-tight text-[var(--color-brand)]">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  {project.location}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  {project.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.scope.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
