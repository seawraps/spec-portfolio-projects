import type { MenuCategory as MenuCategoryType } from "@/lib/data";

type MenuCategoryProps = {
  category: MenuCategoryType;
};

export function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-title`}
      className="surface-card-soft rounded-[2rem] p-7 sm:p-8"
    >
      <header className="border-b border-[rgba(255,233,204,0.12)] pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d1a364]">
          {category.id}
        </p>
        <h2 id={`${category.id}-title`} className="mt-4 font-display text-4xl leading-none text-[#f8efe4]">
          {category.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#d4c3b0]">
          {category.description}
        </p>
      </header>

      <ul className="mt-4 divide-y divide-[rgba(255,233,204,0.1)]">
        {category.items.map((item) => (
          <li key={item.name} className="grid gap-3 py-5 sm:grid-cols-[1fr_auto] sm:items-start">
            <div>
              <h3 className="text-xl font-semibold text-[#f2e4d2]">{item.name}</h3>
              <p className="mt-2 text-base leading-relaxed text-[#cebca8]">{item.description}</p>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f1ddbf] sm:pt-1">
              {item.price}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
