import Image from "next/image";
import { galleryImages } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

type GallerySectionProps = {
  title?: string;
  description?: string;
  theme?: "light" | "dark";
};

export function GallerySection({
  title = "A dining room designed to seduce the evening forward",
  description = "Warm interiors, polished bar service, ocean air, and a terrace that reads differently in daylight and after dark.",
  theme = "dark",
}: GallerySectionProps) {
  const sectionClass = theme === "light" ? "section-light" : "section-dark";
  const cardClass =
    theme === "light"
      ? "surface-card text-[#201511]"
      : "border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.03)] text-[#f6ecdf]";
  const captionColor = theme === "light" ? "text-[#5b4538]" : "text-[#d4c3b0]";

  return (
    <section className={`${sectionClass} py-16 md:py-20 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Gallery"
          title={title}
          description={description}
          align="center"
          theme={theme}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className={`${cardClass} overflow-hidden rounded-[2rem] ${
                image.layout === "tall" ? "lg:min-h-[38rem]" : "lg:min-h-[30rem]"
              }`}
            >
              <div className="overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1800}
                  height={1800}
                  className={`w-full object-cover ${
                    image.layout === "tall" ? "h-[30rem] lg:h-[38rem]" : "h-[22rem] lg:h-[30rem]"
                  }`}
                />
              </div>
              <figcaption className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d1a364]">
                  {image.title}
                </p>
                <p className={`mt-3 text-base leading-relaxed ${captionColor}`}>{image.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
