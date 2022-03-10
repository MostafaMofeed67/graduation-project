module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1124px",
        xl: "1124px",
        lg: "1124px",
      },
    },
    extend: {
      fontFamily: {
        almarai: ["'Almarai', sans-serif"],
      },
      colors: {
        primary: { DEFAULT: "#4bb4e8", light: "#2bdde2", dark: "#135f8a" },
        secondary: "#d90b0b",
      },
    },
  },
  plugins: [],
};
