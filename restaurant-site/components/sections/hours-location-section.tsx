"use client";

import Image from "next/image";
import { startTransition, useState } from "react";

import { Reveal } from "@/components/ui/reveal";
import { visitMoments } from "@/lib/experience-data";
import { contactDetails } from "@/lib/data";

export function HoursLocationSection() {
  const [activeId, setActiveId] = useState(visitMoments[0].id);
  const activeMoment = visitMoments.find((moment) => moment.id === activeId) ?? visitMoments[0];

  return (
    <section className="section-shell section-light px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[96rem]">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Reveal>
              <p className="eyebrow !text-[#9f6b3d]">Visit</p>
              <h2 className="mt-5 max-w-lg font-display text-[clamp(3.1rem,6.8vw,5.6rem)] leading-[0.88] tracking-[-0.055em] text-[#21150f]">
                Visit details that behave like service cues.
              </h2>
              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-[#5b4538] sm:text-[1.08rem]">
                Pick the part of the evening you care about most and the page shifts with it,
                keeping reservations, callouts, and location details close to the room.
              </p>
            </Reveal>

            <div className="mt-10">
              {visitMoments.map((moment, index) => {
                const isActive = moment.id === activeMoment.id;

                return (
                  <Reveal key={moment.id} delay={index * 80}>
                    <button
                      type="button"
                      onClick={() => startTransition(() => setActiveId(moment.id))}
                      className={`w-full border-t border-[#d7c2af] py-5 text-left transition-colors duration-300 ${
                        isActive ? "text-[#1f140f]" : "text-[#6a5242] hover:text-[#1f140f]"
                      }`}
                    >
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-[#9f6b3d]">
                        {moment.label}
                      </p>
                      <h3 className="mt-3 font-display text-[2rem] leading-[0.92] tracking-[-0.04em] sm:text-[2.5rem]">
                        {moment.title}
                      </h3>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal>
            <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
              <figure className="image-frame rounded-[2rem]">
                <Image
                  src={activeMoment.image.src}
                  alt={activeMoment.image.alt}
                  width={2200}
                  height={1600}
                  className="h-[24rem] w-full object-cover sm:h-[33rem] lg:h-[38rem]"
                />
              </figure>

              <div className="frame-panel-light rounded-[2rem] p-6 sm:p-7">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#9f6b3d]">
                  Visit Note
                </p>
                <p className="mt-4 text-[1rem] leading-relaxed text-[#4c392d] sm:text-[1.08rem]">
                  {activeMoment.description}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-[#6c5546]">{activeMoment.detail}</p>
                <p className="mt-6 border-t border-[#d5c0ad] pt-6 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#8f6038]">
                  {activeMoment.hours}
                </p>

                <address className="mt-6 not-italic text-sm leading-relaxed text-[#6c5546]">
                  <p>{contactDetails.addressLine1}</p>
                  <p>{contactDetails.addressLine2}</p>
                  <p className="mt-2">{contactDetails.phone}</p>
                </address>

                <a
                  href={activeMoment.ctaHref}
                  target={activeMoment.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={activeMoment.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="editorial-link mt-8 !text-[#7e502f]"
                >
                  {activeMoment.ctaLabel}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
