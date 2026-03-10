export const buttonStyles = {
  primary:
    "inline-flex min-h-12 items-center justify-center rounded-full bg-[#d1a364] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] !text-[#1a120e] shadow-[0_18px_36px_-22px_rgba(209,163,100,0.72)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e1b57a] hover:shadow-[0_24px_48px_-24px_rgba(209,163,100,0.82)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ddbf] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120d0a]",
  secondary:
    "inline-flex min-h-12 items-center justify-center rounded-full border border-[#8f6a4d] bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] !text-[#2a1c14] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#b98956] hover:bg-[#f6ecdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d1a364] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f0e5]",
  accent:
    "inline-flex min-h-12 items-center justify-center rounded-full bg-[#f6ecdf] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] !text-[#1a120e] shadow-[0_20px_40px_-24px_rgba(246,236,223,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ddbf] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120d0a]",
  secondaryInverse:
    "inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(255,233,204,0.34)] bg-[rgba(255,255,255,0.04)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] !text-[#f6ecdf] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f1ddbf] hover:bg-[rgba(255,255,255,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ddbf] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120d0a]",
} as const;

export type ButtonVariant = keyof typeof buttonStyles;

export function buttonClassName(variant: ButtonVariant, className?: string) {
  return className ? `${buttonStyles[variant]} ${className}` : buttonStyles[variant];
}
