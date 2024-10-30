/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        pink: "#bf4f74",
      },
      textColor: {
        demo: "#bf4f74",
        pink: "#bf4f74",
      },
    },
  },
  plugins: [],
};
