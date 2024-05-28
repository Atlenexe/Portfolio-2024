<script setup lang="ts">
useHead({
  title: 'Hugo Mandou - Développeur web',
  htmlAttrs: {
    lang: 'fr',
  },
  meta: [
    { name: 'description', content: 'Développeur web fullstack à Nantes' },
    { name: 'lang', content: 'fr' },

    { property: 'og:title', content: 'Hugo Mandou' },
    { property: 'og:description', content: 'Développeur web fullstack à Nantes' },
    { property: 'og:type', content: 'website' },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
});
</script>

<template>
  <NuxtLayout />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');

:root {
  --white: #FFFBEC;
  --transparent-white: #fffbec26;
  --black: #242121;
  --blue: #2F36DB;
  --light-blue: #d6d7ff;
  --main-h-padding: 60px;
  --main-v-gap: 280px;
}

* {
  font-family: inter, sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  padding: 0;
}

html,
body {
  scroll-behavior: smooth;
  background-color: var(--black);
  overflow-x: hidden;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

h1,
h3,
.logo {
  font-family: Playfair, serif;
  font-weight: 700;
}

h1 {
  font-size: 120px;
  letter-spacing: 26px;
  margin-right: -26px;
  color: var(--blue);
  text-transform: uppercase;
  line-height: .8;
}

h2 {
  font-size: 23px;
  color: var(--blue);
}

h3 {
  font-size: 50px;
  letter-spacing: normal;
}

@media only screen and (max-width: 768px) {
  :root {
    --main-h-padding: 30px;
    --main-v-gap: 150px;
  }

  * {
    font-size: 16px;
  }

  h1 {
    font-size: 90px;
    letter-spacing: 15px;
    margin-right: -15px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 40px;
  }
}

@media only screen and (max-width: 480px) {

  h1 {
    font-size: 70px;
    letter-spacing: 10px;
    margin-right: -10px;
  }

  h2 {
    font-size: 16px;
    color: var(--blue);
  }
}
</style>
