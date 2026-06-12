import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Pixel size of the square logo mark. */
  size?: number;
};

// 16-point spiky burst behind the speech bubble.
const burstPoints = Array.from({ length: 32 }, (_, i) => {
  const angle = (Math.PI / 16) * i - Math.PI / 2;
  const radius = i % 2 === 0 ? 60 : 45;
  const x = 60 + radius * Math.cos(angle);
  const y = 54 + radius * Math.sin(angle);
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}).join(" ");

/**
 * Wu Wraps "WU! WRAPS" speech-bubble logo, recreated as inline SVG from the
 * shop's painted logo. Crisp at any size and uses the Bangers comic font for
 * the lettering.
 */
export function BrandLogo({ className, size = 56 }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Wu Wraps logo"
      className={cn("shrink-0", className)}
    >
      {/* Gray spiky burst */}
      <polygon
        points={burstPoints}
        fill="#9a9da3"
        stroke="#14131a"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* White outline layer (bubble + tail) */}
      <g fill="#fbf4e2">
        <ellipse cx="60" cy="56" rx="55" ry="35" />
        <polygon points="86,76 112,110 62,86" />
      </g>

      {/* Black bubble + tail on top, leaving a white rim */}
      <g fill="#14131a">
        <ellipse cx="60" cy="56" rx="49" ry="29" />
        <polygon points="84,74 100,98 66,82" />
      </g>

      {/* Lettering */}
      <text
        x="60"
        y="52"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-bangers), sans-serif" }}
        fontSize="26"
        fill="#fbf4e2"
      >
        WU!
      </text>
      <text
        x="60"
        y="76"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-bangers), sans-serif" }}
        fontSize="22"
        letterSpacing="0.5"
        fill="#fbf4e2"
      >
        WRAPS
      </text>
    </svg>
  );
}
