/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // обязательно!
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        pastel1: '#FDE2E4',
        pastel2: '#E4F9F5',
        pastel3: '#FFF1E6',
        pastel4: '#F0EFEB',
      },
    },
  },
  plugins: [],
}
