import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { differentiators, processSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-20 lg:py-24">
      <Container className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
        <Reveal>
          <div className="rounded-[2.8rem] bg-[linear-gradient(160deg,var(--color-brand-deep),var(--color-brand))] p-6 text-[var(--color-surface)] shadow-[0_46px_110px_-56px_rgba(18,29,40,0.92)] sm:p-8 xl:sticky xl:top-28">
            <SectionHeading
              eyebrow="Process"
              title="A premium result depends on a process homeowners can actually follow"
              description="Sequencing, selections, communication, and closeout all have to feel readable. That clarity is what keeps the build calm while the details stay sharp."
              className="[&_h2]:text-[var(--color-surface)] [&_p]:text-[color:rgba(255,250,243,0.8)] [&_div]:text-[var(--color-accent-soft)]"
            />

            <div className="image-frame relative mt-8 min-h-[260px] rounded-[2rem]">
              <Image
                src="/images/stair-detail.jpg"
                alt="Warm stair detailing and millwork inside a refined residential interior."
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 34vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.03),rgba(22,36,52,0.46))]" />
            </div>

            <ul className="mt-6 grid gap-3">
              {differentiators.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.4rem] border border-[color:rgba(255,250,243,0.12)] bg-[color:rgba(255,250,243,0.06)] px-4 py-3 text-sm leading-7 text-[color:rgba(255,250,243,0.82)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="relative pl-0 xl:pl-8">
          <div className="absolute bottom-0 left-[1.5rem] top-4 hidden w-px bg-[linear-gradient(180deg,rgba(180,136,72,0.42),rgba(180,136,72,0))] xl:block" />

          <ol className="grid gap-5">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <Reveal
                  delay={index * 90}
                  className={cn(index % 2 === 1 ? "xl:ml-10" : "xl:mr-10")}
                >
                  <div className="surface-card-strong relative rounded-[2.1rem] p-6 sm:p-7 xl:pl-20">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-[var(--color-brand-deep)] xl:absolute xl:left-6 xl:top-7">
                      {index + 1}
                    </span>
                    <h3 className="mt-5 text-[1.7rem] font-semibold leading-tight text-[var(--color-brand)] xl:mt-0">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                      {step.description}
                    </p>
                    <div className="editorial-rule mt-5" />
                    <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      {step.deliverable}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
