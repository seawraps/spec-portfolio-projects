import Image from "next/image";

import { cn } from "@/lib/utils";

type SpraySwipeProps = {
  className?: string;
  color?: "cedar" | "sea";
};

/**
 * A fat-cap spray stroke with overspray and drips, used as a graffiti
 * underline on light sections. Generated in the brand colors. Decorative.
 */
export function SpraySwipe({ className, color = "cedar" }: SpraySwipeProps) {
  return (
    <Image
      src={`/images/art/swipe-${color}.png`}
      alt=""
      aria-hidden="true"
      width={900}
      height={170}
      className={cn("pointer-events-none h-9 w-52 object-contain object-left", className)}
    />
  );
}
