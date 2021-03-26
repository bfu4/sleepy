export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sleepy',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'zzZzzzzzz'},
      {name: 'theme-color', content: '#676d67'},
      {property: 'og:author', content: 'Bella Fusari'},
      {property: 'og:image', content: '/favicon.ico'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@static/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/faimpl.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/bulma',
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      suffix: true,
      icons: {
        brands: true,
        solid: true
      }
    }],
    '@nuxtjs/axios'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // Hack
  build: {
    extend: function (config, {isDev, isClient}) {

      config.node = {
        // https://github.com/nuxt-community/dotenv-module/issues/11
        fs: "empty"
      };
    }
  }

}
