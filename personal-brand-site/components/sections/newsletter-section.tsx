import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { Container } from "@/components/ui/container";
import { newsletterStats, siteConfig } from "@/lib/data";

export function NewsletterSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="paper-panel grid gap-8 overflow-hidden px-6 py-8 md:px-8 md:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-10 lg:py-12">
          <div className="relative">
            <span className="eyebrow">Newsletter</span>
            <h2 className="mt-5 max-w-3xl text-5xl text-ink sm:text-[4.3rem]">{siteConfig.newsletterName}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-mocha/92">{siteConfig.newsletterBlurb}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {newsletterStats.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-ink/10 bg-white/76 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-mocha/84"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-xl text-sm leading-7 text-mocha/84">
              Expect one point of view, one example from the field, and one practical shift you can apply to your own
              visibility strategy that week.
            </p>
          </div>

          <div className="ink-panel p-6 sm:p-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/62">
              From the desk
            </p>
            <p className="mt-4 text-lg leading-8 text-white/82">
              For people building a public reputation around their thinking, not just another content cadence.
            </p>
            <div className="mt-6">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
