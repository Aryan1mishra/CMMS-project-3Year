/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage:{
        "bgImage":"url(./components/images/bg.png)",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

