// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    nitro: {
        esbuild: {
            options: {
                target: 'esnext'
            }
        }
    },
    build: {
        transpile: ['trpc-nuxt']
    },
    modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', "@nuxtjs/color-mode", "@nuxt/eslint"],
    shadcn: {
        componentDir: './components/ui'
    },
})
