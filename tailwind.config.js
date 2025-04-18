/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      NineWayTheme: {

        "primary": "#351f57",

        "secondary": "#361e57",

        "accent": "#1FB2A5",

        "neutral": "#191D24",

        "info": "#3ABFF8",

        "success": "#36D399",

        "warning": "#FBBD23",

        "error": "#F87272",
      },
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
