import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/layout/Container";
import { contactChannels } from "@/lib/data";

const evaluationSteps = [
  "Share the workflows and handoffs that create the most drag.",
  "We map rollout scope, stakeholders, and integration surfaces.",
  "You get a tailored walkthrough with pricing and deployment guidance.",
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact OrbitOps to request a demo, discuss rollout plans, review pricing, or explore integration and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <section className="bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#eef5fb_100%)] py-14 md:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <aside className="space-y-6">
            <div>
              <p className="eyebrow-label">Contact OrbitOps</p>
              <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[3.8rem] lg:leading-[0.96]">
                Let&apos;s map the operational workflows you need to bring under control.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Share your current process bottlenecks, the teams involved, and the systems in the
                loop. We&apos;ll respond with a tailored product walkthrough and rollout path.
              </p>
            </div>

            <div className="surface-panel px-6 py-6">
              <p className="data-label text-slate-500">What to expect</p>
              <ol className="mt-5 space-y-4">
                {evaluationSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                      0{index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid gap-4">
              {contactChannels.map((channel) => (
                <article key={channel.title} className="surface-panel px-6 py-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="data-label text-slate-500">{channel.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{channel.detail}</p>
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
                      {channel.responseTime}
                    </span>
                  </div>
                  <a
                    href={`mailto:${channel.email}`}
                    className="mt-4 inline-flex text-sm font-semibold text-slate-950 hover:text-sky-700"
                  >
                    {channel.email}
                  </a>
                </article>
              ))}
            </div>
          </aside>

          <div className="surface-panel-dark px-6 py-6 sm:px-8">
            <p className="data-label text-sky-300">Request a walkthrough</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
              Tell us how your operating model works today.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              The more context you share, the more specific we can be about integrations, rollout
              scope, and which workflows to prioritize first.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
