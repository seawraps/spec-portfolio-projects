import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactReasons, siteConfig } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Contact",
  "Reach out to Nadia Vale for speaking, advisory, workshops, partnerships, or media requests.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Tell me what you are building, booking, or trying to clarify."
        description="Share a few practical details and I will point you toward the strongest fit, timeline, and next step. The form below is frontend-only for demo portability, so the success state is simulated in-browser."
      />

      <section className="section-shell pt-0">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="surface-card p-6 sm:p-8">
            <SectionHeading
              eyebrow="Inquiry Form"
              title="Start the conversation."
              description="The most useful notes include who the audience is, what is changing, and what a strong outcome would look like."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="dark-panel p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/62">
                Best For
              </p>
              <div className="mt-6 space-y-4">
                {contactReasons.map((reason) => (
                  <article key={reason.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                    <h3 className="text-2xl text-white">{reason.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/74">{reason.description}</p>
                    <p className="mt-3 text-sm font-semibold text-clay">{reason.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="surface-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/68">
                Direct Options
              </p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-ink/72">
                <p>
                  Email:
                  {" "}
                  <a className="font-semibold text-ink hover:text-rose" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </p>
                <p>
                  Base:
                  {" "}
                  {siteConfig.location}
                </p>
                <p>
                  Typical reply window:
                  {" "}
                  1 to 2 business days
                </p>
              </div>
            </div>

            <div className="surface-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/68">
                What Happens Next
              </p>
              <ol className="mt-5 space-y-4 text-sm leading-7 text-ink/72">
                <li>1. I review fit, timing, and where the biggest leverage seems to be.</li>
                <li>2. If it is a match, I reply with a recommended format and a proposed next call.</li>
                <li>3. For speaking and partnerships, I can also share a media or topic overview on request.</li>
              </ol>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
