export const colors = {
  primary: "#0B4EA2",
  primaryLight: "#3A72B8",
  primaryDark: "#083A79",

  secondary: "#F4B400",
  secondaryLight: "#FFD54F",
  secondaryDark: "#C49000",

  success: "#2E7D32",
  warning: "#ED6C02",
  danger: "#D32F2F",
  info: "#0288D1",

  white: "#FFFFFF",
  black: "#000000",

  background: "#F8FAFC",
  surface: "#FFFFFF",

  textPrimary: "#1F2937",
  textSecondary: "#6B7280",
  textMuted: "#9CA3AF",

  border: "#E5E7EB",
  divider: "#D1D5DB",

  overlay: "rgba(0,0,0,0.55)",
} as const;

export type Colors = typeof colors;