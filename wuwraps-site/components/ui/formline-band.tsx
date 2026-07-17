import { cn } from "@/lib/utils";

type FormlineBandProps = {
  className?: string;
  /** Background color the cutouts read through, matching the section behind the band. */
  bg?: string;
  /** Formline color. */
  color?: string;
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
}: FormlineBandProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("block h-7 w-full", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="formline-unit" width="150" height="30" patternUnits="userSpaceOnUse">
          {/* Ovoid: heavy top, thin bottom */}
          <rect x="6" y="3" width="60" height="24" rx="12" fill={color} />
          <rect x="13" y="11" width="46" height="12.5" rx="6" fill={bg} />

          {/* Split U-form pair */}
          <path d="M76 27 L76 12 Q76 5 83 5 Q90 5 90 12 L90 27 Z" fill={color} />
          <path d="M81 27 L81 14 Q81 10.5 83 10.5 Q85 10.5 85 14 L85 27 Z" fill={bg} />
          <path d="M96 27 L96 12 Q96 5 103 5 Q110 5 110 12 L110 27 Z" fill={color} />
          <path d="M101 27 L101 14 Q101 10.5 103 10.5 Q105 10.5 105 14 L105 27 Z" fill={bg} />

          {/* Trigon */}
          <path d="M118 27 C124 8 138 8 144 27 C136 21 126 21 118 27 Z" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#formline-unit)" />
    </svg>
  );
}
