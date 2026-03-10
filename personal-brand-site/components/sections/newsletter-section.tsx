import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { Container } from "@/components/ui/container";
import { newsletterStats, siteConfig } from "@/lib/data";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="section-shell">
      <Container>
        <div className="paper-panel overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.06fr_0.94fr] lg:items-stretch">
            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <span className="eyebrow">Newsletter</span>
              <div className="mt-6 grid gap-6 xl:grid-cols-[1.12fr_0.88fr] xl:items-start">
                <div>
                  <h2 className="max-w-3xl text-5xl text-ink sm:text-[4.3rem]">{siteConfig.newsletterName}</h2>
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
                    Expect one point of view, one example from the field, and one practical shift you can apply to your
                    own visibility strategy that week.
                  </p>
                </div>

                <div className="note-card p-5 sm:p-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
                    Latest Note
                  </p>
                  <h3 className="mt-4 text-2xl text-ink sm:text-[2.35rem]">
                    Why the strongest founder brands read like a column, not a calendar.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-mocha/88">
                    One authored argument, one field example, and one small shift you can borrow before the next launch,
                    keynote, or media moment.
                  </p>
                </div>
              </div>
            </div>

            <div className="ink-panel m-3 p-6 sm:m-4 sm:p-8 lg:m-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/62">
                From the desk
              </p>
              <p className="mt-4 text-lg leading-8 text-white/82">
                For people building a public reputation around their thinking, not just another content cadence.
              </p>
              <div className="mt-4 rounded-[1.45rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-white/72">
                One clear note every week. No filler. No trend recap. No empty authority theater.
              </div>
              <div className="mt-6">
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
