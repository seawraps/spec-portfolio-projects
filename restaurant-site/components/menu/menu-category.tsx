import type { MenuCategory as MenuCategoryType } from "@/lib/data";

type MenuCategoryProps = {
  category: MenuCategoryType;
};

export function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-title`}
      className="surface-card-soft rounded-3xl p-6 sm:p-8"
    >
      <header className="border-b border-stone-200 pb-5">
        <h2 id={`${category.id}-title`} className="font-display text-3xl text-stone-900">
          {category.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{category.description}</p>
      </header>

      <ul className="mt-2 divide-y divide-stone-200">
        {category.items.map((item) => (
          <li key={item.name} className="grid gap-3 py-5 sm:grid-cols-[1fr_auto] sm:items-start">
            <div>
              <h3 className="text-lg font-semibold text-stone-800">{item.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">{item.description}</p>
            </div>
            <p className="text-base font-semibold text-amber-700 sm:pt-0.5">{item.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
