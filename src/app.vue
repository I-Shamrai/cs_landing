<template>
  <v-app>
    <NuxtLayout class="w-100 h-100">
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script lang="ts" setup>
import { useLocaleHead } from '#imports';
import { useI18n } from 'vue-i18n';
import { useTheme } from 'vuetify';
import { useCookiesStore } from '@stores/cookiesStore';
import { mainConfig } from '~/config/main';

// const isDev = import.meta.dev;
const { locale } = useI18n();
const theme = useTheme();
const cookiesStore = useCookiesStore();
const runtimeConfig = useRuntimeConfig();

if (!cookiesStore.isClosed) {
  watch(() => cookiesStore.isClosed, connectAnalytics);
} else {
  connectAnalytics();
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme && savedTheme !== theme.global.name.value) {
    theme.change(savedTheme);
  }
});

const localeHead = useLocaleHead({
  dir: true,
  lang: true,
  seo: true,
});

useHead(() => ({
  htmlAttrs: {
    lang: localeHead.value.htmlAttrs?.lang || locale.value || 'en-US',
    dir: (localeHead.value.htmlAttrs?.dir as 'ltr' | 'rtl' | 'auto') || 'ltr',
  },
  meta: [
    ...(localeHead.value.meta || []),
    { charset: 'utf-8' },
    { 'http-equiv': 'x-ua-compatible', 'content': 'IE=edge' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' },
  ],
  link: [
    ...(localeHead.value.link || []),
    { rel: 'icon', type: 'image/png', href: `${runtimeConfig.public.siteUrl}/favicon.png?t=1782067860106` },
  ],
}));

function connectAnalytics() {
  if (cookiesStore.isClosed) {
    cookiesStore.gtag(
      {
        eventType: 'js',
        eventName: new Date(),
      },
    );
    cookiesStore.gtag({
      eventType: 'config',
      eventName: mainConfig.gaId,
    });
    useHead({
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${mainConfig.gaId}`,
          async: true,
        },
      ],
    });
  }
}
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
</script>

<style lang="scss">
@use "@styles/main";
</style>
