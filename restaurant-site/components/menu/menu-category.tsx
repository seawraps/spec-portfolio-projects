import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import type { MenuCategory as MenuCategoryType } from "@/lib/data";

type MenuCategoryProps = {
  category: MenuCategoryType;
  index: number;
};

export function MenuCategory({ category, index }: MenuCategoryProps) {
  const reverse = index % 2 === 1;

  return (
    <Reveal
      as="section"
      id={category.id}
      aria-labelledby={`${category.id}-title`}
      className="scroll-mt-28 border-t border-[rgba(233,209,181,0.1)] py-12 first:border-t-0 first:pt-0 sm:py-16"
      delay={index * 70}
    >
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
        <div className={reverse ? "lg:order-2" : ""}>
          <p className="eyebrow">{category.courseLabel}</p>
          <h2
            id={`${category.id}-title`}
            className="mt-5 max-w-lg font-display text-[clamp(3rem,6vw,5rem)] leading-[0.88] tracking-[-0.055em] text-[#fff0db]"
          >
            {category.title}
          </h2>
          <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-[#cfbda8] sm:text-[1.08rem]">
            {category.description}
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="border-t border-[rgba(233,209,181,0.1)] pt-4">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#d7aa75]">
                Service Ritual
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#cfbda8]">{category.ritual}</p>
            </div>
            <div className="border-t border-[rgba(233,209,181,0.1)] pt-4">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#d7aa75]">
                Pairing
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#cfbda8]">{category.pairing}</p>
            </div>
          </div>
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <figure className="image-frame rounded-[1.8rem]">
            <Image
              src={category.image.src}
              alt={category.image.alt}
              width={2200}
              height={1600}
              className="h-[24rem] w-full object-cover sm:h-[32rem]"
            />
          </figure>
        </div>
      </div>

      <ul className="mt-10 divide-y divide-[rgba(233,209,181,0.1)]">
        {category.items.map((item, itemIndex) => (
          <li
            key={item.name}
            className="grid gap-4 py-5 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-6"
          >
            <p className="pt-1 text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-[#8f6a4b]">
              {String(itemIndex + 1).padStart(2, "0")}
            </p>
            <div>
              <h3 className="font-display text-[1.9rem] leading-[0.96] tracking-[-0.035em] text-[#fff1df] sm:text-[2.35rem]">
                {item.name}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#cfbda8] sm:text-base">
                {item.description}
              </p>
            </div>
            <p className="pt-1 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#f1ddbf]">
              {item.price}
            </p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
