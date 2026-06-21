import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import {
  mdiCheckCircleOutline,
  mdiArrowRight,
  mdiLinkedin,
  mdiInstagram,
  mdiMenu,
  mdiChevronDown,
  mdiChevronUp,
  mdiChevronLeft,
  mdiChevronRight,
  mdiClose,
  mdiCheck,
} from '@mdi/js';
import colors from '@imports/_colors.module.scss';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliases,
        'mdi-check-circle-outline': mdiCheckCircleOutline,
        'mdi-arrow-right': mdiArrowRight,
        'mdi-linkedin': mdiLinkedin,
        'mdi-instagram': mdiInstagram,
        'mdi-menu': mdiMenu,
        'dropdown': mdiChevronDown,
        'expand': mdiChevronDown,
        'collapse': mdiChevronUp,
        'prev': mdiChevronLeft,
        'next': mdiChevronRight,
        'close': mdiClose,
        'success': mdiCheckCircleOutline,
        'check': mdiCheck,
      },
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          dark: true,
          colors: {
            'surface': colors.surface,
            'on-background': colors['on-background'],
            'background': colors['background'],
            'primary': colors.primary,
            'secondary': colors.secondary,
            'tertiary': colors.tetriary,
            'success': colors.success,
            'error': colors.error,
            'warning': colors.warning,
            'white': colors.white,
            'gray': colors.gray,
            'gray-1': colors['gray-1'],
            'gray-2': colors['gray-2'],
            'black': colors.black,
            'green': colors.green,
            'green-1': colors['green-1'],
            'green-2': colors['green-2'],
            'red': colors.red,
            'red-1': colors['red-1'],
            'red-2': colors['red-2'],
            'blue': colors.blue,
            'blue-1': colors['blue-1'],
            'blue-2': colors['blue-2'],
            'yellow': colors.yellow,
            'yellow-1': colors['yellow-1'],
            'yellow-2': colors['yellow-2'],
            'bgColor': colors.bgColor,
            'quarter-black': colors['quarter-black'],
            'half-black': colors['half-black'],
            'quarter-white': colors['quarter-white'],
            'half-white': colors['half-white'],
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
