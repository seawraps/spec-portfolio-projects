"use client";

import { startTransition, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { engagementModes } from "@/lib/home-data";
import { cn } from "@/lib/utils";

export function EngagementDetailReveal() {
  const [activeId, setActiveId] = useState<(typeof engagementModes)[number]["id"]>("speaking");
  const activeMode = engagementModes.find((mode) => mode.id === activeId) ?? engagementModes[0];

  function selectMode(id: (typeof engagementModes)[number]["id"]) {
    startTransition(() => {
      setActiveId(id);
    });
  }

  return (
    <div className="editorial-frame overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
        <div className="border-b border-ink/10 bg-white/38 lg:border-b-0 lg:border-r">
          <div className="grid" role="tablist" aria-label="Ways to work with Nadia Vale">
            {engagementModes.map((mode) => {
              const isActive = mode.id === activeMode.id;

              return (
                <button
                  key={mode.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${mode.id}-panel`}
                  id={`${mode.id}-tab`}
                  onClick={() => selectMode(mode.id)}
                  className={cn(
                    "border-b border-ink/10 px-6 py-6 text-left last:border-b-0 sm:px-8",
                    isActive ? "bg-[#2d211d] text-white" : "text-ink hover:bg-white/72",
                  )}
                >
                  <p
                    className={cn(
                      "text-[0.66rem] font-semibold uppercase tracking-[0.28em]",
                      isActive ? "text-white/62" : "text-mocha/68",
                    )}
                  >
                    {mode.label}
                  </p>
                  <p className={cn("mt-3 max-w-md text-[1.35rem] leading-7", isActive ? "text-white/88" : "text-ink")}>
                    {mode.title}
                  </p>
                  <p className={cn("mt-3 max-w-md text-sm leading-7", isActive ? "text-white/74" : "text-mocha/84")}>
                    {mode.fit}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={activeMode.id}
          role="tabpanel"
          id={`${activeMode.id}-panel`}
          aria-labelledby={`${activeMode.id}-tab`}
          className="px-6 py-7 sm:px-8 sm:py-9"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-plum">
            {activeMode.label} detail
          </p>
          <h3 className="mt-4 max-w-3xl text-[2.55rem] leading-[0.94] text-ink sm:text-[3.4rem]">
            {activeMode.title}
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-mocha/92 sm:text-lg">
            {activeMode.summary}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-mocha/88">
            {activeMode.detail}
          </p>

          <div className="mt-8 grid gap-6 border-t border-ink/10 pt-6 xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/68">
                Best when
              </p>
              <p className="mt-4 text-2xl leading-8 text-ink sm:text-[2rem] sm:leading-9">
                {activeMode.fit}
              </p>
            </div>

            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/68">
                Typically includes
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-mocha/88">
                {activeMode.includes.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-ink/8 pb-3 last:border-b-0 last:pb-0">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-plum" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={activeMode.ctaHref} arrow>
              {activeMode.ctaLabel}
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Review the full offering menu
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
