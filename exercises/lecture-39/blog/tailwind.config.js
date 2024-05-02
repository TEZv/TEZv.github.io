/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          "purple": "#cc19cc",
          "roseRed": "#990135",
          "kindaBlack": "#181e27",
          "lightGreen": "#9fff00",
        },
      },
    },
    plugins: [],
  };