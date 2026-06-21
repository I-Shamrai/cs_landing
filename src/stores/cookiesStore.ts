import { mainConfig } from '@/config/main';

interface IGtagParams {
  eventType?: 'event' | 'config' | 'consent' | 'js' | 'set';
  eventName: string | Date;
  [key: string]: unknown;
}

export const useCookiesStore = defineStore('CookiesStore', () => {
  const getUserConsent = useCookie(mainConfig.consentCookie, {
    maxAge: 60 * 60 * 24 * 400,
    sameSite: 'lax',
    watch: 'shallow',
  });
  const isUserForceClosed = ref<boolean>(false);
  const isClosed = computed({
    get() {
      return getUserConsent.value || isUserForceClosed.value;
    },
    set(isForceClosed: boolean) {
      isUserForceClosed.value = isForceClosed;
    },
  });
  function giveConsent() {
    getUserConsent.value = 'accepted';
    gtag({
      eventType: 'consent',
      eventName: 'update',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
  }
  function gtag({
    eventType = 'event',
    eventName,
    ...params
  }: IGtagParams): void {
    if (Object.keys(params).length) {
      originalGtag(eventType, eventName, params);
    } else {
      originalGtag(eventType, eventName);
    }
  }
  function originalGtag(..._: unknown[]) {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      // necessary to pass arguments since it's a type that GA checks
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    }
  }
  giveConsent();
  return {
    isClosed,
    giveConsent,
    gtag,
  };
});
