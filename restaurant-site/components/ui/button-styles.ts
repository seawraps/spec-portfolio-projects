export const buttonStyles = {
  primary:
    "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-xl border border-[#cfaa7c] bg-[linear-gradient(135deg,#f1d8b7_0%,#d7aa72_46%,#a06a3f_100%)] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.32em] !text-[#1a120e] shadow-[0_24px_70px_-34px_rgba(187,135,81,0.76)] transition-all duration-300 before:absolute before:inset-y-0 before:left-[-32%] before:w-[42%] before:skew-x-[-20deg] before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)] before:opacity-0 before:transition-all before:duration-500 hover:-translate-y-1 hover:shadow-[0_32px_76px_-34px_rgba(187,135,81,0.84)] hover:before:left-[112%] hover:before:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ddbf] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120d0a]",
  secondary:
    "inline-flex min-h-12 items-center justify-center rounded-xl border border-[#9c7654] bg-[rgba(255,250,245,0.44)] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] !text-[#241812] shadow-[0_18px_44px_-36px_rgba(42,24,14,0.36)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b98956] hover:bg-[#fff7ee] hover:shadow-[0_24px_52px_-30px_rgba(42,24,14,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d1a364] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f0e5]",
  accent:
    "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-xl border border-[rgba(255,233,204,0.36)] bg-[rgba(255,246,235,0.94)] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.3em] !text-[#1a120e] shadow-[0_24px_60px_-34px_rgba(246,236,223,0.82)] transition-all duration-300 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_62%)] before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-1 hover:bg-white hover:before:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ddbf] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120d0a]",
  secondaryInverse:
    "inline-flex min-h-12 items-center justify-center rounded-xl border border-[rgba(255,233,204,0.26)] bg-[rgba(14,9,7,0.34)] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.3em] !text-[#fff2df] shadow-[inset_0_1px_0_rgba(255,240,220,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#f1ddbf] hover:bg-[rgba(255,248,239,0.12)] hover:shadow-[0_18px_44px_-30px_rgba(0,0,0,0.52)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ddbf] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120d0a]",
} as const;

export type ButtonVariant = keyof typeof buttonStyles;

export function buttonClassName(variant: ButtonVariant, className?: string) {
  return className ? `${buttonStyles[variant]} ${className}` : buttonStyles[variant];
}
