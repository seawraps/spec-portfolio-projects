"use client";

import { useEffect } from "react";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function SiteEffects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      },
    );

    const supportsHover = window.matchMedia("(pointer: fine)").matches;
    const surfaceCleanups = new Map<HTMLElement, () => void>();

    const observeRevealTargets = (scope: ParentNode) => {
      const targets = Array.from(scope.querySelectorAll<HTMLElement>("[data-reveal]"));

      if (scope instanceof HTMLElement && scope.matches("[data-reveal]")) {
        targets.unshift(scope);
      }

      targets.forEach((target) => {
        if (!target.classList.contains("is-visible")) {
          revealObserver.observe(target);
        }
      });
    };

    const attachSurface = (surface: HTMLElement) => {
      if (!supportsHover || surfaceCleanups.has(surface)) {
        return;
      }

      const handleMove = (event: PointerEvent) => {
        const rect = surface.getBoundingClientRect();
        const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
        const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
        const rotateY = (x - 0.5) * 8;
        const rotateX = (0.5 - y) * 8;

        surface.style.setProperty(
          "--surface-tilt",
          `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`,
        );
        surface.style.setProperty("--glow-x", `${(x * 100).toFixed(2)}%`);
        surface.style.setProperty("--glow-y", `${(y * 100).toFixed(2)}%`);
        surface.style.setProperty("--glow-opacity", "1");
      };

      const handleLeave = () => {
        surface.style.removeProperty("--surface-tilt");
        surface.style.setProperty("--glow-opacity", "0");
      };

      surface.addEventListener("pointermove", handleMove);
      surface.addEventListener("pointerleave", handleLeave);

      surfaceCleanups.set(surface, () => {
        surface.removeEventListener("pointermove", handleMove);
        surface.removeEventListener("pointerleave", handleLeave);
      });
    };

    const observeSurfaces = (scope: ParentNode) => {
      if (!supportsHover) {
        return;
      }

      const surfaces = Array.from(scope.querySelectorAll<HTMLElement>("[data-tilt]"));

      if (scope instanceof HTMLElement && scope.matches("[data-tilt]")) {
        surfaces.unshift(scope);
      }

      surfaces.forEach((surface) => {
        attachSurface(surface);
      });
    };

    observeRevealTargets(document);
    observeSurfaces(document);

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            observeRevealTargets(node);
            observeSurfaces(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
      surfaceCleanups.forEach((cleanup) => cleanup());
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
