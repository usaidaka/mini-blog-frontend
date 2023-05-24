/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-poster": "url('./src/assets/background.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins"],
        satisfy: ["Satisfy", "cursive"],
        fira: ["Fira Sans Condensed", "sans-serif"],
      },
      height: {
        104: "26rem",
      },
      columns: {
        0.75: "0.75",
      },
    },
  },
  plugins: [scrollbarHide],
};
