/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PaleBlue: "hsl(225, 100%, 94%)",
        BrightBlue: "hsl(245, 75%, 52%)",
        VeryPaleBlue: "hsl(225, 100%, 98%)",
        Desaturatedblue: "hsl(224, 23%, 55%)",
        Darkblue: "hsl(223, 47%, 23%)",
        VeryPaleBlue2: "hsl(225, 100%, 97%)"
      },
      screens: {
        'celu': '375px'
      }
    },
  },
  plugins: [],
};
