// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        cyan: {
          100: "#EBF9FA",
          200: "#CDEFF2",
          300: "#AFE5E9",
          400: "#74D2D9",
          500: "#38BEC9",
          600: "#32ABB5",
          700: "#227279",
          800: "#19565A",
          900: "#11393C",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
