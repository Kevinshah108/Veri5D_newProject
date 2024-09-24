/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 2px 2px white",
        "2xl": "0 5px 5px black",
      },
    },
  },
  plugins: [],
};
