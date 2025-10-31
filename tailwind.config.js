/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'light-bg': '#F7F9FC',
            'primary': '#007AFF',
            'secondary-text': '#6B7280',
            'border-color': '#E5E7EB',
            'hover-bg': '#F3F4F6'
        }
    },
  },
  plugins: [],
}