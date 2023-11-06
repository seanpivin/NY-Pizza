/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      colors: {
        "pizza-red": "#f44336",
        "pizza-green": "#4caf50",
        "pizza-yellow": "#ffeb3b",
        "pizza-black": "#212121",
        "pizza-grey": "#9e9e9e",
        "pizza-white": "#fff",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
