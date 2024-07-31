/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      fontFamily: {
        'GeomLight': ['Geom Light', 'Arial', 'sans-serif'],
        'GeomVarible': ['Geom Varible', 'Arial', 'sans-serif'],
        'GeomUltra': ['Geom Ultra', 'Arial', 'sans-serif'],
        'Inter': ['Inter', 'Arial', 'sans-serif'],
        'HelveticaNowDisplayMedium': ['Helvetica Now Display'],

      },


      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',

        '3xl': '3840px',
        // => @media (min-width: 1920px) { ... }
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#40C03C",

          "secondary": "#403788",
        },
      },
    ],
  },
  plugins: [
    require('daisyui')],
}



