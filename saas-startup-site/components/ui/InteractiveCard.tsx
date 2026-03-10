"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import {
  type HTMLMotionProps,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

import { cn } from "@/lib/utils";

type InteractiveCardProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function InteractiveCard({
  children,
  className,
  onMouseMove,
  onMouseLeave,
  ...props
}: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const background = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(101, 226, 255, 0.18), rgba(101, 226, 255, 0) 42%)`;

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) {
      onMouseMove?.(event);
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    glowX.set(percentX);
    glowY.set(percentY);
    rotateX.set(((percentY - 50) / 50) * -4.5);
    rotateY.set(((percentX - 50) / 50) * 4.5);
    onMouseMove?.(event);
  }

  function handleMouseLeave(event: React.MouseEvent<HTMLDivElement>) {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
    onMouseLeave?.(event);
  }

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={
        reduceMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1200,
            }
      }
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.7 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {reduceMotion ? null : (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background }}
        />
      )}
      <div className="relative z-[1] h-full">{children}</div>
    </motion.div>
  );
}
