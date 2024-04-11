/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        default: "#2424e1",
        50: "#ebf3ff",
        100: "#dbe7ff",
        200: "#bed2ff",
        300: "#98b3ff",
        400: "#6f88ff",
        500: "#4d5eff",
        600: "#2d31fe",
        700: "#2424e1",
        800: "#1e20b5",
        900: "#21258e",
        950: "#141652",
      },

      secondary: {
        default: "#CaE327",
        50: "#fdfee7",
        100: "#f8fccb",
        200: "#eff89e",
        300: "#e0f165",
        400: "#cae327",
        500: "#b0cb17",
        600: "#89a20e",
        700: "#677b10",
        800: "#536212",
        900: "#455314",
        950: "#242e05",
      },

      tertiary: {
        default: "#f94403",
        50: "#fff6ec",
        100: "#ffead3",
        200: "#ffd0a7",
        300: "#ffaf6e",
        400: "#ff8134",
        500: "#ff5e0d",
        600: "#f94403",
        700: "#c92f05",
        800: "#a0250c",
        900: "#80220e",
        950: "#450e05",
      },

      cream: "#f3cebe",
    },
  },
  plugins: [],
};
