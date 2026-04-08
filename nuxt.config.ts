// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: [
        '~/assets/css/normalize.css',
        '~/assets/css/typeface.css',
        '~/assets/css/layout.main.css',
        '~/assets/css/layout.mscr.css'
    ],
    app: {
        head: {
            htmlAttrs: { lang: 'ru' },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [ { name: 'format-detection', content: 'telephone=no' } ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
            ],
        }
    },
})
