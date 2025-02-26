// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  build: {
    transpile: ['trpc-nuxt'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    'vuetify-nuxt-module',
    '@pinia/nuxt',
  ],
  tailwindcss: {
    cssPath: './src/shared/ui/assets/css/tailwind.css',
  },
  // custom directories for fsd
  srcDir: 'src/',
  dir: {
    plugins: 'app/config/plugins',
    assets: 'shared/ui/assets',
    layouts: 'shared/ui/layouts',
  },
});
