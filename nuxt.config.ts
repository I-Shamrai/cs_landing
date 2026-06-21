// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { createResolver } from '@nuxt/kit';
import { mainConfig } from './src/config/main';

const { resolve } = createResolver(import.meta.url);

const isDev = process.env.NODE_ENV === 'development';
// noinspection JSUnusedGlobalSymbols
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
    '@nuxtjs/mdc',
    isDev ? undefined : '@nuxtjs/seo',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
  ].filter((m): m is string => !!m),
  devtools: { enabled: true },
  app: {
    baseURL: process?.env?.URL_PREFIX || mainConfig?.URL_PREFIX || '/',
    pageTransition: { name: 'slide-right', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  runtimeConfig: {
    public: {
      siteUrl: process?.env?.BASE_URL || mainConfig?.BASE_URL || '/',
    },
  },
  srcDir: 'src/',
  alias: {
    '@': resolve('./src'),
    '@styles': resolve('./src/assets/design/styles'),
    '@imports': resolve('./src/assets/design/styles/components/imports'),
    '@stores': resolve('./src/stores'),
    '@types': resolve('./src/stores/sharedTypes'),
  },
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2026-03-13',
  nitro: {
    preset: 'github-pages',
    compressPublicAssets: !isDev,
    prerender: {
      failOnError: false,
    },
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
    plugins: [
      !isDev
        ? ViteImageOptimizer({
          png: {
            quality: 80,
          },
          jpeg: {
            quality: 75,
          },
          webp: {
            quality: 80,
          },
          avif: {
            quality: 70,
          },
          svg: {
            multipass: true,
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    cleanupNumericValues: false,
                    removeViewBox: false,
                  },
                },
              },
              'sortAttrs',
              {
                name: 'addAttributesToSVGElement',
                params: {
                  attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                },
              },
            ],
          },
        })
        : undefined,
      vuetify({
        autoImport: true,
        styles: {
          configFile: './assets/design/styles/vuetifyTheme.scss',
        },
      }),
    ].filter(p => !!p),
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    optimizeDeps: {
      include: [
        '@mdi/js',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        // '@unhead/schema-org/vue',
      ],
    },
    css: {
      lightningcss: {
        cssModules: true,
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
    },
    display: 'swap',
    download: true,
  },
  i18n: {
    defaultLocale: 'en',
    defaultDirection: 'ltr',
    baseUrl: '/',
    locales: [
      { code: 'en', language: 'en-US', file: 'en.js' },
    ],
    langDir: '../src/lang/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  ogImage: {
    enabled: false,
  },
  pinia: {
    storesDirs: ['./src/stores/**'], // Scans all subdirectories
  },
  robots: {
    allow: '/',
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
  },
  sitemap: {
    strictNuxtContentPaths: true,
    zeroRuntime: true,
  },
});
