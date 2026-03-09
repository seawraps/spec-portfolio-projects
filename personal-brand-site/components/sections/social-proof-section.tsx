import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { socialProofLogos } from "@/lib/data";

export function SocialProofSection() {
  return (
    <section className="section-shell pt-4">
      <Container>
        <div className="surface-card px-6 py-8 sm:px-8 sm:py-10">
          <SectionHeading
            eyebrow="Social Proof"
            title="Trusted by founder-led teams, modern media brands, and rooms that expect substance."
            description="This concept brand is positioned for advisory, speaking, and sponsorship opportunities, so the proof points are designed to feel commercially believable and easy to scan."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {socialProofLogos.map((logo) => (
              <div
                key={logo}
                className="rounded-full border border-ink/10 bg-sand/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink/68"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
