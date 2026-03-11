"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useState } from "react";

import { Reveal } from "@/components/ui/reveal";
import { signatureSpotlights } from "@/lib/experience-data";

export function FeaturedDishes() {
  const [activeId, setActiveId] = useState(signatureSpotlights[0].id);
  const activeDish =
    signatureSpotlights.find((dish) => dish.id === activeId) ?? signatureSpotlights[0];

  return (
    <section className="section-shell px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[96rem]">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="eyebrow">Signature Dishes</p>
              <h2 className="mt-5 max-w-lg font-display text-[clamp(3.3rem,7vw,5.8rem)] leading-[0.88] tracking-[-0.055em] text-[#fff0db]">
                A menu preview built like a tableside conversation.
              </h2>
            </div>
            <p className="max-w-2xl text-[1rem] leading-relaxed text-[#cfbda8] sm:text-[1.08rem] lg:justify-self-end">
              Select a dish and the room answers with plating, pacing, and pairing. The interaction
              stays slow and tactile instead of feeling like product tabs.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
          <Reveal>
            <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-[rgba(233,209,181,0.12)] bg-[rgba(255,255,255,0.03)] sm:min-h-[34rem] lg:min-h-[42rem]">
              {signatureSpotlights.map((dish) => (
                <div
                  key={dish.id}
                  className={`absolute inset-0 image-fade ${
                    dish.id === activeDish.id
                      ? "translate-x-0 opacity-100"
                      : "pointer-events-none translate-x-4 opacity-0"
                  }`}
                >
                  <Image
                    src={dish.image.src}
                    alt={dish.image.alt}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,5,0.04),rgba(8,6,5,0.5)_58%,rgba(8,6,5,0.88))]" />
                </div>
              ))}

              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-10">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#d7aa75]">
                  {activeDish.course}
                </p>
                <div className="mt-4 flex items-end justify-between gap-4">
                  <h3 className="max-w-2xl font-display text-[2.8rem] leading-[0.88] tracking-[-0.04em] text-[#fff1df] sm:text-[4.2rem]">
                    {activeDish.name}
                  </h3>
                  <p className="pb-2 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#f1ddbf]">
                    {activeDish.price}
                  </p>
                </div>
                <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-[#dccab6] sm:text-[1.08rem]">
                  {activeDish.description}
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#c6b29b]">
                  {activeDish.note}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="frame-panel rounded-[2rem] p-5 sm:p-6 lg:p-8">
            <div className="border-b border-[rgba(233,209,181,0.1)] pb-5">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#d7aa75]">
                Menu Spotlight
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#cfbda8] sm:text-base">
                Each course is written to sound like service, not e-commerce. The emphasis stays on
                appetite, sequence, and what should be poured beside it.
              </p>
            </div>

            <div className="mt-3">
              {signatureSpotlights.map((dish, index) => {
                const isActive = dish.id === activeDish.id;

                return (
                  <Reveal key={dish.id} delay={index * 70}>
                    <button
                      type="button"
                      onClick={() => startTransition(() => setActiveId(dish.id))}
                      className={`w-full border-b border-[rgba(233,209,181,0.1)] py-5 text-left transition-colors duration-300 ${
                        isActive ? "text-[#fff1df]" : "text-[#cfbda8] hover:text-[#fff1df]"
                      }`}
                    >
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-[#a98766]">
                            {dish.course}
                          </p>
                          <h3 className="mt-3 font-display text-[2rem] leading-[0.92] tracking-[-0.04em] sm:text-[2.4rem]">
                            {dish.name}
                          </h3>
                        </div>
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d7aa75]">
                          {dish.price}
                        </span>
                      </div>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed">{dish.pairing}</p>
                    </button>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={260}>
              <Link href="/menu" className="editorial-link mt-6">
                View The Full Menu
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
