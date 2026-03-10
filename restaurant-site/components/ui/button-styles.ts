export const buttonStyles = {
  primary:
    "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full border border-[#d6b086] bg-[linear-gradient(135deg,#f3d8b4_0%,#cb8e48_55%,#a86f37_100%)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] !text-[#1a120e] shadow-[0_24px_60px_-28px_rgba(200,139,71,0.72)] transition-all duration-300 before:absolute before:inset-y-0 before:left-[-30%] before:w-[40%] before:skew-x-[-24deg] before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.52),transparent)] before:opacity-0 before:transition-all before:duration-500 hover:-translate-y-1 hover:shadow-[0_32px_70px_-28px_rgba(200,139,71,0.84)] hover:before:left-[110%] hover:before:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ddbf] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120d0a]",
  secondary:
    "inline-flex min-h-12 items-center justify-center rounded-full border border-[#9b734e] bg-[rgba(255,251,247,0.38)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] !text-[#2a1c14] shadow-[0_18px_40px_-34px_rgba(42,24,14,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b98956] hover:bg-[#fff7ee] hover:shadow-[0_24px_48px_-30px_rgba(42,24,14,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d1a364] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f0e5]",
  accent:
    "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full border border-[rgba(255,233,204,0.34)] bg-[rgba(255,248,239,0.94)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] !text-[#1a120e] shadow-[0_26px_60px_-34px_rgba(246,236,223,0.82)] transition-all duration-300 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_62%)] before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-1 hover:bg-white hover:before:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ddbf] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120d0a]",
  secondaryInverse:
    "inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(255,233,204,0.44)] bg-[rgba(14,9,7,0.4)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] !text-[#fff2df] shadow-[inset_0_1px_0_rgba(255,240,220,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#f1ddbf] hover:bg-[rgba(255,248,239,0.16)] hover:shadow-[0_18px_44px_-30px_rgba(0,0,0,0.52)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ddbf] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120d0a]",
} as const;

export type ButtonVariant = keyof typeof buttonStyles;

export function buttonClassName(variant: ButtonVariant, className?: string) {
  return className ? `${buttonStyles[variant]} ${className}` : buttonStyles[variant];
}
