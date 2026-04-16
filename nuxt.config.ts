// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@pinia/nuxt'],
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
                    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap' }
                ]
        }
    }
})