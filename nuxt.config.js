export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jne',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [{ path: '~/components' }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/http', '@nuxtjs/axios', '@nuxtjs/proxy'],
  // axios: {},
  axios: {
    baseURL: 'https://api.rajaongkir.com', // Used as fallback if no runtime config is provided
  },
  // cloudinary: {
  //   cloudName: 'dewaqintoro',
  //   apiKey: '442818793864368',
  //   apiSecret: 'MV75UbGl6gnlLkEyGqbgEpBEuVk',
  //   secure: false,
  //   useComponent: true
  // },
  http: {
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/api/v1': { target: 'https://api.rajaongkir.com', pathRewrite: {'^/api/v1': ''}, changeOrigin: true }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },
  generate: {
    fallback: true
  }
}
