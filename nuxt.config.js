export default {
  head: {
    title: 'rick-and-morty-eiteck-pt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/css/main.css'],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  axios: {
    baseURL: 'https://rickandmortyapi.com/api',
  },

  googleFonts: {
    families: {
      'Open+Sans': [300, 400, 500, 600, 700, 800],
    },
  },

  pwa: {
    manifest: {
      lang: 'es',
    },
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
