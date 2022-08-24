/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        body: "#f9f9f9",
        primary: "#ff7010",
        black: "#191919",
        red: "#E23535",
        gray: "#f0f0f0",
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      }
    },
  },
  plugins: [],
};
