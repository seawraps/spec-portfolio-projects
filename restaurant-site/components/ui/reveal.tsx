"use client";

import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealTag = "div" | "section";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: RevealTag;
  children: ReactNode;
  delay?: number;
  distance?: number;
  once?: boolean;
};

export function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  distance = 32,
  once = true,
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const Element = Tag;

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once]);

  const mergedStyle = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-distance": `${distance}px`,
    ...style,
  } as CSSProperties;

  return (
    <Element
      ref={ref as never}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`.trim()}
      style={mergedStyle}
      {...props}
    >
      {children}
    </Element>
  );
}
