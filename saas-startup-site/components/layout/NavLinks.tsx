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
    <ul
      className={cn(
        "flex items-center gap-2 rounded-full border border-white/10 bg-white/4 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl",
        className,
      )}
    >
      {navigationLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
              pathname === link.href
                ? "bg-[linear-gradient(135deg,rgba(101,226,255,0.18),rgba(22,184,255,0.1))] text-white shadow-[0_16px_34px_-22px_rgba(17,184,255,0.55)] ring-1 ring-white/10"
                : "",
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
