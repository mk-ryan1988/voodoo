const title = process.env.npm_package_name || "";
const image = require('./assets//social-share-img.jpg');
const description = process.env.npm_package_description || ""

export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: title,
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: description
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: image
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: title
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: image
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: image
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: title
      }
    ],
    link: [
      {
        rel: "canonical",
        href: "https://mkryan.dev"
      },
      {
        rel: "icon",
        type: 'image/x-icon',
        href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌</text></svg>"
      },
      {
        rel: "preconnect",
        href:
          "https://fonts.gstatic.com"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Rubik:wght@400;500;600;700;800&display=swap"
      },
    ]
  },
  pwa: {
    manifest: {
      name: 'Mark Ryan',
      short_name: 'mkryan',
      lang: 'en',
      icons: [
        {
          "src": "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌</text></svg>",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌</text></svg>",
          "sizes": "512x512",
          "type": "image/png"
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
