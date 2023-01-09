/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:'Inter'
      },
      
      colors: {
        "bluez":{
          "500":"#0085FF"
        }
      }
    },
  },
  plugins: [],
}
