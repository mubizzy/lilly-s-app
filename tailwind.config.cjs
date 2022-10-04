/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#00302E",
        pink: "#E2B887",
        green: " #00302E",
        pinky: " #FBDDBB",
        black: "#0B0D17",
      },
    },
  },
  plugins: [],
};
