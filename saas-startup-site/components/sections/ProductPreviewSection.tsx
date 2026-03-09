import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  "Unified command board for all recurring workflows",
  "SLA risk alerts and escalation rules",
  "Cross-tool event timeline and audit history",
  "Export-ready weekly executive summary reports",
];

export function ProductPreviewSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Product Snapshot"
          title="A control surface built for day-to-day operators"
          description="OrbitOps combines workflow execution, exception handling, and analytics in one clear interface your team can actually use every day."
          centered
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-900/20">
            <Image
              src="/product-dashboard.svg"
              alt="OrbitOps product dashboard mockup showing workflow metrics, task pipeline, and exception feed"
              width={1600}
              height={980}
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900">
              What teams monitor in OrbitOps
            </h3>
            <ul className="mt-5 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <span
                    className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xs font-semibold text-cyan-800"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
