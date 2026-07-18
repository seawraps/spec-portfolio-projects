import { cn } from "@/lib/utils";

type FormlineBandProps = {
  className?: string;
  /** Background color the cutouts read through, matching the section behind the band. */
  bg?: string;
  /** Formline color. */
  color?: string;
  /** Slowly drift the pattern sideways, one unit per loop. */
  flow?: boolean;
};

/**
 * A repeating border band built from Coast Salish formline vocabulary:
 * ovoids with the characteristic heavy top, split U-forms, and trigons.
 * Abstract geometry only, used as a woven divider between sections.
 * Decorative.
 */
export function FormlineBand({
  className,
  bg = "var(--ink)",
  color = "var(--cedar)",
  flow = false,
}: FormlineBandProps) {
  const band = (
    <svg
      aria-hidden="true"
      className={cn("block h-7 w-full", !flow && className, flow && "band-flow h-7 w-[calc(100%+150px)]")}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="formline-unit" width="150" height="30" patternUnits="userSpaceOnUse">
          {/* Ovoid: heavy top, thin bottom */}
          <rect x="6" y="3" width="60" height="24" rx="12" fill={color} />
          <rect x="13" y="11" width="46" height="12.5" rx="6" fill={bg} />

          {/* Split U-form pair, in sea teal */}
          <path d="M76 27 L76 12 Q76 5 83 5 Q90 5 90 12 L90 27 Z" fill="var(--sea)" />
          <path d="M81 27 L81 14 Q81 10.5 83 10.5 Q85 10.5 85 14 L85 27 Z" fill={bg} />
          <path d="M96 27 L96 12 Q96 5 103 5 Q110 5 110 12 L110 27 Z" fill="var(--sea)" />
          <path d="M101 27 L101 14 Q101 10.5 103 10.5 Q105 10.5 105 14 L105 27 Z" fill={bg} />

          {/* Trigon, in spark gold */}
          <path d="M118 27 C124 8 138 8 144 27 C136 21 126 21 118 27 Z" fill="var(--spark)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#formline-unit)" />
    </svg>
  );

  if (flow) {
    return (
      <div aria-hidden="true" className={cn("overflow-hidden", className)}>
        {band}
      </div>
    );
  }

  return band;
}
