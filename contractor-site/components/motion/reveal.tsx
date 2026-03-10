"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node || typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let hasAnimated = false;

    const runAnimation = () => {
      if (hasAnimated) {
        return;
      }

      hasAnimated = true;

      node.animate(
        [
          {
            opacity: 0,
            transform: `translate3d(0, ${distance}px, 0)`,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
            filter: "blur(0)",
          },
        ],
        {
          duration: 820,
          delay,
          easing: "cubic-bezier(0.2, 0.65, 0.22, 1)",
          fill: "both",
        },
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          runAnimation();

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          hasAnimated = false;
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.14,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          "--reveal-distance": `${distance}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
