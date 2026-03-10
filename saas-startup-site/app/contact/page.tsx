import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/layout/Container";
import { contactChannels } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact OrbitOps to request a demo, discuss pricing, or explore integration and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                Contact OrbitOps
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Let&apos;s design your operations rollout plan.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                Share your goals and current process challenges. We&apos;ll follow up with tailored
                recommendations and a live product walkthrough.
              </p>
            </div>

            <div className="space-y-3">
              {contactChannels.map((channel) => (
                <article key={channel.title} className="surface-card p-6">
                  <h2 className="font-display text-lg font-semibold tracking-tight text-slate-900">
                    {channel.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{channel.detail}</p>
                  <a
                    href={`mailto:${channel.email}`}
                    className="mt-2 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-800"
                  >
                    {channel.email}
                  </a>
                </article>
              ))}
            </div>
          </aside>

          <div className="surface-card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900">
              Send us a message
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              We typically respond within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
