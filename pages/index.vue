<template>
    <Header />
    <Navbar />
    <main>
        <Bio />
        <Projects />
        <Contact />
    </main>
</template>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    gap: var(--main-v-gap);
    padding: 60px var(--main-h-padding);
}
</style>

<style lang="scss">
*{
    color: var(--white);
}
</style>