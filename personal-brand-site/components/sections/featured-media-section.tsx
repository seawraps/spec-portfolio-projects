import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredContent } from "@/lib/data";

export function FeaturedMediaSection() {
  return (
    <section id="media" className="anchor-section section-shell">
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

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
          {featuredContent.map((item, index) => (
            <article
              key={item.title}
              className={
                index === 0
                  ? "paper-panel image-lift overflow-hidden lg:row-span-2"
                  : "paper-panel image-lift overflow-hidden"
              }
            >
              <div className={index === 0 ? "grid gap-0 lg:grid-cols-[1.06fr_0.94fr]" : ""}>
                <div className={index === 0 ? "relative min-h-[24rem] overflow-hidden" : "relative min-h-[18rem] overflow-hidden"}>
                  <Image
                    src={item.image}
                    alt={`${item.format} visual for ${item.outlet}.`}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 36vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"}
                    className={index === 0 ? "object-cover object-center" : "object-cover object-center"}
                  />

                  {index === 0 ? (
                    <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                      <div className="max-w-md rounded-[1.7rem] border border-white/14 bg-[rgb(17_11_10/0.6)] p-5 text-white backdrop-blur-md">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/68">
                          Lead story
                        </p>
                        <p className="mt-3 text-lg leading-8 text-white/88">
                          Premium visibility works when the thesis is strong enough to hold a room and still sound like
                          the same person in the recap.
                        </p>
                      </div>
                    </div>
                  ) : null}
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
                  <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-mocha/72">
                    Designed to feel like the kind of media proof that makes an introduction easier.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
