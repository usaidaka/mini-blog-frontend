/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-poster": "url('./src/assets/background.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins"],
        satisfy: ["Satisfy", "cursive"],
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
