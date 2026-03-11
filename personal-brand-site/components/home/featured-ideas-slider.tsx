"use client";

import Image from "next/image";
import { startTransition, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";
import { featuredIdeas } from "@/lib/home-data";

export function FeaturedIdeasSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIdea = featuredIdeas[activeIndex];

  function selectIdea(index: number) {
    startTransition(() => {
      setActiveIndex(index);
    });
  }

  function stepIdea(direction: 1 | -1) {
    const nextIndex = (activeIndex + direction + featuredIdeas.length) % featuredIdeas.length;
    selectIdea(nextIndex);
  }

  return (
    <div className="editorial-frame overflow-hidden">
      <div
        key={activeIdea.title}
        className="grid gap-0 min-[900px]:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)]"
      >
        <figure className="border-b border-ink/10 bg-white/46 min-[900px]:border-b-0 min-[900px]:border-r">
          <div className="relative aspect-[4/3.35] overflow-hidden bg-[#eadfd2] min-[900px]:h-full min-[900px]:min-h-[29rem] xl:min-h-[31rem]">
            <Image
              src={activeIdea.image}
              alt={activeIdea.alt}
              fill
              sizes="(min-width: 1280px) 41vw, (min-width: 900px) 44vw, 100vw"
              className={cn(
                "object-cover object-[50%_74%]",
                activeIndex === 1 ? "object-[58%_28%]" : "",
                activeIndex === 2 ? "object-[58%_34%]" : "",
              )}
              priority={activeIndex === 0}
            />
          </div>

          <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 px-5 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/74 sm:px-6">
            <span>{activeIdea.venue}</span>
            <span className="h-1 w-1 rounded-full bg-plum/70" />
            <span>{activeIdea.format}</span>
            <span className="h-1 w-1 rounded-full bg-plum/70" />
            <span>{activeIdea.audience}</span>
          </figcaption>
        </figure>

        <div className="flex min-w-0 flex-col px-6 py-7 sm:px-8 sm:py-9">
          <div className="flex flex-col gap-4 min-[1180px]:flex-row min-[1180px]:items-start min-[1180px]:justify-between min-[1180px]:gap-6">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-plum">
                Featured idea / {activeIdea.label}
              </p>
              <h3 className="mt-4 max-w-3xl text-[2.5rem] leading-[0.92] text-ink sm:text-[3.35rem]">
                {activeIdea.title}
              </h3>
            </div>

            <div className="hidden shrink-0 items-center gap-2 min-[1180px]:flex">
              <button
                type="button"
                onClick={() => stepIdea(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 bg-white/72 text-ink hover:border-ink/18 hover:bg-white"
                aria-label="Previous featured idea"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => stepIdea(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 bg-white/72 text-ink hover:border-ink/18 hover:bg-white"
                aria-label="Next featured idea"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-8 text-mocha/92 sm:text-lg">
            {activeIdea.summary}
          </p>

          <div className="mt-8 border-t border-ink/10 pt-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/70">
              What stays with the audience
            </p>
            <p className="mt-4 max-w-2xl text-2xl leading-9 text-ink sm:text-[2rem]">
              {activeIdea.takeaway}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={activeIdea.ctaHref} arrow>
              {activeIdea.ctaLabel}
            </ButtonLink>
            <ButtonLink href="/about" variant="secondary">
              View Nadia&apos;s background
            </ButtonLink>
          </div>

          <div className="mt-8 grid gap-2 pt-2 sm:grid-cols-3">
            {featuredIdeas.map((idea, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={idea.title}
                  type="button"
                  onClick={() => selectIdea(index)}
                  className={cn(
                    "min-h-[7.5rem] border border-ink/10 px-4 py-4 text-left transition-colors",
                    isActive ? "bg-[#2d211d] text-white" : "bg-white/56 text-ink hover:bg-white/78",
                  )}
                  aria-pressed={isActive}
                >
                  <p
                    className={cn(
                      "text-[0.64rem] font-semibold uppercase tracking-[0.24em]",
                      isActive ? "text-white/62" : "text-mocha/68",
                    )}
                  >
                    0{index + 1} / {idea.label}
                  </p>
                  <p className={cn("mt-3 text-base leading-7", isActive ? "text-white/86" : "text-mocha/88")}>
                    {idea.venue}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 min-[1180px]:hidden">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/66">
              Swipe through the editorial notes above
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => stepIdea(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/12 bg-white/72 text-ink hover:border-ink/18 hover:bg-white"
                aria-label="Previous featured idea"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => stepIdea(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/12 bg-white/72 text-ink hover:border-ink/18 hover:bg-white"
                aria-label="Next featured idea"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
