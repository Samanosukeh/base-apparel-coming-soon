export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Frontend Mentor | Base Apparel coming soon page',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
      { rel: "preconnect", href: "https://fonts.gstatic.com"},
      { href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap", rel: "stylesheet" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',// https://go.nuxtjs.dev/tailwindcss
  ],

  tailwindcss: {
    //jit: true,
    configPath: 'tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
