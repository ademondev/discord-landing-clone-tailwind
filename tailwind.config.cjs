/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blurple: "#7289DA",
        "full-white": "#FFFFFF",
        greypurple: "#99AAB5",
        "dark-not-black": "#2C2F33",
        "not-quite-black": "#23272A",
        green: "#43B581",
        yellow: "#FAA61A",
        red: "#F04747",
        background: "#404eed",
      },
    },
  },
  plugins: [],
}
