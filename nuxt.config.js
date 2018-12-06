module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Form',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  htmlAttrs: {
    lang: 'ja'
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  css: [
    '@/assets/sass/main.sass'
  ],
  modules: [
    [
      'nuxt-sass-resources-loader',
      [
        '@/assets/sass/foundation/_variables.sass',
        '@/assets/sass/foundation/_mixin.sass'
      ],
    ],
    [
      '@nuxtjs/bulma'
    ]
  ],
  generate: {
    dir: 'docs'
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-preset-env': {
          features: {
            customProperties: false
          }
        }
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {},
  workbox: {
    dev: true
  }
};
