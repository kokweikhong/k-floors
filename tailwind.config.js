/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{html,js,ts,jsx,tsx}", "./components/**/*"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        raleway: ["var(--font-raleway)", ...fontFamily.sans],
      },
      colors: {
        primary: "#806840",
        secondary: "#488791",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
