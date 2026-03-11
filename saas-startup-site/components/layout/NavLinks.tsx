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
        "flex items-center gap-1 rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl",
        className,
      )}
    >
      {navigationLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn(
              "group flex min-w-[5.5rem] items-center justify-center rounded-[1rem] px-3.5 py-3 text-center transition-colors hover:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
              pathname === link.href
                ? "bg-[linear-gradient(135deg,rgba(101,226,255,0.18),rgba(22,184,255,0.1))] text-white shadow-[0_16px_34px_-22px_rgba(17,184,255,0.55)] ring-1 ring-white/10"
                : "text-slate-300 hover:text-white",
              itemClassName,
            )}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            <span className="text-sm font-medium">{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
