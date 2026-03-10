import Image from "next/image";
import type { MenuCategory as MenuCategoryType } from "@/lib/data";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { Reveal } from "@/components/ui/reveal";

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
      className="scroll-mt-36"
      delay={index * 70}
    >
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <InteractivePanel className={`rounded-[2.4rem] ${reverse ? "lg:order-2" : ""}`}>
          <div className="surface-card-soft rounded-[2.4rem] p-7 sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#d8af79]">
                  {category.courseLabel}
                </p>
                <h2
                  id={`${category.id}-title`}
                  className="mt-4 font-display text-[3rem] leading-[0.88] tracking-[-0.03em] text-[#f8efe4]"
                >
                  {category.title}
                </h2>
              </div>
              <p className="font-display text-[4.6rem] leading-none text-[rgba(255,233,204,0.14)]">
                {String(index + 1).padStart(2, "0")}
              </p>
            </div>

            <p className="mt-4 text-base leading-relaxed text-[#d1bfaa]">{category.description}</p>

            <div className="mt-6 rounded-[1.8rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.04)] p-5">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#f1ddbf]">
                Service Ritual
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#d0bea8]">{category.ritual}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#d8af79]">
                {category.pairing}
              </p>
            </div>

            <figure className="image-shell mt-6 rounded-[2rem]">
              <Image
                src={category.image.src}
                alt={category.image.alt}
                width={1800}
                height={2000}
                className="h-[18rem] w-full object-cover sm:h-[22rem]"
              />
            </figure>
          </div>
        </InteractivePanel>

        <div
          className={`rounded-[2.4rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.03)] p-7 sm:p-8 ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <ul className="divide-y divide-[rgba(255,233,204,0.1)]">
            {category.items.map((item, itemIndex) => (
              <li
                key={item.name}
                className="grid gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#8f6c52]">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display text-[2rem] leading-none text-[#f2e4d2]">
                      {item.name}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-[#cebca8]">
                    {item.description}
                  </p>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f1ddbf] sm:pt-1">
                  {item.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
