import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/data";

export function PartnershipCtaSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="media-frame relative overflow-hidden rounded-[2.4rem]">
          <Image
            src="/images/nadia-workshop.jpg"
            alt="Nadia Vale leading a workshop for a group around a conference table."
            width={1800}
            height={1202}
            className="h-[28rem] w-full object-cover md:h-[31rem]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(18_12_10/0.88)] via-[rgb(18_12_10/0.62)] to-[rgb(18_12_10/0.18)]" />

          <div className="absolute inset-0 z-10 flex items-end p-6 sm:p-8 lg:p-12">
            <div className="max-w-3xl rounded-[2rem] border border-white/12 bg-[rgb(17_11_10/0.58)] p-6 text-white backdrop-blur-md sm:p-8 lg:p-10">
              <span className="eyebrow border-white/12 bg-white/8 text-white/74">Partnerships and Booking</span>
              <h2 className="mt-5 max-w-3xl text-4xl text-white sm:text-5xl lg:text-[4.1rem]">
                Need a keynote, workshop, or media-ready partner presence that still feels human?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
                I collaborate with founder-led brands, conference teams, and premium partners that care about clear
                ideas, strong rooms, and polished public-facing execution.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" arrow>
                  Start an Inquiry
                </ButtonLink>
                <ButtonLink href={`mailto:${siteConfig.email}`} variant="secondary" arrow className="border-white/20 bg-white/12 text-white hover:bg-white/18 hover:text-white">
                  Email {siteConfig.email}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
