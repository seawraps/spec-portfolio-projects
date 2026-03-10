import { Container } from "@/components/ui/container";
import { socialProofLogos } from "@/lib/data";

export function SocialProofSection() {
  return (
    <section id="proof" className="anchor-section section-shell pt-4 md:pt-6 lg:pt-7">
      <Container>
        <div className="section-rule pt-8">
          <div className="paper-panel flex flex-col gap-6 px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-2xl">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-mocha/72">
                Selected Rooms and Collaborations
              </p>
              <p className="mt-3 max-w-2xl text-base leading-8 text-mocha/92">
                Positioned for founder-led brands, modern media properties, and events that want a sharper blend of
                substance, warmth, and commercial clarity.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:max-w-3xl lg:justify-end">
              {socialProofLogos.map((logo) => (
                <div
                  key={logo}
                  className="rounded-full border border-ink/10 bg-white/86 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink shadow-[0_16px_28px_-24px_rgba(35,24,20,0.22)]"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
