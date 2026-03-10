import Image from "next/image";
import { galleryImages } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { Reveal } from "@/components/ui/reveal";

type GallerySectionProps = {
  title?: string;
  description?: string;
  theme?: "light" | "dark";
};

const galleryPlacements = [
  "lg:col-span-7",
  "lg:col-span-5 lg:row-span-2",
  "lg:col-span-5 lg:row-span-2",
  "lg:col-span-7",
];

export function GallerySection({
  title = "A gallery built around atmosphere, service, and the way the light changes after sunset",
  description = "Warm interiors, polished bar service, ocean air, and a terrace that reads differently in daylight and after dark.",
  theme = "dark",
}: GallerySectionProps) {
  const sectionClass = theme === "light" ? "section-light" : "section-dark";
  const panelClass =
    theme === "light"
      ? "border border-[rgba(77,50,29,0.1)] bg-[rgba(255,255,255,0.64)]"
      : "border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.03)]";
  const captionCardClass =
    theme === "light"
      ? "border border-[rgba(255,233,204,0.2)] bg-[rgba(21,13,10,0.66)]"
      : "border border-[rgba(255,233,204,0.12)] bg-[rgba(12,8,6,0.62)]";
  const captionColor = "text-[#f7efe7]";
  const copyColor = "text-[#e5d6c6]";

  return (
    <section className={`${sectionClass} py-18 md:py-22 lg:py-26`}>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title={title}
            description={description}
            align="center"
            theme={theme}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:auto-rows-[17rem]">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              delay={80 + index * 90}
              className={`${galleryPlacements[index]} ${image.layout === "tall" ? "lg:min-h-[34rem]" : ""}`}
            >
              <InteractivePanel className="group h-full rounded-[2.2rem]">
                <figure className={`${panelClass} relative h-full overflow-hidden rounded-[2.2rem]`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,6,4,0.05)_0%,rgba(9,6,4,0.16)_48%,rgba(9,6,4,0.82)_100%)]" />

                  <figcaption
                    className={`absolute bottom-4 left-4 right-4 rounded-[1.55rem] p-5 backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[18rem] ${captionCardClass}`}
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#d8af79]">
                      {image.title}
                    </p>
                    <p
                      className={`mt-3 max-w-md text-base leading-relaxed transition-transform duration-500 group-hover:-translate-y-1 ${captionColor}`}
                    >
                      {image.caption}
                    </p>
                    <p className={`mt-4 text-xs uppercase tracking-[0.28em] ${copyColor}`}>
                      Astera atmosphere study
                    </p>
                  </figcaption>
                </figure>
              </InteractivePanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
