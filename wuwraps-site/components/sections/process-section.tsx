import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { company, processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="bg-[var(--fog)] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="eyebrow text-[var(--slate)]">Booking</p>
          <h2 className="display mt-5 max-w-3xl text-[2.4rem] text-[var(--ink)] sm:text-[3.2rem]">
            Appointment only. Worth it.
          </h2>
          <p className="mt-5 max-w-xl text-[1rem] leading-8 text-[var(--slate)]">
            No walk-ins, no queue of half-finished cars. {company.appointmentNote.replace(
              "Appointment only. ",
              "",
            )}
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80}>
              <li
                className="border-t-2 pt-5"
                style={{ borderColor: ["var(--cedar)", "var(--sea)", "var(--spark)"][index % 3] }}
              >
                <p className="label text-[0.62rem] text-[var(--slate)]">Step {index + 1}</p>
                <h3 className="display mt-2 text-[1.2rem] text-[var(--ink)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--slate)]">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
