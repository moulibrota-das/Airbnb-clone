/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "2/3": "30%",
        "11/12": "91.666667%",
        "12/12": "100%",
      },
    },
  },
  plugins: [],
};
