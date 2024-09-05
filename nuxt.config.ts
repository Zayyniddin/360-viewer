// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/360-viewer/style.css' }
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r105/three.min.js', defer: true },
        { src: '/360-viewer/js/panolens.min.js', defer: true },
        { src: '/main.js', defer: true } // Убедись, что путь правильный
      ]
    }
  }
})
