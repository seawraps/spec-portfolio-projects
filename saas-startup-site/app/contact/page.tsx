import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/layout/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { contactChannels } from "@/lib/data";

const evaluationSteps = [
  "Share the workflows, handoffs, and approval paths creating the most drag.",
  "We map rollout scope, systems involved, and governance expectations.",
  "You get a tailored walkthrough with pricing and deployment guidance.",
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact OrbitOps to request a demo, discuss rollout plans, review pricing, or explore integration and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-[#04101b] py-14 md:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,184,255,0.2),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(99,241,213,0.12),transparent_26%)]"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <aside className="space-y-6">
            <Reveal>
              <div>
                <p className="data-label text-sky-200">Contact OrbitOps</p>
                <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.08em] text-white sm:text-5xl lg:text-[4.2rem] lg:leading-[0.92]">
                  Map the workflow cluster you need under control next.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Share the operational lane that breaks down most often today. We&apos;ll respond
                  with a tailored walkthrough, rollout sequence, and guidance on pricing,
                  integrations, and governance.
                </p>
              </div>
            </Reveal>

            <Reveal className="grid gap-4 sm:grid-cols-3" delay={0.06}>
              {[
                ["1 week", "Typical first-workflow launch"],
                ["99.97%", "Platform reliability"],
                ["24h", "Average sales response"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.6rem] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-md"
                >
                  <p className="data-label text-slate-400">{label}</p>
                  <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.06em] text-white">
                    {value === "99.97%" ? (
                      <AnimatedCounter value={99.97} suffix="%" decimals={2} />
                    ) : (
                      value
                    )}
                  </p>
                </div>
              ))}
            </Reveal>

            <Reveal className="surface-panel-dark px-6 py-6" delay={0.1}>
              <p className="data-label text-sky-200">What to expect</p>
              <ol className="mt-5 space-y-4">
                {evaluationSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/8 text-xs font-semibold text-white">
                      0{index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <div className="grid gap-4">
              {contactChannels.map((channel, index) => (
                <Reveal key={channel.title} delay={0.12 + index * 0.05}>
                  <article className="surface-panel px-6 py-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="data-label text-slate-500">{channel.title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{channel.detail}</p>
                      </div>
                      <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
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
                </Reveal>
              ))}
            </div>
          </aside>

          <Reveal delay={0.08}>
            <div className="surface-panel-dark noise-mask px-6 py-6 sm:px-8">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4">
                <p className="data-label text-sky-200">Request a walkthrough</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                  Tell us how your operating model works today.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                  The more context you share, the more specific we can be about rollout shape,
                  integrations, security review, and which workflows to prioritize first.
                </p>
              </div>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
