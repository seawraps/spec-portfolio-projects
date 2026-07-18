"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type TiltPanelProps = {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  max?: number;
};

/**
 * Tilts its child a few degrees toward the cursor, like a panel catching the
 * light. Only active on hover-capable pointers with motion allowed.
 */
export function TiltPanel({ children, className, max = 4 }: TiltPanelProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [transform, setTransform] = useState<string | undefined>(undefined);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!enabled || !ref.current) {
      return;
    }
    const bounds = ref.current.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTransform(
      `rotateY(${(px * max * 2).toFixed(2)}deg) rotateX(${(-py * max * 1.4).toFixed(2)}deg)`,
    );
  }

  function onMouseLeave() {
    setTransform(undefined);
  }

  return (
    <div className="[perspective:1100px]">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={cn("tilt-frame transition-transform duration-200 will-change-transform", className)}
        style={transform ? { transform } : undefined}
      >
        {children}
      </div>
    </div>
  );
}
