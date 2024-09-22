module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#0B0D17',
          light: '#D0D6F9',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}