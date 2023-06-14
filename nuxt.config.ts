import { isProduction } from 'std-env'
import pkg from './package.json'
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)
// https://github.com/damien-hl/nuxt3-auth-example
const one_day = 60 * 60 * 24 * 1000
const one_week = one_day * 7

export default defineNuxtConfig({
  css: [ /* app.vue */ ],
  modules: [
    [resolve('./modules/copyFilesToPublic'), { cleanFolders: ['public/article'] }],
    '@dargmuesli/nuxt-cookie-control',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    // 'nuxt-cookie-control',
    '~/modules/sitemap'
  ],
  sitemap: {
    hostname: 'http://localhost:3000'
  },
  // https://content.nuxtjs.org
  content: {
    navigation: {
      fields: ['_id', '_type', 'series', 'tags']
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'one-dark-pro',
      // check out https://content.nuxtjs.org/api/configuration#highlightpreload for the default preload languages
      // check out https://github.com/shikijs/shiki/blob/main/docs/languages.md for the available program language
      preload: ['latex', 'markdown', 'md', 'tex']
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5
      },
      remarkPlugins: ['remark-math', 'remark-sub', 'remark-super'],
      rehypePlugins: {
        'rehype-katex': {
          // the math formula will render as HTML and Mathml
          // because the Mathml <annotation> contain the formula text content
          // and enable to copy the formula from the web page
          // refer to https://katex.org/docs/options.html#:~:text=output
          output: 'mathml' // the default value is `htmlAndMathml`
        }
      }
    },
    // ignores: ['images', 'attachment']
    // documentDriven: { ssr: true },
  },
  // routeRules: {/* '/filename.txt': { prerender: true } */ },
  nitro: {
    prerender: {
      routes: ['/rss.xml', '/sitemap.xml', '/']
    }
  },
  // vite: { plugins: [ // VitePWA({ /* vite.config.ts */ }) ] },

  pwa: {
    registerWebManifestInRouteRules: false,
    strategies: 'generateSW',
    injectRegister: 'script',
    registerType: 'autoUpdate',
    workbox: {
      maximumFileSizeToCacheInBytes: 5000000,
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,xml,json,md,svg,webp,ico,png,jpg}'],
      globIgnores: ['google*.html'],
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          // source: https://vite-pwa-org.netlify.app/workbox/generate-sw.html
          urlPattern: ({ url }) => { return url.pathname.startsWith('/api') },
          handler: 'CacheFirst' as const,
          options: {
            cacheName: 'api-cache',
            cacheableResponse: { statuses: [0, 200] }
          }
        },
      ]
    },
    devOptions: {
      enabled: true,
      navigateFallback: '/'
    },
    useCredentials: true,
    manifest: false,
    client: {
    installPrompt: true,
    periodicSyncForUpdates: 900 // 300 = per 5 min for testing only
    }
  },

  // app: { head: { /* app.vue */ } },
  runtimeConfig: {
    timestamp: {
      created: false,
      updated: false
    },
    rss: {
      title: pkg.name,
      description: pkg.description,
      image: `${pkg.homepage}/avatar.jpg}`,
      favicon: `${pkg.homepage}/favicon.ico`,
      copyright: `All rights reserved ${(new Date()).getFullYear()}, ${pkg.author}`
    },
    public: {
      hostname: pkg.homepage,
      production_mode: isProduction,
      gtag: `G-${process.env.GTAG_ID}`,
      gtm: `GTM-${process.env.GTM_ID}`
    },
    auth: {
      cookieName: process.env.COOKIE_NAME || '__session',
      cookieSecret: process.env.COOKIE_SECRET || 'secret',
      cookieExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || one_day.toString(), 10), // 1 day
      cookieRememberMeExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || one_week.toString(), 10), // 7 days
    }
  },
  typescript: {
    shim: false,
    typeCheck: true
  },
  // https://github.com/dargmuesli/nuxt-cookie-control#module-options
  cookieControl: {
    colors: false,
    barPosition: 'bottom-left',
    closeModalOnClickOutside: true, // The Details 
    isControlButtonEnabled: false, // Can't show this beacause of back to top-button.
    locales: ['en'],
    localeTexts: {
      en: {
        accept: 'Ok', decline: 'No', manageCookies: 'Details',
        save: 'Ok', acceptAll: 'All', declineAll: 'No',
        close: 'Esc'
      }
    },
    cookies: {
      necessary: [
        {
          description: {
            en: 'Cookies for Analytics.',
          },
          name: {
            en: 'Necessary Cookie',
          },
          targetCookieIds: ['NEC'],
        },
      ],
      optional: [
        {
          id: 'op',
          name: 'Optional Cookie',
          links: {
            'https://example.com': 'Privacy Policy',
            'https://example.cop': null,
          },
          targetCookieIds: ['_o', '_p', '_t'],
        },
      ],
    }
    // typed module options
  }
  // unocss: { preflight: true },
  // headlessui: { prefix: 'Hui' }
  // plugins: ['~/plugins/gtag.client']
})
/*
https://stackoverflow.com/questions/71540309/how-to-connect-google-analytics-to-nuxt3-app
*/