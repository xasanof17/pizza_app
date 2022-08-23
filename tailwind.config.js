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
        red: "#191919",
        gray: "#f0f0f0",
      },
    },
  },
  plugins: [],
};
