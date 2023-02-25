/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {

        primary: "#2f0848",

        secondary: "#D926AA",

        accent: "#1FB2A5",

        neutral: "#191D24",

        info: "#3ABFF8",

        success: "#36D399",

        warning: "#FBBD23",

        error: "#F87272",
      },
    },
  ],
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
}
