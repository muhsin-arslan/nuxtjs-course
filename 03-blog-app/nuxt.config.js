export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "blog-app",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    firebaseApiKey: "AIzaSyCL4XSPcRNb0JdUVHS-Zyx2PpuweIrZrmk",
  },

  loading: {
    color: "DodgerBlue",
    height: "10px",
    continuous: true,
    duration: 3000,
  },

  transition: {
    name: "fade",
    mode: "out-in",
  },
};
