
export default {
  modules: ["bootstrap-vue/nuxt"],
  plugins: [
    { src: "@/plugins/vue-particles", ssr: false }
  ],
  css: ["./assets/css/portfolio.css"],
  head: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
};