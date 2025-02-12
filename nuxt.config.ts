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
    modules: [
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        "@nuxtjs/color-mode",
    ],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
    },
})
