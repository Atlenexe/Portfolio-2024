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
    gap: 280px;
    padding: var(--main-h-padding) 60px;
}
</style>

<style lang="scss">
*{
    color: var(--white);
}
</style>