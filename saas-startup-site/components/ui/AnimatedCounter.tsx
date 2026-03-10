"use client";

import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  return (
    <span className={cn(className)}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
