export const buttonStyles = {
  primary:
    "inline-flex h-11 items-center justify-center rounded-full bg-stone-900 px-5 text-sm font-semibold uppercase tracking-[0.12em] text-stone-50 shadow-[0_18px_36px_-24px_rgba(41,37,36,0.72)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-stone-700 hover:shadow-[0_22px_42px_-24px_rgba(41,37,36,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50",
  secondary:
    "inline-flex h-11 items-center justify-center rounded-full border border-stone-300 bg-stone-50/80 px-5 text-sm font-semibold uppercase tracking-[0.12em] text-stone-800 shadow-[0_14px_30px_-26px_rgba(41,37,36,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:border-stone-500 hover:bg-stone-100 hover:shadow-[0_18px_36px_-26px_rgba(41,37,36,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50",
  accent:
    "inline-flex h-11 items-center justify-center rounded-full bg-amber-300 px-5 text-sm font-semibold uppercase tracking-[0.12em] text-stone-900 shadow-[0_18px_38px_-24px_rgba(217,119,6,0.52)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-200 hover:shadow-[0_22px_44px_-24px_rgba(217,119,6,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900",
  secondaryInverse:
    "inline-flex h-11 items-center justify-center rounded-full border border-stone-300/60 px-5 text-sm font-semibold uppercase tracking-[0.12em] text-stone-100 shadow-[0_16px_34px_-26px_rgba(15,23,42,0.44)] transition-all duration-200 hover:-translate-y-0.5 hover:border-stone-100 hover:bg-white/10 hover:shadow-[0_20px_38px_-24px_rgba(15,23,42,0.52)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900",
} as const;

export type ButtonVariant = keyof typeof buttonStyles;

export function buttonClassName(variant: ButtonVariant, className?: string) {
  return className ? `${buttonStyles[variant]} ${className}` : buttonStyles[variant];
}
