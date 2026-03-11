import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projectHighlights } from "@/lib/data";
import { cn } from "@/lib/utils";

const companionImages = [
  "/images/cabinet-detail.jpg",
  "/images/bathroom-vanity.jpg",
  "/images/stair-detail.jpg",
];

const companionAlt = [
  "Custom cabinet detailing and premium hardware.",
  "A warm bathroom vanity with stone and brass finishes.",
  "Architectural stair detailing in a renovated home.",
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Case Studies"
            title="Renovation stories told through proportion, material change, and daily function."
            description="Each project begins with what feels unresolved in the home today, then moves through layout, detailing, and finish decisions that make the rooms quieter and easier to live in."
          />
        </Reveal>

        <div className="line-list mt-10 border-y border-[color:rgba(31,35,39,0.12)]">
          {projectHighlights.map((project, index) => (
            <Reveal key={project.title} delay={index * 80} className="py-10 lg:py-12">
              <article className="group grid gap-8 lg:grid-cols-[1fr_1.04fr] lg:items-start">
                <div className={cn(index % 2 === 1 && "lg:order-2")}>
                  <div className="flex flex-wrap items-center gap-4 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    <span className="text-[var(--color-accent)]">{project.category}</span>
                    <span>{project.location}</span>
                    <span>{project.timeline}</span>
                  </div>

                  <h3 className="mt-5 max-w-[14ch] font-display text-[2.5rem] leading-[0.94] text-[var(--color-brand)] sm:text-[3.35rem]">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-[0.98rem] leading-8 text-[var(--color-muted)]">
                    {project.summary}
                  </p>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <div className="border-l border-[color:rgba(31,35,39,0.12)] pl-4">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                        Before
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                        {project.before}
                      </p>
                    </div>
                    <div className="border-l border-[color:rgba(31,35,39,0.12)] pl-4">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                        After
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                        {project.after}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.scope.map((item) => (
                      <span
                        key={item}
                        className="rounded-[0.7rem] border border-[color:rgba(31,35,39,0.12)] px-3 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={cn("grid gap-4 sm:grid-cols-[1fr_0.58fr]", index % 2 === 1 && "lg:order-1")}>
                  <div className="image-frame relative min-h-[340px] overflow-hidden rounded-[1rem] sm:min-h-[470px]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 46vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,35,45,0.04),rgba(23,35,45,0.28))]" />
                  </div>

                  <div className="grid gap-4">
                    <div className="image-frame relative min-h-[180px] overflow-hidden rounded-[1rem] sm:min-h-[220px]">
                      <Image
                        src={companionImages[index]}
                        alt={companionAlt[index]}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 22vw"
                      />
                    </div>
                    <div className="surface-card rounded-[1rem] p-5">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                        Why it matters
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                        The finished rooms are warmer and more legible because storage, light, and
                        material transitions were addressed together instead of one finish at a
                        time.
                      </p>
                    </div>
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
