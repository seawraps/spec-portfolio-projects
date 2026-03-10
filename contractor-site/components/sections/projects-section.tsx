import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projectHighlights } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Before-and-after transformations that feel livable and lasting"
          description="Each project balances practical upgrades, long-term durability, and refined design details suited to local homes."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {projectHighlights.map((project) => (
            <article
              key={project.title}
              className="surface-card overflow-hidden rounded-3xl"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-3xl text-[var(--color-brand)]">{project.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{project.location}</p>

                <div className="mt-5 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                  <p>
                    <strong className="text-[var(--color-brand)]">Before:</strong> {project.before}
                  </p>
                  <p>
                    <strong className="text-[var(--color-brand)]">After:</strong> {project.after}
                  </p>
                </div>

                <p className="mt-4 text-sm font-medium text-[var(--color-brand)]">{project.timeline}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
