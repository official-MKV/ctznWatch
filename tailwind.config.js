/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'action': '#2927A6',
      'main': '#1D1C1D',
      'light': '#FFFFFF',
      'dark':'#595959',
      'black':'#0A0A0A'

    }
  },
  plugins: [],
}

