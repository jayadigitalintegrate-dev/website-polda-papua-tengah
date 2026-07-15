export const typography = {
  fontFamily: {
    sans: "'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    mono: "'Fira Code', Consolas, monospace",
  },

  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  fontSize: {
    xs: "0.75rem",     // 12px
    sm: "0.875rem",    // 14px
    base: "1rem",      // 16px
    lg: "1.125rem",    // 18px
    xl: "1.25rem",     // 20px
    "2xl": "1.5rem",   // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem",  // 36px
    "5xl": "3rem",     // 48px
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  heading: {
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h3: {
      fontSize: "1.875rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.35,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
  },

  body: {
    large: {
      fontSize: "1.125rem",
      lineHeight: 1.7,
    },
    medium: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    small: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
  },

  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.4,
  },

  button: {
    fontSize: "0.875rem",
    fontWeight: 600,
    textTransform: "uppercase",
  },
} as const;

export type Typography = typeof typography;