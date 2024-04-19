/** 
@type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      sushi: {
        50: "#f7fce9",
        100: "#edf7d0",
        200: "#dcf0a6",
        300: "#c3e472",
        400: "#aad447",
        500: "#84b026",
        600: "#6b941c",
        700: "#53711a",
        800: "#435a1a",
        900: "#3a4d1a",
        950: "#1d2a09",
      },
      rose: {
        50: "#fef1f9",
        100: "#ffe4f6",
        200: "#ffcaef",
        300: "#ff9edf",
        400: "#ff62c8",
        500: "#ff34af",
        600: "#f22797",
        700: "#d20470",
        800: "#ad075c",
        900: "#900b4e",
        950: "#59002c",
      },

      elephant: {
        50: "#f0fbfb",
        100: "#d8f2f5",
        200: "#b7e6ea",
        300: "#84d2dc",
        400: "#4bb7c5",
        500: "#309baa",
        600: "#2a7e90",
        700: "#286676",
        800: "#285562",
        900: "#264853",
        950: "#173540",
      },
      red: colors.red,
    },
  },
  plugins: [],
};
