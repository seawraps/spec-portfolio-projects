import type { Metadata } from "next";
import Image from "next/image";

import { ContactForm } from "@/components/forms/contact-form";
import { PageIntro } from "@/components/sections/page-intro";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactReasons, siteConfig } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Contact",
  "Reach out to Nadia Vale for speaking, advisory, workshops, partnerships, or media requests.",
  "/contact",
);

type ContactPageProps = {
  searchParams?: Promise<{
    type?: string | string[];
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const rawInquiryType = Array.isArray(resolvedSearchParams?.type)
    ? resolvedSearchParams.type[0]
    : resolvedSearchParams?.type;
  const presetInquiryType =
    rawInquiryType === "speaking" || rawInquiryType === "advisory" || rawInquiryType === "partnership"
      ? rawInquiryType
      : undefined;

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Tell me what you are building, booking, or trying to sharpen in public."
        description="Share a few practical details and I will point you toward the best-fit format, timing, and next step. The form below is frontend-only for demo portability, so the success state is simulated in-browser."
        aside={
          <div className="paper-panel p-6 sm:p-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
              Best inquiry ingredients
            </p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-mocha/88">
              <p>Audience, room, or market context</p>
              <p>Timing, launch date, or event window</p>
              <p>What should feel different after the work lands</p>
            </div>
            <ButtonLink href={`mailto:${siteConfig.email}`} variant="secondary" className="mt-5" arrow>
              Email directly
            </ButtonLink>
          </div>
        }
      />

      <section className="section-shell pt-0">
        <Container className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="paper-panel p-6 sm:p-8">
            <SectionHeading
              eyebrow="Inquiry Form"
              title="Start the conversation."
              description="The strongest inquiries include the audience, timing, and the shift you want the room, brand, or campaign to create."
            />
            <div className="mt-8">
              <ContactForm presetInquiryType={presetInquiryType} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="media-frame relative aspect-[4/3.25] overflow-hidden rounded-[2.2rem]">
              <Image
                src="/images/nadia-desk-portrait.jpg"
                alt="Nadia Vale seated at a desk in a bright workspace."
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="ink-panel p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/62">
                Best For
              </p>
              <div className="mt-6 space-y-4">
                {contactReasons.map((reason) => (
                  <article key={reason.title} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-6">
                    <h3 className="text-2xl text-white">{reason.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/76">{reason.description}</p>
                    <p className="mt-3 text-sm font-semibold text-gold">{reason.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="paper-panel p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                Direct Options
              </p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-mocha/88">
                <p>
                  Email:
                  {" "}
                  <a className="font-semibold text-ink hover:text-plum" href={`mailto:${siteConfig.email}`}>
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

            <div className="paper-panel p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                What Happens Next
              </p>
              <ol className="mt-5 space-y-4 text-sm leading-7 text-mocha/88">
                <li>1. I review fit, timing, and where the strongest narrative leverage appears to be.</li>
                <li>2. If it is a match, I reply with the recommended format, scope, and a proposed next conversation.</li>
                <li>3. For speaking, workshops, and partnerships, I can also share a topic or media overview on request.</li>
              </ol>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
