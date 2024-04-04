<script setup lang="ts">
defineProps({
    error: Object,
});
</script>

<template>
    <header>
        <div class="title">
            <h1>Oops !</h1>
            <h2 v-if="error?.statusCode == 404">Cette page n'existe pas !</h2>
            <h2 v-else>error.statusMessage</h2>
        </div>
        <nuxt-link to="/" class="back">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
            </svg>
            Retour à la page principale
        </nuxt-link>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: var(--white);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;

    .title {
        text-align: center;
    }

    .back {
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 16px 20px;
        width: fit-content;
        border: 2px solid var(--white);
        border-radius: 100%;
        transition: border-color .15s ease-in-out;
        color: var(--blue);

        &:hover {
            border-color: var(--blue);
        }

        svg {
            fill: var(--blue);
            rotate: -135deg;
        }
    }
}
</style>