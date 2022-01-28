module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*.php/'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary' : '#8C03D6',
        'secondary' : '#39393A',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
