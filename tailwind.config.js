/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./template/**/*.templ"],
  theme: {
    extend: {
      colors: {
        background: "#1e1e1e",
        primary: {
          DEFAULT: "#2553c9",
          dark: "#0938b3",
        },
        secondary: {
          DEFAULT: "#f4a300",
          dark: "#d68f01",
        },
      },
    },
  },
  plugins: [],
};
