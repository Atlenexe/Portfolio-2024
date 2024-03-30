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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

@font-face {
  font-family: 'BagdollDisplay';
  src: url('fonts/BagdollDisplay-Regular.woff') format('woff');
}

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
  font-size: 20px;
  margin: 0;
  padding: 0;
  color: var(--white);
}

body {
  background-color: var(--black);
}

h1,
h3 {
  font-family: BagdollDisplay, sans-serif;
}

h1 {
  font-size: 90px;
  letter-spacing: 30px;
  margin-right: -36px;
  color: var(--blue);
  text-transform: uppercase;
}

h2 {
  font-size: 23px;
  color: var(--blue);
}

h3 {
  font-size: 50px;
  letter-spacing: 8px;
}
</style>
