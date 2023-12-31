/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'hue-light': '#001858',
      'hue-card-bg': '#f3d2c1',
    },
    fontFamily: {
      'young': ['"Young Serif"']
    },
    extend: {},
  },
  plugins: [],
}

