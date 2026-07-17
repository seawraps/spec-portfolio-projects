import { cn } from "@/lib/utils";

type FormlineProps = {
  className?: string;
  /** Fill color, defaults to cedar. */
  color?: string;
};

/**
 * The site's signature mark: a single tapered stroke that reads as both a
 * racing stripe and a Pacific Northwest formline taper. Decorative only.
 */
export function Formline({ className, color = "var(--cedar)" }: FormlineProps) {
  return (
    <svg
      viewBox="0 0 320 24"
      aria-hidden="true"
      className={cn("h-4 w-40", className)}
      preserveAspectRatio="none"
    >
      <path
        d="M2 19 C 64 8, 138 3, 226 7 C 272 9, 300 7, 318 3 C 304 13, 272 17, 228 17 C 142 14, 72 17, 2 19 Z"
        fill={color}
      />
    </svg>
  );
}
