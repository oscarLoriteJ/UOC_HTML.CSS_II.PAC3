/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: "#00b4c6",
      secondary: "#002d32",
      terciary: "#f4f4f4",
      hovers: "#80dae3",
      white: "#ffff",
      gray: {
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
    },
    fontFamily: {
      AbrilFatface: ["AbrilFatface"],
    },
  },
  plugins: [],
};
