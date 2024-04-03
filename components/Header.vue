<template>
    <header>
        <h1>Hugo<br>Mandou</h1>
        <h2>Développeur web fullstack à Nantes</h2>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url('/images/background.png');
    background-size: cover;
    background-position: center;
    position: relative;

    h1,
    h2 {
        display: inline-block;
        z-index: 0;
    }
}
</style>