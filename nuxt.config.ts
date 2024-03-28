// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Y-CChen.github.io',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{ charset: 'utf-8' }],
      link: [{ rel: 'icon', type: 'image/svg', href: '/logo.svg' }],
    },
  },
  build: {
    templates: [
      // logo
      {
        src: './logo.template.svg',
        dst: './public/logo.svg',
        options: {
          color: '#9079b6',
          strokeWidth: '22px',
        },
        write: true,
      },
    ],
  },
  devtools: { enabled: true },
  telemetry: false,
});
