/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [
    "./src/Components/Authentication/Signup.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

