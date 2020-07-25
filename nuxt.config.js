
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "canonical",
        href: "https://voodoo-developer.co.uk"
      },
      {
        rel: "icon",
        type: 'image/x-icon',
        href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧙‍♂️</text></svg>"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans&family=Space+Mono:wght@400;700&display=swap"
      }
    ]
  },
  pwa: {
    manifest: {
      name: 'Voodoo Developer',
      short_name: 'Voodoo',
      lang: 'en',
      icons: [
        {
          "src": "data:image/svg+xml,<svg width=%22192%22 height=%22192%22 xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧙‍♂️</text></svg>",
          "sizes": "192x192",
          "type": "image/svg"
        },
      ],
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // Inject vars into $root
    "~/plugins/vue-inject.js",
    // Doc: https://github.com/vuejs/composition-api
    "@/plugins/composition-api"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/typescript-build"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/pwa",
    "@nuxtjs/svg",
    '@nuxt/content'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('postcss-nesting'),
        require('autoprefixer'),
      ],
    }
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-light.css'
      }
    }
  }
};
