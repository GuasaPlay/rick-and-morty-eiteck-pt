module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      openSans: ['Open Sans'],
      poppins: ['Poppins'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
