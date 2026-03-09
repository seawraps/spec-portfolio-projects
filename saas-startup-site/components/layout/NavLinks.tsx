import Link from "next/link";

import { cn } from "@/lib/utils";
import { navigationLinks } from "@/lib/data";

type NavLinksProps = {
  className?: string;
  itemClassName?: string;
};

export function NavLinks({ className, itemClassName }: NavLinksProps) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {navigationLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900",
              itemClassName,
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
