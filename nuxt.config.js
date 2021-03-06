const router = process.env.DEPLOY_ENV === 'GH_PAGES' ? { base: '/nuxt-form/' } : {};

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }/*,
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css' }*/
    ],
    htmlAttrs: {
      lang: 'ja'
    },
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  css: [
    '@/assets/sass/main.sass',
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
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
  router,
  workbox: {
    dev: true
  }
};
