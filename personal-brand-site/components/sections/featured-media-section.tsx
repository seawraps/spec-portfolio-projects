import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredContent } from "@/lib/data";

export function FeaturedMediaSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Media Highlights"
            title="Featured content that sounds polished because the thinking underneath it is clear."
            description="These sample highlights show how the brand stretches across keynote stages, podcasts, and partnership-friendly educational content."
          />
          <ButtonLink href="/about" variant="ghost" arrow className="shrink-0">
            Learn the backstory
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredContent.map((item) => (
            <article key={item.title} className="surface-card overflow-hidden">
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.format} illustration for ${item.outlet}.`}
                  width={1200}
                  height={900}
                  className="h-auto w-full"
                />
              </div>

              <div className="p-7">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-rose">
                  <span>{item.format}</span>
                  <span className="h-1 w-1 rounded-full bg-rose" />
                  <span>{item.audience}</span>
                </div>
                <h2 className="mt-4 text-3xl text-ink">{item.title}</h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink/54">{item.outlet}</p>
                <p className="mt-4 text-sm leading-7 text-ink/72">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
