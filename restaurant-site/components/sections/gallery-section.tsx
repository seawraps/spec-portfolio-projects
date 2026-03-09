import Image from "next/image";
import { galleryImages } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

type GallerySectionProps = {
  title?: string;
  description?: string;
};

export function GallerySection({
  title = "A space shaped for long dinners",
  description = "Natural textures, warm lighting, and a kitchen designed to be part of the room.",
}: GallerySectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Gallery" title={title} description={description} align="center" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-100"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={840}
                height={620}
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
