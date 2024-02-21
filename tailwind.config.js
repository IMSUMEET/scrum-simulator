/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'cool-gray': '#8895A8ff',
        'antiflash-white': '#F6F9FBff',
        'alice-blue': '#E3E9EFff',
        'indigo-dye': '#07466Dff',
        'seasalt': '#F7FAFCff',
      },
    },
    letterSpacing: {
      normal: '0.001rem',
    },
  },
  plugins: [],
}

