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
        "flex items-center gap-1 rounded-[0.95rem] border border-white/8 bg-[#07111f]/88 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl",
        className,
      )}
    >
      {navigationLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn(
              "group flex min-w-[5rem] items-center justify-center rounded-[0.8rem] px-3.5 py-2.5 text-center transition-colors hover:bg-white/7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
              pathname === link.href
                ? "bg-[linear-gradient(135deg,rgba(103,232,249,0.2),rgba(14,165,233,0.08))] text-white shadow-[0_16px_34px_-22px_rgba(17,184,255,0.55)] ring-1 ring-cyan-300/18"
                : "text-slate-300 hover:text-white",
              itemClassName,
            )}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            <span className="text-sm font-medium tracking-[-0.01em]">{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
