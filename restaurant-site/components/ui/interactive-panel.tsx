"use client";

import type { ReactNode } from "react";

type InteractivePanelProps = {
  children: ReactNode;
  className?: string;
};

export function InteractivePanel({ children, className = "" }: InteractivePanelProps) {
  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty("--pointer-x", `${x}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${y}%`);
    event.currentTarget.style.setProperty("--rotate-x", `${((50 - y) / 8).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--rotate-y", `${((x - 50) / 8).toFixed(2)}deg`);
  }

  function resetPointer(event: React.PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--pointer-x", "50%");
    event.currentTarget.style.setProperty("--pointer-y", "50%");
    event.currentTarget.style.setProperty("--rotate-x", "0deg");
    event.currentTarget.style.setProperty("--rotate-y", "0deg");
  }

  return (
    <div
      className={`interactive-panel ${className}`.trim()}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      {children}
    </div>
  );
}
