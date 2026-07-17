import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Pixel size of the square logo mark. */
  size?: number;
};

/**
 * Wu Wraps mark: a speech bubble in bone white, a quiet echo of the WU! WRAPS
 * burst painted on the studio wall, with a cedar stripe and a single yellow
 * spark. The one openly comic element in the identity.
 */
export function BrandLogo({ className, size = 44 }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Wu Wraps logo"
      className={cn("shrink-0", className)}
    >
      {/* Speech bubble and tail */}
      <rect x="8" y="22" width="104" height="62" rx="18" fill="var(--bone, #f6f5f1)" />
      <path d="M36 82 L54 82 L35 104 Z" fill="var(--bone, #f6f5f1)" />

      {/* WU wordmark */}
      <text
        x="60"
        y="64"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-archivo), sans-serif" }}
        fontSize="38"
        letterSpacing="1"
        fill="#141519"
      >
        WU
      </text>

      {/* Cedar stripe */}
      <rect x="42" y="69" width="36" height="4" rx="2" fill="#c2402f" />

      {/* Spark */}
      <polygon
        points="103,8 107.5,19 118,23.5 107.5,28 103,39 98.5,28 88,23.5 98.5,19"
        fill="#ffce1f"
        stroke="#141519"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
