/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        "background-100": "#1a1a1a",
        "background-200": "#2a2a2a",
        "background-300": "#3a3a3a",
        "background-400": "#4a4a4a",
      },
    },
  },
  plugins: [],
};
