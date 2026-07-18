/**
 * ==========================================================
 * WEBSITE RESMI POLDA PAPUA TENGAH
 * DESIGN SYSTEM
 * TYPOGRAPHY
 * ==========================================================
 */

export const typography = {
  fontFamily: {
    primary: "'Inter', sans-serif",
    secondary: "'Poppins', sans-serif",
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  fontSize: {
    h1: "56px",
    h2: "42px",
    h3: "32px",
    h4: "24px",
    h5: "20px",
    h6: "18px",

    bodyLarge: "18px",
    body: "16px",
    small: "14px",
    caption: "12px",
  },

  lineHeight: {
    heading: 1.2,
    body: 1.6,
    compact: 1.4,
  },
} as const;

export default typography;