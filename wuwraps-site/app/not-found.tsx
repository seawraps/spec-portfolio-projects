import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Formline } from "@/components/ui/formline";

export default function NotFound() {
  return (
    <section className="on-dark">
      <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
        <p className="eyebrow text-[var(--mist)]">404</p>
        <h1 className="display mt-5 max-w-2xl text-[2.8rem] text-[var(--bone)] sm:text-[4rem]">
          This panel got away from us.
        </h1>
        <Formline className="mt-4 h-4 w-40" />
        <p className="mt-6 max-w-md text-[1.02rem] leading-8 text-[var(--mist)]">
          The page you are after does not exist, or it moved when the studio did. The work,
          the services and the booking form are all still here.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="cedar">
            Back to the Studio
          </ButtonLink>
          <ButtonLink href="/gallery" variant="ghost-dark">
            See the Work
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
