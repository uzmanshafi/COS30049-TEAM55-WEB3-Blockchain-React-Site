/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'background-color': '#090801',
      'primary-color': '#a5ee2f',
      'secondary-color': '#08b113',
      'text-color': '#fcf8d9',
      'accent-color': '#262626',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}