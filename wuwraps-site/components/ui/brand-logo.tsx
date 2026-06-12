import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Pixel size of the square badge. */
  size?: number;
};

/**
 * Comic-book style "WU WRAPS" badge logo.
 * Built as inline SVG so it stays crisp at any size and inherits the
 * Bangers display font loaded in the root layout.
 */
export function BrandLogo({ className, size = 56 }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Wu Wraps logo"
      className={cn("shrink-0", className)}
    >
      {/* Drop shadow plate */}
      <rect x="10" y="12" width="84" height="84" rx="12" fill="#14131a" />
      {/* Badge body */}
      <rect
        x="6"
        y="6"
        width="84"
        height="84"
        rx="12"
        fill="#e4282c"
        stroke="#14131a"
        strokeWidth="4"
      />
      {/* Halftone dots */}
      <g fill="rgba(20,19,26,0.18)">
        <circle cx="18" cy="20" r="2" />
        <circle cx="30" cy="20" r="2" />
        <circle cx="42" cy="20" r="2" />
        <circle cx="24" cy="30" r="2" />
        <circle cx="36" cy="30" r="2" />
      </g>
      {/* WU */}
      <text
        x="48"
        y="50"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-bangers), sans-serif" }}
        fontSize="42"
        fill="#ffce1f"
        stroke="#14131a"
        strokeWidth="2.4"
        paintOrder="stroke"
      >
        WU
      </text>
      {/* Banner */}
      <g>
        <path
          d="M10 62 L90 62 L84 80 L16 80 Z"
          fill="#14131a"
        />
        <text
          x="50"
          y="76"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-bangers), sans-serif" }}
          fontSize="16"
          letterSpacing="1.5"
          fill="#fbf4e2"
        >
          WRAPS
        </text>
      </g>
    </svg>
  );
}
