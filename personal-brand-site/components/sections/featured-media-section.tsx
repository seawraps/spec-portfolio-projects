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
            eyebrow="Featured Media"
            title="A more believable personal brand shows up like a publication, a host, and a speaker."
            description="The examples below are styled to feel like the kinds of media moments that turn strong expertise into a bookable, sponsor-friendly public brand."
          />
          <ButtonLink href="/about" variant="ghost" arrow className="shrink-0">
            Read the backstory
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredContent.map((item, index) => (
            <article
              key={item.title}
              className={index === 0 ? "paper-panel overflow-hidden lg:col-span-2" : "paper-panel overflow-hidden"}
            >
              <div className={index === 0 ? "grid gap-0 lg:grid-cols-[1.15fr_0.85fr]" : ""}>
                <div className="relative min-h-[18rem] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.format} visual for ${item.outlet}.`}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 42vw, 100vw" : "(min-width: 1024px) 28vw, 100vw"}
                    className="object-cover"
                  />
                </div>

                <div className="p-7 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-mocha/72">
                    <span>{item.format}</span>
                    <span className="h-1 w-1 rounded-full bg-plum" />
                    <span>{item.audience}</span>
                  </div>
                  <h3 className="mt-4 text-4xl text-ink sm:text-[3rem]">{item.title}</h3>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-plum">{item.outlet}</p>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-mocha/88">{item.summary}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
