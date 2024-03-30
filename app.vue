<script setup lang="ts">
useHead({
  title: 'Hugo Mandou',
  meta: [
    { name: 'description', content: 'Développeur web fullstack à Nantes' },
    { name: 'lang', content: 'fr' },

    { property: 'og:title', content: 'Hugo Mandou' },
    { property: 'og:description', content: 'Développeur web fullstack à Nantes' },
    { property: 'og:type', content: 'website' },
  ],
})
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
}

* {
  font-family: inter, sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  padding: 0;
  color: var(--white);
}

html,
body {
  scroll-behavior: smooth;
  background-color: var(--black);
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
  letter-spacing: 4px;
  margin-right: -4px;
}
</style>
