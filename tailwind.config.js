/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#009aff",
        highlight: "#00f6ff",
        activeIcon:"#08fbff",
        bgGray: "#1d1d1f",
        colorText: "#ffffff",
        colorW: "#4d61fc",
        inputColor: "#404040a3",
        tableBg: "#8f8f8f1c",
        textBTN: "#ffff",
        fullRefill: "#0879ff",
        middleRefill: "#57dffe",
        emptyRefill: "#fffbf4",

      },
    },
  },
  plugins: [],
};
