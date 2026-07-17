import Image from "next/image";

import { Container } from "@/components/layout/container";
import { ButtonLink, buttonClassName } from "@/components/ui/button-link";
import { Formline } from "@/components/ui/formline";
import { Reveal } from "@/components/motion/reveal";
import { company } from "@/lib/data";

export function CtaSection() {
  return (
    <section className="on-dark relative overflow-hidden bg-[var(--graphite)] py-20 lg:py-28">
      <div className="halftone-corner" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[80%] -translate-x-1/2 -translate-y-1/2 opacity-35"
        aria-hidden="true"
      >
        <Image
          src="/images/art/spray-cta.png"
          alt=""
          fill
          sizes="80vw"
          className="object-contain"
        />
      </div>
      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display print-offset text-[2.6rem] text-[var(--bone)] sm:text-[3.6rem]">
              Wrapped right,
              <br />
              or not at all.
            </h2>
            <Formline className="mx-auto mt-5 h-4 w-44" />
            <p className="mx-auto mt-6 max-w-md text-[1rem] leading-8 text-[var(--mist)]">
              Tell Mark about the car and the look you are chasing. Straight answers,
              competitive pricing, and the best work in town.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="cedar">
                Book a Consult
              </ButtonLink>
              <a href={`tel:${company.phoneRaw}`} className={buttonClassName("ghost-dark")}>
                Call {company.phoneDisplay}
              </a>
            </div>
            <p className="label mt-6 text-[0.62rem] text-[rgba(246,245,241,0.62)]">
              {company.appointmentNote}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
