import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CircledProps = {
  children: ReactNode;
  /** When true, the circle draws itself on load. */
  animate?: boolean;
};

/**
 * Wraps a word in a hand-drawn paint-pen circle, two overlapping passes like
 * someone circled it on the studio wall. Decorative.
 */
export function Circled({ children, animate = false }: CircledProps) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        viewBox="0 0 300 110"
        preserveAspectRatio="none"
        aria-hidden="true"
        className={cn(
          "absolute -left-[0.35em] -top-[0.18em] h-[calc(100%+0.36em)] w-[calc(100%+0.7em)] -rotate-2",
          animate && "circle-draw",
        )}
      >
        <path
          d="M28 62 C 44 16, 248 8, 284 44 C 302 82, 118 106, 40 92 C 6 84, 12 66, 34 56"
          pathLength={1}
          fill="none"
          stroke="var(--spark)"
          strokeWidth="5.5"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M36 68 C 58 26, 240 18, 276 50"
          pathLength={1}
          fill="none"
          stroke="var(--spark)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
    </span>
  );
}
