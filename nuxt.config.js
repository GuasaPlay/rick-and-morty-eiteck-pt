export default {
  head: {
    htmlAttrs: {
      lang: 'es',
    },
    title: 'Rick and Morty EITECK',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/css/main.css'],

  plugins: [{ src: '~plugins/v-paginate', mode: 'client' }],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  axios: {
    baseURL: 'https://rickandmortyapi.com/api',
  },

  googleFonts: {
    families: {
      'Open+Sans': [300, 400, 500, 600, 700, 800],
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  pwa: {
    manifest: {
      lang: 'es',
      name: 'Rick and Morty EITECK',
      short_name: 'RM-EITECK',
    },
  },
  eslint: {
    cache: false,
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
