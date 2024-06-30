/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '45': '45%',
        '48': '48%',
      },
      transformOrigin: {
        'center': 'center',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transform-origin-center': {
          'transform-origin': 'center',
        },
      });
    },
  ],
}

