export const shadows = {
  none: "none",

  xs: "0 1px 2px rgba(0, 0, 0, 0.05)",

  sm: "0 2px 4px rgba(0, 0, 0, 0.08)",

  md: "0 4px 8px rgba(0, 0, 0, 0.10)",

  lg: "0 8px 16px rgba(0, 0, 0, 0.12)",

  xl: "0 12px 24px rgba(0, 0, 0, 0.15)",

  "2xl": "0 20px 40px rgba(0, 0, 0, 0.18)",

  inset: "inset 0 2px 4px rgba(0,0,0,0.06)",
} as const;

export type Shadows = typeof shadows;