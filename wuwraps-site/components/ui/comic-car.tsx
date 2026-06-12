import { cn } from "@/lib/utils";

type Accent = "red" | "blue" | "yellow";

type ComicCarProps = {
  accent?: Accent;
  className?: string;
};

const bodyColor: Record<Accent, string> = {
  red: "#e4282c",
  blue: "#1f57c3",
  yellow: "#ffce1f",
};

const skyColor: Record<Accent, string> = {
  red: "#1f57c3",
  blue: "#ffce1f",
  yellow: "#e4282c",
};

/**
 * Bold comic-panel illustration of a wrapped sports car with speed lines and
 * halftone shading. Used as artwork where real install photos would go.
 */
export function ComicCar({ accent = "red", className }: ComicCarProps) {
  const body = bodyColor[accent];
  const sky = skyColor[accent];

  return (
    <svg
      viewBox="0 0 400 240"
      role="img"
      aria-label="Illustration of a freshly wrapped car"
      className={cn("h-full w-full", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id={`dots-${accent}`} width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.6" fill="rgba(20,19,26,0.16)" />
        </pattern>
      </defs>

      {/* Sky / backdrop */}
      <rect width="400" height="240" fill={sky} />
      <rect width="400" height="240" fill={`url(#dots-${accent})`} />

      {/* Radiating speed lines */}
      <g stroke="rgba(20,19,26,0.18)" strokeWidth="3">
        <line x1="200" y1="110" x2="0" y2="20" />
        <line x1="200" y1="110" x2="60" y2="0" />
        <line x1="200" y1="110" x2="400" y2="20" />
        <line x1="200" y1="110" x2="340" y2="0" />
        <line x1="200" y1="110" x2="0" y2="200" />
        <line x1="200" y1="110" x2="400" y2="200" />
      </g>

      {/* Ground */}
      <rect y="186" width="400" height="54" fill="#14131a" />
      <rect y="186" width="400" height="6" fill={bodyColor[accent]} />

      {/* Car body */}
      <g stroke="#14131a" strokeWidth="4" strokeLinejoin="round">
        <path
          d="M40 168 Q52 128 96 122 Q120 96 176 92 Q244 88 286 122 L342 132 Q368 138 366 168 L360 178 L46 178 Z"
          fill={body}
        />
        {/* Cabin / glass */}
        <path
          d="M120 122 Q140 100 176 98 Q232 96 268 122 Z"
          fill="rgba(251,244,226,0.85)"
        />
        {/* Side reflection stripe */}
        <path
          d="M60 158 L330 150 L330 162 L60 168 Z"
          fill="rgba(255,255,255,0.25)"
          stroke="none"
        />
      </g>

      {/* Wheels */}
      <g stroke="#14131a" strokeWidth="4">
        <circle cx="116" cy="178" r="26" fill="#14131a" />
        <circle cx="116" cy="178" r="11" fill={body} />
        <circle cx="292" cy="178" r="26" fill="#14131a" />
        <circle cx="292" cy="178" r="11" fill={body} />
      </g>

      {/* Shine pop */}
      <path
        d="M150 112 l6 -14 l5 14 l14 5 l-14 5 l-5 14 l-6 -14 l-14 -5 z"
        fill="#fbf4e2"
        stroke="#14131a"
        strokeWidth="2"
      />
    </svg>
  );
}
