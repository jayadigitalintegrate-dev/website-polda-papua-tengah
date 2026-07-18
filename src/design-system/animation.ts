/**
 * ==========================================================
 * WEBSITE RESMI POLDA PAPUA TENGAH
 * DESIGN SYSTEM
 * ANIMATION
 * ==========================================================
 */

export const animation = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },

  easing: {
    standard: "ease",
    in: "ease-in",
    out: "ease-out",
    inOut: "ease-in-out",
    smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
  },

  hover: {
    lift: "translateY(-6px)",
    scale: "scale(1.03)",
    imageZoom: "scale(1.08)",
    rotate: "rotate(-6deg)",
  },
} as const;

export default animation;