/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx,json}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primarycolor: '#030014',
        primarycol: '#ff7c3a',
        secondarycol: '#ff1c3a',
        secondarycolor: '#151312',
        accentcolor: '#AB8BFF',
        light: {
          100: '#D6C6FF',
          200: '#A8B5DB',
          300: '#9CA4AB'
        },
        dark: {
          100: '#221f3d',
          200: '#ofo23d',

        }


      }
    },
  },
  plugins: [],
}