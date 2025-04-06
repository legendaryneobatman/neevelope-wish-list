// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@pinia/nuxt'],


  // custom directories for fsd
  srcDir: 'src/',
  dir: {
    plugins: 'app/config/plugins',
    assets: 'shared/ui/assets',
    layouts: 'shared/ui/layouts',
  },
})
