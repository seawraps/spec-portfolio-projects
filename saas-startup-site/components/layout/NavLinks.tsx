"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navigationLinks } from "@/lib/data";

type NavLinksProps = {
  className?: string;
  itemClassName?: string;
};

export function NavLinks({ className, itemClassName }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {navigationLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600",
              pathname === link.href ? "bg-slate-100 text-slate-900" : "",
              itemClassName,
            )}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
