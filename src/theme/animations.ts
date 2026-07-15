export const animations = {
  fast: "150ms ease-in-out",
  normal: "300ms ease-in-out",
  slow: "500ms ease-in-out",

  fade: "opacity 300ms ease",
  slide: "transform 300ms ease",
  scale: "transform 200ms ease",
} as const;

export type Animations = typeof animations;