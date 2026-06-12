import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Pixel size of the square logo mark. */
  size?: number;
};

/**
 * Wu Wraps mark: a clean rounded speech bubble (a nod to the shop's painted
 * "WU WRAPS" graffiti) with a single comic spark for the twist. Built as inline
 * SVG so it stays crisp at any size. "WU" is set in the site's heavy grotesk.
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
      {/* Soft drop shadow for a little lift */}
      <defs>
        <filter id="wu-shadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#15141b" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Speech bubble + tail */}
      <g filter="url(#wu-shadow)">
        <rect x="6" y="20" width="108" height="66" rx="20" fill="#15141b" />
        <path d="M34 82 L52 82 L33 106 Z" fill="#15141b" />
      </g>

      {/* WU wordmark */}
      <text
        x="60"
        y="65"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-archivo), sans-serif" }}
        fontSize="40"
        letterSpacing="1"
        fill="#f5f4f1"
      >
        WU
      </text>

      {/* Red accent underline */}
      <rect x="41" y="70" width="38" height="4.5" rx="2.25" fill="#e4282c" />

      {/* Comic spark (the twist) */}
      <polygon
        points="101,10 106,21 117,26 106,31 101,42 96,31 85,26 96,21"
        fill="#ffce1f"
        stroke="#15141b"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
