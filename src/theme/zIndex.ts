export const zIndex = {
  hide: -1,
  auto: "auto",

  base: 0,

  dropdown: 1000,

  sticky: 1020,

  fixed: 1030,

  overlay: 1040,

  drawer: 1050,

  modal: 1060,

  popover: 1070,

  tooltip: 1080,

  toast: 1090,
} as const;

export type ZIndex = typeof zIndex;