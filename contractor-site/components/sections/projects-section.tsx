import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projectHighlights } from "@/lib/data";

export function ProjectsSection() {
  const [featuredProject, ...galleryProjects] = projectHighlights;

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24">
      <Container className="space-y-10">
        <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Project Journal"
              title="Real remodel stories told through better rooms, better flow, and sharper material decisions"
              description="We write case studies the same way clients describe successful work: what felt unresolved before, what changed structurally, and why the finished space now feels calmer every day."
            />

            <div className="surface-card-strong mt-8 rounded-[2.2rem] p-6 sm:p-7">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Featured story
              </p>
              <h3 className="mt-4 font-display text-[2.25rem] leading-[1.04] text-[var(--color-brand)] sm:text-[2.9rem]">
                {featuredProject.title}
              </h3>
              <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {featuredProject.location} | {featuredProject.timeline}
              </p>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div>
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                    Before
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                    {featuredProject.before}
                  </p>
                </div>

                <div>
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                    After
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                    {featuredProject.after}
                  </p>
                </div>
              </div>

              <div className="editorial-rule mt-6" />

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.scope.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[var(--color-surface-strong)] px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4 md:grid-cols-[0.67fr_0.33fr]">
              <div className="image-frame relative min-h-[380px] rounded-[2.5rem] sm:min-h-[560px]">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 46vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.04),rgba(22,36,52,0.42))]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--color-surface)] sm:p-8">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                    {featuredProject.category}
                  </p>
                  <p className="mt-3 max-w-sm font-display text-[2.15rem] leading-[1.02] sm:text-[2.85rem]">
                    {featuredProject.summary}
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="image-frame relative min-h-[230px] rounded-[2rem]">
                  <Image
                    src="/images/bathroom-vanity.jpg"
                    alt="A premium bathroom vanity with warm wood tones and polished stone."
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 22vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.02),rgba(22,36,52,0.28))]" />
                </div>

                <div className="surface-card rounded-[2rem] p-5 sm:p-6">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    The Blue Oak difference
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                    Materials are chosen for how they live with a house over time, not just how
                    they photograph on reveal day.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {galleryProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <article className="surface-card overflow-hidden rounded-[2.1rem]">
                <div className="relative h-80 w-full">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 46vw"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                      {project.category}
                    </p>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                      {project.timeline}
                    </p>
                  </div>

                  <h3 className="mt-4 font-display text-[2.2rem] leading-[1.03] text-[var(--color-brand)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {project.location}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                    {project.summary}
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                        Before
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                        {project.before}
                      </p>
                    </div>

                    <div>
                      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                        After
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                        {project.after}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.scope.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
