/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-very-dark-blue': 'rgb(27, 29, 35)',
        'theme-dark-grey': 'rgb(96, 99, 109)',
        'theme-medium-grey': 'rgb(125, 130, 143)',
        'theme-light-grey': 'rgb(200, 204, 216)',
        'theme-very-light-grey': 'rgb(238, 239, 244)',
        'theme-red': 'rgb(223, 86, 86)',
      },
      fontFamily: {
        'theme-league-spartan': ['League Spartan', 'sans-serif'],
      },
      screens: {
        'custom-lg' : '1110px',
        'custom-md' : '900px',
      },
    },
  },
  plugins: [],
}

