import { Container } from "@/components/layout/container";
import { trustedBy } from "@/lib/data";

/**
 * A quiet strip of the communities and shops that already know the name.
 */
export function TrustIndicators() {
  return (
    <section className="on-dark border-t border-[var(--line-darker)] bg-[var(--ink-deep)]">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 lg:justify-between">
        <p className="label text-[0.6rem] text-[rgba(246,245,241,0.42)]">
          Known across the PNW
        </p>
        {trustedBy.map((name) => (
          <p key={name} className="label text-[0.66rem] text-[var(--mist)]">
            {name}
          </p>
        ))}
      </Container>
    </section>
  );
}
