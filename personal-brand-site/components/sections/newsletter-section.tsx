import { NewsletterSignup } from "@/components/forms/newsletter-signup";
import { Container } from "@/components/ui/container";
import { newsletterStats, siteConfig } from "@/lib/data";

export function NewsletterSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="dark-panel grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow border-white/10 bg-white/6 text-white/74">Newsletter</span>
            <h2 className="mt-5 text-4xl leading-none text-white sm:text-5xl">{siteConfig.newsletterName}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/76">{siteConfig.newsletterBlurb}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {newsletterStats.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6">
            <p className="text-sm leading-7 text-white/72">
              Expect one sharp framework, one real-world example, and one practical shift you can apply that week.
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
