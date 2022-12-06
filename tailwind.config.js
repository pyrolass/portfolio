/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          800: "#1DA1F2",
          950: "#0A66C2",
        },
      },
    },
  },
  plugins: [],
};
