/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]}

